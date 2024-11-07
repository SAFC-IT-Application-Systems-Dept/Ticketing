import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TicketFormSchema,
  TicketFormType,
} from "@/core/Schema/TicketBlock/ticketBlockSchema";
import { OrganismsFormModal } from "@/components/organisms";
import { useLoading } from "@/core/hooks";
import { useExecuteToast } from "@/core/context";
import { errorHandler } from "@/core/utils";
import { createTicketHeader } from "@/module/services/tickets/ticketsServices";

export default function TicketForm() {
  const { control, handleSubmit, reset } = useForm<TicketFormType>({
    resolver: yupResolver(TicketFormSchema),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const toast = useExecuteToast();

  const onSubmit: SubmitHandler<TicketFormType> = async (data) => {
    startLoading();

    try {
      const response = await createTicketHeader(data);
      const successMessage = response?.message || "Ticket created successfully";
      toast.executeToast(successMessage, "top-center", true, {
        type: "success",
      });
      reset();
    } catch (error: any) {
      toast.executeToast(errorHandler(error), "top-center", true, {
        type: "error",
      });
      console.log("This",error);
    } finally {
      stopLoading();
      handleCloseModal();
    }
  };

  return (
    <div>
      <OrganismsFormModal<TicketFormType>
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Ticket Form"
        fields={[
          {
            name: "category_id",
            label: "Title",
          },
          {
            name: "title",
            label: "Title",
          },
          {
            name: "body",
            label: "Body",
            rows: 4,
            maxRows: 8,
          },
        ]}
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
