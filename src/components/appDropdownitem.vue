<script>
    export default {
        name: 'AppDropdownItem',
        props: {
            slug: {
                type: Object,
                required: true
            }
        },
        data() {
        //Removing the bottom from the function will make the link work but only on the top lvl service
          return {

          };
        },
        methods: {
            handleNavigation() {
                this.$router.push({
                    name: this.slug.name,
                    params: {
                        link: this.slug.path
                    }
                });
            }
        }
        /*
        data: function() {
        //Removing the bottom from the function will make the link work but only on the top lvl service
          return () => this.$router.push({
                name: this.slug.name, //this.slug.name
                params: {
                    link: this.slug.path
                }
            })
        }*/
    }
</script>

<template>
    <li>
        <a @click="handleNavigation()" class="">
        <!--slug.path-->
        <slot/>
    </a>
    </li>
    
    <!--<a :href="$route.component" class="">
        <slot/>
    </a>-->
</template>