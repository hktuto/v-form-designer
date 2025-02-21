<template>
  <div style="margin-bottom: 0.3rem">
    <el-button type="primary" icon="el-icon-edit" plain round @click="handleClick">
      {{ $t("designer.setting.dynamicConfig") }}</el-button
    >
    <el-dialog
      v-if="dialogVisible"
      v-model="dialogVisible"
      :title="$t('designer.setting.dynamicConfig')"
      :before-close="handleClose"
    >
      <!-- <el-alert
        type="info"
        :title="$t('designer.hint.importJsonHint')"
        description='"title"="Doc Pal"'
        show-icon
        class="alert-padding"
      ></el-alert> -->
      <code-editor :mode="'json'" v-model="jsonContent"></code-editor>
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
  </div>
</template>

<script>
import i18n from "@/utils/i18n";
import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin";
import CodeEditor from "@/components/code-editor/index";
export default {
  name: "dynamicConfig-editor",
  components: { CodeEditor },
  mixins: [i18n, eventMixin],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  data() {
    return {
      eventParams: [],
      dialogVisible: false,
      jsonContent: "",
    };
  },
  methods: {
    handleClick() {
      this.dialogVisible = true;
      this.jsonContent = JSON.stringify(this.optionModel.dynamicConfig, null, "  ");
    },
    handleSubmit() {
      try {
        let newConfig = JSON.parse(this.jsonContent);
        this.optionModel.dynamicConfig = newConfig;
        this.dialogVisible = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
