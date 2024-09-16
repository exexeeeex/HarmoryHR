import { gql } from '@apollo/client';
import Sign from '@/shared/types/auth';
import client from '../base';

export const SignIn = async (model: Sign) => {
    const query = gql`
        mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                access_token
                refresh_token
            }
        }
    `;
    const { data } = await client.mutate({
        mutation: query,
        variables: {
            email: model.email,
            password: model.password,
        },
    });
    return data;
};
