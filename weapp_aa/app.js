"use strict";

var _core = _interopRequireDefault(require('./vendor.js')(0));

var _eventHub = _interopRequireDefault(require('./common/eventHub.js'));

var _x = _interopRequireDefault(require('./vendor.js')(3));

var _usePromisify = _interopRequireDefault(require('./vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].use(_usePromisify["default"]);

_core["default"].app({
  onLaunch: function onLaunch() {
    _core["default"].wx.login().then(function (res) {
      console.log('login: ', res);
    });
  },
  methods: {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {}, refs: undefined });