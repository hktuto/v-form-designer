<template>
  <el-form-item :label="$t('designer.setting.displayStyle')">
    <el-radio-group v-model="optionModel.displayStyle">
      <el-radio label="inline">{{$t('designer.setting.inlineLayout')}}</el-radio>
      <el-radio label="block">{{$t('designer.setting.blockLayout')}}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "displayStyle-editor",
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
