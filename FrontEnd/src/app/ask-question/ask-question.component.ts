import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service'
import { CategoryModel } from '../ans-boot';
import { NgForm } from '@angular/forms';
import { AskModel } from '../models/ask-model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  [x: string]: any;

  CategoryList:Array<CategoryModel>;
  kk:any;

  askModel: AskModel;
  ngForm: any;

  constructor(private api: ApiService,private toastr:ToastrService) { 
    this.CategoryList=new Array<CategoryModel>();
    this.getCategoryList();
    this.askModel=new AskModel();
  }



 getCategoryList(){
   this.api.getCategoryList().subscribe((data)=>{
    console.log('CategoryList', data);
   this.CategoryList=data;
    });

 }





 onclickSubmit(){

   this.api.saveQuestionADO(this.askModel).subscribe(data=>{
   if(data)
   {
    this.toastr.success('Success!', 'Inserted Successfully!');
    this.askModel=new AskModel(); //clear values
   }
   })
 }

  ngOnInit() {
  }
  
}
