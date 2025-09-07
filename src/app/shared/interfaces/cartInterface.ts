export interface cart {
  Id: string;
  BranchId: string;
  CartItems: CartItem[];
}

export interface CartItem {
  Id: string;
  ProductId: string;
  PictureUrl: string;
  Price: number;
  Quantity: number;
}