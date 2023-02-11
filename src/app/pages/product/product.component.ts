import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from '../../models/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data:product={
    title:'moto',
    price:25,
    description:'moto electrica/Edison Gualpa',
    categoryId: 4,
    images:['https://you.com/proxy?url=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yXcX0hNC1FFGa423bMsfcAHaFj%26pid%3DApi']
  }

  dataupdate:product={
    title:'scuter',
    description:'Doble traccion/Edison Gualpa',
    categoryId:4,
  }
  url:string='http://api.escuelajs.co/api/v1/products'
  title:any
  constructor(private productservice:ProductService){}

  ngOnInit(): void {
      //this.getProducts()
      //this.getProduct()
      //this.createproduct()
     // this.updateproduct()
      this.deleteproduct()

  }

  getProducts():void{
    this.productservice.getAll().subscribe(e=>{
      return e
    })
  }
  getProduct(){
    this.productservice.getOne(4).subscribe(e=>{
      return e
    })
  }
  createproduct(){
    this.productservice.store(this.data).subscribe(e=>{
      return e
    })
  }
  updateproduct(){
    this.productservice.update(this.dataupdate,4).subscribe(e=>{
      return e
    })
  }

  deleteproduct(){
    this.productservice.destroy(4).subscribe(e=>{
      return e
    })
  }
}

