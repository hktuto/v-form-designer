<template>
  <el-form-item label-width="150px">
    <template #label>
      <div>onSubFormRowInsert</div>
      <div :class="{'redPoint': optionModel.onSubFormRowInsert}"></div>
    </template>
    <el-button type="info" icon="el-icon-edit" plain round @click="editEventHandler('onSubFormRowInsert', eventParams)">
      {{$t('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onSubFormRowInsert-editor",
    mixins: [i18n, eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['subFormData', 'newRowId'],
      }
    }
  }
</script>

<style scoped>

</style>
