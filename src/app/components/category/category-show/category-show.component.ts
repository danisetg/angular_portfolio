import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/api/category.service';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent implements OnInit {
  category: any;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.getCategory(params.id);
    });
  }

  getCategory(id: number) {
      this.categoryService.getById(id).subscribe(category => {
        this.category = category;
        console.log(this.category);
      });
  }

}
