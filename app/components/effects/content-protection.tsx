import { useEffect } from "react";

const ROOT_PROTECTION_CLASS = "visual-ir-protection-enabled";
const EDITABLE_SELECTOR = [
  "input",
  "textarea",
  "select",
  "[contenteditable='true']",
  "[data-allow-select]",
  "[data-allow-context-menu]",
].join(", ");

function getTargetElement(target: EventTarget | null) {
  return target instanceof Element ? target : null;
}

function isEditableTarget(target: EventTarget | null) {
  return Boolean(getTargetElement(target)?.closest(EDITABLE_SELECTOR));
}

function shouldBlockDrag(target: EventTarget | null) {
  return Boolean(getTargetElement(target)?.closest("img, svg, canvas, picture, a"));
}

function shouldBlockShortcut(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  const hasPrimaryModifier = event.metaKey || event.ctrlKey;

  if (event.key === "F12") {
    return true;
  }

  if (hasPrimaryModifier && ["c", "p", "s", "u"].includes(key)) {
    return true;
  }

  if (hasPrimaryModifier && event.shiftKey && ["c", "i", "j", "k"].includes(key)) {
    return true;
  }

  return false;
}

export function ContentProtection() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(ROOT_PROTECTION_CLASS);

    const preventDefault = (event: Event) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      if (!shouldBlockShortcut(event)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
    };

    const handleDragStart = (event: DragEvent) => {
      if (!shouldBlockDrag(event.target)) {
        return;
      }

      event.preventDefault();
    };

    document.addEventListener("contextmenu", preventDefault, true);
    document.addEventListener("selectstart", preventDefault, true);
    document.addEventListener("copy", preventDefault, true);
    document.addEventListener("cut", preventDefault, true);
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("dragstart", handleDragStart, true);

    return () => {
      root.classList.remove(ROOT_PROTECTION_CLASS);
      document.removeEventListener("contextmenu", preventDefault, true);
      document.removeEventListener("selectstart", preventDefault, true);
      document.removeEventListener("copy", preventDefault, true);
      document.removeEventListener("cut", preventDefault, true);
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("dragstart", handleDragStart, true);
    };
  }, []);

  return null;
}
