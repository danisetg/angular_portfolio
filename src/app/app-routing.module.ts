import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: "", redirectTo: "categories", pathMatch: "full"
  },
  {
    path: "categories", component: CategoryComponent
  },
  {
    path: "categories/create",
    component: CategoryCreateComponent
  },
  {
    path: "categories/:id/update",
    component: CategoryUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
