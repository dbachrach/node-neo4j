// Generated by CoffeeScript 1.8.0
(function() {
  var Index;

  module.exports = Index = (function() {
    function Index(opts) {
      if (opts == null) {
        opts = {};
      }
      this.label = opts.label, this.property = opts.property;
    }

    Index.prototype.equals = function(other) {
      return (other instanceof Index) && (this.label === other.label) && (this.property === other.property);
    };

    Index.prototype.toString = function() {
      return "INDEX ON :" + this.label + "(" + this.property + ")";
    };

    Index._fromRaw = function(obj) {
      var label, property, property_keys;
      label = obj.label, property_keys = obj.property_keys;
      if (property_keys.length > 1) {
        console.warn("Index (on :" + label + ") with " + property_keys.length + " property keys encountered: " + (property_keys.join(', ')) + ". node-neo4j v" + lib.version + " doesn’t know how to handle these. Continuing with only the first one.");
      }
      property = property_keys[0];
      return new Index({
        label: label,
        property: property
      });
    };

    return Index;

  })();

}).call(this);

//# sourceMappingURL=Index.js.map
