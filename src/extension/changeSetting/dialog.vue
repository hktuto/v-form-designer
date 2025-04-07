<script>
import { setOnChange } from "@/extension/changeSetting/codeHelper";

import SvgIcon from "@/components/svg-icon/index";
import ChangeSettingForm from "./form";
const initApi = {
  fieldName: "",
  api: "",
  method: "get",
  params: {},
  valueKey: "value",
  labelKey: "label",
};
export default {
  components: { SvgIcon, ChangeSettingForm },
  data() {
    return {
      changeFieldList: [],
      dialogVisible: false,
      selectType: {},
      setting: {},
      widgetList: [],
    };
  },
  inject: ["getFieldWidgets"],

  methods: {
    getWidgetList() {
      this.widgetList = this.getFieldWidgets();
    },
    setWidgetDisabled(widgetName, disabled = false) {
      const disabledWidget = this.widgetList.find(
        (item) => item.name === widgetName
      );
      if (disabledWidget) disabledWidget.disabled = disabled;
    },
    handleSubmit() {
      this.setting.changeSettings = JSON.parse(
        JSON.stringify(this.changeFieldList)
      );
      setOnChange(this.setting);
      this.dialogVisible = false;
    },
    handleOpen(setting) {
      this.getWidgetList();
      this.selectType = {};
      this.setting = setting;
      this.changeFieldList =
        setting.changeSettings?.length > 0
          ? setting.changeSettings
          : [
              {
                ...initApi,
              },
            ];
      // if (this.form.api) this.handleTypeChange(this.form.api, true);
      this.dialogVisible = true;
    },
    handleDelete(index) {
      this.changeFieldList.splice(index, 1);
    },
    handleAdd() {
      if (!this.changeFieldList) this.changeFieldList = [];
      this.changeFieldList.push({
        ...initApi,
      });
    },
  },
};
</script>
<template>
  <el-dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :title="$t('designer.setting.onChangeSetting')"
    :before-close="handleClose"
  >
    <el-form
      ref="formRef"
      label-position="top"
      :model="form"
      label-width="auto"
      class="demo-dynamic"
    >
      <ChangeSettingForm
        v-for="(item, index) in changeFieldList"
        :key="index"
        :form="item"
        :widgetList="widgetList"
        @setWidgetDisabled="setWidgetDisabled"
        @delete="handleDelete(index)"
      ></ChangeSettingForm>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-checkbox
          v-model="setting.isCreateDynamicCode"
          :label="$t('designer.setting.isCreateDynamicCode')"
          size="large"
        />
        <div>
          <el-button size="default" type="primary" @click="handleAdd">{{
            $t("designer.setting.addOption")
          }}</el-button>
          <el-button size="default" @click="dialogVisible = false">{{
            $t("designer.hint.cancel")
          }}</el-button>
          <el-button size="default" type="primary" @click="handleSubmit">
            {{ $t("designer.hint.confirm") }}
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
