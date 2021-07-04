import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/api/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any;
  addingSub: boolean = false;
  name: string = '';
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.list().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

  onAddCategory(parent: any) {
    parent.addingSub = true;
    this.addingSub = true;
  }

  onCancel(parent: any) {
    parent.addingSub = false;
    this.addingSub = false;
    this.name = '';
  }

  deleteCategory(category_id: number) {
    this.categoryService.delete(category_id).subscribe(response => {
      this.getCategories();
      console.log(response);
    });
  }

  createCategory(parent: any) {
    this.categoryService.create({name: this.name, category_id: parent.id}).subscribe(response => {
      console.log(response);
      parent.children.push(response);
      this.onCancel(parent);
    });
  }
}
