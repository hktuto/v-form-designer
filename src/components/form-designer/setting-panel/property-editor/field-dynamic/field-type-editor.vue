<template>
  <el-form-item :label="$t('designer.setting.fieldType')">
    <el-select
      v-model="optionModel.fieldType"
      filterable
      default-first-option
      @change="handleChange"
    >
      <el-option
        v-for="(item, idx) in fieldTypes"
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
  name: "fieldType-editor",
  componentName: "PropertyEditor",
  mixins: [i18n],
  props: {
    optionModel: Object,
  },
  data() {
    return {
      fieldTypes: ["input", "textarea", "number", "select", "date", "date-range"],
    };
  },
  created() {},
  methods: {
    handleChange(val) {
      console.log(val);
      switch (val) {
        case "date":
          this.optionModel.defaultValue = "";
          break;
        case "date-range":
          this.optionModel.format = "YYYY-MM-DD";
          this.optionModel.valueFormat = "YYYY-MM-DD HH:mm";
          this.optionModel.defaultTime = ["2000-01-01 00:00:00", "2000-01-01 23:59:00"];
          this.optionModel.type = "daterange";
          break;

        default:
          this.optionModel.type = "";
          this.optionModel.format = "";
          this.optionModel.valueFormat = "";
          this.optionModel.defaultTime = "";

          break;
      }
    },
  },
};
</script>

<style scoped></style>
