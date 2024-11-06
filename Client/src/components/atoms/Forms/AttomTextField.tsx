import React from "react";
import { OutlinedInputProps, TextField, TextFieldProps } from "@mui/material";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  UnpackNestedValue,
  FieldPathValue,
  FieldPath,
} from "react-hook-form";

interface AttomsTextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  type?: OutlinedInputProps["type"];
  label?: string | JSX.Element | null;
  defaultValue?: UnpackNestedValue<FieldPathValue<T, FieldPath<T>>>;
}

const AttomsTextField = <T extends FieldValues>({
  name,
  control,
  label,
  defaultValue,
  type,
  ...props
}: AttomsTextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          value={field.value ?? ""}
          label={label}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          fullWidth
          type={type}
          variant="outlined"
          sx={{ mt: 2 }}
        />
      )}
    />
  );
};

export default AttomsTextField;
