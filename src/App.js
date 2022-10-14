import './App.css';

function App() {

  const product = {
    id: 1,
    title: "aya - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
    rate: 3.9,
    count: 120
    }
    }
  
  //   get all products
   fetch('https://fakestoreapi.com/products/',{method: 'get'})
  .then((res)  => res.json())
  .then((data) => console.log('data',data))
  
  
  // post a product
  fetch('https://fakestoreapi.com/products',{
      method:'post', 
      body: JSON.stringify(product),})
  .then((res)  => res.json())
  .then((data) => console.log('data',data))
  
  
  // edit product
  const product7 ={
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      }
  fetch('https://fakestoreapi.com/products/7',{
      method:'put', 
      body: JSON.stringify(product7),})
  .then((res)  => res.json())
  .then((data) => console.log('data',data))
  
  
  // delete product 
  fetch('https://fakestoreapi.com/products/6',{method:'delete'})
  .then((res)  => res.json())
  .then((data) => console.log('data',data))
  
  
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
