import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeFormComponent } from './recipe-form.component';
import {RecipeCreateComponent } from './recipe-create.component';
import { RecipeEditComponent } from './recipe-edit.component';
import { NotFoundComponent } from './not-found.component';

import { DataService } from './data.service';

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'create', component: RecipeCreateComponent },
    { path: 'edit/:id', component: RecipeEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, RecipeListComponent, RecipeCreateComponent, RecipeEditComponent,
        RecipeFormComponent, NotFoundComponent],
    providers: [DataService], // регистрация сервисов
    bootstrap: [AppComponent] // корневой компонент, который вызывается по умолчанию при загрузке приложения
})
export class AppModule { }