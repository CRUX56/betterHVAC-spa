<script>
import Navbar  from "../components/navbar";
import contentAccordion from "../components/accordion.vue";
import Testimonials from "../components/testimonial";
import Contact from "../components/contact";
import Footer from '../components/footer';

export default {
    components: { 
        Navbar, 
        contentAccordion, 
        Contact, 
        Testimonials, 
        Footer 
    }
};
</script>

<template>
    <div>
        <Navbar />
        <div>
            <section 
              class="hero-4-bg" 
              :style="{'background-image': 'url(' + require('@/assets/images/homepage-banner-image.jpg') + ')'}" 
              id="home">
              <!--Header section-->
              <div class="container">
                <div class="row align-items-left">
                    <div class="col-xl-12 col-lg-12">
                        <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                            Our Story
                        </h2>
                    </div>
                </div>
              </div>
            </section>
            <section class="section" id="main-content">
                <div class="container">
                    <div class="row align-items-left">
                        <div class="col-xl-6 col-lg-6">
                            <h3>About Us</h3>
                            <p class="text-muted mb-4">
                                Better HVAC, LLC is a Privately Owned and Operated service. Located in Albemarle, North Carolina since 2014, we serve a well-satisfied Customer Base within a 70-mile radius.
                            </p>
                            <p class="text-muted mb-4">
                                Over the years, we have cultivated strong relationships with many satisfied customers who continue to rely on our services. In order to uphold our commitment to delivering top-quality service, we maintain a substantial inventory of materials and equipment. This ensures that we are fully equipped to handle any customer project or emergency promptly and efficiently. At Better HVAC, LLC, our goal is to provide reliable and comprehensive HVAC solutions to meet the needs of our valued customers. We enjoy having many well-pleased, long-time customers. To continue top quality service, we maintain a large inventory of material and equipment to handle any customer project or emergency.
                            </p>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <img src="../assets/images/jason-and-andy.jpg" alt="Jason and Andy" class="align-items-right" style="width: 100%; height: auto;"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Testimonials />
        <Contact />
        <Footer />
    </div>
</template>
