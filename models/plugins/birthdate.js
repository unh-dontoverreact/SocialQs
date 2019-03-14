// birthdate.js - plugin to parse month and day out of birth date to contact-like schemas
//
const moment = require("moment");

// date manipulation methods to break apart dates into Month, Day and Year, returned as an object {month, day, year}
function parseDate(dateObj) {
  const check = moment(dateObj).utc();
  const month = check.format("MM");
  const day = check.format("DD");
  const year = check.format("YYYY");

  console.log("month/day/year parsed: ", month, ", ", day, ", ", year);

  return { day: day, month: month, year: year };
}

function saveParsedDate(targetSchema, parsedDateObj) {
  console.log("saving parsed date: ", parsedDateObj);
  targetSchema.birthDay = parsedDateObj.day;
  targetSchema.birthMonth = parsedDateObj.month;
}

// MAIN EXPORT METHODS - birthdatePlugin()- called by contact schema before saving
module.exports = exports = function birthdatePlugin(schema, options) {
  schema.add({ birthDay: Number, birthMonth: Number });

  // "Save Hook" - called before saving to parse out the birthdate's day & month to enable efficient scheduler queries
  schema.pre("save", async function(next) {
    console.log("Save pre hook called for contact");

    const parsedDate = await parseDate(this.birthDate);
    await saveParsedDate(this, parsedDate);
    next();
  });

  if (options && options.index) {
    schema.path("birthDay").index(options.index);
    schema.path("birthMonth").index(options.index);
  }
};
