const Query = {
  shippingEstimate: (_, { productID }) => ({
    id: productID,
  }),
};

export default Query;
