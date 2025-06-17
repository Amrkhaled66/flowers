interface Product {
  id: number;
  images: string[];
  firstImage?: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  beforeDiscount: number;
  discountPercentage: number;
  afterDiscount: number;
  stock: number;
  bestSelling: boolean;
  slug: string;
  categoryId: number;
  occasionId: number;
  recommendedProducts?: Product[];
}

export default Product;
