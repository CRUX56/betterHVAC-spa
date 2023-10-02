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
          title: "Heating Systems",
          content:
            "Better HVAC installs and maintains High Quality, Money Saving,Highly Efficient, Heating Systems, the lifespan averages 30 years with less repair or maintnenance. We would like to add you to our growing list of satisfied customers!",
          isOpen: false,
        },
        {
          title: "Ventilation",
          content:
            "Better HVAC installs and maintains proper Ventilation, using Filters, Air Vents, Air Exchange and Humidity Control when requested..",
          isOpen: false,
        },
        {
          title: "Air Conditioning",
          content:
            "Better HVAC provides both New and Maintains Existing, Air Conditioniing Systems, both Central and Wall. We would like to add you to our growing list of satisfied customers!",
          isOpen: false,
        },
        {
          title: "Gas Lines",
          content:
            "Better HVAC installs and maintains Gas Lines for HVAC, Grills, Firepits and Generaors.Feel free to call us for an estimate!",
          isOpen: false,
        },
        {
          title: "Thermostats/Programmable Devices",
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
          title: "(Emergency)Repairs",
          content:
            "Better HVAC repairs, Motors,Compressors, Leaks, Refrigerant, Burners,etc.. We would like to add you to our growing list of satisfied customers!",
          isOpen: false,
        },
        {
          title: "Ductwork",
          content:
            "Better HVAC installs and maintains Clean and Sealed Ductwork. With proper insulation and placement for little Heat and Cooling Loss. We would like to add you to our growing list of satisfied customers!",
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
            'url(' + require('@/assets/images/maintenance-banner.jpg') + ')',
        }"
        id="home"
      >
        <!--Header section-->
        <div class="container">
          <div class="row align-items-left">
            <div class="col-xl-12 col-lg-12">
              <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                Maintenance
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="main-content">
        <div class="container">
          <div class="row align-items-left">
            <div class="col-xl-6 col-lg-6">
              <h3>HVAC Maintenance</h3>
              <!--
                <p class="text-muted mb-4">
                Better HVAC, LLC takes great pride in doing high quality work,
                with highly efficient materials, in a cost-effective manner.
                Come join our growing list of happy customers.
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
                experienced the benefits of Better HVAC's heating systems. Our
                skilled technicians have the expertise and experience to handle
                the installation with meticulous attention to detail. We
                prioritize your comfort and strive to create a cozy and inviting
                atmosphere in your home or business. By choosing our
                high-quality heating systems, you can expect improved energy
                efficiency, lower utility bills, and a consistent and
                comfortable indoor environment even during the coldest months.
                Trust Better HVAC to deliver exceptional heating solutions that
                will exceed your expectations and provide lasting value for your
                investment.
              </p>
              -->
              <p class="text-muted mb-4">
                Regular maintenance is essential for optimal performance and
                longevity of the system, preventing breakdowns and ensuring
                efficient operation.
              </p>
              <p class="text-muted mb-4">
                Better HVAC provides comprehensive maintenance plans to keep
                your HVAC system in top-notch condition. Regular maintenance
                visits from our experienced technicians help prevent potential
                issues, improve energy efficiency, and extend the lifespan of
                your HVAC equipment. This ultimately saves you money and ensures
                year-round comfort in your home or business.
              </p>
              <p class="text-muted mb-4">
                Join our ever-growing list of satisfied customers who have
                experienced the benefits of Better HVAC's Preventive Maintenance
                service visits.
              </p>
              <ul class="text-muted mb-4">
                <li>22-Point Spring/Summer Cooling system service</li>
                <li>22-Point Fall/Winter Heating system service</li>
                <li>Cost-Saving PM (Preventive Maintenance) Annual Contract</li>
              </ul>
              <p class="text-muted mb-4">
                Trust Better HVAC to deliver exceptional Preventive Maintenance
                service that will exceed your expectations, provide lasting
                value for your investment, and ensures year-round comfort
              </p>
            </div>
            <div class="col-xl-6 col-lg-6">
              <img
                src="../assets/images/prev-maintenance-2.jpg"
                alt="Preventative Maintance 2"
                style="width: 100%; height: auto"
              />
              <br />
              <br />
              <img
                src="../assets/images/prev-maintenance-3.jpg"
                alt="Preventative Maintenance 3"
                style="width: 100%; height: auto"
              />
              <br />
              <br />
              <img
                src="../assets/images/mtnce-filter.jpg"
                alt="Maintenance Filter"
                style="width: 100%; height: auto"
              />
              <br />
              <br />
            </div>
          </div>
          <div class="row">
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
