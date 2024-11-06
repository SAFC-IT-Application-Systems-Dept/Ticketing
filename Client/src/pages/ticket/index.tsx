import { PrivateLayout, TicketBlock } from '@/components';
import React from 'react'

export default function index() {
  return (
    <>
      <TicketBlock/>
    </>
  )
}


index.isPrivate = true;

index.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout pageTitle="Ticket">{page}</PrivateLayout>;
};
