import { AxiosResponse } from "axios";

export interface CustomAxiosResponse<T> extends AxiosResponse {
  data: {
    type: string;
    title: string;
    message: string;
    statusCode: number;
    data: T;
  };
}

export type CustomAxiosPromise<T> = Promise<CustomAxiosResponse<T>>;