<template>
  <form-item-wrapper
    :designer="designer"
    :field="field"
    :rules="rules"
    :design-state="designState"
    :parent-widget="parentWidget"
    :parent-list="parentList"
    :index-of-parent-list="indexOfParentList"
    :sub-form-row-index="subFormRowIndex"
    :sub-form-col-index="subFormColIndex"
    :sub-form-row-id="subFormRowId"
  >
    <div class="full-width-input">
      <el-cascader
        ref="fieldEditor"
        :options="field.options.optionItems"
        v-model="fieldModel"
        :disabled="field.options.disabled"
        :size="widgetSize"
        :clearable="field.options.clearable"
        :filterable="field.options.filterable"
        :placeholder="
          field.options.placeholder
            ? $t(field.options.placeholder)
            : i18nt('render.hint.selectPlaceholder')
        "
        :show-all-levels="showFullPath"
        :props="field.options.lazy ? prop2 : prop1"
        @focus="handleFocusCustomEvent"
        @blur="handleBlurCustomEvent"
        @change="handleChangeEvent"
      >
      </el-cascader>
    </div>
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from "./form-item-wrapper";
import emitter from "@/utils/emitter";
import i18n, { translate } from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";
export default {
  name: "cascader-widget",
  componentName: "FieldWidget", //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,

    designState: {
      type: Boolean,
      default: false,
    },

    subFormRowIndex: {
      /* 子表单组件行索引，从0开始计数 */ type: Number,
      default: -1,
    },
    subFormColIndex: {
      /* 子表单组件列索引，从0开始计数 */ type: Number,
      default: -1,
    },
    subFormRowId: {
      /* 子表单组件行Id，唯一id且不可变 */ type: String,
      default: "",
    },
  },
  components: {
    FormItemWrapper,
  },
  data() {
    return {
      oldFieldValue: null, //field组件change之前的值
      fieldModel: null,
      rules: [],
      prop1: {
        checkStrictly: this.field.options.checkStrictly,
        multiple: this.field.options.multiple,
        expandTrigger: this.field.options.expandTrigger,
      },
      prop2: {
        checkStrictly: this.field.options.checkStrictly,
        multiple: this.field.options.multiple,
        expandTrigger: this.field.options.expandTrigger,
        lazy: this.field.options.lazy,
        lazyLoad: (node, resolved) => this.getLazy(node, resolved),
      },
    };
  },
  computed: {
    showFullPath() {
      return (
        this.field.options.showAllLevels === undefined ||
        !!this.field.options.showAllLevels
      );
    },
  },
  beforeCreate() {
    /* 这里不能访问方法和属性！！ */
  },

  created() {
    /* 注意：子组件mounted在父组件created之后、父组件mounted之前触发，故子组件mounted需要用到的prop
         需要在父组件created中初始化！！ */
    this.initOptionItems();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();

    this.handleOnCreated();
  },

  mounted() {
    this.handleOnMounted();
  },

  beforeUnmount() {
    this.unregisterFromRefList();
  },

  methods: {
    getLazy(node, resolve) {
      if (!!this.field.options.onLazyLoad) {
        try {
          let remoteFn = new Function("node", "resolve", this.field.options.onLazyLoad);
          remoteFn.call(this, node, resolve);
        } catch (error) {
          console.error(error)
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/global.scss"; /* form-item-wrapper已引入，还需要重复引入吗？ */

.full-width-input {
  width: 100% !important;

  :deep(.el-cascader) {
    width: 100% !important;
  }
}
</style>
