<template>
  <el-form-item :label="$t('designer.setting.showAllLevels')">
    <el-switch v-model="optionModel.showAllLevels"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "showAllLevels-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
