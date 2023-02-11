// import { ChangeEventHandler } from 'react';
import { ChangeEventHandler, useRef } from "react";

const fileImage = new Image();
export const useHooks = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    console.log("file:", file);

    const imageContainer = imageContainerRef.current;
    if (!imageContainer) return;
    fileImage.src = window.URL.createObjectURL(file);
    imageContainer.appendChild(fileImage);
  };
  // return { handleFiles };
  return { handleFiles, imageContainerRef };
};
