import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, SharedTextField } from "shared-ui";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

// create context

const MyContext = React.createContext({
  name: "test",
  age: 10,
});

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const context = React.useContext(MyContext);
  return (
    <div className="App">
      <MyContext.Provider value={{ name: "test", age: 10 }}>
        <form
          style={{
            border: "1px solid red",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            maxWidth: "300px",
            margin: "15px",
            gap: "15px",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          form
          <TextField />
          <input type="submit" />
        </form>
        shared:
        <SharedTextField name="test" value={"test"} />
        <Button onClick={() => console.log("clicked")}>Click me</Button>
      </MyContext.Provider>
    </div>
  );
}

export default App;
