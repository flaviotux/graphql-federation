import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const debug = require('debug')('shipping:server');

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen().then(({ url }) => {
  debug(`🚀 Server ready at ${url}`);
});
