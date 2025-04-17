import { FC } from "react"
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";

const Categories: FC = () => {
  const categories = [
    {
      title: 'Wing Chair',
      products: '3,584 products',
      image: '/Assets/Categories/categories_1.png'
    },
    {
      title: 'Wing Chair',
      products: '157 products',
      image: '/Assets/Categories/categories_2.png'
    },
    {
      title: 'Wing Chair',
      products: '154 products',
      image: '/Assets/Categories/categories_3.png'
    },
    {
      title: 'Park Bench',
      products: '154 products',
      image: '/Assets/Categories/categories_4.png'
    }
  ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: '160px',
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="lg:container mx-auto">

      <SectionTitle title="Top Categories" mb='mb-11' textAlign="start"></SectionTitle>
      <div className="slider-container features_slider w-ful h-full">
        <Slider {...settings} >
          {categories.map((category, index) => (
            <div key={index} className="p-4 ">
              <div className="feature_image mb-4 relative">
                <img className="w-full h-[442px] object-cover rounded-lg" src={category?.image} alt={category?.title} />
                <div className="absolute bottom-0 left-0 w-full h-[85px] bg-[#000000] opacity-50 flex flex-col justify-center p-4">
                  <h4 className="text-xl text-white font-inter font-semibold mb-4 capitalize">{category?.title}</h4>
                  <p className=" text-sm text-white font-normal font-inter capitalize">{category.products}</p>
                </div>
              </div>

              {/* <div className="feature_content">
                <div className="flex items-center justify-between">
                  <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{feature?.title}</h4>
                  <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff" /></span>
                </div>
                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                  {feature?.price}
                  {
                    feature?.currentPrice && (
                      <span className="text-sm text-[#9a9caa] font-inter font-normal">{feature?.currentPrice}</span>
                    )
                  }
                </p>
              </div> */}

            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default Categories