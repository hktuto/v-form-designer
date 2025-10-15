import { generateSingleChangeCode, generateOptionsCode } from "./code.extend";
export function setOnChange(widgetRef, isHandleOnCreated = false) {
  if (!widgetRef.changeSettings ||
    widgetRef.changeSettings.length === 0 ||
    (!widgetRef.isCreateDynamicCode && isHandleOnCreated)) return
  const changeCode = generateChangeCode(widgetRef.changeSettings);
  widgetRef.onChangePlus = changeCode;
}
export function generateChangeCode(settings) {
  console.log(settings, "settings");
  let codeString = `const _this = this
if(value === oldValue) return
const isReady = _this.getIsReady()  
  
`
  const _settings = JSON.parse(JSON.stringify(settings));
  const m_fun = generateOptionsCode('masterTableColumn')  
  const c_fun = generateOptionsCode('caseInfo')  
  const m_exist = _settings.find(item => item.api === 'masterTableColumn')
  const c_exist = _settings.find(item => item.api === 'caseInfo')
  if(m_exist) codeString += m_fun
  if(c_exist) codeString += c_fun
  const code = _settings.reduce((prev, item) => {
    const funCode = generateSingleChangeCode(item)
    prev += funCode
    return prev
  }, codeString)
  return code
}




