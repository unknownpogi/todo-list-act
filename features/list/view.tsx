"use client";

import { allNotesAtom, listNotesAtom } from "@/atoms/atom";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { Pencil, Trash2, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const View = () => {
  const [allNotes, setAllNotes] = useAtom(listNotesAtom);
  const [openModal, setOpenModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(0);
  const [allStoredNotes, setAllStoredNotes] = useAtom(allNotesAtom);

  // setAllStoredNotes(RESET);
  const handleDelete = () => {
    setAllStoredNotes((prevNotes) => {
      return prevNotes.filter((prev) => prev.id !== selectedNote);
    });
    setOpenModal(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-4 w-auto p-5 lg:mx-15 md:h-10">
      {allStoredNotes.length > 0 ? (
        allStoredNotes.map((note) => {
          return (
            <div key={note.id} className="bg-white rounded-3xl p-5 shadow-2xl">
              <div>
                <h1 className="font-bold text-xl text-black">{note.title}</h1>
              </div>
              <div className="pt-2 border-b-2">
                <p className="text-sm text-gray-400 mb-3 line-clamp-4">
                  {note.notes}
                </p>
              </div>

              <div className="flex justify-end pt-5 gap-3">
                <Link href={`/${note.id}/view-details`}>
                  <Pencil className="text-gray-400" size={20} />
                </Link>
                <button
                  onClick={() => {
                    setSelectedNote(note.id);
                    setOpenModal(true);
                  }}
                >
                  <Trash2 className="text-gray-400" size={20} />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>No Notes Stored</p>
        </div>
      )}

      {openModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-[90%] max-w-sm justify-center items-center flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <TriangleAlert
              size={40}
              className="text-red-500 mb-4 
              bg-gray-200 p-2 rounded-full"
            />

            <h2 className="text-lg font-bold mb-2 text-black">Delete task</h2>

            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 rounded border text-black hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={() => handleDelete()}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default View;
