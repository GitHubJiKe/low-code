<template>
  <div class="stage">
    <div
      class="item"
      v-for="item in components"
      :key="item.id"
      :class="{ edited: editedId === item.id }"
    >
      <el-button v-bind="item.props" v-if="item.type === 'Button'">
        {{ item.data }}
      </el-button>
      <div class="icons">
        <i class="el-icon-edit pointer" @click="onEditComponent(item.id)"></i>
        <i
          class="el-icon-delete pointer"
          @click="onDeleteComponent(item.id)"
        ></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Button } from "element-ui";
import { IPlugin } from "@/type";

@Component({ components: { Button } })
export default class Stage extends Vue {
  @State("components") components: IPlugin[];
  @State("editedComponent") editedComponent: IPlugin;
  @Action("deleteComponent") deleteComponent;
  @Action("editComponent") editComponent;

  private onDeleteComponent(id: string) {
    this.$alert("确认删除此组件吗？", "删除", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      showClose: true,
      callback: () => this.deleteComponent(id),
    });
  }

  private onEditComponent(id: string) {
    this.editComponent(id);
  }

  private get editedId() {
    return this.$store.state.editedComponent?.id;
  }
}
</script>
<style lang="less" scoped>
.stage {
  display: flex;
  flex-direction: column;
  .item {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 60px;
    }
    .no {
      color: #409eff;
    }
  }
  .edited {
    background: #909399;
  }
  .item:hover {
    background: #909399;
  }
  .pointer {
    cursor: pointer;
  }
}
</style>
