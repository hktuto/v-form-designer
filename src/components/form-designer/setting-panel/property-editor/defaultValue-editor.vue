<template>
  <el-form-item v-if="!hasConfig('optionItems')" :label="$t('designer.setting.defaultValue')">
    <el-input type="textarea" :rows="3" v-model="optionModel.defaultValue"
              @change="emitDefaultValueChange"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "defaultValue-editor",
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
