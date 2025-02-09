import { Routes } from '@angular/router';
import { NumberParentComponent } from './components/number-parent/number-parent.component';

export const routes: Routes = [
    {path: "" , loadComponent:()=>import('./components/number-parent/number-parent.component').then(c=>NumberParentComponent)}
];
