import { ReactElement } from "react"
import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProduct"
import Product from "./Product"
import { Grid } from "@mui/material"

const ProductList = () => {
  const {dispatch, REDUCER_ACTIONS, cart} = useCart()
  const {products} = useProducts()

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  if (products?.length) {
    pageContent = products.map(product =>{
      const inCart: boolean = cart.some(item => item.sku === product.sku)

      return (
        <Grid item key={product.sku}  xs={12} sm={6} md={4}>
       <Product
        product={product}
        dispatch={dispatch}
        REDUCER_ACTIONS={REDUCER_ACTIONS}
        inCart={inCart}
        />
        </Grid>
       
      )
    })
  }

  const content = (
    <main>
      <Grid container spacing={3}>
         {pageContent}
      </Grid>
     
    </main>
  )
  return content
}

export default ProductList
