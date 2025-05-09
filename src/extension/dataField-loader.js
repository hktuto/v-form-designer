//import { vfApp } from '@/utils/create-app'

import {
  addDataFieldsWidgetSchema
} from '@/components/form-designer/widget-panel/widgetsConfig'

import { asyncSelectSchema, ugSelectSchema } from "@/extension/data-field/extension-schema"
import AsyncSelectWidget from '@/extension/data-field/aysncSelect/async-select-widget'

import UgSelectWidget from './data-field/userAndGroup/ug-select-widget.vue'

import { nullTemplateGenerator } from '@/extension/samples/extension-sfc-generator'
import { registerFWGenerator } from '@/utils/sfc-generator'

import { calendarSchema } from '@/extension/samples/extension-schema'
import CalendarWidget from '@/extension/calendar/calendar-widget'

export const loadDataExtension = function (app) {
  loadAsyncSelectWidget(app)
  loadUgSelectWidget(app)
  loadCalendarWidget(app)
}

const loadCalendarWidget = (app) => {
  addDataFieldsWidgetSchema(calendarSchema)
  app.component(CalendarWidget.name, CalendarWidget)
  registerFWGenerator('calendarWidget', nullTemplateGenerator)
}
const loadAsyncSelectWidget = (app) => {
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

const loadUgSelectWidget = (app) => {
  addDataFieldsWidgetSchema(ugSelectSchema)
  app.component(UgSelectWidget.name, UgSelectWidget)
  registerFWGenerator('asyncSelect', nullTemplateGenerator)
}
