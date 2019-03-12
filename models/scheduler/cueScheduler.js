const schedule = require("node-schedule");

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
    startAllSchedules();
  },

  stopCueScheduler: function() {
    console.log("stopping the cue scheduler");
    jobQueue.forEach(job => {
      job.cancel();
    });
    jobQueue = [];
  },

  startAllSchedules() {
    scheduleHourlyCues();
    scheduleDailyCues();
    scheduleMonthlyCues();
    scheduleAnnualCues();
    console.log("all cue reminder jobs scheduled");
  },

  // Minute Scheduler - purposefully excluded,  only needed for test
  scheduleMinuteCues() {
    const job = schedule.scheduleJob("* 0-59 * * * *", this.updateMinuteCues);
    jobQueue.push(job);
    console.log("scheulding job for every minte,  used for testing only");
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
  scheduleMontlyCues() {
    const job = schedule.scheduleJob("0 0 0 1 * *", this.updateMonthlyCues);
    jobQueue.push(job);
  },

  scheduleAnnualCues() {
    const job = schedule.scheduleJob("0 0 0 1 1 *", this.updateAnnualCues);
    jobQueue.push(job);
  },

  // Minute Event Handler - purposefully excluded, only needed for test
  updateMinuteCues() {
    console.log("updated minute by minute cue");
  },

  updateHourlyCues() {
    console.log("updating cues for this hour's events");
  },

  updateDailyCues() {
    console.log("updating cues for today's events");
  },

  updateMonthlyCues() {
    console.log("updating cues for this month's events");
  },

  updateAnnualCues() {
    console.log("updating cues for this year's events");
  },
};

module.exports = cueScheduler;
