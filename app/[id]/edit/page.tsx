import { CreateEditTodo } from "@/features/add-edit/view";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <CreateEditTodo id={id} />;
};

export default EditPage;
