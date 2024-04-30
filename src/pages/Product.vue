<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          
          <!-- slider -->
          <div class="product-slider">
            <Carousel :autoplay="2000" :wrap-around="true">
              <Slide v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.name" />
              </Slide>
              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>

          <!-- content -->
          <div class="product-content">
            <h1 class="title">{{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
export default {
  name: "productPage",
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      product: null,
    };
  },
  created() {
    console.log({ route: this.$route, id: this.$route.params.id });
    let id = this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
  },
};
</script>
  
<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-slider,
.product-content {
  max-width: 48%;
  text-align: center;
}
</style>