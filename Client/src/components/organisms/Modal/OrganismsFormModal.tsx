import React, { useState } from "react";
import { Modal, Typography, IconButton } from "@mui/material";
import { Control, FieldValues, SubmitHandler } from "react-hook-form";
import { AtomButton, AttomTextField } from "@/components/atoms";
import { FormModalProps } from "@/core/types/Organisms/OrganismsFormModal";

export default function OrganismsFormModal<T extends FieldValues>(
  props: FormModalProps<T>
) {
  const [isModalOpen, setIsModalOpen] = useState(props.open);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const onSubmit: SubmitHandler<T> = async (data) => {
    if (props.onSubmit) {
      await props.onSubmit(data);
    }
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="btn-primary">
        Open Form Modal
      </button>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4">
              <Typography
                variant="h6"
                className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300"
              >
                {props.title}
              </Typography>
              <IconButton
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-300"
              >
                ×
              </IconButton>
            </div>
            <form onSubmit={props.handleSubmit(onSubmit)} className="space-y-4">
              {props.fields.map((field, index) => {
                if (field.typeComponent === "select") {
                  return <h1>This is select</h1>;
                }
                return (
                  <AttomTextField
                    key={index}
                    name={field.name as any}
                    control={props.control as Control<T>}
                    type={field.type}
                    label={field.label}
                    rows={field.rows}
                    maxRows={field.maxRows}
                  />
                );
              })}
              <AtomButton
                label={props.isLoading ? "Submitting..." : "Submit"}
                isLoading={props.isLoading}
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                disabled={props.isLoading}
              />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
