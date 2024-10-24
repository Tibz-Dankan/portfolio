import { html, useState, reactive, useEffect } from "z-js-framework";

export const AnimatedCircle = (props) => {
  const children = [
    {
      element: html`<span class="bg-yellow-500 w-4 h-4 rounded-[50%]"></span>`,
    },
    {
      element: html`<span class="bg-blue-500 w-4 h-4 rounded-[50%]"></span>`,
    },
    {
      element: html`<span class="bg-green-500 w-4 h-4 rounded-[50%]"></span>`,
    },
  ];

  const [childElement, setChildElement] = useState(children[0].element);

  const nextChildHandler = () => {
    const currentChildIndex = children.findIndex(
      (child) => child.element === childElement.current()
    );

    console.log("currentChildIndex ", currentChildIndex);

    if (currentChildIndex === children.length - 1) {
      setChildElement(children[0].element);
      return;
    }
    const nextChildIndex = currentChildIndex + 1;
    setChildElement(children[nextChildIndex].element);
  };

  const UI = () => html`<div class="flex items-center justify-center">
    <div
      class="w-[10vw] h-auto aspect-[1/1] border-[12px] border-blue-400 
       rounded-[50%] flex items-center justify-center"
    >
      ${childElement}
    </div>
  </div>`;

  // useEffect(() => {
  //   const currentChildElement = childElement.current();

  //   const showCurrentChildElement = () => {
  //     images.forEach((image) => {
  //       const dot = getRef(image);
  //       if (image === currentChildElement) {
  //         dot.style.backgroundColor = props.styles.primary_light_color;
  //         dot.style.width = "10px";
  //         dot.style.height = "10px";
  //         return;
  //       }
  //       dot.style.backgroundColor = props.styles.primary_color;
  //       dot.style.width = "8px";
  //       dot.style.height = "8px";
  //     });
  //   };

  //   showCurrentChildElement();
  // }, [childElement]);

  useEffect(() => {
    const autoShowNextChildHandler = () => {
      setInterval(nextChildHandler, 2000);
    };
    autoShowNextChildHandler();
  }, []);

  return reactive(UI);
};
