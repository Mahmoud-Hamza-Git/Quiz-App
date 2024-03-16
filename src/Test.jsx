import React, { useEffect } from "react";

const containerStyle = {
  height: "100vh",
  backgroundColor: "#000223ce",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

//

function Test() {
  const [toggle, setToggle] = React.useState(true);
  useEffect(() => {
    console.log("effect called");
    return () => {
      console.log("clean up called");
    };
  }, [toggle]);

  return (
    <div style={containerStyle}>
      <button onClick={() => setToggle(!toggle)}>Click Me</button>
      <h1>{toggle}</h1>
    </div>
  );
}

export default Test;
