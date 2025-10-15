const MASTER_TABLE_COLUMN_API = '/docpal/master/tables/record/page/nonPermission'
const MASTER_TABLE_API = '/docpal/master/tables?type=all'

const CASE_API = '/docpal/case/types?deployed=true'
const CASE_INFO_API = '/docpal/case/types/records/list'
export const apiList = {
  masterTableColumn: {
    method: 'post',
    api: MASTER_TABLE_COLUMN_API,
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
        type: 'multi-select',
      },
    ],
    valueKey: 'id',
    labelKey: 'name',
    labelKeyList: ['name', 'id'],
    valueKeyList: ['id', 'name'],
  },
  caseInfo: {
    method: 'post',
    api: CASE_INFO_API,
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
        type: 'multi-select',
      },
    ],
    valueKey: 'id',
    labelKey: 'name',
    labelKeyList: ['name', 'id'],
    valueKeyList: ['id', 'name'],
  }
}