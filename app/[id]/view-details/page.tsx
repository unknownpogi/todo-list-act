import ViewDetails from "@/features/details/view";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <ViewDetails id={id} />;
};

export default EditPage;
