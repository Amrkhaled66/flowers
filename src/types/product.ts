interface Product {
  id: number;
  images: string[];
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
}

export default Product;
