import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Recipe } from './recipe';

@Component({
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getRecipes().subscribe((data: Recipe[]) => this.recipes = data);
    }
    delete(id: number) {
        this.dataService.deleteRecipe(id).subscribe(data => this.load());
    }
}