//import { vfApp } from '@/utils/create-app'

import {
  addDataFieldsWidgetSchema
} from '@/components/form-designer/widget-panel/widgetsConfig'

import { selectGroupSchema } from "@/extension/samples/extension-schema"
import SelectGroupWidget from '@/extension/samples/selectGroup/select-group-widget'


import { asyncSelectSchema } from "@/extension/data-field/extension-schema"
import AsyncSelectWidget from '@/extension/data-field/aysncSelect/async-select-widget'

import {autoCompleteSchema} from "@/extension/samples/extension-schema"
import AutoCompleteWidget from '@/extension/samples/autoComplete/auto-complete-widget'
import {autoCompleteTemplateGenerator} from '@/extension/samples/extension-sfc-generator'

import { nullTemplateGenerator } from '@/extension/samples/extension-sfc-generator'
import {registerFWGenerator} from '@/utils/sfc-generator'
export const loadDataExtension = function (app) {
    loadAsyncSelectWidget(app)
    loadAutoCompleteWidget(app)
}
const loadAsyncSelectWidget = (app) => {
  console.log('??????????');
  /**
 * 加载字段组件步骤：
 * 1. 加载组件Json Schema;
 * 2. 全局注册字段组件，字段组件设计期和运行期共用，故需要仅需注册一个组件；
 * 3. 全局注册属性编辑器组件（基本属性、高级属性、事件属性）；
 * 4. 注册字段组件的代码生成器；
 * 5. 加载完毕。
 */
  addDataFieldsWidgetSchema(asyncSelectSchema)  //加载组件Json Schema
  app.component(AsyncSelectWidget.name, AsyncSelectWidget)  //注册组件
  registerFWGenerator('asyncSelect', nullTemplateGenerator)  //注册字段组件的代码生成器
}
const loadAutoCompleteWidget = (app) => {
  /**
 * 加载字段组件步骤：
 * 1. 加载组件Json Schema;
 * 2. 全局注册字段组件，字段组件设计期和运行期共用，故需要仅需注册一个组件；
 * 3. 全局注册属性编辑器组件（基本属性、高级属性、事件属性）；
 * 4. 注册字段组件的代码生成器；
 * 5. 加载完毕。
 */
  addDataFieldsWidgetSchema(autoCompleteSchema)  //加载组件Json Schema
  app.component(AutoCompleteWidget.name, AutoCompleteWidget)  //注册组件
  registerFWGenerator('autoComplete', autoCompleteTemplateGenerator)  //注册字段组件的代码生成器
}
