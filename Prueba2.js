function reduceStock(products, soldItems) {
  soldItems.forEach((item) => {
    //items.quantity
    const product = products.find((p) => p.id === item.product_id);
    if (product) {
      product.stock = product.stock - product.stock; //First error
    }
  });
  return products;
}

function reduceStockFixed(products, soldItems) {
  soldItems.forEach((item) => {
    const product = products.find((p) => p.id === item.product_id);
    if (product) {
      product.stock = product.stock - item.quantity;
    }
  });

  return products;
}
