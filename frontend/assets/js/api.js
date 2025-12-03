// Simple API helper. Set BASE_URL to your deployed backend URL in production.
var BASE_URL = (typeof window !== 'undefined' && window.location.hostname === 'localhost') ? 'http://localhost:5000/api' : (window.__BACKEND_URL__ || 'https://REPLACE_WITH_BACKEND_URL/api');

var api = {
  get: async function(path){
    var res = await fetch(BASE_URL + path);
    if(!res.ok) throw new Error('API error');
    return res.json();
  },
  post: async function(path, body, opts){
    opts = opts || {};
    var headers = { 'Content-Type': 'application/json' };
    if(opts.auth) headers['Authorization'] = 'Bearer ' + opts.auth;
    var res = await fetch(BASE_URL + path, { method: 'POST', headers: headers, body: JSON.stringify(body) });
    if(!res.ok){ var t = await res.text(); throw new Error(t); }
    return res.json();
  },
  del: async function(path, opts){
    opts = opts || {};
    var headers = {};
    if(opts.auth) headers['Authorization'] = 'Bearer ' + opts.auth;
    var res = await fetch(BASE_URL + path, { method: 'DELETE', headers: headers });
    if(!res.ok) throw new Error('API error');
    return res.json();
  }
};
