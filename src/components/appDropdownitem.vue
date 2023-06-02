<script>
    export default {
        name: 'AppDropdownItem',
        props: {
            slug: {
                type: Object,
                required: true
            }
        }/*
        computed() {
          return this.$router.push({
                name: this.name,
                params: {
                    slug: this.path
                }
            })
        }*/
    }
</script>

<template>
    <a :href="this.slug" class="">
        <slot/>
    </a>
    <!--<a :href="$route.component" class="">
        <slot/>
    </a>-->
</template>