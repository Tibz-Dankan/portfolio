import { html, useState, reactive, useEffect, getRef } from "z-js-framework";
import { classes } from "../utils/classes";

export const ImageSlider = (props) => {
  const images = props.images;
  const [currentDisplayImage, setCurrentDisplayImage] = useState(images[0]);

  const genImageRef = () => {
    return `ImageRef_${Date.now()}`;
  };
  const imageRef = genImageRef();

  const nextImageHandler = () => {
    const currentImageIndex = images.findIndex(
      (image) => image === currentDisplayImage.current()
    );

    if (currentImageIndex === images.length - 1) {
      setCurrentDisplayImage(images[0]);
      return;
    }
    const nextImageIndex = currentImageIndex + 1;
    setCurrentDisplayImage(images[nextImageIndex]);
  };

  const prevImageHandler = () => {
    const currentImageIndex = images.findIndex(
      (image) => image === currentDisplayImage.current()
    );

    if (currentImageIndex === 0) {
      setCurrentDisplayImage(images[images.length - 1]);
      return;
    }
    const prevImageIndex = currentImageIndex - 1;
    setCurrentDisplayImage(images[prevImageIndex]);
  };

  const UI = () => html`<div
    class="w-[70vw] sm:w-[608px] min-h-[54vh] flex flex-col items-center
     text-gray-100 bg-indigo-500s gap-4"
  >
    <div class="w-full flex items-center justify-start gap-2">
      <a
        href="${props.url}"
        target="_blank"
        class="flex items-center justify-start gap-2 outline-none hover:text-blue-600
         hover:underline  focus:text-blue-600s"
      >
        <img
          src="${props.logo}"
          alt="${props.name}-logo"
          class="${props.styles.logo}"
          style="width: ${props.styles.logo.width}; margin-top: ${props.styles
            .logo?.margin_top};"
        />
        <p class="text-xl">${props.name}</p>
      </a>
    </div>
    <div class="w-full h-auto">
      <img
        ref="${imageRef}"
        src="${currentDisplayImage.current()}"
        alt="display-image"
        class="${classes("w-full h-auto rounded-md", "")}"
        style="border: 4px solid ${props.styles.primary_color};"
      />
    </div>
    <div class="w-full flex items-center justify-end gap-32">
      <span onClick="${prevImageHandler}" class="rotate-[90deg]">
        <img
          src="/public/icons/chevron-down.svg"
          alt="chevron-down Icon"
          class="size-7 cursor-pointer"
        />
      </span>
      <span onClick="${nextImageHandler}" class="rotate-[-90deg]">
        <img
          src="/public/icons/chevron-down.svg"
          alt="chevron-down Icon"
          class="size-7 cursor-pointer"
        />
      </span>
    </div>
  </div>`;

  useEffect(() => {
    const currentImage = currentDisplayImage.current();

    const setImageSRCHandler = () => {
      const image = getRef(imageRef);
      if (!image) return;
      image.setAttribute("src", currentImage);
    };
    setImageSRCHandler();
  }, [currentDisplayImage]);

  useEffect(() => {
    const autoNextImageHandler = () => {
      setInterval(nextImageHandler, 2000);
    };
    autoNextImageHandler();
  }, []);

  return reactive(UI);
};
