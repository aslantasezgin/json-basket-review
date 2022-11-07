import { useState } from 'react';
import './App.css';
import Card from './components/card/card.component';

function App() {

  const[productList, setProductList] = useState(
    [
      {
        id:1,
        price:200,
        name:"Apple",
        image:"https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        title:"Iphone 12"
      },
      {
        id:2,
        price:150,
        name:"Apple",
        image:"https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        title:"Iphone 11"
      },
      {
        id:3,
        price:100,
        name:"Apple",
        image:"https://images.unsplash.com/photo-1512012029568-5acf2f99223e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIweHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        title:"Iphone X"
      },
      {
        id:4,
        price:50,
        name:"Apple",
        image:"https://images.unsplash.com/photo-1565343122697-641cd5e29708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwOHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        title:"Iphone 8"
      },
    ]
  )

  const [boxProduct,setBoxProduct] = useState([])

  return (
    <div className="App">
      <h3>Product List</h3>
      <div className='gridItems'>
    {productList.map((product,index) => {
      return <Card onClick={() => {
        const arr=[...boxProduct]
        arr.push(product)
        setBoxProduct(arr)
      }} key="index" title={product.name} image={product.image} info={product.title} ></Card>
    } )}

      </div>


    {boxProduct.length>0 && <div>
      <h4>Basket</h4>
        {boxProduct.map((boxProduct,index) => {
        return   <div key={index}> {JSON.stringify(boxProduct)} </div>
        })}
      
       </div>} {boxProduct.length<1 && 
       <div> Sepetinizde ürün bulunmamaktadır.
        </div>}


    

    </div>
  );
}

export default App;
