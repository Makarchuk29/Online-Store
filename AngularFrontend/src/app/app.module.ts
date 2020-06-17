import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'products', component: ProductGridComponent},
  {path: 'category/:id', component: ProductGridComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
