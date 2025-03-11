import {isNull} from "./util";
import {translate} from "@/utils/i18n"

export const getRegExp = function (validatorName) {
    const commonRegExp = {
        number: '/^[-]?\\d+(\\.\\d+)?$/',
        numberInteger: '/^[1-9]\\d*|0$/',
        letter: '/^[A-Za-z]+$/',
        letterAndNumber: '/^[A-Za-z0-9]+$/',
        mobilePhone: '/^(\\+?\\d{1,3}[- ]?)?\\d{10}$/',
        letterStartNumberIncluded: '/^[A-Za-z]+[A-Za-z\\d]*$/',
        noChinese: '/^[^\u4e00-\u9fa5]+$/',
        chinese: '/^[\u4e00-\u9fa5]+$/',
        email: '/^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/',
        url: '/^([hH][tT]{2}[pP]:\\/\\/|[hH][tT]{2}[pP][sS]:\\/\\/)(([A-Za-z0-9-~]+)\\.)+([A-Za-z0-9-~\\/])+$/',
    }

    return commonRegExp[validatorName]
}

const validateFn = function (validatorName, rule, value, callback, defaultErrorMsg) {
    //空值不校验
    if (isNull(value) || (value.length <= 0)) {
        callback()
        return
    }

    const reg = eval(getRegExp(validatorName))

    if (!reg.test(value)) {
        let errTxt = rule.errorMsg || defaultErrorMsg
        callback(new Error(errTxt))
    } else {
        callback()
    }
}

const FormValidators = {

    /* 数字 */
    number(rule, value, callback) {
        validateFn('number', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_number'))
    },

    /* 整數 */
    numberInteger(rule, value, callback) {
        validateFn('numberInteger', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_numberInteger'))
    },

    /* 字母 */
    letter(rule, value, callback) {
        validateFn('letter', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_letter'))
    },

    /* 字母和数字 */
    letterAndNumber(rule, value, callback) {
        validateFn('letterAndNumber', rule, value, callback, '[' + translate(rule.label) + ']' + translate('validateFn_letterAndNumber'))
    },

    /* 手机号码 */
    mobilePhone(rule, value, callback) {
        validateFn('mobilePhone', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_mobilePhone'))
    },

    /* 禁止空白字符开头 */
    noBlankStart(rule, value, callback) {
        //暂未实现
    },

    /* 禁止空白字符结尾 */
    noBlankEnd(rule, value, callback) {
        //暂未实现
    },

    /* 字母开头，仅可包含数字 */
    letterStartNumberIncluded(rule, value, callback) {
        validateFn('letterStartNumberIncluded', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_letterStartNumberIncluded'))
    },

    /* 禁止中文输入 */
    noChinese(rule, value, callback) {
        validateFn('noChinese', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_noChinese'))
    },

    /* 必须中文输入 */
    chinese(rule, value, callback) {
        validateFn('chinese', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_chinese'))
    },

    /* 电子邮箱 */
    email(rule, value, callback) {
        // const msg = '[' + translate(rule.label) + '] ' + translate('validateFn_email');
        const msg = translate('user_emailFormatError');
        validateFn('email', rule, value, callback, msg)
    },

    /* URL网址 */
    url(rule, value, callback) {
        validateFn('url', rule, value, callback, '[' + translate(rule.label) + '] ' + translate('validateFn_url'))
    },

    /*测试
    test(rule, value, callback, errorMsg) {
      //空值不校验
      if (isNull(value) || (value.length <= 0)) {
        callback()
        return
      }

      if (value < 100) {
        callback(new Error('[' + translate(rule.label) + ']不能小于100'))
      } else {
        callback()
      }
    },
    */

    regExp(rule, value, callback) {
        //空值不校验
        if (isNull(value) || (value.length <= 0)) {
            callback()
            return
        }

        const pattern = eval(rule.regExp)
        if (!pattern.test(value)) {
            let errTxt = translate(rule.errorMsg) || '[' + translate(rule.label) + ']invalid value'
            callback(new Error(errTxt))
        } else {
            callback()
        }
    },

}

export default FormValidators
