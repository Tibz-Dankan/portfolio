import { html, useState, reactive, useEffect, getRef } from "z-js-framework";

export const AnimatedCircle = (props) => {
  const elementNumList = [1, 2, 3];
  const [elementNum, setElementNum] = useState(elementNumList[0]);

  const genElementRef = (num) => {
    return `${num}_${Date.now()}`;
  };

  const elementOneRef = genElementRef(1);
  const elementTwoRef = genElementRef(2);
  const elementThreeRef = genElementRef(3);

  const nextElementNumHandler = () => {
    const currentNumIndex = elementNumList.findIndex(
      (num) => num === elementNum.current()
    );

    if (currentNumIndex === elementNumList.length - 1) {
      setElementNum(elementNumList[0]);
      return;
    }
    const nextNumIndex = currentNumIndex + 1;
    setElementNum(elementNumList[nextNumIndex]);
  };

  const getElementRef = (num) => {
    if (num === 1) {
      return elementOneRef;
    } else if (num === 2) {
      return elementTwoRef;
    } else if (num === 3) {
      return elementThreeRef;
    } else {
      return null;
    }
  };

  const showCurrentChildElement = (num) => {
    let elementRef;
    elementRef = getRef(`${getElementRef(num)}`);
    elementRef.style.display = "block";

    const elementList = JSON.parse(JSON.stringify(elementNumList));
    const hideElementList = elementList.filter((element) => element !== num);

    hideElementList.forEach((element) => {
      elementRef = getRef(`${getElementRef(element)}`);
      elementRef.style.display = "none";
    });
  };

  const UI = () => html`<div class="flex items-center justify-center">
    <div
      class="w-[10vw] h-auto aspect-[1/1] border-[12px] border-blue-400 
       rounded-[50%] flex items-center justify-center"
    >
      <span
        ref=${elementOneRef}
        class="bg-yellow-500 w-4 h-4 rounded-[50%] hidden"
      ></span>
      <span
        ref=${elementTwoRef}
        class="bg-blue-500 w-4 h-4 rounded-[50%] hidden"
      ></span>
      <span
        ref=${elementThreeRef}
        class="bg-green-500 w-4 h-4 rounded-[50%] hidden"
      ></span>
    </div>
  </div>`;

  useEffect(() => {
    const currentElementNum = elementNum.current();

    showCurrentChildElement(currentElementNum);
  }, [elementNum]);

  useEffect(() => {
    const autoShowNextNum = () => {
      setInterval(nextElementNumHandler, 2000);
    };
    autoShowNextNum();
  }, []);

  return reactive(UI);
};
