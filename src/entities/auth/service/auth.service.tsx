import TokenResponse from '@/shared/types/auth';

export const setTokensInLocalStorage = (tokens: TokenResponse) => {
    localStorage.setItem(
        '_tokens',
        JSON.stringify({
            accessToken: tokens.login.access_token,
            refreshToken: tokens.login.refresh_token,
        }),
    );
};

export const getTokenByType = (type: string) => {
    const hasToken = localStorage.getItem('_tokens');
    if (hasToken == null) return null;
    else return JSON.parse(hasToken)[`${type}Token`];
};

export const logout = () => {
    localStorage.removeItem('_tokens');
    location.reload();
};
