<template>
	<div class="al-banner">
		<swiper class="swiper" :autoplay="{ delay: 5000,}" :pagination="{ clickable: true, }" :navigation="false"
			:modules="modules">
			<swiper-slide v-for="(banner,index) in data" :key="index">
				<img :src="banner.image" alt="">
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
	import {Swiper,SwiperSlide} from "swiper/vue";
	import "swiper/css";
	import "swiper/css/pagination";
	import "swiper/css/navigation";
	import {Autoplay,Pagination,Navigation} from "swiper";
	const modules = ref([Autoplay, Pagination, Navigation])
	const {data} = defineProps(['data'])
</script>
<style lang="scss">
	.swiper {
		width: 100%;
		max-height: 1200px;
		height: 100%;
	}
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.swiper-slide img {
		display: block;
		width: 100%;
		max-width: 1320px;
		max-height: 300px;
		object-fit: cover;
	}
	
	.asdas {
		color: #49240F;
	}
	
	.news-list-ul {
		h3 {
			font-weight: bold;
			color: #333;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
	}
</style>
