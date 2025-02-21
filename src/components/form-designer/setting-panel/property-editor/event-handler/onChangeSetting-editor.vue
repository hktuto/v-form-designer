<template>
  <div style="margin-bottom: 0.3rem">
    <!-- <template #label>
      <div>onChangeSetting</div>
      <div :class="{ redPoint: optionModel.onChangeSetting }"></div>
    </template> -->
    <el-button type="primary" icon="el-icon-edit" plain round @click="handleClick">
      {{ $t("designer.setting.onChangeSetting") }}</el-button
    >
    <ChangeSettingDialog ref="settingRef"></ChangeSettingDialog>
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
      this.$refs.settingRef.handleOpen(this.optionModel);
    },
  },
};
</script>

<style scoped></style>
