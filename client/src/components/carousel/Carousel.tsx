import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useCarouselQuery } from "../../store/api/productapi";
export default function Carousel() {
  const navigate = useNavigate();
  const { data } = useCarouselQuery("j");

  const settings = {
    infinite: true,

    dots: true,
    speed: 1000,
    autoplay: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex mb-8 justify-center">
      <div className="rounded-md overflow-hidden w-[95%]">
        <Slider {...settings}>
          {data?.map((item: any, key: number) => {
            return (
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/shop/ProductId/${item._id}`)}
                key={key}
              >
                <img
                  className="w-full object-cover h-[200px] md:h-[450px]"
                  src={item.Image}
                  alt="picture"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
