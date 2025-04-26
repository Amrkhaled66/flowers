type Product = {
  img: string;
  name: string;
  stars: number;
  price: number;
  discountedPrice?: number;
  reviews?: number;
  description?: string;
  category?: string;
  images?: string[] ;
};

export default Product;
