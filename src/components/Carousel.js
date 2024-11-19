import items  from "@/components/AboutImages.js";
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'

export default function ResponsiveCarousel() {
  return (
    <div >
      <Carousel
       
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
