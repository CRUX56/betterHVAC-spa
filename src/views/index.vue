<script>
import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

import axios from "axios";

/**
 * Index-4
 */
export default {
  components: { Navbar, Service, Features, Testimonials, Contact, Footer },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    /*
    submitForm(event) {
      event.preventDefault(); //Prevent default form submission
      console.log("Header form clicked");
      axios
        .post("https://betterhvac.net/heroForm", {
          //locahost:8081/heroForm
          name: this.name,
          email: this.email,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },*/
  },
};
</script>

<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-4-bg"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/homepage-banner-image.jpg') + ')',
        }"
        id="home"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-6 col-lg-7">
              <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                WELCOME TO <br />BETTER HVAC, LLC
                <!--<span class="text-bottom-border">Proin</span>-->
              </h2>
              <p class="text-light">
                We are committed to provide you a high standard of Heating &
                Cooling services
              </p>
              <button class="btn btn-primary mt-4">Get Started</button>
            </div>
            <div class="col-xl-4 offset-xl-2 col-lg-5 col-md-8">
              <div
                class="hero-4-registration-form mx-auto rounded bg-white mt-5 mt-lg-0"
              >
                <h5 class="form-title mb-4 text-center">
                  Get A Free HVAC Quote Today
                </h5>
                <div class="form-border w-25 mx-auto mb-4"></div>
                <form
                  class="registration-form"
                  action="https://formspree.io/f/mnqkpdky"
                  method="POST"
                >
                  <div class="form-group mb-4">
                    <label
                      for="exampleFormControlInput1"
                      class="text-muted font-size-15"
                      >Your Name*</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder
                      v-model="name"
                      name="name"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label
                      for="exampleFormControlInput1"
                      class="text-muted font-size-15"
                      >Your email*</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput2"
                      placeholder
                      v-model="email"
                      name="email"
                    />
                  </div>
                  <!--<div class="form-group mb-4">
                    <label for="exampleFormControlInput1" class="text-muted font-size-15">Password*</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput3"
                      placeholder
                    />
                  </div>-->
                  <button
                    type="submit"
                    class="btn btn-primary btn-block btn-sm text-uppercase"
                  >
                    <!--@click="submitForm"-->
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
      <Service />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </div>
</template>
