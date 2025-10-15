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
      label-width="auto"
      class="demo-dynamic"
    >
      <el-form-item
        prop="api"
        :label="$t('dataField.api')"
        :rules="[
          {
            required: true,
            message:
              $t('dataField.api') + ' ' + $t('render.hint.fieldRequired'),
            trigger: 'blur',
          },
        ]"
      >
        <el-select
          size="default"
          v-model="form.api"
          style="width: 240px"
          clearable
          :placeholder="$t('render.hint.selectPlaceholder')"
          @change="handleTypeChange"
        >
          <!-- allow-create -->
          <!-- filterable -->
          <el-option
            v-for="(item, key) in apiOptions"
            :key="key"
            :label="$t(`dataField.type.${key}`)"
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
              :placeholder="$t('render.hint.selectPlaceholder')"
            >
              <el-option
                v-for="(item) in selectType.labelKeyList"
                :key="item"
                :label="item.label ? item.label : item"
                :value="item.value ? item.value : item"
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
              :placeholder="$t('render.hint.selectPlaceholder')"
            >
              <el-option
                v-for="(item) in selectType.valueKeyList"
                :key="item"
                :label="item.label ? item.label : item"
                :value="item.value ? item.value : item"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider v-if="selectType.paramSettings && selectType.paramSettings.length > 0" content-position="left">
        {{ $t("dataField.params") }}
      </el-divider>
      <div v-for="(item, index) in selectType.paramSettings" :key="key">
        <h4 class="params-header">
          {{ item.key }}
          <el-button
            size="small"
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
            clearable
            allow-create
            :placeholder="$t('render.hint.selectPlaceholder')"
            @change="(value) => handleParamChange(value, item)"
          >
            <el-option
              v-for="(item) in item.options"
              :key="item"
              :label="item.label ? item.label : item"
              :value="item.value ? item.value : item"
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
                v-if="!selectType[`${[item.key]}KeyList`]"
                v-model="form.params[item.key][paramIndex].key"
                size="default"
                clearable
                :placeholder="$t('dataField.apiField')"
              />
              <el-select
                v-else
                size="default"
                v-model="form.params[item.key][paramIndex].key"
                clearable
                filterable
                allow-create
                :placeholder="$t('dataField.apiField')"
              >
                <el-option
                  v-for="(oItem) in selectType[`${[item.key]}KeyList`]"
                  :key="oItem"
                  :label="oItem.label ? oItem.label : oItem"
                  :value="oItem.value ? oItem.value : oItem"
                />
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-input
                v-model="form.params[item.key][paramIndex].value"
                size="default"
                :placeholder="$t('dataField.apiFieldValue')"
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
        <el-checkbox
          v-model="form.isCreateDynamicCode"
          :label="$t('designer.setting.isCreateDynamicCode')"
          size="large"
        />
        <div>
          <el-button size="default" @click="dialogVisible = false"
            >{{ $t("designer.hint.cancel") }}
          </el-button>
          <el-button size="default" type="primary" @click="handleSubmit">
            {{ $t("designer.hint.confirm") }}
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { selectApis } from "@/extension/data-field/aysncSelect/dataFieldApis";
import SvgIcon from "@/components/svg-icon/index";
import i18n, { translate } from "@/utils/i18n";
import { setOnCreate } from "@/extension/data-field/aysncSelect/codeHelper";
const initForm = {
  api: "",
  method: "get",
  params: {},
  valueKey: "value",
  labelKey: "label",
};

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
      apiOptions: selectApis,
      selectType: {},
    };
  },

  methods: {
    handleOpen(setting) {
      this.selectType = {};
      this.form = { ...JSON.parse(JSON.stringify(initForm)) };
      this.setting = setting;
      this.form = setting.selectSetting ? setting.selectSetting : form;
      if (this.form.api) this.handleTypeChange(this.form.api, true);
      this.dialogVisible = true;
    },
    handleTypeChange(value, init = false) {
      if (!init)
        this.form = { ...JSON.parse(JSON.stringify(initForm)), api: value };

      if (!this.apiOptions[value]) {
        this.selectType = {
          api: value,
          method: "get",
          valueKeyList: ["name", "id"],
          labelKeyList: ["name", "id"],
          valueKey: "id",
          labelKey: "name",
        };
      } else this.selectType = { ...this.apiOptions[value] };
      if (!init) {
        this.form.labelKey = this.selectType.labelKey;
        this.form.valueKey = this.selectType.valueKey;
      }
      if (!this.selectType.paramSettings) {
        this.selectType.paramSettings = [];
      }
      // if (!this.selectType.paramSettings.find((item) => item.key === "other")) {
      //   this.selectType.paramSettings.push({
      //     key: "other",
      //   });
      // }
      if (!this.form) this.form = {};
      if (!this.form.params) this.form.params = {};
      this.selectType.paramSettings.forEach(async (item) => {
        if (item.type === "string") {
          item.options = await this.getOptions(item.apiSetting);
        }
        if (!!this.form.params[item.key]) {
          this.handleParamChange(this.form.params[item.key], item);
          return;
        }
        if (item.type === "string") {
          this.form.params[item.key] = "";
        } else {
          this.form.params[item.key] = [];
        }
      });
    },
    async handleParamChange(value, apiSetting) {
      if (!apiSetting.changeKey) return;
      switch (apiSetting.changeKey) {
        case "masterTable":
          // this.selectType.whereKeyList = ["test1", "test2"];
          const tableItem = apiSetting.options.find(
            (item) => item.name === value
          );
          const tableDetail = await this.GetMasterTablesDetailApi(tableItem.id);
          this.selectType.labelKeyList = tableDetail.fields.map(
            (item) => item.columnName
          );
          this.selectType.valueKeyList = tableDetail.fields.map(
            (item) => item.columnName
          );
          this.selectType.whereKeyList = tableDetail.fields.map(
            (item) => item.columnName
          );
          break;

        default:
          break;
      }
    },
    handleSubmit() {
      this.setting.selectSetting = this.form;
      setOnCreate(this.setting);
      this.dialogVisible = false;
    },
    handleAddParams(paramSetting) {
      this.form.params[paramSetting.key].push({ value: "", key: "" });
    },
    handleDeleteParam(key, index) {
      this.form.params[key].splice(index, 1);
    },
    async getOptions(apiSetting) {
      try {
        // const data = await axios[apiSetting.method](apiSetting.api).then(
        const data = await $api[apiSetting.method](apiSetting.api).then(
          (res) => res.data.data
        );
        return data
          .map((item) => ({
            ...item,
            value: item[apiSetting.valueKey],
            label: item[apiSetting.labelKey],
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
      } catch (error) {
        return [];
      }
    },
    async GetMasterTablesDetailApi(id) {
      try {
        const res = await $api
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
.dialog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
