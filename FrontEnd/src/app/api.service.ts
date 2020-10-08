import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CategoryModel } from './ans-boot';
import {AskModel} from './models/ask-model'
import { QuestionModel } from './models/question-list-model';
import { tblAnswersModel } from './models/ans-boot-model';
import { TextModel } from './models/text-model';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  onclickSubmitData: any;

  constructor(private http: HttpClient) {

   }


   //Question : string;

  public getCategoryList(){
    return this.http.get<any>("http://localhost:54090/QA/CategoryList");
  }


  // public postForm(AksModel : any){
  //   return this.http.post<any>("http://localhost:54090/QA/PostAll",AksModel);
  // }

  saveQuestion(AskModel : AskModel){
    return this.http.post<boolean>("http://localhost:54090/QA/Post",AskModel);
  }

  saveAnswerInfo(tblAnswersModel : tblAnswersModel){
    return this.http.post<any>("http://localhost:54090/QA/InsertAns",tblAnswersModel);
  }


  saveTextFile(theModel:TextModel){
   return this.http.post<boolean>("http://localhost:54090/QA/SaveTextFile",theModel);

 }


  saveQuestionADO(AskModel : AskModel){
    return this.http.post<boolean>("http://localhost:54090/QA/Insert",AskModel);
  }


 getQuestionList(){
   return this.http.get<Array<QuestionModel>>("http://localhost:54090/QA/GetAskQuestions");
 }


getQuestionById( ID : number){
  let params = new HttpParams().set('Id',ID.toString());
  return this.http.get<QuestionModel>("http://localhost:54090/QA/GetAskQuestionById",{params});
}


getFileList(){
  return this.http.get<Array<any>>("http://localhost:54090/QA/GetAllFileList");
}


}
