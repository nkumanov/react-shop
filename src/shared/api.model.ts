export interface IErrorResponse {
  response: {
    status: number;
    error: string;
  };
  status: number;
  message: string;
  name: string;
}
