<template>
  <div style="height: 100%">
    <el-form
      :model="formConfig"
      size="small"
      label-position="left"
      label-width="120px"
      class="setting-form"
      @submit.prevent
    >
      <el-collapse v-model="formActiveCollapseNames" class="setting-collapse">
        <el-collapse-item name="1" :title="$t('designer.setting.basicSetting')">
          <el-form-item :label="$t('designer.setting.formSize')">
            <el-select v-model="formConfig.size">
              <el-option
                v-for="item in formSizes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('designer.setting.labelPosition')">
            <el-radio-group
              v-model="formConfig.labelPosition"
              class="radio-group-custom"
            >
              <el-radio-button label="left">
                {{ $t("designer.setting.leftPosition") }}
              </el-radio-button>
              <el-radio-button label="top">
                {{ $t("designer.setting.topPosition") }}
              </el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('designer.setting.labelAlign')">
            <el-radio-group
              v-model="formConfig.labelAlign"
              class="radio-group-custom"
            >
              <el-radio-button label="label-left-align">{{
                $t("designer.setting.leftAlign")
              }}</el-radio-button>
              <el-radio-button label="label-center-align">{{
                $t("designer.setting.centerAlign")
              }}</el-radio-button>
              <el-radio-button label="label-right-align">{{
                $t("designer.setting.rightAlign")
              }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('designer.setting.labelWidth')">
            <el-input-number
              v-model="formConfig.labelWidth"
              :min="0"
              style="width: 100%"
            ></el-input-number>
          </el-form-item>
          <el-form-item :label="$t('designer.setting.formCss')">
            <el-button
              type="info"
              icon="el-icon-edit"
              plain
              round
              @click="editFormCss"
              >{{ $t("designer.setting.addCss") }}</el-button
            >
          </el-form-item>
          <!-- -->
          <el-form-item :label="$t('designer.setting.customClass')">
            <el-select
              v-model="formConfig.customClass"
              multiple
              filterable
              allow-create
              default-first-option
            >
              <el-option
                v-for="(item, idx) in cssClassList"
                :key="idx"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- -->
          <el-form-item :label="$t('designer.setting.globalFunctions')">
            <el-button
              type="info"
              icon="el-icon-edit"
              plain
              round
              @click="editGlobalFunctions"
              >{{ $t("designer.setting.addEventHandler") }}</el-button
            >
          </el-form-item>
          <!-- <el-form-item :label="$t('designer.setting.isCreateDynamicCode')">
            <el-switch
              v-model="formConfig.isCreateDynamicCode"
              size="small"
              active-text="Open"
              inactive-text="Close"
            />
          </el-form-item> -->
          <el-form-item label-width="0">
            <el-divider class="custom-divider">{{
              $t("designer.setting.formSFCSetting")
            }}</el-divider>
          </el-form-item>
          <el-form-item :label="$t('designer.setting.formModelName')">
            <el-input type="text" v-model="formConfig.modelName"></el-input>
          </el-form-item>
          <el-form-item :label="$t('designer.setting.formRefName')">
            <el-input type="text" v-model="formConfig.refName"></el-input>
          </el-form-item>
          <el-form-item :label="$t('designer.setting.formRulesName')">
            <el-input type="text" v-model="formConfig.rulesName"></el-input>
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item
          v-if="showEventCollapse()"
          name="2"
          :title="$t('designer.setting.eventSetting')"
        >
          <el-button
            type="primary"
            icon="el-icon-edit"
            plain
            round
            style="margin-bottom: 0.3rem"
            @click="handleOpen('dhList')"
          >
            {{ $t("designer.setting.setDhList") }}</el-button
          >
          <el-form-item label-width="150px">
            <template #label>
              <div>onFormCreated</div>
              <div :class="{ redPoint: formConfig.onFormCreated }"></div>
            </template>
            <el-button
              type="info"
              icon="el-icon-edit"
              plain
              round
              @click="editFormEventHandler('onFormCreated')"
            >
              {{ $t("designer.setting.addEventHandler") }}</el-button
            >
          </el-form-item>
          <el-form-item label="onFormMounted" label-width="150px">
            <template #label>
              <div>onFormMounted</div>
              <div :class="{ redPoint: formConfig.onFormMounted }"></div>
            </template>
            <el-button
              type="info"
              icon="el-icon-edit"
              plain
              round
              @click="editFormEventHandler('onFormMounted')"
            >
              {{ $t("designer.setting.addEventHandler") }}</el-button
            >
          </el-form-item>
          <!-- -->
          <el-form-item label-width="150px">
            <template #label>
              <div>onFormDataChange</div>
              <div :class="{ redPoint: formConfig.onFormDataChange }"></div>
            </template>
            <el-button
              type="info"
              icon="el-icon-edit"
              plain
              round
              @click="editFormEventHandler('onFormDataChange')"
            >
              {{ $t("designer.setting.addEventHandler") }}</el-button
            >
          </el-form-item>
          <!-- -->
          <!--
          <el-form-item label="onFormValidate">
            <el-button type="info" icon="el-icon-edit" plain round @click="editFormEventHandler('onFormValidate')">
              {{$t('designer.setting.addEventHandler')}}</el-button>
          </el-form-item>
          -->
        </el-collapse-item>
      </el-collapse>
    </el-form>

    <div
      v-if="showFormEventDialogFlag"
      class=""
      v-drag="['.drag-dialog.el-dialog', '.drag-dialog .el-dialog__header']"
    >
      <el-dialog
        :title="$t('designer.setting.editFormEventHandler')"
        v-model="showFormEventDialogFlag"
        :show-close="true"
        class="drag-dialog small-padding-dialog"
        append-to-body
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :destroy-on-close="true"
      >
        <el-alert
          type="info"
          :closable="false"
          :title="'form.' + eventParamsMap[curEventName]"
        ></el-alert>
        <code-editor
          :mode="'javascript'"
          :readonly="false"
          v-model="formEventHandlerCode"
          ref="ecEditor"
        ></code-editor>
        <el-alert type="info" :closable="false" title="}"></el-alert>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="showFormEventDialogFlag = false">
              {{ $t("designer.hint.cancel") }}</el-button
            >
            <el-button type="primary" @click="saveFormEventHandler">
              {{ $t("designer.hint.confirm") }}</el-button
            >
          </div>
        </template>
      </el-dialog>
    </div>

    <div
      v-if="showEditFormCssDialogFlag"
      class=""
      v-drag="['.drag-dialog.el-dialog', '.drag-dialog .el-dialog__header']"
    >
      <el-dialog
        :title="$t('designer.setting.formCss')"
        v-model="showEditFormCssDialogFlag"
        :show-close="true"
        class="drag-dialog small-padding-dialog"
        append-to-body
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :destroy-on-close="true"
      >
        <code-editor
          :mode="'css'"
          :readonly="false"
          v-model="formCssCode"
        ></code-editor>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="showEditFormCssDialogFlag = false">
              {{ $t("designer.hint.cancel") }}</el-button
            >
            <el-button type="primary" @click="saveFormCss">
              {{ $t("designer.hint.confirm") }}</el-button
            >
          </div>
        </template>
      </el-dialog>
    </div>

    <div
      v-if="showEditFunctionsDialogFlag"
      class=""
      v-drag="['.drag-dialog.el-dialog', '.drag-dialog .el-dialog__header']"
    >
      <el-dialog
        :title="$t('designer.setting.globalFunctions')"
        v-model="showEditFunctionsDialogFlag"
        :show-close="true"
        class="drag-dialog small-padding-dialog"
        append-to-body
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :destroy-on-close="true"
      >
        <code-editor
          :mode="'javascript'"
          :readonly="false"
          v-model="functionsCode"
          ref="gfEditor"
        ></code-editor>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="showEditFunctionsDialogFlag = false">
              {{ $t("designer.hint.cancel") }}</el-button
            >
            <el-button type="primary" @click="saveGlobalFunctions">
              {{ $t("designer.hint.confirm") }}</el-button
            >
          </div>
        </template>
      </el-dialog>
    </div>
    <DhListSetting ref="DhListSettingRef"></DhListSetting>
  </div>
</template>

<script>
import i18n from "@/utils/i18n";
import CodeEditor from "@/components/code-editor/index";
import DhListSetting from "@/extension/data-field/dhListSetting";
import {
  deepClone,
  insertCustomCssToHead,
  insertGlobalFunctionsToHtml,
} from "@/utils/util";

export default {
  name: "form-setting",
  mixins: [i18n],
  components: {
    CodeEditor,
    DhListSetting,
  },
  props: {
    designer: Object,
    formConfig: Object,
  },
  inject: ["getDesignerConfig", "refList", "serverFieldList"],
  data() {
    return {
      designerConfig: this.getDesignerConfig(),

      formActiveCollapseNames: ["1", "2"],

      formSizes: [
        { label: "default", value: "" },
        { label: "large", value: "large" },
        //{label: 'medium', value: 'medium'},
        { label: "small", value: "small" },
        //{label: 'mini', value: 'mini'},
      ],

      showEditFormCssDialogFlag: false,
      formCssCode: "",
      cssClassList: [],

      showEditFunctionsDialogFlag: false,
      functionsCode: "",

      showFormEventDialogFlag: false,
      formEventHandlerCode: "",
      curEventName: "",

      eventParamsMap: {
        onFormCreated: "onFormCreated() {",
        onFormMounted: "onFormMounted() {",
        onFormDataChange:
          "onFormDataChange(fieldName, newValue, oldValue, formModel, subFormName, subFormRowIndex) {",
        //'onFormValidate':     'onFormValidate() {',
      },
    };
  },
  provide() {
    return {
      designer: this.designer,
    };
  },
  created() {
    //导入表单JSON后需要重新加载自定义CSS样式！！！
    this.designer.handleEvent("form-json-imported", () => {
      this.formCssCode = this.formConfig.cssCode;
      insertCustomCssToHead(this.formCssCode);
      this.extractCssClass();
      this.designer.emitEvent("form-css-updated", deepClone(this.cssClassList));
    });
  },
  mounted() {
    /* SettingPanel和FormWidget为兄弟组件, 在FormWidget加载formConfig时，
         此处SettingPanel可能无法获取到formConfig.cssCode, 故加个延时函数！ */
    setTimeout(() => {
      this.formCssCode = this.formConfig.cssCode;
      insertCustomCssToHead(this.formCssCode);
      this.extractCssClass();
      this.designer.emitEvent("form-css-updated", deepClone(this.cssClassList));
    }, 1200);
  },
  methods: {
    showEventCollapse() {
      if (this.designerConfig["eventCollapse"] === undefined) {
        return true;
      }

      return !!this.designerConfig["eventCollapse"];
    },

    editFormCss() {
      this.formCssCode = this.designer.formConfig.cssCode;
      this.showEditFormCssDialogFlag = true;
    },

    extractCssClass() {
      let regExp = /\..*{/g;
      let result = this.formCssCode.match(regExp);
      let cssNameArray = [];

      if (!!result && result.length > 0) {
        result.forEach((rItem) => {
          let classArray = rItem.split(","); //切分逗号分割的多个class
          if (classArray.length > 0) {
            classArray.forEach((cItem) => {
              let caItem = cItem.trim();
              if (caItem.indexOf(".", 1) !== -1) {
                //查找第二个.位置
                let newClass = caItem.substring(
                  caItem.indexOf(".") + 1,
                  caItem.indexOf(".", 1)
                ); //仅截取第一、二个.号之间的class
                if (!!newClass) {
                  cssNameArray.push(newClass.trim());
                }
              } else if (caItem.indexOf(" ") !== -1) {
                //查找第一个空格位置
                let newClass = caItem.substring(
                  caItem.indexOf(".") + 1,
                  caItem.indexOf(" ")
                ); //仅截取第一、二个.号之间的class
                if (!!newClass) {
                  cssNameArray.push(newClass.trim());
                }
              } else {
                if (caItem.indexOf("{") !== -1) {
                  //查找第一个{位置
                  let newClass = caItem.substring(
                    caItem.indexOf(".") + 1,
                    caItem.indexOf("{")
                  );
                  cssNameArray.push(newClass.trim());
                } else {
                  let newClass = caItem.substring(caItem.indexOf(".") + 1);
                  cssNameArray.push(newClass.trim());
                }
              }
            });
          }
        });
      }

      //this.cssClassList.length = 0
      this.cssClassList.splice(0, this.cssClassList.length); //清除数组必须用splice，length=0不会响应式更新！！
      this.cssClassList = Array.from(new Set(cssNameArray)); //数组去重
    },

    saveFormCss() {
      this.extractCssClass();
      this.designer.formConfig.cssCode = this.formCssCode;
      insertCustomCssToHead(this.formCssCode);
      this.showEditFormCssDialogFlag = false;

      this.designer.emitEvent("form-css-updated", deepClone(this.cssClassList));
    },

    editGlobalFunctions() {
      this.functionsCode = this.designer.formConfig.functions;
      this.showEditFunctionsDialogFlag = true;
    },

    saveGlobalFunctions() {
      const codeHints = this.$refs.gfEditor.getEditorAnnotations();
      let syntaxErrorFlag = false;
      if (!!codeHints && codeHints.length > 0) {
        codeHints.forEach((chItem) => {
          if (chItem.type === "error") {
            syntaxErrorFlag = true;
          }
        });

        if (syntaxErrorFlag) {
          this.$message.error(this.$t("designer.setting.syntaxCheckWarning"));
          return;
        }
      }

      this.designer.formConfig.functions = this.functionsCode;
      insertGlobalFunctionsToHtml(this.functionsCode);
      this.showEditFunctionsDialogFlag = false;
    },

    editFormEventHandler(eventName) {
      this.curEventName = eventName;
      this.formEventHandlerCode = this.formConfig[eventName];
      this.showFormEventDialogFlag = true;
    },

    saveFormEventHandler() {
      const codeHints = this.$refs.ecEditor.getEditorAnnotations();
      let syntaxErrorFlag = false;
      if (!!codeHints && codeHints.length > 0) {
        codeHints.forEach((chItem) => {
          if (chItem.type === "error") {
            syntaxErrorFlag = true;
          }
        });

        if (syntaxErrorFlag) {
          this.$message.error(this.$t("designer.setting.syntaxCheckWarning"));
          return;
        }
      }

      this.formConfig[this.curEventName] = this.formEventHandlerCode;
      this.showFormEventDialogFlag = false;
    },

    handleOpen(type) {
      switch (type) {
        case "dhList":
          this.$refs.DhListSettingRef.handleOpen(this.designer.formConfig);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-form {
  overflow: hidden;
  height: 100%;
  :deep(.el-form-item__label) {
    font-size: 13px;
    //text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  :deep(.el-form-item--small.el-form-item) {
    margin-bottom: 10px;
  }

  .radio-group-custom {
    :deep(.el-radio-button__inner) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  .custom-divider.el-divider--horizontal {
    margin: 10px 0;
  }
}

.setting-collapse {
  height: 100%;
  overflow: hidden;
  :deep(.el-collapse-item__content) {
    padding-bottom: 6px;
  }

  :deep(.el-collapse-item__header) {
    font-style: italic;
    font-weight: bold;
  }
}

.small-padding-dialog {
  :deep(.el-dialog__body) {
    padding: 6px 15px 12px 15px;
  }
}
</style>
