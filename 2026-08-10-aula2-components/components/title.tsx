export default function Title(props) {
    return <h1 style={{
        color: props.cor,
        fontSize: '20px'
    }}>{props.children}</h1>
}