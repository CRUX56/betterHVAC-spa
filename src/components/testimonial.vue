<script>
    import { 
        ArrowLeftCircleIcon,
        ArrowRightCircleIcon 
    } from "vue-feather-icons";

    import VueTinySlider from "vue-tiny-slider";

    export default {
        data() {
            return {
                tinySliderTestimonials: {
                    autoplay: true,
                    loop: true,
                    navPosition: "bottom",
                    controls: false,
                    autoplayButtonOutput: false
                }
            }
        },
        components: {
            ArrowLeftCircleIcon,
            ArrowRightCircleIcon,
            "tiny-slider" : VueTinySlider
        },
        methods: {
            getInfo: function(event) {
                this.$refs.tinySlider.slider.getInfo();
            }
        }
    }
</script>

<template>
<!-- Testimonials start -->
<section class="section bg-light feather-bg-img" :style="{'background-image': 'url(' + require('@/assets/images/features-bg-img.png') + ')'}" id="testimonials">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center mb-5">
                        <h3 class="title mb-3">
                            Testimonials
                        </h3>
                        <p class="text-muted font-size-15">
                            Lorem ipsum dolor sit amet, consectetuer nemo enim. Vestibulum molestie in odio rhoncus molestie.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <!--Testimonials goes here-->
                    <tiny-slider v-bind="tinySliderTestimonials" :mouse-drag="true" :loop="true" items="1" gutter="20">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat blandit metus, ac semper justo viverra eu. Sed sed purus sed neque volutpat sagittis. Pellentesque posuere cursus tincidunt. Praesent dapibus imperdiet leo. Nunc iaculis metus elit, eget sollicitudin risus fermentum nec. Aenean ut libero vehicula, tristique sapien a, rhoncus lacus. Nunc a iaculis eros. Ut in felis facilisis, placerat ipsum varius, ultricies lacus. Nullam lorem mauris, laoreet vel nisi eget, aliquam dapibus nunc. Nulla sed massa et velit pretium egestas. Nullam aliquet fringilla fringilla. Curabitur in pellentesque justo, ac sodales purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;<br/><br/> - <strong>Client 1, <em>Fake Client</em></strong></p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat blandit metus, ac semper justo viverra eu. Sed sed purus sed neque volutpat sagittis. Pellentesque posuere cursus tincidunt. Praesent dapibus imperdiet leo. Nunc iaculis metus elit, eget sollicitudin risus fermentum nec. Aenean ut libero vehicula, tristique sapien a, rhoncus lacus. Nunc a iaculis eros. Ut in felis facilisis, placerat ipsum varius, ultricies lacus. Nullam lorem mauris, laoreet vel nisi eget, aliquam dapibus nunc. Nulla sed massa et velit pretium egestas. Nullam aliquet fringilla fringilla. Curabitur in pellentesque justo, ac sodales purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;<br/><br/> - <strong>Client 2, <em>Fake Client</em></strong></p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat blandit metus, ac semper justo viverra eu. Sed sed purus sed neque volutpat sagittis. Pellentesque posuere cursus tincidunt. Praesent dapibus imperdiet leo. Nunc iaculis metus elit, eget sollicitudin risus fermentum nec. Aenean ut libero vehicula, tristique sapien a, rhoncus lacus. Nunc a iaculis eros. Ut in felis facilisis, placerat ipsum varius, ultricies lacus. Nullam lorem mauris, laoreet vel nisi eget, aliquam dapibus nunc. Nulla sed massa et velit pretium egestas. Nullam aliquet fringilla fringilla. Curabitur in pellentesque justo, ac sodales purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;<br/><br/> - <strong>Client 3, <em>Fake Client</em></strong></p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat blandit metus, ac semper justo viverra eu. Sed sed purus sed neque volutpat sagittis. Pellentesque posuere cursus tincidunt. Praesent dapibus imperdiet leo. Nunc iaculis metus elit, eget sollicitudin risus fermentum nec. Aenean ut libero vehicula, tristique sapien a, rhoncus lacus. Nunc a iaculis eros. Ut in felis facilisis, placerat ipsum varius, ultricies lacus. Nullam lorem mauris, laoreet vel nisi eget, aliquam dapibus nunc. Nulla sed massa et velit pretium egestas. Nullam aliquet fringilla fringilla. Curabitur in pellentesque justo, ac sodales purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;<br/><br/> - <strong>Client 4, <em>Fake Client</em></strong></p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat blandit metus, ac semper justo viverra eu. Sed sed purus sed neque volutpat sagittis. Pellentesque posuere cursus tincidunt. Praesent dapibus imperdiet leo. Nunc iaculis metus elit, eget sollicitudin risus fermentum nec. Aenean ut libero vehicula, tristique sapien a, rhoncus lacus. Nunc a iaculis eros. Ut in felis facilisis, placerat ipsum varius, ultricies lacus. Nullam lorem mauris, laoreet vel nisi eget, aliquam dapibus nunc. Nulla sed massa et velit pretium egestas. Nullam aliquet fringilla fringilla. Curabitur in pellentesque justo, ac sodales purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;<br/><br/> - <strong>Client 5, <em>Fake Client</em></strong></p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat blandit metus, ac semper justo viverra eu. Sed sed purus sed neque volutpat sagittis. Pellentesque posuere cursus tincidunt. Praesent dapibus imperdiet leo. Nunc iaculis metus elit, eget sollicitudin risus fermentum nec. Aenean ut libero vehicula, tristique sapien a, rhoncus lacus. Nunc a iaculis eros. Ut in felis facilisis, placerat ipsum varius, ultricies lacus. Nullam lorem mauris, laoreet vel nisi eget, aliquam dapibus nunc. Nulla sed massa et velit pretium egestas. Nullam aliquet fringilla fringilla. Curabitur in pellentesque justo, ac sodales purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;<br/><br/> - <strong>Client 6, <em>Fake Client</em></strong></p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat blandit metus, ac semper justo viverra eu. Sed sed purus sed neque volutpat sagittis. Pellentesque posuere cursus tincidunt. Praesent dapibus imperdiet leo. Nunc iaculis metus elit, eget sollicitudin risus fermentum nec. Aenean ut libero vehicula, tristique sapien a, rhoncus lacus. Nunc a iaculis eros. Ut in felis facilisis, placerat ipsum varius, ultricies lacus. Nullam lorem mauris, laoreet vel nisi eget, aliquam dapibus nunc. Nulla sed massa et velit pretium egestas. Nullam aliquet fringilla fringilla. Curabitur in pellentesque justo, ac sodales purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;<br/><br/> - <strong>Client 7, <em>Fake Client</em></strong></p>
                        </div>
                    </tiny-slider>
                </div>
            </div>
        </div>
    </section>
</template>