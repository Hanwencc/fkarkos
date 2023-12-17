import Vue from "vue";
import FKArkosComponent from "./components/FKArkos.vue";
declare global {
  interface Window {
    Vue: any;
  }
}
const Plugin = {
  install(Vue: any) {
    Vue.component("FKArkosComponent", FKArkosComponent);
  },
};

export default Plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Plugin);
}

export { FKArkosComponent };
