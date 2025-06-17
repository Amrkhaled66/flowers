import type {
  ReceivedOrder,
  ReceivedProduct,
  OrderTracking,
} from "src/types/ReceivedOrder";

function transformReceivedOrder(data: any): ReceivedOrder {
  return {
    // From base Order interface
    coupon: data.coupon_id ?? null,
    recipientName: data.recipient_name,
    phoneNumber: data.phone_number,
    area: data.area,
    fullAddress: data.full_address,
    secret: Boolean(data.secret),
    deliveryTime: data.delivery_time,
    deliveryDate: data.delivery_date,
    paymentMethod: data.payment_method,
    message: data.message,

    // Extra fields for ReceivedOrder
    id: data.id,
    paymentStatus: data.payment_status,
    orderStatus: data.order_status,
    shippingCost: data.shipping_cost,
    subtotal: data.subtotal,
    total: data.total,
    balanceUsed: data.balance_used,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    products: Array.isArray(data.products)
      ? data.products.map(transformProduct)
      : [],
    tracking: Array.isArray(data.tracking)
      ? data.tracking.map(transformTracking)
      : [],
  };
}

function transformProduct(product: any): ReceivedProduct {
  return {
    id: product.id,
    nameAr: product.name_ar,
    nameEn: product.name_en,
    firstImage: product.first_image,
    quantity: product.pivot?.quantity ?? 1,
    price: product.pivot?.price ?? product.after_discount,
  };
}

function transformTracking(track: any): OrderTracking {
  return {
    status: track.status,
    updatedAt: track.updated_at,
  };
}

export default transformReceivedOrder;
