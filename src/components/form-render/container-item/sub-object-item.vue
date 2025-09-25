<template>
  <container-item-wrapper :widget="widget">
    <div
      :key="widget.id"
      class="sub-object-container"
      v-show="!widget.options.hidden"
    >
      <div class="sub-object-content">
        <template
          v-for="(subWidget, swIdx) in widget.widgetList"
          :key="subWidget.id"
        >
          <div class="sub-object-item">
            <component
              :is="subWidget.type + '-widget'"
              :field="subWidget"
              :key="subWidget.id"
              :parent-list="widget.widgetList"
              :index-of-parent-list="swIdx"
              :parent-widget="widget"
            >
              <!-- 对象容器暂不支持插槽 -->
            </component>
          </div>
        </template>
      </div>
    </div>
  </container-item-wrapper>
</template>

<script>
import emitter from "@/utils/emitter";
import i18n from "@/utils/i18n";
import refMixin from "../refMixin";
import ContainerItemWrapper from "./container-item-wrapper";
import containerItemMixin from "./containerItemMixin";
import FieldComponents from "@/components/form-designer/form-widget/field-widget/index";

export default {
  name: "sub-object-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n, refMixin, containerItemMixin],
  components: {
    ContainerItemWrapper,
    ...FieldComponents,
  },
  props: {
    widget: Object,
  },
  inject: ["refList", "globalModel"],
  data() {
    return {
      //
    };
  },
  computed: {
    //
  },
  created() {
    this.initRefList();
  },
  mounted() {
    //
  },
  methods: {
    /**
     * 禁用对象容器内的所有字段
     */
    disableSubObject() {
      if (this.widget.widgetList && this.widget.widgetList.length > 0) {
        this.widget.widgetList.forEach((subWidget) => {
          if (!!subWidget.formItemFlag) {
            let fieldRef = this.getWidgetRef(subWidget.options.name);
            if (!!fieldRef && !!fieldRef.setDisabled) {
              fieldRef.setDisabled(true);
            }
          }
        });
      }
    },

    /**
     * 启用对象容器内的所有字段
     */
    enableSubObject() {
      if (this.widget.widgetList && this.widget.widgetList.length > 0) {
        this.widget.widgetList.forEach((subWidget) => {
          if (!!subWidget.formItemFlag) {
            let fieldRef = this.getWidgetRef(subWidget.options.name);
            if (!!fieldRef && !!fieldRef.setDisabled) {
              fieldRef.setDisabled(false);
            }
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sub-object-container {
  padding: 8px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fafafa;

  .sub-object-content {
    min-height: 40px;

    .sub-object-item {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
