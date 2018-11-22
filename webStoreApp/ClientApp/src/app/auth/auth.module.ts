import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AuthModule { }
