"use client";

import { allNotesAtom, listNotesAtom } from "@/atoms/atom";
import { useAddTask, useTask, useUpdateTask } from "@/hooks/task";
import { Note, Task } from "@/types";
import axios from "axios";
import { useAtom } from "jotai";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id?: string;
};

export const CreateEditTodo = ({ id }: Props) => {
  const route = useRouter();
  const {
    data,
    isLoading: isTaskLoading,
    isFetching,
    isError: isTaskError,
    isSuccess,
  } = useTask(id);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const {
    mutate: addTask,
    status,
    isError: isAddError,
    isSuccess: isAddSuccess,
  } = useAddTask();
  const { data: updatedTask, isError, mutate: updateTask } = useUpdateTask();

  useEffect(() => {
    if (data?.data?.title) {
      setTitle(data.data.title);
      setNotes(data.data.notes);
    }
  }, [data]);

  if (isTaskLoading) return <p>Loading task...</p>;
  if (isTaskError) return <p>Error loading task.</p>;

  const handleAddSave = () => {
    if (id) {
      updateTask(
        { id, title, notes },
        {
          onSuccess: () => {
            console.log("Task updated!");
            route.replace("/");
          },
          onError: (err) => console.error("Update failed", err),
        },
      );
    } else {
      addTask(
        { title, notes },
        {
          onSuccess: () => {
            console.log("Task added!");
            route.replace("/");
          },
          onError: (err) => console.error("Add failed", err),
        },
      );
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-full max-w-lg text-gray-400 text-sm">
        <Link href={"/"} className="mb-5 flex">
          <ArrowLeft size={18} />
          Back to list
        </Link>
        <div className="bg-gray-200 text-black shadow-2xl rounded-xl">
          <div className="px-6 py-5 border-b-2 border-gray-400">
            <h1 className="font-bold text-2xl">
              {id ? "Edit Task" : "Create"}
            </h1>
          </div>
          <div className="p-6">
            <div className="flex flex-col">
              <label className="text-sm">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-lg p-1.5 px-2.5 mb-8 bg-gray-200 text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Notes</label>
              <textarea
                value={notes}
                rows={5}
                onChange={(e) => setNotes(e.target.value)}
                className="border rounded-lg p-1.5 px-2.5 bg-gray-200 text-black"
              />
            </div>
          </div>
          <div className="flex p-4 gap-2">
            <button
              onClick={handleAddSave}
              className="bg-blue-500 flex-1 rounded-xl p-2"
            >
              {id ? "Save" : "Add"}
            </button>
            <button
              onClick={() => route.back()}
              className="bg-slate-200 flex-1 rounded-xl p-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
