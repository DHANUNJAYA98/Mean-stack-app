import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.css'],
})
export class PizzaBuilderComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredients: Ingredient[] = [];
  totalCost = 0;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe((data) => {
      this.ingredients = data;
    });
  }

  onIngredientChange(event: any, ingredient: Ingredient) {
    if (event.target.checked) {
      this.selectedIngredients.push(ingredient);
      this.totalCost += ingredient.price;
    } else {
      const index = this.selectedIngredients.findIndex(
        (item) => item.id === ingredient.id
      );
      if (index > -1) {
        this.selectedIngredients.splice(index, 1);
        this.totalCost -= ingredient.price;
      }
    }
  }
}
