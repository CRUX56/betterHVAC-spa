<script>
import Navbar from "../components/navbar";
import contentAccordion from "../components/accordion.vue";
import Testimonials from "../components/testimonial";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default {
  components: {
    Navbar,
    contentAccordion,
    Contact,
    Testimonials,
    Footer,
  },
  data() {
    return {
      serviceAccordionArray: [
        {
          title: "Air Conditioning",
          content:
            "Better HVAC provides both New and Maintains Existing, Air Conditioniing Systems, both Central and Wall. We would like to add you to our growing list of satisfied customers!",
          isOpen: false,
        },
        {
          title: "Ventilation",
          content:
            "Better HVAC installs and maintains proper Ventilation, using Filters, Air Vents, Air Exchange and Humidity Control when requested..",
          isOpen: false,
        },
        {
          title: "Gas lines HVAC,Firepits,etc.",
          content:
            "Better HVAC installs and maintains Gas Lines for HVAC, Grills, Firepits and Generaors.Feel free to call us for an estimate!",
          isOpen: false,
        },
        {
          title: "Thermostats / Programmable Devices",
          content:
            "Better HVAC installs and maintains Thermostat and Programmable Devices, so you can time, when and how long Heat and AC should run, for maximum savings and efficiency.",
          isOpen: false,
        },
        {
          title: "Inspections",
          content:
            "Better HVAC Inspects your equipment initially and during regular Maintenance visits or as requested by you. We check, Temperature, Burn Efficiency, leaks,valve quality and needed cleaning.",
          isOpen: false,
        },
        {
          title: "Emergency Repairs-Motor, Compressor, Rerigerant Leaks",
          content:
            "Better HVAC repairs, Motors,Compressors, Leaks, Refrigerant, Burners,etc.. We would like to add you to our growing list of satisfied customers!",
          isOpen: false,
        },
        {
          title: "Ducts / Insulation",
          content:
            "Better HVAC installs and maintains Clean and Sealed Ductwork. With proper insulation and placement for little Heat and Cooling Loss. We would like to add you to our growing list of satisfied customers!",
          isOpen: false,
        },
        {
          title: "Maintenance",
          content:
            "Better HVAC provides regular and scheduled Maintenance along with our Maintenance Contract. This insures less surprises and more uptime. We would like to add you to our growing list of satisfied customers!",
          isOpen: false,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Navbar />
    <div>
      <section
        class="hero-4-bg"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/heating-banner.jpg') + ')',
        }"
        id="home"
      >
        <!--Header section-->
        <div class="container">
          <div class="row align-items-left">
            <div class="col-xl-12 col-lg-12">
              <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                Heating Systems
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="main-content">
        <div class="container">
          <div class="row align-items-left">
            <div class="col-xl-6 col-lg-6">
              <h3>
                Heating Solutions: Enhancing Comfort with HVAC Heating Systems
              </h3>
              <p class="text-muted mb-4">
                Better HVAC installs and maintains High Quality, Money
                Saving,Highly Efficient, Heating Systems, the lifespan averages
                30 years with less repair or maintnenance. We would like to add
                you to our growing list of satisfied customers!
              </p>
              <p class="text-muted mb-4">
                At Better HVAC, we specialize in the installation and
                maintenance of high-quality, money-saving, and highly efficient
                heating systems. Our team is dedicated to helping you achieve
                optimal comfort while also maximizing energy savings. We
                understand that investing in a heating system is a significant
                decision, which is why we offer top-notch products known for
                their durability and longevity. With an average lifespan of 30
                years and reduced repair or maintenance needs, our heating
                systems provide reliable warmth and peace of mind for years to
                come.
              </p>
              <p class="text-muted mb-4">
                Join our ever-growing list of satisfied customers who have
                experienced the benefits of Better HVAC's heating systems.
              </p>
              <ul class="text-muted mb-4">
                <li>
                  Skilled technicians have the Expertise and Experience to
                  handle the installation
                </li>
                <li>Meticulous attention to detail</li>
                <li>
                  Create a Cozy and Inviting Atmosphere in your home or business
                </li>
                <li>High-Quality heating systems</li>
              </ul>
              <p class="text-muted mb-4">
                Trust Better HVAC to deliver exceptional heating solutions that
                will exceed your expectations and provide lasting value for your
                investment. You can expect improved energy efficiency, lower
                utility bills, and a consistent and comfortable indoor
                environment even during the coldest months.
              </p>
            </div>
            <div class="col-xl-6 col-lg-6">
              <img
                src="../assets/images/Heating - 3 Units.jpg"
                alt="heating 3 units"
                style="width: 100%; height: auto"
              />
              <br />
              <br />
              <img
                src="../assets/images/heating-gas-furnance.jpg"
                alt="Heating - Gas Furnance"
                style="width: 100%; height: auto"
              />
              <br />
              <br />
              <img
                src="../assets/images/services-hvac-system.png"
                alt="Hvac System"
                style="width: 100%; height: auto"
              />
              <br />
              <br />
            </div>
          </div>
          <div class="row align-items-left">
            <div class="col-xl-12 col-lg-12">
              <contentAccordion
                :service-accordion-array="serviceAccordionArray"
              ></contentAccordion>
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
