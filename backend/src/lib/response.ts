export enum ServiceStatusCode {
  FAILURE = "failure",
  WARNING = "warn",
  SUCCESS = "success",
  ERROR = "error"
};

export type ServiceResponseType<T> = {
  status: ServiceStatusCode,
  message?: string | null,
  data: T | null
};

export enum ResultEnum {
  EXISTS = 400,
  CREATED = 201,
  SUCCESS = 200,
  NOT_FOUND = 404,
  ERROR = 500,
};