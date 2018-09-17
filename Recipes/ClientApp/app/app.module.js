var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeFormComponent } from './recipe-form.component';
import { RecipeCreateComponent } from './recipe-create.component';
import { RecipeEditComponent } from './recipe-edit.component';
import { NotFoundComponent } from './not-found.component';
import { DataService } from './data.service';
// определение маршрутов
var appRoutes = [
    { path: '', component: RecipeListComponent },
    { path: 'create', component: RecipeCreateComponent },
    { path: 'edit/:id', component: RecipeEditComponent },
    { path: '**', component: NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
            declarations: [AppComponent, RecipeListComponent, RecipeCreateComponent, RecipeEditComponent,
                RecipeFormComponent, NotFoundComponent],
            providers: [DataService],
            bootstrap: [AppComponent] // корневой компонент, который вызывается по умолчанию при загрузке приложения
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map