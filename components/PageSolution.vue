<template>
	<div>
		<section class="al-container border-box p-10">
			<div>
				<div class="cards flex flex-wrap">
					<li v-for="(item,index) in solutionSwiper" :key="index" class="w-1/4 box-border p-4 mt-6">
						<!-- <a :href="item.id==7 ? '/person/'+item.id: 'javascript:void(0)'" class="card"> -->
						<a href="javascript:void(0)" class="card">
							<img :src="item?.image" class="card__image" alt="" />
							<div class="card__overlay">
								<div class="card__header">
								<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
								<!-- <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> -->
								<div class="card__header-text flex justify-around w-full">
									<h3 class="card__title">{{item?.name}}</h3>            
									<div class="card__status">{{item?.category}}</div>
								</div>
								</div>
								<p class="card__description">{{item?.description}}</p>
							</div>
						</a> 
					</li>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import {
		Swiper,
		SwiperSlide
	} from "swiper/vue";
	import "swiper/css";
	import "swiper/css/pagination";
	import "swiper/css/navigation";
	import {
		Autoplay,
		Pagination,
		Navigation
	} from "swiper";
	const modules = ref([Autoplay, Navigation])
	const {
		solutionSwiper
	} = defineProps(['solutionSwiper'])
</script>

<style lang="scss" scoped>
	.cards {
		padding: 0;
		list-style-type: none;
	}

	.card {
		position: relative;
		display: block;
		height: 120%;  
		border-radius: calc(var(--curve) * 1px);
		overflow: hidden;
		text-decoration: none;
	}

	.card__image {      
		width: 100%;
		height: auto;
	}

	.card__overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;      
		border-radius: calc(var(--curve) * 1px);    
		background-color: #fff;      
		transform: translateY(100%);
		transition: .2s ease-in-out;
	}

	.card:hover .card__overlay {
	transform: translateY(0);
	}

	.card__header {
	position: relative;
	display: flex;
	align-items: center;
	padding: 1em;
	border-radius: calc(var(--curve) * 1px) 0 0 0;    
	background-color: #fff;
	transform: translateY(-80%);
	transition: .2s ease-in-out;
	}

	.card__arc {
	width: 80px;
	height: 80px;
	position: absolute;
	bottom: 100%;
	right: 0;      
	z-index: 1;
	}

	.card__arc path {
		fill: #fff;
		d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
	}       

	.card:hover .card__header {
	transform: translateY(0);
	}

	.card__thumb {
	flex-shrink: 0;
	width: 50px;
	height: 50px;      
	border-radius: 50%;      
	}

	.card__title {
	font-size: 1em;
	margin: 0 0 .3em;
	color: black;
	}

	.card__tagline {
	display: block;
	margin: 1em 0;
	font-family: "MockFlowFont";  
	font-size: .8em; 
	color: grey;  
	}

	.card__status {
	font-size: .8em;
	color: grey;
	}

	.card__description {
		padding: 0 1em 1em;
		margin: 0;
		color: grey;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 4.5em;
		line-height: 1.5em;
	}  

</style>
