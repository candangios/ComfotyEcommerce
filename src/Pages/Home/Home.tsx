import Banner from "../../Components/Banner/Banner"
import Brand from "../../Components/Brand/Brand"
import Categories from "../../Components/Categories/Categories"
import Client from "../../Components/Client/Client"
import Delivery from "../../Components/Delivery/Delivery"
import Features from "../../Components/Features/Features"
import Products from "../../Components/Products/Products"
import Recent from "../../Components/Recent/Recent"



const Home = () => {
  return (
    <div>
      {/* banner component*/}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center">

        <Banner />
      </div>
      <div className="delivery_component w-full min -h-[#150px]">
        <Delivery />
      </div>
      {/* brand component  */}
      <div className="brand flex items-center justify-center w-full mt-8 mb-8 h-[171px]">
        <Brand />
      </div>

      {/* feature */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features />
      </div>
      {/* category */}
      <div className="w-full flex items-center justify-center">
        <Categories />
      </div>
      {/* Product component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Products />
      </div>
      {/* Client say component */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">
        <Client />
      </div>
      {/* Recent component */}
      <div className="w-full flex items-center justify-center pb-[80px] pt-[80px]">
        <Recent />
      </div>

    </div>
  )
}

export default Home