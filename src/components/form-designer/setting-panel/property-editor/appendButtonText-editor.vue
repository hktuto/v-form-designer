<template>
  <el-form-item :label="$t('designer.setting.appendButtonText')">
    <el-input type="text" v-model="optionModel.appendButtonText"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "appendButtonText-editor",
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
