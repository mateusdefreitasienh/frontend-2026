import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils";

export default function Card(props) {
    return <div style={{
        backgroundColor: "gray",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        height: "350px"
    }}>
        <h1 style={{
            color: "white",
            fontSize: "20px",
        }}>{props.title}</h1>
        <span>{props.date}</span>
        <img src={props.img} alt="" />
        <p style={{
            color: "white",
            fontSize: "14px",
            padding: "10px"
        }}>{props.text}</p>
    </div>
}