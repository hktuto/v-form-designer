<template>
  <el-form-item label-width="150px">
    <template #label>
      <div>onInput</div>
      <div :class="{'redPoint': optionModel.onInput}"></div>
    </template>
    <el-button type="info" icon="el-icon-edit" plain round @click="editEventHandler('onInput', eventParams)">
      {{$t('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onInput-editor",
    mixins: [i18n, eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['value'],
      }
    }
  }
</script>

<style scoped>

</style>
