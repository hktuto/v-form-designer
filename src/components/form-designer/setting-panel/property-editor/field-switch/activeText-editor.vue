<template>
  <el-form-item :label="$t('designer.setting.activeText')">
    <el-select
      v-model="optionModel.activeText"
      filterable
      allow-create
      default-first-option
    >
      <el-option
        v-for="(item, idx) in activeTextList"
        :key="idx"
        :label="item"
        :value="item"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import i18n from "@/utils/i18n";

export default {
  name: "activeText-editor",
  mixins: [i18n],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  data() {
    return {
      activeTextList: ["actions.inactive", "actions.activate"],
    };
  },
};
</script>

<style scoped></style>
