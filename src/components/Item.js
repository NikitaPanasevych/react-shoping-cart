import { Button } from "@mui/material";

const Item = (props) => {
    return(
        <div className=" bg-white text-center w-[28rem] min-h-[30rem] ml-5 mt-5 rounded-3xl">
            <img className="" src={props.image} />
            <h2 className=" font-bold">{props.title}</h2>
            <p className=" text-left p-5">{props.descr}</p>
            <p className=" font-semibold">{props.price}$</p>
            <Button className=" w-[100%]" variant="text">Add to the cart</Button>
        </div>
    )
}

export default Item;