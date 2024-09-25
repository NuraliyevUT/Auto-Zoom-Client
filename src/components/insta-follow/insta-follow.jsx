import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // react-icons'dan FaTimes import qilamiz
import insta1 from '../../assets/instagram1.webp';
import insta2 from '../../assets/instagram2.webp';
import insta3 from '../../assets/instagram3.webp';
import insta4 from '../../assets/instagram4.webp';
import insta5 from '../../assets/instagram5.webp';
import insta6 from '../../assets/instagram6.webp';

const InstaFollow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className='bg-[#1e1f27] pt-[40px] pb-[40px]'>
      <div className='container'>
        <h1 className='xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl  text-xl text-white font-black  xl:mb-[25px] lg:mb-[20px] md:mb-[15px] sm:mb-[10px]   mb-[10px] xl:text-left lg:text-left md:text-left sm:text-center text-center'>FOLLOW US ON INSTAGRAM</h1>
        <div className='flex flex-wrap justify-center gap-[20px]'>
          <button onClick={() => openModal(insta1)}>
            <img className='xl:w-[185px] lg:w-[190px] md:w-[200px] sm:w-[230px] w-[300px] xl:h-[175px] lg:h-[175px] md:h-[175px] sm:h-[170px] h-[210px]
             xl:my-[25px] lg:my-[20px] md:my-[15px] sm:my-[10px] my-[5px]' src={insta1} alt='' />
          </button>
          <button onClick={() => openModal(insta2)}>
            <img className='xl:w-[185px] lg:w-[190px] md:w-[200px] sm:w-[230px] w-[300px] xl:h-[175px] lg:h-[175px] md:h-[175px] sm:h-[170px] h-[210px]
             xl:my-[25px] lg:my-[20px] md:my-[15px] sm:my-[10px] my-[5px]' src={insta2} alt='' />
          </button>
          <button onClick={() => openModal(insta3)}>
            <img className='xl:w-[185px] lg:w-[190px] md:w-[200px] sm:w-[230px] w-[300px] xl:h-[175px] lg:h-[175px] md:h-[175px] sm:h-[170px] h-[210px]
             xl:my-[25px] lg:my-[20px] md:my-[15px] sm:my-[10px] my-[5px]' src={insta3} alt='' />
          </button>
          <button onClick={() => openModal(insta4)}>
            <img className='xl:w-[185px] lg:w-[190px] md:w-[200px] sm:w-[230px] w-[300px] xl:h-[175px] lg:h-[175px] md:h-[175px] sm:h-[170px] h-[210px]
             xl:my-[25px] lg:my-[20px] md:my-[15px] sm:my-[10px] my-[5px]' src={insta4} alt='' />
          </button>
          <button onClick={() => openModal(insta5)}>
            <img className='xl:w-[185px] lg:w-[190px] md:w-[200px] sm:w-[230px] w-[300px] xl:h-[175px] lg:h-[175px] md:h-[175px] sm:h-[170px] h-[210px]
             xl:my-[25px] lg:my-[20px] md:my-[15px] sm:my-[10px] my-[5px]' src={insta5} alt='' />
          </button>
          <button onClick={() => openModal(insta6)}>
            <img className='xl:w-[185px] lg:w-[190px] md:w-[200px] sm:w-[230px] w-[300px] xl:h-[175px] lg:h-[175px] md:h-[175px] sm:h-[170px] h-[210px]
             xl:my-[25px] lg:my-[20px] md:my-[15px] sm:my-[10px] my-[5px]' src={insta6} alt='' />
          </button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 text-white text-4xl"
            >
              <FaTimes />
            </button>
            <div className="relative bg-black p-2 rounded-lg">
              <img src={selectedImage} alt="" className="w-[500px] h-[450px]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InstaFollow;
