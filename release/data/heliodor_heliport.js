(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // scripts/const.ts
  var heliportWindow, MOBILE_USER_AGENT_REGS, IPHONE_USER_AGENT_REGS, IOS_VER_15;
  var init_const = __esm({
    "scripts/const.ts"() {
      "use strict";
      heliportWindow = window;
      MOBILE_USER_AGENT_REGS = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      IPHONE_USER_AGENT_REGS = /iPhone|iPod/i;
      IOS_VER_15 = 1500;
    }
  });

  // scripts/configs/development.ts
  var devConfig;
  var init_development = __esm({
    "scripts/configs/development.ts"() {
      "use strict";
      devConfig = {
        skywayKey: "development",
        socketIOUrl: "development",
        printLog: true,
        vketCloudDomain: "http://labtest.vketcloud.com",
        uploadApiDomain: "https://staging.asset-upload.hikky.dev",
        accountApiDomain: "https://account.vket.dev",
        authClientId: "Kl2dnR0q3PlILGG1-A7oXwmIJNM-tNdYm82jcq-Jr_c",
        vrAdDomain: "https://api-6kueossvhq-an.a.run.app",
        resourceApiDomain: "https://resources.api.hikky.dev",
        roomDomain: "https://proto.vcb.hikky.dev"
      };
    }
  });

  // scripts/configs/production.ts
  var init_production = __esm({
    "scripts/configs/production.ts"() {
      "use strict";
    }
  });

  // scripts/configs/index.ts
  var getConfig;
  var init_configs = __esm({
    "scripts/configs/index.ts"() {
      "use strict";
      init_const();
      init_development();
      init_production();
      getConfig = function() {
        if (false) {
          return prodConfig;
        }
        return devConfig;
      };
      heliportWindow.getConfig = getConfig;
    }
  });

  // scripts/utils/debug.ts
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  var config, formatDate, getNowDate, debugLog;
  var init_debug = __esm({
    "scripts/utils/debug.ts"() {
      "use strict";
      init_configs();
      config = getConfig();
      formatDate = function(date) {
        return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate(), " ").concat(date.getHours(), ":").concat(date.getMinutes(), " ").concat(date.getSeconds());
      };
      getNowDate = function() {
        var date = new Date();
        return formatDate(date);
      };
      debugLog = function(text) {
        for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          optionalParams[_key - 1] = arguments[_key];
        }
        var _console;
        if (!config.printLog) {
          return;
        }
        (_console = console).log.apply(_console, [
          "[ ".concat(getNowDate(), " ] ").concat(text)
        ].concat(_toConsumableArray(optionalParams)));
      };
    }
  });

  // scripts/modules/dom.ts
  var getMainCanvas, getConfigUrl, getConfigUrlText, getUserName, getUserNameText, getGUIDebug, getGUIDebugTab, getMsg, getLocalText, getScreenShotContainer, getScreenShotModal, getScreenShotModalCloseButton, reflectCanvasSize;
  var init_dom = __esm({
    "scripts/modules/dom.ts"() {
      "use strict";
      init_const();
      getMainCanvas = function() {
        return document.getElementById("canvas");
      };
      getConfigUrl = function() {
        return document.getElementById("configurl");
      };
      getConfigUrlText = function() {
        return document.getElementById("configurl-text");
      };
      getUserName = function() {
        return document.getElementById("username");
      };
      getUserNameText = function() {
        return document.getElementById("username-text");
      };
      getGUIDebug = function() {
        return document.getElementById("GUIdebug");
      };
      getGUIDebugTab = function() {
        return document.getElementById("GUIdebugTab");
      };
      getMsg = function() {
        return document.getElementById("msg");
      };
      getLocalText = function() {
        return document.getElementById("js-local-text");
      };
      getScreenShotContainer = function() {
        return document.querySelector("#__ss_modal");
      };
      getScreenShotModal = function() {
        return document.querySelector("#__ss_modal-dialog-btn_open_ss");
      };
      getScreenShotModalCloseButton = function() {
        return document.querySelector("#__ss_modal-dialog-btn_close");
      };
      reflectCanvasSize = function() {
        if (!heliportWindow.g_ReflectCanvasSizeMode)
          return;
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if (width <= 0 || height <= 0) {
          return;
        }
        var mainCanvas = getMainCanvas();
        if (mainCanvas !== null) {
          mainCanvas.width = width;
          mainCanvas.height = height;
        }
      };
    }
  });

  // scripts/modules/screenShotModal.ts
  var container, modal, closeButton, hideScreenShotModal, initializeScreenShotModal, showScreenShotModal;
  var init_screenShotModal = __esm({
    "scripts/modules/screenShotModal.ts"() {
      "use strict";
      init_debug();
      init_dom();
      container = getScreenShotContainer();
      modal = getScreenShotModal();
      closeButton = getScreenShotModalCloseButton();
      hideScreenShotModal = function() {
        if (container === null) {
          debugLog("[ hideScreenShotModal ] ScreenShotContainer not found so noop");
          return;
        }
        container.style.visibility = "hidden";
      };
      initializeScreenShotModal = function() {
        if (modal !== null) {
          modal.removeEventListener("click", hideScreenShotModal);
          modal.addEventListener("click", hideScreenShotModal);
        }
        if (closeButton !== null) {
          closeButton.removeEventListener("click", hideScreenShotModal);
          closeButton.addEventListener("click", hideScreenShotModal);
        }
      };
      showScreenShotModal = function() {
        if (container === null) {
          debugLog("[ showScreenShotModal ] ScreenShotContainer not found so noop");
          return;
        }
        container.style.visibility = "visible";
      };
    }
  });

  // scripts/deviceFeatures/configs.ts
  var loadConfig;
  var init_configs2 = __esm({
    "scripts/deviceFeatures/configs.ts"() {
      "use strict";
      init_const();
      init_screenShotModal();
      loadConfig = function() {
        heliportWindow.g_ReflectCanvasSizeMode = true;
        initializeScreenShotModal();
      };
    }
  });

  // scripts/composables/useAnalytics.ts
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
  var dataLayer, setAnalytics, setGtag, useAnalytics;
  var init_useAnalytics = __esm({
    "scripts/composables/useAnalytics.ts"() {
      "use strict";
      init_const();
      init_debug();
      dataLayer = heliportWindow.dataLayer;
      setAnalytics = function(ev, aName, params) {
        if (dataLayer === void 0) {
          debugLog("[ setAnalytics ] dataLayer is undefined");
          return;
        }
        debugLog(ev, aName, JSON.stringify(params));
        var data = _objectSpread({
          event: ev
        }, params);
        dataLayer.push(data);
      };
      setGtag = function(aName, params) {
        if (typeof heliportWindow.gtag === "function") {
          debugLog("[ setGtag ] set ".concat(aName, " event for params = ").concat(JSON.stringify(params)));
          heliportWindow.gtag("event", aName, params);
        }
      };
      useAnalytics = function() {
        return {
          setAnalytics,
          setGtag
        };
      };
    }
  });

  // scripts/deviceFeatures/useStorage.ts
  var getLocalStorageValue, setLocalStorageValue, getSessionStorageValue, setSessionStorageValue, useStorage;
  var init_useStorage = __esm({
    "scripts/deviceFeatures/useStorage.ts"() {
      "use strict";
      getLocalStorageValue = function(key) {
        return localStorage.getItem(key);
      };
      setLocalStorageValue = function(key, value) {
        return localStorage.setItem(key, value);
      };
      getSessionStorageValue = function(key) {
        return sessionStorage.getItem(key);
      };
      setSessionStorageValue = function(key, value) {
        return sessionStorage.setItem(key, value);
      };
      useStorage = function() {
        return {
          getLocalStorageValue,
          setLocalStorageValue,
          getSessionStorageValue,
          setSessionStorageValue
        };
      };
    }
  });

  // scripts/modules/auth.ts
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator, validateAuth;
  var init_auth = __esm({
    "scripts/modules/auth.ts"() {
      "use strict";
      init_useAuth();
      init_useStorage();
      __generator = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      validateAuth = function() {
        var _ref = _asyncToGenerator(function() {
          var isLoggedIn2, idToken;
          return __generator(this, function(_state) {
            switch (_state.label) {
              case 0:
                return [
                  4,
                  useAuth().isLoggedIn()
                ];
              case 1:
                isLoggedIn2 = _state.sent();
                if (!isLoggedIn2) {
                  return [
                    2,
                    ""
                  ];
                }
                idToken = useStorage().getSessionStorageValue("id-token");
                if (idToken === null) {
                  return [
                    2,
                    ""
                  ];
                }
                return [
                  2,
                  idToken
                ];
            }
          });
        });
        return function validateAuth2() {
          return _ref.apply(this, arguments);
        };
      }();
    }
  });

  // scripts/services/api.ts
  function asyncGeneratorStep2(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator2(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    }
    return target;
  }
  var __generator2, getCustomHeader, fetchApi;
  var init_api = __esm({
    "scripts/services/api.ts"() {
      "use strict";
      __generator2 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      getCustomHeader = function(accessToken) {
        if (!accessToken)
          return {};
        return {
          Authorization: "Bearer ".concat(accessToken),
          Accept: "application/json"
        };
      };
      fetchApi = function() {
        var _ref = _asyncToGenerator2(function(method, url) {
          var sendData, token, fetchParams, customHeader;
          var _arguments = arguments;
          return __generator2(this, function(_state) {
            sendData = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {}, token = _arguments.length > 3 && _arguments[3] !== void 0 ? _arguments[3] : void 0;
            fetchParams = {
              method,
              mode: "cors",
              headers: {
                "Content-Type": "application/json;charset=UTF-8"
              },
              body: void 0
            };
            if (method.toLowerCase() !== "get") {
              fetchParams.body = JSON.stringify(sendData);
            }
            if (token) {
              customHeader = getCustomHeader(token);
              fetchParams.headers = _objectSpread2({}, fetchParams.headers, customHeader);
            }
            return [
              2,
              fetch(url, fetchParams)
            ];
          });
        });
        return function fetchApi2(method, url) {
          return _ref.apply(this, arguments);
        };
      }();
    }
  });

  // scripts/services/repositories/assetRepository.ts
  function asyncGeneratorStep3(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator3(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep3(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep3(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator3, config2, domain, AssetsRepository;
  var init_assetRepository = __esm({
    "scripts/services/repositories/assetRepository.ts"() {
      "use strict";
      init_configs();
      init_api();
      __generator3 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      config2 = getConfig();
      domain = config2.uploadApiDomain;
      AssetsRepository = {
        get: {
          getAssets: function getAssets(idToken) {
            return _asyncToGenerator3(function() {
              return __generator3(this, function(_state) {
                return [
                  2,
                  fetchApi("get", "".concat(domain, "/assets?setting_label=vrm"), void 0, idToken)
                ];
              });
            })();
          },
          getAssetByToken: function getAssetByToken() {
            var downloadToken = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", password = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            return _asyncToGenerator3(function() {
              return __generator3(this, function(_state) {
                return [
                  2,
                  fetchApi("get", "".concat(domain, "/tokens/").concat(downloadToken, "?password=").concat(password))
                ];
              });
            })();
          }
        },
        post: {
          postAsset: function postAsset(idToken, name) {
            var description = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
            return _asyncToGenerator3(function() {
              return __generator3(this, function(_state) {
                return [
                  2,
                  fetchApi("post", "".concat(domain, "/assets"), {
                    name,
                    description
                  }, idToken)
                ];
              });
            })();
          },
          postAssetToken: function postAssetToken(idToken, uuid) {
            var password = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
            return _asyncToGenerator3(function() {
              return __generator3(this, function(_state) {
                return [
                  2,
                  fetchApi("post", "".concat(domain, "/tokens"), {
                    uuid,
                    password
                  }, idToken)
                ];
              });
            })();
          }
        },
        put: {},
        delete: {}
      };
    }
  });

  // scripts/services/repositories/authRepository.ts
  function asyncGeneratorStep4(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator4(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep4(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep4(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator4, config3, domain2, getPrefix, postPrefix, AuthRepository;
  var init_authRepository = __esm({
    "scripts/services/repositories/authRepository.ts"() {
      "use strict";
      init_configs();
      init_api();
      __generator4 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      config3 = getConfig();
      domain2 = config3.accountApiDomain;
      getPrefix = "/api/v1";
      postPrefix = "/oauth";
      AuthRepository = {
        get: {
          fetchMyProfile: function fetchMyProfile(accessToken) {
            return _asyncToGenerator4(function() {
              return __generator4(this, function(_state) {
                return [
                  2,
                  fetchApi("get", "".concat(domain2).concat(getPrefix, "/me"), void 0, accessToken)
                ];
              });
            })();
          }
        },
        post: {
          issueIdToken: function issueIdToken(clientId2, redirectUri2, refreshToken) {
            return _asyncToGenerator4(function() {
              return __generator4(this, function(_state) {
                return [
                  2,
                  fetchApi("post", "".concat(domain2).concat(postPrefix, "/token"), {
                    grant_type: "refresh_token",
                    client_id: clientId2,
                    redirect_uri: redirectUri2,
                    refresh_token: refreshToken
                  }, void 0)
                ];
              });
            })();
          }
        },
        put: {},
        delete: {}
      };
    }
  });

  // scripts/services/repositories/profileRepository.ts
  function asyncGeneratorStep5(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator5(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep5(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep5(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator5, config4, LABO_PLATFORM_CODE, domain3, baseUrl, ProfileRepository;
  var init_profileRepository = __esm({
    "scripts/services/repositories/profileRepository.ts"() {
      "use strict";
      init_configs();
      init_api();
      __generator5 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      config4 = getConfig();
      LABO_PLATFORM_CODE = "labo";
      domain3 = config4.accountApiDomain;
      baseUrl = "".concat(domain3, "/api/").concat(LABO_PLATFORM_CODE);
      ProfileRepository = {
        get: {
          getProfile: function() {
            var _ref = _asyncToGenerator5(function(userId) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("get", "".concat(baseUrl, "/user/profiles/").concat(userId))
                ];
              });
            });
            return function(userId) {
              return _ref.apply(this, arguments);
            };
          }(),
          getMyProfile: function() {
            var _ref = _asyncToGenerator5(function(idToken) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("get", "".concat(baseUrl, "/user/profiles"), void 0, idToken)
                ];
              });
            });
            return function(idToken) {
              return _ref.apply(this, arguments);
            };
          }(),
          getGuestProfile: function() {
            var _ref = _asyncToGenerator5(function(uuid) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("get", "".concat(baseUrl, "/user/guest_profiles/").concat(uuid))
                ];
              });
            });
            return function(uuid) {
              return _ref.apply(this, arguments);
            };
          }()
        },
        post: {
          postProfile: function() {
            var _ref = _asyncToGenerator5(function(idToken, name) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("post", "".concat(baseUrl, "/user/profiles"), {
                    name
                  }, idToken)
                ];
              });
            });
            return function(idToken, name) {
              return _ref.apply(this, arguments);
            };
          }(),
          postGuestProfile: function() {
            var _ref = _asyncToGenerator5(function(uuid, name) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("post", "".concat(baseUrl, "/user/guest_profiles"), {
                    uuid,
                    name
                  })
                ];
              });
            });
            return function(uuid, name) {
              return _ref.apply(this, arguments);
            };
          }(),
          postProfileList: function() {
            var _ref = _asyncToGenerator5(function(userIds) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("post", "".concat(baseUrl, "/user/profiles/list"), {
                    userIds
                  })
                ];
              });
            });
            return function(userIds) {
              return _ref.apply(this, arguments);
            };
          }(),
          postGuestProfileList: function(uuids) {
            return fetchApi("post", "".concat(baseUrl, "/user/guest_profiles/list"), {
              uuids
            });
          }
        },
        put: {
          putProfile: function() {
            var _ref = _asyncToGenerator5(function(idToken, name, introduction) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("put", "".concat(baseUrl, "/user/profiles"), {
                    name,
                    introduction
                  }, idToken)
                ];
              });
            });
            return function(idToken, name, introduction) {
              return _ref.apply(this, arguments);
            };
          }(),
          putProfileIcon: function() {
            var _ref = _asyncToGenerator5(function(idToken, icon) {
              var formData, fetchParams;
              return __generator5(this, function(_state) {
                formData = new FormData();
                formData.append("icon", icon);
                fetchParams = {
                  method: "put",
                  headers: {
                    Authorization: "Bearer ".concat(idToken)
                  },
                  body: formData
                };
                return [
                  2,
                  fetch("".concat(baseUrl, "/user/profiles"), fetchParams)
                ];
              });
            });
            return function(idToken, icon) {
              return _ref.apply(this, arguments);
            };
          }(),
          putGuestProfile: function() {
            var _ref = _asyncToGenerator5(function(uuid, name, introduction) {
              return __generator5(this, function(_state) {
                return [
                  2,
                  fetchApi("put", "".concat(baseUrl, "/user/guest_profiles/").concat(uuid), {
                    name,
                    introduction
                  })
                ];
              });
            });
            return function(uuid, name, introduction) {
              return _ref.apply(this, arguments);
            };
          }(),
          putGuestProfileIcon: function() {
            var _ref = _asyncToGenerator5(function(uuid, icon) {
              var formData, fetchParams;
              return __generator5(this, function(_state) {
                formData = new FormData();
                formData.append("icon", icon);
                fetchParams = {
                  method: "put",
                  body: formData
                };
                return [
                  2,
                  fetch("".concat(baseUrl, "/user/guest_profiles/").concat(uuid), fetchParams)
                ];
              });
            });
            return function(uuid, icon) {
              return _ref.apply(this, arguments);
            };
          }()
        },
        delete: {}
      };
    }
  });

  // scripts/services/repositories/roomRepository.ts
  function asyncGeneratorStep6(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator6(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep6(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep6(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator6, config5, domain4, commonCallback, RoomRepository;
  var init_roomRepository = __esm({
    "scripts/services/repositories/roomRepository.ts"() {
      "use strict";
      init_configs();
      init_api();
      __generator6 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      config5 = getConfig();
      domain4 = config5.roomDomain;
      commonCallback = function(fetched, option) {
        if (fetched.status === 200 && option.done !== void 0) {
          option.done();
          return fetched;
        }
        if (fetched.status !== 200 && option.error !== void 0) {
          option.error();
        }
        return fetched;
      };
      RoomRepository = {
        get: {
          getActiveRooms: function getActiveRooms(worldId, option) {
            return _asyncToGenerator6(function() {
              var fetched;
              return __generator6(this, function(_state) {
                switch (_state.label) {
                  case 0:
                    if (worldId === void 0 || worldId === null || worldId.length === 0) {
                      return [
                        2,
                        null
                      ];
                    }
                    return [
                      4,
                      fetchApi("get", "".concat(domain4, "/rooms/world/").concat(worldId))
                    ];
                  case 1:
                    fetched = _state.sent();
                    return [
                      2,
                      commonCallback(fetched, option)
                    ];
                }
              });
            })();
          },
          getRandomRoom: function getRandomRoom(worldId, option) {
            return _asyncToGenerator6(function() {
              var fetched;
              return __generator6(this, function(_state) {
                switch (_state.label) {
                  case 0:
                    if (worldId === void 0 || worldId === null || worldId.length === 0) {
                      return [
                        2,
                        null
                      ];
                    }
                    return [
                      4,
                      fetchApi("get", "".concat(domain4, "/rooms/random/").concat(worldId))
                    ];
                  case 1:
                    fetched = _state.sent();
                    return [
                      2,
                      commonCallback(fetched, option)
                    ];
                }
              });
            })();
          },
          getRoom: function getRoom(roomId, option) {
            return _asyncToGenerator6(function() {
              var worldId, fetched;
              return __generator6(this, function(_state) {
                switch (_state.label) {
                  case 0:
                    if (roomId === void 0 || roomId === null || roomId.length === 0) {
                      return [
                        2,
                        null
                      ];
                    }
                    worldId = option.world_id || "";
                    return [
                      4,
                      fetchApi("get", "".concat(domain4, "/rooms/").concat(roomId, "/").concat(worldId))
                    ];
                  case 1:
                    fetched = _state.sent();
                    return [
                      2,
                      commonCallback(fetched, option)
                    ];
                }
              });
            })();
          },
          getRoomStatus: function getRoomStatus(roomId, option) {
            return _asyncToGenerator6(function() {
              var fetched;
              return __generator6(this, function(_state) {
                switch (_state.label) {
                  case 0:
                    if (roomId === void 0 || roomId === null || roomId.length === 0) {
                      return [
                        2,
                        null
                      ];
                    }
                    return [
                      4,
                      fetchApi("get", "".concat(domain4, "/rooms/").concat(roomId, "/status"))
                    ];
                  case 1:
                    fetched = _state.sent();
                    return [
                      2,
                      commonCallback(fetched, option)
                    ];
                }
              });
            })();
          }
        },
        post: {
          createNewRoom: function createNewRoom(worldId, option) {
            return _asyncToGenerator6(function() {
              var fetched;
              return __generator6(this, function(_state) {
                switch (_state.label) {
                  case 0:
                    if (worldId === void 0 || worldId === null || worldId.length === 0) {
                      return [
                        2,
                        null
                      ];
                    }
                    return [
                      4,
                      fetchApi("post", "".concat(domain4, "/rooms"), {
                        world_id: worldId
                      })
                    ];
                  case 1:
                    fetched = _state.sent();
                    return [
                      2,
                      commonCallback(fetched, option)
                    ];
                }
              });
            })();
          },
          sendHeartbeat: function sendHeartbeat(roomId, playerCount, option) {
            return _asyncToGenerator6(function() {
              var fetched;
              return __generator6(this, function(_state) {
                switch (_state.label) {
                  case 0:
                    if (roomId === void 0 || roomId === null || roomId.length === 0) {
                      return [
                        2,
                        null
                      ];
                    }
                    return [
                      4,
                      fetchApi("post", "".concat(domain4, "/rooms/").concat(roomId, "/heartbeat"), {
                        player_count: playerCount
                      })
                    ];
                  case 1:
                    fetched = _state.sent();
                    return [
                      2,
                      commonCallback(fetched, option)
                    ];
                }
              });
            })();
          }
        },
        put: {},
        delete: {
          cancelReserveRoom: function cancelReserveRoom(roomId, adminKey, option) {
            return _asyncToGenerator6(function() {
              var fetched;
              return __generator6(this, function(_state) {
                switch (_state.label) {
                  case 0:
                    if (roomId === void 0 || roomId === null || roomId.length === 0) {
                      return [
                        2,
                        null
                      ];
                    }
                    return [
                      4,
                      fetchApi("delete", "".concat(domain4, "/rooms/").concat(roomId, "/cancel_reserve"), {
                        admin_key: adminKey
                      })
                    ];
                  case 1:
                    fetched = _state.sent();
                    return [
                      2,
                      commonCallback(fetched, option)
                    ];
                }
              });
            })();
          }
        }
      };
    }
  });

  // scripts/services/repositories/vrAdRepository.ts
  function asyncGeneratorStep7(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator7(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep7(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep7(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator7, config6, domain5, createPath, VrAdRepository;
  var init_vrAdRepository = __esm({
    "scripts/services/repositories/vrAdRepository.ts"() {
      "use strict";
      init_configs();
      init_api();
      __generator7 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      config6 = getConfig();
      domain5 = config6.vrAdDomain;
      createPath = function(worldId) {
        return "".concat(domain5, "/v1/ads?world_id=").concat(worldId);
      };
      VrAdRepository = {
        get: {
          getAdList: function getAdList(worldId) {
            return _asyncToGenerator7(function() {
              return __generator7(this, function(_state) {
                return [
                  2,
                  fetchApi("get", createPath(worldId))
                ];
              });
            })();
          }
        },
        post: {},
        put: {},
        delete: {}
      };
    }
  });

  // scripts/services/factory.ts
  var repositories, factory;
  var init_factory = __esm({
    "scripts/services/factory.ts"() {
      "use strict";
      init_assetRepository();
      init_authRepository();
      init_profileRepository();
      init_roomRepository();
      init_vrAdRepository();
      repositories = {
        assets: AssetsRepository,
        auth: AuthRepository,
        profile: ProfileRepository,
        room: RoomRepository,
        vrAd: VrAdRepository
      };
      factory = {
        get: function(name) {
          return repositories[name];
        }
      };
    }
  });

  // scripts/composables/useAuth.ts
  function asyncGeneratorStep8(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator8(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep8(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep8(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator8, config7, clientId, redirectUri, authRepository, _decode, isAliveRefreshToken, _isAliveIdToken, _setIdToken, isLoggedIn, getMyProfile, useAuth;
  var init_useAuth = __esm({
    "scripts/composables/useAuth.ts"() {
      "use strict";
      init_configs();
      init_useStorage();
      init_auth();
      init_factory();
      init_debug();
      __generator8 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      config7 = getConfig();
      clientId = config7.authClientId;
      redirectUri = config7.vketCloudDomain;
      authRepository = factory.get("auth");
      _decode = function(token) {
        try {
          var base64Url = token.split(".")[1];
          var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          var jsonPayload = decodeURIComponent(atob(base64).split("").map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(""));
          return JSON.parse(jsonPayload);
        } catch (e) {
          debugLog(e);
          return null;
        }
      };
      isAliveRefreshToken = function() {
        var refreshToken = useStorage().getLocalStorageValue("refresh-token");
        if (!refreshToken)
          return false;
        var tokenExpiresIn = useStorage().getLocalStorageValue("token-expires-in");
        var tokenCreatedAt = useStorage().getLocalStorageValue("token-created-at");
        var expired = tokenExpiresIn || 0;
        var created = tokenCreatedAt || 0;
        var expiredUnixTime = Number(expired) + Number(created);
        var currentUnixTime = new Date().getTime() / 1e3;
        return currentUnixTime < expiredUnixTime;
      };
      _isAliveIdToken = function() {
        var _ref = _asyncToGenerator8(function() {
          var validated, expiredUnixTime, currentUnixTime, e;
          return __generator8(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  2,
                  ,
                  3
                ]);
                return [
                  4,
                  validateAuth()
                ];
              case 1:
                validated = _state.sent();
                if (validated.length === 0) {
                  debugLog("[ _isAliveIdToken ] auth error");
                  return [
                    2,
                    false
                  ];
                }
                expiredUnixTime = _decode(validated).exp || 0;
                currentUnixTime = new Date().getTime() / 1e3;
                return [
                  2,
                  currentUnixTime < expiredUnixTime
                ];
              case 2:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  false
                ];
              case 3:
                return [
                  2
                ];
            }
          });
        });
        return function _isAliveIdToken2() {
          return _ref.apply(this, arguments);
        };
      }();
      _setIdToken = function() {
        var _ref = _asyncToGenerator8(function() {
          var refreshToken, response, responseJson, e;
          return __generator8(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                refreshToken = useStorage().getLocalStorageValue("refresh-token");
                if (!refreshToken)
                  throw new Error("token went wrong.");
                if (!clientId)
                  throw new Error("client_id went wrong.");
                if (!redirectUri)
                  throw new Error("redirect_uri went wrong.");
                return [
                  4,
                  authRepository.post.issueIdToken(clientId, redirectUri, refreshToken)
                ];
              case 1:
                response = _state.sent();
                return [
                  4,
                  response.json()
                ];
              case 2:
                responseJson = _state.sent();
                if (response.ok || response.status === 200) {
                  useStorage().setLocalStorageValue("access-token", responseJson.access_token);
                  useStorage().setLocalStorageValue("token-expires-in", responseJson.expires_in.toString());
                  useStorage().setLocalStorageValue("token-created-at", responseJson.created_at.toString());
                  useStorage().setLocalStorageValue("refresh-token", responseJson.refresh_token);
                  useStorage().setSessionStorageValue("id-token", responseJson.id_token);
                }
                return [
                  3,
                  4
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  3,
                  4
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function _setIdToken2() {
          return _ref.apply(this, arguments);
        };
      }();
      isLoggedIn = function() {
        var _ref = _asyncToGenerator8(function() {
          return __generator8(this, function(_state) {
            switch (_state.label) {
              case 0:
                debugLog("!isAliveRefreshToken => ".concat(!isAliveRefreshToken()));
                if (!isAliveRefreshToken())
                  return [
                    2,
                    false
                  ];
                return [
                  4,
                  _isAliveIdToken()
                ];
              case 1:
                if (!!_state.sent())
                  return [
                    3,
                    3
                  ];
                return [
                  4,
                  _setIdToken()
                ];
              case 2:
                _state.sent();
                _state.label = 3;
              case 3:
                return [
                  2,
                  true
                ];
            }
          });
        });
        return function isLoggedIn2() {
          return _ref.apply(this, arguments);
        };
      }();
      getMyProfile = function() {
        var _ref = _asyncToGenerator8(function() {
          var accessToken, profile, e;
          return __generator8(this, function(_state) {
            switch (_state.label) {
              case 0:
                accessToken = useStorage().getLocalStorageValue("access-token");
                _state.label = 1;
              case 1:
                _state.trys.push([
                  1,
                  5,
                  ,
                  6
                ]);
                if (!(accessToken && isAliveRefreshToken()))
                  return [
                    3,
                    4
                  ];
                return [
                  4,
                  authRepository.get.fetchMyProfile(accessToken)
                ];
              case 2:
                profile = _state.sent();
                return [
                  4,
                  profile.json()
                ];
              case 3:
                return [
                  2,
                  _state.sent().toString()
                ];
              case 4:
                debugLog("not logged in.");
                return [
                  2,
                  ""
                ];
              case 5:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 6:
                return [
                  2
                ];
            }
          });
        });
        return function getMyProfile2() {
          return _ref.apply(this, arguments);
        };
      }();
      useAuth = function() {
        return {
          isAliveRefreshToken,
          isLoggedIn,
          getMyProfile
        };
      };
    }
  });

  // scripts/composables/useAvatar.ts
  function asyncGeneratorStep9(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator9(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep9(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep9(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator9, assetsRepository, fetchMyAvatarList, fetchMyAvatarToken, fetchOthersAvatarUrl, useAvatar;
  var init_useAvatar = __esm({
    "scripts/composables/useAvatar.ts"() {
      "use strict";
      init_useStorage();
      init_auth();
      init_factory();
      init_debug();
      init_useAuth();
      __generator9 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      assetsRepository = factory.get("assets");
      fetchMyAvatarList = function() {
        var _ref = _asyncToGenerator9(function() {
          var validated, result, _, e;
          return __generator9(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  4,
                  ,
                  5
                ]);
                return [
                  4,
                  validateAuth()
                ];
              case 1:
                validated = _state.sent();
                if (validated.length === 0) {
                  debugLog("[ fetchMyAvatarList ] auth error");
                  return [
                    2,
                    ""
                  ];
                }
                return [
                  4,
                  assetsRepository.get.getAssets(validated)
                ];
              case 2:
                result = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 3:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 4:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 5:
                return [
                  2
                ];
            }
          });
        });
        return function fetchMyAvatarList2() {
          return _ref.apply(this, arguments);
        };
      }();
      fetchMyAvatarToken = function() {
        var _ref = _asyncToGenerator9(function(uuid, password) {
          var isLoggedIn2, idToken, result, _, e;
          return __generator9(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  5,
                  ,
                  6
                ]);
                return [
                  4,
                  useAuth().isLoggedIn()
                ];
              case 1:
                isLoggedIn2 = _state.sent();
                if (!isLoggedIn2)
                  throw new Error("not logged in");
                idToken = useStorage().getSessionStorageValue("id-token");
                if (!idToken)
                  throw new Error("no id-token");
                if (!(uuid && password))
                  return [
                    3,
                    4
                  ];
                return [
                  4,
                  assetsRepository.post.postAssetToken(idToken, uuid, password)
                ];
              case 2:
                result = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 3:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 4:
                throw new Error("no params");
              case 5:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 6:
                return [
                  2
                ];
            }
          });
        });
        return function fetchMyAvatarToken2(uuid, password) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchOthersAvatarUrl = function() {
        var _ref = _asyncToGenerator9(function(downloadToken, password) {
          var result, _, e;
          return __generator9(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  4,
                  ,
                  5
                ]);
                if (!(downloadToken && password))
                  return [
                    3,
                    3
                  ];
                return [
                  4,
                  assetsRepository.get.getAssetByToken(downloadToken, password)
                ];
              case 1:
                result = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                throw new Error("no params");
              case 4:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 5:
                return [
                  2
                ];
            }
          });
        });
        return function fetchOthersAvatarUrl2(downloadToken, password) {
          return _ref.apply(this, arguments);
        };
      }();
      useAvatar = function() {
        return {
          fetchMyAvatarList,
          fetchMyAvatarToken,
          fetchOthersAvatarUrl
        };
      };
    }
  });

  // scripts/composables/useInterval.ts
  var timers, setIntervalDelegate, clearIntervalDelegate, useInterval;
  var init_useInterval = __esm({
    "scripts/composables/useInterval.ts"() {
      "use strict";
      timers = {};
      setIntervalDelegate = function(intervalKey, func, span) {
        if (timers[intervalKey] === void 0) {
          timers[intervalKey] = setInterval(func, span);
        }
      };
      clearIntervalDelegate = function(intervalKey) {
        if (timers[intervalKey] !== void 0) {
          clearInterval(timers[intervalKey]);
          timers[intervalKey] = void 0;
        }
      };
      useInterval = function() {
        return {
          setIntervalDelegate,
          clearIntervalDelegate
        };
      };
    }
  });

  // scripts/composables/useProfile.ts
  function asyncGeneratorStep10(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator10(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep10(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep10(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator10, profileRepository, fetchMyProfile2, updateProfile, updateProfileIcon, fetchUserProfile, fetchMyGuestProfile, updateGuestProfile, updateGuestProfileIcon, fetchUserGuestProfile, fetchUserProfileList, fetchUserGuestProfileList, useProfile;
  var init_useProfile = __esm({
    "scripts/composables/useProfile.ts"() {
      "use strict";
      init_const();
      init_auth();
      init_factory();
      init_debug();
      __generator10 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      profileRepository = factory.get("profile");
      fetchMyProfile2 = function() {
        var _ref = _asyncToGenerator10(function() {
          var validated, myProfile, _, createResponse, _1, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  7,
                  ,
                  8
                ]);
                return [
                  4,
                  validateAuth()
                ];
              case 1:
                validated = _state.sent();
                if (validated.length === 0) {
                  debugLog("[ fetchMyProfile ] auth error");
                  return [
                    2,
                    ""
                  ];
                }
                return [
                  4,
                  profileRepository.get.getMyProfile(validated)
                ];
              case 2:
                myProfile = _state.sent();
                if (!myProfile.ok)
                  return [
                    3,
                    4
                  ];
                _ = JSON.stringify;
                return [
                  4,
                  myProfile.json()
                ];
              case 3:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().profile
                  ])
                ];
              case 4:
                debugLog("[ fetchMyProfile ] error fetched. status = ".concat(myProfile.status, ". postProfile..."));
                return [
                  4,
                  profileRepository.post.postProfile(validated, heliportWindow.g_CurrentUserName)
                ];
              case 5:
                createResponse = _state.sent();
                _1 = JSON.stringify;
                return [
                  4,
                  createResponse.json()
                ];
              case 6:
                return [
                  2,
                  _1.apply(JSON, [
                    _state.sent().profile
                  ])
                ];
              case 7:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 8:
                return [
                  2
                ];
            }
          });
        });
        return function fetchMyProfile3() {
          return _ref.apply(this, arguments);
        };
      }();
      updateProfile = function() {
        var _ref = _asyncToGenerator10(function(name, introduction) {
          var validated, putProfile, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  5,
                  ,
                  6
                ]);
                return [
                  4,
                  validateAuth()
                ];
              case 1:
                validated = _state.sent();
                if (validated.length === 0) {
                  debugLog("[ updateProfile ] auth error");
                  return [
                    2,
                    ""
                  ];
                }
                return [
                  4,
                  profileRepository.put.putProfile(validated, name, introduction)
                ];
              case 2:
                putProfile = _state.sent();
                if (!putProfile.ok)
                  return [
                    3,
                    4
                  ];
                _ = JSON.stringify;
                return [
                  4,
                  putProfile.json()
                ];
              case 3:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().profile
                  ])
                ];
              case 4:
                debugLog("[ updateProfile ] error fetched. status = ".concat(putProfile.status, "."));
                return [
                  2,
                  ""
                ];
              case 5:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 6:
                return [
                  2
                ];
            }
          });
        });
        return function updateProfile2(name, introduction) {
          return _ref.apply(this, arguments);
        };
      }();
      updateProfileIcon = function() {
        var _ref = _asyncToGenerator10(function(icon) {
          var validated, putProfileIcon, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  5,
                  ,
                  6
                ]);
                return [
                  4,
                  validateAuth()
                ];
              case 1:
                validated = _state.sent();
                if (validated.length === 0) {
                  debugLog("[ updateProfileIcon ] auth error");
                  return [
                    2,
                    ""
                  ];
                }
                return [
                  4,
                  profileRepository.put.putProfileIcon(validated, icon)
                ];
              case 2:
                putProfileIcon = _state.sent();
                if (!putProfileIcon.ok)
                  return [
                    3,
                    4
                  ];
                _ = JSON.stringify;
                return [
                  4,
                  putProfileIcon.json()
                ];
              case 3:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().profile
                  ])
                ];
              case 4:
                debugLog("[ updateProfileIcon ] error fetched. status = ".concat(putProfileIcon.status, "."));
                return [
                  2,
                  ""
                ];
              case 5:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 6:
                return [
                  2
                ];
            }
          });
        });
        return function updateProfileIcon2(icon) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchUserProfile = function() {
        var _ref = _asyncToGenerator10(function(userId) {
          var userProfile, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  profileRepository.get.getProfile(userId)
                ];
              case 1:
                userProfile = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  userProfile.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().profile
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchUserProfile2(userId) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchMyGuestProfile = function() {
        var _ref = _asyncToGenerator10(function(uuid) {
          var guestProfile, _, created, _1, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  6,
                  ,
                  7
                ]);
                return [
                  4,
                  profileRepository.get.getGuestProfile(uuid)
                ];
              case 1:
                guestProfile = _state.sent();
                if (!guestProfile.ok)
                  return [
                    3,
                    3
                  ];
                _ = JSON.stringify;
                return [
                  4,
                  guestProfile.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().guest_profile
                  ])
                ];
              case 3:
                debugLog("[ fetchMyGuestProfile ] error fetched. status = ".concat(guestProfile.status, ". postProfile..."));
                return [
                  4,
                  profileRepository.post.postGuestProfile(uuid, heliportWindow.g_CurrentUserName)
                ];
              case 4:
                created = _state.sent();
                _1 = JSON.stringify;
                return [
                  4,
                  created.json()
                ];
              case 5:
                return [
                  2,
                  _1.apply(JSON, [
                    _state.sent().guest_profile
                  ])
                ];
              case 6:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 7:
                return [
                  2
                ];
            }
          });
        });
        return function fetchMyGuestProfile2(uuid) {
          return _ref.apply(this, arguments);
        };
      }();
      updateGuestProfile = function() {
        var _ref = _asyncToGenerator10(function(uuid, name, introduction) {
          var guestProfile, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  4,
                  ,
                  5
                ]);
                return [
                  4,
                  profileRepository.put.putGuestProfile(uuid, name, introduction)
                ];
              case 1:
                guestProfile = _state.sent();
                if (!guestProfile.ok)
                  return [
                    3,
                    3
                  ];
                _ = JSON.stringify;
                return [
                  4,
                  guestProfile.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().guest_profile
                  ])
                ];
              case 3:
                debugLog("[ updateGuestProfile ] error fetched. status = ".concat(guestProfile.status, "."));
                return [
                  2,
                  ""
                ];
              case 4:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 5:
                return [
                  2
                ];
            }
          });
        });
        return function updateGuestProfile2(uuid, name, introduction) {
          return _ref.apply(this, arguments);
        };
      }();
      updateGuestProfileIcon = function() {
        var _ref = _asyncToGenerator10(function(uuid, icon) {
          var guestProfileIcon, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  4,
                  ,
                  5
                ]);
                return [
                  4,
                  profileRepository.put.putGuestProfileIcon(uuid, icon)
                ];
              case 1:
                guestProfileIcon = _state.sent();
                if (!guestProfileIcon.ok)
                  return [
                    3,
                    3
                  ];
                _ = JSON.stringify;
                return [
                  4,
                  guestProfileIcon.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().guest_profile
                  ])
                ];
              case 3:
                debugLog("[ updateGuestProfileIcon ] error fetched. status = ".concat(guestProfileIcon.status, "."));
                return [
                  2,
                  ""
                ];
              case 4:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 5:
                return [
                  2
                ];
            }
          });
        });
        return function updateGuestProfileIcon2(uuid, icon) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchUserGuestProfile = function() {
        var _ref = _asyncToGenerator10(function(uuid) {
          var guestProfile, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  profileRepository.get.getGuestProfile(uuid)
                ];
              case 1:
                guestProfile = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  guestProfile.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().guest_profile
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchUserGuestProfile2(uuid) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchUserProfileList = function() {
        var _ref = _asyncToGenerator10(function(userIds) {
          var profileList, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  profileRepository.post.postProfileList(userIds)
                ];
              case 1:
                profileList = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  profileList.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().profiles
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  "[]"
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchUserProfileList2(userIds) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchUserGuestProfileList = function() {
        var _ref = _asyncToGenerator10(function(uuids) {
          var guestProfileList, _, e;
          return __generator10(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  profileRepository.post.postGuestProfileList(uuids)
                ];
              case 1:
                guestProfileList = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  guestProfileList.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent().guest_profiles
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  "[]"
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchUserGuestProfileList2(uuids) {
          return _ref.apply(this, arguments);
        };
      }();
      useProfile = function() {
        return {
          fetchMyProfile: fetchMyProfile2,
          updateProfile,
          updateProfileIcon,
          fetchUserProfile,
          fetchMyGuestProfile,
          updateGuestProfile,
          updateGuestProfileIcon,
          fetchUserGuestProfile,
          fetchUserProfileList,
          fetchUserGuestProfileList
        };
      };
    }
  });

  // scripts/composables/useRoomApi.ts
  function asyncGeneratorStep11(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator11(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep11(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep11(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator11, roomRepository, fetchActiveRooms, fetchRandomRoom, fetchRoom, fetchRoomStatus, createRoom, sendHeartBeat, cancelReserveRoom2, useRoomApi;
  var init_useRoomApi = __esm({
    "scripts/composables/useRoomApi.ts"() {
      "use strict";
      init_factory();
      init_debug();
      __generator11 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      roomRepository = factory.get("room");
      fetchActiveRooms = function() {
        var _ref = _asyncToGenerator11(function(worldId, option) {
          var result, _, e;
          return __generator11(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  roomRepository.get.getActiveRooms(worldId, option || {})
                ];
              case 1:
                result = _state.sent();
                if (result === null) {
                  return [
                    2,
                    ""
                  ];
                }
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchActiveRooms2(worldId, option) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchRandomRoom = function() {
        var _ref = _asyncToGenerator11(function(worldId, option) {
          var result, _, e;
          return __generator11(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  roomRepository.get.getRandomRoom(worldId, option || {})
                ];
              case 1:
                result = _state.sent();
                if (result === null) {
                  return [
                    2,
                    ""
                  ];
                }
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchRandomRoom2(worldId, option) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchRoom = function() {
        var _ref = _asyncToGenerator11(function(roomId, option) {
          var result, _, e;
          return __generator11(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  roomRepository.get.getRoom(roomId, option || {})
                ];
              case 1:
                result = _state.sent();
                if (result === null) {
                  return [
                    2,
                    ""
                  ];
                }
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchRoom2(roomId, option) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchRoomStatus = function() {
        var _ref = _asyncToGenerator11(function(roomId, option) {
          var result, _, e;
          return __generator11(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  roomRepository.get.getRoomStatus(roomId, option || {})
                ];
              case 1:
                result = _state.sent();
                if (result === null) {
                  return [
                    2,
                    ""
                  ];
                }
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchRoomStatus2(roomId, option) {
          return _ref.apply(this, arguments);
        };
      }();
      createRoom = function() {
        var _ref = _asyncToGenerator11(function(worldId, option) {
          var result, _, e;
          return __generator11(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  roomRepository.post.createNewRoom(worldId, option || {})
                ];
              case 1:
                result = _state.sent();
                if (result === null) {
                  return [
                    2,
                    ""
                  ];
                }
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function createRoom2(worldId, option) {
          return _ref.apply(this, arguments);
        };
      }();
      sendHeartBeat = function() {
        var _ref = _asyncToGenerator11(function(roomId, playerCount, option) {
          var result, _, e;
          return __generator11(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  roomRepository.post.sendHeartbeat(roomId, playerCount, option || {})
                ];
              case 1:
                result = _state.sent();
                if (result === null) {
                  return [
                    2,
                    ""
                  ];
                }
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function sendHeartBeat2(roomId, playerCount, option) {
          return _ref.apply(this, arguments);
        };
      }();
      cancelReserveRoom2 = function() {
        var _ref = _asyncToGenerator11(function(roomId, adminKey, option) {
          var result, _, e;
          return __generator11(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  roomRepository.delete.cancelReserveRoom(roomId, adminKey, option || {})
                ];
              case 1:
                result = _state.sent();
                if (result === null) {
                  return [
                    2,
                    ""
                  ];
                }
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function cancelReserveRoom3(roomId, adminKey, option) {
          return _ref.apply(this, arguments);
        };
      }();
      useRoomApi = function() {
        return {
          fetchActiveRooms,
          fetchRandomRoom,
          fetchRoom,
          fetchRoomStatus,
          createRoom,
          sendHeartBeat,
          cancelReserveRoom: cancelReserveRoom2
        };
      };
    }
  });

  // scripts/composables/useRouter.ts
  var useRouter;
  var init_useRouter = __esm({
    "scripts/composables/useRouter.ts"() {
      "use strict";
      init_const();
      useRouter = function() {
        var reloadPage = function() {
          return location.reload();
        };
        var proceedPage = function(url) {
          return location.assign(url);
        };
        var openPage = function(url) {
          return heliportWindow.open(url, "_blank");
        };
        return {
          reloadPage,
          proceedPage,
          openPage
        };
      };
    }
  });

  // scripts/modules/platform.ts
  var isChrome, isAndroid, isMobile, isIpad, isIPhone, isMac, isFirefox, getIOSVersion, isiOS14Under, detectLang, isLangJa, defineYourRenderTypes;
  var init_platform = __esm({
    "scripts/modules/platform.ts"() {
      "use strict";
      init_const();
      isChrome = function() {
        return heliportWindow.navigator.userAgent.toLowerCase().indexOf("chrome") !== -1;
      };
      isAndroid = function() {
        return heliportWindow.navigator.userAgent.toLowerCase().indexOf("android") !== -1;
      };
      isMobile = function() {
        if (isIpad()) {
          return true;
        }
        return heliportWindow.navigator.userAgent.search(MOBILE_USER_AGENT_REGS) !== -1;
      };
      isIpad = function() {
        var agent = heliportWindow.navigator.userAgent.toLowerCase();
        return agent.indexOf("ipad") > -1 || agent.indexOf("macintosh") > -1 && "ontouchend" in document;
      };
      isIPhone = function() {
        if (isIpad()) {
          return true;
        }
        return heliportWindow.navigator.userAgent.search(IPHONE_USER_AGENT_REGS) !== -1;
      };
      isMac = function() {
        var agent = heliportWindow.navigator.userAgent.toLowerCase();
        return agent.indexOf("macintosh") > -1;
      };
      isFirefox = function() {
        return window.navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
      };
      getIOSVersion = function() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          return parseInt(v[1], 10) * 100 + parseInt(v[2], 10);
        }
        return 0;
      };
      isiOS14Under = function() {
        if (!isIPhone()) {
          return false;
        }
        return getIOSVersion() < IOS_VER_15;
      };
      detectLang = function(lang) {
        var browserLang = heliportWindow.navigator.languages && heliportWindow.navigator.languages[0] || heliportWindow.navigator.language || heliportWindow.navigator.userLanguage || heliportWindow.navigator.browserLanguage;
        return browserLang === lang || browserLang.includes(lang);
      };
      isLangJa = function() {
        return detectLang("ja");
      };
      defineYourRenderTypes = function() {
        return [
          "webgl",
          "experimental-webgl"
        ];
      };
    }
  });

  // scripts/composables/useScreen.ts
  function asyncGeneratorStep12(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator12(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep12(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep12(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator12, useScreen;
  var init_useScreen = __esm({
    "scripts/composables/useScreen.ts"() {
      "use strict";
      init_const();
      init_dom();
      init_platform();
      init_screenShotModal();
      init_debug();
      __generator12 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      useScreen = function() {
        var takeScreenShot = function() {
          var mainCanvas = getMainCanvas();
          if (mainCanvas === null) {
            debugLog("[ takeScreenShot ] mainCanvas is not assigned. noop");
            return false;
          }
          if (isIPhone()) {
            heliportWindow.localStorage["ssBase64"] = mainCanvas.toDataURL("image/png");
            showScreenShotModal();
            return true;
          }
          mainCanvas.toBlob(function(blob) {
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            var today = new Date();
            a.download = "" + today.getFullYear() + ("00" + (today.getMonth() + 1)).slice(-2) + ("00" + today.getDate()).slice(-2) + "_" + ("00" + today.getHours()).slice(-2) + ("00" + today.getMinutes()).slice(-2) + ("00" + today.getSeconds()).slice(-2) + ".png";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          });
          return true;
        };
        var toggleFullScreen = function() {
          var _ref = _asyncToGenerator12(function() {
            var mainCanvas;
            return __generator12(this, function(_state) {
              switch (_state.label) {
                case 0:
                  mainCanvas = getMainCanvas();
                  if (!document.fullscreenEnabled || mainCanvas === null) {
                    debugLog("[ toggleFullScreen ] mainCanvasNotFound or fullScreen disabled");
                    return [
                      2,
                      false
                    ];
                  }
                  if (!!document.fullscreenElement)
                    return [
                      3,
                      2
                    ];
                  debugLog("[ toggleFullScreen ] full screen requested");
                  return [
                    4,
                    mainCanvas.requestFullscreen()
                  ];
                case 1:
                  _state.sent();
                  return [
                    3,
                    4
                  ];
                case 2:
                  debugLog("[ toggleFullScreen ] full screen exited");
                  return [
                    4,
                    document.exitFullscreen()
                  ];
                case 3:
                  _state.sent();
                  _state.label = 4;
                case 4:
                  return [
                    2,
                    true
                  ];
              }
            });
          });
          return function toggleFullScreen2() {
            return _ref.apply(this, arguments);
          };
        }();
        return {
          takeScreenShot,
          toggleFullScreen
        };
      };
    }
  });

  // scripts/composables/useText.ts
  var useText;
  var init_useText = __esm({
    "scripts/composables/useText.ts"() {
      "use strict";
      useText = function() {
        var removeEmoji = function(textContext) {
          var regexConditions = RegExp("\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F", "gu");
          textContext.value = textContext.value.replaceAll(regexConditions, "*");
          return textContext;
        };
        var colonControl = function(text) {
          return text.replace(":", "&colon;");
        };
        return {
          colonControl,
          removeEmoji
        };
      };
    }
  });

  // scripts/composables/useVrAd.ts
  function asyncGeneratorStep13(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator13(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep13(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep13(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator13, vrAdRepository, fetchVrAdList, useVrAd;
  var init_useVrAd = __esm({
    "scripts/composables/useVrAd.ts"() {
      "use strict";
      init_factory();
      init_debug();
      __generator13 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      vrAdRepository = factory.get("vrAd");
      fetchVrAdList = function() {
        var _ref = _asyncToGenerator13(function(worldId) {
          var result, _, e;
          return __generator13(this, function(_state) {
            switch (_state.label) {
              case 0:
                _state.trys.push([
                  0,
                  3,
                  ,
                  4
                ]);
                return [
                  4,
                  vrAdRepository.get.getAdList(worldId)
                ];
              case 1:
                result = _state.sent();
                _ = JSON.stringify;
                return [
                  4,
                  result.json()
                ];
              case 2:
                return [
                  2,
                  _.apply(JSON, [
                    _state.sent()
                  ])
                ];
              case 3:
                e = _state.sent();
                debugLog(e);
                return [
                  2,
                  ""
                ];
              case 4:
                return [
                  2
                ];
            }
          });
        });
        return function fetchVrAdList2(worldId) {
          return _ref.apply(this, arguments);
        };
      }();
      useVrAd = function() {
        return {
          fetchVrAdList
        };
      };
    }
  });

  // scripts/deviceFeatures/useCanvas.ts
  var initializeMainCanvas, createTextCanvas, clearTextCanvas, handleVisibilityEvent, handleFullScreenChangeEvent, useCanvas;
  var init_useCanvas = __esm({
    "scripts/deviceFeatures/useCanvas.ts"() {
      "use strict";
      init_const();
      init_dom();
      init_debug();
      initializeMainCanvas = function() {
        var mainCanvas = getMainCanvas();
        if (mainCanvas === null) {
          debugLog("[ initializeMainCanvas ] mainCanvas not fetched");
          return;
        }
        mainCanvas.width = document.documentElement.clientWidth;
        mainCanvas.height = document.documentElement.clientHeight;
        mainCanvas.onclick = function() {
          heliportWindow.g_MainCanvas.focus();
        };
        mainCanvas.oncontextmenu = function(e) {
          e.preventDefault();
        };
      };
      createTextCanvas = function(width, height) {
        var textCanvas = document.createElement("canvas");
        textCanvas.style.visibility = "hidden";
        textCanvas.width = width;
        textCanvas.height = height;
        return textCanvas;
      };
      clearTextCanvas = function(textCanvas) {
        var context = textCanvas.getContext("2d");
        if (context === null)
          return;
        context.clearRect(0, 0, textCanvas.width, textCanvas.height);
      };
      handleVisibilityEvent = function(func) {
        document.addEventListener("visibilitychange", function() {
          return func;
        });
      };
      handleFullScreenChangeEvent = function(func) {
        document.addEventListener("fullscreenchange", function() {
          return func;
        });
      };
      useCanvas = function() {
        return {
          initializeMainCanvas,
          clearTextCanvas,
          createTextCanvas,
          getMainCanvas,
          handleVisibilityEvent,
          handleFullScreenChangeEvent,
          reflectCanvasSize
        };
      };
    }
  });

  // scripts/deviceFeatures/useCookie.ts
  var getCookie, setCookie, useCookie;
  var init_useCookie = __esm({
    "scripts/deviceFeatures/useCookie.ts"() {
      "use strict";
      getCookie = function(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : void 0;
      };
      setCookie = function(name, value) {
        var expires = ";Expires=Thu, 1-Jan-2030 00:00:00 GMT";
        document.cookie = name + "=" + encodeURIComponent(value) + expires;
      };
      useCookie = function() {
        return {
          getCookie,
          setCookie
        };
      };
    }
  });

  // scripts/deviceFeatures/useDocument.ts
  var toggleConfigTextField, resizeConfigUrl, setConfigUrlTextField, setConfigUrlFontSize, toggleUserNameTextField, setUserNameTextField, setUserNameFontSize, setDebugTabBy, setDebugBy, setShowChatBox, setTextFieldLocalTestFontSize, resizeChatbox, useDocument;
  var init_useDocument = __esm({
    "scripts/deviceFeatures/useDocument.ts"() {
      "use strict";
      init_dom();
      toggleConfigTextField = function(show) {
        var localTextConfigUrl = getConfigUrlText();
        if (localTextConfigUrl !== null) {
          localTextConfigUrl.style.visibility = show ? "visible" : "hidden";
        }
        var configUrl = getConfigUrl();
        if (configUrl !== null) {
          configUrl.style.visibility = show ? "visible" : "hidden";
        }
      };
      resizeConfigUrl = function(x, y, width, height) {
        var configUrl = getConfigUrl();
        if (configUrl !== null) {
          configUrl.style.left = x + "px";
          configUrl.style.top = y + "px";
        }
        var localTextConfigUrl = getConfigUrlText();
        if (localTextConfigUrl !== null) {
          localTextConfigUrl.style.width = width + "px";
          localTextConfigUrl.style.height = height + "px";
        }
      };
      setConfigUrlTextField = function(text) {
        var localTextConfigUrl = getConfigUrlText();
        if (localTextConfigUrl !== null) {
          localTextConfigUrl.value = text;
        }
      };
      setConfigUrlFontSize = function(text) {
        var localTextConfigUrl = getConfigUrlText();
        if (localTextConfigUrl !== null) {
          localTextConfigUrl.style.fontSize = text + "px";
        }
      };
      toggleUserNameTextField = function(show) {
        var userNameText = getUserNameText();
        if (userNameText !== null) {
          userNameText.style.visibility = show ? "visible" : "hidden";
        }
        var userName = getUserName();
        if (userName !== null) {
          userName.style.visibility = show ? "visible" : "hidden";
        }
      };
      setUserNameTextField = function(text) {
        var userNameText = getUserNameText();
        if (userNameText !== null) {
          userNameText.value = text;
        }
      };
      setUserNameFontSize = function(text) {
        var userNameText = getUserNameText();
        if (userNameText !== null) {
          userNameText.style.fontSize = text + "px";
        }
      };
      setDebugTabBy = function(text) {
        var tab = getGUIDebugTab();
        if (tab === null) {
          return;
        }
        tab.innerHTML = text;
      };
      setDebugBy = function(text) {
        var debug = getGUIDebug();
        if (debug === null) {
          return;
        }
        debug.innerHTML = text;
      };
      setShowChatBox = function(show) {
        var msg = getMsg();
        if (msg !== null) {
          msg.style.visibility = show ? "visible" : "hidden";
        }
        var localText = getLocalText();
        if (localText === null) {
          return;
        }
        localText.style.visibility = show ? "visible" : "hidden";
      };
      setTextFieldLocalTestFontSize = function(text) {
        var localText = getLocalText();
        if (localText === null) {
          return;
        }
        localText.style.fontSize = text + "px";
      };
      resizeChatbox = function(x, y, width, height) {
        var msg = getMsg();
        if (msg === null) {
          return;
        }
        msg.style.left = x + "px";
        msg.style.top = y + "px";
        var localText = getLocalText();
        if (localText === null) {
          return;
        }
        localText.style.width = width + "px";
        localText.style.height = height + "px";
      };
      useDocument = function() {
        return {
          resizeConfigUrl,
          setConfigUrlTextField,
          setConfigUrlFontSize,
          setUserNameTextField,
          setUserNameFontSize,
          toggleConfigTextField,
          toggleUserNameTextField,
          setDebugBy,
          setDebugTabBy,
          setTextFieldLocalTestFontSize,
          setShowChatBox,
          resizeChatbox
        };
      };
    }
  });

  // scripts/deviceFeatures/useGyro.ts
  function asyncGeneratorStep14(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator14(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep14(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep14(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var __generator14, initializeGyro, useGyro;
  var init_useGyro = __esm({
    "scripts/deviceFeatures/useGyro.ts"() {
      "use strict";
      __generator14 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      initializeGyro = function() {
        var _ref = _asyncToGenerator14(function() {
          var permissionState;
          return __generator14(this, function(_state) {
            switch (_state.label) {
              case 0:
                if (!(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission && typeof DeviceOrientationEvent.requestPermission === "function"))
                  return [
                    3,
                    2
                  ];
                return [
                  4,
                  DeviceOrientationEvent.requestPermission()
                ];
              case 1:
                permissionState = _state.sent();
                return [
                  2,
                  permissionState === "granted"
                ];
              case 2:
                return [
                  2,
                  false
                ];
            }
          });
        });
        return function initializeGyro2() {
          return _ref.apply(this, arguments);
        };
      }();
      useGyro = function() {
        return {
          initializeGyro
        };
      };
    }
  });

  // scripts/deviceFeatures/usePlatform.ts
  var usePlatform;
  var init_usePlatform = __esm({
    "scripts/deviceFeatures/usePlatform.ts"() {
      "use strict";
      init_platform();
      usePlatform = function() {
        return {
          defineYourRenderTypes,
          detectLang,
          getIOSVersion,
          isAndroid,
          isChrome,
          isFirefox,
          isIPhone,
          isiOS14Under,
          isLangJa,
          isMac,
          isMobile
        };
      };
    }
  });

  // scripts/modules/gl.ts
  var checkPVRTC, checkEtc2, checkAstc, checkDxt, checkExtShaderTextureLod, checkExtColorBufferHalfFloat, checkOesTextureHalfFloat;
  var init_gl = __esm({
    "scripts/modules/gl.ts"() {
      "use strict";
      init_platform();
      checkPVRTC = function(context) {
        var pvrtc = context.getExtension("WEBGL_compressed_texture_pvrtc") || context.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        if (pvrtc === void 0) {
          return false;
        }
        var supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
        if (!supportedCompressedTextureFormat) {
          return false;
        }
        var supportsPVRTCRgb = supportedCompressedTextureFormat.includes(pvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG);
        if (!supportsPVRTCRgb) {
          return false;
        }
        return supportedCompressedTextureFormat.includes(pvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG);
      };
      checkEtc2 = function(context) {
        var etc2 = context.getExtension("WEBGL_compressed_texture_etc") || context.getExtension("WEBKIT_WEBGL_compressed_texture_etc");
        if (etc2 === void 0) {
          return false;
        }
        var supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
        if (!supportedCompressedTextureFormat) {
          return false;
        }
        var supportsETC2Rgb = supportedCompressedTextureFormat.includes(etc2.COMPRESSED_RGB8_ETC2);
        if (!supportsETC2Rgb) {
          return false;
        }
        return supportedCompressedTextureFormat.includes(etc2.COMPRESSED_RGBA8_ETC2_EAC);
      };
      checkAstc = function(context) {
        var astc = context.getExtension("WEBGL_compressed_texture_astc") || context.getExtension("WEBKIT_WEBGL_compressed_texture_astc");
        if (astc === void 0) {
          return false;
        }
        var supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
        if (!supportedCompressedTextureFormat) {
          return false;
        }
        return supportedCompressedTextureFormat.includes(astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR);
      };
      checkDxt = function(context) {
        var dxt = context.getExtension("EXT_texture_compression_bptc");
        if (dxt === null) {
          return false;
        }
        var supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
        if (!supportedCompressedTextureFormat) {
          return false;
        }
        var supportsDxtUnorm = supportedCompressedTextureFormat.includes(dxt.COMPRESSED_RGBA_BPTC_UNORM_EXT);
        if (!supportsDxtUnorm) {
          return false;
        }
        return supportedCompressedTextureFormat.includes(dxt.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT);
      };
      checkExtShaderTextureLod = function(context) {
        return context.getExtension("EXT_shader_texture_lod") !== void 0;
      };
      checkExtColorBufferHalfFloat = function(context) {
        var halfFloat = isFirefox() ? context.getExtension("EXT_color_buffer_float") : context.getExtension("EXT_color_buffer_half_float");
        return halfFloat !== void 0;
      };
      checkOesTextureHalfFloat = function(context) {
        var halfFloat = context.getExtension("OES_texture_half_float");
        return halfFloat !== void 0;
      };
    }
  });

  // scripts/deviceFeatures/useRender.ts
  var useRender;
  var init_useRender = __esm({
    "scripts/deviceFeatures/useRender.ts"() {
      "use strict";
      init_const();
      init_dom();
      init_gl();
      init_platform();
      init_debug();
      useRender = function() {
        var initializeGl = function(majorVersion) {
          var mainCanvas = getMainCanvas();
          var webGl10Toggle = majorVersion === 1 || isIPhone() || isMac();
          var glAttribs = {
            alpha: 0,
            premultipliedAlpha: 0,
            depth: true,
            majorVersion,
            minorVersion: 0,
            enableExtensionsByDefault: 1,
            antialias: true
          };
          var webglctx = null;
          if (!webGl10Toggle && mainCanvas !== null) {
            glAttribs.antialias = false;
            webglctx = mainCanvas.getContext("webgl2", glAttribs);
          }
          if (!webglctx && mainCanvas !== null) {
            webGl10Toggle = true;
            glAttribs.majorVersion = 1;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
            try {
              for (var _iterator = defineYourRenderTypes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var contextType = _step.value;
                webglctx = mainCanvas.getContext(contextType, glAttribs);
                if (webglctx)
                  break;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
          if (!webglctx) {
            debugLog("webgl is null");
            return 0;
          }
          var glctx = GL.registerContext(webglctx, glAttribs);
          if (!glctx) {
            debugLog("glctx is null");
            return 0;
          }
          GL.makeContextCurrent(glctx);
          heliportWindow.g_TextureCompression_PVRTC = checkPVRTC(webglctx);
          heliportWindow.g_TextureCompression_ETC2 = checkEtc2(webglctx);
          heliportWindow.g_TextureCompression_ASTC = checkAstc(webglctx);
          heliportWindow.g_TextureCompression_DXT = checkDxt(webglctx);
          heliportWindow.g_Use_EXT_shader_texture_lod = checkExtShaderTextureLod(webglctx);
          heliportWindow.g_Use_EXT_color_buffer_half_float = checkExtColorBufferHalfFloat(webglctx);
          heliportWindow.g_Use_OES_texture_half_float = checkOesTextureHalfFloat(webglctx);
          return 1;
        };
        return {
          initializeGl
        };
      };
    }
  });

  // node_modules/bowser/es5.js
  var require_es5 = __commonJS({
    "node_modules/bowser/es5.js"(exports, module) {
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.bowser = t() : e.bowser = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function r(n) {
            if (t[n])
              return t[n].exports;
            var i = t[n] = {
              i: n,
              l: false,
              exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r), i.l = true, i.exports;
          }
          return r.m = e, r.c = t, r.d = function(e2, t2, n) {
            r.o(e2, t2) || Object.defineProperty(e2, t2, {
              enumerable: true,
              get: n
            });
          }, r.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(e2, "__esModule", {
              value: true
            });
          }, r.t = function(e2, t2) {
            if (1 & t2 && (e2 = r(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var n = /* @__PURE__ */ Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
              enumerable: true,
              value: e2
            }), 2 & t2 && "string" != typeof e2)
              for (var i in e2)
                r.d(n, i, function(t3) {
                  return e2[t3];
                }.bind(null, i));
            return n;
          }, r.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function t3() {
              return e2.default;
            } : function() {
              return e2;
            };
            return r.d(t2, "a", t2), t2;
          }, r.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, r.p = "", r(r.s = 90);
        }({
          17: function(e, t, r) {
            "use strict";
            t.__esModule = true, t.default = void 0;
            var n = r(18), i = function() {
              var _$e = function _$e2() {
              };
              return _$e.getFirstMatch = function(e2, t2) {
                var _$r = t2.match(e2);
                return _$r && _$r.length > 0 && _$r[1] || "";
              }, _$e.getSecondMatch = function(e2, t2) {
                var _$r = t2.match(e2);
                return _$r && _$r.length > 1 && _$r[2] || "";
              }, _$e.matchAndReturnConst = function(e2, t2, r2) {
                if (e2.test(t2))
                  return r2;
              }, _$e.getWindowsVersionName = function(e2) {
                switch (e2) {
                  case "NT":
                    return "NT";
                  case "XP":
                    return "XP";
                  case "NT 5.0":
                    return "2000";
                  case "NT 5.1":
                    return "XP";
                  case "NT 5.2":
                    return "2003";
                  case "NT 6.0":
                    return "Vista";
                  case "NT 6.1":
                    return "7";
                  case "NT 6.2":
                    return "8";
                  case "NT 6.3":
                    return "8.1";
                  case "NT 10.0":
                    return "10";
                  default:
                    return;
                }
              }, _$e.getMacOSVersionName = function(e2) {
                var _$t = e2.split(".").splice(0, 2).map(function(e3) {
                  return parseInt(e3, 10) || 0;
                });
                if (_$t.push(0), 10 === _$t[0])
                  switch (_$t[1]) {
                    case 5:
                      return "Leopard";
                    case 6:
                      return "Snow Leopard";
                    case 7:
                      return "Lion";
                    case 8:
                      return "Mountain Lion";
                    case 9:
                      return "Mavericks";
                    case 10:
                      return "Yosemite";
                    case 11:
                      return "El Capitan";
                    case 12:
                      return "Sierra";
                    case 13:
                      return "High Sierra";
                    case 14:
                      return "Mojave";
                    case 15:
                      return "Catalina";
                    default:
                      return;
                  }
              }, _$e.getAndroidVersionName = function(e2) {
                var _$t = e2.split(".").splice(0, 2).map(function(e3) {
                  return parseInt(e3, 10) || 0;
                });
                if (_$t.push(0), !(1 === _$t[0] && _$t[1] < 5))
                  return 1 === _$t[0] && _$t[1] < 6 ? "Cupcake" : 1 === _$t[0] && _$t[1] >= 6 ? "Donut" : 2 === _$t[0] && _$t[1] < 2 ? "Eclair" : 2 === _$t[0] && 2 === _$t[1] ? "Froyo" : 2 === _$t[0] && _$t[1] > 2 ? "Gingerbread" : 3 === _$t[0] ? "Honeycomb" : 4 === _$t[0] && _$t[1] < 1 ? "Ice Cream Sandwich" : 4 === _$t[0] && _$t[1] < 4 ? "Jelly Bean" : 4 === _$t[0] && _$t[1] >= 4 ? "KitKat" : 5 === _$t[0] ? "Lollipop" : 6 === _$t[0] ? "Marshmallow" : 7 === _$t[0] ? "Nougat" : 8 === _$t[0] ? "Oreo" : 9 === _$t[0] ? "Pie" : void 0;
              }, _$e.getVersionPrecision = function(e2) {
                return e2.split(".").length;
              }, _$e.compareVersions = function(t2, r2, n2) {
                void 0 === n2 && (n2 = false);
                var i2 = _$e.getVersionPrecision(t2), s = _$e.getVersionPrecision(r2), a = Math.max(i2, s), o = 0, u = _$e.map([
                  t2,
                  r2
                ], function(t3) {
                  var _$r = a - _$e.getVersionPrecision(t3), _$n = t3 + new Array(_$r + 1).join(".0");
                  return _$e.map(_$n.split("."), function(e2) {
                    return new Array(20 - e2.length).join("0") + e2;
                  }).reverse();
                });
                for (n2 && (o = a - Math.min(i2, s)), a -= 1; a >= o; ) {
                  if (u[0][a] > u[1][a])
                    return 1;
                  if (u[0][a] === u[1][a]) {
                    if (a === o)
                      return 0;
                    a -= 1;
                  } else if (u[0][a] < u[1][a])
                    return -1;
                }
              }, _$e.map = function(e2, t2) {
                var _$r, n2 = [];
                if (Array.prototype.map)
                  return Array.prototype.map.call(e2, t2);
                for (_$r = 0; _$r < e2.length; _$r += 1)
                  n2.push(t2(e2[_$r]));
                return n2;
              }, _$e.find = function(e2, t2) {
                var _$r, n2;
                if (Array.prototype.find)
                  return Array.prototype.find.call(e2, t2);
                for (_$r = 0, n2 = e2.length; _$r < n2; _$r += 1) {
                  var i2 = e2[_$r];
                  if (t2(i2, _$r))
                    return i2;
                }
              }, _$e.assign = function(e2) {
                for (var _$t, _$r, n2 = e2, i2 = arguments.length, s = new Array(i2 > 1 ? i2 - 1 : 0), a = 1; a < i2; a++)
                  s[a - 1] = arguments[a];
                if (Object.assign)
                  return Object.assign.apply(Object, [
                    e2
                  ].concat(s));
                var o = function o2() {
                  var _$e2 = s[_$t];
                  "object" == typeof _$e2 && null !== _$e2 && Object.keys(_$e2).forEach(function(t2) {
                    n2[t2] = _$e2[t2];
                  });
                };
                for (_$t = 0, _$r = s.length; _$t < _$r; _$t += 1)
                  o();
                return e2;
              }, _$e.getBrowserAlias = function(e2) {
                return n.BROWSER_ALIASES_MAP[e2];
              }, _$e.getBrowserTypeByAlias = function(e2) {
                return n.BROWSER_MAP[e2] || "";
              }, _$e;
            }();
            t.default = i, e.exports = t.default;
          },
          18: function(e, t, r) {
            "use strict";
            t.__esModule = true, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
            t.BROWSER_ALIASES_MAP = {
              "Amazon Silk": "amazon_silk",
              "Android Browser": "android",
              Bada: "bada",
              BlackBerry: "blackberry",
              Chrome: "chrome",
              Chromium: "chromium",
              Electron: "electron",
              Epiphany: "epiphany",
              Firefox: "firefox",
              Focus: "focus",
              Generic: "generic",
              "Google Search": "google_search",
              Googlebot: "googlebot",
              "Internet Explorer": "ie",
              "K-Meleon": "k_meleon",
              Maxthon: "maxthon",
              "Microsoft Edge": "edge",
              "MZ Browser": "mz",
              "NAVER Whale Browser": "naver",
              Opera: "opera",
              "Opera Coast": "opera_coast",
              PhantomJS: "phantomjs",
              Puffin: "puffin",
              QupZilla: "qupzilla",
              QQ: "qq",
              QQLite: "qqlite",
              Safari: "safari",
              Sailfish: "sailfish",
              "Samsung Internet for Android": "samsung_internet",
              SeaMonkey: "seamonkey",
              Sleipnir: "sleipnir",
              Swing: "swing",
              Tizen: "tizen",
              "UC Browser": "uc",
              Vivaldi: "vivaldi",
              "WebOS Browser": "webos",
              WeChat: "wechat",
              "Yandex Browser": "yandex",
              Roku: "roku"
            };
            t.BROWSER_MAP = {
              amazon_silk: "Amazon Silk",
              android: "Android Browser",
              bada: "Bada",
              blackberry: "BlackBerry",
              chrome: "Chrome",
              chromium: "Chromium",
              electron: "Electron",
              epiphany: "Epiphany",
              firefox: "Firefox",
              focus: "Focus",
              generic: "Generic",
              googlebot: "Googlebot",
              google_search: "Google Search",
              ie: "Internet Explorer",
              k_meleon: "K-Meleon",
              maxthon: "Maxthon",
              edge: "Microsoft Edge",
              mz: "MZ Browser",
              naver: "NAVER Whale Browser",
              opera: "Opera",
              opera_coast: "Opera Coast",
              phantomjs: "PhantomJS",
              puffin: "Puffin",
              qupzilla: "QupZilla",
              qq: "QQ Browser",
              qqlite: "QQ Browser Lite",
              safari: "Safari",
              sailfish: "Sailfish",
              samsung_internet: "Samsung Internet for Android",
              seamonkey: "SeaMonkey",
              sleipnir: "Sleipnir",
              swing: "Swing",
              tizen: "Tizen",
              uc: "UC Browser",
              vivaldi: "Vivaldi",
              webos: "WebOS Browser",
              wechat: "WeChat",
              yandex: "Yandex Browser"
            };
            t.PLATFORMS_MAP = {
              tablet: "tablet",
              mobile: "mobile",
              desktop: "desktop",
              tv: "tv"
            };
            t.OS_MAP = {
              WindowsPhone: "Windows Phone",
              Windows: "Windows",
              MacOS: "macOS",
              iOS: "iOS",
              Android: "Android",
              WebOS: "WebOS",
              BlackBerry: "BlackBerry",
              Bada: "Bada",
              Tizen: "Tizen",
              Linux: "Linux",
              ChromeOS: "Chrome OS",
              PlayStation4: "PlayStation 4",
              Roku: "Roku"
            };
            t.ENGINE_MAP = {
              EdgeHTML: "EdgeHTML",
              Blink: "Blink",
              Trident: "Trident",
              Presto: "Presto",
              Gecko: "Gecko",
              WebKit: "WebKit"
            };
          },
          90: function(e, t, r) {
            "use strict";
            var a = function a2(e2, t2) {
              for (var _$r = 0; _$r < t2.length; _$r++) {
                var n2 = t2[_$r];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
              }
            };
            t.__esModule = true, t.default = void 0;
            var n, i = (n = r(91)) && n.__esModule ? n : {
              default: n
            }, s = r(18);
            var o = function() {
              var _$e = function _$e2() {
              };
              var _$t, _$r, n2;
              return _$e.getParser = function(e2, t2) {
                if (void 0 === t2 && (t2 = false), "string" != typeof e2)
                  throw new Error("UserAgent should be a string");
                return new i.default(e2, t2);
              }, _$e.parse = function(e2) {
                return new i.default(e2).getResult();
              }, _$t = _$e, n2 = [
                {
                  key: "BROWSER_MAP",
                  get: function get() {
                    return s.BROWSER_MAP;
                  }
                },
                {
                  key: "ENGINE_MAP",
                  get: function get() {
                    return s.ENGINE_MAP;
                  }
                },
                {
                  key: "OS_MAP",
                  get: function get() {
                    return s.OS_MAP;
                  }
                },
                {
                  key: "PLATFORMS_MAP",
                  get: function get() {
                    return s.PLATFORMS_MAP;
                  }
                }
              ], (_$r = null) && a(_$t.prototype, _$r), n2 && a(_$t, n2), _$e;
            }();
            t.default = o, e.exports = t.default;
          },
          91: function(e, t, r) {
            "use strict";
            var u = function u2(e2) {
              return e2 && e2.__esModule ? e2 : {
                default: e2
              };
            };
            t.__esModule = true, t.default = void 0;
            var n = u(r(92)), i = u(r(93)), s = u(r(94)), a = u(r(95)), o = u(r(17));
            var d = function() {
              var _$e = function _$e2(e2, t2) {
                if (void 0 === t2 && (t2 = false), null == e2 || "" === e2)
                  throw new Error("UserAgent parameter can't be empty");
                this._ua = e2, this.parsedResult = {}, true !== t2 && this.parse();
              };
              var _$t = _$e.prototype;
              return _$t.getUA = function() {
                return this._ua;
              }, _$t.test = function(e2) {
                return e2.test(this._ua);
              }, _$t.parseBrowser = function() {
                var _$e2 = this;
                this.parsedResult.browser = {};
                var _$t2 = o.default.find(n.default, function(t2) {
                  if ("function" == typeof t2.test)
                    return t2.test(_$e2);
                  if (_instanceof(t2.test, Array))
                    return t2.test.some(function(t3) {
                      return _$e2.test(t3);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return _$t2 && (this.parsedResult.browser = _$t2.describe(this.getUA())), this.parsedResult.browser;
              }, _$t.getBrowser = function() {
                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
              }, _$t.getBrowserName = function(e2) {
                return e2 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
              }, _$t.getBrowserVersion = function() {
                return this.getBrowser().version;
              }, _$t.getOS = function() {
                return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
              }, _$t.parseOS = function() {
                var _$e2 = this;
                this.parsedResult.os = {};
                var _$t2 = o.default.find(i.default, function(t2) {
                  if ("function" == typeof t2.test)
                    return t2.test(_$e2);
                  if (_instanceof(t2.test, Array))
                    return t2.test.some(function(t3) {
                      return _$e2.test(t3);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return _$t2 && (this.parsedResult.os = _$t2.describe(this.getUA())), this.parsedResult.os;
              }, _$t.getOSName = function(e2) {
                var _$t2 = this.getOS().name;
                return e2 ? String(_$t2).toLowerCase() || "" : _$t2 || "";
              }, _$t.getOSVersion = function() {
                return this.getOS().version;
              }, _$t.getPlatform = function() {
                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
              }, _$t.getPlatformType = function(e2) {
                void 0 === e2 && (e2 = false);
                var _$t2 = this.getPlatform().type;
                return e2 ? String(_$t2).toLowerCase() || "" : _$t2 || "";
              }, _$t.parsePlatform = function() {
                var _$e2 = this;
                this.parsedResult.platform = {};
                var _$t2 = o.default.find(s.default, function(t2) {
                  if ("function" == typeof t2.test)
                    return t2.test(_$e2);
                  if (_instanceof(t2.test, Array))
                    return t2.test.some(function(t3) {
                      return _$e2.test(t3);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return _$t2 && (this.parsedResult.platform = _$t2.describe(this.getUA())), this.parsedResult.platform;
              }, _$t.getEngine = function() {
                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
              }, _$t.getEngineName = function(e2) {
                return e2 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
              }, _$t.parseEngine = function() {
                var _$e2 = this;
                this.parsedResult.engine = {};
                var _$t2 = o.default.find(a.default, function(t2) {
                  if ("function" == typeof t2.test)
                    return t2.test(_$e2);
                  if (_instanceof(t2.test, Array))
                    return t2.test.some(function(t3) {
                      return _$e2.test(t3);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return _$t2 && (this.parsedResult.engine = _$t2.describe(this.getUA())), this.parsedResult.engine;
              }, _$t.parse = function() {
                return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
              }, _$t.getResult = function() {
                return o.default.assign({}, this.parsedResult);
              }, _$t.satisfies = function(e2) {
                var _$t2 = this, _$r = {}, n2 = 0, i2 = {}, s2 = 0;
                if (Object.keys(e2).forEach(function(t2) {
                  var a3 = e2[t2];
                  "string" == typeof a3 ? (i2[t2] = a3, s2 += 1) : "object" == typeof a3 && (_$r[t2] = a3, n2 += 1);
                }), n2 > 0) {
                  var a2 = Object.keys(_$r), u2 = o.default.find(a2, function(e3) {
                    return _$t2.isOS(e3);
                  });
                  if (u2) {
                    var d2 = this.satisfies(_$r[u2]);
                    if (void 0 !== d2)
                      return d2;
                  }
                  var c = o.default.find(a2, function(e3) {
                    return _$t2.isPlatform(e3);
                  });
                  if (c) {
                    var f = this.satisfies(_$r[c]);
                    if (void 0 !== f)
                      return f;
                  }
                }
                if (s2 > 0) {
                  var l = Object.keys(i2), h = o.default.find(l, function(e3) {
                    return _$t2.isBrowser(e3, true);
                  });
                  if (void 0 !== h)
                    return this.compareVersion(i2[h]);
                }
              }, _$t.isBrowser = function(e2, t2) {
                void 0 === t2 && (t2 = false);
                var _$r = this.getBrowserName().toLowerCase(), n2 = e2.toLowerCase(), i2 = o.default.getBrowserTypeByAlias(n2);
                return t2 && i2 && (n2 = i2.toLowerCase()), n2 === _$r;
              }, _$t.compareVersion = function(e2) {
                var _$t2 = [
                  0
                ], _$r = e2, n2 = false, i2 = this.getBrowserVersion();
                if ("string" == typeof i2)
                  return ">" === e2[0] || "<" === e2[0] ? (_$r = e2.substr(1), "=" === e2[1] ? (n2 = true, _$r = e2.substr(2)) : _$t2 = [], ">" === e2[0] ? _$t2.push(1) : _$t2.push(-1)) : "=" === e2[0] ? _$r = e2.substr(1) : "~" === e2[0] && (n2 = true, _$r = e2.substr(1)), _$t2.indexOf(o.default.compareVersions(i2, _$r, n2)) > -1;
              }, _$t.isOS = function(e2) {
                return this.getOSName(true) === String(e2).toLowerCase();
              }, _$t.isPlatform = function(e2) {
                return this.getPlatformType(true) === String(e2).toLowerCase();
              }, _$t.isEngine = function(e2) {
                return this.getEngineName(true) === String(e2).toLowerCase();
              }, _$t.is = function(e2, t2) {
                return void 0 === t2 && (t2 = false), this.isBrowser(e2, t2) || this.isOS(e2) || this.isPlatform(e2);
              }, _$t.some = function(e2) {
                var _$t2 = this;
                return void 0 === e2 && (e2 = []), e2.some(function(e3) {
                  return _$t2.is(e3);
                });
              }, _$e;
            }();
            t.default = d, e.exports = t.default;
          },
          92: function(e, t, r) {
            "use strict";
            t.__esModule = true, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
              default: n
            };
            var s = /version\/(\d+(\.?_?\d+)+)/i, a = [
              {
                test: [
                  /googlebot/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Googlebot"
                  }, _$r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /opera/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Opera"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /opr\/|opios/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Opera"
                  }, _$r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /SamsungBrowser/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Samsung Internet for Android"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /Whale/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "NAVER Whale Browser"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /MZBrowser/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "MZ Browser"
                  }, _$r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /focus/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Focus"
                  }, _$r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /swing/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Swing"
                  }, _$r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /coast/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Opera Coast"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /opt\/\d+(?:.?_?\d+)+/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Opera Touch"
                  }, _$r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /yabrowser/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Yandex Browser"
                  }, _$r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /ucbrowser/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "UC Browser"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /Maxthon|mxios/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Maxthon"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /epiphany/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Epiphany"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /puffin/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Puffin"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /sleipnir/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Sleipnir"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /k-meleon/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "K-Meleon"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /micromessenger/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "WeChat"
                  }, _$r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /qqbrowser/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: /qqbrowserlite/i.test(e2) ? "QQ Browser Lite" : "QQ Browser"
                  }, _$r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /msie|trident/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Internet Explorer"
                  }, _$r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /\sedg\//i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Microsoft Edge"
                  }, _$r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /edg([ea]|ios)/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Microsoft Edge"
                  }, _$r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /vivaldi/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Vivaldi"
                  }, _$r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /seamonkey/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "SeaMonkey"
                  }, _$r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /sailfish/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Sailfish"
                  }, _$r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /silk/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Amazon Silk"
                  }, _$r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /phantom/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "PhantomJS"
                  }, _$r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /slimerjs/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "SlimerJS"
                  }, _$r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /blackberry|\bbb\d+/i,
                  /rim\stablet/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "BlackBerry"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /(web|hpw)[o0]s/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "WebOS Browser"
                  }, _$r = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /bada/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Bada"
                  }, _$r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /tizen/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Tizen"
                  }, _$r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /qupzilla/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "QupZilla"
                  }, _$r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /firefox|iceweasel|fxios/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Firefox"
                  }, _$r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /electron/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Electron"
                  }, _$r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /MiuiBrowser/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Miui"
                  }, _$r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /chromium/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Chromium"
                  }, _$r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /chrome|crios|crmo/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Chrome"
                  }, _$r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /GSA/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Google Search"
                  }, _$r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: function test(e2) {
                  var _$t = !e2.test(/like android/i), _$r = e2.test(/android/i);
                  return _$t && _$r;
                },
                describe: function describe(e2) {
                  var _$t = {
                    name: "Android Browser"
                  }, _$r = i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /playstation 4/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "PlayStation 4"
                  }, _$r = i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /safari|applewebkit/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: "Safari"
                  }, _$r = i.default.getFirstMatch(s, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /.*/i
                ],
                describe: function describe(e2) {
                  var _$t = -1 !== e2.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                  return {
                    name: i.default.getFirstMatch(_$t, e2),
                    version: i.default.getSecondMatch(_$t, e2)
                  };
                }
              }
            ];
            t.default = a, e.exports = t.default;
          },
          93: function(e, t, r) {
            "use strict";
            t.__esModule = true, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
              default: n
            }, s = r(18);
            var a = [
              {
                test: [
                  /Roku\/DVP/
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e2);
                  return {
                    name: s.OS_MAP.Roku,
                    version: _$t
                  };
                }
              },
              {
                test: [
                  /windows phone/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e2);
                  return {
                    name: s.OS_MAP.WindowsPhone,
                    version: _$t
                  };
                }
              },
              {
                test: [
                  /windows /i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e2), _$r = i.default.getWindowsVersionName(_$t);
                  return {
                    name: s.OS_MAP.Windows,
                    version: _$t,
                    versionName: _$r
                  };
                }
              },
              {
                test: [
                  /Macintosh(.*?) FxiOS(.*?)\//
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: s.OS_MAP.iOS
                  }, _$r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /macintosh/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e2).replace(/[_\s]/g, "."), _$r = i.default.getMacOSVersionName(_$t), n2 = {
                    name: s.OS_MAP.MacOS,
                    version: _$t
                  };
                  return _$r && (n2.versionName = _$r), n2;
                }
              },
              {
                test: [
                  /(ipod|iphone|ipad)/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e2).replace(/[_\s]/g, ".");
                  return {
                    name: s.OS_MAP.iOS,
                    version: _$t
                  };
                }
              },
              {
                test: function test(e2) {
                  var _$t = !e2.test(/like android/i), _$r = e2.test(/android/i);
                  return _$t && _$r;
                },
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e2), _$r = i.default.getAndroidVersionName(_$t), n2 = {
                    name: s.OS_MAP.Android,
                    version: _$t
                  };
                  return _$r && (n2.versionName = _$r), n2;
                }
              },
              {
                test: [
                  /(web|hpw)[o0]s/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e2), _$r = {
                    name: s.OS_MAP.WebOS
                  };
                  return _$t && _$t.length && (_$r.version = _$t), _$r;
                }
              },
              {
                test: [
                  /blackberry|\bbb\d+/i,
                  /rim\stablet/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e2) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e2) || i.default.getFirstMatch(/\bbb(\d+)/i, e2);
                  return {
                    name: s.OS_MAP.BlackBerry,
                    version: _$t
                  };
                }
              },
              {
                test: [
                  /bada/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e2);
                  return {
                    name: s.OS_MAP.Bada,
                    version: _$t
                  };
                }
              },
              {
                test: [
                  /tizen/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e2);
                  return {
                    name: s.OS_MAP.Tizen,
                    version: _$t
                  };
                }
              },
              {
                test: [
                  /linux/i
                ],
                describe: function describe() {
                  return {
                    name: s.OS_MAP.Linux
                  };
                }
              },
              {
                test: [
                  /CrOS/
                ],
                describe: function describe() {
                  return {
                    name: s.OS_MAP.ChromeOS
                  };
                }
              },
              {
                test: [
                  /PlayStation 4/
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e2);
                  return {
                    name: s.OS_MAP.PlayStation4,
                    version: _$t
                  };
                }
              }
            ];
            t.default = a, e.exports = t.default;
          },
          94: function(e, t, r) {
            "use strict";
            t.__esModule = true, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
              default: n
            }, s = r(18);
            var a = [
              {
                test: [
                  /googlebot/i
                ],
                describe: function describe() {
                  return {
                    type: "bot",
                    vendor: "Google"
                  };
                }
              },
              {
                test: [
                  /huawei/i
                ],
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/(can-l01)/i, e2) && "Nova", _$r = {
                    type: s.PLATFORMS_MAP.mobile,
                    vendor: "Huawei"
                  };
                  return _$t && (_$r.model = _$t), _$r;
                }
              },
              {
                test: [
                  /nexus\s*(?:7|8|9|10).*/i
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tablet,
                    vendor: "Nexus"
                  };
                }
              },
              {
                test: [
                  /ipad/i
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad"
                  };
                }
              },
              {
                test: [
                  /Macintosh(.*?) FxiOS(.*?)\//
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad"
                  };
                }
              },
              {
                test: [
                  /kftt build/i
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tablet,
                    vendor: "Amazon",
                    model: "Kindle Fire HD 7"
                  };
                }
              },
              {
                test: [
                  /silk/i
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tablet,
                    vendor: "Amazon"
                  };
                }
              },
              {
                test: [
                  /tablet(?! pc)/i
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tablet
                  };
                }
              },
              {
                test: function test(e2) {
                  var _$t = e2.test(/ipod|iphone/i), _$r = e2.test(/like (ipod|iphone)/i);
                  return _$t && !_$r;
                },
                describe: function describe(e2) {
                  var _$t = i.default.getFirstMatch(/(ipod|iphone)/i, e2);
                  return {
                    type: s.PLATFORMS_MAP.mobile,
                    vendor: "Apple",
                    model: _$t
                  };
                }
              },
              {
                test: [
                  /nexus\s*[0-6].*/i,
                  /galaxy nexus/i
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.mobile,
                    vendor: "Nexus"
                  };
                }
              },
              {
                test: [
                  /[^-]mobi/i
                ],
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.mobile
                  };
                }
              },
              {
                test: function test(e2) {
                  return "blackberry" === e2.getBrowserName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.mobile,
                    vendor: "BlackBerry"
                  };
                }
              },
              {
                test: function test(e2) {
                  return "bada" === e2.getBrowserName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.mobile
                  };
                }
              },
              {
                test: function test(e2) {
                  return "windows phone" === e2.getBrowserName();
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.mobile,
                    vendor: "Microsoft"
                  };
                }
              },
              {
                test: function test(e2) {
                  var _$t = Number(String(e2.getOSVersion()).split(".")[0]);
                  return "android" === e2.getOSName(true) && _$t >= 3;
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tablet
                  };
                }
              },
              {
                test: function test(e2) {
                  return "android" === e2.getOSName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.mobile
                  };
                }
              },
              {
                test: function test(e2) {
                  return "macos" === e2.getOSName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.desktop,
                    vendor: "Apple"
                  };
                }
              },
              {
                test: function test(e2) {
                  return "windows" === e2.getOSName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.desktop
                  };
                }
              },
              {
                test: function test(e2) {
                  return "linux" === e2.getOSName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.desktop
                  };
                }
              },
              {
                test: function test(e2) {
                  return "playstation 4" === e2.getOSName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tv
                  };
                }
              },
              {
                test: function test(e2) {
                  return "roku" === e2.getOSName(true);
                },
                describe: function describe() {
                  return {
                    type: s.PLATFORMS_MAP.tv
                  };
                }
              }
            ];
            t.default = a, e.exports = t.default;
          },
          95: function(e, t, r) {
            "use strict";
            t.__esModule = true, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
              default: n
            }, s = r(18);
            var a = [
              {
                test: function test(e2) {
                  return "microsoft edge" === e2.getBrowserName(true);
                },
                describe: function describe(e2) {
                  if (/\sedg\//i.test(e2))
                    return {
                      name: s.ENGINE_MAP.Blink
                    };
                  var _$t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e2);
                  return {
                    name: s.ENGINE_MAP.EdgeHTML,
                    version: _$t
                  };
                }
              },
              {
                test: [
                  /trident/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: s.ENGINE_MAP.Trident
                  }, _$r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: function test(e2) {
                  return e2.test(/presto/i);
                },
                describe: function describe(e2) {
                  var _$t = {
                    name: s.ENGINE_MAP.Presto
                  }, _$r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: function test(e2) {
                  var _$t = e2.test(/gecko/i), _$r = e2.test(/like gecko/i);
                  return _$t && !_$r;
                },
                describe: function describe(e2) {
                  var _$t = {
                    name: s.ENGINE_MAP.Gecko
                  }, _$r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              },
              {
                test: [
                  /(apple)?webkit\/537\.36/i
                ],
                describe: function describe() {
                  return {
                    name: s.ENGINE_MAP.Blink
                  };
                }
              },
              {
                test: [
                  /(apple)?webkit/i
                ],
                describe: function describe(e2) {
                  var _$t = {
                    name: s.ENGINE_MAP.WebKit
                  }, _$r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e2);
                  return _$r && (_$t.version = _$r), _$t;
                }
              }
            ];
            t.default = a, e.exports = t.default;
          }
        });
      });
    }
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS({
    "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/asyncToGenerator.js
  var require_asyncToGenerator = __commonJS({
    "node_modules/@babel/runtime/helpers/asyncToGenerator.js"(exports, module) {
      function asyncGeneratorStep16(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator16(fn) {
        return function() {
          var self2 = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
              asyncGeneratorStep16(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep16(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      module.exports = _asyncToGenerator16, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof2(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorRuntime.js
  var require_regeneratorRuntime = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      var _typeof = require_typeof()["default"];
      function _regeneratorRuntime() {
        "use strict";
        var define2 = function define3(obj, key, value) {
          return Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          }), obj[key];
        };
        var wrap = function wrap2(innerFn, outerFn, self2, tryLocsList) {
          var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
          return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self2, context)
          }), generator;
        };
        var tryCatch = function tryCatch2(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        };
        var Generator = function Generator2() {
        };
        var GeneratorFunction = function GeneratorFunction2() {
        };
        var GeneratorFunctionPrototype = function GeneratorFunctionPrototype2() {
        };
        var defineIteratorMethods = function defineIteratorMethods2(prototype) {
          [
            "next",
            "throw",
            "return"
          ].forEach(function(method) {
            define2(prototype, method, function(arg) {
              return this._invoke(method, arg);
            });
          });
        };
        var AsyncIterator = function AsyncIterator2(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg, value = result.value;
              return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
                invoke("next", value2, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                result.value = unwrapped, resolve(result);
              }, function(error) {
                return invoke("throw", error, resolve, reject);
              });
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        };
        var makeInvokeMethod = function makeInvokeMethod2(innerFn, self2, context) {
          var state = "suspendedStart";
          return function(method, arg) {
            if ("executing" === state)
              throw new Error("Generator is already running");
            if ("completed" === state) {
              if ("throw" === method)
                throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel)
                    continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method)
                context.sent = context._sent = context.arg;
              else if ("throw" === context.method) {
                if ("suspendedStart" === state)
                  throw state = "completed", context.arg;
                context.dispatchException(context.arg);
              } else
                "return" === context.method && context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self2, context);
              if ("normal" === record.type) {
                if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                  continue;
                return {
                  value: record.arg,
                  done: context.done
                };
              }
              "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
          };
        };
        var pushTryEntry = function pushTryEntry2(locs) {
          var entry = {
            tryLoc: locs[0]
          };
          1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
        };
        var resetTryEntry = function resetTryEntry2(entry) {
          var record = entry.completion || {};
          record.type = "normal", delete record.arg, entry.completion = record;
        };
        var Context = function Context2(tryLocsList) {
          this.tryEntries = [
            {
              tryLoc: "root"
            }
          ], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
        };
        var values = function values2(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod)
              return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next)
              return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next2() {
                for (; ++i < iterable.length; ) {
                  if (hasOwn.call(iterable, i))
                    return next2.value = iterable[i], next2.done = false, next2;
                }
                return next2.value = void 0, next2.done = true, next2;
              };
              return next.next = next;
            }
          }
          return {
            next: doneResult
          };
        };
        var doneResult = function doneResult2() {
          return {
            value: void 0,
            done: true
          };
        };
        module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
          return exports2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        var exports2 = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
          obj[key] = desc.value;
        }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        try {
          define2({}, "");
        } catch (err) {
          define2 = function define3(obj, key, value) {
            return obj[key] = value;
          };
        }
        exports2.wrap = wrap;
        var ContinueSentinel = {};
        var IteratorPrototype = {};
        define2(IteratorPrototype, iteratorSymbol, function() {
          return this;
        });
        var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (void 0 === method) {
            if (context.delegate = null, "throw" === context.method) {
              if (delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method))
                return ContinueSentinel;
              context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type)
            return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
          var info = record.arg;
          return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: true
        }), defineProperty(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: true
        }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports2.isGeneratorFunction = function(genFun) {
          var ctor = "function" == typeof genFun && genFun.constructor;
          return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        }, exports2.mark = function(genFun) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define2(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
        }, exports2.awrap = function(arg) {
          return {
            __await: arg
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
          return this;
        }), exports2.AsyncIterator = AsyncIterator, exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
          void 0 === PromiseImpl && (PromiseImpl = Promise);
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
          return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
        }, defineIteratorMethods(Gp), define2(Gp, toStringTagSymbol, "Generator"), define2(Gp, iteratorSymbol, function() {
          return this;
        }), define2(Gp, "toString", function() {
          return "[object Generator]";
        }), exports2.keys = function(val) {
          var object = Object(val), keys = [];
          for (var key in object) {
            keys.push(key);
          }
          return keys.reverse(), function next() {
            for (; keys.length; ) {
              var key2 = keys.pop();
              if (key2 in object)
                return next.value = key2, next.done = false, next;
            }
            return next.done = true, next;
          };
        }, exports2.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
              for (var name in this) {
                "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
              }
          },
          stop: function stop() {
            this.done = true;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type)
              throw rootRecord.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            var handle = function handle2(loc, caught) {
              return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
            };
            if (this.done)
              throw exception;
            var context = this;
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i], record = entry.completion;
              if ("root" === entry.tryLoc)
                return handle("end");
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc)
                    return handle(entry.catchLoc, true);
                  if (this.prev < entry.finallyLoc)
                    return handle(entry.finallyLoc);
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc)
                    return handle(entry.catchLoc, true);
                } else {
                  if (!hasFinally)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < entry.finallyLoc)
                    return handle(entry.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if ("throw" === record.type)
              throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc)
                return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if ("throw" === record.type) {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
          }
        }, exports2;
      }
      module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/regenerator/index.js
  var require_regenerator = __commonJS({
    "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
      var runtime = require_regeneratorRuntime()();
      module.exports = runtime;
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/@babel/runtime/helpers/setPrototypeOf.js
  var require_setPrototypeOf = __commonJS({
    "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
      function _setPrototypeOf(o, p) {
        module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _setPrototypeOf(o, p);
      }
      module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/inheritsLoose.js
  var require_inheritsLoose = __commonJS({
    "node_modules/@babel/runtime/helpers/inheritsLoose.js"(exports, module) {
      var setPrototypeOf = require_setPrototypeOf();
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        setPrototypeOf(subClass, superClass);
      }
      module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/promise-polyfill/lib/index.js
  var require_lib = __commonJS({
    "node_modules/promise-polyfill/lib/index.js"(exports, module) {
      "use strict";
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function finallyConstructor(callback) {
        var constructor = this.constructor;
        return this.then(function(value) {
          return constructor.resolve(callback()).then(function() {
            return value;
          });
        }, function(reason) {
          return constructor.resolve(callback()).then(function() {
            return constructor.reject(reason);
          });
        });
      }
      function allSettled(arr) {
        var P = this;
        return new P(function(resolve2, reject2) {
          if (!(arr && typeof arr.length !== "undefined")) {
            return reject2(new TypeError((typeof arr === "undefined" ? "undefined" : _typeof(arr)) + " " + arr + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
          }
          var args = Array.prototype.slice.call(arr);
          if (args.length === 0)
            return resolve2([]);
          var remaining = args.length;
          function res(i2, val) {
            if (val && (typeof val === "object" || typeof val === "function")) {
              var then = val.then;
              if (typeof then === "function") {
                then.call(val, function(val2) {
                  res(i2, val2);
                }, function(e) {
                  args[i2] = {
                    status: "rejected",
                    reason: e
                  };
                  if (--remaining === 0) {
                    resolve2(args);
                  }
                });
                return;
              }
            }
            args[i2] = {
              status: "fulfilled",
              value: val
            };
            if (--remaining === 0) {
              resolve2(args);
            }
          }
          for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
          }
        });
      }
      var setTimeoutFunc = setTimeout;
      function isArray(x) {
        return Boolean(x && typeof x.length !== "undefined");
      }
      function noop() {
      }
      function bind(fn, thisArg) {
        return function() {
          fn.apply(thisArg, arguments);
        };
      }
      function Promise2(fn) {
        if (!_instanceof(this, Promise2))
          throw new TypeError("Promises must be constructed via new");
        if (typeof fn !== "function")
          throw new TypeError("not a function");
        this._state = 0;
        this._handled = false;
        this._value = void 0;
        this._deferreds = [];
        doResolve(fn, this);
      }
      function handle(self2, deferred) {
        while (self2._state === 3) {
          self2 = self2._value;
        }
        if (self2._state === 0) {
          self2._deferreds.push(deferred);
          return;
        }
        self2._handled = true;
        Promise2._immediateFn(function() {
          var cb = self2._state === 1 ? deferred.onFulfilled : deferred.onRejected;
          if (cb === null) {
            (self2._state === 1 ? resolve : reject)(deferred.promise, self2._value);
            return;
          }
          var ret;
          try {
            ret = cb(self2._value);
          } catch (e) {
            reject(deferred.promise, e);
            return;
          }
          resolve(deferred.promise, ret);
        });
      }
      function resolve(self2, newValue) {
        try {
          if (newValue === self2)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
            var then = newValue.then;
            if (_instanceof(newValue, Promise2)) {
              self2._state = 3;
              self2._value = newValue;
              finale(self2);
              return;
            } else if (typeof then === "function") {
              doResolve(bind(then, newValue), self2);
              return;
            }
          }
          self2._state = 1;
          self2._value = newValue;
          finale(self2);
        } catch (e) {
          reject(self2, e);
        }
      }
      function reject(self2, newValue) {
        self2._state = 2;
        self2._value = newValue;
        finale(self2);
      }
      function finale(self2) {
        if (self2._state === 2 && self2._deferreds.length === 0) {
          Promise2._immediateFn(function() {
            if (!self2._handled) {
              Promise2._unhandledRejectionFn(self2._value);
            }
          });
        }
        for (var i = 0, len = self2._deferreds.length; i < len; i++) {
          handle(self2, self2._deferreds[i]);
        }
        self2._deferreds = null;
      }
      function Handler(onFulfilled, onRejected, promise) {
        this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
        this.onRejected = typeof onRejected === "function" ? onRejected : null;
        this.promise = promise;
      }
      function doResolve(fn, self2) {
        var done = false;
        try {
          fn(function(value) {
            if (done)
              return;
            done = true;
            resolve(self2, value);
          }, function(reason) {
            if (done)
              return;
            done = true;
            reject(self2, reason);
          });
        } catch (ex) {
          if (done)
            return;
          done = true;
          reject(self2, ex);
        }
      }
      Promise2.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
      };
      Promise2.prototype.then = function(onFulfilled, onRejected) {
        var prom = new this.constructor(noop);
        handle(this, new Handler(onFulfilled, onRejected, prom));
        return prom;
      };
      Promise2.prototype["finally"] = finallyConstructor;
      Promise2.all = function(arr) {
        return new Promise2(function(resolve2, reject2) {
          if (!isArray(arr)) {
            return reject2(new TypeError("Promise.all accepts an array"));
          }
          var args = Array.prototype.slice.call(arr);
          if (args.length === 0)
            return resolve2([]);
          var remaining = args.length;
          function res(i2, val) {
            try {
              if (val && (typeof val === "object" || typeof val === "function")) {
                var then = val.then;
                if (typeof then === "function") {
                  then.call(val, function(val2) {
                    res(i2, val2);
                  }, reject2);
                  return;
                }
              }
              args[i2] = val;
              if (--remaining === 0) {
                resolve2(args);
              }
            } catch (ex) {
              reject2(ex);
            }
          }
          for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
          }
        });
      };
      Promise2.allSettled = allSettled;
      Promise2.resolve = function(value) {
        if (value && typeof value === "object" && value.constructor === Promise2) {
          return value;
        }
        return new Promise2(function(resolve2) {
          resolve2(value);
        });
      };
      Promise2.reject = function(value) {
        return new Promise2(function(resolve2, reject2) {
          reject2(value);
        });
      };
      Promise2.race = function(arr) {
        return new Promise2(function(resolve2, reject2) {
          if (!isArray(arr)) {
            return reject2(new TypeError("Promise.race accepts an array"));
          }
          for (var i = 0, len = arr.length; i < len; i++) {
            Promise2.resolve(arr[i]).then(resolve2, reject2);
          }
        });
      };
      Promise2._immediateFn = typeof setImmediate === "function" && function(fn) {
        setImmediate(fn);
      } || function(fn) {
        setTimeoutFunc(fn, 0);
      };
      Promise2._unhandledRejectionFn = function _unhandledRejectionFn(err) {
        if (typeof console !== "undefined" && console) {
          console.warn("Possible Unhandled Promise Rejection:", err);
        }
      };
      module.exports = Promise2;
    }
  });

  // node_modules/@babel/runtime/helpers/assertThisInitialized.js
  var require_assertThisInitialized = __commonJS({
    "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/extends.js
  var require_extends = __commonJS({
    "node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
      function _extends() {
        module.exports = _extends = Object.assign ? Object.assign.bind() : function _extends2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _extends.apply(this, arguments);
      }
      module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/events/events.js"(exports, module) {
      "use strict";
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var R = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      var ReflectOwnKeys;
      if (R && typeof R.ownKeys === "function") {
        ReflectOwnKeys = R.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        };
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn)
          console.warn(warning);
      }
      var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
        return value !== value;
      };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === "undefined" ? "undefined" : _typeof(listener)));
        }
      }
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: function get() {
          return defaultMaxListeners;
        },
        set: function set(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        }
        this._maxListeners = n;
        return this;
      };
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0)
          return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return _getMaxListeners(this);
      };
      EventEmitter.prototype.emit = function emit(type) {
        var args = [];
        for (var i = 1; i < arguments.length; i++)
          args.push(arguments[i]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0)
          doError = doError && events.error === void 0;
        else if (!doError)
          return false;
        if (doError) {
          var er;
          if (args.length > 0)
            er = args[0];
          if (_instanceof(er, Error)) {
            throw er;
          }
          var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
          err.context = er;
          throw err;
        }
        var handler = events[type];
        if (handler === void 0)
          return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);
          for (var i = 0; i < len; ++i)
            ReflectApply(listeners[i], this, args);
        }
        return true;
      };
      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = /* @__PURE__ */ Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [
              listener,
              existing
            ] : [
              existing,
              listener
            ];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m = _getMaxListeners(target);
          if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
          }
        }
        return target;
      }
      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0)
            return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      function _onceWrap(target, type, listener) {
        var state = {
          fired: false,
          wrapFn: void 0,
          target,
          type,
          listener
        };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      EventEmitter.prototype.once = function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0)
          return this;
        list = events[type];
        if (list === void 0)
          return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }
          if (position < 0)
            return this;
          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1)
            events[type] = list[0];
          if (events.removeListener !== void 0)
            this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (events === void 0)
          return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0)
              this._events = /* @__PURE__ */ Object.create(null);
            else
              delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === "removeListener")
              continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }
        return this;
      };
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0)
          return [];
        var evlistener = events[type];
        if (evlistener === void 0)
          return [];
        if (typeof evlistener === "function")
          return unwrap ? [
            evlistener.listener || evlistener
          ] : [
            evlistener
          ];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };
      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      };
      function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i)
          copy[i] = arr[i];
        return copy;
      }
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++)
          list[index] = list[index + 1];
        list.pop();
      }
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }
        return ret;
      }
      function once(emitter, name) {
        return new Promise(function(resolve, reject) {
          var errorListener = function errorListener2(err) {
            emitter.removeListener(name, resolver);
            reject(err);
          };
          var resolver = function resolver2() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          };
          ;
          eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
          });
          if (name !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, {
              once: true
            });
          }
        });
      }
      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler, flags);
        }
      }
      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
        if (typeof emitter.on === "function") {
          if (flags.once) {
            emitter.once(name, listener);
          } else {
            emitter.on(name, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name, function wrapListener(arg) {
            if (flags.once) {
              emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
          });
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + (typeof emitter === "undefined" ? "undefined" : _typeof(emitter)));
        }
      }
    }
  });

  // node_modules/amazon-ivs-player/dist/index.js
  var require_dist = __commonJS({
    "node_modules/amazon-ivs-player/dist/index.js"(exports, module) {
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      !function() {
        "use strict";
        var a = function a2(e2, t2) {
          for (var i2 in t2)
            Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
          return e2;
        };
        var u = function u2(e2) {
          return "" === e2.codecs || "undefined" == typeof MediaSource || MediaSource.isTypeSupported('video/mp4;codecs="' + e2.codecs + '"');
        };
        var c = function c2(e2) {
          var t2, i2;
          return void 0 !== e2.hidden ? (t2 = "hidden", i2 = "visibilitychange") : void 0 !== e2.msHidden ? (t2 = "msHidden", i2 = "msvisibilitychange") : void 0 !== e2.webkitHidden && (t2 = "webkitHidden", i2 = "webkitvisibilitychange"), {
            hidden: t2,
            visibilityChange: i2
          };
        };
        var d = function d2(e2, t2, i2) {
          return Math.min(i2, Math.max(t2, e2));
        };
        var h = function h2(e2) {
          e2.removeAttribute("src");
        };
        var g = function g2(e2) {
          return "number" == typeof e2.webkitDecodedFrameCount ? e2.webkitDecodedFrameCount : "function" == typeof e2.getVideoPlaybackQuality ? e2.getVideoPlaybackQuality().totalVideoFrames : "number" == typeof e2.mozDecodedFrames ? e2.mozDecodedFrames : -1;
        };
        var y = function y2(e2) {
          return "number" == typeof e2.webkitDroppedFrameCount ? e2.webkitDroppedFrameCount : "function" == typeof e2.getVideoPlaybackQuality ? e2.getVideoPlaybackQuality().droppedVideoFrames : -1;
        };
        var E = function E2(e2, t2) {
          for (var i2 = 0; i2 < t2.length; i2++)
            console.info(e2, "start: ", t2.start(i2), ", end: ", t2.end(i2));
        };
        var k = function k2(e2, t2, i2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2.start(n2), o2 = e2.end(n2);
            if (!(o2 <= t2)) {
              if (r2 - i2 > t2)
                break;
              for (var s2 = n2 + 1; s2 < e2.length && !(e2.start(s2) - o2 > i2); s2++)
                o2 = e2.end(s2);
              for (var a2 = n2 - 1; a2 >= 0 && !(r2 - e2.end(a2) > i2); a2--)
                r2 = e2.start(a2);
              return {
                start: Math.min(r2, t2),
                end: o2
              };
            }
          }
          return {
            start: t2,
            end: t2
          };
        };
        var S = function S2(e2, t2, i2) {
          void 0 === i2 && (i2 = l);
          var n2 = k(e2, t2, i2).end - t2 > i2;
          if (e2.length > 1 || !n2)
            for (var r2 = 0; r2 < e2.length; r2++) {
              var o2 = e2.start(r2), s2 = e2.end(r2);
              if (t2 < o2 && s2 - o2 > i2)
                return o2 + i2;
            }
          return n2 ? t2 + i2 : t2;
        };
        var b = function b2(e2, t2, i2) {
          return e2.addEventListener(t2, i2), function() {
            e2.removeEventListener(t2, i2);
          };
        };
        var T = function T2(e2) {
          if (e2.src) {
            var t2 = e2.src;
            h(e2), e2.load(), URL.revokeObjectURL(t2);
          }
        };
        var I = function I2() {
          if (_)
            return _;
          if ("undefined" == typeof window || "undefined" == typeof navigator)
            return _ = w;
          var e2, t2, n2 = i.getParser(navigator.userAgent), r2 = (e2 = String(n2.getBrowserVersion()), t2 = D.exec(e2) || R.exec(e2) || L.exec(e2) || [], {
            major: parseInt(t2[1], 10) || 0,
            minor: parseInt(t2[2], 10) || 0,
            patch: parseInt(t2[3], 10) || 0
          }), o2 = n2.getEngine();
          return _ = {
            chrome: !!n2.some([
              "chrome"
            ]),
            chromecast: navigator.userAgent.toLowerCase().indexOf("crkey") > -1,
            domain: window.location.host.split(".").slice(-2).join("."),
            electron: !!n2.some([
              "electron"
            ]),
            family: n2.getBrowserName().toLowerCase(),
            firefox: !!n2.some([
              "firefox"
            ]),
            host: window.location.host,
            major: r2.major,
            minor: r2.minor,
            msEdgeLegacy: !!n2.some([
              "microsoft edge"
            ]) && "Blink" !== o2.name,
            msEdgeChromium: !!n2.some([
              "microsoft edge"
            ]) && "Blink" === o2.name,
            msIE: !!n2.some([
              "internet explorer"
            ]),
            name: navigator.appVersion,
            opera: !!n2.some([
              "opera"
            ]),
            osName: n2.getOSName(),
            osVersion: String(n2.getOSVersion()),
            patch: r2.patch,
            safari: !!n2.some([
              "safari"
            ]),
            url: window.location.href,
            userAgent: navigator.userAgent,
            mobile: !(!n2.some([
              "mobile"
            ]) && !n2.some([
              "tablet"
            ])),
            supportsDataChannels: "RTCPeerConnection" in window,
            supportsWebTransport: "WebTransport" in window,
            supportsMSEInWorkers: A.isSupportedInWorker()
          };
        };
        var V = function V2(e2) {
          var t2 = e2.type === C.ANALYTICS_EVENT, i2 = e2.arg && "video_error" === e2.arg.name;
          if (t2 && i2) {
            if (!O && !N) {
              var n2 = document.createElement("canvas");
              try {
                var r2 = n2.getContext("webgl") || n2.getContext("experimental-webgl");
                if (r2 && "getExtension" in r2) {
                  var o2 = r2.getExtension("WEBGL_debug_renderer_info");
                  o2 && "getParameter" in r2 && (O = r2.getParameter(o2.UNMASKED_RENDERER_WEBGL), N = r2.getParameter(o2.UNMASKED_VENDOR_WEBGL));
                }
              } catch (e1) {
              }
            }
            e2.arg.properties.gl_renderer = O, e2.arg.properties.gl_vendor = N;
          }
          return e2;
        };
        var B = function B2() {
          return "undefined" != typeof MediaSource;
        };
        var x = function x2() {
          var e2 = I();
          return "Windows" === e2.osName && (e2.chrome || e2.firefox || e2.msEdgeChromium) && B() ? "mediaCapabilities" in navigator ? navigator.mediaCapabilities.decodingInfo({
            type: "media-source",
            video: {
              contentType: 'video/mp4;codecs="vp09.00.41.08"',
              width: 1920,
              height: 1080,
              bitrate: 8e6,
              framerate: 60
            }
          }).then(function(e3) {
            return e3.supported && e3.smooth;
          }) : Promise.resolve(MediaSource.isTypeSupported('video/mp4;codecs="vp09.00.10.08"')) : Promise.resolve(false);
        };
        var re = function re2(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var i2 = 0, n2 = new Array(t2); i2 < t2; i2++)
            n2[i2] = e2[i2];
          return n2;
        };
        var oe = function oe2(e2) {
          return window.WebKitMediaKeys && "function" == typeof window.WebKitMediaKeys.isTypeSupported && window.WebKitMediaKeys.isTypeSupported(Y.FAIRPLAY.keySystem) ? Y.FAIRPLAY.uuid : "function" == typeof navigator.requestMediaKeySystemAccess ? e2.safari ? "" : e2.msIE || e2.msEdgeLegacy ? Y.PLAYREADY.uuid : Y.WIDEVINE.uuid : "";
        };
        var se = function se2(e2, t2) {
          if ((e2 = ae(e2)) === (t2 = ae(t2)))
            return true;
          if (e2.byteLength !== t2.byteLength)
            return false;
          for (var i2 = new DataView(e2), n2 = new DataView(t2), r2 = 0; r2 < i2.byteLength; r2++)
            if (i2.getUint8(r2) !== n2.getUint8(r2))
              return false;
          return true;
        };
        var ae = function ae2(e2) {
          return _instanceof(e2, Uint8Array) || _instanceof(e2, Uint16Array) ? e2.buffer : e2;
        };
        var ue = function ue2(e2) {
          return t2 = function(e3) {
            if (null === e3)
              return [];
            for (var t3 = new DataView(e3.buffer || e3), i3 = [], n2 = 0; !(n2 >= t3.buffer.byteLength); ) {
              var r2 = n2 + t3.getUint32(n2);
              if (n2 += 4, t3.getUint32(n2) === le("pssh")) {
                n2 += 4;
                var o2 = t3.getUint8(n2);
                if (0 === o2 || 1 === o2) {
                  n2++, n2 += 3;
                  for (var s2 = "", a2 = 0; a2 < 4; a2++)
                    s2 += fe(t3.getUint8(n2 + a2));
                  n2 += 4, s2 += "-";
                  for (var u2 = 0; u2 < 2; u2++)
                    s2 += fe(t3.getUint8(n2 + u2));
                  n2 += 2, s2 += "-";
                  for (var c2 = 0; c2 < 2; c2++)
                    s2 += fe(t3.getUint8(n2 + c2));
                  n2 += 2, s2 += "-";
                  for (var d2 = 0; d2 < 2; d2++)
                    s2 += fe(t3.getUint8(n2 + d2));
                  n2 += 2, s2 += "-";
                  for (var h2 = 0; h2 < 6; h2++)
                    s2 += fe(t3.getUint8(n2 + h2));
                  n2 += 6, s2 = s2.toLowerCase(), n2 += 4, i3.push(s2), n2 = r2;
                } else
                  n2 = r2;
              } else
                n2 = r2;
            }
            return i3;
          }(e2), i2 = [], t2.forEach(function(e3) {
            Object.keys(Y).forEach(function(t3) {
              var n2 = Y[t3];
              n2.uuid === e3 && i2.push(n2);
            });
          }), i2;
          var t2, i2;
        };
        var ce = function ce2(e2, t2) {
          return new Promise(function(i2, n2) {
            var r2 = new XMLHttpRequest();
            for (var o2 in r2.open(t2.method, e2, true), t2.headers)
              Object.prototype.hasOwnProperty.call(t2.headers, o2) && r2.setRequestHeader(o2, t2.headers[o2]);
            r2.responseType = t2.responseType, r2.onload = function() {
              200 === r2.status && i2(r2.response);
            }, r2.onloadend = function() {
              n2(r2.status);
            }, r2.send(t2.body);
          });
        };
        var de = function de2(e2) {
          var t2 = he(me(JSON.parse(String.fromCharCode.apply(null, e2)).sinf[0]), "schi");
          return function(e3) {
            for (var t3, i2 = "", n2 = function(e4, t4) {
              var i3 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
              if (i3)
                return (i3 = i3.call(e4)).next.bind(i3);
              if (Array.isArray(e4) || (i3 = function(e5, t5) {
                if (e5) {
                  if ("string" == typeof e5)
                    return re(e5, t5);
                  var i4 = Object.prototype.toString.call(e5).slice(8, -1);
                  return "Object" === i4 && e5.constructor && (i4 = e5.constructor.name), "Map" === i4 || "Set" === i4 ? Array.from(e5) : "Arguments" === i4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i4) ? re(e5, t5) : void 0;
                }
              }(e4)) || t4 && e4 && "number" == typeof e4.length) {
                i3 && (e4 = i3);
                var n3 = 0;
                return function() {
                  return n3 >= e4.length ? {
                    done: true
                  } : {
                    done: false,
                    value: e4[n3++]
                  };
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }(e3); !(t3 = n2()).done; )
              i2 += fe(t3.value);
            return i2;
          }(he(t2, "tenc").subarray(8, 24));
        };
        var he = function he2(e2, t2) {
          for (var i2 = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), n2 = le(t2), r2 = 0; r2 < e2.byteLength; ) {
            var o2 = i2.getUint32(r2);
            if (i2.getUint32(r2 + 4) === n2)
              return e2.subarray(r2 + 8, r2 + o2);
            r2 += o2;
          }
          return new Uint8Array(e2);
        };
        var le = function le2(e2) {
          return (e2.charCodeAt(0) << 24) + (e2.charCodeAt(1) << 16) + (e2.charCodeAt(2) << 8) + e2.charCodeAt(3);
        };
        var fe = function fe2(e2) {
          var t2 = e2.toString(16);
          return 1 === t2.length ? "0" + t2 : t2;
        };
        var me = function me2(e2) {
          for (var t2 = atob(e2), i2 = t2.length, n2 = new Uint8Array(i2), r2 = 0; r2 < i2; r2++)
            n2[r2] = t2.charCodeAt(r2);
          return n2;
        };
        var ve = function ve2(e2) {
          return decodeURIComponent(e2.replace(/\+/g, " "));
        };
        var ke = function ke2(e2) {
          var t2 = "";
          if (e2.getElementsByTagName("Challenge").length > 0 && e2.getElementsByTagName("Challenge")[0]) {
            var i2 = e2.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
            i2 && (t2 = atob(i2));
          }
          return t2;
        };
        var Se = function Se2(e2) {
          for (var t2 = {}, i2 = e2.getElementsByTagName("name"), n2 = e2.getElementsByTagName("value"), r2 = 0; r2 < i2.length; r2++) {
            var o2 = i2[r2].childNodes[0].nodeValue;
            null != o2 && (t2[o2] = n2[r2].childNodes[0].nodeValue);
          }
          return t2;
        };
        var be = function be2(e2) {
          var t2 = String.fromCharCode.apply(null, new Uint16Array(e2)), i2 = new DOMParser().parseFromString(t2, "application/xml");
          return {
            headers: Se(i2),
            body: ke(i2)
          };
        };
        var Te = function Te2(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var i2 = 0, n2 = new Array(t2); i2 < t2; i2++)
            n2[i2] = e2[i2];
          return n2;
        };
        var $e = function $e2(e2, t2, i2) {
          var n2, r2, o2, s2;
          return void 0 === i2 && (i2 = false), I().msIE ? n2 = new Ze(e2) : (r2 = e2, o2 = window.location, (s2 = document.createElement("a")).href = r2, n2 = s2.hostname === o2.hostname && s2.port === o2.port && s2.protocol === o2.protocol ? new Worker(e2) : new Worker(URL.createObjectURL(new Blob([
            "importScripts('" + e2 + "')"
          ])))), n2.postMessage({
            wasmBinaryUrl: t2,
            showWorkerLogs: i2
          }), n2;
        };
        var it = function it2(e2) {
          var t2 = e2.asmWorker, i2 = e2.wasmWorker, n2 = e2.wasmBinary;
          if (!tt && !t2)
            throw new Error("WebAssembly is not supported by the browser. This is required for playback.");
          var r2 = $e(tt ? i2 : t2, n2, e2.showWorkerLog);
          return new ht(e2, r2);
        };
        var mt = function mt2(e2, t2) {
          if (void 0 === e2 || "function" != typeof e2.getTech)
            throw {
              message: "videojs not available, AmazonIVS tech not registered",
              code: 1
            };
          if (!tt)
            throw {
              message: "WebAssembly support is required for AmazonIVS tech",
              code: 2
            };
          if (!e2.getTech(ft)) {
            var i2 = e2.getTech("Tech"), n2 = e2.extend(i2, {
              constructor: function constructor(n3, r3) {
                this._readyState = dt.HAVE_NOTHING, this._defaultPlaybackRate = 1, this._seeking = false, t2.playerFramework = {
                  name: "videojs",
                  version: e2.VERSION
                }, this._mediaPlayer = it(t2), this._mediaPlayer.setAutoplay(true === n3.autoplay), this._attachVideojsListeners(), this._mediaPlayer.addEventListener(C.METADATA, this._onCaptionEvent.bind(this)), this.featuresProgressEvents = true, this.featuresTimeupdateEvents = true, this.featuresPlaybackRate = true, this.featuresFullscreenResize = true, this.featuresVolumeControl = true, this.featuresMuteControl = true, this.featuresNativeTextTracks = false, i2.call(this, n3, r3), window.vttjs && window.vttjs.restore(), this.triggerReady(), setTimeout(function() {
                  this.options_.loop && this._mediaPlayer.setLooping(true), this.options_.muted && this._mediaPlayer.setMuted(true);
                }.bind(this), 0);
              },
              dispose: function dispose() {
                this._mediaPlayer.delete();
              },
              setPreload: function setPreload() {
              },
              autoplay: function autoplay(e3) {
                if ("boolean" != typeof e3)
                  return this._mediaPlayer.autoplay;
                this.setAutoplay(e3);
              },
              setAutoplay: function setAutoplay(e3) {
                this._mediaPlayer.setAutoplay(e3);
              },
              preload: function preload() {
              },
              load: function load() {
              },
              readyState: function readyState() {
                return this._readyState;
              },
              seeking: function seeking() {
                return this._seeking;
              },
              networkState: function networkState() {
                if (!this._mediaPlayer)
                  return 0;
                if (!this._mediaPlayer.getHTMLVideoElement().src)
                  return 3;
                var _$e = this._mediaPlayer.getState();
                return lt[_$e];
              },
              ended: function ended() {
                return this._mediaPlayer.getState() === j.ENDED;
              },
              seekable: function seekable() {
                return e2.createTimeRange(0, this._mediaPlayer.getDuration());
              },
              play: function play() {
                this._mediaPlayer.play(), this.trigger(ut.PLAY);
              },
              pause: function pause() {
                this._mediaPlayer.pause();
              },
              setCurrentTime: function setCurrentTime2(e3) {
                this._mediaPlayer.getHTMLVideoElement().src && (this._mediaPlayer.seekTo(e3), this._seeking = true, this.trigger(ut.SEEKING));
              },
              controls: function controls() {
                return false;
              },
              setControls: function setControls() {
                return false;
              },
              muted: function muted() {
                return this._mediaPlayer.isMuted();
              },
              setMuted: function setMuted(e3) {
                this._mediaPlayer.setMuted(e3);
              },
              volume: function volume() {
                return this._mediaPlayer.getVolume();
              },
              setVolume: function setVolume(e3) {
                this._mediaPlayer.setVolume(e3);
              },
              defaultPlaybackRate: function defaultPlaybackRate(e3) {
                if (!e3)
                  return this._defaultPlaybackRate;
                this._defaultPlaybackRate = e3;
              },
              playbackRate: function playbackRate() {
                return this._mediaPlayer.getPlaybackRate();
              },
              setPlaybackRate: function setPlaybackRate(e3) {
                this._mediaPlayer.setPlaybackRate(e3);
              },
              paused: function paused() {
                return this._mediaPlayer.isPaused();
              },
              duration: function duration() {
                return this._mediaPlayer.getDuration();
              },
              currentTime: function currentTime() {
                return this._mediaPlayer.getPosition();
              },
              createEl: function createEl() {
                var _$e = this._mediaPlayer.getHTMLVideoElement();
                _$e.setAttribute("class", "vjs-tech"), void 0 !== this.options_.disablePictureInPicture && (_$e.disablePictureInPicture = this.options_.disablePictureInPicture), [
                  "preload",
                  "poster"
                ].forEach(function(t4) {
                  this.options_[t4] && _$e.setAttribute(t4, this.options_[t4]);
                }.bind(this)), this.options_.playsinline && (_$e.setAttribute("webkit-playsinline", ""), _$e.setAttribute("playsinline", ""));
                var t3 = document.createElement("div");
                return t3.appendChild(_$e), t3;
              },
              src: function src(e3) {
                this.trigger(ut.LOADSTART), this._seeking = false, this._captionTrack && (this.textTracks().removeTrack(this._captionTrack), this._captionTrack = null), e3 && this._mediaPlayer.load(e3);
              },
              addEventListener: function addEventListener(e3, t3) {
                this._mediaPlayer.addEventListener(e3, t3);
              },
              removeEventListener: function removeEventListener(e3, t3) {
                this._mediaPlayer.removeEventListener(e3, t3);
              },
              getMediaPlayerAPI: function getMediaPlayerAPI() {
                return this._mediaPlayer;
              },
              supportsFullScreen: function supportsFullScreen() {
                return true;
              },
              enterFullScreen: function enterFullScreen() {
                var _$e = this._mediaPlayer.getHTMLVideoElement();
                (_$e.requestFullscreen || _$e.webkitRequestFullscreen || _$e.mozRequestFullScreen || _$e.msRequestFullscreen || _$e.webkitEnterFullscreen || function() {
                  console.error("Fullscreen API is not available");
                }).call(_$e);
              },
              exitFullScreen: function exitFullScreen() {
                (document.exitFullScreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || function() {
                  console.error("Exitscreen API is not available");
                }).call(document);
              },
              requestPictureInPicture: function requestPictureInPicture() {
                return this._mediaPlayer.getHTMLVideoElement().requestPictureInPicture();
              },
              setDisablePictureInPicture: function setDisablePictureInPicture(e3) {
                this._mediaPlayer.getHTMLVideoElement().disablePictureInPicture = e3;
              },
              disablePictureInPicture: function disablePictureInPicture() {
                return this._mediaPlayer.getHTMLVideoElement().disablePictureInPicture;
              },
              _onCaptionEvent: function _onCaptionEvent(e3) {
                if ("text/json" === e3.type) {
                  var t3 = JSON.parse(e3.data);
                  if (t3.caption) {
                    var i3 = t3.caption;
                    this._captionTrack || (this._captionTrack = this.addTextTrack("captions", i3.format), this._currentCue = null), this._currentCue && this._captionTrack.removeCue(this._currentCue);
                    var n3 = this._mediaPlayer.getHTMLVideoElement(), r3 = window.VTTCue || window.vttjs.VTTCue;
                    r3 ? (this._currentCue = new r3(n3.currentTime, n3.currentTime + 2, i3.text), this._captionTrack.addCue(this._currentCue)) : console.warn("No VTTCue implementation available, caption may not be available");
                  }
                }
              },
              _attachVideojsListeners: function _attachVideojsListeners() {
                this._mediaPlayer.addEventListener(j.READY, function() {
                  this._readyState = dt.HAVE_METADATA, this.trigger(ut.LOADED_METADATA);
                }.bind(this)), this._mediaPlayer.addEventListener(j.IDLE, function() {
                  this._readyState = dt.HAVE_NOTHING, this.trigger(ut.PAUSE);
                }.bind(this)), this._mediaPlayer.addEventListener(j.PLAYING, function() {
                  this._readyState <= dt.HAVE_CURRENT_DATA && (this._readyState = dt.HAVE_FUTURE_DATA), this.trigger(ut.PLAY), this.trigger(ut.PLAYING);
                }.bind(this)), this._mediaPlayer.addEventListener(j.ENDED, function() {
                  this._readyState = dt.HAVE_NOTHING, this.trigger(ut.ENDED);
                }.bind(this)), this._mediaPlayer.addEventListener(j.BUFFERING, function() {
                  this._readyState = dt.HAVE_CURRENT_DATA;
                }.bind(this)), this._mediaPlayer.addEventListener(C.REBUFFERING, function() {
                  this._readyState = dt.HAVE_CURRENT_DATA, this.trigger(ut.WAITING);
                }.bind(this)), this._mediaPlayer.addEventListener(C.TIME_UPDATE, function() {
                  this.trigger(ut.TIME_UPDATE);
                }.bind(this)), this._mediaPlayer.addEventListener(C.VOLUME_CHANGED, function() {
                  this.trigger(ut.VOLUME_CHANGE);
                }.bind(this)), this._mediaPlayer.addEventListener(C.MUTED_CHANGED, function() {
                  this.trigger(ut.VOLUME_CHANGE);
                }.bind(this)), this._mediaPlayer.addEventListener(C.ERROR, function() {
                  this.trigger(ut.ERROR);
                }.bind(this)), this._mediaPlayer.addEventListener(C.DURATION_CHANGED, function() {
                  this.trigger(ut.DURATION_CHANGE);
                }.bind(this)), this._mediaPlayer.addEventListener(C.SEEK_COMPLETED, function() {
                  this._seeking = false, this.trigger(ut.SEEKED);
                }.bind(this)), this._mediaPlayer.addEventListener(C.PLAYBACK_RATE_CHANGED, function() {
                  this.trigger(ut.RATE_CHANGE);
                }.bind(this));
              },
              techName: ft
            });
            n2.supportsFullScreen = function() {
              return true;
            }, n2.isSupported = function() {
              return -1 === (navigator.appVersion || "").toLowerCase().indexOf("rv:11");
            }, n2.canPlayType = function(e3) {
              return "string" == typeof e3 && e3.length > 0 && (e3.indexOf("application/x-mpegURL") > -1 ? "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"') : "" !== document.createElement("video").canPlayType(e3));
            }, n2.canPlaySource = function() {
              return true;
            }, e2.registerTech("AmazonIVS", n2);
            var r2 = e2.registerPlugin || e2.plugin;
            r2("getIVSEvents", function() {
              return {
                PlayerEventType: C,
                MetadataEventType: H,
                PlayerState: j,
                ErrorType: rt
              };
            }), r2("getIVSPlayer", function() {
              return this.tech(true).getMediaPlayerAPI();
            });
          }
        };
        var pt = function pt2(e2) {
          if (void 0 === e2 || "function" != typeof e2.getTech)
            throw {
              message: "videojs not available, Amazon IVS Quality Plugin not registered",
              code: 1
            };
          if (!e2.getPlugin(vt)) {
            var t2 = e2.getComponent("MenuButton"), i2 = e2.getComponent("MenuItem"), n2 = e2.extend(i2, {
              constructor: function constructor(e3, t3) {
                var n3 = t3.quality;
                i2.call(this, e3, {
                  selectable: true,
                  label: n3.name
                }), this.quality = n3;
              },
              handleClick: function handleClick(e3) {
                i2.prototype.handleClick.call(this, e3);
                var t3 = this.player().getIVSPlayer();
                "auto" === this.quality.group ? t3.setAutoQualityMode(true) : t3.setQuality(this.quality);
              }
            }), r2 = e2.extend(t2, {
              constructor: function constructor(e3) {
                t2.call(this, e3, {}), this.controlText("Quality");
              },
              createItems: function createItems() {
                var _$e = this.player(), t3 = _$e.getIVSPlayer(), i3 = [], r3 = new n2(_$e, {
                  quality: {
                    group: "auto",
                    name: "Auto"
                  }
                });
                r3.selected(t3.isAutoQualityMode()), r3.on("click", this._clickHandler.bind(this, r3)), r3.on("tap", this._clickHandler.bind(this, r3)), i3.push(r3);
                var o2 = t3.getQuality(), s2 = t3.getQualities();
                return s2 && s2.length > 0 && s2.forEach(function(r4) {
                  var s3 = new n2(_$e, {
                    quality: r4
                  });
                  s3.on("click", this._clickHandler.bind(this, s3)), s3.on("tap", this._clickHandler.bind(this, s3)), t3.isAutoQualityMode() || s3.selected(o2.group === r4.group), i3.push(s3);
                }.bind(this)), t3.addEventListener(C.QUALITY_CHANGED, function(i4) {
                  _$e.controlBar.getChild("QualityMenuButton").qualityItems.forEach(function(e3) {
                    !t3.isAutoQualityMode() && i4 && e3 && e3.quality && e3.selected(i4.group === e3.quality.group);
                  });
                }), this.qualityItems = i3, i3;
              },
              buildCSSClass: function buildCSSClass() {
                return "vjs-icon-hd vjs-icon-placeholder " + t2.prototype.buildCSSClass.call(this);
              },
              _clickHandler: function _clickHandler(e3) {
                this.items.forEach(function(t3) {
                  t3 !== e3 && t3.selected(false);
                });
              }
            });
            e2.registerComponent("QualityMenuButton", r2), (e2.registerPlugin || e2.plugin)(vt, function() {
              var _$e = this;
              _$e.getIVSPlayer().addEventListener(j.READY, function() {
                var t3 = _$e.controlBar.getChild("QualityMenuButton");
                t3 && (t3.dispose(), _$e.controlBar.removeChild(t3)), _$e.controlBar.addChild("QualityMenuButton");
              });
            });
          }
        };
        var e = {
          n: function n2(t2) {
            var i2 = t2 && t2.__esModule ? function i3() {
              return t2.default;
            } : function() {
              return t2;
            };
            return e.d(i2, {
              a: i2
            }), i2;
          },
          d: function d2(t2, i2) {
            for (var n2 in i2)
              e.o(i2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, {
                enumerable: true,
                get: i2[n2]
              });
          }
        };
        e.g = function() {
          if ("object" == typeof globalThis)
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof window)
              return window;
          }
        }(), e.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, e.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e2, "__esModule", {
            value: true
          });
        };
        var t = {};
        e.r(t), e.d(t, {
          AuthorizationError: function AuthorizationError() {
            return ot;
          },
          CaptureEventType: function CaptureEventType() {
            return st;
          },
          ErrorSource: function ErrorSource() {
            return nt;
          },
          ErrorType: function ErrorType() {
            return rt;
          },
          LogLevel: function LogLevel() {
            return at;
          },
          MediaPlayer: function MediaPlayer() {
            return ht;
          },
          MetadataEventType: function MetadataEventType() {
            return H;
          },
          MetadataID3Type: function MetadataID3Type() {
            return F;
          },
          PlayerEventType: function PlayerEventType() {
            return C;
          },
          PlayerState: function PlayerState() {
            return j;
          },
          RemotePlayerEvent: function RemotePlayerEvent() {
            return G;
          },
          create: function create2() {
            return it;
          },
          createWorker: function createWorker() {
            return $e;
          },
          isPlayerSupported: function isPlayerSupported2() {
            return tt;
          },
          isVP9Supported: function isVP9Supported() {
            return x;
          },
          isWasmSupported: function isWasmSupported() {
            return et;
          },
          registerIVSQualityPlugin: function registerIVSQualityPlugin() {
            return pt;
          },
          registerIVSTech: function registerIVSTech() {
            return mt;
          }
        });
        var i = require_es5(), n = require_createClass(), r = e.n(n), o = 101, s = function() {
          var e2 = function e3() {
            this.buffer = void 0, this.head = void 0, this.tail = void 0, this.buffer = [], this.head = 0, this.tail = 0;
          };
          var t2 = e2.prototype;
          return t2.push = function(e3) {
            this.tail === this.buffer.length ? this.buffer.push(e3) : this.buffer[this.tail] = e3, this.tail++;
          }, t2.pop = function() {
            var e3, t3 = null != (e3 = this.buffer[this.head]) ? e3 : null;
            return this.buffer[this.head] = null, this.head++, this.empty() && (this.head = 0, this.tail = 0), t3;
          }, t2.size = function() {
            return this.tail - this.head;
          }, t2.empty = function() {
            return this.head >= this.tail;
          }, e2;
        }();
        var l = 0.1, f = 1 << 30, m = 12e4, v = 3e3, p = {
          audio: 1936684398,
          video: 1986618469
        };
        var C, P = function() {
          var e2 = function e3(e3, t3, i2, n2, r2) {
            this.rawCodec = t3, this.group = i2, this.isProtected = n2, this.onError = r2, this.pending = void 0, this.unsubscribers = [], this.srcBuf = void 0, this.blocked = false, this.srcBuf = e3, this.pending = new s(), this.unsubscribers.push(b(e3, "updateend", this.process.bind(this)));
          };
          var t2 = e2.prototype;
          return t2.getBufferedRanges = function() {
            try {
              var e3 = [];
              if (this.srcBuf)
                for (var t3 = this.srcBuf.buffered, i2 = 0; i2 < t3.length; i2++)
                  e3.push({
                    start: t3.start(i2),
                    end: t3.end(i2)
                  });
              return e3;
            } catch (e1) {
              return [];
            }
          }, t2.abort = function() {
            this.schedule(function(e3) {
              e3.abort();
            });
          }, t2.appendBuffer = function(e3) {
            this.schedule(function(t3) {
              try {
                t3.appendBuffer(e3);
              } catch (e1) {
                if ("QuotaExceededError" !== e1.name)
                  throw e1;
                var i2 = t3.buffered, n2 = i2.start(0), r2 = i2.end(i2.length - 1), o2 = (n2 + r2) / 2;
                t3.remove(o2, r2);
              }
            });
          }, t2.setTimestampOffset = function(e3) {
            this.schedule(function(t3) {
              t3.timestampOffset = e3;
            });
          }, t2.remove = function(e3, t3) {
            this.schedule(function(i2) {
              var n2 = i2.buffered;
              if (n2.length) {
                var r2 = Math.max(e3, n2.start(0)), o2 = Math.min(t3, n2.end(n2.length - 1));
                r2 < o2 && i2.remove(r2, o2);
              }
            });
          }, t2.block = function() {
            var e3 = this;
            return new Promise(function(t3) {
              e3.schedule(function() {
                e3.blocked = true, t3();
              });
            });
          }, t2.unblock = function() {
            this.blocked = false, this.process();
          }, t2.destroy = function() {
            this.pending = new s(), this.unsubscribers.forEach(function(e3) {
              return e3();
            }), this.srcBuf = void 0;
          }, t2.schedule = function(e3) {
            this.pending.empty() && this.canProcess() ? this.safeExecute(e3) : (this.pending.push(e3), this.process());
          }, t2.safeExecute = function(e3) {
            try {
              if (!this.srcBuf)
                throw new Error("srcBuf is undefined");
              e3(this.srcBuf);
            } catch (e1) {
              this.onError(e1, false);
            }
          }, t2.process = function() {
            for (; !this.pending.empty() && this.canProcess(); )
              this.safeExecute(this.pending.pop());
          }, t2.canProcess = function() {
            return !(!this.srcBuf || this.srcBuf.updating || this.blocked);
          }, r()(e2, [
            {
              key: "buffer",
              get: function get() {
                return this.srcBuf;
              }
            },
            {
              key: "codec",
              get: function get() {
                return this.rawCodec;
              }
            },
            {
              key: "timestampOffset",
              get: function get() {
                return this.buffer ? this.buffer.timestampOffset : 0;
              }
            }
          ]), e2;
        }(), A = function() {
          var e2 = function e3(e3, t3, i2) {
            this.mediaSource = e3, this.onEnded = t3, this.onError = i2, this.sourceBuffers = /* @__PURE__ */ Object.create(null), this.unsubscribers = [], this.unsubscribers.push(b(e3, "sourceended", this.onEnded));
          };
          e2.isSupported = function() {
            return void 0 !== self.MediaSource;
          }, e2.isSupportedInWorker = function() {
            return e2.isSupported() && MediaSource.canConstructInDedicatedWorker && "function" == typeof MediaSourceHandle;
          }, e2.create = function(t3, i2) {
            var n2 = new MediaSource(), r2 = new Promise(function(r3, o2) {
              var s2 = b(n2, "sourceopen", function() {
                "open" === n2.readyState ? (r3(new e2(n2, t3, i2)), s2()) : o2("The MediaSource was closed upon opening");
              });
            });
            return {
              ms: n2,
              sink: r2
            };
          };
          var t2 = e2.prototype;
          return t2.getBufferedRanges = function(e3) {
            var t3, i2;
            return null != (t3 = null == (i2 = this.sourceBuffers[p[e3]]) ? void 0 : i2.getBufferedRanges()) ? t3 : [];
          }, t2.addTrack = function(e3, t3, i2, n2) {
            var r2, o2 = this.mediaSource, s2 = this.sourceBuffers;
            if (s2[e3])
              return null != (r2 = s2[e3].buffer) ? r2 : null;
            try {
              var a2 = o2.addSourceBuffer("video/mp4;" + t3);
              return s2[e3] = new P(a2, t3, i2, n2, this.handleError.bind(this)), a2;
            } catch (e1) {
              this.handleError(e1, "open" === o2.readyState);
            }
            return null;
          }, t2.append = function(e3, t3) {
            var i2;
            null == (i2 = this.sourceBuffers[e3]) || i2.appendBuffer(t3);
          }, t2.remove = function(e3, t3) {
            for (var i2 = this.sourceBuffers, n2 = 0, r2 = Object.keys(i2); n2 < r2.length; n2++)
              i2[r2[n2]].remove(e3, t3);
          }, t2.setTimestampOffset = function(e3, t3) {
            var i2 = this.sourceBuffers[e3];
            i2 && (i2.abort(), i2.setTimestampOffset(t3));
          }, t2.setDuration = function(e3) {
            var t3 = this;
            this.scheduleUpdate(function() {
              return t3.mediaSource.duration = e3;
            }).catch(function(e4) {
              return t3.handleError(e4, false);
            });
          }, t2.setLiveSeekableRange = function(e3, t3) {
            var i2 = this;
            this.scheduleUpdate(function() {
              return i2.mediaSource.setLiveSeekableRange(e3, t3);
            }).catch(function(e4) {
              return i2.handleError(e4, false);
            });
          }, t2.scheduleUpdate = function(e3) {
            var t3 = this;
            void 0 === e3 && (e3 = M);
            var i2 = Object.keys(this.sourceBuffers).map(function(e4) {
              return t3.sourceBuffers[e4];
            });
            return Promise.all(i2.map(function(e4) {
              return e4.block();
            })).then(e3).then(function() {
              return i2.forEach(function(e4) {
                return e4.unblock();
              });
            });
          }, t2.destroy = function() {
            this.destroySourceBuffers(), this.unsubscribers.forEach(function(e3) {
              return e3();
            }), this.unsubscribers = [];
          }, t2.handleError = function(e3, t3) {
            var i2 = e3.code || 102, n2 = 102;
            "NotSupportedError" === e3.name && (n2 = i2 = 4), this.onError(n2, i2, e3.message, t3);
          }, t2.destroySourceBuffers = function() {
            for (var _$e = this.mediaSource, t3 = _$e.sourceBuffers, i2 = 0; i2 < t3.length; i2++)
              try {
                _$e.removeSourceBuffer(t3[i2]);
              } catch (e3) {
                this.handleError(e3, false);
              }
            for (var n2 = 0, r2 = Object.keys(this.sourceBuffers); n2 < r2.length; n2++) {
              var o2 = r2[n2];
              this.sourceBuffers[o2].destroy();
            }
            this.sourceBuffers = /* @__PURE__ */ Object.create(null);
          }, r()(e2, [
            {
              key: "duration",
              get: function get() {
                return this.mediaSource.duration;
              }
            },
            {
              key: "bufferProperties",
              get: function get() {
                var e3 = this.sourceBuffers;
                return Object.keys(e3).map(function(t3) {
                  var i2 = e3[t3];
                  return {
                    trackID: Number(t3),
                    codec: i2.codec,
                    mode: "mse",
                    path: "",
                    isProtected: i2.isProtected,
                    group: i2.group,
                    srcObj: null
                  };
                });
              }
            }
          ]), e2;
        }(), M = function M2() {
        }, D = /^(\d+)\.(\d+)\.(\d+)[+|-]?(.*)?$/, R = /^(\d+)\.(\d+)[+|-]?(.*)?$/, L = /^(\d+)$/, w = {
          chrome: false,
          chromecast: false,
          domain: "",
          electron: false,
          family: "",
          firefox: false,
          host: "",
          major: -1,
          minor: -1,
          msEdgeLegacy: false,
          msEdgeChromium: false,
          msIE: false,
          name: "",
          opera: false,
          osName: "",
          osVersion: "",
          patch: -1,
          safari: false,
          url: "",
          userAgent: "",
          mobile: false,
          supportsDataChannels: false,
          supportsWebTransport: false,
          supportsMSEInWorkers: false
        }, _ = null;
        !function(e2) {
          e2.INITIALIZED = "PlayerInitialized", e2.QUALITY_CHANGED = "PlayerQualityChanged", e2.DURATION_CHANGED = "PlayerDurationChanged", e2.VOLUME_CHANGED = "PlayerVolumeChanged", e2.MUTED_CHANGED = "PlayerMutedChanged", e2.PLAYBACK_RATE_CHANGED = "PlayerPlaybackRateChanged", e2.REBUFFERING = "PlayerRebuffering", e2.AUDIO_BLOCKED = "PlayerAudioBlocked", e2.PLAYBACK_BLOCKED = "PlayerPlaybackBlocked", e2.ERROR = "PlayerError", e2.RECOVERABLE_ERROR = "PlayerRecoverableError", e2.ANALYTICS_EVENT = "PlayerAnalyticsEvent", e2.TIME_UPDATE = "PlayerTimeUpdate", e2.BUFFER_UPDATE = "PlayerBufferUpdate", e2.SEEK_COMPLETED = "PlayerSeekCompleted", e2.SESSION_DATA = "PlayerSessionData", e2.STATE_CHANGED = "PlayerStateChanged", e2.WORKER_ERROR = "PlayerWorkerError", e2.METADATA = "PlayerMetadata", e2.TEXT_CUE = "PlayerTextCue", e2.TEXT_METADATA_CUE = "PlayerTextMetadataCue", e2.AD_CUE = "PlayerAdCue", e2.STREAM_SOURCE_CUE = "PlayerStreamSourceCue", e2.NETWORK_UNAVAILABLE = "PlayerNetworkUnavailable", e2.SEGMENT_DISCONTINUITY = "PlayerSegmentDiscontinuity", e2.SEGMENT_METADATA = "PlayerSegmentMetadata";
        }(C || (C = {}));
        var O = null, N = null;
        var U = function() {
          function e2() {
            var t2 = this;
            this.batteryManager = void 0, this.processor = this.processor.bind(this), e2.isSupported() && window.navigator.getBattery().then(function(e3) {
              t2.batteryManager = e3;
            });
          }
          return e2.isSupported = function() {
            return window && window.navigator && !!window.navigator.getBattery;
          }, e2.prototype.processor = function(e3) {
            var t2 = e3.type === C.ANALYTICS_EVENT, i2 = e3.arg && "minute-watched" === e3.arg.name;
            return t2 && i2 && this.batteryManager && (e3.arg.properties.battery_percent = this.batteryManager.level), e3;
          }, e2;
        }();
        var H, F, G, j, W = {
          keySystem: "org.w3.clearkey",
          uuid: "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b"
        }, K = {
          keySystem: "com.apple.fps.2_0",
          certUrl: "https://fp-keyos-twitch.licensekeyserver.com/cert/a17fd33d3843df9b17679ccf50a419b2.der",
          licenseUrl: "https://fp-keyos-twitch.licensekeyserver.com/getkey",
          uuid: "94CE86FB-07FF-4F43-ADB8-93D2FA968CA2"
        }, q = {
          keySystem: "com.microsoft.playready",
          licenseUrl: "https://pr-keyos-twitch.licensekeyserver.com/core/rightsmanager.asmx",
          uuid: "9a04f079-9840-4286-ab92-e65be0885f95"
        }, Q = {
          keySystem: "com.widevine.alpha",
          licenseUrl: "https://wv-keyos-twitch.licensekeyserver.com",
          uuid: "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
        }, Y = {
          CLEARKEY: W,
          FAIRPLAY: K,
          PLAYREADY: q,
          WIDEVINE: Q
        }, z = {
          "com.widevine.alpha": Q,
          "com.microsoft.playready": q,
          "com.apple.fps.2_0": K,
          "org.w3.clearkey": W
        }, X = {
          value: 4,
          message: "Your browser does not support any DRM Content Decryption Modules"
        }, J = {
          value: 4,
          message: "There was an issue while updating DRM License"
        }, Z = {
          value: 2,
          message: "Error while requesting DRM license"
        }, $ = {
          value: 4,
          message: "Error creating key session"
        }, ee = {
          value: 4,
          message: "Encryption key not usable because of internal error in CDM"
        }, te = {
          value: 4,
          message: "Unable to find valid CDM support on media"
        }, ie = {
          value: 2,
          message: "Request for AuthXML failed"
        }, ne = {
          value: 2,
          message: "Request for DRM certificate failed"
        };
        !function(e2) {
          e2.ID3 = "MetaID3", e2.CAPTION = "MetaCaption";
        }(H || (H = {})), function(e2) {
          e2.METADATA_ID = "metadata.live-video.net", e2.INBAND_METADATA_ID = "inband.metadata.live-video.net";
        }(F || (F = {})), function(e2) {
          e2.AVAILABLE = "RemotePlayerAvailable", e2.UNAVAILABLE = "RemotePlayerUnavailable", e2.SESSION_STARTED = "RemotePlayerSessionStarted", e2.SESSION_ENDED = "RemotePlayerSessionEnded";
        }(G || (G = {})), function(e2) {
          e2.IDLE = "Idle", e2.READY = "Ready", e2.BUFFERING = "Buffering", e2.PLAYING = "Playing", e2.ENDED = "Ended";
        }(j || (j = {}));
        var pe = require_asyncToGenerator(), ge = e.n(pe), ye = require_regenerator(), Ee = e.n(ye);
        var Ce, Pe = [
          {
            initDataTypes: [
              "cenc"
            ],
            audioCapabilities: [
              {
                contentType: 'audio/mp4;codecs="mp4a.40.2"'
              }
            ],
            videoCapabilities: [
              {
                robustness: "SW_SECURE_CRYPTO",
                contentType: 'video/mp4;codecs="avc1.42E01E"'
              }
            ]
          }
        ], Ae = function() {
          var e2 = function e3(e3) {
            var t3 = this;
            this.video = void 0, this.listener = void 0, this.cdmSupport = void 0, this.selectedCDM = void 0, this.mediaKeys = void 0, this.pendingSessions = void 0, this.sessions = void 0, this.authXml = void 0, this.video = e3.video, this.listener = e3.listener, this.cdmSupport = null, this.selectedCDM = null, this.mediaKeys = void 0, this.pendingSessions = [], this.reset(), this.video.addEventListener("encrypted", function(e4) {
              return t3.handleEncrypted(e4);
            }), this.video.addEventListener("webkitneedkey", function(e4) {
              return t3.handleWebKitEncrypted(e4);
            });
          };
          var t2 = e2.prototype;
          return t2.configure = function(e3) {
            var t3 = this;
            if (!this.authXml) {
              var i2 = new URL(e3), n2 = i2.pathname.split("/"), r2 = n2[n2.length - 1].split(".")[0], o2 = function(e4) {
                var t4 = new URL(e4).searchParams, i3 = {};
                return t4.forEach(function(e5, t5) {
                  i3[ve(t5)] = e5 ? ve(e5) : "";
                }), i3;
              }(e3), s2 = o2.token, a2 = o2.sig, u2 = "https://" + i2.host + "/api/authxml/" + r2 + "?token=" + encodeURIComponent(s2) + "&sig=" + a2;
              this.authXml = ce(u2, {
                method: "GET",
                responseType: "text"
              }).catch(function(e4) {
                t3.handleError(Object.assign({
                  code: e4
                }, ie));
              });
            }
          }, t2.reset = function() {
            this.authXml = null, this.sessions = [];
          }, t2.isProtected = function() {
            return null !== this.authXml;
          }, t2.handleError = function(e3) {
            this.listener.onSinkError({
              value: e3.value || 4,
              code: e3.code || 0,
              message: e3.message || ""
            });
          }, t2.hasSession = function(e3) {
            if (!e3)
              return false;
            for (var t3, i2 = function(e4, t4) {
              var i3 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
              if (i3)
                return (i3 = i3.call(e4)).next.bind(i3);
              if (Array.isArray(e4) || (i3 = function(e5, t5) {
                if (e5) {
                  if ("string" == typeof e5)
                    return Te(e5, t5);
                  var i4 = Object.prototype.toString.call(e5).slice(8, -1);
                  return "Object" === i4 && e5.constructor && (i4 = e5.constructor.name), "Map" === i4 || "Set" === i4 ? Array.from(e5) : "Arguments" === i4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i4) ? Te(e5, t5) : void 0;
                }
              }(e4)) || t4 && e4 && "number" == typeof e4.length) {
                i3 && (e4 = i3);
                var n3 = 0;
                return function() {
                  return n3 >= e4.length ? {
                    done: true
                  } : {
                    done: false,
                    value: e4[n3++]
                  };
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }(this.sessions); !(t3 = i2()).done; ) {
              var n2 = t3.value;
              if (n2.initData && se(n2.initData, e3))
                return true;
            }
            return false;
          }, t2.createKeySystemSupportChain = function() {
            if (null === this.cdmSupport || 0 === this.cdmSupport.length)
              return Promise.reject(te);
            var e3 = Promise.reject();
            return this.cdmSupport.forEach(function(t3) {
              e3 = e3.catch(function() {
                return navigator.requestMediaKeySystemAccess(t3.keySystem, Pe);
              });
            }), e3 = e3.catch(function() {
              return Promise.reject(X);
            });
          }, t2.handleEncrypted = function() {
            var e3 = ge()(Ee().mark(function e4(t3) {
              var i2, n2;
              return Ee().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      if (!this.hasSession(t3.initData)) {
                        e5.next = 2;
                        break;
                      }
                      return e5.abrupt("return");
                    case 2:
                      if (this.sessions.push(t3), "sinf" !== t3.initDataType) {
                        e5.next = 6;
                        break;
                      }
                      return this.handleWebKitEncrypted(t3), e5.abrupt("return");
                    case 6:
                      if (null === this.cdmSupport && (this.cdmSupport = ue(t3.initData)), void 0 !== this.mediaKeys) {
                        e5.next = 24;
                        break;
                      }
                      return this.mediaKeys = null, e5.prev = 9, e5.next = 12, this.createKeySystemSupportChain();
                    case 12:
                      return i2 = e5.sent, this.selectedCDM = z[i2.keySystem], e5.next = 16, i2.createMediaKeys();
                    case 16:
                      return n2 = e5.sent, e5.next = 19, this.setMediaKeys(n2);
                    case 19:
                      e5.next = 24;
                      break;
                    case 21:
                      e5.prev = 21, e5.t0 = e5.catch(9), this.handleError(e5.t0);
                    case 24:
                      this.addSession(t3);
                    case 25:
                    case "end":
                      return e5.stop();
                  }
              }, e4, this, [
                [
                  9,
                  21
                ]
              ]);
            }));
            return function(t3) {
              return e3.apply(this, arguments);
            };
          }(), t2.setMediaKeys = function(e3) {
            var t3 = this;
            return this.mediaKeys = e3, this.pendingSessions.forEach(function(e4) {
              return t3.createSessionRequest(e4).catch(function() {
                t3.handleError($);
              });
            }), this.pendingSessions = [], this.video.setMediaKeys(this.mediaKeys);
          }, t2.addSession = function(e3) {
            var t3 = this;
            this.mediaKeys ? this.createSessionRequest(e3).catch(function() {
              t3.handleError($);
            }) : this.pendingSessions.push(e3);
          }, t2.createSessionRequest = function(e3) {
            var t3, i2 = this, n2 = e3.initDataType, r2 = e3.initData, o2 = null == (t3 = this.mediaKeys) ? void 0 : t3.createSession();
            return o2 ? (o2.addEventListener("message", function(e4) {
              return i2.handleMessage(e4);
            }), o2.addEventListener("keystatuseschange", function(e4) {
              return i2.handleKeyStatusesChange(e4, r2);
            }), o2.generateRequest(n2, r2)) : Promise.reject();
          }, t2.handleKeyStatusesChange = function(e3, t3) {
            var i2 = this, n2 = e3.target, r2 = false;
            n2.keyStatuses.forEach(function(e4) {
              switch (e4) {
                case "expired":
                  r2 = true;
                  break;
                case "internal-error":
                  i2.handleError(ee);
              }
            }), r2 && n2.close().then(function() {
              return i2.removeSession(t3);
            });
          }, t2.removeSession = function(e3) {
            for (var t3 = 0; t3 < this.sessions.length; t3++)
              if (this.sessions[t3].initData === e3)
                return void this.sessions.splice(t3, 1);
          }, t2.handleMessage = function() {
            var e3 = ge()(Ee().mark(function e4(t3) {
              var i2, n2, r2 = this;
              return Ee().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      return i2 = t3.target, e5.next = 3, this.generateLicense(t3.message);
                    case 3:
                      (n2 = e5.sent) && i2.update(n2).catch(function() {
                        r2.handleError(J);
                      });
                    case 5:
                    case "end":
                      return e5.stop();
                  }
              }, e4, this);
            }));
            return function(t3) {
              return e3.apply(this, arguments);
            };
          }(), t2.generateLicense = function() {
            var e3 = ge()(Ee().mark(function e4(t3) {
              var i2, n2, r2, o2;
              return Ee().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      if (this.selectedCDM !== Y.CLEARKEY) {
                        e5.next = 7;
                        break;
                      }
                      return i2 = JSON.parse(new TextDecoder().decode(t3)), n2 = i2.kids.map(function(e6) {
                        return {
                          kty: "oct",
                          alg: "A128KW",
                          kid: e6,
                          k: e6
                        };
                      }), r2 = new TextEncoder().encode(JSON.stringify({
                        keys: n2
                      })), e5.abrupt("return", Promise.resolve(r2));
                    case 7:
                      if (!this.authXml) {
                        e5.next = 14;
                        break;
                      }
                      return e5.next = 10, this.authXml;
                    case 10:
                      return o2 = e5.sent, e5.abrupt("return", this.requestLicense(t3, o2));
                    case 14:
                      this.handleError(ie);
                    case 15:
                    case "end":
                      return e5.stop();
                  }
              }, e4, this);
            }));
            return function(t3) {
              return e3.apply(this, arguments);
            };
          }(), t2.requestLicense = function() {
            var e3 = ge()(Ee().mark(function e4(t3, i2) {
              var n2, r2, o2, s2 = this;
              return Ee().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      return r2 = {
                        method: "POST",
                        responseType: "arraybuffer",
                        body: t3,
                        headers: {
                          customdata: i2,
                          "Content-Type": "application/octet-stream"
                        }
                      }, this.selectedCDM === Y.PLAYREADY && (o2 = be(t3), r2.body = o2.body, r2.headers = Object.assign(r2.headers, o2.headers)), e5.abrupt("return", ce((null == (n2 = this.selectedCDM) ? void 0 : n2.licenseUrl) || "", r2).catch(function() {
                        s2.handleError(Object.assign({
                          code: status
                        }, Z));
                      }));
                    case 3:
                    case "end":
                      return e5.stop();
                  }
              }, e4, this);
            }));
            return function(t3, i2) {
              return e3.apply(this, arguments);
            };
          }(), t2.handleWebKitEncrypted = function() {
            var e3 = ge()(Ee().mark(function e4(t3) {
              var i2, n2 = this;
              return Ee().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      return this.selectedCDM = Y.FAIRPLAY, e5.prev = 1, e5.next = 4, ce(Y.FAIRPLAY.certUrl || "", {
                        method: "GET",
                        responseType: "arraybuffer",
                        headers: {
                          Pragma: "Cache-Control: no-cache",
                          "Cache-Control": "max-age=0"
                        }
                      });
                    case 4:
                      i2 = e5.sent, this.setupWebKitMediaKeys(t3, i2).catch(function(e6) {
                        return n2.handleError(e6);
                      }), e5.next = 11;
                      break;
                    case 8:
                      e5.prev = 8, e5.t0 = e5.catch(1), this.handleError(Object.assign({
                        code: e5.t0
                      }, ne));
                    case 11:
                    case "end":
                      return e5.stop();
                  }
              }, e4, this, [
                [
                  1,
                  8
                ]
              ]);
            }));
            return function(t3) {
              return e3.apply(this, arguments);
            };
          }(), t2.setupWebKitMediaKeys = function(e3, t3) {
            var i2 = this;
            if (!e3.initData)
              return Promise.reject("Missing initData on MediaEncryptedEvent");
            this.video.webkitKeys || this.video.webkitSetMediaKeys(new window.WebKitMediaKeys(Y.FAIRPLAY.keySystem));
            var n2 = de(e3.initData), r2 = this.video.webkitKeys.createSession("video/mp4", e3.initData);
            return r2.contentId = n2, new Promise(function(e4, o2) {
              if (i2.video.webkitKeys || o2("Issue setting fairplay media keys"), !r2)
                return o2("Could not create key session");
              r2.addEventListener("webkitkeymessage", function(e5) {
                var r3 = e5.target;
                "certificate" === String.fromCharCode.apply(null, e5.message) ? r3.update(new Uint8Array(t3)) : i2.getWebkitLicense(e5.message, n2).then(function(e6) {
                  var _$t = e6.trim();
                  "<ckc>" === _$t.substr(0, 5) && "</ckc>" === _$t.substr(-6) && (_$t = _$t.slice(5, -6)), r3.update(me(_$t));
                }).catch(o2);
              }), r2.addEventListener("webkitkeyadded", e4), r2.addEventListener("webkitkeyerror", o2);
            });
          }, t2.getWebkitLicense = function(e3, t3) {
            return this.authXml ? this.authXml.then(function(i2) {
              var n2;
              return ce(Y.FAIRPLAY.licenseUrl || "", {
                method: "POST",
                body: "spc=" + (n2 = e3, btoa(String.fromCharCode.apply(null, new Uint16Array(n2))) + "&assetId=") + t3,
                responseType: "text",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  customdata: i2
                }
              }).catch(function(e4) {
                return Promise.reject(Object.assign({
                  code: e4
                }, Z));
              });
            }) : Promise.reject(ie);
          }, e2;
        }(), Me = require_inheritsLoose(), De = e.n(Me), Re = function() {
          var e2 = function e3() {
          };
          var t2 = e2.prototype;
          return t2.addTrack = function(e3) {
          }, t2.bufferDuration = function() {
            return 0;
          }, t2.buffered = function() {
            return {
              start: 0,
              end: 0
            };
          }, t2.getBufferedRanges = function(e3) {
            return [];
          }, t2.captureGesture = function() {
          }, t2.configure = function(e3) {
          }, t2.decodedFrames = function() {
            return 0;
          }, t2.delete = function() {
          }, t2.droppedFrames = function() {
            return 0;
          }, t2.endOfStream = function() {
          }, t2.enqueue = function(e3) {
          }, t2.framerate = function() {
            return 0;
          }, t2.getCurrentTime = function() {
            return 0;
          }, t2.getDisplayHeight = function() {
            return 0;
          }, t2.getDisplayWidth = function() {
            return 0;
          }, t2.getPlaybackRate = function() {
            return 0;
          }, t2.getVolume = function() {
            return 0;
          }, t2.invoke = function(e3) {
            this[e3.name].call(this, e3.arg);
          }, t2.isMuted = function() {
            return false;
          }, t2.onSourceDurationChanged = function(e3) {
          }, t2.pause = function() {
          }, t2.play = function() {
          }, t2.reinit = function() {
          }, t2.remove = function(e3) {
          }, t2.seekTo = function(e3) {
          }, t2.setMuted = function(e3) {
          }, t2.setPlaybackRate = function(e3) {
          }, t2.setTimestampOffset = function(e3) {
          }, t2.setVolume = function(e3) {
          }, t2.changeSrc = function(e3) {
          }, t2.changeSrcObj = function(e3) {
          }, t2.onSegmentDiscontinuity = function() {
          }, e2;
        }(), Le = "pc-chromecast-sender", we = function(t2) {
          function i2(e2) {
            var n3;
            return (n3 = t2.call(this) || this).remotePlayer = void 0, n3.remotePlayerController = void 0, n3.listener = void 0, n3.seekTime = void 0, n3.currentDuration = void 0, n3.listener = e2, n3.currentDuration = 0, i2.prepareCastContext().then(function() {
              n3.remotePlayer = new cast.framework.RemotePlayer(), n3.remotePlayerController = new cast.framework.RemotePlayerController(n3.remotePlayer);
            }).catch(function() {
              n3.listener.onSessionError();
            }), n3;
          }
          De()(i2, t2), i2.canCast = function() {
            return I().chrome;
          }, i2.stopLookingForRemotePlaybackDevices = function(e2) {
            window.cast && window.cast.framework && cast.framework.CastContext.getInstance().removeEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, e2);
          }, i2.lookForRemotePlaybackDevices = function() {
            var e2 = ge()(Ee().mark(function e3(t3) {
              var n3, r2;
              return Ee().wrap(function(e4) {
                for (; ; )
                  switch (e4.prev = e4.next) {
                    case 0:
                      return e4.prev = 0, e4.next = 3, i2.prepareCastContext();
                    case 3:
                      return n3 = e4.sent, r2 = function r3(e5) {
                        switch (e5.castState) {
                          case cast.framework.CastState.NO_DEVICES_AVAILABLE:
                            break;
                          case cast.framework.CastState.NOT_CONNECTED:
                            t3.onRemoteDevice(true);
                            break;
                          case cast.framework.CastState.CONNECTED:
                            var _$i = n3.getCurrentSession();
                            _$i && _$i.getSessionState() === cast.framework.SessionState.SESSION_RESUMED && t3.onRemoteReconnect();
                        }
                      }, n3.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, r2), n3.setOptions({
                        receiverApplicationId: "B3DCF968",
                        autoJoinPolicy: chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
                      }), e4.abrupt("return", r2);
                    case 10:
                      e4.prev = 10, e4.t0 = e4.catch(0), t3.onRemoteDevice(false);
                    case 13:
                    case "end":
                      return e4.stop();
                  }
              }, e3, null, [
                [
                  0,
                  10
                ]
              ]);
            }));
            return function(t3) {
              return e2.apply(this, arguments);
            };
          }(), i2.prepareCastContext = function() {
            var _$t = ge()(Ee().mark(function t3() {
              return Ee().wrap(function(t4) {
                for (; ; )
                  switch (t4.prev = t4.next) {
                    case 0:
                      if (!window.cast || !window.cast.framework) {
                        t4.next = 2;
                        break;
                      }
                      return t4.abrupt("return", Promise.resolve(cast.framework.CastContext.getInstance()));
                    case 2:
                      return t4.abrupt("return", new Promise(function(t5, i3) {
                        if (e.g.__onGCastApiAvailable = function(e2) {
                          e2 ? t5(cast.framework.CastContext.getInstance()) : i3();
                        }, !document.getElementById(Le)) {
                          var n3 = document.createElement("script");
                          n3.id = Le, n3.onerror = function() {
                            document.body.removeChild(n3), e.g.__onGCastApiAvailable = function() {
                            }, i3();
                          }, n3.async = true, n3.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1", document.body.appendChild(n3);
                        }
                      }));
                    case 3:
                    case "end":
                      return t4.stop();
                  }
              }, t3);
            }));
            return function() {
              return _$t.apply(this, arguments);
            };
          }();
          var n2 = i2.prototype;
          return n2.configure = function() {
            var e2 = ge()(Ee().mark(function e3(t3) {
              var n3, r2, o2, s2, a2, u2, c2;
              return Ee().wrap(function(e4) {
                for (; ; )
                  switch (e4.prev = e4.next) {
                    case 0:
                      return n3 = t3.path, e4.prev = 1, e4.next = 4, i2.prepareCastContext();
                    case 4:
                      if (o2 = e4.sent, s2 = o2.getCurrentSession()) {
                        e4.next = 13;
                        break;
                      }
                      return e4.next = 9, o2.requestSession();
                    case 9:
                      s2 = o2.getCurrentSession(), this.setupRemotePlayerListeners(s2), e4.next = 14;
                      break;
                    case 13:
                      s2.getSessionState() === cast.framework.SessionState.SESSION_RESUMED && this.setupRemotePlayerListeners(s2);
                    case 14:
                      return (a2 = new chrome.cast.media.MediaInfo(n3, "")).streamType = chrome.cast.media.StreamType.BUFFERED, u2 = new chrome.cast.media.GenericMediaMetadata(), a2.metadata = u2, a2.customData = {
                        analytics: {
                          chromecast_sender: "player-core",
                          platform: "web"
                        }
                      }, this.remotePlayerController.stop(), c2 = new chrome.cast.media.LoadRequest(a2), this.seekTime > 0 && (c2.currentTime = this.seekTime, this.seekTime = 0), this.currentDuration = 0, e4.next = 25, null == (r2 = s2) ? void 0 : r2.loadMedia(c2);
                    case 25:
                      e4.next = 30;
                      break;
                    case 27:
                      return e4.prev = 27, e4.t0 = e4.catch(1), e4.abrupt("return", this.handleError(e4.t0));
                    case 30:
                    case "end":
                      return e4.stop();
                  }
              }, e3, this, [
                [
                  1,
                  27
                ]
              ]);
            }));
            return function(t3) {
              return e2.apply(this, arguments);
            };
          }(), n2.stopMedia = function() {
            var e2 = ge()(Ee().mark(function e3(t3) {
              var n3, r2;
              return Ee().wrap(function(e4) {
                for (; ; )
                  switch (e4.prev = e4.next) {
                    case 0:
                      return void 0 === t3 && (t3 = true), e4.next = 3, i2.prepareCastContext();
                    case 3:
                      n3 = e4.sent, (r2 = n3.getCurrentSession()) && r2.getSessionState() !== cast.framework.SessionState.SESSION_RESUMED && r2.endSession(t3);
                    case 6:
                    case "end":
                      return e4.stop();
                  }
              }, e3);
            }));
            return function(t3) {
              return e2.apply(this, arguments);
            };
          }(), n2.invoke = function(e2) {
            this[e2.name].call(this, e2.arg);
          }, n2.play = function() {
            this.remotePlayer && this.remotePlayer.isPaused && this.remotePlayerController.playOrPause();
          }, n2.pause = function() {
            this.remotePlayer && !this.remotePlayer.isPaused && this.remotePlayerController.playOrPause();
          }, n2.seekTo = function(e2) {
            this.remotePlayer && (this.remotePlayer.playerState !== chrome.cast.media.PlayerState.IDLE ? (this.remotePlayer.currentTime = e2, this.remotePlayerController.seek()) : this.seekTime = e2);
          }, n2.getCurrentTime = function() {
            return this.remotePlayer ? this.remotePlayer.currentTime : 0;
          }, n2.delete = function() {
            this.remotePlayer && this.stopMedia();
          }, n2.setMuted = function(e2) {
            this.remotePlayer && e2 !== this.remotePlayer.isMuted && this.remotePlayerController.muteOrUnmute();
          }, n2.isMuted = function() {
            return !!this.remotePlayer && this.remotePlayer.isMuted;
          }, n2.setVolume = function(e2) {
            this.remotePlayer && (this.remotePlayer.volumeLevel = e2, this.remotePlayerController.setVolumeLevel());
          }, n2.getVolume = function() {
            return this.remotePlayer ? this.remotePlayer.volumeLevel : 0;
          }, n2.getDevice = function() {
            var e2 = ge()(Ee().mark(function e3() {
              var _$t, n3;
              return Ee().wrap(function(e4) {
                for (; ; )
                  switch (e4.prev = e4.next) {
                    case 0:
                      return e4.next = 2, i2.prepareCastContext();
                    case 2:
                      return _$t = e4.sent, n3 = _$t.getCurrentSession(), e4.abrupt("return", (null == n3 ? void 0 : n3.getCastDevice().friendlyName) || "");
                    case 5:
                    case "end":
                      return e4.stop();
                  }
              }, e3);
            }));
            return function() {
              return e2.apply(this, arguments);
            };
          }(), n2.setupRemotePlayerListeners = function(e2) {
            var _$t = this, _$i = function() {
              var _$i2 = ge()(Ee().mark(function i3() {
                var n4, r3;
                return Ee().wrap(function(i4) {
                  for (; ; )
                    switch (i4.prev = i4.next) {
                      case 0:
                        (n4 = e2.getMediaSession()) && (r3 = n4.media, 0 === _$t.currentDuration && null === r3.duration && (_$t.currentDuration = 1 / 0, _$t.listener.onSinkDurationChanged(_$t.currentDuration)), _$t.listener.onSinkTimeUpdate());
                      case 2:
                      case "end":
                        return i4.stop();
                    }
                }, i3);
              }));
              return function() {
                return _$i2.apply(this, arguments);
              };
            }(), n3 = function n4() {
              switch (_$t.remotePlayer.playerState) {
                case chrome.cast.media.PlayerState.BUFFERING:
                  _$t.listener.onSinkIdle();
                  break;
                case chrome.cast.media.PlayerState.PLAYING:
                  _$t.listener.onSinkPlaying(false);
                  break;
                case chrome.cast.media.PlayerState.IDLE:
                  var _$i2 = e2.getMediaSession();
                  _$i2 && _$i2.idleReason === chrome.cast.media.IdleReason.FINISHED && _$t.listener.onSinkEnded();
              }
            }, r2 = function r3() {
              _$t.listener.onSinkVolumeChanged(_$t.remotePlayer.volumeLevel, true);
            }, o2 = function o3() {
              _$t.listener.onSinkMutedChanged(_$t.remotePlayer.isMuted);
            }, s2 = function s3() {
              0 !== _$t.remotePlayer.duration && (_$t.currentDuration = _$t.remotePlayer.duration, _$t.listener.onSinkDurationChanged(_$t.currentDuration));
            }, a2 = function a3() {
              _$t.remotePlayerController.removeEventListener(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, _$i), _$t.remotePlayerController.removeEventListener(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, n3), _$t.remotePlayerController.removeEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, r2), _$t.remotePlayerController.removeEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, o2), _$t.remotePlayerController.removeEventListener(cast.framework.RemotePlayerEventType.DURATION_CHANGED, s2), _$t.listener.onSessionStop();
            };
            e2.addEventListener(cast.framework.SessionEventType.MEDIA_SESSION, function() {
              _$t.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, _$i), _$t.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, n3), _$t.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, r2), _$t.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, o2), _$t.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.DURATION_CHANGED, s2), _$t.listener.onSessionStarted(e2.getCastDevice().friendlyName);
            });
            var u2 = e2.getSessionObj();
            u2.addUpdateListener(function() {
              u2.status === chrome.cast.SessionStatus.STOPPED && a2();
            }), u2.addMediaListener(a2);
          }, n2.handleError = function(e2) {
            if (chrome.cast)
              switch (e2) {
                case chrome.cast.ErrorCode.SESSION_ERROR:
                  this.listener.onSessionError();
                  break;
                case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
                  this.listener.onRemoteDevice(false);
                  break;
                case chrome.cast.ErrorCode.LOAD_MEDIA_FAILED:
                  this.listener.onLoadMediaError();
                  break;
                case chrome.cast.ErrorCode.CANCEL:
                  this.listener.onUserCancel();
                  break;
                default:
                  this.listener.onSinkError({
                    value: 1,
                    code: 0,
                    message: "Error requesting chromecast session"
                  });
              }
            else
              this.listener.onSinkError({
                value: 1,
                code: 0,
                message: "Error loading chromecast SDK"
              });
          }, i2;
        }(Re), _e = function(e2) {
          var t2 = function t3(t3) {
            var i3;
            return (i3 = e2.call(this) || this).video = void 0, i3.video = t3, i3;
          };
          De()(t2, e2);
          var i2 = t2.prototype;
          return i2.seekTo = function(e3) {
            this.video.currentTime = e3;
          }, i2.setPlaybackRate = function(e3) {
            this.video.playbackRate = e3;
          }, i2.setVolume = function(e3) {
            this.video.volume = e3;
          }, i2.getVolume = function() {
            return this.video.volume;
          }, i2.isMuted = function() {
            return this.video.muted;
          }, i2.setMuted = function(e3) {
            this.video.muted = e3;
          }, i2.getPlaybackRate = function() {
            return this.video.playbackRate;
          }, t2;
        }(Re), Ie = function() {
          var e2 = function e3(e3, t3) {
            this.muted = void 0, this.video = void 0, this.listener = void 0, this.unsubscribes = [], this.expectingMutedChanged = false, this.expectingVolumeChanged = false, this.expectedRateChange = void 0, this.video = e3, this.listener = t3, this.muted = e3.muted, this.unsubscribes.push(b(e3, "volumechange", this.volumeChange.bind(this))), this.unsubscribes.push(b(e3, "ratechange", this.rateChange.bind(this)));
          };
          var t2 = e2.prototype;
          return t2.volumeChange = function() {
            var e3 = !this.expectingVolumeChanged;
            this.expectingMutedChanged = false, this.expectingVolumeChanged = false;
            var t3 = this.video.muted;
            this.muted !== t3 ? (this.muted = t3, this.listener.onSinkMutedChanged(t3)) : this.listener.onSinkVolumeChanged(this.video.volume, e3);
          }, t2.rateChange = function() {
            this.video.playbackRate !== this.expectedRateChange && this.listener.onSinkPlaybackRateChanged(this.video.playbackRate);
          }, t2.unsubscribe = function() {
            this.unsubscribes.forEach(function(e3) {
              return e3();
            });
          }, t2.onConfigure = function() {
            this.expectingVolumeChanged && (this.listener.onSinkVolumeChanged(this.video.volume, false), this.expectingVolumeChanged = false), this.expectingMutedChanged && (this.muted = this.video.muted, this.listener.onSinkMutedChanged(this.video.muted), this.expectingMutedChanged = false), this.expectedRateChange = void 0;
          }, t2.trackRPC = function(e3) {
            var t3 = e3.name, i2 = e3.arg;
            "setVolume" === t3 && this.video.volume !== i2 ? this.expectingVolumeChanged = true : "setMuted" === t3 && this.video.muted !== i2 ? this.expectingMutedChanged = true : "setPlaybackRate" === t3 && this.video.playbackRate !== i2 && (this.expectedRateChange = i2);
          }, e2;
        }(), Oe = require_lib(), Ne = e.n(Oe), Ve = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e.g ? e.g : void 0).Promise || Ne(), Ue = require_assertThisInitialized(), Be = e.n(Ue), xe = function(e2) {
          var t2 = function t3(t3, i3) {
            var n2;
            return (n2 = e2.call(this) || this).paused = true, n2.listener = void 0, n2.video = void 0, n2.unsubscribers = void 0, n2.lastVolumeChangeEvent = void 0, n2.video = t3, n2.listener = i3, n2.paused = true, n2.unsubscribers = [], n2.addListener("volumechange", n2.recordMuteChange.bind(Be()(n2))), n2.recordMuteChange(), n2;
          };
          De()(t2, e2);
          var i2 = t2.prototype;
          return i2.pause = function() {
            this.paused = true, this.video.pause();
          }, i2.setPlaybackRate = function(e3) {
            this.video.playbackRate = e3;
          }, i2.delete = function() {
            this.unsubscribers.forEach(function(e3) {
              return e3();
            });
          }, i2.addListener = function(e3, t3, i3) {
            void 0 === i3 && (i3 = this.video), this.unsubscribers.push(b(i3, e3, t3));
          }, i2.recordMuteChange = function() {
            this.lastVolumeChangeEvent = {
              time: this.video.currentTime,
              muted: this.video.muted
            };
          }, i2.checkStopped = function(e3) {
            return !this.video.paused || this.video.ended || this.video.error || this.paused || this.listener.onSinkStop(e3 || this.unmuteAutopause()), false;
          }, i2.unmuteAutopause = function() {
            var _$e = this.lastVolumeChangeEvent;
            return !this.video.muted && !_$e.muted && this.video.currentTime === _$e.time;
          }, t2;
        }(Re), He = function(e2) {
          var t2 = function t3(t3, i3) {
            var n2;
            return (n2 = e2.call(this, t3, i3) || this).onSinkIdle = void 0, n2.intervalId = void 0, n2.idle = void 0, n2.lastPlayhead = void 0, n2.lastBufferEnd = void 0, n2.fps = void 0, n2.lastDecodedFrames = void 0, n2.lastTimeUpdate = void 0, n2.idleTimeout = void 0, n2.playAttempt = false, n2.seeking = false, n2.audioBufferList = void 0, n2.awaitingAutoplayCompletion = false, n2.intervalId = 0, n2.idle = true, n2.lastPlayhead = 0, n2.lastBufferEnd = 0, n2.fps = 0, n2.lastDecodedFrames = 0, n2.lastTimeUpdate = performance.now(), n2.idleTimeout = -1, n2.audioBufferList = [], n2.addListener("play", function() {
              return n2.onVideoPlay();
            }), n2.addListener("pause", function() {
              return n2.onVideoPause();
            }), n2.addListener("timeupdate", function() {
              return n2.onVideoTimeUpdate();
            }), n2.addListener("ended", function() {
              return n2.onVideoEnded();
            }), n2.addListener("error", function() {
              return n2.onVideoError();
            }), n2.addListener("playing", function() {
              return n2.onVideoPlaying();
            }), n2.addListener("seeking", function() {
              return n2.onVideoSeeking();
            }), n2;
          };
          De()(t2, e2);
          var i2 = t2.prototype;
          return i2.delete = function() {
            e2.prototype.delete.call(this), this.audioBufferList = [], clearInterval(this.intervalId);
          }, i2.play = function() {
            this.paused = false;
            for (var _$e = this.video.buffered, t3 = 0, i3 = 0; i3 < _$e.length; i3++) {
              var n2 = _$e.start(i3);
              if (this.video.currentTime <= n2) {
                t3 = n2;
                break;
              }
            }
            this.video.currentTime < t3 && (console.warn("Moving to buffered region", t3, this.video.currentTime), this.listener.onSinkGapJump(t3 - this.video.currentTime), this.seekTo(t3)), this.playInternal();
          }, i2.endOfStream = function() {
            this.idle = false, clearTimeout(this.idleTimeout), this.idleTimeout = -1;
          }, i2.framerate = function() {
            return this.fps;
          }, i2.seekTo = function(e3) {
            this.video.seekable.length && e3 !== this.video.currentTime && (this.seeking = true, this.video.currentTime = e3);
          }, i2.addSourceBuffer = function(e3, t3) {
            (t3.indexOf("mp4a") > -1 || t3.indexOf("opus") > -1) && (this.audioBufferList = [
              e3
            ]);
          }, i2.clearSourceBuffers = function() {
            this.audioBufferList = [];
          }, i2.onIdle = function() {
            var _$e;
            this.listener.onSinkIdle(), null == (_$e = this.onSinkIdle) || _$e.call(this);
          }, i2.onVideoPlay = function() {
            var _$e = this;
            this.playAttempt ? (this.lastPlayhead = this.video.currentTime, clearInterval(this.intervalId), this.intervalId = self.setInterval(function() {
              return _$e.heartbeat();
            }, v)) : (this.pause(), this.listener.play()), this.playAttempt = false;
          }, i2.onVideoPause = function() {
            this.awaitingAutoplayCompletion || (this.checkStopped(false), clearInterval(this.intervalId));
          }, i2.onVideoTimeUpdate = function() {
            clearTimeout(this.idleTimeout), this.idleTimeout = -1;
            var _$e = g(this.video), t3 = performance.now();
            this.fps = 1e3 * Math.max(_$e - this.lastDecodedFrames, 0) / (t3 - this.lastTimeUpdate), this.lastDecodedFrames = _$e, this.lastTimeUpdate = t3, this.listener.onSinkTimeUpdate();
            var i3 = k(this.video.buffered, this.video.currentTime, l);
            this.checkBufferUpdate(i3), this.updateIdle(i3);
          }, i2.onVideoEnded = function() {
            this.listener.onSinkEnded();
          }, i2.onVideoPlaying = function() {
            this.video.paused || this.listener.onSinkPlaying(this.paused);
          }, i2.onVideoSeeking = function() {
            this.seeking ? this.seeking = false : this.listener.seekTo(this.video.currentTime);
          }, i2.onVideoError = function() {
            var _$e, t3, i3 = null != (_$e = null == this || null == (t3 = this.video) ? void 0 : t3.error) ? _$e : {}, n2 = i3.code, r2 = void 0 === n2 ? -1 : n2, o2 = i3.message, s2 = void 0 === o2 ? "" : o2;
            this.listener.onSinkError({
              value: r2,
              code: r2,
              message: s2
            });
          }, i2.heartbeat = function() {
            var _$e = k(this.video.buffered, this.video.currentTime, l);
            if (this.video.paused)
              clearInterval(this.intervalId);
            else if (this.video.currentTime === this.lastPlayhead) {
              var t3 = S(this.video.buffered, this.video.currentTime, l);
              t3 !== this.video.currentTime && (this.audioBufferList.map(function(e3) {
                E("Audio Buffer", e3.buffered);
              }), E("<video> Buffer", this.video.buffered), console.warn("jumping " + (t3 - this.video.currentTime) + "s gap, current position " + this.video.currentTime + ", new position " + t3), this.listener.onSinkGapJump(t3 - this.video.currentTime), this.seekTo(t3)), this.updateIdle(_$e, t3 === this.video.currentTime);
            } else
              this.checkBufferUpdate(_$e), this.lastPlayhead = this.video.currentTime;
            this.videoDisplaySizeUpdate();
          }, i2.videoDisplaySizeUpdate = function() {
            var _$e = this.video.clientWidth * window.devicePixelRatio, t3 = this.video.clientHeight * window.devicePixelRatio;
            this.listener.onSinkVideoDisplaySizeChanged(_$e, t3);
          }, i2.checkBufferUpdate = function(e3) {
            var t3 = e3.end;
            t3 !== this.lastBufferEnd && (this.lastBufferEnd = t3, this.listener.onSinkBufferUpdate());
          }, i2.updateIdle = function(e3, t3) {
            var i3 = this, n2 = e3.end, r2 = void 0 === n2 ? 0 : n2;
            void 0 === t3 && (t3 = false);
            var o2 = this.video, s2 = o2.buffered, a2 = o2.currentTime;
            if (o2.paused)
              this.idle = true;
            else {
              var u2 = [
                r2
              ].concat(this.audioBufferList.map(function(e4) {
                return k(e4.buffered, a2, l).end;
              })), c2 = Math.max.apply(null, u2);
              Number.isFinite(c2) || (c2 = 0);
              var d2 = s2.length, h2 = d2 > 0 ? s2.end(d2 - 1) : r2, f2 = c2 - a2 < l || t3 && r2 > h2;
              f2 && !this.idle && (console.warn("playhead", a2, "max buffer", c2, "max played", h2), clearTimeout(this.idleTimeout), this.idleTimeout = self.setTimeout(function() {
                return i3.onBufferingTimeout();
              }, m), this.onIdle()), this.idle = f2;
            }
          }, i2.onBufferingTimeout = function() {
            clearTimeout(this.idleTimeout), this.idleTimeout = -1, this.listener.onSinkError({
              value: o,
              code: o,
              message: "Buffering timeout"
            });
          }, i2.playInternal = function() {
            var _$e = this;
            this.playAttempt = true, this.awaitingAutoplayCompletion = true, Ve.resolve(this.video.play()).then(function() {
              _$e.awaitingAutoplayCompletion = false;
            }).catch(function() {
              _$e.playAttempt = false, _$e.checkStopped(true);
            });
          }, t2;
        }(xe), Fe = function(e2) {
          var t2 = function t3(t3, i3) {
            var n2;
            return (n2 = e2.call(this) || this).listener = t3, n2.video = i3, n2.playbackMonitor = void 0, n2.controlsObserver = void 0, n2.playbackMonitor = new He(i3, t3), n2.observeControlsChange(), n2;
          };
          De()(t2, e2);
          var i2 = t2.prototype;
          return i2.configure = function(e3) {
            var t3 = e3.srcObj;
            this.video.srcObject || (this.video.srcObject = t3);
          }, i2.invoke = function(e3) {
            this[e3.name].call(this, e3.arg);
          }, i2.play = function() {
            this.playbackMonitor.play();
          }, i2.pause = function() {
            this.playbackMonitor.pause();
          }, i2.seekTo = function(e3) {
            this.playbackMonitor.seekTo(e3);
          }, i2.endOfStream = function() {
            this.playbackMonitor.endOfStream();
          }, i2.setVolume = function(e3) {
            this.video.volume !== e3 && (this.video.volume = e3);
          }, i2.getVolume = function() {
            return this.video.volume;
          }, i2.isMuted = function() {
            return this.video.muted;
          }, i2.setMuted = function(e3) {
            this.video.muted !== e3 && (this.video.muted = e3);
          }, i2.getDisplayWidth = function() {
            return this.video.clientWidth;
          }, i2.getDisplayHeight = function() {
            return this.video.clientHeight;
          }, i2.setPlaybackRate = function(e3) {
            this.playbackMonitor.setPlaybackRate(e3);
          }, i2.getPlaybackRate = function() {
            return this.video.playbackRate;
          }, i2.getCurrentTime = function() {
            return this.video.currentTime;
          }, i2.buffered = function() {
            return k(this.video.buffered, this.video.currentTime, l);
          }, i2.bufferDuration = function() {
            var _$e = this.buffered(), t3 = _$e.start;
            return _$e.end - Math.max(t3, this.video.currentTime);
          }, i2.decodedFrames = function() {
            return g(this.video);
          }, i2.droppedFrames = function() {
            return y(this.video);
          }, i2.framerate = function() {
            return this.playbackMonitor.framerate();
          }, i2.captureGesture = function() {
            this.playbackMonitor.play(), this.playbackMonitor.pause();
          }, i2.changeSrcObj = function(e3) {
            var t3 = this.video, i3 = t3.playbackRate;
            t3.srcObject = e3, t3.playbackRate = i3;
          }, i2.delete = function() {
            var _$e;
            this.playbackMonitor.delete(), this.video.srcObject = null, T(this.video), null == (_$e = this.controlsObserver) || _$e.disconnect();
          }, i2.observeControlsChange = function() {
            var _$e = this.listener, t3 = this.video;
            try {
              (this.controlsObserver = new MutationObserver(function() {
                _$e.onSinkControlsChanged(t3.controls);
              })).observe(t3, {
                attributeFilter: [
                  "controls"
                ]
              }), _$e.onSinkControlsChanged(t3.controls);
            } catch (e3) {
            }
          }, t2;
        }(Re), Ge = require_extends(), je = e.n(Ge), We = function() {
          var e2 = function e3(e3, t3, i2) {
            this.listener = e3, this.video = t3, this.adjustments = i2, this.playbackMonitor = void 0, this.controlsObserver = void 0, this.mseSink = void 0, this.awaitSink = void 0, this.playbackMonitor = new He(t3, e3), this.observeControlsChange(), this.awaitSink = void 0, b(t3, "error", this.onVideoError.bind(this));
          };
          var t2 = e2.prototype;
          return t2.invoke = function(e3) {
            var t3 = this.awaitSink, i2 = this.mseSink;
            t3 && i2 ? [
              "enqueue",
              "addTrack",
              "setTimestampOffset"
            ].includes(e3.name) ? this.invokeAsync(e3) : this.invokeSync(e3) : t3 ? this.invokeAsync(e3) : i2 && this.invokeSync(e3);
          }, t2.configure = function(e3) {
            var t3 = this, i2 = this.awaitSink, n2 = this.mseSink, r2 = e3.trackID, o2 = e3.codec, s2 = e3.group, a2 = e3.isProtected;
            if (!n2 && !i2) {
              var u2 = A.create(this.onMediaSourceEnded.bind(this), this.onMediaSourceError.bind(this));
              this.awaitSink = new Ve(function(e4, i3) {
                u2.sink.then(function(i4) {
                  t3.handleCreateSuccess(i4), e4();
                }).catch(function(e5) {
                  t3.handleCreateError(e5), i3();
                });
              }), this.changeSrc(URL.createObjectURL(u2.ms));
            }
            if (this.isContentProtectionChanging(a2) && this.queueNewSink(), this.isNewSinkNeeded(e3)) {
              this.queueNewSink();
              var c2 = this.getTrack(p.audio);
              c2 && this.invoke({
                name: "addTrack",
                arg: c2
              });
            }
            this.invoke({
              name: "addTrack",
              arg: je()({}, Ke, {
                trackID: r2,
                codec: o2,
                group: s2,
                isProtected: a2
              })
            });
          }, t2.queueNewSink = function() {
            var e3 = this;
            this.awaitSink = new Ve(function(t3, i2) {
              e3.deferUntilIdle().then(function() {
                var t4 = A.create(e3.onMediaSourceEnded.bind(e3), e3.onMediaSourceError.bind(e3));
                return e3.changeSrc(URL.createObjectURL(t4.ms)), t4.sink;
              }).then(function(i3) {
                e3.destroyMSESink(), e3.handleCreateSuccess(i3), e3.play(), t3();
              }).catch(function(t4) {
                e3.handleCreateError(t4), i2();
              });
            });
          }, t2.addTrack = function(e3) {
            var t3 = e3.trackID, i2 = e3.codec, n2 = e3.group, r2 = e3.isProtected, o2 = this.mseSink;
            try {
              var s2 = null == o2 ? void 0 : o2.addTrack(t3, i2, n2, r2);
              s2 && this.playbackMonitor.addSourceBuffer(s2, i2);
            } catch (e1) {
              this.handleCreateError(e1);
            }
          }, t2.enqueue = function(e3) {
            var t3, i2 = e3.trackID, n2 = e3.buffer;
            null == (t3 = this.mseSink) || t3.append(i2, n2);
          }, t2.endOfStream = function() {
            var e3, t3 = this;
            null == (e3 = this.mseSink) || e3.scheduleUpdate().then(function() {
              return t3.playbackMonitor.endOfStream();
            });
          }, t2.setTimestampOffset = function(e3) {
            var t3, i2 = e3.trackID, n2 = e3.offset;
            null == (t3 = this.mseSink) || t3.setTimestampOffset(i2, n2);
          }, t2.onSegmentDiscontinuity = function() {
            var e3 = this.adjustments, t3 = this.awaitSink, i2 = this.mseSink;
            e3.rebuildMediaSinkOnDiscontinuity && i2 && !t3 && this.queueNewSink();
          }, t2.onSourceDurationChanged = function(e3) {
            var t3 = this.mseSink, i2 = this.video;
            if (t3) {
              var n2 = t3.duration, r2 = function(e4, t4, i3) {
                var n3 = e4;
                return e4 === 1 / 0 || e4 === f ? i3 ? n3 = 1 / 0 : i3 || (n3 = f) : e4 !== t4 && (n3 = e4), n3;
              }(e3, n2, i2.controls);
              r2 !== n2 && t3.setDuration(r2);
            }
          }, t2.play = function() {
            var e3, t3 = this;
            null == (e3 = this.mseSink) || e3.scheduleUpdate().then(function() {
              return t3.playbackMonitor.play();
            });
          }, t2.pause = function() {
            var e3, t3 = this;
            null == (e3 = this.mseSink) || e3.scheduleUpdate().then(function() {
              return t3.playbackMonitor.pause();
            });
          }, t2.remove = function(e3) {
            var t3, i2 = e3.start, n2 = e3.end;
            null == (t3 = this.mseSink) || t3.remove(i2, n2);
          }, t2.seekTo = function(e3) {
            var t3 = this.mseSink, i2 = this.playbackMonitor, n2 = this.video, r2 = k(n2.buffered, n2.currentTime, l), o2 = r2.start, s2 = r2.end;
            e3 >= o2 && e3 < s2 ? null == t3 || t3.scheduleUpdate().then(function() {
              return i2.seekTo(e3);
            }) : i2.seekTo(e3);
          }, t2.setVolume = function(e3) {
            this.video.volume !== e3 && (this.video.volume = e3);
          }, t2.getVolume = function() {
            return this.video.volume;
          }, t2.isMuted = function() {
            return this.video.muted;
          }, t2.setMuted = function(e3) {
            this.video.muted !== e3 && (this.video.muted = e3);
          }, t2.getDisplayWidth = function() {
            return this.video.clientWidth;
          }, t2.getDisplayHeight = function() {
            return this.video.clientHeight;
          }, t2.setPlaybackRate = function(e3) {
            this.playbackMonitor.setPlaybackRate(e3);
          }, t2.getPlaybackRate = function() {
            return this.video.playbackRate;
          }, t2.getCurrentTime = function() {
            return this.video.currentTime;
          }, t2.buffered = function() {
            return k(this.video.buffered, this.video.currentTime, l);
          }, t2.getBufferedRanges = function(e3) {
            var t3, i2;
            return null != (t3 = null == (i2 = this.mseSink) ? void 0 : i2.getBufferedRanges(e3)) ? t3 : [];
          }, t2.bufferDuration = function() {
            var e3 = this.buffered(), t3 = e3.start;
            return e3.end - Math.max(t3, this.video.currentTime);
          }, t2.decodedFrames = function() {
            return g(this.video);
          }, t2.droppedFrames = function() {
            return y(this.video);
          }, t2.framerate = function() {
            return this.playbackMonitor.framerate();
          }, t2.captureGesture = function() {
            this.playbackMonitor.play(), this.playbackMonitor.pause();
          }, t2.changeSrc = function(e3) {
            !function(e4, t3) {
              var i2 = e4.playbackRate, n2 = e4.src;
              n2 && URL.revokeObjectURL(n2), e4.src = t3, e4.playbackRate = i2;
            }(this.video, e3);
          }, t2.changeSrcObj = function(e3) {
          }, t2.delete = function() {
            var e3;
            this.playbackMonitor.delete(), null == (e3 = this.controlsObserver) || e3.disconnect(), this.destroyMSESink(), T(this.video);
          }, t2.invokeSync = function(e3) {
            this[e3.name].call(this, e3.arg);
          }, t2.invokeAsync = function(e3) {
            var t3 = this;
            this.awaitSink.then(function() {
              return t3.invokeSync(e3);
            }).catch(function() {
            });
          }, t2.onMediaSourceEnded = function() {
            this.video.load(), this.listener.onSinkReset();
          }, t2.destroyMSESink = function() {
            var e3 = this, t3 = function t4() {
              e3.mseSink && e3.mseSink.destroy(), e3.awaitSink = void 0, e3.mseSink = void 0;
            };
            this.mseSink ? t3() : this.awaitSink && this.awaitSink.then(function() {
              return t3();
            }), this.playbackMonitor && this.playbackMonitor.clearSourceBuffers();
          }, t2.isContentProtectionChanging = function(e3) {
            var t3 = this.awaitSink, i2 = this.mseSink;
            if (!i2 || t3)
              return false;
            var n2 = i2.bufferProperties;
            return !!n2.length && n2.some(function(t4) {
              return t4.isProtected !== e3;
            });
          }, t2.isSinkVideoCodecChangeRequired = function(e3, t3) {
            return !!this.adjustments.rebuildMediaSinkOnCodecChange && e3 !== t3;
          }, t2.isSinkVideoSourceQualityChangeRequired = function(e3, t3) {
            return !!this.adjustments.rebuildMediaSinkOnSourceQualityChange && "chunked" === e3 != ("chunked" === t3);
          }, t2.isNewSinkNeeded = function(e3) {
            var t3 = this.adjustments, i2 = this.mseSink, n2 = this.awaitSink;
            if (e3.trackID !== p.video)
              return false;
            if (!t3.rebuildMediaSinkOnCodecChange && !t3.rebuildMediaSinkOnSourceQualityChange)
              return false;
            if (!i2 || n2)
              return false;
            var r2 = this.getTrack(p.video), o2 = this.getTrack(p.audio);
            return !(!r2 || !o2) && (this.isSinkVideoCodecChangeRequired(r2.codec, e3.codec) || this.isSinkVideoSourceQualityChangeRequired(r2.group, e3.group));
          }, t2.getTrack = function(e3) {
            var t3, i2 = this.mseSink;
            return null != (t3 = null == i2 ? void 0 : i2.bufferProperties.find(function(t4) {
              return t4.trackID === e3;
            })) ? t3 : null;
          }, t2.deferUntilIdle = function() {
            var e3 = this, t3 = this.mseSink, i2 = this.playbackMonitor;
            return new Ve(function(n2) {
              t3 && !e3.video.paused ? i2.onSinkIdle = function() {
                i2.onSinkIdle = void 0, n2();
              } : n2();
            });
          }, t2.handleCreateSuccess = function(e3) {
            this.mseSink = e3, this.awaitSink = void 0, this.onSourceDurationChanged(f), this.mseSink.setLiveSeekableRange(0, f);
          }, t2.handleCreateError = function(e3) {
            this.listener.onSinkError({
              value: 4,
              code: 4,
              message: e3.toString()
            });
          }, t2.onMediaSourceError = function(e3, t3, i2, n2) {
            var r2 = {
              value: e3,
              code: t3,
              message: i2
            };
            n2 ? this.listener.onSinkError(r2) : this.listener.onSinkRecoverableError(r2);
          }, t2.onVideoError = function() {
            this.destroyMSESink();
          }, t2.observeControlsChange = function() {
            var e3 = this, t3 = this.video;
            try {
              (this.controlsObserver = new MutationObserver(function() {
                e3.invoke({
                  name: "onSourceDurationChanged",
                  arg: t3.duration
                });
              })).observe(t3, {
                attributeFilter: [
                  "controls"
                ]
              });
            } catch (e1) {
            }
          }, e2;
        }(), Ke = {
          trackID: 0,
          codec: "",
          mode: "mse",
          isProtected: false,
          path: "",
          group: "",
          srcObj: null
        }, qe = function(e2) {
          var t2 = function t3(t3, i3) {
            var n2;
            (n2 = e2.call(this, i3, t3) || this).fps = void 0, n2.intervalId = void 0, n2.bufferingTimeoutId = void 0, n2.attemptingToPlay = void 0, n2.hasPlayedSrc = void 0, n2.hasReloadedOnDecodeError = void 0, n2.unsubscribersForTrackEvents = void 0, n2.fps = 0, n2.intervalId = -1, n2.bufferingTimeoutId = -1, n2.attemptingToPlay = false, n2.hasPlayedSrc = false, n2.hasReloadedOnDecodeError = false, n2.unsubscribersForTrackEvents = [], n2.addListener("waiting", function() {
              return n2.onVideoWaiting();
            }, n2.video), n2.addListener("timeupdate", function() {
              return n2.onVideoTimeUpdate();
            }, n2.video), n2.addListener("durationchange", function() {
              return n2.onVideoDurationChange();
            }, n2.video), n2.addListener("error", function() {
              return n2.onVideoError();
            }, n2.video), n2.addListener("play", function() {
              return n2.onVideoPlay();
            }, n2.video), n2.addListener("pause", function() {
              return n2.onVideoPause();
            }, n2.video), n2.addListener("ended", function() {
              return n2.onVideoEnded();
            }, n2.video), n2.addListener("playing", function() {
              return n2.onVideoPlaying();
            }, n2.video);
            var r2 = c(document).visibilityChange;
            return n2.addListener(r2, function() {
              return n2.onVisibilityChange();
            }, document), n2;
          };
          De()(t2, e2);
          var i2 = t2.prototype;
          return i2.invoke = function(e3) {
            this[e3.name].call(this, e3.arg);
          }, i2.configure = function(e3) {
            var t3 = e3.path;
            this.handleTrackEvents(), this.hasReloadedOnDecodeError = false, this.hasPlayedSrc = false, this.video.src = t3;
          }, i2.play = function() {
            var _$e = this, t3 = this.video.buffered;
            if (t3.length > 0) {
              var i3 = t3.start(t3.length - 1), n2 = t3.end(t3.length - 1);
              this.video.duration === 1 / 0 && (n2 < this.video.currentTime || this.video.currentTime < i3) && (this.listener.onSinkGapJump(i3 - this.video.currentTime), console.warn("Moving to buffered region"), this.video.currentTime = i3);
            }
            this.paused = false, this.attemptingToPlay = true, Promise.resolve(this.video.play()).then(function() {
              _$e.attemptingToPlay = false, _$e.hasPlayedSrc = true;
            }).catch(function() {
              _$e.attemptingToPlay = false, _$e.checkStopped(true);
            });
          }, i2.pause = function() {
            e2.prototype.pause.call(this), clearTimeout(this.intervalId);
          }, i2.seekTo = function(e3) {
            this.video.currentTime = e3;
          }, i2.setVolume = function(e3) {
            this.video.volume = e3;
          }, i2.getVolume = function() {
            return this.video.volume;
          }, i2.buffered = function() {
            return k(this.video.buffered, this.video.currentTime, l);
          }, i2.decodedFrames = function() {
            return g(this.video);
          }, i2.droppedFrames = function() {
            return y(this.video);
          }, i2.framerate = function() {
            return this.fps;
          }, i2.delete = function() {
            e2.prototype.delete.call(this), this.removeTrackListeners(), this.video.src = "", this.video.load();
          }, i2.isMuted = function() {
            return this.video.muted;
          }, i2.setMuted = function(e3) {
            this.video.muted = e3;
          }, i2.getDisplayWidth = function() {
            return this.video.clientWidth;
          }, i2.getDisplayHeight = function() {
            return this.video.clientHeight;
          }, i2.getPlaybackRate = function() {
            return this.video.playbackRate;
          }, i2.getCurrentTime = function() {
            return this.video.currentTime;
          }, i2.bufferDuration = function() {
            var _$e = this.buffered(), t3 = _$e.start;
            return _$e.end - Math.max(t3, this.video.currentTime);
          }, i2.captureGesture = function() {
            Promise.resolve(this.video.play()).catch(function() {
            }), this.video.pause();
          }, i2.addTrackListener = function(e3, t3, i3) {
            this.unsubscribersForTrackEvents.push(b(i3, e3, t3));
          }, i2.removeTrackListeners = function() {
            this.unsubscribersForTrackEvents.forEach(function(e3) {
              return e3();
            });
          }, i2.checkTracksStatus = function() {
            for (var _$e = this.video.textTracks, t3 = 0; t3 < _$e.length; t3++) {
              var i3 = _$e[t3];
              "metadata" === i3.kind && "disabled" === i3.mode && (i3.mode = "hidden");
            }
          }, i2.handleCueChange = function(e3) {
            var t3 = this, i3 = /* @__PURE__ */ new Set();
            this.addTrackListener("cuechange", function() {
              var n2, r2 = null != (n2 = e3.activeCues) ? n2 : [];
              if (r2.length > 0) {
                for (var o2 = /* @__PURE__ */ new Set(), s2 = 0; s2 < r2.length; ++s2) {
                  var a2 = r2[s2];
                  if (!i3.has(a2)) {
                    var u2 = a2.type, c2 = a2.value;
                    if ("org.id3" === u2 && c2 && ("TXXX" === c2.key && "segmentmetadata" !== c2.info || "PRIV" === c2.key && c2.info === F.METADATA_ID || "PRIV" === c2.key && c2.info === F.INBAND_METADATA_ID)) {
                      var d2 = "PRIV" === c2.key ? new TextDecoder("utf-8").decode(c2.data) : c2.data || "", h2 = c2.info || "";
                      t3.listener.onPassthroughSinkMetadata(a2.startTime, a2.endTime, d2, h2, h2);
                    }
                  }
                  o2.add(a2);
                }
                i3 = o2;
              }
            }, e3);
          }, i2.handleTrackEvents = function() {
            var _$e = this;
            this.removeTrackListeners(), void 0 === window.DataCue && void 0 === window.WebKitDataCue || (this.addTrackListener("change", function() {
              _$e.checkTracksStatus();
            }, this.video.textTracks), this.addTrackListener("addtrack", function(t3) {
              var i3 = t3.track;
              "metadata" === i3.kind && "disabled" === i3.mode && (i3.mode = "hidden", _$e.handleCueChange(i3));
            }, this.video.textTracks));
          }, i2.onVideoWaiting = function() {
            var _$e = this;
            if (k(this.video.buffered, this.video.currentTime, l).end - this.video.currentTime < l) {
              this.listener.onSinkIdle(), clearTimeout(this.bufferingTimeoutId), this.bufferingTimeoutId = self.setTimeout(function() {
                _$e.listener.onSinkError({
                  value: o,
                  code: o,
                  message: "Buffering timeout"
                });
              }, m);
              var t3 = b(this.video, "timeupdate", function() {
                t3(), clearTimeout(_$e.bufferingTimeoutId);
              });
            }
            var i3 = b(this.video, "timeupdate", function() {
              4 === _$e.video.readyState && (i3(), _$e.onVideoPlaying());
            });
          }, i2.onVideoTimeUpdate = function() {
            var _$e = this.listener, t3 = this.video;
            _$e.onSinkTimeUpdate(), _$e.onSinkVideoDisplaySizeChanged(t3.clientWidth * self.devicePixelRatio, t3.clientHeight * self.devicePixelRatio);
          }, i2.onVideoDurationChange = function() {
            this.listener.onSinkDurationChanged(this.video.duration);
          }, i2.onVideoError = function() {
            var _$e = this.video.error, t3 = _$e.code, i3 = _$e.message, n2 = void 0 === i3 ? "" : i3, r2 = -1 !== this.video.src.indexOf(".m3u8");
            if (4 === t3 && !this.hasPlayedSrc && r2)
              return clearTimeout(this.bufferingTimeoutId), void this.listener.onSinkError({
                value: 404,
                code: 404,
                message: n2
              });
            3 !== t3 || this.hasReloadedOnDecodeError ? this.listener.onSinkError({
              value: t3,
              code: t3,
              message: n2
            }) : this.hasReloadedOnDecodeError || (this.hasReloadedOnDecodeError = true, console.warn("Reload video element on MEDIA_ERR_DECODE 3"), this.video.load());
          }, i2.onVideoPlay = function() {
            var _$e = this, t3 = this.video.currentTime;
            clearTimeout(this.intervalId), this.intervalId = self.setTimeout(function() {
              return _$e.heartbeat(t3);
            }, v);
          }, i2.onVideoPause = function() {
            clearTimeout(this.intervalId), this.attemptingToPlay || this.checkStopped(false);
          }, i2.onVideoEnded = function() {
            this.listener.onSinkEnded();
          }, i2.onVideoPlaying = function() {
            this.listener.onSinkPlaying(this.paused), this.trackFPS(g(this.video), performance.now()), this.trackBufferUpdate(k(this.video.buffered, this.video.currentTime, l).end);
          }, i2.onVisibilityChange = function() {
            var _$e = c(document).hidden;
            document[_$e] && (this.hasReloadedOnDecodeError = false);
          }, i2.heartbeat = function(e3) {
            var t3, i3, n2, r2 = this, o2 = this.video.currentTime;
            if (o2 === e3) {
              if (t3 = this.video, l, n2 = k(t3.buffered, t3.currentTime, 0.1).end - (i3 = t3.currentTime), !(t3.ended || t3.duration - i3 < 0.1) && n2 < 0.1)
                return void this.listener.onSinkIdle();
              var s2 = S(this.video.buffered, o2, l);
              s2 !== o2 && (console.warn("jumping " + (s2 - o2) + "s gap"), this.listener.onSinkGapJump(s2 - this.video.currentTime), this.video.currentTime = s2, o2 = this.video.currentTime);
            }
            this.intervalId = self.setTimeout(function() {
              return r2.heartbeat(o2);
            }, v);
          }, i2.trackFPS = function(e3, t3) {
            var i3 = this, n2 = g(this.video), r2 = performance.now();
            this.fps = (n2 - e3) / (r2 - t3) * 1e3;
            var o2 = b(this.video, "timeupdate", function() {
              o2(), i3.trackFPS(n2, r2);
            });
          }, i2.trackBufferUpdate = function(e3) {
            var t3 = this, i3 = this.buffered().end;
            i3 !== e3 && this.listener.onSinkBufferUpdate();
            var n2 = b(this.video, "timeupdate", function() {
              n2(), t3.trackBufferUpdate(i3);
            });
          }, t2;
        }(xe), Qe = function() {
          var e2 = function e3(e3, t3, i2, n2) {
            this.listener = e3, this.adjustments = i2, this.video = void 0, this.drmManager = void 0, this.codecs = void 0, this.sink = void 0, this.observer = void 0, this.remoteDevicesListener = void 0, this.video = n2 || document.createElement("video"), this.listener = e3, this.drmManager = new Ae({
              video: this.video,
              listener: e3
            }), this.codecs = /* @__PURE__ */ Object.create(null), this.sink = new _e(this.video), t3 && (this.remoteDevicesListener = we.lookForRemotePlaybackDevices(this.listener)), this.observer = new Ie(this.video, e3);
          };
          var t2 = e2.prototype;
          return t2.delete = function() {
            var e3;
            this.reset(), null == (e3 = this.remoteDevicesListener) || e3.then(function(e4) {
              e4 && we.stopLookingForRemotePlaybackDevices(e4);
            });
          }, t2.configure = function(e3) {
            var t3 = e3.mode, i2 = e3.codec, n2 = e3.trackID;
            _instanceof(this.sink, _e) && (this.sink = "chromecast" === t3 ? new we(this.listener) : "passthrough" === t3 ? new qe(this.listener, this.video) : "mse-worker" === t3 ? new Fe(this.listener, this.video) : new We(this.listener, this.video, this.adjustments)), i2 ? this.codecs[n2] = i2 : e3.codec = this.codecs[n2], this.sink.configure(e3);
            var r2 = e3.path, o2 = e3.isProtected;
            r2 && o2 && this.drmManager.configure(r2), this.observer.onConfigure();
          }, t2.applyRPC = function(e3) {
            this.observer.trackRPC(e3), this.sink.invoke(e3);
          }, t2.getCurrentSink = function() {
            return this.sink;
          }, t2.reset = function() {
            this.sink.delete(), this.drmManager.reset(), this.sink = new _e(this.video), this.listener.onSinkTimeUpdate(), this.listener.onSinkBufferUpdate();
          }, t2.videoElement = function() {
            return this.video;
          }, t2.isProtected = function() {
            return this.drmManager.isProtected();
          }, t2.captureGesture = function() {
            this.video.played.length || this.sink.captureGesture();
          }, t2.destroy = function() {
            this.observer.unsubscribe(), this.delete();
          }, t2.isLowLatencyCapable = function() {
            return _instanceof(this.sink, We);
          }, t2.onSegmentDiscontinuity = function() {
            this.sink.onSegmentDiscontinuity();
          }, e2;
        }(), Ye = require_events(), ze = function() {
          var e2 = function e3() {
            this.emitter = void 0, this.emitter = new Ye.EventEmitter();
          };
          var t2 = e2.prototype;
          return t2.on = function(e3, t3) {
            this.emitter.on(String(e3), t3);
          }, t2.removeListener = function(e3, t3) {
            this.emitter.removeListener(String(e3), t3);
          }, t2.emit = function(e3) {
            for (var t3, i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), r2 = 1; r2 < i2; r2++)
              n2[r2 - 1] = arguments[r2];
            (t3 = this.emitter).emit.apply(t3, [
              String(e3)
            ].concat(n2));
          }, t2.removeAllListeners = function() {
            this.emitter.removeAllListeners();
          }, e2;
        }();
        !function(e2) {
          e2[e2.STATE_CHANGED = 0] = "STATE_CHANGED", e2[e2.CONFIGURE = 1] = "CONFIGURE", e2[e2.RESET = 2] = "RESET", e2[e2.ADD_CUE = 3] = "ADD_CUE", e2[e2.GET_DECODE_INFO = 4] = "GET_DECODE_INFO", e2[e2.MEDIA_SINK_RPC = 5] = "MEDIA_SINK_RPC", e2[e2.GET_EXPERIMENTS = 6] = "GET_EXPERIMENTS", e2[e2.LOG_MESSAGE = 7] = "LOG_MESSAGE", e2[e2.DATA_CHANNEL_CREATE = 8] = "DATA_CHANNEL_CREATE", e2[e2.DATA_CHANNEL_CLOSE = 9] = "DATA_CHANNEL_CLOSE", e2[e2.DATA_CHANNEL_SEND = 10] = "DATA_CHANNEL_SEND", e2[e2.RTC_SET_REMOTE_DESCRIPTION = 11] = "RTC_SET_REMOTE_DESCRIPTION", e2[e2.PROPERTY_CHANGED = 12] = "PROPERTY_CHANGED", e2[e2.BUFFERED_RANGES = 13] = "BUFFERED_RANGES", e2[e2.DESTROY = 14] = "DESTROY";
        }(Ce || (Ce = {}));
        var Xe = {
          rebuildMediaSinkOnCodecChange: false,
          rebuildMediaSinkOnSourceQualityChange: false,
          rebuildMediaSinkOnDiscontinuity: false
        }, Je = function() {
          function e2(t3, i2) {
            var n2, r2 = this;
            this.worker = void 0, this.id = void 0, this.emitter = void 0, this.seekTime = void 0, this.paused = void 0, this.isLoaded = void 0, this.autoPlayOptions = void 0, this.mediaSinkManager = void 0, this.experiments = void 0, this.adjustments = void 0, this.enableRemoteSearch = void 0, this.isQualitySupported = void 0, this.onvisibilitychange = void 0, this.onmessage = void 0, this.onOnline = void 0, this.onOffline = void 0, this.pauseHiddenSilentTab = void 0, this.state = void 0, this.workerMessageProcessors = void 0, this.startCapture = void 0, this.stopCapture = void 0, this.requestCaptureAnalytics = void 0, this.worker = i2, this.id = e2.instanceId++, this.emitter = new ze(), this.seekTime = null, this.paused = true, this.isLoaded = false, this.autoPlayOptions = null, this.isQualitySupported = t3.isQualitySupported || u, this.onvisibilitychange = function() {
              return r2.onVisibilityChange();
            }, this.onmessage = function(e3) {
              return r2.onWorkerMessage(e3);
            }, this.onOnline = function() {
              return r2.postMessage("onOnline");
            }, this.onOffline = function() {
              return r2.postMessage("onOffline");
            }, this.enableRemoteSearch = t3.enableRemoteSearch || false;
            var o2, s2 = I();
            if (this.pauseHiddenSilentTab = s2.chrome && 63 === s2.major || s2.opera, this.adjustments = (o2 = null != (n2 = t3.adjustments) ? n2 : {}, je()({}, Xe, o2)), this.mediaSinkManager = new Qe(this, this.enableRemoteSearch, this.adjustments), this.experiments = {}, this.workerMessageProcessors = [
              V
            ], U.isSupported()) {
              var a2 = new U();
              this.workerMessageProcessors.push(a2.processor);
            }
            this.state = {
              averageBitrate: 0,
              bandwidthEstimate: 0,
              looping: false,
              autoQualityMode: true,
              volume: 1,
              liveLatency: 0,
              liveLowLatencyEnabled: true,
              liveLowLatency: false,
              statistics: {}
            }, this.resetState(), this.attachHandlers(), this.postMessage("create", [
              {
                mseSupported: B(),
                keySystem: void 0 !== t3.keySystem ? t3.keySystem : oe(s2),
                browserContext: s2,
                codecs: e2.isVP9Supported() ? [
                  "vp09"
                ] : [],
                testOnly: t3.testOnly,
                playerFramework: t3.playerFramework,
                buildDistId: "npm"
              }
            ]);
          }
          e2.isVP9Supported = function() {
            return B() && MediaSource.isTypeSupported('video/mp4;codecs="vp09.00.10.08"');
          };
          var t2 = e2.prototype;
          return t2.delete = function() {
            var _$e = this, t3 = c(document).visibilityChange;
            document.removeEventListener(t3, this.onvisibilitychange), window.removeEventListener("online", this.onOnline), window.removeEventListener("offline", this.onOffline), this.emitter.removeAllListeners(), this.emitter.on(Ce.DESTROY, function() {
              _$e.mediaSinkManager.destroy(), _$e.emitter.removeAllListeners(), _$e.worker.removeEventListener("message", _$e.onmessage);
            }), this.postMessage("delete");
          }, t2.attachHTMLVideoElement = function(e3) {
            this.mediaSinkManager && this.mediaSinkManager.destroy(), this.mediaSinkManager = new Qe(this, this.enableRemoteSearch, this.adjustments, e3), this.processVideoElementAttributes(e3);
          }, t2.getHTMLVideoElement = function() {
            return this.mediaSinkManager.videoElement();
          }, t2.load = function(e3, t3) {
            void 0 === t3 && (t3 = ""), this.postMessage("load", [
              e3,
              t3
            ]), this.autoPlayOptions && this.postMessage("playIntent");
          }, t2.play = function() {
            this.postMessage("playIntent"), this.mediaSinkManager.captureGesture(), this.paused = false, this.attemptPlay();
          }, t2.setAutoplay = function(e3) {
            this.autoPlayOptions = e3 ? {
              attemptMutedRetry: true
            } : null;
          }, t2.setAutoPlayOptions = function(e3) {
            this.autoPlayOptions = e3;
          }, t2.getExperiments = function() {
            return this.experiments;
          }, t2.setExperiment = function(e3, t3) {
            this.setExperimentData({
              id: e3,
              assignment: t3,
              version: 0,
              type: ""
            });
          }, t2.setExperimentData = function(e3) {
            this.postMessage("setExperiment", [
              e3
            ]);
          }, t2.pause = function() {
            this.paused = true, this.postMessage("pause");
          }, t2.isPaused = function() {
            return this.paused;
          }, t2.seekTo = function(e3) {
            this.seekTime = e3, this.postMessage("seekTo", [
              e3
            ]);
          }, t2.isSeeking = function() {
            return null !== this.seekTime;
          }, t2.isAutoplay = function() {
            return !!this.autoPlayOptions;
          }, t2.getDuration = function() {
            return this.state.duration;
          }, t2.getStartOffset = function() {
            return this.state.startOffset || 0;
          }, t2.getPosition = function() {
            return null === this.seekTime ? this.mediaSinkManager.getCurrentSink().getCurrentTime() : this.seekTime;
          }, t2.getBuffered = function() {
            return this.mediaSinkManager.getCurrentSink().buffered();
          }, t2.getBufferedRanges = function() {
            return this.postMessage("updateBufferedRanges", []), this.state.trackBufferedRanges;
          }, t2.getSinkBufferedRanges = function() {
            var _$e = this.mediaSinkManager.getCurrentSink();
            return {
              audio: _$e.getBufferedRanges("audio"),
              video: _$e.getBufferedRanges("video")
            };
          }, t2.getBufferDuration = function() {
            return this.state.bufferedPosition - this.getPosition();
          }, t2.getState = function() {
            return this.state.state;
          }, t2.getVideoWidth = function() {
            return this.mediaSinkManager.videoElement().videoWidth;
          }, t2.getVideoHeight = function() {
            return this.mediaSinkManager.videoElement().videoHeight;
          }, t2.getVideoFrameRate = function() {
            return this.state.statistics.framerate;
          }, t2.getVideoBitRate = function() {
            return this.state.statistics.bitrate;
          }, t2.getAverageBitrate = function() {
            return this.state.averageBitrate;
          }, t2.getBandwidthEstimate = function() {
            return this.state.bandwidthEstimate;
          }, t2.getPath = function() {
            return this.state.path;
          }, t2.getProtocol = function() {
            return this.state.protocol;
          }, t2.getVersion = function() {
            return "1.13.0";
          }, t2.isLiveLowLatency = function() {
            return this.state.liveLowLatencyEnabled && this.state.liveLowLatency;
          }, t2.isLooping = function() {
            return this.state.looping;
          }, t2.setLogLevel = function(e3) {
            this.postMessage("setLogLevel", [
              e3
            ]);
          }, t2.setLooping = function(e3) {
            this.state.looping = e3, this.postMessage("setLooping", [
              e3
            ]);
          }, t2.isMuted = function() {
            return this.mediaSinkManager.getCurrentSink().isMuted();
          }, t2.setMuted = function(e3) {
            this.mediaSinkManager.getCurrentSink().setMuted(e3);
          }, t2.setVolume = function(e3) {
            this.state.volume = e3, this.postMessage("setVolume", [
              this.state.volume
            ]);
          }, t2.getVolume = function() {
            return this.state.volume;
          }, t2.getQuality = function() {
            return this.state.quality;
          }, t2.setQuality = function(e3, t3) {
            void 0 === t3 && (t3 = false), this.mediaSinkManager.videoElement().controls || (this.postMessage("setQuality", [
              e3,
              t3
            ]), this.state.autoQualityMode = false);
          }, t2.getQualities = function() {
            return this.state.qualities;
          }, t2.setAuthToken = function(e3) {
            this.postMessage("setAuthToken", [
              e3
            ]);
          }, t2.isAutoQualityMode = function() {
            return this.state.autoQualityMode;
          }, t2.setAutoQualityMode = function(e3) {
            this.state.autoQualityMode = e3, this.postMessage("setAutoQualityMode", [
              e3
            ]);
          }, t2.setAutoInitialBitrate = function(e3) {
            this.postMessage("setAutoInitialBitrate", [
              e3
            ]);
          }, t2.setAutoMaxQuality = function(e3) {
            this.postMessage("setAutoMaxQuality", [
              e3
            ]);
          }, t2.setAutoMaxBitrate = function(e3) {
            this.postMessage("setAutoMaxBitrate", [
              e3
            ]);
          }, t2.setAutoMaxVideoSize = function(e3, t3) {
            this.postMessage("setAutoMaxVideoSize", [
              e3,
              t3
            ]);
          }, t2.setAutoViewportSize = function(e3, t3) {
            this.postMessage("setAutoViewportSize", [
              e3,
              t3
            ]);
          }, t2.getPlaybackRate = function() {
            return this.mediaSinkManager.getCurrentSink().getPlaybackRate();
          }, t2.setPlaybackRate = function(e3) {
            return this.mediaSinkManager.getCurrentSink().setPlaybackRate(e3);
          }, t2.setClientId = function(e3) {
            this.postMessage("setClientId", [
              e3
            ]);
          }, t2.setDeviceId = function(e3) {
            this.postMessage("setDeviceId", [
              e3
            ]);
          }, t2.setLiveSpeedUpRate = function(e3) {
            this.postMessage("setLiveSpeedUpRate", [
              e3
            ]);
          }, t2.setPlayerType = function(e3) {
            this.postMessage("setPlayerType", [
              e3
            ]);
          }, t2.setLiveMaxLatency = function(e3) {
            this.postMessage("setLiveMaxLatency", [
              e3
            ]);
          }, t2.setLiveLowLatencyEnabled = function(e3) {
            this.state.liveLowLatencyEnabled = e3, this.postMessage("setLiveLowLatencyEnabled", [
              e3
            ]);
          }, t2.setRebufferToLive = function(e3) {
            this.postMessage("setRebufferToLive", [
              e3
            ]);
          }, t2.setVisible = function(e3) {
            this.postMessage("setVisible", [
              e3
            ]);
          }, t2.setInitialBufferDuration = function(e3) {
            this.postMessage("setInitialBufferDuration", [
              e3
            ]);
          }, t2.addEventListener = function(e3, t3) {
            this.emitter.on(e3, t3);
          }, t2.removeEventListener = function(e3, t3) {
            this.emitter.removeListener(e3, t3);
          }, t2.getDroppedFrames = function() {
            return this.state.statistics.droppedFrames;
          }, t2.getDecodedFrames = function() {
            return this.state.statistics.decodedFrames;
          }, t2.getDisplayWidth = function() {
            return this.mediaSinkManager.getCurrentSink().getDisplayWidth();
          }, t2.getDisplayHeight = function() {
            return this.mediaSinkManager.getCurrentSink().getDisplayHeight();
          }, t2.getSessionId = function() {
            return this.state.sessionId;
          }, t2.getSessionData = function() {
            return this.state.sessionData;
          }, t2.getLiveLatency = function() {
            return this.state.liveLatency;
          }, t2.isProtected = function() {
            return this.mediaSinkManager.isProtected();
          }, t2.startRemotePlayback = function() {
            this.postMessage("startRemotePlayback");
          }, t2.endRemotePlayback = function() {
            this.postMessage("endRemotePlayback");
          }, t2.setPlatformName = function(e3) {
            this.postMessage("setPlatformName", [
              e3
            ]);
          }, t2.setRequestCredentials = function(e3) {
            this.postMessage("setRequestCredentials", [
              e3
            ]);
          }, t2.setSinkType = function(e3) {
            this.postMessage("setSinkType", [
              e3
            ]);
          }, t2.onSinkTimeUpdate = function() {
            var _$e = this.mediaSinkManager.getCurrentSink();
            null === this.seekTime && (this.postMessage("onClientSinkUpdate", [
              {
                currentTime: _$e.getCurrentTime(),
                decodedFrames: _$e.decodedFrames(),
                droppedFrames: _$e.droppedFrames(),
                framerate: _$e.framerate(),
                bufferDuration: _$e.bufferDuration(),
                displayHeight: _$e.getDisplayHeight(),
                displayWidth: _$e.getDisplayWidth()
              }
            ]), this.emitter.emit(C.TIME_UPDATE, _$e.getCurrentTime()));
          }, t2.onSinkBufferUpdate = function() {
            this.emitter.emit(C.BUFFER_UPDATE);
          }, t2.onSinkDurationChanged = function(e3) {
            this.postMessage("onClientSinkDurationChanged", [
              e3
            ]);
          }, t2.onSinkEnded = function() {
            this.postMessage("onClientSinkEnded");
          }, t2.onSinkIdle = function() {
            this.postMessage("onClientSinkIdle");
          }, t2.onSinkPlaying = function(e3) {
            this.postMessage("onClientSinkPlaying"), e3 && this.play();
          }, t2.onSinkStop = function(e3) {
            var t3, i2, n2 = c(document).hidden;
            if (document[n2])
              this.postMessage("pause");
            else if (e3) {
              if (!this.isMuted() && (null == (t3 = null == (i2 = this.autoPlayOptions) ? void 0 : i2.attemptMutedRetry) || t3))
                return this.setMuted(true), this.mediaSinkManager.getCurrentSink().play(), void this.emitter.emit(C.AUDIO_BLOCKED);
              this.pause(), this.emitter.emit(C.PLAYBACK_BLOCKED);
            } else
              this.pause();
          }, t2.onSinkReset = function() {
            this.postMessage("onClientSinkReset");
          }, t2.onSinkError = function(e3) {
            var t3 = e3.value, i2 = e3.code, n2 = e3.message;
            this.postMessage("onClientSinkError", [
              t3,
              i2,
              n2
            ]);
          }, t2.onSinkRecoverableError = function(e3) {
            var t3 = e3.value, i2 = e3.code, n2 = e3.message;
            this.postMessage("onClientSinkRecoverableError", [
              t3,
              i2,
              n2
            ]);
          }, t2.onSinkVideoDisplaySizeChanged = function(e3, t3) {
            this.setAutoViewportSize(e3, t3);
          }, t2.onSinkVolumeChanged = function(e3, t3) {
            this.mediaSinkManager.videoElement().controls && t3 && this.setVolume(e3), this.emitter.emit(C.VOLUME_CHANGED, this.state.volume);
          }, t2.onSinkMutedChanged = function(e3) {
            this.postMessage("setMuted", [
              e3
            ]), this.emitter.emit(C.MUTED_CHANGED);
          }, t2.onSinkPlaybackRateChanged = function(e3) {
            this.postMessage("setPlaybackRate", [
              e3
            ]);
          }, t2.onPassthroughSinkMetadata = function(e3, t3, i2, n2, r2) {
            this.emitter.emit(C.TEXT_METADATA_CUE, {
              description: n2,
              endTime: t3,
              startTime: e3,
              text: i2,
              owner: r2,
              type: "TextMetadataCue"
            });
          }, t2.onSinkControlsChanged = function(e3) {
            this.postMessage("setControls", [
              e3
            ]);
          }, t2.onSinkGapJump = function(e3) {
            this.postMessage("onClientSinkGapJump", [
              e3
            ]);
          }, t2.onRemoteDevice = function(e3) {
            this.emitter.emit(e3 ? G.AVAILABLE : G.UNAVAILABLE);
          }, t2.onRemoteReconnect = function() {
            this.startRemotePlayback();
          }, t2.onSessionError = function() {
            this.postMessage("onClientSinkError", [
              1,
              0,
              "Chromecast session error"
            ]);
          }, t2.onLoadMediaError = function() {
            this.postMessage("onClientSinkError", [
              1,
              0,
              "Chromecast load media failed"
            ]);
          }, t2.onUserCancel = function() {
            this.endRemotePlayback(), this.emitter.emit(G.SESSION_ENDED);
          }, t2.onSegmentDiscontinuity = function() {
            this.mediaSinkManager.onSegmentDiscontinuity();
          }, t2.onSessionStop = function() {
            this.endRemotePlayback(), this.emitter.emit(G.SESSION_ENDED);
          }, t2.onSessionStarted = function(e3) {
            this.emitter.emit(G.SESSION_STARTED, e3);
          }, t2.attemptPlay = function() {
            var _$e = c(document).hidden;
            !document[_$e] && this.isLoaded && this.postMessage("play");
          }, t2.postMessage = function(e3, t3, i2) {
            void 0 === i2 && (i2 = []), this.worker.postMessage({
              id: this.id,
              funcName: e3,
              args: t3
            }, i2);
          }, t2.resetState = function() {
            a(this.state, {
              state: j.IDLE,
              quality: {
                name: "",
                group: "",
                codecs: "",
                bitrate: 0,
                width: 0,
                height: 0,
                framerate: 0
              },
              qualities: [],
              duration: 0,
              startOffset: 0,
              sessionData: {},
              volume: 1,
              statistics: {
                bitrate: 0,
                framerate: 0,
                droppedFrames: 0,
                decodeFrames: 0,
                renderedFrames: 0
              },
              trackBufferedRanges: {
                audio: [],
                video: []
              }
            }), this.emitter.emit(C.DURATION_CHANGED, 0), this.seekTime = null, this.isLoaded = false;
          }, t2.attachHandlers = function() {
            var _$e = this;
            this.worker.addEventListener("message", this.onmessage);
            var t3 = c(document).visibilityChange;
            document.addEventListener(t3, this.onvisibilitychange), window.addEventListener("online", this.onOnline), window.addEventListener("offline", this.onOffline);
            var i2 = this.emitter;
            i2.on(C.VOLUME_CHANGED, function() {
              return _$e.onVolumeChanged();
            }), i2.on(C.MUTED_CHANGED, function() {
              return _$e.onMutedChanged();
            }), i2.on(C.SEEK_COMPLETED, function() {
              return _$e.onSeekCompleted();
            }), i2.on(C.ERROR, function() {
              return _$e.onError();
            }), i2.on(C.SESSION_DATA, function(t4) {
              return _$e.onSessionData(t4);
            }), i2.on(C.SEGMENT_DISCONTINUITY, function() {
              return _$e.onSegmentDiscontinuity();
            }), i2.on(Ce.STATE_CHANGED, function(t4) {
              return _$e.onStateChanged(t4);
            }), i2.on(Ce.MEDIA_SINK_RPC, function(t4) {
              return _$e.mediaSinkManager.applyRPC(t4);
            }), i2.on(Ce.CONFIGURE, function(t4) {
              _$e.mediaSinkManager.configure(t4), _$e.setSinkType(t4.mode);
            }), i2.on(Ce.RESET, function() {
              return _$e.mediaSinkManager.reset();
            }), i2.on(H.ID3, function(t4) {
              return _$e.onID3(t4);
            }), i2.on(Ce.GET_EXPERIMENTS, function(t4) {
              _$e.experiments = t4;
            }), i2.on(Ce.PROPERTY_CHANGED, function(t4) {
              var i3 = t4.key, n2 = t4.value;
              _$e.state[i3] = n2;
            }), i2.on(Ce.BUFFERED_RANGES, function(t4) {
              _$e.state.trackBufferedRanges = t4;
            }), i2.on(Ce.LOG_MESSAGE, function(e3) {
              var t4 = e3.level, i3 = e3.message;
              return console[t4](i3);
            });
          }, t2.onVolumeChanged = function() {
            var _$e = c(document).hidden;
            this.pauseHiddenSilentTab && document[_$e] && 0 === this.getVolume() && this.postMessage("pause");
          }, t2.onMutedChanged = function() {
            var _$e = c(document).hidden;
            this.pauseHiddenSilentTab && document[_$e] && this.isMuted() && this.postMessage("pause");
          }, t2.onSeekCompleted = function() {
            this.seekTime = null;
          }, t2.onError = function() {
            this.paused = true;
          }, t2.onStateChanged = function(e3) {
            var t3 = this;
            switch (e3) {
              case j.READY:
                var i2 = function(e4, t4) {
                  var i3 = [], n2 = [];
                  return e4.forEach(function(e5) {
                    t4(e5) ? i3.push(e5) : n2.push(e5);
                  }), {
                    supported: i3,
                    unsupported: n2
                  };
                }(this.state.qualities, this.isQualitySupported);
                this.state.qualities = i2.supported, i2.unsupported.forEach(function(e4) {
                  return t3.postMessage("removeQuality", [
                    e4
                  ]);
                }), this.isLoaded = true, this.autoPlayOptions && this.play(), this.paused || this.attemptPlay();
                break;
              case j.ENDED:
                this.paused = true;
            }
            this.emitter.emit(C.STATE_CHANGED, e3), this.emitter.emit(e3);
          }, t2.onID3 = function(e3) {
            var t3 = this;
            e3.forEach(function(e4) {
              if ("TXXX" === e4.id && "segmentmetadata" === e4.desc && e4.info.length) {
                var i2 = function(e5) {
                  try {
                    return JSON.parse(e5);
                  } catch (t4) {
                    return console.error("Failed JSON parse:", e5), {};
                  }
                }(e4.info[0]);
                if (Object.prototype.hasOwnProperty.call(i2, "stream_offset")) {
                  var n2 = Number(i2.stream_offset);
                  isNaN(n2) || (t3.state.startOffset = n2 - t3.getPosition());
                }
              }
            });
          }, t2.onVisibilityChange = function() {
            var _$e = c(document).hidden;
            this.paused || document[_$e] || this.attemptPlay(), this.pauseHiddenSilentTab && !this.paused && document[_$e] && (this.isMuted() || 0 === this.getVolume()) && this.postMessage("pause"), I().firefox || this.postMessage("setVisible", [
              !document[_$e]
            ]);
          }, t2.onSessionData = function(e3) {
            a(this.state, e3);
          }, t2.onWorkerMessage = function(e3) {
            var t3 = e3.data;
            if (t3 && t3.id === this.id) {
              var i2 = this.workerMessageProcessors.reduce(function(e4, t4) {
                return t4(e4);
              }, t3), n2 = i2.type, r2 = i2.arg;
              void 0 !== t3.arg ? this.emitter.emit(n2, r2) : this.emitter.emit(n2);
            }
          }, t2.processVideoElementAttributes = function(e3) {
            if (e3.hasAttribute("autoplay") && (e3.removeAttribute("autoplay"), this.setAutoplay(true)), e3.hasAttribute("playbackRate")) {
              var t3, i2 = parseFloat(null != (t3 = e3.getAttribute("playbackRate")) ? t3 : "1.0");
              if (!isNaN(i2)) {
                var n2 = d(i2, 0.25, 2);
                this.setPlaybackRate(n2);
              }
              e3.removeAttribute("playbackRate");
            }
            if (e3.hasAttribute("src")) {
              var r2 = e3.src;
              h(e3), this.load(r2);
            }
            if (e3.hasAttribute("loop") && (e3.removeAttribute("loop"), this.setLooping(true)), e3.hasAttribute("muted") && (e3.removeAttribute("muted"), this.setMuted(true)), e3.hasAttribute("volume")) {
              var o2, s2 = parseFloat(null != (o2 = e3.getAttribute("volume")) ? o2 : "1.0");
              isNaN(s2) || this.setVolume(d(s2, 0, 1)), e3.removeAttribute("volume");
            }
          }, e2;
        }();
        Je.instanceId = 0;
        var Ze = function() {
          var e2 = function e3(e3) {
            var t3 = this;
            this.workerPort = void 0, this.emitter = void 0, this.messageQueue = void 0, this.workerPort = {
              postMessage: this.postMessageFromWorker.bind(this),
              onmessage: function onmessage() {
              }
            }, this.emitter = new Ye.EventEmitter(), this.messageQueue = new s(), this.loadScript(e3, function(e4) {
              return t3.applyWorkerEnv(e4);
            });
          };
          var t2 = e2.prototype;
          return t2.postMessage = function(e3) {
            this.messageQueue ? this.messageQueue.push(e3) : this.postMessageToWorker(e3);
          }, t2.addEventListener = function(e3, t3) {
            this.emitter.on(e3, t3);
          }, t2.removeEventListener = function(e3, t3) {
            this.emitter.off(e3, t3);
          }, t2.onmessage = function() {
          }, t2.onmessageerror = function() {
          }, t2.onerror = function() {
          }, t2.terminate = function() {
          }, t2.dispatchEvent = function() {
            return true;
          }, t2.loadScript = function(e3, t3) {
            var i2 = this, n2 = new XMLHttpRequest();
            n2.open("GET", e3), n2.addEventListener("load", function() {
              n2.status >= 200 && n2.status < 400 ? t3(n2.response) : i2.emitter.emit("error", new Error(n2.statusText));
            }), n2.addEventListener("error", function(e4) {
              i2.emitter.emit("error", e4);
            }), n2.send();
          }, t2.applyWorkerEnv = function(e3) {
            if (this.messageQueue) {
              try {
                Function("self", "messageHandler", e3)(window, this.workerPort);
              } catch (e1) {
                return void this.emitter.emit("error", e1);
              }
              for (; !this.messageQueue.empty(); )
                this.postMessageToWorker(this.messageQueue.pop());
              this.messageQueue = null;
            }
          }, t2.postMessageFromWorker = function(e3) {
            var t3 = this;
            setTimeout(function() {
              t3.emitter.emit("message", {
                data: e3
              });
            }, 0);
          }, t2.postMessageToWorker = function(e3) {
            var t3 = this;
            setTimeout(function() {
              t3.workerPort.onmessage({
                data: e3
              });
            }, 0);
          }, e2;
        }();
        var et = "undefined" != typeof window && "object" == typeof window.WebAssembly && "function" == typeof window.WebAssembly.instantiate, tt = et;
        var nt, rt, ot, st, at, ut, ct, dt, ht = function() {
          var e2 = function e3(e3, t3) {
            this.core = void 0, this.startCapture = void 0, this.stopCapture = void 0, this.requestCaptureAnalytics = void 0, this.core = new Je(e3, t3);
          };
          var t2 = e2.prototype;
          return t2.addEventListener = function(e3, t3) {
            var i2;
            null == (i2 = this.checkCore()) || i2.addEventListener(e3, t3);
          }, t2.attachHTMLVideoElement = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.attachHTMLVideoElement(e3);
          }, t2.delete = function() {
            var e3;
            null == (e3 = this.checkCore()) || e3.delete(), this.core = null;
          }, t2.endRemotePlayback = function() {
            var e3;
            null == (e3 = this.checkCore()) || e3.endRemotePlayback();
          }, t2.isAutoplay = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isAutoplay();
          }, t2.isAutoQualityMode = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isAutoQualityMode();
          }, t2.getAverageBitrate = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getAverageBitrate();
          }, t2.getBandwidthEstimate = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getBandwidthEstimate();
          }, t2.getBufferDuration = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getBufferDuration();
          }, t2.getBuffered = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getBuffered();
          }, t2.getBufferedRanges = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getBufferedRanges();
          }, t2.getSinkBufferedRanges = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getSinkBufferedRanges();
          }, t2.getDecodedFrames = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getDecodedFrames();
          }, t2.getDisplayHeight = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getDisplayHeight();
          }, t2.getDisplayWidth = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getDisplayWidth();
          }, t2.getDroppedFrames = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getDroppedFrames();
          }, t2.getDuration = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getDuration();
          }, t2.getExperiments = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getExperiments();
          }, t2.getHTMLVideoElement = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getHTMLVideoElement();
          }, t2.getLiveLatency = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getLiveLatency();
          }, t2.getPath = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getPath();
          }, t2.getProtocol = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getProtocol();
          }, t2.getPlaybackRate = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getPlaybackRate();
          }, t2.getPosition = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getPosition();
          }, t2.getQualities = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getQualities();
          }, t2.getQuality = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getQuality();
          }, t2.getSessionData = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getSessionData();
          }, t2.getSessionId = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getSessionId();
          }, t2.getStartOffset = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getStartOffset();
          }, t2.getState = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getState();
          }, t2.getVersion = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getVersion();
          }, t2.getVideoBitRate = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getVideoBitRate();
          }, t2.getVideoFrameRate = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getVideoFrameRate();
          }, t2.getVideoHeight = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getVideoHeight();
          }, t2.getVideoWidth = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getVideoWidth();
          }, t2.getVolume = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.getVolume();
          }, t2.isLiveLowLatency = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isLiveLowLatency();
          }, t2.isLooping = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isLooping();
          }, t2.isMuted = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isMuted();
          }, t2.isPaused = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isPaused();
          }, t2.isProtected = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isProtected();
          }, t2.isSeeking = function() {
            var e3;
            return null == (e3 = this.checkCore()) ? void 0 : e3.isSeeking();
          }, t2.load = function(e3, t3) {
            var i2;
            return void 0 === t3 && (t3 = ""), null == (i2 = this.checkCore()) ? void 0 : i2.load(e3, t3);
          }, t2.pause = function() {
            var e3;
            null == (e3 = this.checkCore()) || e3.pause();
          }, t2.play = function() {
            var e3;
            null == (e3 = this.checkCore()) || e3.play();
          }, t2.removeEventListener = function(e3, t3) {
            var i2;
            null == (i2 = this.checkCore()) || i2.removeEventListener(e3, t3);
          }, t2.seekTo = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.seekTo(e3);
          }, t2.setAuthToken = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setAuthToken(e3);
          }, t2.setAutoInitialBitrate = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setAutoInitialBitrate(e3);
          }, t2.setAutoMaxQuality = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setAutoMaxQuality(e3);
          }, t2.setAutoMaxBitrate = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setAutoMaxBitrate(e3);
          }, t2.setAutoMaxVideoSize = function(e3, t3) {
            var i2;
            null == (i2 = this.checkCore()) || i2.setAutoMaxVideoSize(e3, t3);
          }, t2.setAutoplay = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setAutoplay(e3);
          }, t2.setAutoPlayOptions = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setAutoPlayOptions(e3);
          }, t2.setAutoQualityMode = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setAutoQualityMode(e3);
          }, t2.setAutoViewportSize = function(e3, t3) {
            var i2;
            null == (i2 = this.checkCore()) || i2.setAutoViewportSize(e3, t3);
          }, t2.setClientId = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setClientId(e3);
          }, t2.setDeviceId = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setDeviceId(e3);
          }, t2.setExperiment = function(e3, t3) {
            var i2;
            null == (i2 = this.checkCore()) || i2.setExperiment(e3, t3);
          }, t2.setExperimentData = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setExperimentData(e3);
          }, t2.setInitialBufferDuration = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setInitialBufferDuration(e3);
          }, t2.setLiveLowLatencyEnabled = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setLiveLowLatencyEnabled(e3);
          }, t2.setLiveMaxLatency = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setLiveMaxLatency(e3);
          }, t2.setLiveSpeedUpRate = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setLiveSpeedUpRate(e3);
          }, t2.setLogLevel = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setLogLevel(e3);
          }, t2.setLooping = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setLooping(e3);
          }, t2.setMuted = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setMuted(e3);
          }, t2.setPlaybackRate = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setPlaybackRate(e3);
          }, t2.setPlayerType = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setPlayerType(e3);
          }, t2.setQuality = function(e3, t3) {
            var i2;
            void 0 === t3 && (t3 = false), null == (i2 = this.checkCore()) || i2.setQuality(e3, t3);
          }, t2.setRebufferToLive = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setRebufferToLive(e3);
          }, t2.setVisible = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setVisible(e3);
          }, t2.setVolume = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setVolume(e3);
          }, t2.startRemotePlayback = function() {
            var e3;
            null == (e3 = this.checkCore()) || e3.startRemotePlayback();
          }, t2.setPlatformName = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setPlatformName(e3);
          }, t2.setRequestCredentials = function(e3) {
            var t3;
            null == (t3 = this.checkCore()) || t3.setRequestCredentials(e3);
          }, t2.checkCore = function() {
            return this.core || console.warn("Method called on deleted player instance."), this.core;
          }, e2;
        }();
        ht.isVP9Supported = Je.isVP9Supported, function(e2) {
          e2.UNKNOWN = "Unspecified", e2.FILE = "File", e2.SEGMENT = "Segment", e2.SOURCE = "Source", e2.DECODER = "Decode", e2.RENDERER = "Render", e2.MASTER_PLAYLIST = "MasterPlaylist", e2.MEDIA_PLAYLIST = "MediaPlaylist";
        }(nt || (nt = {})), function(e2) {
          e2.GENERIC = "Error", e2.NOT_SUPPORTED = "ErrorNotSupported", e2.NO_SOURCE = "ErrorNoSource", e2.INVALID_DATA = "ErrorInvalidData", e2.INVALID_STATE = "ErrorInvalidState", e2.INVALID_PARAMETER = "ErrorInvalidParameter", e2.TIMEOUT = "ErrorTimeout", e2.NETWORK = "ErrorNetwork", e2.NETWORK_IO = "ErrorNetworkIO", e2.AUTHORIZATION = "ErrorAuthorization", e2.NOT_AVAILABLE = "ErrorNotAvailable";
        }(rt || (rt = {})), function(e2) {
          e2[e2.GEOBLOCKED = 1] = "GEOBLOCKED", e2[e2.UNSUPPORTED_DEVICE = 2] = "UNSUPPORTED_DEVICE", e2[e2.ANONYMIZER_BLOCKED = 3] = "ANONYMIZER_BLOCKED", e2[e2.CELLULAR_NETWORK_PROHIBITED = 4] = "CELLULAR_NETWORK_PROHIBITED", e2[e2.UNAUTHORIZATION_ENTITLEMENTS = 5] = "UNAUTHORIZATION_ENTITLEMENTS", e2[e2.VOD_RESTRICTED = 6] = "VOD_RESTRICTED";
        }(ot || (ot = {})), function(e2) {
          e2.CAPTURE_ENABLED = "CaptureEnabled", e2.CAPTURE_BUNDLE = "CaptureBundle", e2.CAPTURE_ANALYTICS = "CaptureAnalytics", e2.FMP4_SEGMENT = "FMP4Segment";
        }(st || (st = {})), function(e2) {
          e2.DEBUG = "debug", e2.INFO = "info", e2.WARN = "warn", e2.ERROR = "error";
        }(at || (at = {})), function(e2) {
          e2.DURATION_CHANGE = "durationchange", e2.ENDED = "ended", e2.ERROR = "error", e2.LOADED_METADATA = "loadedmetadata", e2.LOADSTART = "loadstart", e2.PAUSE = "pause", e2.PLAY = "play", e2.PLAYING = "playing", e2.RATE_CHANGE = "ratechange", e2.SEEKED = "seeked", e2.SEEKING = "seeking", e2.TIME_UPDATE = "timeupdate", e2.VOLUME_CHANGE = "volumechange", e2.WAITING = "waiting";
        }(ut || (ut = {})), function(e2) {
          e2[e2.HAVE_NOTHING = 0] = "HAVE_NOTHING", e2[e2.HAVE_METADATA = 1] = "HAVE_METADATA", e2[e2.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e2[e2.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e2[e2.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
        }(dt || (dt = {}));
        var lt = ((ct = {})[j.IDLE] = 1, ct[j.READY] = 1, ct[j.BUFFERING] = 2, ct[j.PLAYING] = 2, ct[j.ENDED] = 1, ct), ft = "AmazonIVS";
        var vt = "enableIVSQualityPlugin";
        module.exports = t;
      }();
    }
  });

  // scripts/modules/video.ts
  function asyncGeneratorStep15(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator15(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep15(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep15(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var import_amazon_ivs_player, __generator15, video, videoAudioContext, videoSource, videoGainNode, isVideoEnded, connectVideoSourceWithNode, prepareVideo, playVideo, stopVideo, togglePause, isVideoPaused, setVideoForwardFor, isVideoPlaying, setVideoRewindFor, getVideoDuration, setCurrentTime, getCurrentTime, getSliderRate, seekVideoBy, setMute, initializeVideoEventListeners;
  var init_video = __esm({
    "scripts/modules/video.ts"() {
      "use strict";
      import_amazon_ivs_player = __toESM(require_dist());
      init_const();
      init_debug();
      init_platform();
      __generator15 = function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      video = void 0;
      videoAudioContext = void 0;
      videoSource = void 0;
      videoGainNode = void 0;
      isVideoEnded = false;
      connectVideoSourceWithNode = function() {
        if (!isIPhone() && !isMac()) {
          return;
        }
        if (videoAudioContext === void 0) {
          videoAudioContext = new (heliportWindow.AudioContext || heliportWindow.webkitAudioContext)();
        }
        if (videoSource === void 0 && videoAudioContext !== void 0 && video !== void 0) {
          videoSource = videoAudioContext.createMediaElementSource(video);
        }
        if (videoGainNode === void 0) {
          if (videoAudioContext !== void 0) {
            videoGainNode = videoAudioContext.createGain();
          }
          if (videoAudioContext !== void 0 && videoSource !== void 0) {
            videoSource.connect(videoGainNode || videoAudioContext.createGain());
          }
          if (videoGainNode !== void 0 && videoAudioContext !== void 0) {
            videoGainNode.connect(videoAudioContext.destination);
          }
        }
      };
      prepareVideo = function(loop) {
        if (video !== void 0) {
          return;
        }
        video = document.getElementById("video0");
        video.loop = loop;
        isVideoEnded = false;
        video.onseeking = function() {
          return isVideoEnded = false;
        };
        video.onseeked = function() {
          return isVideoEnded = true;
        };
        video.oncanplay = function() {
          return isVideoEnded = false;
        };
        video.oncanplaythrough = function() {
          return isVideoEnded = true;
        };
        video.onended = function(event) {
          debugLog("g_Video onEnded ".concat(JSON.stringify(event)));
          isVideoEnded = true;
        };
        video.addEventListener("loadedmetadata", function() {
          if (typeof heliportWindow.hel_video_on_loadedmetadata === "function") {
            heliportWindow.hel_video_on_loadedmetadata();
          }
        });
      };
      playVideo = function() {
        var _ref = _asyncToGenerator15(function(videoSrc, videoStreaming) {
          var player, hls;
          return __generator15(this, function(_state) {
            switch (_state.label) {
              case 0:
                if (video === void 0) {
                  return [
                    2
                  ];
                }
                if (!(videoStreaming !== 0))
                  return [
                    3,
                    7
                  ];
                if (!import_amazon_ivs_player.isPlayerSupported)
                  return [
                    3,
                    1
                  ];
                connectVideoSourceWithNode();
                player = (0, import_amazon_ivs_player.create)({
                  wasmBinary: "",
                  wasmWorker: ""
                });
                player.attachHTMLVideoElement(video);
                player.load(videoSrc);
                player.play();
                return [
                  3,
                  6
                ];
              case 1:
                if (!(!isIPhone() && typeof Hls !== "undefined" && Hls.isSupported()))
                  return [
                    3,
                    3
                  ];
                connectVideoSourceWithNode();
                hls = new Hls();
                hls.loadSource(videoSrc);
                hls.attachMedia(video);
                return [
                  4,
                  video.play()
                ];
              case 2:
                _state.sent();
                return [
                  3,
                  6
                ];
              case 3:
                if (!video.canPlayType("application/vnd.apple.mpegurl"))
                  return [
                    3,
                    5
                  ];
                connectVideoSourceWithNode();
                video.src = videoSrc;
                return [
                  4,
                  video.play()
                ];
              case 4:
                _state.sent();
                return [
                  3,
                  6
                ];
              case 5:
                debugLog("video streaming not supported");
                _state.label = 6;
              case 6:
                return [
                  3,
                  9
                ];
              case 7:
                connectVideoSourceWithNode();
                video.src = videoSrc;
                return [
                  4,
                  video.play()
                ];
              case 8:
                _state.sent();
                _state.label = 9;
              case 9:
                return [
                  2
                ];
            }
          });
        });
        return function playVideo2(videoSrc, videoStreaming) {
          return _ref.apply(this, arguments);
        };
      }();
      stopVideo = function() {
        if (video === void 0) {
          return;
        }
        video.pause();
      };
      togglePause = function() {
        var _ref = _asyncToGenerator15(function(toggle) {
          return __generator15(this, function(_state) {
            switch (_state.label) {
              case 0:
                if (video === void 0) {
                  return [
                    2
                  ];
                }
                if (!toggle)
                  return [
                    3,
                    1
                  ];
                video.pause();
                return [
                  3,
                  3
                ];
              case 1:
                return [
                  4,
                  video.play()
                ];
              case 2:
                _state.sent();
                _state.label = 3;
              case 3:
                return [
                  2
                ];
            }
          });
        });
        return function togglePause2(toggle) {
          return _ref.apply(this, arguments);
        };
      }();
      isVideoPaused = function() {
        if (video === void 0) {
          return true;
        }
        return video.paused;
      };
      setVideoForwardFor = function(seconds) {
        if (video === void 0) {
          return;
        }
        video.currentTime += seconds;
      };
      isVideoPlaying = function() {
        if (video === void 0) {
          return false;
        }
        return !(video.loop && isVideoEnded);
      };
      setVideoRewindFor = function(seconds) {
        if (video === void 0) {
          return;
        }
        video.currentTime -= seconds;
      };
      getVideoDuration = function() {
        if (video === void 0) {
          return 0;
        }
        return video.duration;
      };
      setCurrentTime = function(sliderRate) {
        if (video === void 0) {
          return;
        }
        if (video.duration > 0) {
          video.currentTime = sliderRate * video.duration;
        }
      };
      getCurrentTime = function() {
        if (video === void 0) {
          return 0;
        }
        return video.currentTime;
      };
      getSliderRate = function() {
        if (video === void 0) {
          return 0;
        }
        var sliderRate = 0;
        if (video.duration > 0) {
          sliderRate = video.currentTime / video.duration;
        }
        return sliderRate;
      };
      seekVideoBy = function(seconds) {
        if (video === void 0) {
          return;
        }
        video.currentTime = seconds;
      };
      setMute = function(mute) {
        if (video === void 0) {
          return;
        }
        video.muted = mute;
      };
      initializeVideoEventListeners = function(onPlayed, onPaused, onEnded) {
        if (video === void 0) {
          return;
        }
        if (onPlayed !== void 0) {
          video.addEventListener("play", onPlayed);
        }
        if (onPaused !== void 0) {
          video.addEventListener("pause", onPaused);
        }
        if (onEnded !== void 0) {
          video.addEventListener("ended", onEnded);
        }
      };
    }
  });

  // scripts/deviceFeatures/useVideo.ts
  var useVideo;
  var init_useVideo = __esm({
    "scripts/deviceFeatures/useVideo.ts"() {
      "use strict";
      init_video();
      useVideo = function() {
        return {
          setVideoForwardFor,
          connectVideoSourceWithNode,
          setVideoRewindFor,
          getVideoDuration,
          initializeVideoEventListeners,
          isVideoPaused,
          playVideo,
          isVideoPlaying,
          seekVideoBy,
          prepareVideo,
          stopVideo,
          getSliderRate,
          setCurrentTime,
          getCurrentTime,
          togglePause,
          setMute
        };
      };
    }
  });

  // scripts/loader.ts
  var loadApis, loadDeviceApis;
  var init_loader = __esm({
    "scripts/loader.ts"() {
      "use strict";
      init_useAnalytics();
      init_useAuth();
      init_useAvatar();
      init_useInterval();
      init_useProfile();
      init_useRoomApi();
      init_useRouter();
      init_useScreen();
      init_useText();
      init_useVrAd();
      init_const();
      init_useCanvas();
      init_useCookie();
      init_useDocument();
      init_useGyro();
      init_usePlatform();
      init_useRender();
      init_useStorage();
      init_useVideo();
      loadApis = function() {
        if (heliportWindow.api === void 0) {
          heliportWindow.api = {};
        }
        if (heliportWindow.api.analytics === void 0) {
          heliportWindow.api.analytics = {};
        }
        heliportWindow.api.analytics = Object.assign(heliportWindow.api.analytics, useAnalytics());
        if (heliportWindow.api.auths === void 0) {
          heliportWindow.api.auths = {};
        }
        heliportWindow.api.auths = Object.assign(heliportWindow.api.auths, useAuth());
        if (heliportWindow.api.avatars === void 0) {
          heliportWindow.api.avatars = {};
        }
        heliportWindow.api.avatars = Object.assign(heliportWindow.api.avatars, useAvatar());
        if (heliportWindow.api.intervals === void 0) {
          heliportWindow.api.intervals = {};
        }
        heliportWindow.api.intervals = Object.assign(heliportWindow.api.intervals, useInterval());
        if (heliportWindow.api.profiles === void 0) {
          heliportWindow.api.profiles = {};
        }
        heliportWindow.api.profiles = Object.assign(heliportWindow.api.profiles, useProfile());
        if (heliportWindow.api.rooms === void 0) {
          heliportWindow.api.rooms = {};
        }
        heliportWindow.api.rooms = Object.assign(heliportWindow.api.rooms, useRoomApi());
        if (heliportWindow.api.routers === void 0) {
          heliportWindow.api.routers = {};
        }
        heliportWindow.api.routers = Object.assign(heliportWindow.api.routers, useRouter());
        if (heliportWindow.api.screens === void 0) {
          heliportWindow.api.screens = {};
        }
        heliportWindow.api.screens = Object.assign(heliportWindow.api.screens, useScreen());
        if (heliportWindow.api.texts === void 0) {
          heliportWindow.api.texts = {};
        }
        heliportWindow.api.texts = Object.assign(heliportWindow.api.texts, useText());
        if (heliportWindow.api.vrads === void 0) {
          heliportWindow.api.vrads = {};
        }
        heliportWindow.api.vrads = Object.assign(heliportWindow.api.vrads, useVrAd());
      };
      loadDeviceApis = function() {
        if (heliportWindow.canvas === void 0) {
          heliportWindow.canvas = {};
        }
        heliportWindow.canvas = Object.assign(heliportWindow.canvas, useCanvas());
        if (heliportWindow.cookie === void 0) {
          heliportWindow.cookie = {};
        }
        heliportWindow.cookie = Object.assign(heliportWindow.cookie, useCookie());
        if (heliportWindow.doc === void 0) {
          heliportWindow.doc = {};
        }
        heliportWindow.doc = Object.assign(heliportWindow.doc, useDocument());
        if (heliportWindow.gyro === void 0) {
          heliportWindow.gyro = {};
        }
        heliportWindow.gyro = Object.assign(heliportWindow.gyro, useGyro());
        if (heliportWindow.platform === void 0) {
          heliportWindow.platform = {};
        }
        heliportWindow.platform = Object.assign(heliportWindow.platform, usePlatform());
        if (heliportWindow.render === void 0) {
          heliportWindow.render = {};
        }
        heliportWindow.render = Object.assign(heliportWindow.render, useRender());
        if (heliportWindow.storage === void 0) {
          heliportWindow.storage = {};
        }
        heliportWindow.storage = Object.assign(heliportWindow.storage, useStorage());
        if (heliportWindow.video === void 0) {
          heliportWindow.video = {};
        }
        heliportWindow.video = Object.assign(heliportWindow.video, useVideo());
      };
    }
  });

  // scripts/bootstrap.ts
  var require_bootstrap = __commonJS({
    "scripts/bootstrap.ts"(exports) {
      "use strict";
      init_configs();
      init_const();
      init_configs2();
      init_loader();
      init_debug();
      function asyncGeneratorStep16(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator16(fn) {
        return function() {
          var self2 = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
              asyncGeneratorStep16(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep16(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      var __generator16 = exports && exports.__generator || function(thisArg, body) {
        var f, y, t, g, _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        };
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [
                  op[0] & 2,
                  t.value
                ];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [
                    0
                  ];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [
                6,
                e
              ];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      heliportWindow.bootHeliport = /* @__PURE__ */ _asyncToGenerator16(function() {
        var config8;
        return __generator16(this, function(_state) {
          config8 = getConfig();
          debugLog("hello world at env : ".concat(config8.skywayKey));
          loadConfig();
          loadDeviceApis();
          loadApis();
          return [
            2
          ];
        });
      });
      heliportWindow.bootHeliport();
    }
  });

  // scripts/index.ts
  var scripts_exports = {};
  __reExport(scripts_exports, __toESM(require_bootstrap()));
})();
/*! For license information please see index.js.LICENSE.txt */
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */