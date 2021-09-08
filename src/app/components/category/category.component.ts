import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public IMAGE_URL = 'http://rjtmobile.com/grocery/images/';
  public categories: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getCategory().subscribe((response) => {
      this.categories = response.data
    })
  }

  onButtonClick(category: any){
    this.router.navigate(['/products', category.catName, category.catId])
  }

}
