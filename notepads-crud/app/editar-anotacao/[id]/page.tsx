"use client";

import { useParams } from "next/navigation";
import { EditNotepadForm } from "../../edit-notepad-form";

export default function EditNotepad() {
  const params = useParams();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="border-2 p-4 rounded-xl border-gray-400">
        <EditNotepadForm id={Number(params.id)} />
      </div>
    </div>
  );
}
