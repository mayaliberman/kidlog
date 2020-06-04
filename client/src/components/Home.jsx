import React from "react";
import Button from "@material-ui/core/Button";


const style = {
  background: "#504DE5",
  borderRadius: 100,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 90px",
    fontSize: "15px",
    margin: "30px"
};

function Home() {
  return (
    <div >
      <div >
        <h1>Every kid can become multi-talent</h1>
        <p >
          Track your kid's progress and share your expericnes
        </p>
        <Button variant="conteined" color="primary" size="small" >
          Let's Start
        </Button>
      </div>
    </div>
  );
}

export default Home;
