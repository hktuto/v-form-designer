<template>
  <el-form-item :label="$t('designer.setting.inactiveText')">
    <el-select
      v-model="optionModel.inactiveText"
      filterable
      allow-create
      default-first-option
    >
      <el-option
        v-for="(item, idx) in inactiveTextList"
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
  name: "inactiveText-editor",
  mixins: [i18n],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  data() {
    return {
      inactiveTextList: ["actions.inactive", "actions.activate"],
    };
  },
};
</script>

<style scoped></style>
