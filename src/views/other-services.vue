<script>
import Navbar from "../components/navbar";
import contentAccordion from "../components/accordion.vue";
import Testimonials from "../components/testimonial";
import Contact from "../components/contact";
import Footer from "../components/footer";

import {
  AwardIcon,
  HomeIcon,
  SunIcon,
  ToolIcon,
  UserIcon,
  DatabaseIcon,
  SettingsIcon,
  ThermometerIcon,
  CloudIcon,
  TruckIcon,
  DropletIcon,
  CodepenIcon,
} from "vue-feather-icons";

export default {
  components: {
    Navbar,
    contentAccordion,
    Contact,
    Testimonials,
    Footer,
    AwardIcon,
    HomeIcon,
    SunIcon,
    ToolIcon,
    UserIcon,
    DatabaseIcon,
    SettingsIcon,
    ThermometerIcon,
    CloudIcon,
    TruckIcon,
    DropletIcon,
    CodepenIcon,
  },
  data() {
    return {
      serviceAccordionArray: [
        {
          title: "Service 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu finibus mi. Cras elit mauris, egestas ut dolor quis, lacinia tincidunt magna. Integer turpis mi, posuere et gravida in, auctor sit amet urna. Etiam tincidunt, lacus ut viverra lacinia, ante nulla euismod sapien, id tincidunt ipsum nunc et odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec interdum tellus at volutpat luctus. Integer nisl tortor, tristique sit amet ex ut, pharetra porta mi. Aenean sed arcu eget leo viverra commodo in lobortis lectus. Quisque non cursus purus. Suspendisse potenti. Proin eget nisi felis.",
          isOpen: false,
        },
        {
          title: "Service 2",
          content:
            "Cras ultricies arcu a mi auctor, cursus rutrum mi elementum. Praesent eget tellus sed ex rutrum blandit ut id neque. Integer rhoncus lorem ut neque lobortis maximus efficitur in tellus. Quisque pharetra ullamcorper orci, at malesuada erat. Nunc gravida, libero vitae convallis varius, massa lectus porttitor libero, non rutrum urna magna a mauris. Nulla facilisi. Morbi mi lectus, tristique nec ipsum vitae, rutrum dapibus arcu. Pellentesque vel consequat ligula, vitae aliquam nulla. Vivamus euismod, justo quis commodo tristique, lacus massa rutrum tellus, quis imperdiet nisi est nec nisi. Nullam eget metus tellus. Nulla convallis lectus venenatis felis faucibus condimentum. Proin id dignissim est. Mauris sit amet enim nec mauris feugiat molestie.",
          isOpen: false,
        },
        {
          title: "Service 3",
          content:
            "Curabitur est magna, pulvinar quis auctor non, commodo quis nisi. Maecenas tempor nibh et volutpat viverra. Integer eleifend luctus odio vitae auctor. Vivamus aliquet augue ipsum, at sodales tellus vestibulum ut. Praesent vulputate felis sit amet elit pharetra, suscipit lobortis nulla mollis. Vestibulum a lacinia est. Morbi non sollicitudin lorem. Aliquam at interdum elit. In et tincidunt sapien. Sed tellus arcu, tincidunt eget aliquam ut, efficitur ac ante. Donec fringilla nisi quis rutrum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
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
            'url(' + require('@/assets/images/other-services-banner.jpg') + ')',
        }"
        id="home"
      >
        <!--Header section-->
        <div class="container">
          <div class="row align-items-left">
            <div class="col-xl-12 col-lg-12">
              <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                Other Services
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="main-content">
        <div class="container">
          <div class="row align-items-left">
            <div class="col-xl-12 col-lg-12">
              <h3>Services</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <SunIcon></SunIcon>
                </div>
                <h5>Heating</h5>
                <p class="text-muted mb-4">
                  BetterHVAC offers comprehensive heating services, including
                  the installation, repair, and maintenance of various heating
                  systems. From energy-efficient furnaces to heat pumps and
                  radiant heating solutions, our skilled technicians ensure that
                  your home or business stays comfortably warm throughout the
                  colder months. We prioritize top-quality products and
                  meticulous installation techniques, enabling you to experience
                  efficient heating performance and lower utility bills.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <TruckIcon></TruckIcon>
                </div>
                <h5>Ventilation</h5>
                <p class="text-muted mb-4">
                  Our ventilation services focus on providing clean and fresh
                  indoor air to promote a healthy living environment. BetterHVAC
                  installs and maintains ventilation systems that efficiently
                  exchange stale indoor air with filtered outdoor air, reducing
                  pollutants and allergens. Proper ventilation also helps
                  prevent excess moisture, ensuring your space remains
                  comfortable and free from mold and mildew issues.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <HomeIcon></HomeIcon>
                </div>
                <h5>Air Conditioning</h5>
                <p class="text-muted mb-4">
                  BetterHVAC specializes in delivering superior air conditioning
                  solutions tailored to your specific needs. Whether you require
                  a new central air conditioning system or need maintenance and
                  repairs for an existing unit, we have you covered. Our
                  technicians are well-versed in the latest AC technologies and
                  can optimize your cooling system's performance, ensuring
                  comfort and energy efficiency during hot summer months.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <DropletIcon></DropletIcon>
                </div>
                <h5>Gas Lines HVAC</h5>
                <p class="text-muted mb-4">
                  As experts in gas line installations, BetterHVAC ensures safe
                  and efficient delivery of natural gas to power various HVAC
                  appliances, such as furnaces and water heaters. Our certified
                  technicians handle gas line installations with utmost
                  precision and compliance to safety standards, allowing you to
                  enjoy reliable heating and hot water services without worry.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <CodepenIcon></CodepenIcon>
                </div>
                <h5>Firepits</h5>
                <p class="text-muted mb-4">
                  BetterHVAC can enhance your outdoor living space by designing
                  and installing firepits that create a cozy and inviting
                  ambiance. Our firepit installations prioritize safety and
                  aesthetics, using quality materials and expert craftsmanship
                  to deliver a unique and enjoyable outdoor experience for
                  gatherings and relaxation.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <ThermometerIcon></ThermometerIcon>
                </div>
                <h5>Thermostats and Programmable Devices</h5>
                <p class="text-muted mb-4">
                  We offer a range of smart thermostats and programmable devices
                  that enable you to efficiently control your HVAC system and
                  optimize energy usage. These devices allow you to set
                  customized temperature schedules, ensuring comfort when needed
                  and energy savings when unoccupied.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <UserIcon></UserIcon>
                </div>
                <h5>Inspections</h5>
                <p class="text-muted mb-4">
                  Our thorough HVAC inspections help identify potential issues
                  and ensure your system is operating at peak efficiency. BETTER
                  HVAC's detailed assessments and preventive maintenance
                  services can extend the lifespan of your HVAC equipment,
                  minimize the risk of breakdowns, and save you from costly
                  repairs in the long run.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <ToolIcon></ToolIcon>
                </div>
                <h5>Emergency HVAC Repairs</h5>
                <p class="text-muted mb-4">
                  We understand that HVAC emergencies can happen at any time,
                  which is why our team is available around the clock to handle
                  urgent repair needs. BetterHVAC's prompt and reliable
                  emergency services ensure that your comfort is restored
                  swiftly and efficiently.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <DatabaseIcon></DatabaseIcon>
                </div>
                <h5>Ducts & Insulation</h5>
                <p class="text-muted mb-4">
                  Properly insulated and sealed ductwork plays a crucial role in
                  maintaining efficient HVAC performance. BetterHVAC offers
                  expert ductwork services, including installation, repair, and
                  maintenance, ensuring that conditioned air is distributed
                  evenly throughout your space while minimizing energy loss.
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <SettingsIcon></SettingsIcon>
                </div>
                <h5>Maintenance</h5>
                <p class="text-muted mb-4">
                  BetterHVAC provides comprehensive maintenance plans to keep
                  your HVAC system in top-notch condition. Regular maintenance
                  visits from our experienced technicians help prevent potential
                  issues, improve energy efficiency, and extend the lifespan of
                  your HVAC equipment, ultimately saving you money and ensuring
                  year-round comfort.
                </p>
              </div>
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
