import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { QuestionModel } from '../models/question-list-model';
import { ActivatedRoute } from '@angular/router';
import { tblAnswersModel } from '../models/ans-boot-model';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-ans-boot',
  templateUrl: './ans-boot.component.html',
  styleUrls: ['./ans-boot.component.css']
})
export class AnsBootComponent implements OnInit {
  questionModel: QuestionModel;
  QuestionList : Array<QuestionModel>;
  questionId:number;
  AnswerInfo :tblAnswersModel;


 
  constructor(private api :ApiService, private route:ActivatedRoute) { 
    
    this.questionModel=new QuestionModel();
   
    route.params.subscribe(params=>{
     if(params["ID"])
     {
      this.questionId=parseInt(params["ID"]);
      this.getQuestion();
     }
    });

    this.AnswerInfo=new tblAnswersModel();
    this.AnswerInfo.QuestionID=this.questionId;
  
  }

  
  getQuestion(){
    this.api.getQuestionById(this.questionId).subscribe((data)=>{
     this.questionModel=data;
     console.log('question Model:',data);

    });
  }


  postAnswer(){
   /*  this.api.saveAnswerInfo(this.AnswerInfo).subscribe((data)=>{
     if(data)
     console.log('question Model:',data);

    }); */

     this.answerForm.patchValue({
      QuestionID:this.questionId
     });

    this.api.saveAnswerInfo(this.answerForm.value).subscribe((data)=>{
      if(data)
      console.log('question Model:',data);
      this.questionModel= new QuestionModel();
 
     });
    
  }

  //ei aswer boot ta ekhon reactive form diye kor dekhi ojkk. suru kor okk ..ami chesta kori... prob hole dakbo

  answerForm = new FormGroup({

    AnswererName : new FormControl(''),
    AnswererEmail : new FormControl(''),
    Answer : new FormControl(''),
    QuestionID : new FormControl(''),


  });



  ngOnInit() {
  }

}
