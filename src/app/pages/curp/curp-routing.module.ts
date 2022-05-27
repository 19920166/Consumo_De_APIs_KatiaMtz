import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurpComponent } from './curp.component';

const routes: Routes = [
  { path: '', component: CurpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurpRoutingModule { }
