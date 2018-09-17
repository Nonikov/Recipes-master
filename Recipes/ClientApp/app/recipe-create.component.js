var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Recipe } from './recipe';
var RecipeCreateComponent = /** @class */ (function () {
    function RecipeCreateComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.recipe = new Recipe(); // добавляемый объект
    }
    RecipeCreateComponent.prototype.save = function () {
        var _this = this;
        this.dataService.createRecipe(this.recipe).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
    };
    RecipeCreateComponent = __decorate([
        Component({
            templateUrl: './recipe-create.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], RecipeCreateComponent);
    return RecipeCreateComponent;
}());
export { RecipeCreateComponent };
//# sourceMappingURL=recipe-create.component.js.map