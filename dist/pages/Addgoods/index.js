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
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/pages/Addgoods/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Modal3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/Modal3 */ "./src/Components/Modal3/index.jsx");
/* harmony import */ var _Service_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Service/fetch */ "./src/Service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index(props) {
    var _this;

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Index);

    _this = _super.call(this, props);

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "showModal", function () {
      var ifHidden = _this.state.hidden;
      var Hidden = !ifHidden;

      _this.setState({
        hidden: Hidden
      });
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "changeHidden", function () {
      var ifHidden = _this.state.hidden;
      var Hidden = !ifHidden;

      _this.setState({
        hidden: Hidden
      });
    });

    Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "addImage", function () {
      var images = _this.state.images;
      var params = {};
      params.count = 9 - images.length;
      params.sizeType = ['original', 'compressed'];
      params.sourceType = ['album', 'camera'];
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.chooseImage(params).then(function (res) {
        console.log(res);
        var tempFilePaths = res.tempFilePaths;
        var file = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getFileSystemManager().readFileSync(tempFilePaths[0], "base64");
        console.log(file);

        _this.setState({
          images: file
        });
      });
    });

    _this.state = {
      text: '客官，请留下您的联系方式',
      place: '请输入您的QQ号',
      hidden: true,
      images: []
    };
    return _this;
  }

  Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, [{
    key: "toTags",
    value: function toTags() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
        url: '/pages/Tags/index'
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        content: e.target.content
      });
    }
  }, {
    key: "render",
    value: function render() {
      var images = this.state.images;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "g"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "g"], {
          className: "AddGoods_container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Textarea */ "f"], {
            type: "number",
            placeholder: "\u8BF7\u63CF\u8FF0\u4E00\u4E0B\u4F60\u7684\u5B9D\u8D1D",
            maxlength: 200,
            className: "AddGoods_textarea",
            value: this.state.content,
            onChange: this.handleChange
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
            onClick: this.toTags,
            className: "AddGoods_tag",
            children: "#"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "g"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "g"], {
              children: images.map(function (image) {
                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "c"], Object(_Users_apple_Desktop_miniproject_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, image), image.image_id);
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "g"], {
              className: "AddGoods_addimg",
              onClick: this.addImage
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
          className: "AddGoods_sell",
          onClick: this.showModal,
          children: "\u53D1\u5E03"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Components_Modal3__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
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