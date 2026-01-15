export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  saved: boolean;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

export interface PaginatedResponse {
  products: Product[];
  pagination: Pagination;
}
