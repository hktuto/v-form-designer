<template>
  <el-dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :title="$t('dataField.setting')"
    :before-close="handleClose"
    class="big"
  >
    <el-button size="small" type="info" icon="el-icon-plus" circle @click="handleAdd" />

    <el-card v-for="(item, index) in dhList" :key="id">
      <svg-icon
        class="el-delete icon-absolute"
        icon-class="el-delete"
        @click="handleDelete(index)"
      />
      <el-row :gutter="20">
        <el-col :span="6"> {{ $t("dhList.fieldName") }} </el-col>
        <el-col :span="6"> {{ $t("dhList.condition") }} </el-col>
        <el-col :span="6"> {{ $t("dhList.value") }} </el-col>
      </el-row>
      <template v-for="(cItem, cIndex) in item.fieldConditionList">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select-v2
              v-model="cItem.fieldName"
              :options="this.fieldList"
              :placeholder="$t('render.hint.selectPlaceholder')"
              size="default"
              clearable
              @change="(value) => handleChangeFieldName(value, cItem)"
            />
          </el-col>
          <el-col :span="6">
            <el-select-v2
              v-model="cItem.condition"
              :options="cItem.conditionList"
              placeholder="Please select"
              size="default"
              clearable
              :placeholder="$t('render.hint.selectPlaceholder')"
            />
          </el-col>
          <el-col :span="6">
            <el-switch
              v-if="cItem.type === 'switch'"
              v-model="cItem.value"
              size="default"
            />
            <el-input-number
              v-else-if="cItem.type === 'number'"
              v-model="cItem.value"
              controls-position="right"
            />
            <el-input v-else v-model="cItem.value" size="default" clearable />
          </el-col>
          <el-button
            v-if="cIndex !== 0"
            type="primary"
            text
            @click="handleDeleteFieldCondition(cIndex, item)"
          >
            {{ $t("common_delete") }}
          </el-button>
          <el-button
            v-if="cIndex === item.fieldConditionList.length - 1"
            type="primary"
            text
            @click="handleAddFieldCondition(item)"
            >{{ $t("button.add") }}
          </el-button>
        </el-row>
      </template>
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
              :placeholder="$t('render.hint.selectPlaceholder')"
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
    handleAddFieldCondition(item) {
      item.fieldConditionList.push({
        fieldName: "",
        condition: "===",
        value: "",
        conditionList: [...this.conditionList],
      });
    },
    handleDeleteFieldCondition(fcIndex, item) {
      item.fieldConditionList.splice(fcIndex, 1);
    },
    handleAdd() {
      this.dhList.push({
        id: generateId(),
        fieldConditionList: [
          {
            fieldName: "",
            condition: "===",
            value: "",
            conditionList: [...this.conditionList],
          },
        ],
        hiddenList: [],
        disabledList: [],
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
          if (item.fieldConditionList) {
            item.fieldConditionList.forEach((fcItem) => {
              this.handleChangeFieldName(fcItem.fieldName, fcItem);
            });
          }
        });
        this.dhList = list;
      }
      this.setting = setting;
      this.dialogVisible = true;
    },
    handleSubmit() {
      this.setting.dhList = this.dhList.map((item) => {
        return {
          id: item.id,
          fieldConditionList: item.fieldConditionList.map((fcItem) => {
            return {
              fieldName: fcItem.fieldName,
              condition: fcItem.condition,
              value: fcItem.value,
              // conditionList: fcItem.conditionList,
            };
          }),
          hiddenList: item.hiddenList,
          disabledList: item.disabledList,
        };
      });
      this.dialogVisible = false;
    },
    handleChangeFieldName(value, item) {
      const field = this.fieldList.find((item) => item.value === value);
      if (!field) {
        item.conditionList = [...this.conditionList];
        return;
      }
      item.type = field.type;
      switch (field.type) {
        case "number":
          item.value = item.value || 0;
          item.conditionList = [...this.conditionList];
          break;
        case "switch":
          item.condition = "===";
          item.value = item.value || true;
          item.conditionList = [this.conditionList[0], this.conditionList[1]];
          break;
        default:
          item.value = item.value || "";
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
.el-card {
  position: relative;
}
.icon-absolute {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 1;
}
</style>
