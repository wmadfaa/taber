import React, { forwardRef, RefForwardingComponent } from "react";
import "./App.css";
import classNames from "classnames";
import Swiper from "swiper";

import { RequiredElementsProps } from "./shared";
import useSwiper from "./useSwiper";

export interface TabViewElement extends RequiredElementsProps {
  content: React.ReactNode;
}

export interface TabsViewsProps {
  elements: TabViewElement[];
  swiperInstance?: Swiper;
}

const TabsViews: RefForwardingComponent<HTMLDivElement, TabsViewsProps> = (
  { elements, swiperInstance },
  forwardedRef
) => {
  const { activeIndex } = useSwiper(swiperInstance);

  return (
    <div ref={forwardedRef} className={classNames("swiper-container")}>
      <div className={classNames("swiper-wrapper")}>
        {elements.map((el, index) => (
          <div key={index} className={classNames("swiper-slide")}>
            {activeIndex === index && el.content}
          </div>
        ))}
      </div>
    </div>
  );
};
export default forwardRef(TabsViews);
