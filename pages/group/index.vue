<template>
	<div class="news">
		<div class="al-container">
			<div class="bg-white mt-32" v-for="(item, index) in newsList" :key="index">
				<div class="al-container" v-if="index % 2 == 0">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-20">
						<div class="basis-1/2">
							<div class="sec-top">
								<h3 class="title hover:cursor-pointer" @click="goToGroup(item.id)">{{ item.title }}</h3>
								<!-- <p>{{item.desc}}</p> -->
							</div>
							<div class="flex1 mt-8">
								<div class="flex items-center w-28">
									<img width="30px"
										src="@/assets/images/C1_icon_07-483.png"
										alt="">
									<p style="color: #17E5E0;">Overview</p>
								</div>
								<div class="flex items-center1 ml-2" style="margin-top: 15px;color: #666;">
									<p>{{ item.desc }}</p>
								</div>
							</div>
						</div>
						<div style="max-width: 80%; margin: 0 auto;" @click="goToGroup(item.id)">
							<img :src="item.image" alt="">
						</div>
					</div>
				</div>
				<div class="al-container" v-if="index % 2 == 1">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
						<div style="max-width: 80%; margin: 0 auto;" @click="goToGroup(item.id)">
							<img :src="item.image" alt="">
						</div>
						<div class="basis-1/2">
							<div class="sec-top">
								<h3 class="title" @click="goToGroup(item.id)">{{ item.title }}</h3>
								<!-- <p>{{item.desc}}</p> -->
							</div>
							<div class="flex1 mt-8">
								<div class="flex items-center w-28">
									<img width="30px"
										src="@/assets/images/C1_icon_07-483.png"
										alt="">
									<p style="color: #17E5E0;">Overview</p>
								</div>
								<div class="flex items-center1 ml-2" style="margin-top: 15px;color: #666;">
									<p>{{ item.desc }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- <AlonePagination /> -->
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const newsList = ref([])
onMounted(async () => {
	const res = await fetch('/groups.json')
	newsList.value = await res.json()
})
const goToGroup = (id) => {
	router.push(`/group/${id}`)
}
</script>

<style lang="scss" scoped>
.news {
	background-color: #fff;
}

.desc {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	text-overflow: ellipsis;
	max-height: 4.5em;
	line-height: 1.5em;
}

.banner-top {
		height: 300px;
		background-image: url('http://cdn.gold404.cn/nuxt/bank-bg.png');
		background-size: 100% 100%;
		position: relative;
		&::before {
			z-index: 1;
			content: '';
			width: 100%;
			height: 100%;
			background: linear-gradient(89.96deg, #12205B 25.8%, rgba(18, 32, 91, 0) 95.33%);
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.yuyue-btn {
		background-color: #17e5e0;
		color: #12205B;
		padding: 5px;
		padding: 8px 25px;
		border-radius: 20px;
	}

	.td-box {
		background-color: #fff;
		padding:3rem 2rem;
		box-shadow: 0px 4px 14px 0px #0b28741a;
		overflow: hidden;
		color: #6F748A;
		line-height: 1.75;
		border-radius: 5px;

		.title {
			color: #12205B;
			font-weight: bold;
			font-size: 20px;
			margin: 1rem 0;
		}
	}
	.sec-top{
		position: relative;
		padding-left: 20px;
		color: #888;
		font-size: 14px;
		.title{
			color: #12205B;
			font-weight: bold;
			font-size: 1.6rem;
			margin-bottom: 5px;
		}
		&:before{
			content: '';
			background-color: #17E5E0;
			display: block;
			width: 10px;
			height: 4rem;
			border-radius: 50px;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
