import { makeAuthenticatedRequest } from "@/module/api/apiHelpers";

interface TicketRequest {
  title: string;
  body: string;
}

interface TicketResponse {
  message: string;
}

export const createTicketHeader = async (
  data: TicketRequest
): Promise<TicketResponse | null> => {
  const { data: responseData, error } =
    await makeAuthenticatedRequest<TicketResponse>(
      "api/ticket/ticket-hdr",
      "POST",
      data
    );

  if (error) {
    throw error;
  }

  return responseData;
};
