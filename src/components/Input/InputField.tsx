import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error = false,
  helperText = "",
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      margin="normal"
      variant="outlined"
    />
  );
};

export default InputField;
