import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public IMAGE_URL = 'http://rjtmobile.com/grocery/images/';
  catId: any;
  catName : any;
  subCategories: any;
  products: any

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { 
    this.catName = activatedRoute.snapshot.paramMap.get('catName');
    this.catId = activatedRoute.snapshot.paramMap.get('catId');
  }

  ngOnInit(): void {
    this.dataService.getSubCategoryByCatId(this.catId).subscribe(response => {      
      this.subCategories = response.data;
    })

    this.dataService.getProductsByCatId(this.catId).subscribe(response => {      
      this.products = response.data;
    })
  }

  onSubCatSelected(subId: any){
    this.dataService.getProductsBySubId(subId).subscribe(response => {      
      this.products = response.data;
    })
  }

}
