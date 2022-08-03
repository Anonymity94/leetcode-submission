// 汇总每周的周报
import * as fs from 'fs';
import * as path from 'path';
import { getISOWeekNumber, getToday, getWeekStartAndEnd, getYesterday } from './utils';
import type { IArchivesLog } from './typings';

const dayjs = require('dayjs');
const users = require('../data/common/user.json');

// 当天日期
const now = dayjs();
// 由于 GitHub Actions 定时器启动不准，这里做下兼容处理
// 定时器不会延迟太久，所以这里仅判断跨天的的即可
// 如果启动时间在周一凌晨 1 点以内的话，就汇总上周的记录
let queryDate = getToday();
if (now.day() === 1 && now.hour() < 1) {
  queryDate = getYesterday();
}
// 当前日所在的ISO周数
const curISOWeekNumber = getISOWeekNumber(queryDate);
const dateList = getWeekStartAndEnd(queryDate);

// 判断本周属于哪个年度，以当前周四所在的年份为准
const weekOfYear = new Date(dateList[3]).getFullYear();
// 周汇总的文件名称
const weekRollupFileName = `${weekOfYear}年第${curISOWeekNumber}周(${dateList[0]}_${dateList[dateList.length - 1]})`;

/**
 * 汇总周报
 */
export const weekRollup = () => {
  // 生成用户排名信息
  const summaryList: (IArchivesLog & {
    curWeekLogs: IArchivesLog['logs'];
    /** 新题的数量  */
    newQuestionsTotal: number;
    /** 排名 */
    ranking?: number;
  })[] = [];
  for (let i = 0; i < users.length; i++) {
    const { userName, userId, hideInWeek = false } = users[i];
    // 跳过周报屏蔽的同学
    if (hideInWeek) continue;
    const archiveFilePath = path.resolve(__dirname, `../data/records/${userId}.json`);

    const userArchivesData: IArchivesLog = fs.existsSync(archiveFilePath)
      ? JSON.parse(fs.readFileSync(archiveFilePath, 'utf8'))
      : {
          // 大概率不会有找不到用户文件的情况
          // 这里只是简单的保护一下
          userId,
          userName,
        };
    // 读取本周的数据
    const curWeekLogs = (userArchivesData.logs ?? []).filter((el) => dateList.includes(el.date));

    // 只统计新题目的数量
    summaryList.push({
      ...userArchivesData,
      curWeekLogs,
      newQuestionsTotal: curWeekLogs.reduce((sum, item) => sum + item.questionIds.length, 0),
    });
  }

  // 倒序排列
  summaryList.sort((a, b) => b.newQuestionsTotal - a.newQuestionsTotal);
  // 根据题目数量进行排名，相同题目数量的，排名相同
  let rankNumber = 1;
  for (let index = 0; index < summaryList.length; index++) {
    const summary = summaryList[index];
    if (index > 0 && summary.newQuestionsTotal !== summaryList[index - 1].newQuestionsTotal) {
      rankNumber += 1;
    }
    summary.ranking = rankNumber;
  }

  const weekFilePath = path.resolve(__dirname, `../data/weeks/${weekRollupFileName}.json`);
  const json = {
    title: `${weekRollupFileName} 周报`,
    weekly: dateList,
    updatedAt: dayjs().format(),
    records: summaryList.map((user) => {
      return {
        userId: user.userId,
        userName: user.userName,
        homepage: user.homepage,
        weekly: [
          ...dateList.map((date) => {
            const dateLog = user.curWeekLogs.find((row) => date === row.date);
            if (!dateLog) return '';
            return dateLog.questionIds.join('');
          }),
        ],
        newQuestionsTotal: user.newQuestionsTotal,
        ranking: user.ranking,
      };
    }),
  };
  // 创建文件
  fs.writeFileSync(weekFilePath, JSON.stringify(json), { encoding: 'utf8' });
};

weekRollup();
