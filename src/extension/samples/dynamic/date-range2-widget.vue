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
    <div :class="[!!field.options.autoFullWidth ? 'auto-full-width' : '']">
      <el-date-picker
        ref="fieldEditor"
        :type="field.options.type"
        v-model="fieldModel[0]"
        :disabled="field.options.disabled"
        :readonly="field.options.readonly"
        :size="widgetSize"
        :clearable="field.options.clearable"
        :editable="field.options.editable"
        :format="field.options.format"
        :value-format="field.options.valueFormat"
        :shortcuts="onShortcutsFn()"
        :default-time="field.options.defaultTime[0]"
        :placeholder="
          field.options.startPlaceholder
            ? $t(field.options.startPlaceholder)
            : $t('render.hint.startDatePlaceholder')
        "
        :disabled-date="disabledDate1"
        @focus="handleFocusCustomEvent"
        @blur="handleBlurCustomEvent"
        @change="startDateChange"
      >
      </el-date-picker>
      -
      <el-date-picker
        ref="fieldEditor"
        :type="field.options.type"
        v-model="fieldModel[1]"
        :disabled="field.options.disabled"
        :readonly="field.options.readonly"
        :size="widgetSize"
        :clearable="field.options.clearable"
        :editable="field.options.editable"
        :format="field.options.format"
        :value-format="field.options.valueFormat"
        :shortcuts="onShortcutsFn()"
        :default-time="field.options.defaultTime[1]"
        :placeholder="
          field.options.endPlaceholder
            ? $t(field.options.endPlaceholder)
            : $t('render.hint.endDatePlaceholder')
        "
        :disabled-date="disabledDate2"
        @focus="handleFocusCustomEvent"
        @blur="handleBlurCustomEvent"
        @change="(value) => handleChangeEvent([fieldModel[0], value])"
      >
      </el-date-picker>
    </div>
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from "@/components/form-designer/form-widget/field-widget/form-item-wrapper";
import emitter from "@/utils/emitter";
import i18n, { translate } from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";

export default {
  name: "date-range2-widget",
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
      fieldModel: ["", ""],
      rules: [],
      disabledDate1: (time) => {
        if (!this.fieldModel[1]) return false;
        const startTime = new Date(this.fieldModel[1]).getTime();
        return time.getTime() > startTime;
      },
      disabledDate2: (time) => {
        if (!this.fieldModel[0]) return false;
        const startTime = new Date(this.fieldModel[0]).getTime();
        return time.getTime() < startTime;
      },
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
    startDateChange(value) {
      this.handleChangeEvent([value, this.fieldModel[1]]);
    },
  },
};
</script>

<style lang="scss" scoped>
:deep .el-date-editor.el-input {
  width: 180px;
}
.auto-full-width {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  gap: 0 5px;
  :deep .el-date-editor.el-input {
    width: 100% !important;
  }
  // .el-date-editor.el-input
}
</style>
