import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 对请求消息进行处理
    const modifiedReq = req.clone({
      setParams: { icode: 'xxx' }
    });
    return next.handle(modifiedReq);
  }
}
