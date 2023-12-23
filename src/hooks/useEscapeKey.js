import { useEffect } from 'react';

function useEscapeKey(isSidebarOpen, onClose) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.keyCode === 27 && isSidebarOpen) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isSidebarOpen, onClose]);
}

export default useEscapeKey;
