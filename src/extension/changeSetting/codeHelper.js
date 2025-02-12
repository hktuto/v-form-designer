export function generateChangeCode(changeFieldList) {
  const _changeFieldList= JSON.parse(JSON.stringify(changeFieldList));

  const mf = getMasterTableRecordCode()
  const code = _changeFieldList.reduce((prev,item) => {
    const funCode = getFunctionCode(item)
    prev += funCode
    return prev
  },'const _this = this' + mf)
  return code
}

function getMasterTableRecordCode() {
  return `\nasync function get_masterTableColumn(params,labelKey='name', valueKey='id') {\n  try {\n    const data = await $api.post('/docpal/master/tables/record/page/nonPermission', params).then(res => res.data.data)\n    return data.reduce((prev, item) => {\n      if(!item[valueKey] || !item[labelKey]) return prev \n      const resultItem = {\n        value: item[valueKey],\n        label: item[labelKey] || '' \n      }\n      prev.push(resultItem) \n      return prev\n    }, []).sort((a,b)=> (a.label.localeCompare(b.label) ))\n  } catch (e) {}\n}\n`
}
function getFunctionCode(setting) {
  const paramsStr = getParamsStr(setting)
  const funName = `init_${setting.fieldName}`.replace(/ /, '')
  return `async function ${funName}() {\n  const options = await get_${setting.api}(${paramsStr},'${setting.labelKey}','${setting.valueKey}')\n  const widgetRef = _this.getWidgetRef('${setting.fieldName}') \n  if(!!widgetRef) widgetRef.loadOptions(options)\n  if(options.length === 1) {\n    widgetRef.setValue( options[0]['${setting.valueKey}'])\n  }\n  else widgetRef.setValue(null)\n}\n${funName}()\n`
}
function getParamsStr(setting) {
  const params = setting.params;
  const apiMethod = setting.method || "post";
  Object.keys(params).forEach((key) => {
    if (params[key] instanceof Array) {
      if (params[key].length === 0) {
        delete params[key];
        return;
      }
      const data = [...params[key]];
      params[key] = {};
      data.forEach((item) => {
        if (item.value) params[key][item.key] = item.value;
      });
    }
  });
  if(apiMethod === "get") return `{params: {${getStr(params)}}}`;
  else return `{${getStr(params)}}`
  function getStr(obj) {
    let str = "";
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] == "object") str += `${key}:{${getStr(obj[key])}}, `;
      else if (obj[key] === 'currentValue') str += `${key}: value, `;
      else if (obj[key]) str += `${key}: '${obj[key]}', `;
    });
    return str;
  }
}
