<template>
  <div id="app">
    <!-- Loader -->
    <div id="preloader" v-if="loading">
      <div id="status">
        <div class="spinner"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Better-HVAC-Heating-and-Air-Conditioning", //Better HVAC Heating & Air Conditioning
  metaInfo: {
    title: "Better HVAC Heating & Air Conditioning",
    titleTemplate: "%s | vue-meta Example App",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Better HVAC - Quality Air Conditioning and Heating",
      },
      {
        name: "keywords",
        content:
          "28001, 28002, 28025, 28027, 28036, 28070, 28078, 28079, 28081, 28083, 28083, 28088, 28104, 28105, 28115, 28117, 28127, 28128, 28134, 28137, 28170, 28211, 28212, 28213, 28214, 28215, 28216, 28226, 28227, 28269, 28270, 28273, 28277, 27371, 28379, 28380, Heating, Cooling, Ventilation, AC, HVAC, HVAC Contractor, Heating contractor, Air conditioning contractor, HVAC system, HVAC technician, Heating technician, HVAC installation, HVAC repair, HVAC service, HVAC maintenance, Heating repair, Heater repair, Heating and Cooling, Heating and cooling repair, Heating and Air Conditioning, Ductwork, Venting, Air Duct Cleaning, Repair, Maintenance, Service Contract, Service Agreement, AC Repair, Thermostats, Central Air, Central Air Conditioning, Air conditioning installation, Air conditioning repair, Air conditioning maintenance, Window Air Conditioners, Wall Air Conditioners, Mini Split, Mini Split AC, Mini Split AC with Heating, AC Installation, AC repair, AC Replacement, AC Maintenance, Air conditioner installation, Air conditioner repair, Air conditioner maintenance, Heat Pump, Heat Pump Installation, Heat Pump repair, Heat Pump maintenance, Electric Furnace, Electric Furnace Installation, Electric Furnace Repair, Electric Furnace Maintenance, Gas Furnace Installation, Gas Furnace Repair, Gas Furnace Maintenance, Blow Motor Repair, Air Filtration System, Ductless Air Conditioner, Ductless heating, Heating and air conditioning repair, Furnace repair, Furnace replacement, Furnace maintenance, Heating systems, A/C repairs, A/C replacement service, Residential HVAC, Heating installation, Home air conditioner repair, Air conditioner replacement, Indoor air quality Anson, Cabarrus, Gaston, Iredell, Mecklenburg, Montgomery, Richmond, Rowan, Stanly, Union Albemarle, Badin, New London, Richfield, Denton, Troy, Norwood, Stallings, Hemby Bridge, Fairview, Unionville, Indian Trail, Wadesboro, Midland, Locust, Mt Pleasant, Aquadale, Oakboro, Stanfield, Mt Gilead, Concord, Kannapolis, Matthews, Mint Hill, Charlotte, Huntersville, Pineville, Harrisburg, Weddington, Waxhaw, Mount Pleasant, Mooresville, Davidson, Cornelius, Lake Norman, Gastonia, Salisbury, China Grove, Landis, Granite Quarry, Rockingham, Indian Trail, Wadesboro, Polkton, Ellerbe, Norman, Biscoe, Lilesville, Marshville, Wingate, York, Chester, Lancaster Rock Hill, Tega Cay, Lake Wylie, Indian Land, Fort Mill",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 600);
  },
};
</script>
