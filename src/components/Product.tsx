import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"
import image1 from "../assets/images/item0001.jpg"
import { Button, Card, Typography } from "@mui/material"
import { AiOutlineShoppingCart } from "react-icons/ai"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}
const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType): ReactElement => {
    const img: string = new URL(image1,import.meta.url).href;
  
  
    console.log(img, "img")

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1}})
    const itemInCart = inCart ? '->Item in Cart: ✔' : null

    const content = 
    <Card sx={{maxWidth:345}} elevation={24}>
      <Typography style={{display:"flex", justifyContent:"center"}} variant="h5">{product.name} </Typography>
      <img src={image1}  alt={product.name} />
    
    <div style={{ display:"flex", justifyContent:"space-between"}}>
      <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'GHS'}).format(product.price)} {itemInCart} </p>
      <Button  style={{backgroundColor:" #fff", color:"black"}}  onClick={onAddToCart} endIcon={<AiOutlineShoppingCart/>}></Button>

    </div>
    </Card>
  return content
}



function areProductsEqual({product: prevProduct, inCart: prevInCart}: PropsType, {product: nextProduct, inCart: nextInCart}: PropsType){
  return (
    Object.keys(prevProduct).every(key =>
      prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
  ) && prevInCart === nextInCart
  )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct




