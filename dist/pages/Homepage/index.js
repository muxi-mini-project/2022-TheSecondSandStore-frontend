(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/Homepage/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Homepage/index.jsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Homepage/index.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/pages/Homepage/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Images_favorite_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Images/favorite.png */ "./src/Images/favorite.png");
/* harmony import */ var _Images_favorite_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Images_favorite_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Images_lists_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Images/lists.png */ "./src/Images/lists.png");
/* harmony import */ var _Images_lists_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Images_lists_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_Modal3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Components/Modal3 */ "./src/Components/Modal3/index.jsx");
/* harmony import */ var _Service_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Service/fetch */ "./src/Service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

















var index = /*#__PURE__*/function (_Component) {
  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(index, _Component);

  var _super = Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(index);

  function index() {
    var _this;

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {
      text: '客官，请留下对小贰的建议',
      place: '限150字...',
      hidden: true,
      user: [],
      avatar: ''
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "showModal", function () {
      var ifHidden = _this.state.hidden;
      var Hidden = !ifHidden;

      _this.setState({
        hidden: Hidden
      });
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "changeHidden", function () {
      var ifHidden = _this.state.hidden;
      var Hidden = !ifHidden;

      _this.setState({
        hidden: Hidden
      });
    });

    return _this;
  }

  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])("/user", {}, 'GET').then(function (res) {
        if (res.data) {
          _this2.setState({
            user: res.data
          });
        }
      });
    }
  }, {
    key: "tofavourites",
    value: function tofavourites() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
        url: '/pages/Favourites/index'
      });
    }
  }, {
    key: "tolists",
    value: function tolists() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
        url: '/pages/Lists/index'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          user = _this$state.user,
          avatar = _this$state.avatar;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
          className: "Homepage_box1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
            className: "Homepage_avatar",
            src: avatar ? avatar : "http://".concat(user.image),
            onClick: this.changeAvater
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "e"], {
            className: "Homepage_nickname",
            onClick: this.changeName,
            children: user.nickname
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
            className: "Homepage_count",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
              className: "Homepage_box2",
              children: [user.posts_number, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "e"], {
                children: "\u53D1\u5E03"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
              className: "Homepage_box3",
              children: [user.sells_number, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "e"], {
                children: "\u5356\u51FA"
              })]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
          onClick: this.tolists,
          className: "Homepage_lists",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
            src: _Images_lists_png__WEBPACK_IMPORTED_MODULE_15___default.a,
            className: "Homepage_img"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "e"], {
            children: "\u6211\u53D1\u5E03\u7684"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
          onClick: this.tofavourites,
          className: "Homepage_favourites",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
            src: _Images_favorite_png__WEBPACK_IMPORTED_MODULE_10___default.a,
            className: "Homepage_img"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "e"], {
            children: "\u6211\u6536\u85CF\u7684"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "g"], {
          className: "Homepage_feedback",
          onClick: this.showModal,
          children: "\u610F\u89C1\u53CD\u9988"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_Components_Modal3__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          hidden: this.state.hidden,
          changeHidden: this.changeHidden,
          text: this.state.text,
          place: this.state.place
        })]
      });
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/Images/lists.png":
/*!******************************!*\
  !*** ./src/Images/lists.png ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/lists.png";

/***/ }),

/***/ "./src/pages/Homepage/index.css":
/*!**************************************!*\
  !*** ./src/pages/Homepage/index.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Homepage/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/Homepage/index.jsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Homepage/index.jsx");


var config = {"navigationBarTitleText":"个人信息"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Homepage/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/Homepage/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map