(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/Addgoods/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Addgoods/index.jsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Addgoods/index.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/pages/Addgoods/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Modal4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/Modal4 */ "./src/Components/Modal4/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















var Index = /*#__PURE__*/function (_Component) {
  Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component);

  var _super = Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index(props) {
    var _this;

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Index);

    _this = _super.call(this, props);

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "showModal", function () {
      var ifHidden = _this.state.hidden;
      var Hidden = !ifHidden;

      _this.setState({
        hidden: Hidden
      });
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "changeHidden", function () {
      var ifHidden = _this.state.hidden;
      var Hidden = !ifHidden;

      _this.setState({
        hidden: Hidden
      });
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "addImage", function () {
      var _this$state = _this.state,
          images = _this$state.images,
          tempImage = _this$state.tempImage;
      var params = {};
      params.count = 1;
      params.sizeType = ['original', 'compressed'];
      params.sourceType = ['album', 'camera'];
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.chooseImage(params).then(function (res) {
        var tempFilePaths = res.tempFilePaths;
        var file = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getFileSystemManager().readFileSync(tempFilePaths[0], "base64");

        _this.setState({
          images: [].concat(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(images), [file]),
          tempImage: [].concat(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(tempImage), [tempFilePaths[0]])
        });
      });
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "compressImage", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.compressImage();
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleText", function (e) {
      _this.setState({
        description: e.target.value
      });
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handlePrice", function (e) {
      _this.setState({
        price: e.target.value
      });
    });

    _this.state = {
      text: '客官，请留下您的联系方式',
      place: '请输入您的QQ号',
      hidden: true,
      images: [],
      tempImage: [],
      price: '',
      description: ''
    };
    return _this;
  }

  Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      this.setState({
        images: [],
        tempImage: [],
        price: '',
        description: ''
      });
    }
  }, {
    key: "toTags",
    value: function toTags() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
        url: '/pages/Tags/index'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var tempImage = this.state.tempImage;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "f"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "f"], {
          className: "AddGoods_container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Textarea */ "e"], {
            type: "number",
            placeholder: "\u8BF7\u63CF\u8FF0\u4E00\u4E0B\u4F60\u7684\u5B9D\u8D1D",
            maxlength: 250,
            className: "AddGoods_textarea",
            value: this.state.description,
            onInput: this.handleText
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "f"], {
            className: "AddGoods_price",
            children: ["\u5B9A\u4EF7\uFF1A", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "f"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "d"], {
                children: "\uFFE5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Input */ "c"], {
                placeholder: "00.00",
                placeholderStyle: "color:red",
                type: "number",
                onInput: this.handlePrice
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
            onClick: this.toTags,
            className: "AddGoods_tag",
            children: "#"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "f"], {
            children: [tempImage.map(function (image) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "b"], {
                src: image
              }, image.id);
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "f"], {
              className: "AddGoods_addimg",
              onClick: this.addImage
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
          className: "AddGoods_sell",
          onClick: this.showModal,
          children: "\u53D1\u5E03"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Components_Modal4__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
          price: this.state.price,
          images: this.state.images,
          description: this.state.description,
          hidden: this.state.hidden,
          changeHidden: this.changeHidden,
          text: this.state.text,
          place: this.state.place,
          maxlength: "10"
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/Components/Modal4/index.css":
/*!*****************************************!*\
  !*** ./src/Components/Modal4/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Components/Modal4/index.jsx":
/*!*****************************************!*\
  !*** ./src/Components/Modal4/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/Components/Modal4/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Service_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Service/fetch */ "./src/Service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














var Index = /*#__PURE__*/function (_Component) {
  Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index, _Component);

  var _super = Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {
      videos: [],
      tag_ids: []
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "handleCancle", function () {
      _this.props.changeHidden();
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "getqq", function (e) {
      _this.setState({
        qq_account: e.target.value
      });
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "getCurrentTime", function () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate(); //时

      var hour = date.getHours(); //分  

      var minute = date.getMinutes(); //秒 

      var second = date.getSeconds();

      if (month < 10) {
        month = "0" + month;
      }

      if (day < 10) {
        day = "0" + day;
      }

      if (hour < 10) {
        hour = "0" + hour;
      }

      if (minute < 10) {
        minute = "0" + minute;
      }

      if (second < 10) {
        second = "0" + second;
      }

      return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    });

    Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "handleConfirm", function () {
      var time = _this.getCurrentTime();

      var _this$props = _this.props,
          price = _this$props.price,
          description = _this$props.description,
          images = _this$props.images;
      var _this$state = _this.state,
          qq_account = _this$state.qq_account,
          videos = _this$state.videos,
          tag_ids = _this$state.tag_ids;

      if (qq_account) {
        Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])('/goods', {
          qq_account: qq_account,
          price: price,
          images: images,
          description: description,
          tag_ids: tag_ids,
          videos: videos,
          time: time
        }, 'POST').then(function () {
          _this.props.changeHidden();

          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
            icon: 'none',
            title: '发布成功'
          });
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
          icon: 'none',
          title: '请输入QQ号'
        });
      }
    });

    return _this;
  }

  Object(D_Files_code_Taro_2022_TheSecondSandStore_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "debounce",
    value: function debounce(f) {
      var timer = null;
      return function () {
        var _this2 = this;

        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {
          f.call(_this2);
        }, 1000);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          hidden = _this$props2.hidden,
          text = _this$props2.text,
          place = _this$props2.place;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
        children: hidden ? null : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
          class: "toast-box",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
            class: "toastbg"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
            class: "showToast",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
              class: "toast-title",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "d"], {
                children: text
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
              class: "toast-main",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
                class: "toast-input",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "c"], {
                  placeholder: place,
                  onInput: this.getqq,
                  maxlength: 15
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
              class: "toast-button",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
                class: "button1",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], {
                  catchtap: "cancel",
                  onClick: this.handleCancle,
                  children: "\u53D6\u6D88"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "f"], {
                class: "button2",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], {
                  catchtap: "confirm",
                  onClick: this.debounce(this.handleConfirm),
                  children: "\u786E\u5B9A"
                })
              })]
            })]
          })]
        })
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/pages/Addgoods/index.css":
/*!**************************************!*\
  !*** ./src/pages/Addgoods/index.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Addgoods/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/Addgoods/index.jsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Addgoods/index.jsx");


var config = {"navigationBarTitleText":"发布商品"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Addgoods/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/Addgoods/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map