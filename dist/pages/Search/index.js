(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/Search/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Search/index.jsx":
/*!********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Search/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/pages/Search/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/Item */ "./src/Components/Item/index.jsx");
/* harmony import */ var _Images_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Images/搜索.png */ "./src/Images/搜索.png");
/* harmony import */ var _Images_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Images_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Images_back_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Images/back.png */ "./src/Images/back.png");
/* harmony import */ var _Images_back_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Images_back_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Images_delete_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Images/delete.png */ "./src/Images/delete.png");
/* harmony import */ var _Images_delete_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Images_delete_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Service_fetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Service/fetch */ "./src/Service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);



















var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "state", {
      historys: [],
      goods: [],
      inputVal: '',
      condition: '',
      hidden: false,
      show: true,
      ifdelete: true //初始状态不显示x号

    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleConfirm", function () {
      var inputVal = _this.state.inputVal;
      var _this$state = _this.state,
          historys = _this$state.historys,
          condition = _this$state.condition;

      if (inputVal.trim() !== '') {
        console.log(inputVal);

        if (historys.length < 8) {
          var history = {
            id: historys.length,
            name: inputVal
          };
          var newhistorys = [history].concat(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(historys));

          _this.setState({
            hidden: true,
            historys: newhistorys
          });

          _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.setStorageSync('history', newhistorys);

          _this.getsearch(condition);
        }
      }
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "clearHistory", function () {
      var ifdelete = _this.state.ifdelete;
      var ifDelete = !ifdelete;

      _this.setState({
        ifdelete: ifDelete
      });
      /* this.setState({
        historys: []
      });
      Taro.setStorageSync('history', []); */

    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleDelete", function (id) {
      var historys = _this.state.historys;
      var newHistorys = historys.filter(function (history) {
        return history.id !== id;
      });

      _this.setState({
        historys: newHistorys
      });

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.setStorageSync('history', newHistorys);
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleBack", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.reLaunch({
        url: '/pages/Square/Square'
      });
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "getsearch", function (condition) {
      Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])("/api/v1/goods/details/all/condition/".concat(condition), {}, 'GET').then(function (data) {
        console.log(data);
        var newGoods = _this.state.goods;

        if (data.data !== null) {
          newGoods = newGoods.concat(data.data);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.stopPullDownRefresh();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.hideNavigationBarLoading();

          _this.setState({
            goods: newGoods,
            show: false
          });
        } else {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.showToast({
            title: '到底啦！',
            duration: 2000
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.stopPullDownRefresh();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.hideNavigationBarLoading();
        }
      });
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleClickContent", function (name) {
      _this.getsearch(name);

      _this.setState({
        hidden: true
      });
    });

    return _this;
  }

  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, [{
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
      var historys = _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.getStorageSync('history') || [];
      this.setState({
        historys: historys
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
    /* //focus 
        handleFocus=()=> {
          let historys = Taro.getStorageSync('history') || [];
          this.setState({
          historys: historys
          });
        } */
    //oninput

  }, {
    key: "onInput",
    value: function onInput(e) {
      var value = e.detail.value;
      this.setState({
        inputVal: value,
        condition: value
      });
    } //confirm of Input

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          historys = _this$state2.historys,
          hidden = _this$state2.hidden,
          goods = _this$state2.goods,
          show = _this$state2.show,
          ifdelete = _this$state2.ifdelete;
      var inputVal = this.state.inputVal;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "e"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "e"], {
          className: "search-header",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "b"], {
            src: _Images_back_png__WEBPACK_IMPORTED_MODULE_13___default.a,
            style: {
              width: 20,
              height: 20,
              marginLeft: 10
            },
            onClick: this.handleBack
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "c"], {
            type: "text",
            placeholder: "",
            value: inputVal,
            onInput: this.onInput.bind(this),
            focus: true
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "b"], {
            src: _Images_png__WEBPACK_IMPORTED_MODULE_12___default.a,
            style: {
              width: 32,
              height: 32
            },
            onClick: this.handleConfirm
          })]
        }), hidden ? null : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "e"], {
          className: "box",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "e"], {
            className: "History",
            children: historys.map(function (history) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "e"], {
                className: "search-history",
                style: {
                  display: historys.length ? 'block' : 'none'
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "d"], {
                  onClick: function onClick() {
                    return _this2.handleClickContent(history.name);
                  },
                  children: history.name
                }, history.id), ifdelete ? null : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "d"], {
                  onClick: function onClick() {
                    return _this2.handleDelete(history.id);
                  },
                  style: {
                    marginLeft: 7
                  },
                  children: "\xD7"
                })]
              }, 'Search');
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "b"], {
            src: _Images_delete_png__WEBPACK_IMPORTED_MODULE_14___default.a,
            style: {
              width: 25,
              height: 25,
              marginLeft: 15
            },
            onClick: this.clearHistory
          })]
        }), show ? null : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "e"], {
          className: "show",
          children: goods.map(function (good) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_Components_Item__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
              content: good.content,
              price: good.price,
              iffavorite: good.if_collected,
              username: good.user_nickname,
              QQ: good.qq_account,
              user_image: good.user_image,
              item_image: good.goods_images_videos,
              goods_id: good.id
            }, 'item');
          })
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/Images/delete.png":
/*!*******************************!*\
  !*** ./src/Images/delete.png ***!
  \*******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/delete.png";

/***/ }),

/***/ "./src/pages/Search/index.css":
/*!************************************!*\
  !*** ./src/pages/Search/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Search/index.jsx":
/*!************************************!*\
  !*** ./src/pages/Search/index.jsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Search/index.jsx");


var config = {"navigationBarTitleText":"搜索"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Search/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/Search/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map