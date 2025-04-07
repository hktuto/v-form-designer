
import { selectApis } from "@/extension/data-field/aysncSelect/dataFieldApis";
export function setOnCreate(widgetRef) {
  if (!widgetRef.selectSetting || Object.keys(widgetRef.selectSetting).length === 0) return
  const onCreatedCode = generateCreateCode(widgetRef.selectSetting);
  widgetRef.onCreatedPlus = onCreatedCode;
  console.log(widgetRef)
}

export function generateCreateCode(selectSetting) {
  const apiSetting = selectApis[selectSetting.api];
  let params = {
    ...selectSetting.params,
  };
  if (selectSetting.params.other) {
    const other = selectSetting.params.other;
    other.forEach((item) => {
      if (item.value) params[item.key] = item.value;
    });
    delete params.other;
  }
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
  if (!apiSetting.method) apiSetting.method = "post";
  const paramsStr = getObjStr(params, apiSetting.method);
  const onCreated = `const _this = this\nconst filterKey = '${apiSetting.filterKey}'\nasync function getList() {\n  try {\n    const data = await $api.${apiSetting.method}('${apiSetting.api}',{${paramsStr}}).then(res => res.data.data)\n    return data.reduce((prev, item) => {\n      if(!item.${selectSetting.valueKey} || !item.${selectSetting.labelKey} || prev.find(p => p.value === item.${selectSetting.valueKey})) return prev \n      const resultItem = {\n        value: item.${selectSetting.valueKey},\n        label: item.${selectSetting.labelKey} || '' \n      }\n      if(filterKey === 'user') resultItem.disabled = item.status === 'A' ? false : true \n      else if(filterKey === 'masterTableColumn') resultItem.disabled = !item.status\n      prev.push(resultItem) \n      return prev\n    }, []).sort((a,b)=> (a.label.localeCompare(b.label) ))\n  } catch (e) { return [] }\n}\nasync function init() {\n  const options = await getList()\n  _this.loadOptions(options)\n}\ninit()`;
  return onCreated
}

function getObjStr(obj, apiMethod = "post") {
  let str = "";
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == "object") str += `${key}:{${getObjStr(obj[key])}}, `;
    else if (obj[key]) str += `${key}: '${obj[key]}', `;
  });
  if (apiMethod === "get") return `params: {${str}}`;
  else return str;
}
