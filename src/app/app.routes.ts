import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LevelPage } from './features/curriculam/level-page/level-page';
import { DashboardPage } from './features/curriculam/dashboard-page/dashboard-page';


export const routes: Routes = [
    {path: 'Levels', component: LevelPage},
    {path: 'Dashboard', component: DashboardPage},

    { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
];


