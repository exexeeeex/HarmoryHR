import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://api.escuelajs.co/graphql',
});
const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache: cache,
});

export default client;
