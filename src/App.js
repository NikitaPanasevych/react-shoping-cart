import { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Topbar from './components/Topbar';
import data from "./Database.js"
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cartitem from "./components/Cartitem.js"




const App = () => {

  const [cartArrayData, setCartArrayData] = useState([]);
  const [open, setOpen] = useState(false);

  const createCartItem = (cartArrayData) => {
    return(
    <Cartitem 
      id={cartArrayData.id}
      title={cartArrayData.title}
      price={cartArrayData.price}
      image={cartArrayData.image}
     />)
  }

  const onAdd = (clickedItem) => {
    var a = []
    a = data.filter(element => element.id == clickedItem)
    setCartArrayData(prevValue => [...prevValue, a[0]])
  }

  const createItem = (data) => {
    return(
      <Item
        id={data.id}
        title = {data.title}
        image = {data.image}
        price = {data.price}
        descr = {data.description}
        onAdd = {onAdd}
       />
    )
  }

  return (
    <div className="App bg-[#FFDEDE]">
      <Topbar />
      <div className=" absolute right-5 top-5">
        <div>
        <Button onClick={() => setOpen(true)}><ShoppingCartIcon /></Button>
        <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
          <h3 className=" text-3xl m-5 mr-28">Your Shopping Cart</h3>
          {cartArrayData.map(createCartItem)}
        </Drawer>
    </div>
      </div>
      <div className='flex flex-wrap'>
        {data.map(createItem)}
      </div>
    </div>
  );
}

export default App;
