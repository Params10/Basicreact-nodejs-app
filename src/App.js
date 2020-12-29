import logo from './logo.svg';
import './App.css';

//import { Link, useHistory } from "react-router-dom"
import React, { useRef, useState } from "react"
import { Form, Button, Card} from "react-bootstrap"
import axios from 'axios';
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

function App() {

  const rollnoref = useRef()
  var [tabledata,setTabledata] = useState()

  return (
    <>
    <Card>
    <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
    <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css">
        </link>
      <Card.Body>
        <h2 className="text-center mb-4">Students results </h2>

        <Form >
          <Form.Group id="rollno">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="rollno" ref={rollnoref} required />
          </Form.Group>

          <Button className="w-100" onClick={handleSubmit} >
            Submit
            </Button>
        </Form>
      </Card.Body>
    </Card>

<BootstrapTable data={tabledata} striped hover>
<TableHeaderColumn isKey dataField='rollno' class="col-6">RN</TableHeaderColumn>
<p></p>
<TableHeaderColumn dataField='results'>Res</TableHeaderColumn>

</BootstrapTable>
</>

  );

  function handleSubmit() {
    var tempStr = rollnoref.current.value;
    var rollNoArr = tempStr.split(',');
    console.log(typeof (rollNoArr[0]));
    var rollnojson = JSON.stringify(rollNoArr);
    console.log(typeof (rollnojson));
  //   var body = {
  //     : rollnojson,
  //     userEmail: 'Flintstone@gmail.com'
  // };
    
   // We will be coding here
   axios.post("http://localhost:5000/rollno", {
    rollno: rollNoArr,
})
    .then((response) => {
      setTabledata(response.data);
      
    }, (error) => {
        console.log(error);
    });

      



  }

}

export default App;
