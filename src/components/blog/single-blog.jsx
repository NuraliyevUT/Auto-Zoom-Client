import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpg";
import blog3 from "../../assets/img/blog3.jpg";
import { useTranslation } from "react-i18next";
import Loader from "../../shared/loader";

const SingleBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  // Local blog data
  const blogs = [
    {
      id: 1,
      title: t("singleblog.blog1.title"),
      description: t("singleblog.blog1.description"),
      content: t("singleblog.blog1.content"),
      location: t("singleblog.blog1.location"),
      image: blog1,
    },
    {
      id: 2,
      title: t("singleblog.blog2.title"),
      description: t("singleblog.blog2.description"),
      content: t("singleblog.blog2.content"),
      location: t("singleblog.blog2.location"),
      image: blog2,
    },
    {
      id: 3,
      title: t("singleblog.blog3.title"),
      description: t("singleblog.blog3.description"),
      content: t("singleblog.blog3.content"),
      location: t("singleblog.blog3.location"),
      image: blog3,
    },
  ];

  useEffect(() => {
    // Find the article by matching the id
    const blogPost = blogs.find((blog) => blog.id === parseInt(id));

    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setArticle(blogPost || null);
      setLoading(false);
    }, 500); // Adjust delay if necessary
  }, [id]);

  if (loading) {
    return <Loader />; // Loading state
  }

  if (!article) {
    return <p>{t("singleblog.Blog post not found.")}</p>; // If the blog post is not found
  }

  return (
    <div className="bg-[#1e1f27] w-full text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="py-8">
          <Link to="/" className="text-[#fff9] text-sm mb-4 block">
            {t("singleblog.Luxury Cars for Rent in Dubai / Blog /")}{" "}
            {article.title}
          </Link>
          <h1 className="text-3xl md:text-4xl mt-10 md:mt-16 mb-8 w-full md:w-[80%]">
            {article.title}
          </h1>
          <p className="text-base md:text-lg mb-5">{article.description}</p>
          <p className="text-base text-gray-400 mb-5">
            {t("singleblog.Location:")} {article.location}
          </p>
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-[500px] object-cover object-center mb-8"
            />
          )}
          <p className="text-base md:text-lg">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
