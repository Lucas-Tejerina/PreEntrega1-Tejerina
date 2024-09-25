import axios from "axios";

async function getData(){
  return await axios.get("/db/productData.json")
}

export async function getAllProducts() {
  return await getData();
}

export async function getProductById(id) {
  
  let allProducts = await getData();
  allProducts=allProducts.data;
  return allProducts.find((product) => product.id == id);
}

export async function getProductsByCategory(category) {
  let allProducts = await getData();
  allProducts=allProducts.data;
  return allProducts.filter((product) => product.category.toLowerCase() == category.toLowerCase());
}

// export async function getCategories() {
//   let allProducts = await getData();
//   allProducts=allProducts.data;

//     const categoriasUnicas = [...new Set(allProducts.map(item => item.category))];
//     return categoriasUnicas
// ;
// }