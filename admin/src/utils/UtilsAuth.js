var axios = require('axios')

var UtilsAuth = {}
UtilsAuth.logUrl = "/api/token?redirectClientURI=http://localhost:8082/oauth"
//UtilsAuth.token="Bearer mj4h25oj3kdbndvl5t730ks9ret6i8dpli66kt14tngqlniab6";
UtilsAuth.token=`Bearer ${localStorage.getItem('token')}`
UtilsAuth.authRequest = axios.create()
UtilsAuth.authRequest.defaults.headers.common['Authorization'] = UtilsAuth.token

module.exports = UtilsAuth
