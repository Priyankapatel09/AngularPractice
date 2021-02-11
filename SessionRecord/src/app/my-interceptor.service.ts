import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MyInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("------------------------------------------------------------------");
    console.log("Inerceptor Called before service");
    console.log("------------------------------------------------------------------");

    const httpReq = req.clone({
                      url: req.url.replace("https","http")
                    });
    return next.handle(httpReq).pipe(
      filter(event => event instanceof HttpResponse && req.url.includes("users")),
      map((event: HttpResponse<any>) => event.clone({
        body: {name: event.body.name, username: event.body.username, email: event.body.email}
      }))
    );
  }
}
