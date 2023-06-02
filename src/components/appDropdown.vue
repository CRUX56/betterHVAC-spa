<!--Contain the whole dropdown component-->
<script>
    import { mixin as clickaway } from 'vue-clickaway';
    
    export default {
        name: 'AppDropdown',
        mixins: [ clickaway ],
        provide () {
            return {
                sharedState: this.sharedState,
                //path: this.path
                //slug: this.slug
            }
        }, 
        data () {
            return {
                sharedState: {
                    active: false
                },
                //slug: this.$route.params.slug
            }
        },
        methods: {
            toggle () {
                this.sharedState.active = !this.sharedState.active
            },
            away () {
                this.sharedState.active = false
            }
        }
    }
</script>

<template>
    <div @click="toggle" v-on-clickaway="away">
        <slot name="toggler">
            <button>Toggle</button>
        </slot>
        <slot/>
    </div>
</template>