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
          title: "V. R., Albemarle, NC",
          content:
            "The service was high quality, quick, and affordable. Definitely, I recommend.",
          isOpen: true,
        },
        {
          title: "G. K., Charlotte East",
          content:
            "Technicians were professional and friendly. High quality service. Would definitely recommend.",
          isOpen: true,
        },
        {
          title: "L. W., Gastonia, NC ",
          content:
            "High quality service. Jason was very professional.  He clearly explained my options and worked with me to get me back to a cool house again.  Definitely 5/5 stars.",
          isOpen: true,
        },
        {
          title: "B. S., Indian Trail, NC ",
          content:
            "Technicians were professional and friendly. High quality service. Would definitely recommend. 5/5 stars ",
          isOpen: true,
        },
        {
          title: "K. B., Mooresville, NC",
          content:
            "The HAVC problem and its solution were clearly explained. The cost was reasonable. Amount of time to complete the work was acceptable.  Definitely would recommend their services. ",
          isOpen: true,
        },
        {
          title: "L. M., Charlotte South",
          content:
            "Great service, very knowledgeable, professional, and courteous. Definitely recommend this high quality of service.",
          isOpen: true,
        },
        {
          title: "V. E., Charlotte Uptown",
          content:
            "5/5 stars. Technicians were professional and friendly. Definitely recommend this high quality of service.",
          isOpen: true,
        },
        {
          title: "A. T., Charlotte West",
          content: "Another fabulous experience. Thank you Jason!",
          isOpen: true,
        },
        {
          title: "M. D., Norwood, NC",
          content:
            "Great job!  High quality service, professional and friendly techs. Definitely would recommend their services to others.",
          isOpen: true,
        },
        {
          title: "C. C., Gastonia, NC",
          content:
            "I just have to compliment you on all that you did to make this a workable situation for us, you are truly a bright light in the sometimes questionable landscape of character and motive in this minefield of society. ",
          isOpen: true,
        },
        {
          title: "K.H., Charlotte NE",
          content:
            "HVAC problem and its solution were clearly explained. Techs were professional and friendly.  Definitely would recommend their services to others. ",
          isOpen: true,
        },
        {
          title: "B. B. , Albemarle, NC",
          content:
            "I found the workmanship to be of High Quality. Jason and his team were professional, along with being friendly. I give 5/5 stars and would definitely recommend their HVAC services to others.",
          isOpen: true,
        },
        {
          title: "B. O. , Mint Hill, NC",
          content:
            "Jason and his team did High Quality work. He clearly explained the HVAC problem, as well as the solution. They were very responsive to my HVAC needs. The amount of time to complete the work was acceptable. My rating is 5/5 of stars and would definitely recommend them to do work for others.",
          isOpen: true,
        },
        {
          title: "J. S.& C. S. , New London, NC",
          content:
            "We just moved to the area and needed the AC serviced right way. Jason and his team were very responsive to our request on a very hot day. The cost was reasonable. We highly recommend their services and eagerly give this company a 5/5 star rating.",
          isOpen: true,
        },
        {
          title: "J. M., Charlotte, NC",
          content:
            "We found ourselves in need of a totally new HVAC system. Especially needed was a new AC system. Within a very short period of time, Jason and his team performed High Quality work to get us back to air comfort. The Better HVAC team were professional and a pleasure to work with. We will be using them for all of our HVAC needs.",
          isOpen: true,
        },
        {
          title: "K. M., New London, NC",
          content:
            "Better HVAC, LLC service is High Quality. They are professional and friendly. HVAC problem and solution were clearly explained. The cost of services was reasonable. I would definitely recommend their services to others. Superb interactions on several occasions over past few years. Highly recommend!",
          isOpen: true,
        },
        {
          title: "S. L., Charlotte, NC",
          content:
            "High Quality service, techs professional and friendly, Cost of service was reasonable. Amount of time to complete work was acceptable. Voted 5/5 stars and would definitely recommend their service to others.",
          isOpen: true,
        },
        {
          title: "S. L., Norwood, NC",
          content:
            "The service was of Very High Quality. My exterminator had to access the crawl space recently and made a comment about how nice the install job was for the air handler. He stated “whoever did this install did a really nice job.” I give Jason and his team 5/5 stars and would definitely recommend their services to others.",
          isOpen: true,
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
            'url(' + require('@/assets/images/homepage-banner-image.jpg') + ')',
        }"
        id="home"
      >
        <!--Header section-->
        <div class="container">
          <div class="row align-items-left">
            <div class="col-xl-12 col-lg-12">
              <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                Testimonials
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="main-content">
        <div class="container">
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
    <Contact />
    <Footer />
  </div>
</template>
