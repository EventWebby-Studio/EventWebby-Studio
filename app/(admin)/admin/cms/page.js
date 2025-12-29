import { prisma } from "../../../../lib/prisma";
import Link from "next/link";
import GuestTable from "../../../../components/layout/GuestTable";

export default async function CMSPage() {

  const guests = await prisma.guest.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log(guests);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Guest RSVP</h1>
      </div>

{/* imported guesttable from client component, this table display the guests detail in table format and able to edit, delete, checkin */}
      <GuestTable guests={guests} />
    </div>
  );
}
