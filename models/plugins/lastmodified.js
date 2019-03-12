// lastModified.js - plugin to add last modified date to all of the schemas
module.exports = exports = function lastModifiedPlugin(schema, options) {
  schema.add({ lastModified: Date });

  schema.pre("save", function(next) {
    this.lastModified = new Date();
    next();
  });

  if (options && options.index) {
    schema.path("lastModified").index(options.index);
  }
};
