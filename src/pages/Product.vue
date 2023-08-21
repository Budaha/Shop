<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <div class="product__wrapper">

                    <!-- slider -->
                    <div class="product-slider">
                        <carousel>
                            <slide v-for="(slide, index) in product.gallery" :key="index">
                                <img :src="slide.img" :alt="slide.name">
                            </slide>
                            <template #addons>
                                <Pagination />
                            </template>
                        </carousel>
                    </div>
                    
                    <!-- content -->
                    <div class="product-content">
                        <h1 class="title">{{ product.title }}</h1>
                        <p> {{ product.descr }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
    name: 'ProductPage',
    components: { Carousel, Slide, Pagination },
    data () {
        return {
            product: null
        }
    },
    created() {
        let id = this.$route.params.id
        this.product = this.$store.getters.getProduct(id)
    },
    
}
</script>

<style lang="scss" scoped>
.product__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product-slider,
.product-content {
    min-width: 48%;
    text-align: center;
}
::v-deep(.carousel) {
    .carousel__pagination-button::after {
        background-color: #5247e7;
        opacity: 0.5;
    }
    .carousel__pagination-button--active::after {
        opacity: 1 !important;

    }
}

</style>