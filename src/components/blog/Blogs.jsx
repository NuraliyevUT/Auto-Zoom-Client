import React from "react";
import MiniBlog from "./mini-blog";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpg";
import blog3 from "../../assets/img/blog3.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t } = useTranslation();
  const articles = [
    {
      id: 1,
      image: blog1,
      title: t("blogs.blog1.title"),
      description: t("blogs.blog1.description"),
      date: t("blogs.blog1.date"),
    },
    {
      id: 2,
      image: blog2,
      title: t("blogs.blog2.title"),
      description: t("blogs.blog2.description"),
      date: t("blogs.blog2.date"),
    },
    {
      id: 3,
      image: blog3,
      title: t("blogs.blog3.title"),
      description: t("blogs.blog3.description"),
      date: t("blogs.blog3.date"),
    },
  ];

  return (
    <div className="bg-[#1e1f27] text-white pb-14 pt-5">
      <div className="container">
        <div className="flex items-center gap-x-2 text-[#fff9] text-sm py-4">
          <Link to={"/"}>{t("blogs.Luxury Cars for Rent in Dubai")}</Link> /{" "}
          <Link to={"/blog"}>{t("blogs.Blog")}</Link>
        </div>
        <h1 className="text-4xl my-6">{t("blogs.Blog")}</h1>
        <div className="bg-[#1e1f27] text-white min-h-screen">
          <MiniBlog articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
