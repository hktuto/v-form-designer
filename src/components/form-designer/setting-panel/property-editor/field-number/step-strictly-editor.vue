<template>
  <el-form-item :label="$t('designer.setting.stepStrictly')">
    <el-switch v-model="optionModel.stepStrictly"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "step-strictly-editor",
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
