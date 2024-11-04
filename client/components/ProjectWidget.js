import { html, useEffect, getRef, reactive } from "z-js-framework";
import { Modal } from "./Modal";
import { Video } from "./Video";
import { ImageSlider } from "./ImageSlider";

export const ProjectWidget = (props) => {
  const technologies = props.technologies;

  const loadTechnologies = () => {
    const technologyRef = getRef("technologyRef");

    technologies.forEach((technology, index) => {
      technologyRef.appendChild(
        html`<span
            class="text-[12px] font-semibold text-[#4dabf7] bg-[rgba(77,171,247,0.1)]
             rounded-xl px-2 py-1"
            >${technology}</span
          >,`
      );
    });
  };

  const genProjectRef = () => {
    return `projectRef_${Date.now()}`;
  };
  const projectRef = genProjectRef();

  const changeToProjectBgColor = () => {
    const projectSection = getRef("projectSectionRef");
    projectSection.style.background = props.styles.background;
  };

  const changeToDefaultBgColor = () => {
    const projectSection = getRef("projectSectionRef");
    const defaultBgColor =
      "linear-gradient(to bottom, rgba(116,143,252,0.015),rgba(116,143,252,0.15),rgba(116,143,252,0.015))";

    projectSection.style.background = defaultBgColor;
  };

  const UI = html`<div class="p-4 shadow-md rounded-md space-y-4
    border-[1px] border-gray-700" ref="${projectRef}"
    onmouseenter="${changeToProjectBgColor}" 
    onmouseleave="${changeToDefaultBgColor}">
    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center justify-center">
        <a
          href="${props.url}"
          target="_blank"
          class="flex items-center justify-start gap-2 outline-none
           hover:text-blue-600 hover:underline"
        >
          <img src="${props.logo}" 
            alt="${props.name}-logo"  
            style="width: ${props.styles.logo.width}; 
            margin: ${props.styles.logo?.margin};" 
          />
          <p class="text-xl">${props.name}</p>
        </a>
      </div>
      <div class="flex items-center justify-center gap-2">
        <a
          href="${props.links.github.url}"
          target="_blank"
          class="flex items-center justify-start gap-2 outline-none
          bg-[rgba(248,249,250,0.2)] rounded-[50%] p-2"
          style="pointer-events: ${!props.links.github.show && "none"}; 
           opacity: ${!props.links.github.show && "0.5"};
           cursor: ${!props.links.github.show && "now-allowed"};" 
        >
          <img src="icons/github.svg" 
            alt="Github Icon"  
            class="size-5"
          />
        </a>
        <a
          href="${props.links.site.url}"
          target="_blank"
          class="flex items-center justify-start gap-2 outline-none
          bg-[rgba(248,249,250,0.15)] rounded-[50%] p-2"
          style="pointer-events: ${!props.links.site.show && "none"}; 
           opacity: ${!props.links.site.show && "0.5"};
           cursor: ${!props.links.site.show && "not-allowed"};" 
        >
          <img src="icons/link.svg" 
            alt="Link Icon"  
            class="size-5"
          />
        </a>
      </div>
    </div>
    <div class="flex flex-col items-centers justify-center gap-4">
      <div class="relative">
        <a href="${props.url}" target="_blank" class="relatives">
          <img
            src="${props.cover_image_url}"
            alt="${props.name}-cover-image"
            class="w-full rounded-lg"
          />
        </a>
        <div
          class="absolute bottom-0 right-0 w-20 h-12 rounded-br-lg
          flex items-center justify-center gap-2 z-30 p-4"
          style="background: linear-gradient(to bottom right, rgba(28, 126, 214, 0.0), 
         rgba(28, 126, 214, 0.0), rgba(28, 126, 214, 0.1), rgba(28, 126, 214, 0.1), 
         rgba(28, 126, 214, 0.2), rgba(28, 126, 214, 0.2), rgba(28, 126, 214, 0.3), 
         rgba(28, 126, 214, 0.4), rgba(28, 126, 214, 0.6), rgba(28, 126, 214, 0.8));"
        >
        ${
          props.name === "Docease"
            ? html`<div>
                ${Modal({
                  openModalElement: html`<span>
                    <img
                      src="icons/expand-black.svg"
                      alt="Expand Icon"
                      class="size-5 cursor-pointer"
                    />
                  </span>`,
                  contentElement: html`<div>
                    ${ImageSlider({
                      images: props.image_slide_urls,
                      name: props.name,
                      logo: props.logo,
                      url: props.url,
                      styles: props.styles,
                    })}
                  </div>`,
                })}
              </div>`
            : html`<div>
                ${Modal({
                  openModalElement: html`<span>
                    <img
                      src="icons/expand-white.svg"
                      alt="Expand Icon"
                      class="size-5 cursor-pointer"
                    />
                  </span>`,
                  contentElement: html`<div>
                    ${ImageSlider({
                      images: props.image_slide_urls,
                      name: props.name,
                      logo: props.logo,
                      url: props.url,
                      styles: props.styles,
                    })}
                  </div>`,
                })}
              </div>`
        }
        <div>
          ${
            props.name === "Docease"
              ? html`<div>
                  ${Modal({
                    openModalElement: html`<span>
                      <img
                        src="icons/video-black.svg"
                        alt="Video Icon"
                        class="size-6 cursor-pointer"
                      />
                    </span>`,
                    contentElement: html`<div>${Video()}</div>`,
                  })}
                </div>`
              : html`<div>
                  ${Modal({
                    openModalElement: html`<span>
                      <img
                        src="icons/video-white.svg"
                        alt="Video Icon"
                        class="size-6 cursor-pointer stroke-gray-100"
                      />
                    </span>`,
                    contentElement: html`<div>${Video()}</div>`,
                  })}
                </div>`
          }
        </div>
        </div>
        </div>
        <div class="w-full text-sm italics text-gray-300">
          <p>${props.title}</p>
        </div>
      </div> 
      <div>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm font-semibold">Tools:</span>
        <div ref="technologyRef" class="flex items-center gap-1"></div>
      </div>
    </div>
  </div>`;

  useEffect(() => {
    loadTechnologies();
  }, []);

  return UI;
};
