export const Validator = {
    email: (email) => {
        if (email == undefined || email.length == 0) return false;
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    },
    string: (str) => {
        return str != undefined && str.length > 0
    },
    password: (pwd) => {
        return pwd != undefined && pwd.length > 0
    }
}
