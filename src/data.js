export const products = {
    groceries: Array.from({ length: 10 }, (_, i) => ({ id: i, name: `Grocery Item ${i + 1}` })),
    kitchenware: Array.from({ length: 10 }, (_, i) => ({ id: i + 10, name: `Kitchenware Item ${i + 1}` })),
    dairy: Array.from({ length: 10 }, (_, i) => ({ id: i + 20, name: `Dairy Item ${i + 1}` })),
    toiletries: Array.from({ length: 10 }, (_, i) => ({ id: i + 30, name: `Toiletry Item ${i + 1}` })),
  };
  