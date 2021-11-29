import Button from "./Button";


const Header = (props) => {
    const onClick = ()=>{
        console.log('Clicked')
    }
    return (
        <header  className="header">
            <h1>Test Application {props.title}</h1>
            <Button color="green" text="Click me" onClick={onClick}/>
            <Button color="red" text="Click me" onClick={onClick}/>
            <Button color="blue" text="Click me" onClick={onClick}/>
        </header>
    )
}

// const headingStyle = {
//     color:'red'
// }

export default Header
