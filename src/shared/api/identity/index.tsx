import { gql } from '@apollo/client';
import client from '../base';
import { authService } from '@/entities/auth';

export const getUser = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                myProfile {
                    id
                    name
                    avatar
                }
            }
        `,
        context: {
            headers: {
                Authorization: `Bearer ${authService.getTokenByType('access')}`,
            },
        },
    });
    return data.myProfile;
};
