export const Validator = {
    email: (email: string) => {
        if (email == undefined || email.length == 0) return false;
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    },
    string: (str: string) => {
        return str != undefined && str.length > 0
    },
    password: (pwd: string) => {
        return pwd != undefined && pwd.length > 6
    }
}
