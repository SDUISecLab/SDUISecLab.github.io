<template>
	<section class="al-container mx-auto">
		<div class="grid grid-cols-2 gap-10">
			<div v-for="(item,index) in productList" :key="index" @click="goToGroup(item.id)">
				<h3 class="text-lg text-center leading-[40px] text-white" style="background-color: #04406B; padding: 6px; box-sizing: border-box;">{{item.title}}</h3>
				<div class="relative" @mouseenter="item.display = true" @mouseleave="item.display = false">
					<img :src="item.image" alt="">
					<div class="desc absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4" :class="{'hidden':!item.display}">
						<p class="line-clamp-4">{{item.desc}}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const productList = ref([])
	onMounted(async () => {
		try {
			const response = await fetch('/groups.json')
			const data = await response.json()
			productList.value = data
		} catch (error) {
			console.error('获取分组列表失败:', error)
			productList.value = []
		}
	})
	const goToGroup = (id) => {
		navigateTo(`/group/${id}`)
	}
</script>

<style>
</style>