import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BullShitComponent } from './components/bull-shit/bull-shit.component';

const routes: Routes = [
  {path:'', component: BullShitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
