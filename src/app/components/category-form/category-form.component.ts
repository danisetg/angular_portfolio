import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  category: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(category: any) {
    this.submitEvent.emit(category);
  }

}
