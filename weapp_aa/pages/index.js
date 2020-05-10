"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    topics: [{
      id: 1,
      title: '测试1',
      body: 'larabbs 测试内容1'
    }, {
      id: 2,
      title: '测试2',
      body: 'larabbs 测试内容2'
    }, {
      id: 3,
      title: '测试3',
      body: 'larabbs 测试内容3'
    }, {
      id: 4,
      title: '测试4',
      body: 'larabbs 测试内容4'
    }]
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {}, refs: undefined });