import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Sweetalert2, Sweetalert3, Sweetalert5, Sweetalert9 } from "./Data";

export default function TestPage() {
  return (
    <>
      <Card>
        <Card.Header className="">header</Card.Header>
        <Card.Body className="m-auto">
          <br />
          <p className="text-center">
            <Button onClick={Sweetalert2}>Alert 2</Button><br></br><br></br>
            <Button onClick={Sweetalert3}>Alert 3</Button><br></br><br></br>
            <Button onClick={Sweetalert5}>Alert 5</Button><br></br><br></br>
            <Button onClick={Sweetalert9}>Alert 9</Button><br></br><br></br>
          </p>
          <hr />
        </Card.Body>
      </Card>
    </>
  );
}