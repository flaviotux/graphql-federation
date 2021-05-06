import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';
import config from 'config';

import shippingTypeDefs from '../packages/shipping/src/typeDefs';

const debug = require('debug')('nav-gateway:server');

const { shipping } = config.get('services');
const gateway = new ApolloGateway({
  localServiceList: [{ name: 'Shipping', url: shipping.url, typeDefs: shippingTypeDefs }],
});

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen().then(({ url }) => {
  debug(`🚀 Server ready at ${url}`);
});
