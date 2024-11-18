<template>
  <el-dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :title="$t('dataField.setting')"
    :before-close="handleClose"
  >
    <el-button size="small" type="info" icon="el-icon-plus" circle @click="handleAdd" />

    <el-card v-for="(item, index) in dhList" :key="id">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <svg-icon
            class="el-delete"
            icon-class="el-delete"
            @click="handleDelete(index)"
          />
        </div>
      </template>
      <el-row :gutter="20">
        <el-col :span="6"> {{ $t("dhList.fieldName") }} </el-col>
        <el-col :span="6"> {{ $t("dhList.condition") }} </el-col>
        <el-col :span="6"> {{ $t("dhList.value") }} </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-select-v2
            v-model="item.fieldName"
            :options="this.fieldList"
            placeholder="Please select"
            size="default"
            clearable
            @change="(value) => handleChangeFieldName(value, item)"
          />
        </el-col>
        <el-col :span="6">
          <el-select-v2
            v-model="item.condition"
            :options="item.conditionList"
            placeholder="Please select"
            size="default"
            clearable
          />
        </el-col>
        <el-col :span="6">
          <el-switch v-if="item.type === 'switch'" v-model="item.value" size="default" />
          <el-input-number
            v-else-if="item.type === 'number'"
            v-model="item.value"
            controls-position="right"
          />
          <el-input v-else v-model="item.value" size="default" clearable />
        </el-col>
      </el-row>
      <template v-for="key in ['hidden', 'disabled']">
        <el-divider content-position="left">{{ $t(`dhList.${key}List`) }}</el-divider>
        <el-row :gutter="20">
          <el-col :span="6"> {{ $t("dhList.fieldName") }} </el-col>
          <el-col :span="6"> {{ $t("dhList.required") }} </el-col>
          <el-button
            size="small"
            type="info"
            icon="el-icon-plus"
            circle
            @click="handleAddDH(item[key + 'List'])"
          />
        </el-row>
        <el-row :gutter="20" v-for="(dhItem, dhIndex) in item[key + 'List']" :key="id">
          <el-col :span="6">
            <el-select-v2
              v-model="dhItem.fieldName"
              :options="this.fieldList"
              placeholder="Please select"
              size="default"
              clearable
            />
          </el-col>
          <el-col :span="6">
            <el-switch v-model="dhItem.required" size="default" />
          </el-col>
          <svg-icon
            class="el-delete"
            icon-class="el-delete"
            @click="handleDeleteDH(item[key + 'List'], dhIndex)"
          />
        </el-row>
      </template>
    </el-card>
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
import { generateId } from "@/utils/util";
import i18n, { translate } from "@/utils/i18n";
export default {
  components: { SvgIcon },
  inject: ["designer"],
  data() {
    return {
      form: {},
      dialogVisible: false,
      setting: {},
      dhList: [],
      fieldList: [],
      conditionList: [
        { label: "=", value: "===" },
        { label: "!=", value: "!==" },
        { label: ">", value: ">" },
        { label: ">=", value: ">=" },
        { label: "<", value: "<" },
        { label: "<=", value: "<=" },
        // { label: "in", value: "in"},
        // { label: "not in", value: "not in"},
      ],
    };
  },

  methods: {
    handleAdd() {
      this.dhList.push({
        id: generateId(),
        fieldName: "",
        condition: "===",
        value: "",
        hiddenList: [],
        disabledList: [],
        conditionList: [...this.conditionList],
      });
    },
    handleDelete(dhIndex) {
      this.dhList.splice(dhIndex, 1);
    },
    handleAddDH(list) {
      list.push({
        id: generateId(),
        fieldName: "",
        required: false,
      });
    },
    handleDeleteDH(list, dhIndex) {
      list.splice(dhIndex, 1);
    },
    handleOpen(setting) {
      console.log(setting);
      this.fieldList = this.designer.widgetList.map((w) => {
        return {
          type: w.type,
          label: w.options.name,
          value: w.options.name,
        };
      });
      if (setting.dhList) {
        const list = JSON.parse(JSON.stringify(setting.dhList));
        list.forEach((item) => {
          this.handleChangeFieldName(item.fieldName, item);
        });
        this.dhList = list;
      }
      console.log(this.dhList, this.designer.widgetList);

      this.setting = setting;
      this.dialogVisible = true;
    },
    handleSubmit() {
      console.log(this.dhList);
      this.setting.dhList = this.dhList.map((item) => {
        return {
          id: item.id,
          fieldName: item.fieldName,
          condition: item.condition,
          value: item.value,
          hiddenList: item.hiddenList,
          disabledList: item.disabledList,
        };
      });
      this.dialogVisible = false;
    },
    handleChangeFieldName(value, item) {
      console.log(item);
      const field = this.fieldList.find((item) => item.value === value);
      item.type = field.type;
      switch (field.type) {
        case "number":
          item.conditionList = [...this.conditionList];
          break;
        default:
          item.conditionList = [this.conditionList[0], this.conditionList[1]];
          break;
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
