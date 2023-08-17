// export const ValidatePhoneNumber = (phone: string | number) => {

// }
export const validatePhoneNumber = /^([0|\+[0-9]{1,5})?([0-9]{10})$/
export const pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;