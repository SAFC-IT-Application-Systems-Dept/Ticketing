import { FormProps } from "../Form";
import { DefaultValues } from "react-hook-form";

export interface FormModalProps<T> extends FormProps<T> {
  open: boolean;
  onClose: () => void;
  title: string;
  isGrid: boolean;
  fields: {
    typeComponent?: string;
    options?: Array<{ label: string; value: string | number }>;
    rows?: number | undefined;
    maxRows?: number | undefined;
    name?: keyof T;
    label?: string;
    type?: string;
  }[];
}
