import { html, useEffect, getRef } from "z-js-framework";
import { Modal } from "./Modal";
import { Video } from "./Video";
import { ImageSlider } from "./ImageSlider";

export const ProjectWidget = (props) => {
  const technologies = props.technologies;

  const loadTechnologies = () => {
    const technologyRef = getRef("technologyRef");

    const isLastElement = (list, index) => {
      return list.length - 1 === index;
    };

    technologies.forEach((technology, index) => {
      technologyRef.appendChild(
        html`<span class="text-[12px] text-gray-400"
            >${technology}${!isLastElement(technologies, index)
              ? ","
              : ""}</span
          >,`
      );
    });
  };

  const UI = html`<div class="p-4 shadow-md rounded-md space-y-4 border-[1px] border-gray-700">
    <div class="flex items-center justify-start gap-2">
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
                      src="/public/icons/expand-black.svg"
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
                      src="/public/icons/expand-white.svg"
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
                        src="/public/icons/video-black.svg"
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
                        src="/public/icons/video-white.svg"
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
        <div class="w-full text-sm italics text-gray-400">
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
