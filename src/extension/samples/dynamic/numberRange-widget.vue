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
    <div :class="[!!field.options.autoFullWidth ? 'auto-full-width layout' : 'layout']">
      <el-input-number
        ref="fieldEditor"
        v-model="fieldModel[0]"
        class="full-width-input"
        :disabled="field.options.disabled"
        :size="widgetSize"
        :controls-position="field.options.controlsPosition"
        :stepStrictly="field.options.stepStrictly"
        :placeholder="
          field.options.startPlaceholder
            ? $t(field.options.startPlaceholder)
            : $t('render.hint.startNumber')
        "
        :min="field.options.min"
        :max="field.options.max"
        :precision="field.options.precision"
        :step="field.options.step"
        @focus="handleFocusCustomEvent"
        @blur="handleBlurCustomEvent"
        @change="minChange"
      >
      </el-input-number>
      -
      <el-input-number
        ref="fieldEditor"
        v-model="fieldModel[1]"
        class="full-width-input"
        :disabled="field.options.disabled"
        :size="widgetSize"
        :controls-position="field.options.controlsPosition"
        :stepStrictly="field.options.stepStrictly"
        :placeholder="
          field.options.endPlaceholder
            ? $t(field.options.endPlaceholder)
            : $t('render.hint.endNumber')
        "
        :min="field.options.min"
        :max="field.options.max"
        :precision="field.options.precision"
        :step="field.options.step"
        @focus="handleFocusCustomEvent"
        @blur="handleBlurCustomEvent"
        @change="maxChange"
      >
      </el-input-number>
    </div>
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from "@/components/form-designer/form-widget/field-widget/form-item-wrapper";
import emitter from "@/utils/emitter";
import i18n, { translate } from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";

export default {
  name: "number-range-widget",
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
      fieldModel: [0, 0],
      rules: [],
    };
  },
  computed: {},
  beforeCreate() {
    /* 这里不能访问方法和属性！！ */
  },

  created() {
    /* 注意：子组件mounted在父组件created之后、父组件mounted之前触发，故子组件mounted需要用到的prop
         需要在父组件created中初始化！！ */
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
    minChange(value) {
      if (
        (this.fieldModel[1] === 0 || !!this.fieldModel[1]) &&
        (value === 0 || !!value) &&
        value > this.fieldModel[1]
      ) {
        this.fieldModel[1] = value + 1;
      }
      this.handleChangeEvent([value, this.fieldModel[1]]);
    },
    maxChange(value) {
      if (
        (this.fieldModel[0] === 0 || !!this.fieldModel[0]) &&
        (value === 0 || !!value) &&
        value < this.fieldModel[0]
      ) {
        this.fieldModel[0] = value - 1;
      }
      this.handleChangeEvent([this.fieldModel[0], value]);
    },
  },
};
</script>

<style lang="scss" scoped>
.auto-full-width {
  width: 100%;
}
.layout {
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  gap: 0 5px;
  .el-input-number {
    width: 100%;
  }
}
</style>
