import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { AddProductComponentModule } from './components/add-product/add-product.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesListComponent }, { path: 'add-product', component: AddProductComponent }]), CategoriesListComponentModule, CategoriesServiceModule, ProductServiceModule, AddProductComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
