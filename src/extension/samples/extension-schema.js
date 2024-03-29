export const cardSchema = {
  type: 'card',
  category: 'container',
  icon: 'card',
  widgetList: [],
  options: {
    name: '',
    label: 'card',
    hidden: false,
    folded: false,
    showFold: true,
    cardWidth: '100%',
    shadow: 'never',
    customClass: '',
  }
}

export const alertSchema = {
  type: 'alert',
  icon: 'alert',
  formItemFlag: false,
  options: {
    name: '',
    title: 'Good things are coming...',
    type: 'info',
    description: '',
    closable: true,
    closeText: '',
    center: true,
    showIcon: false,
    effect: 'light',
    hidden: false,
    onClose: '',
    customClass: '',
  }
}

export const selectGroupSchema = {
  type: 'select-group',
  icon: 'select-group-field',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelAlign: '',
    defaultValue: '',
    placeholder: '',
    prefixIcon: '',
    columnWidth: '200px',
    size: '',
    labelWidth: null,
    labelHidden: false,
    disabled: false,
    hidden: false,
    clearable: true,
    filterable: false,
    allowCreate: false,
    remote: false,
    automaticDropdown: false,  //自动下拉
    multiple: false,
    multipleLimit: 0,
    optionItems: [
    ],
    required: false,
    requiredHint: '',
    validation: '',
    validationHint: '',
    //-------------------
    customClass: '',  //自定义css类名
    labelIconClass: null,
    labelIconPosition: 'rear',
    labelTooltip: null,
    //-------------------
    onCreated: '',
    onMounted: '',
    onRemoteQuery: '',
    onChange: '',
    onFocus: '',
    onBlur: '',
    onValidate: '',
  }
}
export const jsonEditorSchema = {
  type: 'json-editor',
  icon: 'json-editor-field',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelAlign: '',
    size: '',
    labelWidth: null,
    labelHidden: false,
    readonly: false,
    disabled: false,
    hidden: false,
    required: false,
    requiredHint: '',
    //-------------------
    customClass: '',  //自定义css类名
    //-------------------
    onCreated: '',
    onMounted: '',
  },
}
export const autoCompleteSchema = {
  type: 'auto-complete',
  icon: 'autocomplete',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelZh: '',
    labelAlign: '',
    type: 'text',
    defaultValue: '',
    placeholder: '',
    columnWidth: '200px',
    size: '',
    labelWidth: null,
    labelHidden: false,
    readonly: false,
    disabled: false,
    hidden: false,
    clearable: true,
    showPassword: false,
    required: false,
    requiredHint: '',
    validation: '',
    validationHint: '',
    optionItems: [],
    //-------------------
    customClass: '',  //自定义css类名
    labelIconClass: null,
    labelIconPosition: 'rear',
    labelTooltip: null,
    minLength: null,
    maxLength: null,
    showWordLimit: false,
    prefixIcon: '',
    suffixIcon: '',
    appendButton: false,
    appendButtonText: '',
    prependText: '',
    appendButtonDisabled: false,
    buttonIcon: 'el-icon-search',
    //-------------------
    onMounted: '',
    onChange: '',
    onQuerySearchAsync: '',
    onInput: ''
  },
}
