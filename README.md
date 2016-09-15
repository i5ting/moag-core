# moag-core

## Install

```
npm i -S moag-core
```

## Usages

```
var model = {
  entity: 'user',
  attr:{
    username: 'string',
    password: 'string'
  }
}

var opts = {
  base_path : __dirname,
  framework: 'koa2-common',
  tpl_path: __dirname + '/vendor/'
}

// main
var Generator = require('.');
var g = new Generator(model, opts);

g.start();
```