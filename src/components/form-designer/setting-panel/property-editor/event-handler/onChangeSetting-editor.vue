<template>
  <div style="margin-bottom: 0.3rem">
    <!-- <template #label>
      <div>onChangeSetting</div>
      <div :class="{ redPoint: optionModel.onChangeSetting }"></div>
    </template> -->
    <el-button
      type="primary"
      icon="el-icon-edit"
      plain
      round
      @click="handleClick"
    >
      {{ $t("designer.setting.onChangeSetting") }}</el-button
    >

    <el-button
      v-if="optionModel.onChangePlus"
      type="primary"
      icon="el-icon-edit"
      plain
      text
      @click="editEventHandler('onChangePlus', eventParams)"
    >
      {{ $t("designer.setting.onChangeSettingEdit") }}</el-button
    >
    <ChangeSettingDialog
      ref="settingRef"
      :parent-widget="parentWidget"
      :selected-widget="selectedWidget"
    ></ChangeSettingDialog>
  </div>
</template>

<script>
import i18n from "@/utils/i18n";
import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin";
import ChangeSettingDialog from "@/extension/changeSetting/dialog";
export default {
  name: "onChangeSetting-editor",
  components: { ChangeSettingDialog },
  mixins: [i18n, eventMixin],
  props: {
    designer: Object,
    parentWidget: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  data() {
    return {};
  },
  computed: {
    eventParams() {
      return !!this.parentWidget && this.parentWidget.type === "sub-form"
        ? ["value", "oldValue", "subFormData", "rowId"]
        : ["value", "oldValue"];
    },
  },
  methods: {
    handleClick() {
      this.$refs.settingRef.handleOpen(this.optionModel);
    },
  },
};
</script>

<style scoped>
.el-button + .el-button {
  margin-left: unset;
}
</style>
