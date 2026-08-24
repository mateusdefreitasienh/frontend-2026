export default function Button(props){
    return <button style={{border:`solid ${props.corBorda} 2px`, textAlign:"center", color: props.corText, padding:"12px", borderRadius:"12px", backgroundColor: props.cor, fontSize:"1rem"}}>{props.children}</button>;
}