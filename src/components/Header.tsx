import Nav from "./Nav"
import useCart from "../hooks/useCart"
import  '../assets/css/header.css'
import Ramson from "../assets/images/Ramson.png"

type PropsType ={
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({viewCart, setViewCart}: PropsType) => {

    const {totalItems, totalPrice} = useCart()

    const content = (

        <header className="header">
            <div className="header__title-bar">
                <img src={Ramson} alt="Ramson" width="10%" height="10%"/>
                <h1 style={{color:"#2C2C2C"}}>Ram Corporation</h1>
                </div>
                <div>
            </div>
            <div style={{justifyContent:"space-between", display:"flex", flexDirection:"column", justifyItems:"center"}}>
                 <div className="header__price-box">
                    <p style={{color:"#C7C6CB"}}>Total Items: <span style={{color:"#545657"}} >{totalItems}</span> </p>
                    <p  style={{color:"#C7C6CB"}}>Total Price: <span  style={{color:"#545657"}}>{totalPrice}</span>  </p>
                </div>
                    <div style={{marginBottom:"10px"}}>
                <Nav viewCart={viewCart} setViewCart={setViewCart}/>
                    </div>
            </div>
               
        </header>
    )

  return content
}

export default Header
