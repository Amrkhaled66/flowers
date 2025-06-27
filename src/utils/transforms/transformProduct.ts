const transformProduct = (product: any) => ({
  id: product.id,
  images: product.images && product.images.map((image: any) => image.image),
  firstImage: product?.first_image,
  nameAr: product.name_ar,
  nameEn: product.name_en,
  descriptionAr: product.description_ar,
  descriptionEn: product.description_en,
  beforeDiscount: parseFloat(product.before_discount),
  discountPercentage: product.discount_percentage,
  afterDiscount: parseFloat(product.after_discount),
  stock: product.stock,
  bestSelling: Boolean(product.best_selling),
  slug: product.slug,
  categoryId: product.category_id,
  occasionId: product.occasion_id,
  recommendedProducts: product.recommended_products
    ? product.recommended_products.map(transformProduct)
    : [],
  width: product.width,
  height: product.height,
});

export default transformProduct;
