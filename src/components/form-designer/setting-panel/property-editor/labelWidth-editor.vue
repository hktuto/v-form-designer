<template>
  <el-form-item :label="$t('designer.setting.labelWidth')">
    <el-input type="number" v-model="optionModel.labelWidth" @input="inputNumberHandler"
              min="0" class="hide-spin-button"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "labelWidth-editor",
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
