import { Button } from "react-bootstrap";

export default function Users() {
    
    return (
        <>
            <div>
                <Button onClick={()=> console.log("hello")}>GetAllUsers</Button>
        </div>
        </>
    )
}