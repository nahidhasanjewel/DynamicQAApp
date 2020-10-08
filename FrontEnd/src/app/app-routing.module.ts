import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnsBootComponent } from './ans-boot/ans-boot.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { OnlineTextEditorComponent } from './online-text-editor/online-text-editor.component';

const routes: Routes = [

  {path: 'AskQuestion', component:AskQuestionComponent },
  {path: 'AnsBoot/:ID', component:AnsBootComponent},
  {path: 'QuestionList', component:QuestionListComponent},
  {path: 'QuestionDetails', component:QuestionDetailsComponent },
  {path: 'OnlineTextEditor', component:OnlineTextEditorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
