// rules.js - codified business rules for identifying what events to highlght as a "nudge" or "toast"
//      ReminderPeriod:  an enumeration describing the periods supported by the rules
//      ReminderSource:  an enumeration describing the data source of the business objects for the rules
//
//      Period:  Determine how often the rule should be run
//      Source:  Determines which schema and field should be checked for the rule
//      msg   :  The string message to include the in the cue reminder

module.exports = {
  reminderPeriod: {
    HOURLY: 1,
    DAILY: 2,
    WEEKLY: 3,
    MONTHLY: 4,
    QUARTERLY: 5,
    YEARLY: 6,
    properties: {
      1: { name: "hourly", value: 1, code: "h" },
      1: { name: "daily", value: 2, code: "d" },
      1: { name: "weekly", value: 3, code: "w" },
      1: { name: "monthly", value: 4, code: "m" },
      1: { name: "quarterly", value: 5, code: "q" },
      1: { name: "yearly", value: 6, code: "a" },
    },
  },

  reminderSource: {
    EVENT: 1,
    CONTACT: 2,
    USER: 3,
    properties: {
      1: { name: "event", value: 1, code: "e" },
      1: { name: "contact", value: 2, code: "c" },
      1: { name: "user", value: 3, code: "u" },
    },
  },

  cueRule: {
    // CONTACT driven reminders
    monthlyBirthdayReminder: {
      period: reminderPeriod.MONTHLY,
      source: reminderSource.CONTACT,
      msg: "has a birthday this month",
    },

    dailyBirthdayReminder: {
      period: reminderPeriod.DAILY,
      source: reminderSource.CONTACT,
      msg: "has a birthday today",
    },

    // EVENT driven reminders
    weeklyEventReminder: {
      period: reminderPeriod.WEEKLY,
      source: reminderSource.EVENT,
      msg: "is happening this week",
    },

    dailyEventReminder: {
      period: reminderPeriod.DAILY,
      source: reminderSource.EVENT,
      msg: "is happening today",
    },
  },
};
