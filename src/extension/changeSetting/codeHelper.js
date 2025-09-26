import { generateSingleChangeCode, generateMsterTableColumnCode } from "./code.extend";
export function setOnChange(widgetRef, isHandleOnCreated = false) {
  if (!widgetRef.changeSettings ||
    widgetRef.changeSettings.length === 0 ||
    (!widgetRef.isCreateDynamicCode && isHandleOnCreated)) return
  const changeCode = generateChangeCode(widgetRef.changeSettings);
  widgetRef.onChangePlus = changeCode;
}
export function generateChangeCode(changeFieldList) {
  const codeString = `const _this = this
if(value === oldValue) return
const isReady = _this.getIsReady()  
  
`
  const _changeFieldList = JSON.parse(JSON.stringify(changeFieldList));
  const mf = generateMsterTableColumnCode()
  const code = _changeFieldList.reduce((prev, item) => {
    const funCode = generateSingleChangeCode(item)
    prev += funCode
    return prev
  }, codeString + mf)
  return code
}




