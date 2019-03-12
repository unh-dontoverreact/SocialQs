const schedule = require("node-schedule");
const cueService = require("../cues/cueServices");

// Uses CRON based scheduling...
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
// Global job queue,  needed to stop all jobs
let jobQueue = [];

const cueScheduler = {
  startCueScheduler: function() {
    this.startAllSchedules();
  },

  stopCueScheduler: function() {
    console.log("stopping the cue scheduler");
    jobQueue.forEach(job => {
      job.cancel();
    });
    jobQueue = [];
  },

  startAllSchedules() {
    this.scheduleHourlyCues();
    this.scheduleDailyCues();
    this.scheduleMonthlyCues();
    this.scheduleAnnualCues();
    console.log("all cue reminder jobs scheduled");
  },

  // Kick off an update every hour on the hour
  scheduleHourlyCues() {
    const job = schedule.scheduleJob("0 0 0-23 * * *", this.updateHourlyCues);
    jobQueue.push(job);
  },

  // Kick off an update every night at 1:00am
  scheduleDailyCues() {
    const job = schedule.scheduleJob("0 0 1 1-31 * *", this.updateDailyCues);
    jobQueue.push(job);
  },

  // Kick off first day of each month at midnight
  scheduleMonthlyCues() {
    const job = schedule.scheduleJob("0 0 0 1 * *", this.updateMonthlyCues);
    jobQueue.push(job);
  },

  scheduleAnnualCues() {
    const job = schedule.scheduleJob("0 0 0 1 1 *", this.updateAnnualCues);
    jobQueue.push(job);
  },

  updateHourlyCues() {
    console.log("updating cues for this hour's events");
  },

  updateDailyCues() {
    console.log("updating cues for today's events");

    // First clear all the old cues
    cueService.clearAllCues();

    // Let's push some birthdays
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    console.log("scheduler:  getting birthday contacts: ", month, "/", day);
    cueService.cueContactsByBirthdate(month, day);
  },

  updateMonthlyCues() {
    console.log("updating cues for this month's events");
  },

  updateAnnualCues() {
    console.log("updating cues for this year's events");
  },

  // Test Method only -- use to fire off one event
  controlTest() {
    console.log("firing off controlled test");
    this.updateDailyCues();
  },
};

module.exports = cueScheduler;
