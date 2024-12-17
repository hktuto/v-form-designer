<template>
  <div>
    <InputWidget v-if="field.options.fieldType === 'input'" v-bind="$props" />
    <SelectWidget v-else-if="field.options.fieldType === 'select'" v-bind="$props" />
    <NumberWidget v-else-if="field.options.fieldType === 'number'" v-bind="$props" />
    <TextareaWidget v-else-if="field.options.fieldType === 'textarea'" v-bind="$props" />
    <DateWidget v-else-if="field.options.fieldType === 'date'" v-bind="$props" />
    <DateRangeWidget
      v-else-if="field.options.fieldType === 'date-range'"
      v-bind="$props"
    />
  </div>
</template>
<script>
import FormItemWrapper from "@/components/form-designer/form-widget/field-widget/form-item-wrapper";
import emitter from "@/utils/emitter";
import i18n, { translate } from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";
import SelectGroupWidget from "@/extension/samples/selectGroup/select-group-widget";
import InputWidget from "@/components/form-designer/form-widget/field-widget/input-widget.vue";
import SelectWidget from "@/components/form-designer/form-widget/field-widget/select-widget.vue";
import NumberWidget from "@/components/form-designer/form-widget/field-widget/number-widget.vue";
import TextareaWidget from "@/components/form-designer/form-widget/field-widget/textarea-widget.vue";
import DateWidget from "@/components/form-designer/form-widget/field-widget/date-widget.vue";
import DateRangeWidget from "@/components/form-designer/form-widget/field-widget/date-range-widget.vue";
export default {
  name: "dynamic-widget",
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
    SelectGroupWidget,
    InputWidget,
    SelectWidget,
    NumberWidget,
    TextareaWidget,
    DateWidget,
    DateRangeWidget,
    FormItemWrapper,
  },
  data() {
    return {};
  },
  computed: {},
  beforeCreate() {
    /* 这里不能访问方法和属性！！ */
  },

  created() {},

  mounted() {},

  beforeUnmount() {},

  methods: {},
};
</script>
<style lang="scss" scoped></style>
