<template>
  <el-form-item :label="$t('designer.setting.prependText')">
    <el-input type="text" v-model="optionModel.prependText"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "prependText-editor",
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
