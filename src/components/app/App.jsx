import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../../shared/loader";
import NotFound from "../not-found/not-found";

const Layout = React.lazy(() => import("../layout/layout"));
const HomePage = React.lazy(() => import("../../pages/HomePage"));
const AboutPage = React.lazy(() => import("../../pages/AboutPage"));
const CarsPage = React.lazy(() => import("../../pages/CarsPage"));
const ServicesPage = React.lazy(() => import("../../pages/ServicesPage"));
const ContactPage = React.lazy(() => import("../../pages/ContactPage"));
const BlogPage = React.lazy(() => import("../../pages/BlogPage"));
const BrandPage = React.lazy(() => import("../../pages/BrandPage"));
const SingleBlog = React.lazy(() => import("../blog/single-blog"));
const ServicesElementPage = React.lazy(() =>
  import("../../pages/ServicesElementPage")
);
const CarsInfo = React.lazy(() => import("../../pages/CarsInfo"));
const Faqs = React.lazy(() => import("../../pages/footerpages/Faqpage"));
const TermsAndConditions = React.lazy(() => import("../termsandconditions/terms-and-conditions"));
const MainCars = React.lazy(() => import("../../pages/cars-page/main-cars"));
const CarParam = React.lazy(() => import("../../pages/cars-page/car-param"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/cars"
            element={
              <Suspense fallback={<Loader />}>
                <CarsPage />
              </Suspense>
            }
          >
            <Route index element={<MainCars />} />
            <Route path=":param" element={<CarParam />} />
          </Route>

          <Route
            path="/carsinfo/:id"
            element={
              <Suspense fallback={<Loader />}>
                <CarsInfo />
              </Suspense>
            }
          />

          <Route
            path="/brand"
            element={
              <Suspense fallback={<Loader />}>
                <BrandPage />
              </Suspense>
            }
          />

          <Route
            path="/service"
            element={
              <Suspense fallback={<Loader />}>
                <ServicesPage />
              </Suspense>
            }
          />

          <Route
            path="/service/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ServicesElementPage />
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />

          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <ContactPage />
              </Suspense>
            }
          />

          <Route
            path="/blog"
            element={
              <Suspense fallback={<Loader />}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Suspense fallback={<Loader />}>
                <SingleBlog />
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<Loader />}>
                <TermsAndConditions />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<Loader />}>
                <TermsAndConditions />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
