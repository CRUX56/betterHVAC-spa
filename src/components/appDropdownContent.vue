<!--Wrap the menu component-->
<script>
    export default {
        name: 'AppDropdownContent',
        inject: ['sharedState'],
        computed: {
            active () {
                return this.sharedState.active
            }
        }
    }
</script>

<template>
    <ul v-if="active">
        <slot/>
    </ul>
</template>