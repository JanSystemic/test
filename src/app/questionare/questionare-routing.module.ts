import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionareComponent } from './questionare.component';

const routes: Routes = [{
  path: '', component: QuestionareComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionareRoutingModule { }
