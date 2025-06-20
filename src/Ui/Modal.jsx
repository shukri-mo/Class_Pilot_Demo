// CreateClassModal.jsx
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose,children }) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

return createPortal(
  <div className="fixed inset-0 w-full h-screen bg-[var(--backdrop-color)] backdrop-blur-sm z-[1000] transition-all duration-500 flex items-center justify-center">
    <div
      ref={ref}
      className="bg-white p-6 rounded shadow-lg relative max-w-md w-full "
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-700 hover:text-black"
        aria-label="Close modal"
      >
        &times;
      </button>
{children}
    
    </div>
  </div>,
  document.body
);

}
