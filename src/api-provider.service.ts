export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface ErrorResponse {
  error: string;
  status: number;
}
