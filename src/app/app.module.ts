import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DiceComponent } from './dice/dice.component';
import { HeaderComponent } from './header/header.component';
import { WinnerComponent } from './winner/winner.component';
const routes:Routes=[{
  path:'',
  component:HomeComponent
},
{path:'winner/:param',
component:WinnerComponent}]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiceComponent,
    HeaderComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
