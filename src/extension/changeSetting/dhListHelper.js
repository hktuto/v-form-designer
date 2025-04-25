export function handleDhList(fieldName, dhList, getWidgetRef) {
  const allHiddenList = []
  const allDisabledList = []
  dhList.forEach(item => {
    allHiddenList.push(...item.hiddenList)
    allDisabledList.push(...item.disabledList)
  });
  const validList = []
  dhList.forEach((dhItem) => {
    if (
      dhItem.fieldConditionList.find((fc) => fc.fieldName === fieldName) &&
      !validList.includes(fieldName)
    ) {
      const evalValue = dhItem.fieldConditionList.map((fc) => {
        const widget = getWidgetRef(fc.fieldName);
        if (!widget) return true;
        const sFcValue = String(fc.value);
        const sWValue = String(widget.getValue());
        return `'${sWValue}' ${fc.condition} '${sFcValue}'`;
      });
      const conditionValue = eval(evalValue.join(" && "));
      if (conditionValue) validList.push(fieldName)
      allHiddenList.forEach((hiddenItem) => {
        const w = getWidgetRef(hiddenItem.fieldName);
        if (!w) return;
        if (dhItem.hiddenList.find(curHiddenItem => hiddenItem.fieldName === curHiddenItem.fieldName)) {
          w.setHidden(conditionValue);
          if (hiddenItem.required) w.setRequired(!conditionValue);
        } else {
          w.setHidden(!conditionValue);
          if (hiddenItem.required) w.setRequired(conditionValue);
        }
      })
      allDisabledList.forEach((disabledItem) => {
        const w = getWidgetRef(disabledItem.fieldName);
        if (!w) return;
        if (dhItem.hiddenList.find(curDisabledItem => disabledItem.fieldName === curDisabledItem.fieldName)) {
          w.setHidden(conditionValue);
          if (disabledItem.required) w.setRequired(!conditionValue);
        } else {
          w.setHidden(!conditionValue);
          if (disabledItem.required) w.setRequired(conditionValue);
        }
      })
    }
  });
}
