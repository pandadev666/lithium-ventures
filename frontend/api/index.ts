const api_endpoint = "https://localhost:8000";

export const signin = async (credentials: any) => {
    const response = await fetch(`${api_endpoint}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
}

export const signup = async (credentials: any) => {
    const response = await fetch(`${api_endpoint}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
}
