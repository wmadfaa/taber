import React, { useRef, useState, useEffect } from "react";
import TabsController from "./TabsController";
import TabsViews from "./TabsViews";
import { TabViewElement } from "./TabsViews";
import { Swiper } from "swiper/js/swiper.esm.js";

const elements: TabViewElement[] = [
  {
    label: "Swiper 1",
    content: "Swiper 1",
  },
  {
    label: "Swiper 2",
    content: "Swiper 2",
  },
  {
    label: "Swiper 3",
    content: "Swiper 3",
  },
  {
    label: "Swiper 4",
    content: "Swiper 4",
  },
  {
    label: "Swiper 5",
    content: "Swiper 5",
  },
  {
    label: "Swiper 6",
    content: "Swiper 6",
  },
];

function App() {
  const tabsViewsRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<Swiper>();

  useEffect(() => {
    if (tabsViewsRef.current) {
      setSwiperInstance(
        new Swiper(tabsViewsRef.current, {
          preventInteractionOnTransition: true,
        })
      );
    }
  }, []);

  return (
    <div style={{height: '100%', display: "flex", flexDirection: 'column', alignItems: "center"}}>
      <TabsController elements={elements} swiperInstance={swiperInstance} />
      <div style={{width: "50%", height: "50%"}}>
        <TabsViews
          elements={elements}
          ref={tabsViewsRef}
          swiperInstance={swiperInstance}
        />
      </div>
    </div>
  );
}

export default App;
