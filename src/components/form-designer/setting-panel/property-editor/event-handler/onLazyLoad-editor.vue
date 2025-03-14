<template>
  <el-form-item label-width="150px" v-if="optionModel.lazy">
    <template #label>
      <div>onLazyLoad</div>
      <div :class="{'redPoint': optionModel.onLazyLoad}"></div>
    </template>
    <el-button type="info" icon="el-icon-edit" plain round @click="editEventHandler('onLazyLoad', eventParams)">
      {{$t('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onLazyLoad-editor",
    mixins: [i18n, eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['node', 'resolve'],
      }
    }
  }
</script>

<style scoped>

</style>
