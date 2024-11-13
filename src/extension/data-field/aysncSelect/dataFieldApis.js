const GROUP_API = '/nuxeo/identity/groups'
const USER_API = '/nuxeo/identity/member'
const MASTER_TABLE_COLUMN_API = '/docpal/master/tables/record/page/nonPermission'
const MASTER_TABLE_API = '/docpal/master/tables?type=all'
export const selectApis = {
  masterTableColumn: {
    method: 'post',
    api: MASTER_TABLE_COLUMN_API,
    paramSettings: [
      {
        key: 'where',
        type: 'object'
      },
      {
        key: 'name',
        type: 'string',
        apiSetting: {
          api: MASTER_TABLE_API,
          method: 'get',
          labelKey: 'name',
          valueKey: 'id',
        }
      }
    ],
    valueKey: 'id',
    labelKey: 'name',
  },
  masterTable: {
    api: MASTER_TABLE_API,
    valueKeyList: ['id'],
    labelKeyList: ['name', 'id'],
    valueKey: 'id',
    labelKey: 'name',
  },
  documentTable: {
    api: 'documentTable',
    valueKeyList: ['id'],
    labelKeyList: ['name', 'id'],
    valueKey: 'id',
    labelKey: 'name',
  },
  user: {
    api: USER_API,
    valueKeyList: ['id'],
    labelKeyList: ['name', 'id'],
    valueKey: 'id',
    labelKey: 'name',
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
  }
}
