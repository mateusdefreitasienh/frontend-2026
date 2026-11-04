import { CreateNotepadForm } from "../create-notepad-form";

export default function CreateNotepad() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="border-2 p-4 rounded-xl border-gray-400">
        <CreateNotepadForm />
      </div>
    </div>
  );
}
