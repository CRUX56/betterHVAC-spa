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
              :style="{'background-image': 'url(' + require('@/assets/images/contact-us-banner.jpg') + ')'}" 
              id="home">
              <!--Header section-->
              <div class="container">
                <div class="row align-items-left">
                    <div class="col-xl-12 col-lg-12">
                        <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                            Contact Us
                        </h2>
                    </div>
                </div>
              </div>
            </section>
        </div>
        <Contact />
        <Testimonials />
        <Footer />
    </div>
</template>
