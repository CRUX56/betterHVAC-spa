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
                    title: 'Air Conditioning',
                    content: 'BETTER HVAC provides both New and Maintains Existing, Air Conditioniing Systems, both Central and Wall. We would like to add you to our growing list of satisfied customers!',
                    isOpen: false
                },
                {
                    title: 'Ventilation',
                    content: 'BETTER HVAC installs and maintains proper Ventilation, using Filters, Air Vents, Air Exchange and Humidity Control when requested..',
                    isOpen: false
                },
                {
                    title: 'Gas lines HVAC,Firepits,etc.',
                    content: 'BETTER HVAC installs and maintains Gas Lines for HVAC, Grills, Firepits and Generaors.Feel free to call us for an estimate!',
                    isOpen: false
                },
                {
                    title: 'Thermostats / Programmable Devices',
                    content: 'BETTER HVAC installs and maintains Thermostat and Programmable Devices, so you can time, when and how long Heat and AC should run, for maximum savings and efficiency.',
                    isOpen: false
                },
                {
                    title: 'Inspections',
                    content: 'BETTER HVAC Inspects your equipment initially and during regular Maintenance visits or as requested by you. We check, Temperature, Burn Efficiency, leaks,valve quality and needed cleaning.',
                    isOpen: false
                },
                {
                    title: 'Emergency Repairs-Motor, Compressor, Rerigerant Leaks',
                    content: 'BETTER HVAC repairs, Motors,Compressors, Leaks, Refrigerant, Burners,etc.. We would like to add you to our growing list of satisfied customers!',
                    isOpen: false
                },
                {
                    title: 'Ducts / Insulation',
                    content: 'BETTER HVAC installs and maintains Clean and Sealed Ductwork. With proper insulation and placement for little Heat and Cooling Loss. We would like to add you to our growing list of satisfied customers!',
                    isOpen: false
                },
                {
                    title: 'Maintenance',
                    content: 'BETTER HVAC provides regular and scheduled Maintenance along with our Maintenance Contract. This insures less surprises and more uptime. We would like to add you to our growing list of satisfied customers!',
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
              :style="{'background-image': 'url(' + require('@/assets/images/heating-banner.jpg') + ')'}" 
              id="home">
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
                            <h3>Heating Solutions: Enhancing Comfort with HVAC Heating Systems</h3>
                            <p class="text-muted mb-4">
                                BETTER HVAC installs and maintains High Quality, Money Saving,Highly Efficient, Heating Systems, the lifespan averages 30 years with less repair or maintnenance. We would like to add you to our growing list of satisfied customers!
                            </p>
                            <p class="text-muted mb-4">
                                At BETTER HVAC, we specialize in the installation and maintenance of high-quality, money-saving, and highly efficient heating systems. Our team is dedicated to helping you achieve optimal comfort while also maximizing energy savings. We understand that investing in a heating system is a significant decision, which is why we offer top-notch products known for their durability and longevity. With an average lifespan of 30 years and reduced repair or maintenance needs, our heating systems provide reliable warmth and peace of mind for years to come.
                            </p>
                            <p class="text-muted mb-4">
                                Join our ever-growing list of satisfied customers who have experienced the benefits of BETTER HVAC's heating systems. Our skilled technicians have the expertise and experience to handle the installation with meticulous attention to detail. We prioritize your comfort and strive to create a cozy and inviting atmosphere in your home or business. By choosing our high-quality heating systems, you can expect improved energy efficiency, lower utility bills, and a consistent and comfortable indoor environment even during the coldest months. Trust BETTER HVAC to deliver exceptional heating solutions that will exceed your expectations and provide lasting value for your investment.
                            </p>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <img src="../assets/images/services-hvac-system.jpg" alt="Hvac System" class="width: 100%; height: auto;"/>
                        </div>
                    </div>
                    <div class="row align-items-left">
                        <div class="col-xl-12 col-lg-12">
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
