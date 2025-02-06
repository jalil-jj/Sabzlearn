import rules from './ruls'
import regex from './regex'


const validator = (value, validations) => {

    let validationsResult = []


    for (const validator of validations) {
        if (validator.value === rules.requiredValue) {
            value.trim().length === 0 && validationsResult.push(false)
        }
        if (validator.value === rules.minValue) {
            value.trim().length < validator.min && validationsResult.push(false)
        }
        if (validator.value === rules.maxValue) {
            value.trim().length > validator.max && validationsResult.push(false)
        }
        if (validator.value === rules.emailValue) {
            !regex.testEmail(value) && validationsResult.push(false)
        }
    }

    if (validationsResult.length) {
        return false
    } else {
        return true
    }


}


export default validator 