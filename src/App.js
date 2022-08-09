import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item';
import Topbar from './components/Topbar';
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cartitem from "./components/Cartitem.js"



const App = () => {

  const [cartArrayData, setCartArrayData] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([])
  var length = cartArrayData.length;
  var count = 1

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
              setData(json.map((i)=>{return(i)})) 
            })
          },[])

  const onDelete = (id) => {
      setCartArrayData(prevValue => {
        return(
          prevValue.filter(
            (item, index)=>{
              return(
                cartArrayData[index].id !== id
              )
              }
            )
          )
        }
      )
  }

  const onAdd = (clickedItem) => {
    var a = []
    a = data.filter(element => element.id == clickedItem)
    cartArrayData.findIndex((i)=>i.id === a[0].id) === -1 ?
     setCartArrayData(prevValue => [...prevValue, a[0]]) : 
     setCartArrayData(prevValue => [...prevValue])
  }

  return (
    <div className="App bg-[#FFDEDE]">
      <Topbar />
      <div className=" absolute right-5 top-5">
        <div className=''> 
          <a className=' text-2xl'>{length}</a>
          <Button className=' relative bottom-1' onClick={() => setOpen(true)}><ShoppingCartIcon /></Button>
          <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
            <h3 className=" text-3xl m-5 mr-28">Your Shopping Cart</h3>
            {cartArrayData.map((cartArrayData) => {
              return(
                <Cartitem 
                  id={cartArrayData.id}
                  title={cartArrayData.title}
                  price={cartArrayData.price}
                  image={cartArrayData.image}
                  onDelete={onDelete}
                  count={count}
                />)
                }
              )
            }
          </Drawer>
        </div>
      </div>
        <div className='flex flex-wrap'>
          {data.map((data)=>{
            return(
              <Item
                id={data.id}
                title = {data.title}
                image = {data.image}
                price = {data.price}
                descr = {data.description}
                onAdd = {onAdd}
              />)
              }
            )
          }
        </div>
    </div>
  );
}

export default App;
