<template>
  <div>
    <el-form-item label-width="0">
      <el-divider class="custom-divider">{{$t('designer.setting.uploadSetting')}}</el-divider>
    </el-form-item>
    <el-form-item :label="$t('designer.setting.uploadURL')">
      <el-select v-model="optionModel.uploadURL" filterable clearable allow-create default-first-option
        @change="handleChange">
        <el-option v-for="(item, index) in urls"
                  :key="index"
                  :label="item"
                  :value="item">
        </el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "uploadURL-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        urls: [
          '/api/docpal/workflow/upload/file',
          '/api/docpal/workflow/upload/files',
          '/api/docpal/workflow/files/upload',
        ],
      }
    },
    methods: {
      handleChange(value) {
        this.optionModel.uploadName = value === '/api/docpal/workflow/upload/file' ? 'file' : 'files'
      }
    }
  }
</script>

<style scoped>

</style>
