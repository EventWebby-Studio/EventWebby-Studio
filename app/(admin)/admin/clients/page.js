export const dynamic = "force-dynamic"; // add at top of your file

import { prisma } from "../../../../lib/prisma";
import Link from "next/link";
import ClientsTable from "../../../../components/layout/ClientsTable";

export default async function ClientsPage() {

  const clients = await prisma.client.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log(clients);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-black mt-10 sm:mt-0">Client Interest Application</h1>
      </div>

{/* imported guesttable from client component, this table display the guests detail in table format and able to edit, delete, checkin */}
      <ClientsTable clients={clients} />
    </div>
  );
}
