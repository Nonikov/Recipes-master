using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Recipes.Models;

namespace Recipes.Controllers
{
    [Route("api/recipes")]
    public class RecipesController : Controller
    {
        ApplicationContext db;
        public RecipesController(ApplicationContext context)
        {
            db = context;
            if (!db.Recipes.Any())
            {
                db.Recipes.Add(new Recipe { Name = "«Кабачки \"Пикантные\" в медовой заливке»", Text = "Кабачок (Молодые) — 500 г," +
                    " Укроп — 1 пуч., Чеснок — 2-3 зуб., Масло оливковое — 4 ст.л., Уксус (Белый винный) — 2 ст. л., Мед — 1 ст. л.," +
                    " Соль — по вкусу, Перец черный — по вкусу", Category = "Салаты" });
                db.Recipes.Add(new Recipe { Name = " бисквит «По-индийски»", Text = "Мука пшеничная / Мука — 300 г, " +
                    "Молоко — 200 мл, Йогурт (натуральный) — 200 мл, Сахар (или сахарная пудра) — 150 г," +
                    " Масло подсолнечное (или любое другое растительное масло) — 100 мл, Ванилин (ванильная эссенция, или ванильный сахар) — 1/2 ч. л., " +
                    "Порошок пекарский (в крайнем случае можно использовать обычную соду) — 3 ч. л.", Category = "Десерты" });
                db.Recipes.Add(new Recipe { Name = "Ажурные блины", Text = "Масло растительное (для выпекания), Сода (пищевая) — 1 ч. л., " +
                    "Соль — 0,5 ч. л., Сахар — 1 ст. л., Мука пшеничная / Мука — 1,5 стак., Яйцо куриное (свежее) — 1-2 шт, " +
                    "Молоко — 1 стак., Кефир — 0,5 л", Category = "Выпечка" });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return db.Recipes.ToList();
        }

        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            Recipe recipe = db.Recipes.FirstOrDefault(x => x.Id == id);
            return recipe;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                db.Recipes.Add(recipe);
                db.SaveChanges();
                return Ok(recipe);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                db.Update(recipe);
                db.SaveChanges();
                return Ok(recipe);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Recipe recipe = db.Recipes.FirstOrDefault(x => x.Id == id);
            if (recipe != null)
            {
                db.Recipes.Remove(recipe);
                db.SaveChanges();
            }
            return Ok(recipe);
        }
    }
}
