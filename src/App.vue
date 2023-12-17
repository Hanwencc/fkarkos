<template>
  <img alt="Vue logo" @click="onSubmit" src="./assets/logo.png" />
  <FKArkosComponent
    :public-key="publicKey"
    mode="lightbox"
    @onCompleted="onCompleted($event)"
    @onError="onError($event)"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
  Ref,
} from "vue";
import FKArkosComponent from "@/components/FKArkos.vue";
declare global {
  interface Window {
    myEnforcement: any;
    setupEnforcement: any;
  }
}
export default defineComponent({
  components: {
    FKArkosComponent,
  },
  setup() {
    onMounted(() => {
      console.log("Component is mounted");
      // 在这里执行你的挂载时操作
    });
  },
  data() {
    return {
      // publicKey: process.env.VUE_APP_ARKOSE_PUBLIC_KEY,
      publicKey: "11111111-1111-1111-1111-111111111111",
      arkoseToken: "",
    };
  },
  methods: {
    onCompleted(token: string) {
      this.arkoseToken = token;
      // router.replace({ path: "/dashboard" });
    },
    onError(errorMessage: any) {
      alert(errorMessage);
    },
    onSubmit() {
      if (!this.arkoseToken) {
        window.myEnforcement.run();
      }
    },
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
