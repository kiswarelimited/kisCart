export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  stock: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
