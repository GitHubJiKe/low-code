<template>
  <div class="config">
    <el-row :gutter="24" class="my-row">
      <el-col :span="8">data:</el-col>
      <el-col :span="16">
        <el-input
          class="w-full"
          v-model="editedComponent.data"
          placeholder="请输入"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24" v-for="key in propsKeys" :key="key" class="my-row">
      <el-col :span="8">{{ key }}:</el-col>
      <el-col :span="16">
        <el-input
          class="w-full"
          v-model="editedComponent.props[key]"
          placeholder="请输入"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { IPlugin } from "@/type";
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { Input, Row, Col } from "element-ui";

@Component({
  components: { Input, Row, Col },
})
export default class Config extends Vue {
  @State("editedComponent") editedComponent: IPlugin;

  private get propsKeys() {
    return Object.keys(this.editedComponent.props);
  }
}
</script>
<style lang="less" scoped>
.config {
  padding: 12px;
  .w-full {
    width: 100%;
  }
  .my-row {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
}
</style>
