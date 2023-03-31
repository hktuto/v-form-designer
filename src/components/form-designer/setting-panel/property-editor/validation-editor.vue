<template>
  <el-form-item>
    <template #label>
      <span>{{$t('designer.setting.validation')}}
        <el-tooltip effect="light" :content="$t('designer.setting.validationHelp')">
          <svg-icon icon-class="el-info" /></el-tooltip>
      </span>
    </template>
    <el-select v-model="optionModel.validation" filterable clearable allow-create default-first-option>
      <el-option v-for="(fv, fvIdx) in fieldValidators"
                 :key="fvIdx"
                 :label="fv.label"
                 :value="fv.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import SvgIcon from "@/components/svg-icon/index";

  export default {
    name: "validation-editor",
    mixins: [i18n],
    components: {
      SvgIcon
    },
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        fieldValidators: [
          {value: 'number', label: this.$t('designer.hint.numberValidator')},
          {value: 'letter', label: this.$t('designer.hint.letterValidator')},
          {value: 'letterAndNumber', label: this.$t('designer.hint.letterAndNumberValidator')},
          {value: 'mobilePhone', label: this.$t('designer.hint.mobilePhoneValidator')},
          {value: 'email', label: this.$t('designer.hint.emailValidator')},
          {value: 'url', label: this.$t('designer.hint.urlValidator')},
          {value: 'noChinese', label: this.$t('designer.hint.noChineseValidator')},
          {value: 'chinese', label: this.$t('designer.hint.chineseValidator')},
        ],
      }
    },

  }
</script>

<style scoped>

</style>
