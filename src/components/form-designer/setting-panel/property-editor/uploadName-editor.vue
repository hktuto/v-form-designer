<template>
    <el-form-item :label="$t('designer.setting.uploadName')">
      <el-input type="text" v-model="optionModel.uploadName"></el-input>
    </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "uploadName-editor",
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
