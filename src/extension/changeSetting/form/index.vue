<script>
import { translate, changeLocale } from "@/utils/i18n";
import SvgIcon from "@/components/svg-icon/index";
import { apiList } from "@/extension/changeSetting/apiList";
const requiredRule = {
  required: true,
  message: translate("render.hint.fieldRequired"),
  trigger: "blur",
};
export default {
  components: { SvgIcon },
  props: {
    form: {
      type: Object,
      required: true,
    },
    widgetList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectApiList: apiList,
      selectApi: {},
      hasExecuted: false,
    };
  },
  mounted() {},
  methods: {
    handleDelete() {
      if (!!this.form.fieldName) {
        this.$emit("setWidgetDisabled", this.form.fieldName, false);
      }
      this.$emit("delete");
    },

    handleFieldNameChange(value, old) {
      console.log(value, old);
    },
    handleApiChange(value, init = false) {
      if (!this.selectApiList[value]) {
        this.selectApi = {
          api: value,
          method: "get",
          valueKeyList: ["name", "id"],
          labelKeyList: ["name", "id"],
          valueKey: "id",
          labelKey: "name",
        };
      } else this.selectApi = { ...this.selectApiList[value] };
      if (!init) {
        this.form.labelKey = this.selectApi.labelKey;
        this.form.valueKey = this.selectApi.valueKey;
        this.form.method = this.selectApi.method;
      }
      if (!this.selectApi.paramSettings) {
        this.selectApi.paramSettings = [];
      }
      if (!this.form.params) this.form.params = {};
      this.selectApi.paramSettings.forEach(async (item) => {
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
    async handleParamChange(value, apiSetting) {
      if (!apiSetting.changeKey) return;
      switch (apiSetting.changeKey) {
        case "masterTable":
          // this.selectApi.whereKeyList = ["test1", "test2"];
          const tableItem = apiSetting.options.find((item) => item.name === value);
          if (!tableItem) return;
          const tableDetail = await this.GetMasterTablesDetailApi(tableItem.id);
          this.selectApi.labelKeyList = tableDetail.fields.map((item) => item.columnName);
          this.selectApi.valueKeyList = tableDetail.fields.map((item) => item.columnName);
          this.selectApi.whereKeyList = tableDetail.fields.map((item) => item.columnName);
          break;
        default:
          break;
      }
    },
  },
  watch: {
    "form.api": {
      deep: true,
      immediate: true,
      handler(val) {
        if (!!val && !this.hasExecuted) {
          this.hasExecuted = true;
          this.handleApiChange(val, true);
        }
      },
    },
    "form.fieldName": {
      deep: true,
      immediate: true,
      handler(val, oldVal) {
        this.$nextTick(() => {
          if (!!val) {
            this.$emit("setWidgetDisabled", val, true);
          }
          if (!!oldVal) {
            this.$emit("setWidgetDisabled", oldVal, false);
          }
        });
      },
    },
  },
};
</script>
<template>
  <el-card>
    <el-form-item
      prop="api"
      :label="$t('designer.setting.widgetName')"
      :rules="requiredRule"
    >
      <el-select
        size="default"
        v-model="form.fieldName"
        style="width: 240px"
        clearable
        allow-create
        filterable
        @change="handleFieldNameChange"
      >
        <el-option
          v-for="(item, index) in widgetList"
          :key="item.name"
          :label="item.name"
          :value="item.name"
          :disabled="item.disabled"
        />
      </el-select>
    </el-form-item>
    <el-row>
      <el-col :span="8">
        <el-form-item prop="api" :label="$t('dataField.api')" :rules="requiredRule">
          <el-select
            size="default"
            v-model="form.api"
            style="width: 240px"
            clearable
            allow-create
            filterable
            @change="handleApiChange"
          >
            <el-option
              v-for="(item, key) in selectApiList"
              :key="key"
              :label="$t(`dataField.type.${key}`)"
              :value="key"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
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
              v-for="(item, index) in selectApi.labelKeyList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
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
              v-for="(item, index) in selectApi.valueKeyList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-divider content-position="left">{{ $t("dataField.params") }}</el-divider>
    <div v-for="(item, index) in selectApi.paramSettings" :key="key">
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
          @change="(value) => handleParamChange(value, item)"
        >
          <el-option label="Change value" value="currentValue" />
          <el-option
            v-for="(oItem, oIndex) in widgetList"
            :key="`widgetValue_${oItem.name}`"
            :label="`${oItem.name} value`"
            :value="`widgetValue_${oItem.name}`"
          />
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
              v-if="!selectApi[`${[item.key]}KeyList`]"
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
                v-for="(oItem, oIndex) in selectApi[`${[item.key]}KeyList`]"
                :key="oItem"
                :label="oItem"
                :value="oItem"
              />
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select
              size="default"
              v-model="form.params[item.key][paramIndex].value"
              clearable
              filterable
              allow-create
              :placeholder="$t('dataField.apiValue')"
            >
              <!-- field change value -->
              <el-option label="Change value" value="currentValue" />
              <el-option
                v-for="(oItem, oIndex) in widgetList"
                :key="`widgetValue_${oItem.name}`"
                :label="`${oItem.name} value`"
                :value="`widgetValue_${oItem.name}`"
              />
            </el-select>
          </el-col>
          <svg-icon
            class="el-delete"
            icon-class="el-delete"
            @click="handleDeleteParam(item.key, paramIndex)"
          />
        </el-row>
      </template>
    </div>
    <svg-icon class="absolute" icon-class="el-delete" @click="handleDelete" />
  </el-card>
</template>
<style lang="scss" scoped>
.el-card {
  :deep(.el-card__body) {
    position: relative;
  }
}
.absolute {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
