import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageaComponent} from './pagea/pagea.component'
import { PagebComponent} from './pageb/pageb.component'
import { PagecComponent} from './pagec/pagec.component'

const routes: Routes = [
  { path: '', component: PageaComponent},
  { path: 'pagea', component: PageaComponent},
  { path: 'pageb', component: PagebComponent},
  { path: 'pagec', component: PagecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
