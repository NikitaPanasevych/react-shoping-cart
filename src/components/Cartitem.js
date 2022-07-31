import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cartitem = (props) => {

    return(
        <div className=" grid-flow-col grid w-[30rem] rounded-lg mr-5 ml-5 mb-5 bg-slate-400">
            <div className=" text-center">
                <p className=" font-bold text-2xl h-20 w-64 mt-2 ml-5">{props.title}</p>
                <p className=" text-xl m-10 text-center font-semibold">{props.price}$</p>
                <div className=" grid grid-flow-col mt-28 ml-3 mb-5 bg-slate-100 rounded-md">
                    <Button className=" w-20" variant="text"><RemoveIcon /></Button>
                    <a className=" m-auto pl-10 pr-10">count</a>
                    <Button className=" w-20" variant="text"><AddIcon /></Button>
                </div>
            </div>
            <img className=" object-cover p-5 h-80 " 
            src={props.image} />
        </div>
    )
}

export default Cartitem;