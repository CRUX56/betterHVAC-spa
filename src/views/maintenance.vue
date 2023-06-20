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
    },
    data() {
        return {
            serviceAccordionArray: [
                {
                    title: 'Service 1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu finibus mi. Cras elit mauris, egestas ut dolor quis, lacinia tincidunt magna. Integer turpis mi, posuere et gravida in, auctor sit amet urna. Etiam tincidunt, lacus ut viverra lacinia, ante nulla euismod sapien, id tincidunt ipsum nunc et odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec interdum tellus at volutpat luctus. Integer nisl tortor, tristique sit amet ex ut, pharetra porta mi. Aenean sed arcu eget leo viverra commodo in lobortis lectus. Quisque non cursus purus. Suspendisse potenti. Proin eget nisi felis.',
                    isOpen: false
                },
                {
                    title: 'Service 2',
                    content: 'Cras ultricies arcu a mi auctor, cursus rutrum mi elementum. Praesent eget tellus sed ex rutrum blandit ut id neque. Integer rhoncus lorem ut neque lobortis maximus efficitur in tellus. Quisque pharetra ullamcorper orci, at malesuada erat. Nunc gravida, libero vitae convallis varius, massa lectus porttitor libero, non rutrum urna magna a mauris. Nulla facilisi. Morbi mi lectus, tristique nec ipsum vitae, rutrum dapibus arcu. Pellentesque vel consequat ligula, vitae aliquam nulla. Vivamus euismod, justo quis commodo tristique, lacus massa rutrum tellus, quis imperdiet nisi est nec nisi. Nullam eget metus tellus. Nulla convallis lectus venenatis felis faucibus condimentum. Proin id dignissim est. Mauris sit amet enim nec mauris feugiat molestie.',
                    isOpen: false
                },
                {
                    title: 'Service 3',
                    content: 'Curabitur est magna, pulvinar quis auctor non, commodo quis nisi. Maecenas tempor nibh et volutpat viverra. Integer eleifend luctus odio vitae auctor. Vivamus aliquet augue ipsum, at sodales tellus vestibulum ut. Praesent vulputate felis sit amet elit pharetra, suscipit lobortis nulla mollis. Vestibulum a lacinia est. Morbi non sollicitudin lorem. Aliquam at interdum elit. In et tincidunt sapien. Sed tellus arcu, tincidunt eget aliquam ut, efficitur ac ante. Donec fringilla nisi quis rutrum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
                    isOpen: false
                }
            ]
        }
    }
};
</script>

<template>
    <div>
        <Navbar />
        <div>
            <section 
              class="hero-4-bg" 
              :style="{'background-image': 'url(' + require('@/assets/images/maintenance-banner.jpg') + ')'}" 
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
                            <contentAccordion :service-accordion-array="serviceAccordionArray"></contentAccordion>
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
