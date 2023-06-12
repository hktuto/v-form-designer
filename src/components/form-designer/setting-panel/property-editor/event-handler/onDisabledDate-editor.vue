<template>
  <el-form-item label-width="150px">
    <template #label>
      <div>onDisabledDate</div>
      <div :class="{'redPoint': optionModel.onDisabledDate}"></div>
    </template>
    <el-button type="info" icon="el-icon-edit" plain round @click="editEventHandler('onDisabledDate', eventParams)">
      {{$t('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onDisabledDate-editor",
    mixins: [i18n, eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['dateTime'],
      }
    }
  }
</script>

<style scoped>

</style>
