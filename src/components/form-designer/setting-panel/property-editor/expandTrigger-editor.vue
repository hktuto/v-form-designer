<template>
  <el-form-item :label="$t('designer.setting.expandTrigger')">
    <el-radio-group v-model="optionModel.expandTrigger" class="radio-group-custom">
      <el-radio-button label="click">
        {{$t('designer.setting.click')}}</el-radio-button>
      <el-radio-button label="hover">
        {{$t('designer.setting.hover')}}</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "expandTrigger-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    }
  }
</script>

<style lang="scss" scoped>
  .radio-group-custom {
    :deep(.el-radio-button__inner) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
</style>
