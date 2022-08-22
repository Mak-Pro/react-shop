export type GoodsType = {
  mainId: string;
  displayName: string;
  displayDescription: string;
  price: {
    regularPrice: number;
    finalPrice: number;
  };
  displayAssets: [
    {
      full_background: string;
    }
  ];
};
