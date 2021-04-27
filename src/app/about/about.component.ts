import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component(
  {
   selector: 'about',
   templateUrl: './about.component.html'
  }
)
export class AboutComponent implements OnInit {

  title = "overskrift"
  data: any 
  filtered: any
  today: Date

  constructor( private service:ProductService) {}

   async ngOnInit() {
    this.data = await this.service.GetData()

    this.filtered = this.data.filter(p => p.name === "John")

    this.today = new Date();
   }

}
