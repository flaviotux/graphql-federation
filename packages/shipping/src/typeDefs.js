import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    shippingEstimate(productID: ID!): ShippingEstimate
  }

  type ShippingEstimate {
    id: ID!
  }
`;

export default typeDefs;
