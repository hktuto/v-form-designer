<template>
  <el-form-item :label="$t('designer.setting.withCredentials')">
    <el-switch v-model="optionModel.withCredentials"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "withCredentials-editor",
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
