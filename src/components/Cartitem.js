import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from "@mui/material/ButtonGroup";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useState } from "react";

const Cartitem = (props) => {

    const [count, setCount] = useState(1)

    const handleDelete = () => {
            props.onDelete(props.id)
    }

    const handleAdd = () => {
            setCount(count+1)
    }

    const handleMinus = () => {
       count > 1 ? setCount(count-1) :  props.onDelete(props.id)
    }

    return(
        <div className=" grid-flow-col grid w-[30rem] rounded-lg mr-5 ml-5 mb-5 bg-slate-400">
            <div className=" text-center">
                <p className=" font-bold text-2xl h-20 w-64 mt-2 ml-5">{props.title}</p>
                <p className=" text-xl m-10 mt-12 ml-14 text-center font-semibold">Total: {Math.round(count * props.price*100)/100}$</p>
                <div className=" grid ml-24 mr-20 mb-5">
                    <a className="m-auto text-lg ">{count}</a>
                </div>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={handleMinus}><RemoveIcon /></Button>
                        <Button onClick={handleDelete}><DisabledByDefaultIcon /></Button>
                        <Button onClick={handleAdd}><AddIcon /></Button>
                    </ButtonGroup>
                
            </div>
            <img className=" object-cover p-5 h-80 " 
            src={props.image} />
        </div>
    )
}

export default Cartitem;