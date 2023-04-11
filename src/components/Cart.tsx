import { useState } from "react";
import useCart from "../hooks/useCart"
import CartLineItem from "./CartLineItem"
import { Button, Grid } from "@mui/material";
const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const {dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart} = useCart()
  
  const onSubmitOrder = () => {
    dispatch({type: REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
  }

  const pageContent = confirm 
      ? <h2>Thank you for your order.</h2>
      : <>
      <h2>Cart</h2>
      <Grid container spacing={3}>
        {cart.map(item => {
          return (
            <Grid item key={item.sku}  xs={12} sm={6} md={4}> 
               <CartLineItem
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
            </Grid>
           
          )
        })}
      </Grid>
      <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
       
        <Button variant="contained" style={{backgroundColor:" #fff", color:"black"}}  disabled={!totalItems} onClick={onSubmitOrder} > 
          Place Order
        </Button>
      </div>
      </>

      const content = (
        <main>
          {pageContent}
        </main>
      )
  return content
}

export default Cart
