import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component'
import { FormsModule } from '@angular/forms';
import { MyInterceptor } from './my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TodoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,  useClass: MyInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
