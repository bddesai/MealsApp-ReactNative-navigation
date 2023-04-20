import { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
}

export default MealsScreen;
