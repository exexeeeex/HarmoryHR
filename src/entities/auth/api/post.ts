import { validation } from '@/entities/validation';
import { authApi } from '@/shared/api';
import Sign from '@/shared/types/auth';
import TokenResponse from '@/shared/types/auth';
import { setTokensInLocalStorage } from '../service/auth.service';

export const SignIn = async (model: Sign): Promise<boolean | undefined> => {
    try {
        if (!validation(model)) alert('Заполните все поля!');
        else {
            const response: TokenResponse = await authApi.SignIn(model);
            setTokensInLocalStorage(response);
            return true;
        }
    } catch (error) {
        alert(error);
    }
};
