<template>
  <form-item-wrapper
    :designer="designer"
    :field="field"
    :rules="rules"
    :design-state="designState"
    :parent-widget="parentWidget"
    :parent-list="parentList"
    :index-of-parent-list="indexOfParentList"
    :sub-form-row-index="subFormRowIndex"
    :sub-form-col-index="subFormColIndex"
    :sub-form-row-id="subFormRowId"
  >
    <el-upload
      ref="fieldEditor"
      :disabled="field.options.disabled"
      :style="styleVariables"
      class="dynamicPseudoAfter"
      :action="realUploadURL"
      :name="field.options.uploadName"
      :headers="uploadHeaders"
      :data="uploadData"
      :with-credentials="field.options.withCredentials"
      :multiple="field.options.multipleSelect"
      :file-list="fileList"
      :show-file-list="field.options.showFileList"
      :class="{ hideUploadDiv: uploadBtnHidden }"
      :limit="field.options.limit"
      :on-exceed="handleFileExceed"
      :before-upload="beforeFileUpload"
      :on-success="handleFileUpload"
      :on-error="handleUploadError"
      :on-change="handleOnChange"
      :on-remove="handleOnRemove"
    >
      <template #tip>
        <div class="el-upload__tip" v-if="!!field.options.uploadTip">
          {{ $t(field.options.uploadTip) }}
        </div>
      </template>
      <template #default>
        <el-dropdown @command="handleChannelSelect">
          <span class="el-dropdown-link" @click.stop> + File... </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="local">从本地上传</el-dropdown-item>
              <el-dropdown-item command="external"
                >从其他网站获取</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- <svg-icon icon-class="el-plus" />
        <i class="el-icon-plus avatar-uploader-icon"> </i> -->
      </template>
      <template #file="{ file }">
        <div class="upload-file-list">
          <span
            class="upload-file-name"
            :title="file.name"
            @click="handlePreview(file)"
          >
            {{ file.name }}
            <svg-icon
              v-if="file.status === 'success'"
              style="color: var(--app-primary-color, var(--el-color-success))"
              class="el-icon--right"
              icon-class="el-circle-check"
            />
            <svg-icon
              v-else-if="file.status === 'fail'"
              style="color: var(--app-danger-color, var(--el-color-danger))"
              class="el-icon--right"
              icon-class="el-fail"
            />
            <svg-icon
              v-else-if="file.status === 'uploading'"
              class="el-icon--right file-action loading"
              icon-class="el-loading"
            />
          </span>
          <!-- <a :href="file.url" download="" target="_blank">
            <span class="el-icon-download file-action" :title="$t('render.hint.downloadFile')">
              <svg-icon icon-class="el-download" />
            </span>
          </a> -->
          <span
            v-if="!field.options.disabled && file.status !== 'uploading'"
            class="file-action"
            :title="$t('render.hint.removeFile')"
            @click="removeUploadFile(file.name, file.url, file.uid)"
          >
            <svg-icon icon-class="el-delete" />
          </span>
        </div>
      </template>
    </el-upload>

    <!-- 外部文件对话框 -->
    <el-dialog v-model="showExternalDialog" title="从其他网站获取文件">
      <slot name="uploadFromDocpal"></slot>
      <template #footer>
        <el-button @click="showExternalDialog = false">取消</el-button>
        <el-button type="primary" @click="handleExternalFileConfirm">
          确定
        </el-button>
      </template>
    </el-dialog>
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from "./form-item-wrapper";
import emitter from "@/utils/emitter";
import i18n, { translate } from "@/utils/i18n";
import { deepClone, evalFn } from "@/utils/util";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";
import SvgIcon from "@/components/svg-icon/index";

let selectFileText = "'" + translate("render.hint.selectFile") + "'";

export default {
  name: "file-upload-widget",
  componentName: "FieldWidget", //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,

    designState: {
      type: Boolean,
      default: false,
    },

    subFormRowIndex: {
      /* 子表单组件行索引，从0开始计数 */ type: Number,
      default: -1,
    },
    subFormColIndex: {
      /* 子表单组件列索引，从0开始计数 */ type: Number,
      default: -1,
    },
    subFormRowId: {
      /* 子表单组件行Id，唯一id且不可变 */ type: String,
      default: "",
    },
  },
  components: {
    SvgIcon,
    FormItemWrapper,
  },
  data() {
    return {
      oldFieldValue: null, //field组件change之前的值
      fieldModel: [],
      rules: [],

      uploadHeaders: {},
      uploadData: {
        key: "", //七牛云上传文件名
        //token: '',  //七牛云上传token

        //policy: '',  //又拍云上传policy
        //authorization: '',  //又拍云上传签名
      },
      fileList: [], //上传文件列表
      uploadBtnHidden: false,

      styleVariables: {
        "--select-file-action": selectFileText,
      },
      uploadChannel: "local", // 'local' or 'external'
      showExternalDialog: false,
      externalFileUrl: "",
    };
  },
  computed: {
    realUploadURL() {
      let uploadURL = this.field.options.uploadURL;
      if (
        !!uploadURL &&
        (uploadURL.indexOf("DSV.") > -1 || uploadURL.indexOf("DSV[") > -1)
      ) {
        let DSV = this.getGlobalDsv();
        console.log("test DSV: ", DSV); //防止DSV被打包工具优化！！！
        return evalFn(this.field.options.uploadURL, DSV);
      }

      return this.field.options.uploadURL;
    },
  },
  beforeCreate() {
    /* 这里不能访问方法和属性！！ */
  },

  created() {
    /* 注意：子组件mounted在父组件created之后、父组件mounted之前触发，故子组件mounted需要用到的prop
         需要在父组件created中初始化！！ */
    this.handleUploadHeaders();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();

    this.handleOnCreated();
  },

  mounted() {
    this.handleOnMounted();
  },

  beforeUnmount() {
    this.unregisterFromRefList();
  },

  methods: {
    handleFileExceed() {
      let uploadLimit = this.field.options.limit;
      this.$message.warning(
        this.$t("render.hint.uploadExceed").replace(
          "${uploadLimit}",
          uploadLimit
        )
      );
    },

    beforeFileUpload(file) {
      if (!this.field.options.uploadName)
        this.field.options.uploadName = "files";
      if (
        !!this.field.options &&
        !!this.field.options.fileTypes &&
        this.field.options.fileTypes.length > 0
      ) {
        let fileTypeCheckResult = false;
        let extFileName = file.name.substring(file.name.lastIndexOf(".") + 1);
        if (!!this.field.options && !!this.field.options.fileTypes) {
          let uploadFileTypes = this.field.options.fileTypes;
          if (uploadFileTypes.length > 0) {
            fileTypeCheckResult = uploadFileTypes.some((ft) => {
              return extFileName.toLowerCase() === ft.toLowerCase();
            });
          }
        }
        if (!fileTypeCheckResult) {
          this.$message.error(
            this.$t("render.hint.unsupportedFileType") + extFileName
          );
          return false;
        }
      }

      let fileSizeCheckResult = false;
      if (!!this.field.options.fileMaxSize) {
        fileSizeCheckResult =
          file.size / 1024 / 1024 <= this.field.options.fileMaxSize;
        if (!fileSizeCheckResult) {
          this.$message.error(
            this.i18nt("render.hint.fileSizeExceed") +
              this.field.options.fileMaxSize +
              "MB"
          );
          return false;
        }
      }
      if (this.field.options.uploadURL === "/api/docpal/workflow/upload/file") {
        const params = {
          properties: {
            "dc:title": file.name,
          },
          type: "File",
        };
        this.uploadData = {
          document: JSON.stringify(params),
          nonPermission: true,
        };
      } else {
        this.uploadData = {
          key: file.name,
        };
      }
      return this.handleOnBeforeUpload(file);
    },

    handleOnBeforeUpload(file) {
      if (!!this.field.options.onBeforeUpload) {
        try {
          let bfFunc = new Function("file", this.field.options.onBeforeUpload);
          let result = bfFunc.call(this, file);
          if (typeof result === "boolean") {
            return result;
          }
        } catch (error) {
          console.error(error);
        }
        return true;
      }

      return true;
    },

    updateFieldModelAndEmitDataChangeForUpload(
      fileList,
      customResult,
      defaultResult
    ) {
      let oldValue = deepClone(this.fieldModel);
      if (!!customResult && !!customResult.name && !!customResult.url) {
        this.fieldModel.push({
          name: customResult.name,
          url: customResult.url,
        });
      } else if (
        !!defaultResult &&
        !!defaultResult.name &&
        !!defaultResult.url
      ) {
        this.fieldModel.push({
          name: defaultResult.name,
          url: defaultResult.url,
        });
      } else {
        this.fieldModel = deepClone(fileList);
      }

      this.syncUpdateFormModel(this.fieldModel);
      this.emitFieldDataChange(this.fieldModel, oldValue);
    },

    handleFileUpload(res, file, fileList) {
      if (file.status === "success") {
        let customResult = null;
        if (!!this.field.options.onUploadSuccess) {
          try {
            let mountFunc = new Function(
              "result",
              "file",
              "fileList",
              this.field.options.onUploadSuccess
            );
            customResult = mountFunc.call(this, res, file, fileList);
          } catch (error) {
            console.error(error);
          }
        }

        this.updateFieldModelAndEmitDataChangeForUpload(
          fileList,
          customResult,
          res
        );
        if (!!customResult && !!customResult.name) {
          file.name = customResult.name;
        } else {
          file.name = file.name || res.name || res.fileName || res.filename;
        }
        if (!!customResult && !!customResult.url) {
          file.url = customResult.url;
        } else {
          file.url = file.url || res.url;
        }
        this.fileList = deepClone(fileList);
        this.uploadBtnHidden = fileList.length >= this.field.options.limit;
      }
    },

    updateFieldModelAndEmitDataChangeForRemove(deletedFileIdx, fileList) {
      let oldValue = deepClone(this.fieldModel);
      this.fieldModel.splice(deletedFileIdx, 1);
      this.syncUpdateFormModel(this.fieldModel);
      this.emitFieldDataChange(this.fieldModel, oldValue);
    },

    removeUploadFile(fileName, fileUrl, fileUid) {
      let foundIdx = -1;
      let foundFile = null;
      this.fileList.forEach((file, idx) => {
        if (
          file.name === fileName &&
          (file.url === fileUrl || (!!fileUid && file.uid === fileUid))
        ) {
          foundIdx = idx;
          foundFile = file;
        }
      });

      if (foundIdx >= 0) {
        this.fileList.splice(foundIdx, 1);
        this.updateFieldModelAndEmitDataChangeForRemove(
          foundIdx,
          this.fileList
        );
        this.uploadBtnHidden = this.fileList.length >= this.field.options.limit;

        if (!!this.field.options.onFileRemove) {
          try {
            let customFn = new Function(
              "file",
              "fileList",
              this.field.options.onFileRemove
            );
            customFn.call(this, foundFile, this.fileList);
          } catch (error) {
            console.error(error);
          }
        }
      }
      setTimeout(() => {
        this.field.options.totalFileList =
          this.field.options.totalFileList > 0
            ? this.field.options.totalFileList - 1
            : 0;
      }, 10);
    },

    handleUploadError(err, file, fileList) {
      if (!!this.field.options.onUploadError) {
        try {
          let customFn = new Function(
            "error",
            "file",
            "fileList",
            this.field.options.onUploadError
          );
          customFn.call(this, err, file, fileList);
        } catch (error) {
          console.error(error);
        }
      } else {
        this.$message({
          message: this.$t("render.hint.uploadError") + err,
          duration: 3000,
          type: "error",
        });
      }
    },
    handlePreview(file) {
      this.emit$("filePreview", { file, options: this.field.options });
      this.dispatch("VFormRender", "filePreview", {
        file,
        options: this.field.options,
      });
    },
    handleOnChange(file, fileList) {
      if (!!file) this.field.options.totalFileList = fileList?.length || 0;
    },
    handleUploadHeaders() {
      const cookieToken = localStorage.getItem("token");
      if (cookieToken)
        this.uploadHeaders = { Authorization: `Bearer ${cookieToken}` };
    },
    getCookie(name) {
      var strCookies = document.cookie;
      var array = strCookies.split(";");
      for (var i = 0; i < array.length; i++) {
        var item = array[i].split("=");
        if (item[0].replace(" ", "") === name) {
          return item[1];
        }
      }
      return null;
    },
    handleChannelSelect(channel) {
      if (channel === "local") {
        this.uploadChannel = "local";
        // 触发 el-upload 选择文件
        this.$refs.fieldEditor &&
          this.$refs.fieldEditor.$el.querySelector("input").click();
      } else if (channel === "external") {
        this.uploadChannel = "external";
        this.showExternalDialog = true;
      }
    },
    async handleExternalFileConfirm() {
      // 新增：尝试调用插槽组件的 getData 方法
      let externalFileList = null;
      if (this.$refs.uploadFromDocpal && typeof this.$refs.uploadFromDocpal.getData === 'function') {
        externalFileList = await this.$refs.uploadFromDocpal.getData();
        console.log('uploadFromDocpal.getData():', this.$refs, {data});
      }
      // 原有逻辑
      if (externalFileList) {
        // 伪造 file 对象，加入 fileList
        externalFileList.forEach(file => {
          this.fileList.push({
            name: file.name,
            id: file.id,
            status: "success",
          });
        });
        this.showExternalDialog = false;
        console.log('this.fileList:', this.fileList);
        
        // 同步到 fieldModel
        this.updateFieldModelAndEmitDataChangeForUpload(
          this.fileList,
          null,
          null
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/global.scss"; /* form-item-wrapper已引入，还需要重复引入吗？ */

.full-width-input {
  width: 100% !important;
}

.dynamicPseudoAfter :deep(.el-upload.el-upload--text) {
  color: $--color-primary;
  font-size: 12px;
  .el-icon-plus:after {
    content: var(--select-file-action);
  }
}

.hideUploadDiv {
  :deep(div.el-upload--picture-card) {
    /* 隐藏最后的图片上传按钮 */
    display: none;
  }

  :deep(div.el-upload--text) {
    /* 隐藏最后的文件上传按钮 */
    display: none;
  }

  :deep(div.el-upload__tip) {
    /* 隐藏最后的文件上传按钮 */
    display: none;
  }
}

.upload-file-list {
  font-size: 12px;

  .file-action {
    color: $--color-primary;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>
