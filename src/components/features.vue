<script>
import {
  LayoutIcon,
  LifeBuoyIcon,
  ServerIcon,
  RssIcon
} from "vue-feather-icons";
export default {
  components: { LayoutIcon, LifeBuoyIcon, ServerIcon, RssIcon }
};
</script>

<template>
  <div>
    <!-- Features Start -->
    <section class="section bg-light feather-bg-img" id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">About Better HVAC, LLC</h3>
              <p class="text-muted font-size-15">
                How Better HVAC, LLC stands out as a qualified service provider can be attributed to several key factors. Firstly, they hold a valid HVAC license in the state of North Carolina, ensuring their expertise and adherence to industry standards. Additionally, the company is fully insured and bonded, providing peace of mind to their customers in case of any unforeseen incidents. Safety is of paramount importance to Better HVAC, LLC, as they proudly maintain compliance with OSHA regulations, prioritizing the well-being of their employees and clients alike. Lastly, their commitment to excellence is evident through their accreditation by the Better Business Bureau, a testament to their dedication to professionalism and customer satisfaction. With these qualifications, Better HVAC, LLC is well-equipped to meet your HVAC needs efficiently and reliably.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img src="@/assets/images/homepage-aircon.jpg" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <!--
              <p class="font-weight-medium text-uppercase mb-2">
                <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i> Duis sit amet 
              </p>
            -->
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              How Better HVAC, LLC Qualifies to Serve You
            </h3>
            <ul>
              <li class="text-muted">NC HVAC Licensed</li>
              <li class="text-muted">Fully Insured</li>
              <li class="text-muted">Fully Bonded</li>
              <li class="text-muted">OSHA Compliant – Safety First</li>
              <li class="text-muted">Fully Accredited by the Better Business Bureau</li>
            </ul>
            <!--
            <p class="text-muted font-size-15 mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum a
              necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque.
            </p>
            <p class="text-muted mb-2">
              <layout-icon class="icon-xs mr-1"></layout-icon>Donec pede justo fringilla vel nec.
            </p>
            <p class="text-muted">
              <life-buoy-icon class="icon-xs mr-1"></life-buoy-icon>Cras ultricies mi eu turpis hendrerit fringilla.
            </p>-->
            <div class="mt-5">
              <router-link :to="{name: 'ourStory'}">
                <a href="javascript: void(0);" class="btn btn-primary mr-2">Read More</a>
              </router-link>
              <!--<a href="javascript: void(0);" class="btn btn-soft-primary">Buy Now</a>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    
   
    <!-- Features End -->
  </div>
</template>