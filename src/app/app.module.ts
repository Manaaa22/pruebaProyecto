import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent,
    LoginComponent
    /*routes*/
   ],
  imports: [
    BrowserModule,
    // importar HttpClientModule después de BrowserModule.
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
     ],
  providers: [],
  bootstrap: [AppComponent]

   
})

export class AppModule { }
