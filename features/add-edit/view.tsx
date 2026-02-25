"use client";

import { allNotesAtom, listNotesAtom } from "@/atoms/atom";
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
  const [allNotes, setAllNotes] = useAtom(listNotesAtom);
  const [allStoredNotes, setAllStoredNotes] = useAtom(allNotesAtom);
  const numericId = id ? Number(id) : undefined;
  const notess = allStoredNotes.find((note) => note.id === numericId);
  const [title, setTitle] = useState(notess?.title || "");
  const [notes, setNotes] = useState(notess?.notes || "");

  const handleAddSave = () => {
    setAllStoredNotes((notess) => {
      if (id) {
        return notess.map((item) =>
          item.id === numericId ? { ...item, title, notes } : item,
        );
      }
      return [
        ...notess,
        {
          id: notess.length + 1,
          title: title,
          notes: notes,
        },
      ];
    });
    route.push("/");
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
