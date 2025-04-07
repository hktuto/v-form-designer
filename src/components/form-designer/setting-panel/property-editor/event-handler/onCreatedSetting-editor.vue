<template>
  <div style="margin-bottom: 0.3rem">
    <!-- <template #label>
      <div>onCreatedSetting</div>
      <div :class="{ redPoint: optionModel.onCreatedSetting }"></div>
    </template> -->
    <el-button type="primary" icon="el-icon-edit" plain round @click="handleClick">
      {{ $t("designer.setting.onCreatedSetting") }}</el-button
    >
    <el-button v-if="optionModel.onCreatedPlus" type="primary" icon="el-icon-edit" plain text @click="editEventHandler('onCreatedPlus', eventParams)">
      {{ $t("designer.setting.onCreatedSettingEdit") }}</el-button
    >
    <AsyncSelectSetting ref="settingRef"></AsyncSelectSetting>
    <UgSelectSetting ref="UgSelectSettingRef"></UgSelectSetting>
  </div>
</template>

<script>
import i18n from "@/utils/i18n";
import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin";
import AsyncSelectSetting from "@/extension/data-field/aysncSelect/setting";
import UgSelectSetting from "@/extension/data-field/userAndgroup/setting";
export default {
  name: "onCreatedSetting-editor",
  components: {
    AsyncSelectSetting,
    UgSelectSetting,
  },
  mixins: [i18n, eventMixin],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  data() {
    return {
      eventParams: [],
    };
  },
  methods: {
    handleClick() {
      switch (this.optionModel.onCreatedSetting) {
        case "async-select":
          this.$refs.settingRef.handleOpen(this.optionModel);
          break;
        case "ug-select":
          this.$refs.UgSelectSettingRef.handleOpen(this.optionModel);
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.el-button+.el-button {
  margin-left: unset;
}
</style>
