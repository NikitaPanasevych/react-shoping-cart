import './App.css';
import Item from './components/Item';
import Topbar from './components/Topbar';
import data from "./Database.js"

const  App = () => {

  const createItem = (data) => {
    return(
      <Item
        title = {data.title}
        image = {data.image}
        price = {data.price}
        descr = {data.description}
       />
    )
  }

  return (
    <div className="App bg-[#FFDEDE]">
      <Topbar />
      <div className='flex flex-wrap'>
        {data.map(createItem)}
      </div>
    </div>
  );
}

export default App;
