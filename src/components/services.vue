<template>
  <!-- Why Choose Us Start -->
  <section class="section" id="services">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="mb-4 mb-lg-0">
            <div class="p-2 bg-soft-primary d-inline-block rounded mb-4">
              <div class="icon-xxl uim-icon-primary">
                <span class="uim-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
                    <polygon
                      class="uim-primary"
                      points="12 12.3 3.5 7.05 12 1.8 20.5 7.05 12 12.3"
                    />
                    <polygon
                      class="uim-quaternary"
                      points="12 22.2 12 12.3 20.5 7.05 20.5 16.95 12 22.2"
                    />
                    <polygon
                      class="uim-tertiary"
                      points="12 22.2 3.5 16.95 3.5 7.05 12 12.3 12 22.2"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <h3 class>OUR PROMISE</h3>
            <p class="text-muted mb-4">
              For honesty and dependability, join our many, well-satisfied customers. We would be happy to replace, repair, and maintain your Heating and Cooling systems for your best air comfort. Contact us today.
            </p>
            <p class="text-muted mb-4">
              We enjoy having a large number of happy, long-time customers. We also maintain a large inventory of material and equipment to handle any customer project or emergency.
            </p>
            <router-link :to="{name: 'cooling'}">
              <a href="javascript: void(0);" class="btn btn-outline-primary">Learn More</a>
            </router-link>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-md-6">
              <router-link :to="{name: 'cooling'}">
                <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                  <div class="wc-box-icon">
                    <i class="mdi mdi-collage"></i>
                  </div>
                  <h5 class="font-weight-bold mb-2 wc-title mt-4">Cooling</h5>
                  <p class="text-muted mb-0 font-size-15 wc-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>
              </router-link>
              <router-link :to="{name: 'heating'}">
                <div class="wc-box rounded text-center wc-box-primary p-4">
                  <div class="wc-box-icon">
                    <i class="mdi mdi-trending-up"></i>
                  </div>
                  <h5 class="font-weight-bold mb-2 wc-title mt-4">Heating</h5>
                  <p class="text-muted mb-0 font-size-15 wc-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link :to="{name: 'maintenance'}">
                <div class="wc-box rounded text-center wc-box-primary p-4">
                  <div class="wc-box-icon">
                    <i class="mdi mdi-security"></i>
                  </div>
                  <h5 class="font-weight-bold mb-2 wc-title mt-4">Maintenance</h5>
                  <p class="text-muted mb-0 font-size-15 wc-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>
              </router-link>
              <router-link :to="{name: 'otherServices'}">
                <div class="wc-box rounded text-center wc-box-primary p-4">
                  <div class="wc-box-icon">
                    <i class="mdi mdi-database-lock"></i>
                  </div>
                  <h5 class="font-weight-bold mb-2 wc-title mt-4">Other Services</h5>
                  <p class="text-muted mb-0 font-size-15 wc-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Why Choose Us End -->
</template>