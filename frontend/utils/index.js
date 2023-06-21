export const Validator = {
    email: (email) => {
        if (email == undefined || email.length == 0) return false;
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    },
    password: (str) => {
        return str != undefined && str.length > 0
    }
}
