<template>
 <el-tabs v-model="activeName" class="demo-tabs">
  <el-tab-pane label="VFormDesigner" name="VFormDesigner">
      <el-config-provider :locale="elLocale">
        <VFormDesigner ref="vfDesignerRef" :global-dsv="globalDsv"
          :fieldListApi="{
            data: [
              {label: 'aaa', name: 'sss44'},
              {label: 'aaa1', name: 'ss44s'},
              {label: 'aaa2', name: 'ss55s'},
              {label: 'aa3', name: 'sss'},
              {label: 'aa44', name: 's444ss'}
            ]
          }"
          :designer-config="_designerConfig"
          @file-preview="filePreview">
          
          <template #customToolButtons>
            <el-button type="text" @click="doTest">测试btn</el-button>
          </template>
          
        </VFormDesigner>
      </el-config-provider>
  </el-tab-pane>
  <el-tab-pane label="VFormRender" name="VFormRender">
    <VFormRender ref="preForm" :form-json="formJson" :form-data="formData">
      <template #testSlot="scope">testSlot{{scope}}</template>
    </VFormRender>
  </el-tab-pane>

  
 </el-tabs>
</template>

<script>
import VFormDesigner from '../components/form-designer/index.vue'
import VFormRender from '@/components/form-render/index'
import zhCNLang from 'element-plus/lib/locale/lang/zh-cn'
import enUSLang from 'element-plus/lib/locale/lang/en'
import demoJson from './test'
export default {
  name: 'App',
  components: {
    VFormDesigner,VFormRender
  },
  data() {
    return {
      elLocaleMap: {
        'zh-CN': zhCNLang,
        'en-US': enUSLang,
      },

      //全局数据源变量
      globalDsv: {
        testApiHost: 'http://www.test.com/api',
        testPort: 8080,
      },
      formJson: demoJson,
      formData: {},
      activeName: 'VFormDesigner',
      _designerConfig: {
        languageMenu: false,  //是否显示语言切换菜单
        externalLink: false,  //是否显示GitHub、文档等外部链接
        formTemplates: false,  //是否显示表单模板
        eventCollapse: true,  //是否显示组件事件属性折叠面板
        widgetNameReadonly: false,  //禁止修改组件名称

        clearDesignerButton: true,  //是否显示清空设计器按钮
        previewFormButton: true,  //是否显示预览表单按钮
        importJsonButton: true,  //是否显示导入JSON按钮
        exportJsonButton: true,  //是否显示导出JSON器按钮
        exportCodeButton: false,  //是否显示导出代码按钮
        generateSFCButton: false,  //是否显示生成SFC按钮

        toolbarMaxWidth: 450,  //设计器工具按钮栏最大宽度（单位像素）
        toolbarMinWidth: 300,  //设计器工具按钮栏最小宽度（单位像素）

        presetCssCode: '',  //设计器预设CSS样式代码

        resetFormJson: false
      }
    }
  },
  computed: {
    elLocale() {
      let curLocale = localStorage.getItem('v_form_locale') || 'zh-CN'
      return this.elLocaleMap[curLocale]
    },

  },
  methods: {
    doTest() {
      let fieldList = this.$refs.vfDesignerRef.getFieldWidgets(null, true)
      console.log('test', fieldList)
      console.log(this.formJson);
    },
    filePreview(file){
      console.log(45678789, file);
    }
  }
}
</script>

<style lang="scss" scope>
.el-tabs {
  height: 97vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: min-content 1fr;
  :deep(.el-tabs__content) {
    overflow: hidden;
  }
  .el-tab-pane {
    overflow: auto;
    height: 100%;
  }
}
</style>
