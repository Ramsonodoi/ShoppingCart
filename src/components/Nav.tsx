import { Button } from "@mui/material"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdProductionQuantityLimits} from "react-icons/md"

type PropsType ={
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({viewCart, setViewCart}: PropsType) => {

    const button = viewCart ? <Button variant="contained" style={{backgroundColor:" #fff", color:"black"}}  endIcon={<MdProductionQuantityLimits/>} onClick={()=> setViewCart(false)}></Button>
    : <Button variant="contained" style={{backgroundColor:" #fff", color:"black"}} endIcon={<AiOutlineShoppingCart/>} onClick={()=> setViewCart(true)}></Button>

    const content = (
        <nav className="nav">
            {button}
        </nav>
    )
  return content
    }
export default Nav
