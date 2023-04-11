import { ChangeEvent, ReactElement, memo } from "react";
import { CartItemType, ReducerAction, ReducerActionType } from "../context/CartProvider"
import image1 from "../assets/images/item0001.jpg"
import { Button, Card, MenuItem, Select } from "@mui/material";


type PropsType = {
    item: CartItemType,
    dispatch:React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
}
const CartLineItem = ({item, dispatch, REDUCER_ACTIONS}: PropsType) => {

    const img: string = new URL(image1,import.meta.url).href;
    console.log(img)

    const lineTotal: number = (item.qty * item.price)

    const highestQty: number = 20 > item.qty ? 20 :item.qty;

    const optionValues: number[] = Array.from ({length: highestQty}, (_, i) => i + 1)

    const options: ReactElement[] = optionValues.map(val => {
        return <option key={`optGH₵{val}`} value={val}>{val}</option>
    })

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY, 
            payload: {...item, qty: Number(e.target.value)}
        })
    }

    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item,
    })

    const content = (
        <Card elevation={24} sx={{maxWidth: 345}}>
            <img src={image1} alt={item.name} />
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>

                 <div aria-label="Item Name">{item.name} </div>
            <div aria-label="Price Per Item">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'GHS'}).format(item.price)} </div>

            <label htmlFor="itemQty" className="offscreen">
                Item Quantity
            </label>
            <select name="itemQty" id="itemQty" value={item.qty} aria-label="Item Quantity" onChange={onChangeQty}>
                {options}
            </select>
             <div aria-label="Line Item Subtotal">
      {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'GHS'}).format(lineTotal)}
    </div>
            <Button
            aria-label="Remove Item From Cart"
            title="Remove Item From Cart"
            onClick={onRemoveFromCart}
            >
                ❌
            </Button>
            </div>
           
            
        </Card>
    )

  return content
}

function areItemsEqual ({ item: prevItem}: PropsType, {item: nextItem}: PropsType) {
    return Object.keys(prevItem).every(key => {
        return prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType]
    })
}

const MemoizedCartLinedItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual)

export default MemoizedCartLinedItem
