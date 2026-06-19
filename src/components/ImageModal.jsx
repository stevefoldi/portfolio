// import { useEffect } from "react";

export default function ImageModal({ image, onClose }) {
    // useEffect(() => {
    //     if (!image) return;

    //     const handleKeyDown = (e) => {
    //         if (e.key === "Escape") onClose();
    //     };

    //     document.addEventListener("keydown", handleKeyDown);
    //     document.body.style.overflow = "hidden";

    //     return () => {
    //         document.removeEventListener("keydown", handleKeyDown);
    //         document.body.style.overflow = "auto";
    //     };
    // }, [image, onClose]);

    if (!image) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
        <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
        >
            <button className="modal-close" onClick={onClose}>
                ×
            </button>

            <img src={image} alt="Project preview" />
        </div>
        </div>
    );
}