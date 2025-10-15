const GROUP_API = '/nuxeo/identity/groups'
const USER_API = '/nuxeo/identity/member'
const CONTACT_API = '/docpal/contactGroup/list'
const MASTER_TABLE_COLUMN_API = '/docpal/master/tables/record/page/nonPermission'
const MASTER_TABLE_API = '/docpal/master/tables?type=all'
const CASE_API = '/docpal/case/types?deployed=true'
const CASE_INFO_API = '/docpal/case/types/records/list'
export const selectApis = {
  masterTableColumn: {
    method: 'post',
    api: MASTER_TABLE_COLUMN_API,
    filterKey: 'masterTableColumn',
    paramSettings: [
      {
        key: 'name',
        type: 'string',
        changeKey: 'masterTable',
        apiSetting: {
          api: MASTER_TABLE_API,
          method: 'get',
          labelKey: 'name',
          valueKey: 'name',
        }
      },
      {
        key: 'where',
        type: 'object'
      },
    ],
    valueKey: 'id',
    labelKey: 'name',
  },
  caseInfo: {
    method: 'get',
    api: CASE_INFO_API,
    filterKey: 'caseInfo',
    paramSettings: [
      {
        key: 'caseTypeId',
        type: 'string',
        changeKey: 'caseInfo',
        apiSetting: {
          api: CASE_API,
          method: 'get',
          labelKey: 'name',
          valueKey: 'id',
        }
      },
      {
        key: 'where',
        type: 'object'
      },
    ],
    valueKey: 'id',
    labelKey: 'name',
  },
  masterTable: {
    api: MASTER_TABLE_API,
    method: 'get',
    valueKeyList: ['name', 'id'],
    labelKeyList: ['name', 'id'],
    valueKey: 'id',
    labelKey: 'name',
  },
  // documentTable: {
  //   api: 'documentTable',
  //   valueKeyList: ['id'],
  //   labelKeyList: ['name', 'id'],
  //   valueKey: 'id',
  //   labelKey: 'name',
  // },
  user: {
    api: USER_API,
    valueKeyList: ['username', 'userId'],
    labelKeyList: ['username', 'userId'],
    valueKey: 'userId',
    labelKey: 'username',
    filterKey: 'user',
    paramSettings: [{
      key: 'groupName',
      type: 'string',
      apiSetting: {
        api: GROUP_API,
        method: 'post',
        labelKey: 'name',
        valueKey: 'id',
      },
    }]
  },
  group: {
    api: GROUP_API,
    method: 'post',
    valueKeyList: ['id', 'name'],
    labelKeyList: ['id', 'name'],
    valueKey: 'id',
    labelKey: 'name',
  },
  contact: {
    api: CONTACT_API,
    method: 'get',
    valueKeyList: ['id', 'name'],
    labelKeyList: ['id', 'name'],
    valueKey: 'id',
    labelKey: 'name',
  }
}
