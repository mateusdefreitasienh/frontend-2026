export default function PersonalData(props) {
    return (
        <div style={{
            width: "100%",
            padding: "8px 48px"
        }}>

            <div style={{marginBottom: "30px"}}>
                <input type="text" placeholder="Nome"
                style={{
                    width: "100%",
                    height: "40px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "16px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "12px",
                }}>O erro ocorre aqui</p>
            </div>

            <div style={{marginBottom: "30px"}}>
                <input type="text" placeholder="Sobrenome"
                style={{
                    width: "100%",
                    height: "40px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "16px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "12px",
                }}>O erro ocorre aqui</p>
            </div>

            <div style={{marginBottom: "30px"}}>
                <input type="email" placeholder="Email"
                style={{
                    width: "100%",
                    height: "40px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "16px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "12px",
                }}>O erro ocorre aqui</p>
            </div>

            <div style={{marginBottom: "30px"}}>
                <input type="text" placeholder="Celular"
                style={{
                    width: "100%",
                    height: "40px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "16px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "12px",
                }}>O erro ocorre aqui</p>
            </div>

            
                <button style={{
                    width:"100%",
                    height: "50px",
                    backgroundColor: "white",
                    border: "3px solid",
                    borderRadius: "9px",
                    fontSize: "20px"

                }}>Enviar</button>

        </div>
    )
}