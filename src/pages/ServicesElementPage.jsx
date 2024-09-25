import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ServiceCard from '../components/service-card/service-card';
import serviceCardImg1 from '../assets/service-card-img.jpeg'
import serviceCardImg2 from '../assets/sportcars2.jpeg'
import serviceCardImg3 from '../assets/sportcars3.jpeg'
import serviceCardImg4 from '../assets/sportcars4.jpeg'
import serviceCardImg5 from '../assets/sportcars5.jpeg'
import { useTranslation } from "react-i18next";

const ServicesElementPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const renderServiceCards = () => {
    if (id === '1') {
      return (
        <>
          <ServiceCard serviceCardImg={serviceCardImg1} price={"1000"} person={"one person"} serviceText={"Experience an adrenaline-packed dune buggy ride in the Dubai desert. Book now and unwind with authentic Arabian hospitality."} />
          <ServiceCard serviceCardImg={serviceCardImg2} price={"2000"} person={"two person"} serviceText={"Thrill seekers! Join the ultimate desert dune buggy adventure for two. Relax afterwards with traditional local delicacies."} />
          <ServiceCard serviceCardImg={serviceCardImg3} price={"3000"} person={"three person"} serviceText={"Bring your friends and enjoy a fun-filled dune buggy ride across the vast desert. End the day with Arabian refreshments."} />
        </>

      );
    } else if (id === '2') {
      return (
        <>
          <>
            <ServiceCard serviceCardImg={serviceCardImg4} price={"1000"} person={"one person"} serviceText={"Solo adventurers, this is for you! Discover the desert’s beauty in a thrilling buggy ride followed by cultural Arabian experiences."} />
            <ServiceCard serviceCardImg={serviceCardImg5} price={"2000"} person={"two person"} serviceText={"Share an unforgettable two-person dune buggy ride in Dubai. Relax afterwards with refreshing drinks and local treats."} />
          </>

        </>
      );
    } else {
      return <p>{t("No service available")}</p>;
    }
  };

  return (
    <div className='bg-[#1e1f27] py-[20px]'>
      <div className='container'>
        <Link to={'/'} className='text-white xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs'>{t("Luxury Cars for Rent in Dubai/ Services/ Sports Car Rental Dubai Style Tour in Dubai")}</Link>
        <h1 className='text-white xl:text-[40px] lg:text-[37px] md:text-[30px] sm:text-[25px] text-[20px] font-bold py-[20px]'>{t("Sports Car Rental Dubai Style Tour in Dubai")}</h1>
        <div className='flex flex-wrap justify-center xl:gap-[20px] lg:gap-[16px] md:gap-[11px] sm:gap-[6px] gap-[5px]'>
          {renderServiceCards()}
        </div>
      </div>
    </div>
  );
};

export default ServicesElementPage;
