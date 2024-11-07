import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface ComboBoxOption {
  label: string;
  value: string | number;
}

interface MoleculesComboBoxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string | JSX.Element | null;
  options: ComboBoxOption[];
  defaultValue?: ComboBoxOption | string;
  fullWidth?: boolean;
}

const MoleculesComboBox = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  defaultValue = "",
  fullWidth = true,
  ...props
}: MoleculesComboBoxProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as any}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={(option) => option?.label ?? ""}
          isOptionEqualToValue={(option, value) =>
            option.value === (value as ComboBoxOption)?.value
          }
          onChange={(_, newValue) => {
            field.onChange(newValue ? newValue : "");
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              fullWidth={fullWidth}
              {...props}
            />
          )}
        />
      )}
    />
  );
};

export default MoleculesComboBox;
