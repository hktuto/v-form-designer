export function generateSingleChangeCode(setting) {
  const paramsStr = getParamsStr(setting)
  const funName = `init_${setting.fieldName}`.replace(/ /g, '')
  const optionApiStr = `\n  options = await get_${setting.api}(${paramsStr},'${setting.labelKey}','${setting.valueKey}')`
  const widgetName = setting.parentWidgetName ? `'${setting.fieldName}@row' + rowId` : `'${setting.fieldName}'`
  const codeString = `async function ${funName}() {
  ${getFieldParamsInitStr(setting, optionApiStr)}
  try {
    const widgetRef = _this.getWidgetRef(${widgetName}) 
    if(widgetRef.loadOptions) widgetRef.loadOptions(options)
    if(isReady) {
      if(options.length === 1) {
        if(widgetRef.field.options.multiple) widgetRef.setValue([options[0].value])
        else widgetRef.setValue(options[0].value)
      }
      else widgetRef.setValue(null)
    }
  }
  catch(e) {
    
  }
}
${funName}()
`
  return codeString
}
export function generateMsterTableColumnCode() {
  const codeString = `async function get_masterTableColumn(params,labelKey='name', valueKey='id') {
  try {
    const data = await $api.post('/docpal/master/tables/record/page/nonPermission', params).then(res => res.data.data)
    return data.reduce((prev, item) => {
      if(!item[valueKey] || !item[labelKey] || prev.find(p => p.value === item[valueKey])) return prev 
      const resultItem = {
        value: item[valueKey],
        label: item[labelKey] || '' 
      }
      resultItem.disabled = !item.status
      prev.push(resultItem) 
      return prev
    }, []).sort((a,b)=> (a.label.localeCompare(b.label) ))
  } catch (e) {
    return []
  }
}
`
  return codeString
}
function getFieldParamsInitStr(setting, optionApiStr) {
  const params = setting.params;
  const fieldCodeList = []
  const paramsList = []
  const nameCode = generateFieldCode(params.name, params)
  if (!!nameCode) fieldCodeList.push(nameCode);
  const paramName = getParamName(params.name)
  if (!!paramName) paramsList.push(paramName);
  if (params.where && params.where.length > 0) {
    params.where.forEach((item) => {
      const whereCode = generateFieldCode(item.value, item)
      if (!!whereCode) fieldCodeList.push(whereCode);
      const paramName = getParamName(item.value)
      if (!!paramName) paramsList.push(paramName);
    })
  }

  return fieldCodeList.join('') + generateFieldExistCode();
  function generateFieldCode(paramName, param) {
    if (!paramName.startsWith('widgetValue_')) return ''
    let widgetName = paramName.replace(/widgetValue_/, '');
    if (param.parentWidgetName) widgetName = `'${widgetName}@row' + rowId`;
    const widgetNameNoSpace = paramName.replace(/widgetValue_/, '').replace(/ /g, '');
    const codeString = `
  let widgetValue_${widgetNameNoSpace} = ''
  const widgetRef_${widgetNameNoSpace} = _this.getWidgetRef(${widgetName})
  if(!!widgetRef_${widgetNameNoSpace}) widgetValue_${widgetNameNoSpace} = widgetRef_${widgetNameNoSpace}.getValue()
    `
    return codeString
  }
  function generateFieldExistCode() {
    const pList = [...new Set(paramsList)]
    const conditionStr = pList.reduce((prev, item, index) => {
      if (!!item) prev += '!!' + item
      if (index !== pList.length - 1) prev += ' && '
      return prev
    }, '')

    return conditionStr.length > 0 ? `\n  let options = []\n  if(${conditionStr}) ${optionApiStr}\n` : `\n  let options = []\n ${optionApiStr}\n`
  }
  function getParamName(paramName) {
    if (paramName.startsWith('widgetValue_')) return paramName.replace(/ /g, '')
    else if (paramName === 'currentValue') return 'value'
    return ''
  }
}
function getParamsStr(setting) {
  const params = JSON.parse(JSON.stringify(setting.params));
  delete params.parentWidgetName;
  delete params.selectedWidgetName;
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
  if (apiMethod === "get") return `{params: {${getStr(params)}}}`;
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