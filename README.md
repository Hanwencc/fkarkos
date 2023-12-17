# fkarkos

## Project setup
```
npm install fkarkos --save
```
## 使用
```
import Fkarkos from "fkarkos";
export default defineComponent({
  components: {
    FKArkosComponent,
  },
  data() {
    return {
      publicKey: "",
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
})


  <Fkarkos
    :public-key="publicKey"
    mode="lightbox"
    @onCompleted="onCompleted($event)"
    @onError="onError($event)"
  />
```