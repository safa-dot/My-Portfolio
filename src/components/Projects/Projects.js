import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import Sunnyside from "../../assets/images/sunny-side.jpg"
import ProfileCard from "../../assets/images/profile-card.jpg"
import Fylodark from "../../assets/images/fylo-dark-theme.jpg"
import Ecommerce from "../../assets/images/E-commerce.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./swiper.css";

const projects = [{
    Title: "E-commerce product page",
    Desc: "Responsive product page with gallery and cart fonctionality.",
    Preview: Ecommerce,
    Demo: "https://safa-dot.github.io/E-commerce-product-page/"
},
{
    Title: "Fylo dark theme landing page",
    Desc: "Responsive landing page using CSS grid.",
    Preview: Fylodark,
    Demo: "https://safa-dot.github.io/Fylo-dark-theme-landing-page/"
},
{
    Title: "Sunny Side Agency",
    Desc: "Sunnyside agency landing page using HTML and CSS",
    Preview: Sunnyside,
    Demo: "https://safa-dot.github.io/Sunnyside-agency/"
},
{
    Title: "Profile card",
    Desc: "profile-card-component using HTML and CSS",
    Preview: ProfileCard,
    Demo: "https://safa-dot.github.io/Profile-card-componen/"
},

]




function Projects() {
    return (
        <div className="container projects-container ">
            <h1 className="text-center pt-5">MY PROJECTS</h1>
            <div className="row project align-items-center pt-5 ">


                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {projects.map((project) =>
                        <SwiperSlide><ProjectCard project={project} /></SwiperSlide>
                    )}

                </Swiper>








            </div>
        </div>
    )
}

export default Projects;



