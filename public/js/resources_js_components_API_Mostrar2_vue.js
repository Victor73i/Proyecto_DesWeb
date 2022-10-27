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
/* harmony import */ var export_from_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! export-from-json */ "./node_modules/export-from-json/dist/esm/index.js");
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
    },
    descargarExcel: function descargarExcel() {
      var data = this.student;
      var fileName = 'SICOEP_ESTUDIANTES';
      var exportType = export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"].types.xls;
      (0,export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"])({
        data: data,
        fileName: fileName,
        exportType: exportType
      });
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
      attrs: { type: "date", placeholder: "Buscar Date inicio" },
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
      attrs: { type: "date", placeholder: "Buscar Date Final" },
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
    _c("div", { staticClass: "col-12 mb-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-success",
          staticStyle: { float: "right" },
          on: {
            click: function($event) {
              return _vm.descargarExcel()
            }
          }
        },
        [_vm._v("Exportar")]
      )
    ]),
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



/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/converters.js":
/*!**************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/converters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_createFieldsMapper": () => (/* binding */ _createFieldsMapper),
/* harmony export */   "_createJSONData": () => (/* binding */ _createJSONData),
/* harmony export */   "_createTableEntries": () => (/* binding */ _createTableEntries),
/* harmony export */   "_createTableMap": () => (/* binding */ _createTableMap),
/* harmony export */   "_prepareData": () => (/* binding */ _prepareData),
/* harmony export */   "_renderTableHTMLText": () => (/* binding */ _renderTableHTMLText),
/* harmony export */   "createCSVData": () => (/* binding */ createCSVData),
/* harmony export */   "createXLSData": () => (/* binding */ createXLSData),
/* harmony export */   "createXMLData": () => (/* binding */ createXMLData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/export-from-json/dist/esm/utils.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function _createFieldsMapper(fields) {
    if (!fields
        || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(fields) && !fields.length
        || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(fields) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getKeys)(fields).length)
        return function (item) { return item; };
    var mapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(fields)
        ? fields.reduce(function (map, key) {
            var _a;
            return (__assign(__assign({}, map), (_a = {}, _a[key] = key, _a)));
        }, Object.create(null))
        : fields;
    return function (item) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(item)) {
            return item
                .map(function (i) { return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(i).reduce(function (map, _a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (key in mapper) {
                    map[mapper[key]] = value;
                }
                return map;
            }, Object.create(null)); })
                .filter(function (i) { return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getKeys)(i).length; });
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(item).reduce(function (map, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (key in mapper) {
                map[mapper[key]] = value;
            }
            return map;
        }, Object.create(null));
    };
}
function _prepareData(data) {
    var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide a valid JSON';
    try {
        return (typeof data === 'string' ? JSON.parse(data) : data);
    }
    catch (_a) {
        throw new Error(MESSAGE_VALID_JSON_FAIL);
    }
}
function _createJSONData(data, replacer, space) {
    if (replacer === void 0) { replacer = null; }
    var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide valid JSON object';
    try {
        return JSON.stringify(data, replacer, space);
    }
    catch (_a) {
        throw new Error(MESSAGE_VALID_JSON_FAIL);
    }
}
function _createTableMap(data) {
    return data.map(_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries).reduce(function (tMap, rowKVs, rowIndex) {
        return rowKVs.reduce(function (map, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var columnValues = map[key] || Array.from({ length: data.length }).map(function (_) { return ''; });
            columnValues[rowIndex] =
                (typeof value !== 'string' ? JSON.stringify(value) : value) || '';
            map[key] = columnValues;
            return map;
        }, tMap);
    }, Object.create(null));
}
function _createTableEntries(tableMap, beforeTableEncode) {
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    return beforeTableEncode((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(tableMap).map(function (_a) {
        var _b = __read(_a, 2), fieldName = _b[0], fieldValues = _b[1];
        return ({
            fieldName: fieldName,
            fieldValues: fieldValues,
        });
    }));
}
function encloser(value) {
    var enclosingCharacter = /,|"|\n/.test(value) ? '"' : '';
    var escaped = value.replace(/"/g, '""');
    return "".concat(enclosingCharacter).concat(escaped).concat(enclosingCharacter);
}
function createCSVData(data, beforeTableEncode) {
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    if (!data.length)
        return '';
    var tableMap = _createTableMap(data);
    var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
    var head = tableEntries.map(function (_a) {
        var fieldName = _a.fieldName;
        return fieldName;
    }).join(',') + '\r\n';
    var columns = tableEntries.map(function (_a) {
        var fieldValues = _a.fieldValues;
        return fieldValues;
    })
        .map(function (column) { return column.map(encloser); });
    var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn.map(function (value, rowIndex) { return "".concat(value, ",").concat(column[rowIndex]); }); });
    return head + rows.join('\r\n');
}
function _renderTableHTMLText(data, beforeTableEncode) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.assert)(data.length > 0);
    var tableMap = _createTableMap(data);
    var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
    var head = tableEntries.map(function (_a) {
        var fieldName = _a.fieldName;
        return fieldName;
    })
        .join('</b></th><th><b>');
    var columns = tableEntries.map(function (_a) {
        var fieldValues = _a.fieldValues;
        return fieldValues;
    })
        .map(function (column) { return column.map(function (value) { return "<td>".concat(value, "</td>"); }); });
    var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn
        .map(function (value, rowIndex) { return "".concat(value).concat(column[rowIndex]); }); });
    return "\n    <table>\n      <thead>\n        <tr><th><b>".concat(head, "</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>").concat(rows.join("</tr>\n        <tr>"), "</tr>\n      </tbody>\n    </table>\n  ");
}
function createXLSData(data, beforeTableEncode) {
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    if (!data.length)
        return '';
    var content = "<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n  </head >\n  <body>\n    ".concat(_renderTableHTMLText(data, beforeTableEncode), "\n  </body>\n</html >\n");
    return content;
}
function createXMLData(data) {
    var content = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!DOCTYPE base>\n".concat(_renderXML(data, 'base'), "\n");
    return content;
}
function _renderXML(data, tagName, arrayElementTag, spaces) {
    if (arrayElementTag === void 0) { arrayElementTag = 'element'; }
    if (spaces === void 0) { spaces = 0; }
    var tag = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeXMLName)(tagName);
    var indentSpaces = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indent)(spaces);
    if (data === null || data === undefined) {
        return "".concat(indentSpaces, "<").concat(tag, " />");
    }
    var content = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)
        ? data.map(function (item) { return _renderXML(item, arrayElementTag, arrayElementTag, spaces + 2); }).join('\n')
        : typeof data === 'object'
            ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(data)
                .map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _renderXML(value, key, arrayElementTag, spaces + 2);
            }).join('\n')
            : indentSpaces + '  ' + (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.stripHTML)(String(data));
    var contentWithWrapper = "".concat(indentSpaces, "<").concat(tag, ">\n").concat(content, "\n").concat(indentSpaces, "</").concat(tag, ">");
    return contentWithWrapper;
}


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/exportFromJSON.js":
/*!******************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/exportFromJSON.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/export-from-json/dist/esm/utils.js");
/* harmony import */ var _processors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processors.js */ "./node_modules/export-from-json/dist/esm/processors.js");
/* harmony import */ var _converters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters.js */ "./node_modules/export-from-json/dist/esm/converters.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/export-from-json/dist/esm/types.js");




function exportFromJSON(_a) {
    var data = _a.data, _b = _a.fileName, fileName = _b === void 0 ? 'download' : _b, extension = _a.extension, _c = _a.fileNameFormatter, fileNameFormatter = _c === void 0 ? function (name) { return name.replace(/\s+/, '_'); } : _c, fields = _a.fields, _d = _a.exportType, exportType = _d === void 0 ? 'txt' : _d, _e = _a.replacer, replacer = _e === void 0 ? null : _e, _f = _a.space, space = _f === void 0 ? 4 : _f, _g = _a.processor, processor = _g === void 0 ? _processors_js__WEBPACK_IMPORTED_MODULE_1__.downloadFile : _g, _h = _a.withBOM, withBOM = _h === void 0 ? false : _h, _j = _a.beforeTableEncode, beforeTableEncode = _j === void 0 ? function (i) { return i; } : _j;
    var MESSAGE_IS_ARRAY_FAIL = 'Invalid export data. Please provide an array of objects';
    var MESSAGE_UNKNOWN_EXPORT_TYPE = "Can't export unknown data type ".concat(exportType, ".");
    var MESSAGE_FIELD_INVALID = "Can't export string data to ".concat(exportType, ".");
    if (typeof data === 'string') {
        switch (exportType) {
            case 'txt':
            case 'css':
            case 'html': {
                return processor(data, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
            }
            default:
                throw new Error(MESSAGE_FIELD_INVALID);
        }
    }
    var fieldsMapper = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__._createFieldsMapper)(fields);
    var safeData = fieldsMapper((0,_converters_js__WEBPACK_IMPORTED_MODULE_2__._prepareData)(data));
    var JSONData = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__._createJSONData)(safeData, replacer, space);
    switch (exportType) {
        case 'txt':
        case 'css':
        case 'html': {
            return processor(JSONData, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
        }
        case 'json': {
            return processor(JSONData, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'json', fileNameFormatter));
        }
        case 'csv': {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(safeData), MESSAGE_IS_ARRAY_FAIL);
            var BOM = '\ufeff';
            var CSVData = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__.createCSVData)(safeData, beforeTableEncode);
            var content = withBOM ? BOM + CSVData : CSVData;
            return processor(content, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'csv', fileNameFormatter));
        }
        case 'xls': {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(safeData), MESSAGE_IS_ARRAY_FAIL);
            var content = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__.createXLSData)(safeData, beforeTableEncode);
            return processor(content, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'xls', fileNameFormatter));
        }
        case 'xml': {
            var content = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__.createXMLData)(safeData);
            return processor(content, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'xml', fileNameFormatter));
        }
        default:
            throw new Error(MESSAGE_UNKNOWN_EXPORT_TYPE);
    }
}
exportFromJSON.types = _types_js__WEBPACK_IMPORTED_MODULE_3__.exportTypes;
exportFromJSON.processors = { downloadFile: _processors_js__WEBPACK_IMPORTED_MODULE_1__.downloadFile };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportFromJSON);


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exportFromJSON_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exportFromJSON.js */ "./node_modules/export-from-json/dist/esm/exportFromJSON.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exportFromJSON_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/processors.js":
/*!**************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/processors.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadFile": () => (/* binding */ downloadFile),
/* harmony export */   "generateDataURI": () => (/* binding */ generateDataURI)
/* harmony export */ });
function generateDataURI(content, type, byBlob) {
    switch (type) {
        case 'txt': {
            var blobType = 'text/plain;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:,".concat(blobType) + encodeURIComponent(content);
        }
        case 'css': {
            var blobType = 'text/css;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:,".concat(blobType) + encodeURIComponent(content);
        }
        case 'html': {
            var blobType = 'text/html;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:,".concat(blobType) + encodeURIComponent(content);
        }
        case 'json': {
            var blobType = 'text/json;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:,".concat(blobType) + encodeURIComponent(content);
        }
        case 'csv': {
            var blobType = 'text/csv;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:,".concat(blobType) + encodeURIComponent(content);
        }
        case 'xls': {
            var blobType = 'text/application/vnd.ms-excel;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:,".concat(blobType) + encodeURIComponent(content);
        }
        case 'xml': {
            var blobType = 'text/application/xml;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:,".concat(blobType) + encodeURIComponent(content);
        }
        default: {
            return '';
        }
    }
}
function downloadFile(content, type, fileName, byBlob) {
    if (fileName === void 0) { fileName = 'download'; }
    if (byBlob === void 0) { byBlob = true; }
    var dataURI = generateDataURI(content, type, byBlob);
    var anchor = document.createElement('a');
    anchor.href = dataURI;
    anchor.download = fileName;
    anchor.setAttribute('style', 'visibility:hidden');
    document.body.appendChild(anchor);
    anchor.dispatchEvent(new MouseEvent('click', {
        bubbles: false,
        cancelable: false,
        view: window,
    }));
    document.body.removeChild(anchor);
}


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/types.js":
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/types.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportTypes": () => (/* binding */ exportTypes)
/* harmony export */ });
var exportTypes = {
    txt: 'txt',
    css: 'css',
    html: 'html',
    json: 'json',
    csv: 'csv',
    xls: 'xls',
    xml: 'xml',
};


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "getEntries": () => (/* binding */ getEntries),
/* harmony export */   "getKeys": () => (/* binding */ getKeys),
/* harmony export */   "getValues": () => (/* binding */ getValues),
/* harmony export */   "indent": () => (/* binding */ indent),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "normalizeFileName": () => (/* binding */ normalizeFileName),
/* harmony export */   "normalizeXMLName": () => (/* binding */ normalizeXMLName),
/* harmony export */   "stripHTML": () => (/* binding */ stripHTML)
/* harmony export */ });
function isArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]';
}
function assert(condition, msg) {
    if (!condition)
        throw new Error(msg);
}
function getValues(data) {
    return Object.keys(data).map(function (key) { return data[key]; });
}
function getKeys(data) {
    return Object.keys(data);
}
function getEntries(data) {
    return Object.keys(data).map(function (key) { return [key, data[key]]; });
}
function normalizeFileName(fileName, extension, fileNameFormatter) {
    var suffix = '.' + extension;
    var extensionPattern = new RegExp("(\\".concat(extension, ")?$"));
    return fileNameFormatter(fileName).replace(extensionPattern, suffix);
}
function normalizeXMLName(name) {
    '555xmlHello .  world!'.trim().replace(/^([0-9,;]|(xml))+/, '');
    return name.replace(/[^_a-zA-Z 0-9:\-\.]/g, '').replace(/^([ 0-9-:\-\.]|(xml))+/i, '').replace(/ +/g, '-');
}
function indent(spaces) {
    return Array(spaces + 1).join(' ');
}
function stripHTML(text) {
    return text.replace(/([<>&])/g, function (_, $1) {
        switch ($1) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return '';
        }
    });
}


/***/ })

}]);