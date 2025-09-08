export interface creatorder {
  cartId: string;
  email: string;
  addrsses: Addrsses;
  item: Item[];
}

export interface Item {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface Addrsses {
  fullName: string;
  streetAddress: string;
  city: string;
  district: string;
  country: string;
}
export interface getorder {
  userEmail: string;
  orderDate: string;
  totalAmount: number;
  branchId: string;
  orderItems: OrderItem[];
}


export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  productName: string;
  pictureUrl: string;
}