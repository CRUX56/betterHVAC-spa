<script>
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "vue-feather-icons";

import VueTinySlider from "vue-tiny-slider";

export default {
  data() {
    return {
      tinySliderTestimonials: {
        autoplay: true,
        autoplayTimeout: 7000,
        loop: true,
        navPosition: "bottom",
        controls: false,
        autoplayButtonOutput: false,
      },
    };
  },
  components: {
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
    "tiny-slider": VueTinySlider,
  },
  methods: {
    getInfo: function (event) {
      this.$refs.tinySlider.slider.getInfo();
    },
  },
};
</script>

<template>
  <!-- Testimonials start -->
  <section class="section bg-dark feather-bg-img" id="testimonials">
    <!--:style=""{'background-image': 'url(' + require('@/assets/images/features-bg-img.png') + ')'}-->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <h3 class="title mb-3">Testimonials</h3>
            <p class="text-white font-size-15">
              Better HVAC testimonials highlight the exceptional service and
              satisfaction of customers who have experienced the expertise,
              reliability, and professionalism of the Better HVAC company.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <!--Testimonials goes here-->
          <tiny-slider
            v-bind="tinySliderTestimonials"
            :mouse-drag="true"
            :loop="true"
            items="1"
            gutter="20"
          >
            <div>
              <p>
                The service was high quality, quick, and affordable. Definitely,
                I recommend.<br /><span class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>V. R., <em>Albemarle, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                Technicians were professional and friendly. High quality
                service. Would definitely recommend.<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>G. K., <em>Charlotte East</em></strong>
              </p>
            </div>
            <div>
              <p>
                High quality service. Jason was very professional. He clearly
                explained my options and worked with me to get me back to a cool
                house again. Definitely 5/5 stars. <br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                – <strong>L. W., <em>Gastonia, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                Technicians were professional and friendly. High quality
                service. Would definitely recommend. 5/5 stars<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>B. S., <em>Indian Trail, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                The HAVC problem and its solution were clearly explained. The
                cost was reasonable. Amount of time to complete the work was
                acceptable. Definitely would recommend their services.<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>K. B., <em>Mooresville, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                Great service, very knowledgeable, professional, and courteous.
                Definitely recommend this high quality of service.<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                – <strong>L. M., <em>Charlotte South</em></strong>
              </p>
            </div>
            <div>
              <p>
                5/5 stars. Technicians were professional and friendly.
                Definitely recommend this high quality of service.<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                – <strong>V. E., <em>Charlotte Uptown</em></strong>
              </p>
            </div>
            <div>
              <p>
                Another fabulous experience. Thank you Jason!<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>A. T., <em>Charlotte West</em></strong>
              </p>
            </div>
            <div>
              <p>
                Great job! High quality service, professional and friendly
                techs. Definitely would recommend their services to others.<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                – <strong>M. D., <em>Norwood, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                I just have to compliment you on all that you did to make this a
                workable situation for us, you are truly a bright light in the
                sometimes questionable landscape of character and motive in this
                minefield of society.<br /><span class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                – <strong>C. C., <em>Gastonia, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                HVAC problem and its solution were clearly explained. Techs were
                professional and friendly. Definitely would recommend their
                services to others.<br /><span class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>K.H., <em>Charlotte NE</em></strong>
              </p>
            </div>
            <div>
              <p>
                I found the workmanship to be of High Quality. Jason and his
                team were professional, along with being friendly. I give 5/5
                stars and would definitely recommend their HVAC services to
                others.<br /><span class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>B. B. , <em>Albemarle, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                Jason and his team did High Quality work. He clearly explained
                the HVAC problem, as well as the solution. They were very
                responsive to my HVAC needs. The amount of time to complete the
                work was acceptable. My rating is 5/5 of stars and would
                definitely recommend them to do work for others.<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>B. O., <em>Mint Hill, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                We just moved to the area and needed the AC serviced right way.
                Jason and his team were very responsive to our request on a very
                hot day. The cost was reasonable. We highly recommend their
                services and eagerly give this company a 5/5 star rating.<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>J. S. & C. S., <em>New London, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                We found ourselves in need of a totally new HVAC system.
                Especially needed was a new AC system. Within a very short
                period of time, Jason and his team performed High Quality work
                to get us back to air comfort. The Better HVAC team were
                professional and a pleasure to work with. We will be using them
                for all of our HVAC needs.<br /><span class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>J. M., <em>Charlotte Midtown, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                Better HVAC, LLC service is High Quality. They are professional
                and friendly. HVAC problem and solution were clearly explained.
                The cost of services was reasonable. I would definitely
                recommend their services to others. Superb interactions on
                several occasions over past few years. Highly recommend!<br /><span
                  class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>K. M., <em>New London, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                High Quality service, techs professional and friendly, Cost of
                service was reasonable. Amount of time to complete work was
                acceptable. Voted 5/5 stars and would definitely recommend their
                service to others.<br /><span class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>S. L., <em>Charlotte University, NC</em></strong>
              </p>
            </div>
            <div>
              <p>
                The service was of Very High Quality. My exterminator had to
                access the crawl space recently and made a comment about how
                nice the install job was for the air handler. He stated “whoever
                did this install did a really nice job.” I give Jason and his
                team 5/5 stars and would definitely recommend their services to
                others.<br /><span class="star-entity"
                  >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                ><br />
                - <strong>S. L., <em>Norwood, NC</em></strong>
              </p>
            </div>
          </tiny-slider>
        </div>
      </div>
    </div>
  </section>
</template>
