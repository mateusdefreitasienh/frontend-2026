export default function PostCard(props) {
    return <div style={{
        width: "90%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        WebkitBoxShadow: "0px 0px 15px 5px #B8B8B8",
        boxShadow: "0px 0px 15px 5px #B8B8B8",
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }}>
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "100px",
                marginBottom: "-30px",
                zIndex: "9999"

            }}>
                <img style={{
                    borderRadius: "100px"
                }} src={props.authorPicture} alt="" />
            </div>
        </div>


        <div style={{
            backgroundColor: "white",
            width: "100%",
            height: "200px",
        }}>

            <div style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "20px",
                marginTop: "7px",
                marginBottom: "18px"
            }}>
                <div style={{ backgroundColor: "grey", margin: "3px", padding: "4px", borderRadius: "20px" }}><span>{props.tagsA}</span></div>
                <div style={{ backgroundColor: "grey", margin: "3px", padding: "4px", borderRadius: "20px" }}><span>{props.tagsB}</span></div>
                <div style={{ backgroundColor: "grey", margin: "3px", padding: "4px", borderRadius: "20px" }}><span>{props.tagsC}</span></div>
            </div>

            <div style={{
                marginLeft: "20px",
                marginTop: "7px",
                fontSize: "13px"
            }}>
                <span>{props.dateText}</span>
            </div>

            <div style={{
                marginLeft: "20px",
                fontSize: "21px",
                color: "red"
            }}>
                <h1>{props.title}</h1>
            </div>

            <div style={{
                marginLeft: "20px",
                fontSize: "13px",
                color: "grey"
            }}>
                <h3>{props.subtitle}</h3>
            </div>

            <div style={{
                display: "flex",
                textAlign: "center",
                marginTop: "30px"
            }}>
                <div style={{ flex: "1", fontSize: "15px" }}>❤ {props.likes} </div>
                <div style={{ flex: "1", fontSize: "15px" }}>👁 {props.views}</div>
                <div style={{ flex: "1", fontSize: "15px" }}>🗨 {props.comments}</div>
            </div>

        </div>

    </div>
}