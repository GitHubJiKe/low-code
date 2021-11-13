<template>
  <div class="home">
    <el-row>
      <el-col :span="6">
        <market></market>
      </el-col>
      <el-col :span="12">
        <stage></stage>
      </el-col>
      <el-col :span="6">
        <config></config>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Col, Row } from "element-ui";
import Market from "./Market.vue";
import Stage from "./Stage.vue";
import Config from "./Config.vue";

@Component({
  components: { Col, Row, Market, Stage, Config },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
  .el-col {
    height: 100vh;
  }
  .el-col:first-child {
    border-right: 1px solid red;
  }
  .el-col:last-child {
    border-left: 1px solid black;
  }
}
</style>
