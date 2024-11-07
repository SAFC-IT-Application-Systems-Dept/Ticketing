import * as yup from "yup";

export const TicketFormSchema = yup.object().shape({
  title: yup.string().required("firstName is Required"),
  body: yup.string().required("lastName is Required"),
  category_id: yup.string().required("lastName is Required"),
});

export type TicketFormType = yup.InferType<typeof TicketFormSchema>;
