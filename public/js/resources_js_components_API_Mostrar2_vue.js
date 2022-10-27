"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_API_Mostrar2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/API/Mostrar2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/API/Mostrar2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      todos: null,
      student: null,
      search: null,
      search1: null,
      search2: null,
      search3: null,
      search4: null,
      search5: null
    };
  },
  mounted: function mounted() {
    console.log('Hola mundo desde mounted');
    this.getTodos();
  },
  methods: {
    getTodos: function getTodos() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://sicoep.org/api/students_by_school').then(function (response) {
        console.log(response);
        _this.todos = response.data;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    searchData: function searchData() {
      var _this2 = this;
      if (this.search1 && this.search && this.search4 && this.search5) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://sicoep.org/api/students_by_school?school=' + this.search1 + '&grade=' + this.search + '&dateStart=' + this.search4 + '&dateEnd=' + this.search5).then(function (res) {
          _this2.student = res.data;
        })["catch"](function (err) {
          console.log(err);
        });
      } else {}
      alert("Tecla enter presionada");
    },
    searchData1: function searchData1() {
      var _this3 = this;
      if (this.search2) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://sicoep.org/api/students_by_school?school=' + this.search2).then(function (res) {
          _this3.student = res.data;
        })["catch"](function (err) {
          console.log(err);
        });
      }
      if (this.search3) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://sicoep.org/api/students_by_school?grade=' + this.search3).then(function (res) {
          _this3.student = res.data;
        })["catch"](function (err) {
          console.log(err);
        });
      } else {}
      alert("Tecla enter presionada");
    }
  }
});

/***/ }),

/***/ "./resources/js/components/API/Mostrar2.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/API/Mostrar2.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mostrar2_vue_vue_type_template_id_087a4352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar2.vue?vue&type=template&id=087a4352& */ "./resources/js/components/API/Mostrar2.vue?vue&type=template&id=087a4352&");
/* harmony import */ var _Mostrar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar2.vue?vue&type=script&lang=js& */ "./resources/js/components/API/Mostrar2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar2_vue_vue_type_template_id_087a4352___WEBPACK_IMPORTED_MODULE_0__.render,
  _Mostrar2_vue_vue_type_template_id_087a4352___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/API/Mostrar2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/API/Mostrar2.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/API/Mostrar2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mostrar2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/API/Mostrar2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/API/Mostrar2.vue?vue&type=template&id=087a4352&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/API/Mostrar2.vue?vue&type=template&id=087a4352& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar2_vue_vue_type_template_id_087a4352___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar2_vue_vue_type_template_id_087a4352___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar2_vue_vue_type_template_id_087a4352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mostrar2.vue?vue&type=template&id=087a4352& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/API/Mostrar2.vue?vue&type=template&id=087a4352&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/API/Mostrar2.vue?vue&type=template&id=087a4352&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/API/Mostrar2.vue?vue&type=template&id=087a4352& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12 m-0 p-0" }, [
    _c("h1", [_vm._v("Deseas buscar por Escuela y Grado")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search1,
          expression: "search1"
        }
      ],
      attrs: { type: "text", placeholder: "Buscar Escuela" },
      domProps: { value: _vm.search1 },
      on: {
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.searchData.apply(null, arguments)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search1 = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search,
          expression: "search"
        }
      ],
      attrs: { type: "text", placeholder: "Buscar Grado" },
      domProps: { value: _vm.search },
      on: {
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.searchData.apply(null, arguments)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search4,
          expression: "search4"
        }
      ],
      attrs: { type: "date", placeholder: "Buscar Escuela" },
      domProps: { value: _vm.search4 },
      on: {
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.searchData.apply(null, arguments)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search4 = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search5,
          expression: "search5"
        }
      ],
      attrs: { type: "date", placeholder: "Buscar Grado" },
      domProps: { value: _vm.search5 },
      on: {
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.searchData.apply(null, arguments)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search5 = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("h1", [_vm._v("Deseas buscar por Escuela o Grado")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search2,
          expression: "search2"
        }
      ],
      attrs: { type: "text", placeholder: "Buscar Escuela" },
      domProps: { value: _vm.search2 },
      on: {
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.searchData1.apply(null, arguments)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search2 = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search3,
          expression: "search3"
        }
      ],
      attrs: { type: "text", placeholder: "Buscar Grado" },
      domProps: { value: _vm.search3 },
      on: {
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.searchData1.apply(null, arguments)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search3 = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c(
        "table",
        {
          staticClass: "table table-bordered border-dark",
          staticStyle: { "background-color": "#F3F0E7" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.student, function(students) {
              return _c("tr", { key: students.id }, [
                _c("td", [_vm._v(_vm._s(students.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(students.grades))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(students.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(students.municipality_id))])
              ])
            }),
            0
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      {
        staticClass: "bg-dark text-white",
        attrs: { STYLE: "background-color: #67DECD;" }
      },
      [
        _c("tr", [
          _c("th", [_vm._v("ID")]),
          _vm._v(" "),
          _c("th", [_vm._v("Grades")]),
          _vm._v(" "),
          _c("th", [_vm._v("Escuela")]),
          _vm._v(" "),
          _c("th", [_vm._v("Municipio")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);