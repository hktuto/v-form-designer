<template>
  <el-dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :title="$t('dataField.setting')"
    :before-close="handleClose"
  >
    <el-form
      ref="formRef"
      label-position="top"
      :model="form"
      :rules="rules"
      label-width="auto"
      class="demo-dynamic"
    >
      <el-form-item prop="api" :label="$t('dataField.api')">
        <el-select
          size="default"
          v-model="form.api"
          style="width: 240px"
          clearable
          @change="handleTypeChange"
        >
          <el-option
            v-for="(item, key) in apiOptions"
            :key="key"
            :label="`dataField.type.${key}`"
            :value="key"
          />
        </el-select>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="labelKey" :label="$t('dataField.apiLabel')">
            <el-select
              size="default"
              v-model="form.labelKey"
              style="width: 240px"
              clearable
              filterable
              allow-create
            >
              <el-option
                v-for="(item, index) in selectType.labelKeyList"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="valueKey" :label="$t('dataField.apiValue')">
            <el-select
              size="default"
              v-model="form.valueKey"
              style="width: 240px"
              clearable
              filterable
              allow-create
            >
              <el-option
                v-for="(item, index) in selectType.valueKeyList"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider content-position="left">{{ $t("dataField.params") }}</el-divider>
      <div v-for="(item, index) in selectType.paramSettings" :key="key">
        <h4 class="params-header">
          {{ item.key }}
          <el-button
            v-if="item.type !== 'string'"
            type="info"
            icon="el-icon-plus"
            circle
            @click="handleAddParams(item)"
          />
        </h4>
        <template v-if="item.type === 'string'">
          <el-input
            v-if="!item.apiSetting"
            v-model="form.params[item.key]"
            size="default"
            clearable
          />
          <el-select
            v-else
            size="default"
            v-model="form.params[item.key]"
            filterable
            @change="(value) => handleParamChange(value, item)"
          >
            <el-option
              v-for="(item, index) in item.options"
              :key="item"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
        <template v-else>
          <el-row
            :gutter="20"
            v-for="(param, paramIndex) in form.params[item.key]"
            :key="index"
          >
            <el-col :span="6">
              <el-input
                v-model="form.params[item.key][paramIndex].key"
                size="default"
                clearable
              />
            </el-col>
            <el-col :span="6">
              <el-input
                v-model="form.params[item.key][paramIndex].value"
                size="default"
                clearable
              />
            </el-col>
            <svg-icon
              class="el-delete"
              icon-class="el-delete"
              @click="handleDeleteParam(item.key, paramIndex)"
            />
          </el-row>
        </template>
      </div>
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
import { selectApis } from "@/extension/data-field/aysncSelect/dataFieldApis";
import SvgIcon from "@/components/svg-icon/index";
import i18n, { translate } from "@/utils/i18n";
export default {
  components: { SvgIcon },
  data() {
    return {
      form: {
        api: "",
        method: "get",
      },
      dialogVisible: false,
      setting: {},
      rules: {
        api: [
          {
            required: true,
            message: translate("render.hint.fieldRequired"),
            trigger: "blur",
          },
        ],
        labelKey: [
          {
            required: true,
            message: translate("render.hint.fieldRequired"),
            trigger: "blur",
          },
        ],
        valueKey: [
          {
            required: true,
            message: translate("render.hint.fieldRequired"),
            trigger: "blur",
          },
        ],
      },
      apiOptions: selectApis,
      selectType: {},
    };
  },

  methods: {
    handleOpen(setting) {
      const initForm = {
        api: "",
        method: "get",
        params: {},
        valueKey: "value",
        labelKey: "label",
      };
      this.selectType = {};
      this.form = initForm;
      this.setting = setting;
      this.form = setting.selectSetting ? setting.selectSetting : form;
      if (this.form.api) this.handleTypeChange(this.form.api, true);
      this.dialogVisible = true;
    },
    handleTypeChange(value, init = false) {
      this.selectType = { ...this.apiOptions[value] };
      if (!init) {
        this.form.labelKey = this.selectType.labelKey;
        this.form.valueKey = this.selectType.valueKey;
      }
      if (!this.selectType.paramSettings) {
        this.selectType.paramSettings = [];
      }
      if (!this.selectType.paramSettings.find((item) => item.key === "other")) {
        this.selectType.paramSettings.push({
          key: "other",
        });
      }
      if (!this.form) this.form = {};
      if (!this.form.params) this.form.params = {};
      this.selectType.paramSettings.forEach(async (item) => {
        if (item.type === "string") {
          item.options = await this.getOptions(item.apiSetting);
        }
        if (!!this.form.params[item.key]) return;
        if (item.type === "string") {
          this.form.params[item.key] = "";
        } else {
          this.form.params[item.key] = [];
        }
      });
    },
    async handleParamChange(value, apiSetting) {
      switch (apiSetting.changeKey) {
        case value:
          const tableDetail = await this.GetMasterTablesDetailApi(value);
          this.selectType.labelKeyList = tableDetail.fields.map(
            (item) => item.columnName
          );
          this.selectType.valueKeyList = tableDetail.fields.map(
            (item) => item.columnName
          );
          break;

        default:
          break;
      }
    },
    handleSubmit() {
      this.setting.selectSetting = this.form;
      const message = "message111";
      const apiSetting = this.apiOptions[this.form.api];
      let params = {
        ...this.form.params,
      };
      if (this.form.params.other) {
        const other = this.form.params.other;
        other.forEach((item) => {
          if (item.value) params[item.key] = item.value;
        });
        delete params.other;
      }
      Object.keys(params).forEach((key) => {
        if (params[key] instanceof Array) {
          if (params[key].length === 0) {
            delete params[key];
            return;
          }
          const data = [...params[key]];
          params[key] = {};
          data.forEach((item) => {
            if (item.value) params[key][item.key] = item.value;
          });
        }
      });
      if (!apiSetting.method) apiSetting.method = "post";
      const paramsStr = this.getObjStr(params, apiSetting.method);
      const onCreated = `const _this = this\nasync function getList() {\n  const data = await $api.${apiSetting.method}('${apiSetting.api}',{${paramsStr}}).then(res => res.data.data)\n\n  return data.map(item => ({\n    value: item.${apiSetting.valueKey},\n    label: item.${apiSetting.labelKey}\n  })).sort((a,b)=> (a.label.localeCompare(b.label) ))\n}\nasync function init() {\n  const options = await getList()\n  _this.loadOptions(options)\n}\ninit()`;
      console.log(onCreated);
      this.setting.onCreated = onCreated;
      this.dialogVisible = false;
    },
    handleAddParams(paramSetting) {
      this.form.params[paramSetting.key].push({ value: "", key: "" });
    },
    handleDeleteParam(key, index) {
      this.form.params[key].splice(index, 1);
    },
    getObjStr(obj, apiMethod = "post") {
      let str = "";
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] == "object") str += `${key}:{${this.getObjStr(obj[key])}}, `;
        else if (obj[key]) str += `${key}: '${obj[key]}', `;
      });
      if (apiMethod === "get") return `params: {${str}}`;
      else return str;
    },
    async getOptions(apiSetting) {
      // const data = await axios[apiSetting.method](apiSetting.api).then(
      const data = await $api[apiSetting.method](apiSetting.api).then(
        (res) => res.data.data
      );
      return data
        .map((item) => ({
          value: item[apiSetting.valueKey],
          label: item[apiSetting.labelKey],
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    },
    async GetMasterTablesDetailApi(id) {
      try {
        const res = await api
          .get(`/docpal/master/tables/${id}`)
          .then((res) => res.data.data);
        return res;
      } catch (error) {
        return {
          fields: [],
        };
      }
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
