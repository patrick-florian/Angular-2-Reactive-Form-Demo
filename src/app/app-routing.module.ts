import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formdemo', component: FormdemoComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'nested-form', component: NestedFormComponent },
  { path: 'array-form', component: ArrayFormComponent },
  { path: 'valid-form', component: ValidFormComponent },
  { path: 'submit-form', component: SubmitFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
