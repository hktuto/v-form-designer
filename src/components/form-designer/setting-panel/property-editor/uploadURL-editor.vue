<template>
  <div>
    <el-form-item label-width="0">
      <el-divider class="custom-divider">{{
        $t("designer.setting.uploadSetting")
      }}</el-divider>
    </el-form-item>
    <el-button type="text" @click="handleOpen">{{
      $t("render.hint.uploadFormDocpalSetting")
    }}</el-button>
    <el-form-item :label="$t('designer.setting.uploadURL')">
      <el-select
        v-model="optionModel.uploadURL"
        filterable
        clearable
        allow-create
        default-first-option
        @change="handleChange"
      >
        <el-option
          v-for="(item, index) in urls"
          :key="index"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-dialog
      v-model="isVisible"
      :title="$t('render.hint.uploadFormDocpalSetting')"
    >
      <VFormRender ref="formRef" :form-json="formJson" :form-data="optionModel.uploadConfig">
      </VFormRender>
      <template #footer>
        <el-button size="default" @click="isVisible = false">{{
          $t("render.hint.cancel")
        }}</el-button>
        <el-button size="default" type="primary" @click="handleSubmit">{{
          $t("designer.hint.confirm")
        }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import VFormRender from "@/components/form-render/index";
import i18n from "@/utils/i18n";
import uploadJson from "@/extension/upload/index.json";
export default {
  name: "uploadURL-editor",
  mixins: [i18n],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  components: {
    VFormRender,
  },
  data() {
    return {
      urls: [
        "/api/docpal/workflow/upload/file",
        // '/api/docpal/workflow/upload/files',
        "/api/docpal/workflow/files/upload",
      ],
      isVisible: false,
      formJson: uploadJson,
      isDocpal: false
    };
  },
  mounted() {
    const data = localStorage.getItem("docpal-user");
    if (data) {
      this.isDocpal = true;
    }
  },
  methods: {
    handleChange(value) {
      this.optionModel.uploadName =
        value === "/api/docpal/workflow/upload/file" ? "file" : "files";
    },
    handleOpen() {
      this.isVisible = true;
      this.$nextTick(() => {
        this.$refs.formRef.setFormData(this.optionModel.uploadConfig);
      });
    },
    async handleSubmit() {
      const data = await this.$refs.formRef.getFormData();
      this.optionModel.uploadConfig = data;
      this.isVisible = false;
      console.log(this.optionModel);
      console.log(data);
    },
  },
};
</script>

<style scoped></style>
