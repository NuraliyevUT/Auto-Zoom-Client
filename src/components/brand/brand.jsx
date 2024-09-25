import React from 'react'
import SwiperBrand from './swiper-brand'
import { useTranslation } from "react-i18next";


const Brand = () => {
  const { t } = useTranslation();
  return (
    <div className='py-[80px] bg-[#1e1f27]'>
        <div className="container">
          <h2 className='uppercase xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[30px] text-[30px] text-white xl:mb-[50px] lg:mb-[40px] md:mb-[30px] sm:mb-[30px] mb-[30px] xl:text-left lg:text-left md:text-left sm:text-left text-center font-semibold'>{t("Brands")}</h2>
          <SwiperBrand/>
        </div>
    </div>
  )
}

export default Brand