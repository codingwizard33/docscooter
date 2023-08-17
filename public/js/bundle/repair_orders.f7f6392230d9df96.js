"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["repair_orders"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RepairOrders",
  data: function data() {
    return {
      totalRows: "",
      search: "",
      isLoading: true,
      orders: {},
      Filter_category: '',
      categories: [{
        label: 'Paid',
        name: 'paid'
      }, {
        label: 'Not Paid',
        name: 'not_paid'
      }, {
        label: 'Pending',
        name: 'pending'
      }, {
        label: 'Cancelled',
        name: 'cancelled'
      }]
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Reference"),
        field: "bar_code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("CustomerName"),
        field: "full_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Information"),
        field: "information",
        html: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
        tdClass: this.tdClassPaymentStatus,
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "status",
        tdClass: this.tdClassStatus,
        thClass: "text-left"
      }, {
        label: this.$t("UpdatedAt"),
        field: "updated_at",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: '',
        field: "action",
        tdClass: "text-left",
        thClass: "text-left"
      }];
    }
  },
  methods: {
    getOrders: function getOrders() {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get('/reaper/order').then(function (response) {
        _this.orders = response.data.items;
        _this.totalRows = response.data.pagination.total;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      // this.Get_Products(this.serverParams.page);
    },
    newOrder: function newOrder() {
      this.$router.push({
        path: "/app/repairs/order"
      });
    },
    orderDetails: function orderDetails(props) {
      this.$router.push({
        path: "/app/repairs/order_details/".concat(props.row.id),
        query: {
          id: props.row.id
        }
      });
    },
    tdClassPaymentStatus: function tdClassPaymentStatus(row) {
      if (row.payment_status === 'cancelled') {
        return 'cancelled';
      } else if (row.payment_status === 'paid') {
        return 'paid';
      } else if (row.payment_status === 'not_paid') {
        return 'not_paid';
      }
      return 'green-class';
    },
    tdClassStatus: function tdClassStatus(row) {
      if (row.status === 'waiting_for_collection') {
        return 'waiting_collection';
      } else if (row.status === 'pending') {
        return 'pending';
      } else if (row.status === 'done') {
        return 'done';
      } else if (row.status === 'waiting_for_parts') {
        return 'waiting_parts';
      }
    },
    upper: function upper(item) {
      return item.charAt(0).toUpperCase() + item.replaceAll('_', ' ').slice(1);
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.getOrders();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=template&id=923faa90&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=template&id=923faa90&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-content"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("Repair"),
      folder: _vm.$t("Repair")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.orders,
      "sort-options": {
        enabled: false
      },
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "row-style-class": _vm.rowStyleClassFn,
      styleClass: "tableOne vgt-table"
    },
    on: {
      "on-search": _vm.onSearch
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "bar_code" ? _c("span", [_c("div", {
          domProps: {
            innerHTML: _vm._s(props.formattedRow[props.column.field])
          }
        })]) : _c("span", [_vm._v("\n                      " + _vm._s(props.formattedRow[props.column.field]) + "\n                    ")]), _vm._v(" "), props.column.field == "payment_status" ? _c("div", [_vm._v("\n                        " + _vm._s(_vm.upper(props.formattedRow[props.column.field])) + "\n                    ")]) : _vm._e(), _vm._v(" "), props.column.field == "status" ? _c("div", [_vm._v("\n                        " + _vm._s(_vm.upper(props.formattedRow[props.column.field])) + "\n                    ")]) : _vm._e(), _vm._v(" "), props.column.field == "action" ? _c("b-button", {
          staticClass: "open_order-btn",
          on: {
            click: function click($event) {
              return _vm.orderDetails(props);
            }
          }
        }, [_vm._v("\n                        Open Order "), _c("span", {
          staticClass: "ml-2 d-flex"
        }, [_c("i", {
          staticClass: "i-Arrow-Right"
        })])]) : _vm._e()];
      }
    }])
  }, [_c("div", {
    staticClass: "mb-1 d-flex",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-button", {
    staticClass: "new_order-btn mx-3",
    on: {
      click: function click($event) {
        return _vm.newOrder();
      }
    }
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("i", {
    staticClass: "i-Add"
  })]), _vm._v(" "), _c("span", {
    staticClass: "ul-btn__text ml-1"
  }, [_vm._v(_vm._s(_vm.$t("New")))])]), _vm._v(" "), _c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebar-right-f",
      modifiers: {
        "sidebar-right-f": true
      }
    }],
    staticClass: "filter_btn",
    attrs: {
      size: "sm"
    }
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("i", {
    staticClass: "i-Filter-2"
  })]), _vm._v(" "), _c("span", {
    staticClass: "ul-btn__text ml-1"
  }, [_vm._v(_vm._s(_vm.$t("Filter")))])])], 1)]), _vm._v(" "), _c("b-sidebar", {
    attrs: {
      id: "sidebar-right-f",
      title: _vm.$t("Filter"),
      "bg-variant": "white",
      right: "",
      shadow: ""
    }
  }, [_c("div", {
    staticClass: "px-3 py-2"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Categorie")
    }
  }, [_c("v-select", {
    attrs: {
      placeholder: _vm.$t("Choose_Category"),
      options: _vm.categories.map(function (categories) {
        return {
          label: categories.lavel,
          value: categories.name
        };
      })
    },
    model: {
      value: _vm.Filter_category,
      callback: function callback($$v) {
        _vm.Filter_category = $$v;
      },
      expression: "Filter_category"
    }
  })], 1)], 1)], 1)], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-v-923faa90] .vgt-table thead tr th {\n  background-color: #D1D5DB !important;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #000000;\n}\n[data-v-923faa90] .vgt-table td {\n  vertical-align: initial;\n}\n[data-v-923faa90] .new_order-btn {\n  border: none;\n  padding: 8px 20px;\n  background: #FF9900 !important;\n  border-radius: 28px;\n  color: #ffffff !important;\n  display: flex;\n  align-items: center;\n}\n[data-v-923faa90] .filter_btn {\n  border: 1px solid #FF9900;\n  background: #ffffff;\n  padding: 8px 20px;\n  border-radius: 28px;\n  color: #FF9900 !important;\n  display: flex;\n  align-items: center;\n}\n[data-v-923faa90] .open_order-btn {\n  border: none;\n  padding: 8px 18px;\n  background: #FF9900 !important;\n  border-radius: 28px;\n  color: #ffffff !important;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n}\n[data-v-923faa90] .bar_img {\n  width: 100%;\n  height: 44px;\n}\n[data-v-923faa90] .vgt-table .cancelled span {\n  display: none;\n  width: 1px;\n}\n[data-v-923faa90] .vgt-table .cancelled div {\n  margin-top: 5px;\n  padding: 8px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  color: #F00;\n  border-radius: 90px;\n  background-color: rgba(255, 0, 0, 0.2);\n}\n[data-v-923faa90] .vgt-table .paid span {\n  display: none;\n  width: 1px;\n}\n[data-v-923faa90] .vgt-table .paid div {\n  margin-top: 5px;\n  padding: 8px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  color: #309600;\n  border-radius: 90px;\n  background-color: #D6EACC;\n}\n[data-v-923faa90] .vgt-table .not_paid span {\n  display: none;\n  width: 1px;\n}\n[data-v-923faa90] .vgt-table .not_paid div {\n  margin-top: 5px;\n  padding: 8px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 110px;\n  color: #FF9900;\n  border-radius: 90px;\n  background-color: rgba(255, 153, 0, 0.2);\n}\n[data-v-923faa90] .vgt-table .done span {\n  display: none;\n  width: 1px;\n}\n[data-v-923faa90] .vgt-table .done div {\n  margin-top: 5px;\n  padding: 8px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  color: #309600;\n  border-radius: 90px;\n  background-color: #D6EACC;\n}\n[data-v-923faa90] .vgt-table .pending span {\n  display: none;\n  width: 1px;\n}\n[data-v-923faa90] .vgt-table .pending div {\n  margin-top: 5px;\n  padding: 8px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  color: #FF9900;\n  border-radius: 90px;\n  background-color: rgba(255, 153, 0, 0.2);\n}\n[data-v-923faa90] .vgt-table .waiting_collection span {\n  display: none;\n  width: 1px;\n}\n[data-v-923faa90] .vgt-table .waiting_collection div {\n  margin-top: 5px;\n  padding: 8px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 180px;\n  color: #40D1FD;\n  border-radius: 90px;\n  background-color: #cff3ff;\n}\n[data-v-923faa90] .vgt-table .waiting_parts span {\n  display: none;\n  width: 1px;\n}\n[data-v-923faa90] .vgt-table .waiting_parts div {\n  margin-top: 5px;\n  padding: 8px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 160px;\n  color: #A958FC;\n  border-radius: 90px;\n  background-color: #eedefe;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_style_index_0_id_923faa90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_style_index_0_id_923faa90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_style_index_0_id_923faa90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/views/app/pages/repairs/RepairOrders.vue":
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/repairs/RepairOrders.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RepairOrders_vue_vue_type_template_id_923faa90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RepairOrders.vue?vue&type=template&id=923faa90&scoped=true& */ "./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=template&id=923faa90&scoped=true&");
/* harmony import */ var _RepairOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepairOrders.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=script&lang=js&");
/* harmony import */ var _RepairOrders_vue_vue_type_style_index_0_id_923faa90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss& */ "./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RepairOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RepairOrders_vue_vue_type_template_id_923faa90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RepairOrders_vue_vue_type_template_id_923faa90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "923faa90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/repairs/RepairOrders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RepairOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=template&id=923faa90&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=template&id=923faa90&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_template_id_923faa90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_template_id_923faa90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_template_id_923faa90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RepairOrders.vue?vue&type=template&id=923faa90&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=template&id=923faa90&scoped=true&");


/***/ }),

/***/ "./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RepairOrders_vue_vue_type_style_index_0_id_923faa90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/repairs/RepairOrders.vue?vue&type=style&index=0&id=923faa90&scoped=true&lang=scss&");


/***/ })

}]);