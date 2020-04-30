import { useState, useEffect } from "react";
import Swiper from "swiper";

const useSwiper = (swiperInstance?: Swiper) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    if (swiperInstance) {
      if(activeIndex === undefined) setActiveIndex(swiperInstance.activeIndex);
      swiperInstance.on("slideChange", () =>
        setActiveIndex(swiperInstance.activeIndex)
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperInstance]);

  return { activeIndex };
};

export default useSwiper;
