import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'greetings',
        loadComponent: () => import('./components/greetings/greetings').then(m => m.Greetings)
    },
    {
        path: '',
        loadComponent: () => import('./components/test/page1.component').then(m => m.ComponentOverview)
    },
    {
        path: 'todos',
        loadComponent: () => import('./todos/todos').then(m => m.Todos)
    },
    {
        path: 'counter',
        loadComponent: () => import('./components/counter/counter').then(m => m.Counter)
    }
];
