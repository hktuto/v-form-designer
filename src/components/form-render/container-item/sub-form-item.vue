<template>
  <container-item-wrapper :widget="widget">
    <div
      :key="widget.id"
      class="sub-form-container"
      v-show="!widget.options.hidden"
    >
      <el-row class="header-row">
        <div class="action-header-column" v-if="!widget.options.disabled">
          <span class="action-label">
            {{ $t("render.hint.subFormAction") }}
          </span>
          <el-button
            :disabled="addDisabled"
            round
            type="primary"
            size="small"
            class="action-button"
            @click="addSubFormRow"
            :title="$t('render.hint.subFormAddActionHint')"
          >
            <svg-icon icon-class="el-plus" />
          </el-button>
          <el-button
            :disabled="addDisabled"
            round
            type="primary"
            size="small"
            class="action-button"
            @click="testPaste"
            :title="$t('render.hint.subFormAddActionHint')"
            >test
          </el-button>
        </div>
        <template
          v-for="subWidget in widget.widgetList"
          :key="subWidget.id + 'thc'"
        >
          <div
            class="field-header-column"
            :class="[
              getLabelAlign(widget, subWidget),
              !!subWidget.options.required ? 'is-required' : '',
            ]"
            :style="{ width: subWidget.options.columnWidth }"
          >
            <span
              v-if="!!subWidget.options.labelIconClass"
              class="custom-label"
            >
              <template v-if="subWidget.options.labelIconPosition === 'front'">
                <template v-if="!!subWidget.options.labelTooltip">
                  <el-tooltip
                    :content="subWidget.options.labelTooltip"
                    effect="light"
                  >
                    <svg-icon :icon-class="subWidget.options.labelIconClass" />
                  </el-tooltip>
                  {{ $t(subWidget.options.label) }}
                </template>
                <template v-else>
                  <svg-icon :icon-class="subWidget.options.labelIconClass" />
                  {{ $t(subWidget.options.label) }}
                </template>
              </template>
              <template
                v-else-if="subWidget.options.labelIconPosition === 'rear'"
              >
                <template v-if="!!subWidget.options.labelTooltip">
                  {{ $t(subWidget.options.label) }}
                  <el-tooltip
                    :content="subWidget.options.labelTooltip"
                    effect="light"
                  >
                    <svg-icon
                      :icon-class="
                        subWidget.options.labelIconClass
                      " /></el-tooltip
                ></template>
                <template v-else>
                  {{ $t(subWidget.options.label) }}
                  <svg-icon :icon-class="subWidget.options.labelIconClass" />
                </template>
              </template>
            </span>
            <template v-else>
              <span :title="subWidget.options.labelTooltip">
                {{ $t(subWidget.options.label) }}
              </span>
            </template>
          </div>
        </template>
      </el-row>
      <el-row
        v-for="(subFormRowId, sfrIdx) in rowIdData"
        class="sub-form-row"
        :key="subFormRowId"
      >
        <div
          v-if="!widget.options.disabled"
          class="sub-form-action-column hide-label"
        >
          <div class="action-button-column">
            <el-button
              :disabled="addDisabled"
              circle
              @click="insertSubFormRow(sfrIdx)"
              :title="$t('render.hint.insertSubFormRow')"
            >
              <svg-icon icon-class="el-plus" />
            </el-button>
            <el-popconfirm
              :disabled="actionDisabled"
              width="200"
              :confirm-button-text="$t('render.hint.confirm')"
              :cancel-button-text="$t('render.hint.cancel')"
              :title="getTip()"
              @confirm="deleteSubFormRow(sfrIdx)"
            >
              <template #reference>
                <el-button circle>
                  <svg-icon icon-class="el-delete" />
                </el-button>
              </template>
            </el-popconfirm>
            <span v-if="widget.options.showRowNumber" class="row-number-span"
              >#{{ sfrIdx + 1 }}</span
            >
          </div>
        </div>
        <template
          v-for="(subWidget, swIdx) in widget.widgetList"
          :key="subWidget.id + 'tc' + subFormRowId"
        >
          <div
            class="sub-form-table-column hide-label"
            :style="{ width: subWidget.options.columnWidth }"
          >
            <component
              :is="subWidget.type + '-widget'"
              :field="fieldSchemaData[sfrIdx][swIdx]"
              :key="fieldSchemaData[sfrIdx][swIdx].id"
              :parent-list="widget.widgetList"
              :index-of-parent-list="swIdx"
              :parent-widget="widget"
              :sub-form-row-id="subFormRowId"
              :sub-form-row-index="sfrIdx"
              :sub-form-col-index="swIdx"
            >
              <!-- 子表单暂不支持插槽！！！ -->
            </component>
          </div>
        </template>
      </el-row>
    </div>
  </container-item-wrapper>
</template>

<script>
import emitter from "@/utils/emitter";
import i18n from "@/utils/i18n";
import { deepClone, generateId } from "@/utils/util";
import refMixin from "../refMixin";
import ContainerItemWrapper from "./container-item-wrapper";
import containerItemMixin from "./containerItemMixin";
import FieldComponents from "@/components/form-designer/form-widget/field-widget/index";
import SvgIcon from "@/components/svg-icon/index";

export default {
  name: "sub-form-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n, refMixin, containerItemMixin],
  components: {
    ContainerItemWrapper,
    ...FieldComponents,
    SvgIcon,
  },
  props: {
    widget: Object,
  },
  inject: ["refList", "sfRefList", "globalModel"],
  data() {
    return {
      rowIdData: [],
      fieldSchemaData: [],
      actionDisabled: false,
    };
  },
  computed: {
    addDisabled() {
      const maxLen = this.widget.options.maxLength;
      if (!!maxLen && this.rowIdData.length >= maxLen) {
        return true;
      }
      return false;
    },
  },
  created() {
    this.initRefList();
    this.registerSubFormToRefList();
    this.initRowIdData(true);
    this.initFieldSchemaData();
    this.initEventHandler();
  },
  mounted() {
    this.handleSubFormFirstRowAdd(); //默认添加首行后，主动触发相关事件！！
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    getLabelAlign(widget, subWidget) {
      return subWidget.options.labelAlign || widget.options.labelAlign;
    },

    registerSubFormToRefList() {
      if (this.widget.type === "sub-form") {
        this.sfRefList[this.widget.options.name] = this;
      }
    },

    initRowIdData(initFlag) {
      if (this.widget.type === "sub-form") {
        this.rowIdData.splice(0, this.rowIdData.length); //清除数组必须用splice，length=0不会响应式更新！！
        let subFormModel = this.formModel[this.widget.options.name];
        if (!!subFormModel && subFormModel.length > 0) {
          subFormModel.forEach(() => {
            this.rowIdData.push("id" + generateId());
          });

          if (!!initFlag) {
            //注意：事件触发需延期执行，SumFormDataChange事件处理代码中可能存在尚未创建完成的组件！！
            setTimeout(() => {
              this.handleSubFormRowChange(subFormModel);
            }, 800);
          }
        }
      }
    },

    addToRowIdData() {
      this.rowIdData.push("id" + generateId());
    },

    insertToRowIdData(rowIndex) {
      this.rowIdData.splice(rowIndex, 0, "id" + generateId());
    },

    deleteFromRowIdData(rowIndex) {
      this.rowIdData.splice(rowIndex, 1);
    },

    getRowIdData() {
      return this.rowIdData;
    },

    getWidgetRefOfSubForm(widgetName, rowIndex) {
      let realWidgetName = widgetName + "@row" + this.rowIdData[rowIndex];
      return this.getWidgetRef(realWidgetName);
    },

    initFieldSchemaData() {
      //初始化fieldSchemaData！！！
      if (this.widget.type !== "sub-form") {
        return;
      }

      let rowLength = this.rowIdData.length;
      this.fieldSchemaData.splice(0, this.fieldSchemaData.length); //清除数组必须用splice，length=0不会响应式更新！！
      if (rowLength > 0) {
        for (let i = 0; i < rowLength; i++) {
          let fieldSchemas = [];
          this.widget.widgetList.forEach((swItem) => {
            fieldSchemas.push(this.cloneFieldSchema(swItem));
          });
          this.fieldSchemaData.push(fieldSchemas);
        }
      }
    },

    addToFieldSchemaData(rowIndex) {
      let fieldSchemas = [];
      this.widget.widgetList.forEach((swItem) => {
        fieldSchemas.push(this.cloneFieldSchema(swItem));
      });

      if (rowIndex === undefined) {
        this.fieldSchemaData.push(fieldSchemas);
      } else {
        this.fieldSchemaData.splice(rowIndex, 0, fieldSchemas);
      }
    },

    deleteFromFieldSchemaData(rowIndex) {
      this.fieldSchemaData.splice(rowIndex, 1);
    },

    cloneFieldSchema(fieldWidget) {
      let newFieldSchema = deepClone(fieldWidget);
      newFieldSchema.id = fieldWidget.type + generateId();
      return newFieldSchema;
    },

    initEventHandler() {
      if (this.widget.type !== "sub-form") {
        return;
      }

      this.on$("setFormData", (newFormData) => {
        this.initRowIdData(false);
        this.initFieldSchemaData();

        let subFormData = newFormData[this.widget.options.name] || [];
        setTimeout(() => {
          //延时触发SubFormRowChange事件, 便于更新计算字段！！
          this.handleSubFormRowChange(subFormData);
        }, 800);
      });
    },

    handleSubFormFirstRowAdd() {
      if (this.widget.type !== "sub-form") {
        return;
      }

      if (!!this.widget.options.showBlankRow && this.rowIdData.length === 1) {
        let oldSubFormData = this.formModel[this.widget.options.name] || [];
        this.handleSubFormRowAdd(oldSubFormData, this.rowIdData[0]);
        this.handleSubFormRowChange(oldSubFormData);
      }
    },
    testPaste() {
      console.log("testPast");
      // 读取图片等复杂数据
      navigator.clipboard.readText().then(text => console.log(text));
      console.log(this.fieldSchemaData);
      
    },
    addSubFormRow() {
      let newSubFormDataRow = {};
      this.widget.widgetList.forEach((subFormItem) => {
        if (!!subFormItem.formItemFlag) {
          newSubFormDataRow[subFormItem.options.name] =
            subFormItem.options.defaultValue;
        }
      });

      let oldSubFormData = this.formModel[this.widget.options.name] || [];
      oldSubFormData.push(newSubFormDataRow);
      this.addToRowIdData();
      this.addToFieldSchemaData();

      this.handleSubFormRowAdd(
        oldSubFormData,
        this.rowIdData[oldSubFormData.length - 1]
      );
      this.handleSubFormRowChange(oldSubFormData);
    },

    insertSubFormRow(beforeFormRowIndex) {
      let newSubFormDataRow = {};
      this.widget.widgetList.forEach((subFormItem) => {
        if (!!subFormItem.formItemFlag) {
          newSubFormDataRow[subFormItem.options.name] =
            subFormItem.options.defaultValue;
        }
      });

      let oldSubFormData = this.formModel[this.widget.options.name] || [];
      oldSubFormData.splice(beforeFormRowIndex, 0, newSubFormDataRow);
      this.insertToRowIdData(beforeFormRowIndex);
      this.addToFieldSchemaData(beforeFormRowIndex);

      this.handleSubFormRowInsert(
        oldSubFormData,
        this.rowIdData[beforeFormRowIndex]
      );
      this.handleSubFormRowChange(oldSubFormData);
    },

    deleteSubFormRow(formRowIndex) {
      let oldSubFormData = this.formModel[this.widget.options.name] || [];
      let deletedDataRow = deepClone(oldSubFormData[formRowIndex]);
      oldSubFormData.splice(formRowIndex, 1);
      this.deleteFromRowIdData(formRowIndex);
      this.deleteFromFieldSchemaData(formRowIndex);

      this.handleSubFormRowDelete(oldSubFormData, deletedDataRow);
      this.handleSubFormRowChange(oldSubFormData);
    },

    getTip() {
      return this.widget.options.label
        ? this.$t("render.hint.deleteSubFormRowLabel", {
            label: this.$t(this.widget.options.label),
          }).replace("${label}", this.$t(this.widget.options.label))
        : this.$t("render.hint.deleteSubFormRow");
    },

    /*deleteSubFormRow(formRowIndex) {
            const tip = this.widget.options.label
              ? this.$t("render.hint.deleteSubFormRowLabel", {
                  label: this.$t(this.widget.options.label),
                }).replace("${label}", this.$t(this.widget.options.label))
              : this.$t("render.hint.deleteSubFormRow");
            this.$confirm(tip, this.$t("render.hint.prompt"), {
              confirmButtonText: this.$t("render.hint.confirm"),
              cancelButtonText: this.$t("render.hint.cancel"),
            })
              .then(() => {
                let oldSubFormData = this.formModel[this.widget.options.name] || [];
                let deletedDataRow = deepClone(oldSubFormData[formRowIndex]);
                oldSubFormData.splice(formRowIndex, 1);
                this.deleteFromRowIdData(formRowIndex);
                this.deleteFromFieldSchemaData(formRowIndex);

                this.handleSubFormRowDelete(oldSubFormData, deletedDataRow);
                this.handleSubFormRowChange(oldSubFormData);
              })
              .catch(() => {
                //
              });
          },*/

    handleSubFormRowChange(subFormData) {
      if (!!this.widget.options.onSubFormRowChange) {
        try {
          let customFunc = new Function(
            "subFormData",
            this.widget.options.onSubFormRowChange
          );
          customFunc.call(this, subFormData);
        } catch (error) {
          console.error(error);
        }
      }
    },

    handleSubFormRowAdd(subFormData, newRowId) {
      if (!!this.widget.options.onSubFormRowAdd) {
        try {
          let customFunc = new Function(
            "subFormData",
            "newRowId",
            this.widget.options.onSubFormRowAdd
          );
          customFunc.call(this, subFormData, newRowId);
        } catch (error) {
          console.error(error);
        }
      }
    },

    handleSubFormRowInsert(subFormData, newRowId) {
      if (!!this.widget.options.onSubFormRowInsert) {
        try {
          let customFunc = new Function(
            "subFormData",
            "newRowId",
            this.widget.options.onSubFormRowInsert
          );
          customFunc.call(this, subFormData, newRowId);
        } catch (error) {
          console.error(error);
        }
      }
    },

    handleSubFormRowDelete(subFormData, deletedDataRow) {
      if (!!this.widget.options.onSubFormRowDelete) {
        try {
          let customFunc = new Function(
            "subFormData",
            "deletedDataRow",
            this.widget.options.onSubFormRowDelete
          );
          customFunc.call(this, subFormData, deletedDataRow);
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-form-container {
  margin-bottom: 8px;
  text-align: left; //IE浏览器强制居左对齐

  :deep(.el-row.header-row) {
    padding-bottom: 0;
  }

  :deep(.el-row.sub-form-row) {
    padding-top: 3px;
    padding-bottom: 24px;

    .row-number-span {
      margin-left: 16px;
    }
  }
}

div.action-header-column {
  display: inline-block;
  width: 120px;

  .action-label {
    margin-right: 12px;
  }

  .action-button {
    padding-left: 8px;
    padding-right: 8px;
  }
}

div.field-header-column {
  display: inline-block;
  //overflow: hidden;
  //white-space: nowrap;  //文字超出长度不自动换行
  //text-overflow: ellipsis;  //文字超出长度显示省略号
  padding-left: 3px;
  span.custom-label i {
    margin: 0 3px;
  }
}

div.field-header-column.is-required:before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}

div.label-center-left {
  text-align: left;
}

div.label-center-align {
  text-align: center;
}

div.label-right-align {
  text-align: right;
}

div.sub-form-action-column {
  display: inline-block;
  width: 120px;

  :deep(.el-form-item) {
    margin-bottom: 0;
  }

  :deep(.el-button) {
    font-size: 14px;
    padding: 0;
    background: #dcdfe6;
    border: 4px solid #dcdfe6;
  }
}

div.sub-form-action-column.hide-label {
  :deep(.el-form-item__label) {
    display: none;
  }
}

div.sub-form-table-column {
  display: inline-block;
  //width: 200px;

  :deep(.el-form-item) {
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 0;
  }

  :deep(.el-form-item__content) {
    margin-left: 0 !important;
  }
}

div.sub-form-table-column.hide-label {
  :deep(.el-form-item__label) {
    display: none;
  }
}
</style>
