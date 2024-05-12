// Interceptors make it possible for us to:
// bind extra logic before or after method execution
// transform the result returned from a method
// transform the exception thrown from a method
// extend basic method behavior
// or even completely overriding a method - depending on a specific condition (for example: doing something like caching various responses)

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    return next.handle().pipe(map((data) => ({ data })));
  }
}
