<template>
  <el-config-provider :locale="elLocale">
  <div id="app">
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
    @file-preview="filePreview">
      <!--
      <template #customToolButtons>
        <el-button type="text" @click="doTest">测试btn</el-button>
      </template>
      -->
    </VFormDesigner>
  </div>
  </el-config-provider>
</template>

<script>
import VFormDesigner from './components/form-designer/index.vue'

import zhCNLang from 'element-plus/lib/locale/lang/zh-cn'
import enUSLang from 'element-plus/lib/locale/lang/en'

export default {
  name: 'App',
  components: {
    VFormDesigner,
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
    },
    filePreview(file){
      console.log(45678789, file);
    }
  }
}
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
</style>
