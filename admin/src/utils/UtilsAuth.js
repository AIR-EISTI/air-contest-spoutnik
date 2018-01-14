var axios = require('axios');

var UtilsAuth = {};
UtilsAuth.logUrl = "/api/token?redirectClientURI=http://localhost:8082/oauth";
UtilsAuth.token="97f35dd9-75a3-49d4-bdc7-b91008484109";
UtilsAuth.authRequest = axios.create();
UtilsAuth.authRequest.defaults.headers.common['Authorization'] = UtilsAuth.token;

module.exports = UtilsAuth;
