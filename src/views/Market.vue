<template>
  <div class="market">
    <el-button type="primary" @click="onAddComponent('Button')">
      Button
    </el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "element-ui";
import { Action } from "vuex-class";

@Component({ components: { Button } })
export default class Market extends Vue {
  @Action("addComponent") addComponent;
  private onAddComponent(type: string) {
    this.addComponent({
      data: {
        type,
        name: "Button",
        data: "Hello",
        props: {
          type: "success",
          round: false,
          circle: false,
          size: "medium",
          plain: false,
          loading: false,
          disabled: false,
          icon: "",
          autofocus: false,
          "native-type": "button",
        },
        id: Date.now().toString(),
      },
      type: "add",
    });
  }
}
</script>
<style lang="less" scoped>
.market {
}
</style>
