<template>
  <el-form-item :label="$t('designer.setting.labelAlign')">
    <el-radio-group v-model="optionModel.labelAlign" class="radio-group-custom">
      <el-radio-button label="label-left-align">
        {{$t('designer.setting.leftAlign')}}</el-radio-button>
      <el-radio-button label="label-center-align">
        {{$t('designer.setting.centerAlign')}}</el-radio-button>
      <el-radio-button label="label-right-align">
        {{$t('designer.setting.rightAlign')}}</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n";

  export default {
    name: "sub-form-labelAlign-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
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
