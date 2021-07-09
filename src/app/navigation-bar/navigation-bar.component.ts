import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() category: any;
  hierarchy: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.buildHierarchy(this.category);
  }

  buildHierarchy(category: any) {
    if(category.parent != null)
      this.buildHierarchy(category.parent);
    this.hierarchy.push(category);
    console.log(this.hierarchy);
  }

}
