import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from "react";


function Cart() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}><ShoppingCartIcon /></Button>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        Shopping List
      </Drawer>
    </div>
  );
}

export default Cart;