<!--
/**
 * author: vformAdmin
 * email: vdpadmin@163.com
 * website: https://www.vform666.com
 * date: 2021.08.18
 * remark: 如果要分发VForm源码，需在本文件顶部保留此文件头信息！！
 */
-->

<template>
  <container-wrapper :designer="designer" :widget="widget" :parent-widget="parentWidget" :parent-list="parentList"
                     :index-of-parent-list="indexOfParentList">

    <div :key="widget.id" class="sub-object-container"
         :class="{'selected': selected}" @click.stop="selectWidget(widget)">
      <el-form label-position="top">
        <div class="sub-object-content">
          <draggable :list="widget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 200}"
                     tag="transition-group" :component-data="{name: 'fade'}"
                     handle=".drag-handler"
                     @add="(evt) => onSubObjectDragAdd(evt, widget.widgetList)"
                     @end="onSubObjectDragEnd"
                     @update="onContainerDragUpdate" :move="checkContainerMove">
            <template #item="{ element: subWidget, index: swIdx }">
              <div class="sub-object-item">
                <component :is="subWidget.type + '-widget'" :field="subWidget" :designer="designer" :key="subWidget.id"
                              :parent-list="widget.widgetList" :index-of-parent-list="swIdx" :parent-widget="widget"
                              :design-state="true" :sub-object-item-flag="true"></component>
              </div>
            </template>
          </draggable>
        </div>
      </el-form>
    </div>

  </container-wrapper>
</template>

<script>
  import i18n from "@/utils/i18n"
  import containerMixin from "@/components/form-designer/form-widget/container-widget/containerMixin"
  import ContainerWrapper from "@/components/form-designer/form-widget/container-widget/container-wrapper"
  import FieldComponents from '@/components/form-designer/form-widget/field-widget/index'
  import refMixinDesign from "@/components/form-designer/refMixinDesign"

  export default {
    name: "sub-object-widget",
    componentName: 'ContainerWidget',
    mixins: [i18n, containerMixin, refMixinDesign],
    inject: ['refList'],
    components: {
      ContainerWrapper,
      ...FieldComponents,
    },
    props: {
      widget: Object,
      parentWidget: Object,
      parentList: Array,
      indexOfParentList: Number,
      designer: Object,
    },
    computed: {
      selected() {
        return this.widget.id === this.designer.selectedId
      },

      customClass() {
        return this.widget.options.customClass || ''
      },

    },
    watch: {
      //
    },
    created() {
      this.initRefList()
    },
    mounted() {
      //
    },
    methods: {

      onSubObjectDragAdd(evt, subList) {
        const newIndex = evt.newIndex
        if (!!subList[newIndex]) {
          this.designer.setSelected( subList[newIndex] )
        }

        this.designer.emitHistoryChange()
        this.designer.emitEvent('field-selected', this.widget)
      },

      onSubObjectDragEnd(evt) {
        //
      },

    }
  }
</script>

<style lang="scss" scoped>
  .sub-object-container {
    //width: 100%;
    padding: 8px;
    border: 1px dashed #336699;

    :deep(.sub-object-content) {
      min-height: 68px;

      div.sub-object-item {
        display: block;
        margin-bottom: 8px;
        //width: 100%;
      }
    }

    :deep(.ghost) {
      content: '';
      font-size: 0;
      //height: 3px;
      height: 74px;
      width: 100%;
      box-sizing: border-box;
      display: block;
      background: $--color-primary;
      border: 2px solid $--color-primary;
      outline-width: 0;
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
  }

  .sub-object-container.selected {
    outline: 2px solid $--color-primary !important;
  }

</style>
