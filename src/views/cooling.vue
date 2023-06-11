<script>
import Navbar  from "../components/navbar";
import Testimonials from "../components/testimonial";
import Contact from "../components/contact";
import Footer from '../components/footer';

export default {
    components: { Navbar, Contact, Testimonials, Footer }
};
</script>

<template>
    <div>
        <Navbar />
        <div>
            <section 
              class="hero-4-bg" 
              :style="{'background-image': 'url(' + require('@/assets/images/hero-4-bg.jpg') + ')'}" 
              id="home">
              <!--Header section-->
              <div class="container">
                <div class="row align-items-left">
                    <div class="col-xl-12 col-lg-12">
                        <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                            Page Title Or Service Title<br /> That Can Go Two Columns
                        </h2>
                    </div>
                </div>
              </div>
            </section>
            <section class="section" id="main-content">
                <div class="container">
                    <div class="row align-items-left">
                        <div class="col-xl-12 col-lg-12">
                            <h3>Cooling Title</h3>
                            <p class="text-muted mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat nibh non viverra pulvinar. Nam lacinia, dolor at laoreet pellentesque, metus eros venenatis augue, eget tristique felis arcu et urna. Maecenas porttitor lobortis felis. Sed dictum et orci ut porttitor. Proin ultrices, leo sit amet consectetur tincidunt, nulla sapien elementum magna, quis venenatis mauris nulla eu leo. Nunc consequat sem libero, vel scelerisque orci dignissim a. Sed vitae justo sit amet urna semper semper. Pellentesque vestibulum finibus libero, sed varius justo gravida in. Vestibulum rhoncus at diam eget viverra.
                            </p>
                            <p class="text-muted mb-4">
                                Etiam ut volutpat ex, vel faucibus eros. Sed nec turpis in dui hendrerit lacinia id pellentesque elit. Donec at ligula tristique enim bibendum iaculis eget a elit. Morbi faucibus venenatis tincidunt. Etiam ut semper libero. Praesent pellentesque luctus justo id tincidunt. Nulla eget mi tellus. Fusce faucibus, ante a accumsan condimentum, ligula turpis sollicitudin neque, vitae consequat odio mauris ut tortor. Quisque ante lectus, congue cursus felis quis, auctor eleifend eros. Nulla laoreet ante eget congue scelerisque. Vivamus id mauris vel nibh volutpat ornare vestibulum a odio. Suspendisse lacinia leo nec ultrices interdum. Cras vitae elit sed nibh semper pulvinar.
                            </p>
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
