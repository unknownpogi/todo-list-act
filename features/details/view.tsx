"use client";

import { allNotesAtom, listNotesAtom } from "@/atoms/atom";
import { useTask } from "@/hooks/task";
import { Note } from "@/types";
import axios from "axios";
import { useAtom } from "jotai";
import { ArrowLeft, Pencil } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  id?: string;
};

const ViewDetails = ({ id }: Props) => {
  if (!id) return null;
  const [selectedNotes, setSelectedNotes] = useAtom(listNotesAtom);
  const { data, isLoading, isFetching, isError, isSuccess } = useTask(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading task...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Error loading task</p>
      </div>
    );
  }

  const task = data.data;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-full max-w-3xl">
        <div className="">
          <Link href={"/"} className="flex gap-1.5">
            <ArrowLeft />
            Back to list
          </Link>
        </div>

        <div className="bg-white text-black rounded-lg">
          <div className="flex p-5 gap-5 border-b border-gray-400 justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">{task.title}</h1>
              <h5 className="text-gray-500 text-[14px]">
                Task ID: #{task.documentId}
              </h5>
            </div>
            <div className="flex p-2">
              <Link
                href={`/${id}/edit`}
                className="flex items-center justify-center gap-2 bg-blue-400 px-4 py-2 rounded"
              >
                <Pencil size={18} />
                <span className="text-sm">Edit Task</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col px-5 py-6">
            <h3 className="font-medium text-sm mb-3">DESCRIPTION</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {task.notes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
