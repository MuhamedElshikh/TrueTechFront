export interface cart {
  id: string;
  branchId: string;
  cartItems: CartItem[];
}

export interface CartItem {
  productId: string;
  branchId: string;
  quantity: number;
}
 export interface getcart {
  id: string;
  branchId: string;
  cartItems: getCartItem[];
}

export interface getCartItem {
  productId: string;
  branchId: string;
  productName: string;
  pictureUrl: string;
  price: number;
  quantity: number;
}
