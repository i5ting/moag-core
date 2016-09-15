
var model = {
  base_path : __dirname,
  entity: 'user',
  attr:{
    username: 'string',
    password: 'string'
  }
}

var opts = {
  framework: 'koa2-common',
  tpl_path: __dirname + '/vendor/'
}


// main
var Generator = require('.');
var g = new Generator(model, opts);

g.start();