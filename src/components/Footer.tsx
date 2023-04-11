
import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
}

const Footer = ({viewCart}: PropsType) => {
    const {totalItems, totalPrice} = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart
    ? <p>Shopping Cart &copy;{year} </p>
    : (
        <div className="footer">
        <h1 style={{color:"#2C2C2C"}}>
        Ram Corporation
        </h1>
        <p>
            Specializes in providing high-quality, products for your hands.
        </p>
       <div className="footer-border">.</div>
        <p>Shopping Cart &copy; {year} </p>
        </div>
    )
    const content = (
        <footer className="footer">
            {pageContent}
        </footer>
    )
  return content
}

export default Footer
