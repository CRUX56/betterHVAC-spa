<script>
export default {
  props: {
    serviceAccordionArray: {
      type: Array,
      required: true,
    },
  },
  /*data() {
            return {
                items: [
                    {
                        title: 'item 1',
                        content: 'Content 1',
                        isOpen: false
                    },
                    {
                        title: 'item 2',
                        content: 'Content 2',
                        isOpen: false
                    },
                    {
                        title: 'item 3',
                        content: 'Content 3',
                        isOpen: false
                    }
                ]
            };
        },*/
  methods: {
    toggleItem(index) {
      this.serviceAccordionArray[index].isOpen =
        !this.serviceAccordionArray[index].isOpen;
    },
  },
  created() {
    console.log(this.serviceAccordionArray);
  },
};
</script>

<template>
  <div class="accordion">
    <div
      v-for="(item, index) in serviceAccordionArray"
      :key="index"
      class="accordion-item"
    >
      <div class="accordion-header" @click="toggleItem(index)">
        {{ item.title }}
        <div class="rating">
          <span v-for="i in item.rating" :key="i" class="star-entity">★</span>
        </div>
      </div>
      <div v-show="item.isOpen" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
