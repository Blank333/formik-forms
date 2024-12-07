import { useEffect } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  timeout?: number;
  isSuccess?: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  isVisible,
  onClose,
  timeout = 3000,
  isSuccess = true,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed -top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white rounded shadow transition-transform duration-300 
        ${
          isVisible
            ? "translate-y-8 opacity-100"
            : "-translate-y-full opacity-0"
        } 
        ${isSuccess ? "bg-green-500 " : "bg-red-500 "}`}
      onClick={onClose}
    >
      {message}
    </div>
  );
}
