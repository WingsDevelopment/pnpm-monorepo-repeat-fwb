import { TextField, TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";

export function SharedTextField(props: TextFieldProps) {
  const { control } = useFormContext();
  console.log({ control });

  return <TextField {...props} />;
}
export default SharedTextField;
