

// initialization 
function init (){
    const rootid = document.getElementById("root")
    const root = ReactDOM.createRoot(rootid)
    root.render(<App/>)
}

init()

// rest of the application is present here

function App(){
    const inputRef = React.useRef(null)
    const openRoom = () =>{
        console.log(inputRef.current.value)
    }
    return (
        <React.Fragment>
        <h1>Chat server</h1>
        <div>
            <label>
                Enter chat room number
                <input type="number" ref={inputRef}/>  
                <button onClick={()=>openRoom()}>Enter Room</button>
            </label>    
        </div>        
        <div>
            <Chat/>
        </div>
        </React.Fragment>
    )
}  


function Chat(){

    React.useEffect(()=>{
        console.log("rendering chat")
        const webSocket = new WebSocket("wss://127.0.0.1:8080/socketserver", "protocolOne");
    
        return ()=>{
            webSocket.close()
        }
    },[])
    return (
        <React.Fragment>
            <div>chat</div>
        </React.Fragment>
    )
}