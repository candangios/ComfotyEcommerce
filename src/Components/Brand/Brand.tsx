const Brand = () => {
  const brands = [
    {
      id: 1,
      image: './src/Assets/Brands/brand_1.png'
    },
    {
      id: 1,
      image: './src/Assets/Brands/brand_2.png'
    },
    {
      id: 1,
      image: './src/Assets/Brands/brand_3.png'
    },
    {
      id: 1,
      image: './src/Assets/Brands/brand_4.png'
    },
    {
      id: 1,
      image: './src/Assets/Brands/brand_5.png'
    },
    {
      id: 1,
      image: './src/Assets/Brands/brand_6.png'
    },
    {
      id: 1,
      image: './src/Assets/Brands/brand_7.png'
    }
  ]
  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-7 items-center justify-center gap-5">
        {brands.map(brand => (
          <div key={brand.id} className="brand_item">
            <img className="w-auto h-auto" src={brand?.image} alt='brand' />
          </div>
        ))}

      </div>
    </div>
  )
}

export default Brand