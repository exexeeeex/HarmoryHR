export default interface Sign {
    email: string;
    password: string;
}

export default interface TokenResponse {
    login: {
        access_token: string;
        refresh_token: string;
    };
}

export interface User {
    id: string;
    name: string;
    avatar: string;
}
