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


## TODO

目前待解决的最大问题在于模型生成，可能会有些变化，也就是说在model参数处要提供更多定制。

- 自定义数据字段
- 数据类型问题

### for toshihiko

比如https://github.com/moajs/moa2-toshihiko/blob/master/app/models/user.js


```
"use strict";

var T = require("toshihiko");

const Toshihiko = require('toshihiko')

/**
 * Created by alfred on June 8th 2016, 8:57:06 pm.
 */

var connection = require('../../db')


var User = connection.define('user', [
  { name: "id", column: "id", primaryKey: true, type: Toshihiko.Type.Integer, autoIncrement: true },
  {
    name: 'username', 
    type: Toshihiko.Type.String
  },
   {
    name: 'password', 
    type: Toshihiko.Type.String
  },
   {
    name: 'avatar', 
    type: Toshihiko.Type.String
  },
   {
    name: 'phone_number', 
    type: Toshihiko.Type.String
  },
  {
    name: 'address', 
    type: Toshihiko.Type.String
  }
]);

console.log(User)
 
module.exports = User;
```

### for sequelize

比如
https://github.com/moajs/moa2-sequelize/blob/master/app/models/user.js

```
"use strict";

var T = require("toshihiko");

const Toshihiko = require('toshihiko')

/**
 * Created by alfred on June 8th 2016, 8:57:06 pm.
 */

var connection = require('../../db')


var User = connection.define('user', [
  { name: "id", column: "id", primaryKey: true, type: Toshihiko.Type.Integer, autoIncrement: true },
  {
    name: 'username', 
    type: Toshihiko.Type.String
  },
   {
    name: 'password', 
    type: Toshihiko.Type.String
  },
   {
    name: 'avatar', 
    type: Toshihiko.Type.String
  },
   {
    name: 'phone_number', 
    type: Toshihiko.Type.String
  },
  {
    name: 'address', 
    type: Toshihiko.Type.String
  }
]);

console.log(User)
 
module.exports = User;
```

### for mongoose

比如

https://github.com/moajs/moa2-mongo/blob/master/app/models/user.js


```
"use strict";

/**
 * Created by alfred on June 8th 2016, 8:57:06 pm.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

var userSchema = new Schema(
    {"username":"String","password":"String","avatar":"String","phone_number":"String","address":"String"}
);

var User = mongoose.model('User', userSchema);
var UserDao = new MongooseDao(User);
 
module.exports = UserDao;
```

