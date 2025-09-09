export interface allproduct {
productId : string;
  productName: string;
  description: string;
  pictureUrl: string;
  branchId: string;
  branchName: string;
  price: number;
  stock: number;
}
export interface getproduct {
  productId: string;
  productName: string;
  description: string;
  pictureUrl: string;
  branchId: string;
  branchName: string;
  price: number;
  stock: number;
}
export interface productByBranch {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  branchProducts: BranchProduct[];
}

export interface BranchProduct {
  branchId: string;
  branchName: string;
  price: number;
  stock: number;
}
export interface adminBranchProductDto {
  branchId: string;
  branchName: string;
  price: number;
  stock: number;
}

export interface adminProduct {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  branchProducts: adminBranchProductDto[];
}
