
import { ReactNode } from "react";
interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  children: ReactNode;
}

export function ConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
  children,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center">
<div className="bg-white w-[25rem] rounded-2xl">
      <div className="bg-main-theme/30 main-border
       rounded-2xl p-6 shadow-lg w-[100%] max-w-md">
        <div className="mb-4 text-center">{children}</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="btn bg-button hover:bg-gray-300"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="btn bg-red-500 text-gray-200 hover:bg-red-600"
          >
            Confirmer
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}