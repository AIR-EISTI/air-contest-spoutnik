var axios = require('axios');

var UtilsAuth = {};
UtilsAuth.logUrl = "/api/token?redirectClientURI=http://localhost:8082/oauth";
UtilsAuth.token="1tb7gm29814v174srr539sgvttq72ents1ck0pl6kc5fb4kp0h";
UtilsAuth.authRequest = axios.create();
UtilsAuth.authRequest.defaults.headers.common['Authorization'] = UtilsAuth.token;

module.exports = UtilsAuth;
