<template>
  <el-form-item label-width="150px">
    <template #label>
      <div>onCreatedSetting</div>
      <div :class="{ redPoint: optionModel.onCreatedSetting }"></div>
    </template>
    <el-button type="info" icon="el-icon-edit" plain round @click="handleClick">
      {{ $t("designer.setting.addEventHandler") }}</el-button
    >
    <AsyncSelectSetting ref="settingRef"></AsyncSelectSetting>
  </el-form-item>
</template>

<script>
import i18n from "@/utils/i18n";
import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin";
import AsyncSelectSetting from "@/extension/data-field/aysncSelect/setting";

export default {
  name: "onCreatedSetting-editor",
  components: {
    AsyncSelectSetting,
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
      console.log("clicsk", this.$refs);
      this.$refs.settingRef.handleOpen(this.optionModel);
    },
  },
};
</script>

<style scoped></style>
