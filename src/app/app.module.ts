import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'search', component: SearchComponent},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', redirectTo: ''},
  {path: '**', component: DefaultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
