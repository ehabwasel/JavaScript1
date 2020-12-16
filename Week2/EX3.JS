var myrecipe = {
  Meal: 'Omelette',
  Serves: 2,
Ingredients: ["4 eggs","2 strips of bacon","1 tsp salt/pepper"]
};
for (const [key, value] of Object.entries(myrecipe)) {
  console.log(`${key}:${value}`);
}