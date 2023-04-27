<template>
  <form-item-wrapper :designer="designer" :field="field" :rules="rules" :design-state="designState"
                     :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                     :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
    <el-autocomplete ref="fieldEditor" v-model="fieldModel"
                      :disabled="field.options.disabled" :readonly="field.options.readonly"
                      :size="field.options.size" class="hide-spin-button"
                      :show-password="field.options.showPassword"
                      :placeholder="$t(field.options.placeholder)"
                      :clearable="field.options.clearable"
                      :minlength="field.options.minLength" :maxlength="field.options.maxLength"
                      :show-word-limit="field.options.showWordLimit"
                      :prefix-icon="field.options.prefixIcon" :suffix-icon="field.options.suffixIcon"
                      :fetch-suggestions="querySearchAsync"
                      @select="(value) => handleChangeEvent(value.value)"
                      @focus="handleFocusCustomEvent" @blur="handleBlurCustomEvent" @input="handleInputCustomEvent"
                      @change="handleChangeEvent"
    >
      <el-button slot="append" v-if="field.options.appendButton" :disabled="field.options.disabled || field.options.appendButtonDisabled"
                 :class="field.options.buttonIcon" @click.native="emitAppendButtonClick"></el-button>
    </el-autocomplete>
  </form-item-wrapper>
</template>


<script>
  import FormItemWrapper from '@/components/form-designer/form-widget/field-widget/form-item-wrapper'
  import emitter from '@/utils/emitter'
  import i18n, {translate} from "@/utils/i18n";
  import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";

  export default {
    name: "auto-complete-widget",
    componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
    mixins: [emitter, fieldMixin, i18n],
    props: {
      field: Object,
      parentWidget: Object,
      parentList: Array,
      indexOfParentList: Number,
      designer: Object,

      designState: {
        type: Boolean,
        default: false
      },

      subFormRowIndex: { /* 子表单组件行索引，从0开始计数 */
        type: Number,
        default: -1
      },
      subFormColIndex: { /* 子表单组件列索引，从0开始计数 */
        type: Number,
        default: -1
      },
      subFormRowId: { /* 子表单组件行Id，唯一id且不可变 */
        type: String,
        default: ''
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
      }
    },
    computed: {
      allowDefaultFirstOption() {
        return (!!this.field.options.filterable && !!this.field.options.allowCreate)
      },

    },
    beforeCreate() {
      /* 这里不能访问方法和属性！！ */
    },

    created() {
      /* 注意：子组件mounted在父组件created之后、父组件mounted之前触发，故子组件mounted需要用到的prop
         需要在父组件created中初始化！！ */
      this.initOptionItems()
      this.initFieldModel()
      this.registerToRefList()
      this.initEventHandler()
      this.buildFieldRules()

      this.handleOnCreated()
    },

    mounted() {
      this.handleOnMounted()
    },

    beforeUnmount() {
      this.unregisterFromRefList()
    },

    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .full-width-input {
    width: 100% !important;
  }

</style>
