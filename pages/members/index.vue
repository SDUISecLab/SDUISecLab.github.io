<template>
	<div class="product mb-16">
		<div class="al-container md:mt-9">
			<div class="md:flex">
				<div class="md:w-1/5 mb-8">
					<ul class="category-ul">
						<li class="mb-2 mr-3 hover:underline cursor-pointer" :class="{'active':categoryIndex==index}" v-for="(item,index) in categories" @click="categoryClick(index)" :key="index">
							{{item.name}}
						</li>
					</ul>
				</div>
				<div class="md:w-4/5 md:ml-14">
					<h2 class="md:text-3xl md:mb-2" style="color: #333; font-style: italic; font-weight: 600;">{{categoryName}}</h2>
					<!-- <h2 class="md:text-4xl md:mb-2" style="color: #333;font-weight: 600;">{{categories[categoryIndex].name}}</h2> -->
					<div class="grid grid-cols-2 md:grid-cols-2 gap-10 mt-10">
						<div v-for="(item,index) in productList" :key="index" class="flex items-center">
							<img class="img" :src="item.image" :title="item.title" :alt="item.title">
							<div class="ml-6">
								<p class="mt-2 font-bold text-lg name hover:cursor-pointer" @click="navigateTo(item.url)">{{item.name}}</p>
								<p class="mt-2">{{item.category}}</p>
								<p class="mt-2" v-if="item.email">{{item.email}}</p>
								<p class="mt-2" v-if="item.location">{{item.location}}</p>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script setup>
	const categoryIndex = ref(0)
	const categories = ref([])
	const categoryName = ref('')
	const productList = ref([])
	onMounted(async()=>{
		const response = await fetch('/members.json')
		const data = await response.json()
		categories.value = data.category
		let memberList = data.member
		let result = []
		for (let i = 0; i < memberList.length; i++) {
			if (memberList[i].typeId == categoryIndex.value) {
				result.push(memberList[i])
			}
		}
		productList.value = result
	})

	const categoryClick = async (index)=>{
		categoryIndex.value = index
		const response = await fetch('/members.json')
		const data = await response.json()
		categoryName.value = categories.value[index].name
		let memberList = data.member
		let result = []
		for (let i = 0; i < memberList.length; i++) {
			if (memberList[i].typeId == categoryIndex.value) {
				result.push(memberList[i])
			}
		}
		productList.value = result
	}

	// navigateTo 替换当前页面跳转
	const navigateTo = (url) => {
		if (url)
    		window.location.href = url;
	};
</script>

<style lang="scss" scoped>
	.name{
		color: #52adc8;
		font-size: 1.5rem;
		text-decoration: underline;
	}
	.img{
		width: 120px;
		border-radius: 50%;
		overflow: hidden;
	}
	.category-ul{
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		li{
			cursor: pointer;
			padding:0.3rem 1rem;
			border-radius: 5px;
			margin-bottom: 20px;
		}
		.active{
			background-color: $primary-color;
			color: #fff;
		}
	}
</style>