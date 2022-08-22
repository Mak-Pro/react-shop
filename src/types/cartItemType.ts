export type CartItemType = {
  id: string;
  name: string;
  quantity: number;
  price: {
    regularPrice: number;
    finalPrice: number;
  };
};
