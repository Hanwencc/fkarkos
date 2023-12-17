/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 89:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FKArkosComponent: function() { return /* reexport */ FKArkos; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FKArkos.vue?vue&type=template&id=4d361f28&scoped=true&ts=true

const _withScopeId = n => (_pushScopeId("data-v-4d361f28"), n = n(), _popScopeId(), n);
const _hoisted_1 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.mode === 'inline' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 0,
    id: _ctx.selector?.slice(1)
  }, null, 8, _hoisted_1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true);
}
;// CONCATENATED MODULE: ./src/components/FKArkos.vue?vue&type=template&id=4d361f28&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FKArkos.vue?vue&type=script&lang=ts

/* harmony default export */ var FKArkosvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  props: {
    publicKey: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: ""
    },
    selector: {
      type: String,
      default: null // Any valid DOM selector is allowed here
    },
    nonce: {
      type: String,
      default: ""
    },
    arkosUrl: {
      type: String,
      default: "https://client-api.arkoselabs.com"
    }
  },
  data() {
    return {
      scriptId: ""
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.scriptId = `arkose-script-${this.publicKey}`;
    const scriptElement = this.loadScript(this.publicKey, this.nonce);
    // This will inject required html and css after the Arkose script is properly loaded
    scriptElement.onload = () => {
      console.log("Arkose API Script loaded");
      window.setupEnforcement = this.setupEnforcement.bind(this);
    };
    // If there is an error loading the Arkose script this callback will be called
    scriptElement.onerror = () => {
      console.log("Could not load the Arkose API Script!");
    };
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {
    if (window.myEnforcement) {
      delete window.myEnforcement;
    }
    if (window.setupEnforcement) {
      delete window.setupEnforcement;
    }
    this.removeScript();
  },
  methods: {
    removeScript() {
      const currentScript = document.getElementById(this.scriptId);
      if (currentScript) {
        currentScript.remove();
      }
    },
    // Append the JS tag to the Document Body.
    loadScript(publicKey, nonce) {
      this.removeScript();
      const script = document.createElement("script");
      script.id = this.scriptId;
      script.type = "text/javascript";
      script.src = `${this.arkosUrl}/v2/${publicKey}/api.js`;
      script.setAttribute("data-callback", "setupEnforcement");
      script.async = true;
      script.defer = true;
      if (nonce) {
        script.setAttribute("data-nonce", nonce);
      }
      document.body.appendChild(script);
      return script;
    },
    setupEnforcement(myEnforcement) {
      window.myEnforcement = myEnforcement;
      window.myEnforcement.setConfig({
        selector: this.selector,
        mode: this.mode,
        onReady: () => {
          this.$emit("onReady");
        },
        onShown: () => {
          this.$emit("onShown");
        },
        onShow: () => {
          this.$emit("onShow");
        },
        onSuppress: () => {
          this.$emit("onSuppress");
        },
        onCompleted: response => {
          this.$emit("onCompleted", response.token);
        },
        onReset: () => {
          this.$emit("onReset");
        },
        onHide: () => {
          this.$emit("onHide");
        },
        onError: response => {
          this.$emit("onError", response);
        },
        onFailed: response => {
          this.$emit("onFailed", response);
        }
      });
    }
  },
  watchEffect() {
    console.log("watchEffect: Watching for changes in reactive data.");
  }
}));
;// CONCATENATED MODULE: ./src/components/FKArkos.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FKArkos.vue?vue&type=style&index=0&id=4d361f28&scoped=true&lang=less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/FKArkos.vue?vue&type=style&index=0&id=4d361f28&scoped=true&lang=less

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/components/FKArkos.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(FKArkosvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-4d361f28"]])

/* harmony default export */ var FKArkos = (__exports__);
;// CONCATENATED MODULE: ./src/index.ts

const Plugin = {
  install(Vue) {
    Vue.component("FKArkosComponent", FKArkos);
  }
};
/* harmony default export */ var src_0 = (Plugin);
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Plugin);
}

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=fkarkos.common.js.map