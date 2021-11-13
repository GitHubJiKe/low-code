import { IPlugin } from "@/type";
import Vue from "vue";
import Vuex from "vuex";
import { Message } from "element-ui";

Vue.use(Vuex);

interface IState {
  components: IPlugin[];
  editedComponent?: IPlugin;
}

interface IUpdateComponentsPayload {
  type: "add" | "reduce";
  data: IPlugin;
  id?: string;
  index: number;
}

export default new Vuex.Store<IState>({
  state: {
    components: [],
    editedComponent: undefined,
  },
  mutations: {
    updateComponents(s, { type, data, index, id }: IUpdateComponentsPayload) {
      if (type === "add") {
        if (index !== undefined) {
          s.components.splice(index, 0, data);
        } else {
          s.components.push(data);
        }
      }

      if (type === "reduce") {
        if (id !== undefined) {
          const index = s.components.findIndex((v) => v.id === id);
          s.components.splice(index, 1);
        }
      }
    },
    setEditComponent(s, payload: IPlugin) {
      s.editedComponent = payload;
    },
  },
  actions: {
    addComponent(s, payload: IUpdateComponentsPayload) {
      s.commit("updateComponents", payload);
    },
    deleteComponent(s, payload: string) {
      s.commit("updateComponents", {
        type: "reduce",
        id: payload,
      } as IUpdateComponentsPayload);
    },
    editComponent(s, payload: string) {
      const target = s.state.components.find((v) => v.id === payload);
      if (target) {
        s.commit("setEditComponent", target);
      } else {
        Message.warning("请重新选择");
      }
    },
  },
  modules: {},
});
