import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, actionBar, onClose }) {
  // useEffect(() => {
  //   document.body.classList.add("overflow-hidden");

  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, []);
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-300/80">
      <div className="min-h-fit rounded-lg fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between gap-y-4 h-full overflow-auto">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-container")
  );
}
