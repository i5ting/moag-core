
var model = {
  base_path : __dirname,
  entity: 'entity',
  attr:{}
}

var opts = {
  framework: 'express'
}


// main
var Generator = require('../index');
var g = new Generator(model, opts);

g.start();