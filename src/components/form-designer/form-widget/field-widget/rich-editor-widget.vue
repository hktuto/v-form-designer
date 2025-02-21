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
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="fieldModel"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="handleChange"
      />
    </div>
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from "./form-item-wrapper";
import emitter from "@/utils/emitter";
import { deepClone } from "@/utils/util";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";

import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  name: "rich-editor-widget",
  componentName: "FieldWidget", //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin],
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

    // VueEditor: resolve => { //懒加载！！
    //   require(['vue2-editor'], ({VueEditor}) => resolve(VueEditor))
    // }
    Editor,
    Toolbar,
  },
  data() {
    return {
      oldFieldValue: null, //field组件change之前的值
      fieldModel: null,
      rules: [],

      customToolbar: [], //富文本编辑器自定义工具栏
      valueChangedFlag: false, //vue2-editor数据值是否改变标志

      editorConfig: {
        placeholder: "请输入内容...",
        MENU_CONF: {
          uploadImage: {
            base64LimitSize: 5 * 1024 * 1024,
          },
        },
      },
      editorRef: null,
      toolbarConfig: {
        excludeKeys: ["insertVideo", "insertTable", "fullScreen", "undo", "redo", "todo"],
      },
      mode: "default",
    };
  },
  computed: {
    editorOption() {
      return {
        placeholder: $t(this.field.options.placeholder),
        modules: {
          //toolbar: this.customToolbar
        },
      };
    },
  },
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
    const editor = this.editorRef;
    if (editor == null) return;
    editor.destroy();
    this.unregisterFromRefList();
  },

  methods: {
    handleChange(editor) {
      const html = editor.getHtml();
      this.valueChangedFlag = true;
      this.syncUpdateFormModel(this.fieldModel);
    },

    handleRichEditorFocusEvent() {
      this.oldFieldValue = deepClone(this.fieldModel);
    },

    handleRichEditorBlurEvent() {
      if (this.valueChangedFlag) {
        this.emitFieldDataChange(this.fieldModel, this.oldFieldValue);
        this.valueChangedFlag = false;
      }
    },
    handleCreated(editor) {
      this.editorRef = editor; // 记录 editor 实例，重要！
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../../styles/global.scss"; /* form-item-wrapper已引入，还需要重复引入吗？ */

.full-width-input {
  width: 100% !important;
}
</style>
