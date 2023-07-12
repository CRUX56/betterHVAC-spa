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
                    title: 'Heating Systems',
                    content: 'BETTER HVAC installs and maintains High Quality, Money Saving,Highly Efficient, Heating Systems, the lifespan averages 30 years with less repair or maintnenance. We would like to add you to our growing list of satisfied customers!',
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
              :style="{'background-image': 'url(' + require('@/assets/images/cooling-banner.jpg') + ')'}" 
              id="home">
              <!--Header section-->
              <div class="container">
                <div class="row align-items-left">
                    <div class="col-xl-12 col-lg-12">
                        <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                            Air Conditioning
                        </h2>
                    </div>
                </div>
              </div>
            </section>
            <section class="section" id="main-content">
                <div class="container">
                    <div class="row align-items-left">
                        <div class="col-xl-6 col-lg-6">
                            <h3>Cooling</h3>
                            <p class="text-muted mb-4">
                                BETTER HVAC provides both New and Maintains Existing, Air Conditioning Systems, both Central and Wall. We would like to add you to our growing list of satisfied customers!
                            </p>
                            <p class="text-muted mb-4">
                                BETTER HVAC specializes in both new installations and the maintenance of existing air conditioning systems, offering a comprehensive range of services. Whether you are in need of a brand new central air conditioning system or require maintenance and repairs for your existing unit, our skilled technicians are here to assist you. We understand the importance of a properly functioning air conditioning system, especially during hot summer months, and we are dedicated to ensuring your indoor comfort. With our expertise and commitment to customer satisfaction, we aim to exceed your expectations and deliver reliable, efficient, and cost-effective air conditioning solutions.
                            </p>
                            <p class="text-muted mb-4">
                                Join our growing list of satisfied customers who have experienced the difference BETTER HVAC brings to their air conditioning needs. Our team is equipped with the knowledge and skills to handle any air conditioning project, big or small. From installation to maintenance and repairs, we prioritize quality workmanship and attention to detail to ensure your air conditioning system operates optimally. With BETTER HVAC, you can trust that you are receiving top-notch service from professionals who are passionate about providing the best possible air conditioning solutions for your home or business. Experience the comfort and reliability that comes with choosing BETTER HVAC for all your air conditioning needs.
                            </p>
                            
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <img src="../assets/images/about-us-aircon.jpg" alt="Cooling Air Conditioning"/>
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
