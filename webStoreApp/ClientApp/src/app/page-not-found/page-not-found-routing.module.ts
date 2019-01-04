import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const route: Routes = [
    { path: '**', redirectTo: '/notfound'},
    { path: 'notfound', component: PageNotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
