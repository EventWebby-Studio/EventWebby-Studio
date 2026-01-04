//lesson learned, for Dynamic route to work with [slug], u need to put req, like below for it to work!
//API for deleting guest by userid
export async function DELETE(req, { params }) {
  const { userid } = await params;

  console.log("userid deleting: " + userid);

  //delete guest from table
  const res = await prisma.client.delete({
    where: { id: userid },
  });

  console.log("res: ", res);

  if (res) {
    return new Response(
      JSON.stringify({ message: "Client deleted successfully" }),
      { status: 200 }
    );
  }
}

//API for updating guest by userid
// export async function PATCH(req, { params }) {}

//API for checkin
export async function PATCH(req, { params }) {
  const { userid } = await params;

  const res = await prisma.client.update({
    where: { id: userid },
    data: { projectAcceptance: true },
  });

  if (res) {
    return new Response(JSON.stringify(res), { status: 200 });
  }
}
