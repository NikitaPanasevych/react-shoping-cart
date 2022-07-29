import Cart from "./Cart";

const Topbar = () => {
    return(
        <div className=" h-20 grid pt-3 bg-[#ABC9FF] text-center text-5xl ">
            <div className="">React Shopping Cart App</div>
            <div className=" absolute right-5">
                <Cart />
            </div>
        </div>
    )
}

export default Topbar;