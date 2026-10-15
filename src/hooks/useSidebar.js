
import { useCallback, useEffect, useState } from "react";

export default function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = useCallback(() => setIsOpen(true), []);
  const closeSidebar = useCallback(() => setIsOpen(false), []);

  const toggleSidebar = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeSidebar();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeSidebar]);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar
  };
}
