import { Control, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

export interface FormProps<T> {
  control: Control<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: SubmitHandler<T>;
  isLoading: boolean;
}
