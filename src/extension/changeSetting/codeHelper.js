export function generateChangeCode(changeFieldList) {
  const _changeFieldList= JSON.parse(JSON.stringify(changeFieldList));

  const mf = getMasterTableRecordCode()
  const code = _changeFieldList.reduce((prev,item) => {
    const funCode = getFunctionCode(item)
    prev += funCode
    return prev
  },'const _this = this\nif(value === oldValue) return\n' + mf)
  return code
}

function getMasterTableRecordCode() {
  return `\nasync function get_masterTableColumn(params,labelKey='name', valueKey='id') {\n  try {\n    const data = await $api.post('/docpal/master/tables/record/page/nonPermission', params).then(res => res.data.data)\n    return data.reduce((prev, item) => {\n      if(!item[valueKey] || !item[labelKey] || prev.find(p => p.value === item[valueKey])) return prev \n      const resultItem = {\n        value: item[valueKey],\n        label: item[labelKey] || '' \n      }\n      resultItem.disabled = !item.status\n      prev.push(resultItem) \n      return prev\n    }, []).sort((a,b)=> (a.label.localeCompare(b.label) ))\n  } catch (e) {\n    return []\n  }\n}\n`
}
function getFunctionCode(setting) {
  const paramsStr = getParamsStr(setting)
  const funName = `init_${setting.fieldName}`.replace(/ /g, '')
  const optionApiStr = `\n  options = await get_${setting.api}(${paramsStr},'${setting.labelKey}','${setting.valueKey}')`
  const fieldParamsInitStr = getFieldParamsInitStr(setting, optionApiStr)
  return `\nasync function ${funName}() {${fieldParamsInitStr}\n  try {\n    const widgetRef = _this.getWidgetRef('${setting.fieldName}') \n    if(widgetRef.loadOptions) widgetRef.loadOptions(options)\n    if(options.length === 1) {\n      if(widgetRef.field.options.multiple) widgetRef.setValue([options[0].value])\n      else if(oldValue) widgetRef.setValue(options[0].value)\n    }\n    else widgetRef.setValue(null)\n  }\n  catch(e) {\n    \n  }\n}\n${funName}()\n`
}
// funName
// fieldParamsInitStr
function getFieldParamsInitStr(setting, optionApiStr) {
  const params = setting.params;
  const fieldCodeList = []
  const paramsList = []
  Object.keys(params).forEach((key) => {
    if (params[key] instanceof Array) {
      if (params[key].length === 0) {
        return 
      }
      params[key].forEach((item) => {
        if (item.value) {
          const fieldCode = generateFieldCode(item.value)
          if(!!fieldCode) fieldCodeList.push(fieldCode);
          const paramName = getParamName(item.value)
          if(!!paramName) paramsList.push(paramName);
        }
      });
    }
    else if (params[key]) {
      const fieldCode = generateFieldCode(params[key])
      if(!!fieldCode) fieldCodeList.push(fieldCode);
      const paramName = getParamName(params[key])
      if(!!paramName) paramsList.push(paramName);
    }
  });
  return fieldCodeList.join('') + generateFieldExistCode();
  function generateFieldCode(paramName) {
    if (!paramName.startsWith('widgetValue_')) return ''
    const widgetName = paramName.replace(/widgetValue_/, '');
    const widgetNameNoSpace = paramName.replace(/widgetValue_/, '').replace(/ /g, '');
    return `\n  let widgetValue_${widgetNameNoSpace} = ''\n  const widgetRef_${widgetNameNoSpace} = _this.getWidgetRef('${widgetName}')\n  if(!!widgetRef_${widgetNameNoSpace}) widgetValue_${widgetNameNoSpace} = widgetRef_${widgetNameNoSpace}.getValue()\n`
  }
  function generateFieldExistCode() {
    const pList = [...new Set(paramsList)]
    const conditionStr = pList.reduce((prev, item, index) => {
      if (!!item) prev += '!!' + item
      if (index !== pList.length - 1) prev += ' && '
      return prev
    }, '')
    
    return conditionStr.length > 0  ? `\n  let options = []\n  if(${conditionStr}) ${optionApiStr}\n` : `\n  let options = []\n ${optionApiStr}\n`
  }
  function getParamName(paramName) {
    if (paramName.startsWith('widgetValue_')) return paramName.replace(/ /g, '')
    else if(paramName === 'currentValue') return 'value'
    return ''
  }
}
function getParamsStr(setting) {
  const params = JSON.parse(JSON.stringify(setting.params)) ;
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
        if (item.value && item.key) params[key][item.key] = item.value;
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
      else if (obj[key].startsWith('widgetValue_')) {
        const widgetName = obj[key].replace(/ /g, '');
        str += `${key}: ${widgetName}, `;
      }
      else if (obj[key]) str += `${key}: '${obj[key]}', `;
    });
    return str;
  }
}
