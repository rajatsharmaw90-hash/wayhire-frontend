import React from "react";
import Navbar from "../components/navbar";
import WhyChoose from "../components/whyChoose";
import HowWeWork from "../components/howwework";
import Category from "../components/category";
import Quality from "../components/quality";
import Testimonial from "../components/testimonial";
import ContactForm from "../components/contact";
import Footer from "../components/footer";

function Home(){
    return(
        <>
        <Navbar />
        <WhyChoose />
        <HowWeWork />
        <Category />
        <Quality />
        <Testimonial />
        <ContactForm />
        <Footer />
        </>
    )
}

export default Home;