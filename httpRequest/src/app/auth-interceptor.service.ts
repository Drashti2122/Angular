import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const modifiedRequest = req.clone({ url: 'some-new-url' })
    // const modifiedRequest = req.clone({ headers: req.headers.append })
    // const modifiedRequest = req.clone({params})
    console.log('Request is on its way');
    console.log(req.url);
    const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') })
    return next.handle(modifiedRequest);
    // .pipe(
    //   tap (event => {
    //     if (event.type === HttpEventType.Response) {
    //       console.log('Response arrvied,body data:');
    //       console.log(event.body);
    //     }
    //   }));
  }
}
