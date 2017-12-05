import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '/search', component: SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
