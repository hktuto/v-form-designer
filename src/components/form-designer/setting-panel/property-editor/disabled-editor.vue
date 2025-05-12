<template>
  <el-form-item :label="$t('designer.setting.disabled')">
    <el-switch
      v-model="optionModel.disabled"
      @change="handleChange"
    ></el-switch>
  </el-form-item>
</template>

<script>
import i18n from "@/utils/i18n";

export default {
  name: "disabled-editor",
  mixins: [i18n],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  methods: {
    handleChange(value) {
      if (this.selectedWidget.type === "sub-form") {
        this.selectedWidget.widgetList.forEach(item => {
          item.options.disabled = value
        })
      }
    },
  },
};
</script>

<style scoped></style>
