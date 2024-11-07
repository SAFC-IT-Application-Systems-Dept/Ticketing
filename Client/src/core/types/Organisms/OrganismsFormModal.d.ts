import { FormProps } from "../Form";
import { DefaultValues } from "react-hook-form";

export interface FormModalProps<T> extends FormProps<T> {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: {
    typeComponent?: string;
    options?: never[];
    rows?: number | undefined;
    maxRows?: number | undefined;
    name?: keyof T;
    label?: string;
    type?: string;
  }[];
}
