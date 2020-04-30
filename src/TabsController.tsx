import React from "react";
import Swiper from "swiper";
import classNames from "classnames";
import "./App.css";
import { RequiredElementsProps } from "./shared";
import useSwiper from "./useSwiper";

export interface TabsControllerProps<
  element extends object = RequiredElementsProps
> {
  elements: element[];
  swiperInstance?: Swiper;
}

const TabsController: React.FC<TabsControllerProps> = ({
  elements,
  swiperInstance,
}) => {
  const { activeIndex } = useSwiper(swiperInstance);

  const handleOnClick = (index: number) => () => {
    if (swiperInstance) {
      swiperInstance.slideTo(index, 300, false);
    }
  };

  return (
    <div className="tabs">
      {elements.map((el, index) => (
        <div
          className={classNames(["tab", { active: activeIndex === index }])}
          key={index}
          onClick={handleOnClick(index)}
        >
          <span>{el.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TabsController;
