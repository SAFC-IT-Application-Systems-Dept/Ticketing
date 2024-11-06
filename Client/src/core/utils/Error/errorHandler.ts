export const errorHandler = (error: any): string => {
  return error?.response?.data?.message || "An unexpected error occurred";
};
