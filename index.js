var url = require('url')
var qs = require('querystring');
module.exports = function() {
  if (arguments.length === 0) {
    throw ('miss params');
    return;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    var paramsString = "";
    if (arguments[1]) {
      if (typeof arguments[1] === "string") {
        paramsString = qs.stringify(qs.parse(arguments[1]));
      } else if (typeof arguments[1] === 'object') {
        paramsString = qs.stringify(arguments[1]);
      } else {
        throw ('prams type error');
        return;
      }
      var baseUrl = url.parse(arguments[0], true);
      var urlQueryString = qs.stringify(baseUrl.query);
      var queryString = (paramsString || urlQueryString) ? ((urlQueryString && paramsString) ? ("?" + urlQueryString + "&" + paramsString) : (urlQueryString ? ("?" + urlQueryString) : (paramsString ? ("?" + paramsString) : ""))) : "";
      return baseUrl.protocol + "//" + baseUrl.host + (baseUrl.port ? (":" + baseUrl.port) : "") + baseUrl.pathname + queryString + (baseUrl.hash ? baseUrl.hash : "");
    } else {
      return arguments[0]
    }
  }
};
