import { identityApi } from '@/shared/api';
import { User } from '@/shared/types/auth';

export const getUser = async (): Promise<User> => {
    const response = await identityApi.getUser();
    return {
        id: response.id,
        name: response.name,
        avatar: response.avatar,
    };
};
