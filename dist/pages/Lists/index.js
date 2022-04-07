(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/Lists/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Lists/index.jsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Lists/index.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _Components_Goods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Components/Goods */ "./src/Components/Goods/index.jsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.css */ "./src/pages/Lists/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Service_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Service/fetch */ "./src/Service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);















var Index = /*#__PURE__*/function (_Component) {
  Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component);

  var _super = Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "state", {
      goods: []
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "delgood", function (id) {
      Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])("/user/goods/".concat(id), {}, 'DELETE').then(Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])("/user/goods", {}, 'GET').then(function (res) {
        if (res.data) {
          _this.setState({
            goods: res.data
          });
        }
      }));
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "sellgood", function (id) {
      Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])("/user/goods/".concat(id), {}, 'PUT').then(Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])("/user/goods", {}, 'GET').then(function (res) {
        if (res.data) {
          _this.setState({
            goods: res.data
          });
        }
      }));
    });

    return _this;
  }

  Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])("/user/goods", {}, 'GET').then(function (res) {
        // console.log(res)
        if (res.data) {
          _this2.setState({
            goods: res.data
          });
        }
      });
    }
  }, {
    key: "todetail",
    value: function todetail() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
        url: '/pages/Goods-details/index?goods_id=' + this.id
      });
    } // Todetail=(goods_id)=>{
    //   Taro.redirectTo({
    //     url:'/pages/Goods-details/index?goods_id='+goods_id
    //   })
    //   return 1
    // }

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var goods = this.state.goods;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "f"], {
        children: goods.map(function (good) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Components_Goods__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, goods), {}, {
            goods: goods,
            todetail: _this3.todetail,
            delgood: _this3.delgood,
            sellgood: _this3.sellgood,
            id: good.id,
            goods_images_videos: good.goods_images_videos,
            content: good.content,
            if_sell: good.if_sell,
            if_del: good.if_del,
            user_nickname: good.user_nickname
          }), good.id);
        })
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/pages/Lists/index.css":
/*!***********************************!*\
  !*** ./src/pages/Lists/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Lists/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/Lists/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Lists/index.jsx");


var config = {"navigationBarTitleText":"我发布的"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Lists/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/Lists/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map