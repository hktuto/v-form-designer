export const asyncSelectSchema = {
  type: 'async-select',
  icon: 'async-select-widget',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelAlign: '',
    defaultValue: '',
    placeholder: '',
    columnWidth: '200px',
    size: '',
    labelWidth: null,
    labelHidden: false,
    disabled: false,
    hidden: false,
    clearable: true,
    filterable: true,
    allowCreate: false,
    remote: false,
    automaticDropdown: false,  //自动下拉
    multiple: false,
    multipleLimit: 0,
    optionItems: [
    ],
    selectSetting: {
    },
    changeSettings: [],
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
    // noCreatedEvent: true,
    onCreatedSetting: 'async-select',
    onChangeSetting: true,
    onCreated: '',
    onMounted: '',
    onRemoteQuery: '',
    onChange: '',
    onFocus: '',
    onBlur: '',
    onValidate: '',
  },
}

export const ugSelectSchema = {
  type: 'ug-select',
  icon: 'ug-select-widget',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelAlign: '',
    defaultValue: '',
    placeholder: '',
    columnWidth: '200px',
    size: '',
    labelWidth: null,
    labelHidden: false,
    disabled: false,
    hidden: false,
    clearable: true,
    filterable: true,
    allowCreate: false,
    remote: false,
    automaticDropdown: false,  //自动下拉
    multiple: false,
    multipleLimit: 0,
    optionItems: [
    ],
    selectSetting: {
      userApi: '/nuxeo/identity/users',
      userMethod: 'post',
      userValueKey: 'userId',
      userLabelKey: 'username',
      groupApi: '/nuxeo/identity/groups',
      groupMethod: 'post',
      groupValueKey: 'id',
      groupLabelKey: 'name',
    },
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
    // noCreatedEvent: true,
    onCreated: "const _this = this\nasync function getOptions() {\n  const options = [\n        { value: 'user_groups', label: $i18n.t('user_groups'), options: await groupListFilter() },\n        { value: 'user_users', label: $i18n.t('user_users'), options: await userListFilter() }\n  ]\n  _this.loadOptions(options)\n}\nasync function userListFilter () {\n  const data = await $api.post('/nuxeo/identity/users', {}).then(res => res.data.data)\n  return data.reduce((prev,item) => {\n    if (item.userId) prev.push({\n      label: item.username,\n      value: item.userId\n    })\n    return prev\n  }, [])\n}\nasync function groupListFilter () {\n  const data = await $api.post('/nuxeo/identity/groups', {}).then(res => res.data.data)\n  return data.reduce((prev,item) => {\n    if (item.id) prev.push({\n      label: item.name,\n      value: item.id\n    })\n    return prev\n  }, [])\n}\ngetOptions()",
    onMounted: '',
    onRemoteQuery: '',
    onChange: '',
    onCreatedSetting: 'ug-select',
    onChangeSetting: true,
    onFocus: '',
    onBlur: '',
    onValidate: '',
  },
}
