import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from "@nestjs/common";
import { Response } from "./models";
import { catchError, map, Observable, tap, throwError } from "rxjs";

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {


  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    return next.handle().pipe(
      tap(() => console.log("After")),
      map((data) => {
        console.log(data);
        return { data: {} };
      }),
      catchError((err) => {
          return throwError(() => {
            console.log('mi error', err.message);
            console.log('antes', err.response.message);
            const respo: Response<T> = {
              error: {
                errors: err.response.message
              }
            }
            console.log('respo', respo);
            return new BadRequestException({respo})
          });
        }
      )
    );
  }
}
