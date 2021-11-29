import Button from "./Button";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Header = ({showForm, showValue}) => {
    const onClick = ()=>{
        console.log('Clicked')
    }
    return (
        <header  className="header">
            <h1>Test Application </h1>
            <Button color={showValue ? 'red' : 'green'} text={showValue ? <FaMinusCircle/> : <FaPlusCircle/> } onClick={()=> showForm()}/>
        </header>
    )
}

// const headingStyle = {
//     color:'red'
// }

export default Header
