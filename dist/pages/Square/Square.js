(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/Square/Square"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Square/Square.jsx":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Square/Square.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Square; });
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _square_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./square.css */ "./src/pages/Square/square.css");
/* harmony import */ var _square_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_square_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Images_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Images/搜索.png */ "./src/Images/搜索.png");
/* harmony import */ var _Images_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Images_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/Item */ "./src/Components/Item/index.jsx");
/* harmony import */ var _Service_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Service/fetch */ "./src/Service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















var Square = /*#__PURE__*/function (_Component) {
  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Square, _Component);

  var _super = Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Square);

  function Square() {
    var _this;

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Square);

    _this = _super.apply(this, arguments);

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "getGoods", function () {
      var newGoods = _this.state.goods;
      Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])('/goods/details/all').then(function (data) {
        if (data.data !== null) {
          newGoods = newGoods.concat(data.data);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.stopPullDownRefresh();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.hideNavigationBarLoading();

          _this.setState({
            goods: data.data,
            isFirst: false
          });
        } else {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
            title: '到底啦！',
            duration: 2000
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.stopPullDownRefresh();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.hideNavigationBarLoading();

          _this.setState({
            bottomFlag: true
          });
        }
      });
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "Toresearch", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.redirectTo({
        url: '/pages/Search/index'
      });
    });

    _this.state = {
      goods: [],
      bottomFlag: false,
      isFirst: true
    };
    return _this;
  }

  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Square, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var isFirst = this.state.isFirst;

      if (isFirst == 1) {
        this.getGoods();
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showNavigationBarLoading();
      this.getGoods();
    }
    /* goDtl = (goods_id) => {
      const id = goods_id;
      Taro.redirectTo({
        url:'/pages/Goods-details/index?goods_id='+id
      })
    }
    */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          bottomFlag = _this$state.bottomFlag,
          goods = _this$state.goods;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
        className: "ground",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "header",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Input */ "c"], {
            type: "text",
            placeholder: "",
            onClick: this.Toresearch
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Image */ "b"], {
            src: _Images_png__WEBPACK_IMPORTED_MODULE_10___default.a,
            style: {
              width: 32,
              height: 32,
              marginTop: 20
            }
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "show",
          children: goods.map(function (good) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Components_Item__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
              content: good.content,
              price: good.price,
              iffavorite: good.if_collected,
              username: good.user_nickname,
              QQ: good.qq_account,
              user_image: good.user_image,
              item_image: good.goods_images_videos,
              goods_id: good.id,
              if_sell: good.if_sell,
              if_del: good.if_del
            }, 'item');
          })
        }), bottomFlag && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "bottomBox",
          children: "\u5230\u5E95\u5566\uFF01"
        })]
      });
    }
  }]);

  return Square;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/pages/Square/Square.jsx":
/*!*************************************!*\
  !*** ./src/pages/Square/Square.jsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_Square_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./Square.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Square/Square.jsx");


var config = {"navigationBarTitleText":"主页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_Square_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Square/Square', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/Square/square.css":
/*!*************************************!*\
  !*** ./src/pages/Square/square.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/Square/Square.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=Square.js.map