import { Link, useNavigate, useParams } from "react-router-dom";
import CustomLink from "../custom-link/custom-link";
import logoImg from "../../assets/logo3.png";
import { VscListSelection } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useRef, useState } from "react";
import engFlagImg from "../../assets/icon/eng_flag.png";
import ruFlagImg from "../../assets/icon/ru_flag.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { CarsContext } from "../../context/CarsContext";

const Header = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const {filterData} = useContext(CarsContext)
  const navbarRef = useRef(null);

  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(`/cars`);
    filterData(data?.search)
    reset();
  };

  const { t } = useTranslation();

  const onChangeLang = (text) => {
    i18n.changeLanguage(text);
  };

  const onNavbarHideVisible = (e) => {
    if (navbarRef.current && !e.target.classList.contains("nav")) {
      setIsOpenNavbar(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onNavbarHideVisible);

    return () => {
      document.removeEventListener("mousedown", onNavbarHideVisible);
    };
  }, []);

  return (
    <header className="bg-[#111219] h-[122px] flex items-center shadow-navbar xl:shadow-none relative">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-full flex justify-between gap-x-5 items-center">
            <div className="flex gap-x-4 items-center">
              <div className="flex items-center gap-x-1">
                <span
                  className="w-[25px] block cursor-pointer hover:scale-150 transition"
                  onClick={() => onChangeLang("en")}
                >
                  <img src={engFlagImg} alt="language icon" />
                </span>
                <span
                  className="w-[25px] block cursor-pointer hover:scale-150 transition"
                  onClick={() => onChangeLang("ru")}
                >
                  <img src={ruFlagImg} alt="language icon" />
                </span>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${
                  isOpenSearch ? "flex" : "hidden xl:flex"
                } absolute z-50 xl:static w-full xl:w-[380px] max-w-[500px] top-[122px] h-12 px-2 items-center gap-x-3 bg-custom-gradient xl:bg-custom-gradient-desktop rounded-[10px]`}
              >
                <button type="submit" className="text-white text-4xl">
                  <IoSearchOutline />
                </button>
                <input
                  type="text"
                  {...register("search")}
                  placeholder="Search..."
                  className="w-full bg-transparent border-0 outline-0 text-[14px] text-white xl:pr-[15px]"
                />
                <span
                  className="block text-[36px] text-white xl:hidden"
                  onClick={() => setIsOpenSearch(false)}
                >
                  <IoIosCloseCircleOutline />
                </span>
              </form>

              <div
                className="text-white text-4xl xl:hidden"
                onClick={() => setIsOpenSearch(true)}
              >
                <IoSearchOutline />
              </div>
            </div>

            <div className="w-[160px] h-[90px] flex items-center overflow-hidden">
              <Link to={"/"}>
                <img src={logoImg} alt="logotip" />
              </Link>
            </div>

            <div
              className="text-5xl text-white xl:hidden"
              onClick={() => setIsOpenNavbar(true)}
            >
              <VscListSelection />
            </div>

            <nav className={`hidden xl:flex flex-col items-end gap-y-7`}>
              <ul
                className="h-full w-full flex gap-x-10"
                onClick={(e) => onCloseNavbar(e.target)}
              >
                <CustomLink to={"/cars"}>{t("navbar.cars")}</CustomLink>
                <CustomLink to={`/brand`}>{t("navbar.brand")}</CustomLink>
                <CustomLink to={"/service"}>{t("navbar.service")}</CustomLink>
                <CustomLink to={"/about"}>{t("navbar.about")}</CustomLink>
                <CustomLink to={"/contact"}>{t("navbar.contact")}</CustomLink>
                <CustomLink to={"/blog"}>{t("navbar.blog")}</CustomLink>
              </ul>
              <CustomLink to={"tel:+971527030189"}>+971 52 7030189</CustomLink>
            </nav>
          </div>
        </div>

        <nav
          className={`${
            isOpenNavbar ? "flex w-full sm:w-[500px] xl:hidden" : "w-0"
          } transition-all duration-300 overflow-hidden h-[100vh] fixed z-50 top-0 right-0 flex justify-center bg-[#0b0b0b]`}
        >
          <ul
            ref={navbarRef}
            className="nav h-full w-full flex justify-center flex-col pt-[50px] pl-[10px] gap-y-5"
          >
            <CustomLink to={"/cars"}>{t("navbar.cars")}</CustomLink>
            <CustomLink to={`/brand`}>{t("navbar.brand")}</CustomLink>
            <CustomLink to={"/service"}>{t("navbar.service")}</CustomLink>
            <CustomLink to={"/about"}>{t("navbar.about")}</CustomLink>
            <CustomLink to={"/contact"}>{t("navbar.contact")}</CustomLink>
            <CustomLink to={"/blog"}>{t("navbar.blog")}</CustomLink>
            <CustomLink to={"tel:+971527030189"}>+971 52 7030189</CustomLink>
          </ul>

          <div
            className="absolute top-[50px] right-[50px] text-white text-5xl"
            onClick={() => setIsOpenNavbar(false)}
          >
            <IoMdClose />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
