import { Carousel } from "react-responsive-carousel";
import items  from "@/components/AboutImages.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ResponsiveCarousel() {
  return (
    <div >
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
      >
        {items.map((item) => (
          <div key={item.id}>
            <Image
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                src={item.img}
                alt='logo'
                loading="eager"
              />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
