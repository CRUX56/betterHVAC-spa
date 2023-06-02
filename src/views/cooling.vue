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
            <section class="hero-4-bg" :style="">

            </section>
        </div>
        <Testimonials />
        <Contact />
        <Footer />
    </div>
</template>
