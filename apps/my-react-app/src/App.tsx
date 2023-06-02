import "./App.css";
import { Button, SharedTextField } from "shared-ui";
import { TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const methods = useForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="App">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          shared:
          <SharedTextField name="test" value={"test"} />
          form
          <TextField />
          <input type="submit" />
        </form>
      </FormProvider>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </div>
  );
}

export default App;
