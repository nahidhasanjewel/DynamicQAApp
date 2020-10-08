import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../api.service';
import { QuestionModel } from '../models/question-list-model';
import { CategoryModel } from '../ans-boot';
import { Router } from '@angular/router';




@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

 QuestionList : Array<QuestionModel>;
 question : string ;
 ID : number;

  constructor(private api :ApiService,
    private router:Router
    ) {
    this.QuestionList=new Array<QuestionModel>();
    this.getQuestionList();
 
   }

  getQuestionList(){
    this.api.getQuestionList().subscribe((data)=>{
     this.QuestionList=data;

    });
  }

  viewQuestion(ID : any){
    // this.api.getQuestionByName(ID).subscribe((data) =>{
    //   //this.QuestionList=data;
    //   this.getQuestionList();
    this.router.navigateByUrl("/AnsBoot/"+ID);
  // });
}


  ngOnInit() {
  }

}
