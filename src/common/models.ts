// export class Response<T> {
//   constructor(public data: T) {
//   }
// }

export interface Response<T> {
  apiVersion?: string
  data?: {
    currentItemCount?: number
    itemsPerPage?: number
    startIndex?: number
    totalItems?: number
    pageIndex?: number
    totalPages?: number
    items?: T[]
  }
  error?: {
    code?: number // codigo de error general
    message?: string // mensaje general del error
    errors?: [
      {
        message: string
      }
    ]
  }
}

