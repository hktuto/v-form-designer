<template>
  <el-dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :title="$t('dataField.setting')"
    :before-close="handleClose"
    class="big"
  >
    <el-form
      ref="formRef"
      label-position="top"
      :model="form"
      :rules="rules"
      label-width="auto"
      class="demo-dynamic"
    >
      <template v-for="key in ['user', 'group']">
        <el-divider content-position="left">{{ key }}</el-divider>
        <el-form-item :prop="`${key}Api`" :label="$t('dataFieldUg.api')">
          <el-input v-model="form[`${key}Api`]" size="default" clearable />
        </el-form-item>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item :prop="`${key}LabelKey`" :label="$t('dataFieldUg.labelKey')">
              <el-input v-model="form[`${key}LabelKey`]" size="default" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :prop="`${key}ValueKey`" :label="$t('dataFieldUg.valueKey')">
              <el-input v-model="form[`${key}ValueKey`]" size="default" clearable />
            </el-form-item>
          </el-col>
        </el-row>
      </template>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button size="default" @click="dialogVisible = false">{{
          $t("designer.hint.cancel")
        }}</el-button>
        <el-button size="default" type="primary" @click="handleSubmit">
          {{ $t("designer.hint.confirm") }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import SvgIcon from "@/components/svg-icon/index";
import i18n, { translate } from "@/utils/i18n";
export default {
  components: { SvgIcon },
  data() {
    return {
      form: {},
      dialogVisible: false,
      setting: {},
    };
  },

  methods: {
    handleOpen(setting) {
      this.setting = setting;
      this.form = setting.selectSetting ? { ...setting.selectSetting } : form;
      this.dialogVisible = true;
    },
    handleSubmit() {
      this.setting.selectSetting = this.form;
      const {
        userApi,
        userMethod,
        userValueKey,
        userLabelKey,
        groupApi,
        groupMethod,
        groupValueKey,
        groupLabelKey,
      } = this.form;
      const onCreated = `const _this = this\nasync function getOptions() {\n  const options = [\n        { value: 'user_groups', label: $i18n.t('user_groups'), options: await groupListFilter() },\n        { value: 'user_users', label: $i18n.t('user_users'), options: await userListFilter() }\n  ]\n  _this.loadOptions(options)\n}\nasync function userListFilter () {\n  const data = await $api.${userMethod}('${userApi}', {}).then(res => res.data.data)\n  return data.reduce((prev,item) => {\n    if (item.userId) prev.push({\n      label: item.${userLabelKey},\n      value: item.${userValueKey}\n    })\n    return prev\n  }, [])\n}\nasync function groupListFilter () {\n  const data = await $api.${groupMethod}('${groupApi}', {}).then(res => res.data.data)\n  return data.reduce((prev,item) => {\n    if (item.id) prev.push({\n      label: item.${groupLabelKey},\n      value: item.${groupValueKey}\n    })\n    return prev\n  }, [])\n}\ngetOptions()`;
      this.setting.onCreated = onCreated;
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.el-delete {
  cursor: pointer;
}
.el-row {
  margin-bottom: 0.3rem;
  align-items: center;
}
.params-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
