<template>
	<div class="al-container">
		<div class="md:flex mt-20">
			<div class="md:w-1/5 mb-8 flex flex-col items-center">
				<img src="@/assets/images/logo.jpg" alt="" style="margin:0 auto;">
				<p class="md:block mt-6" style="font-size: 22px; font-weight: 600;">ISecLab@SDU</p>
				<p class="hidden md:block text-xs mt-4" style="font-size: 16px; color: grey;">Internet and Security
					Laboratory</p>
				<p class="hidden md:block text-xs mt-4" style="font-size: 16px; color: grey;">Shandong University</p>
			</div>
			<div class="md:w-4/5 md:ml-14">
				<h2 class="md:text-3xl md:mb-2" style="color: #333; font-style: italic; font-weight: 600;">
					{{ memberInfo?.name }}</h2>
				<h3 class="example-title">Description</h3>
				<p class="mt-4" style="line-height: 2;">{{ memberInfo?.description }}</p>
				<h3 class="example-title">Email</h3>
				<p class="mt-4" style="line-height: 2;"><strong>{{ memberInfo?.email }}</strong></p>
				<h3 class="example-title">Address</h3>
				<p class="mt-4" style="line-height: 2;">
					{{ memberInfo?.address }}
				</p>
				<h3 class="example-title">Profile</h3>
				<div class="mt-4 flex justify-around" style="line-height: 2;">
					<img :src="memberInfo?.image" style="width: 200px;" alt="">
					<img src="/member/zangchuanchao1.jpg" style="width: 200px;" alt="">
				</div>	
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
const route = useRoute()
const memberInfo = ref({})
onMounted(async () => {
	try {
		const members = await fetch('/members.json')
		const membersData = await members.json()
		const memberList = membersData.member
		for (let i = 0; i < memberList.length; i++) {
			if (memberList[i].id == route.params.id) {
				memberInfo.value = memberList[i]
			}
		}
	} catch (error) {
		console.error('获取成员列表失败:', error)
	}
})
</script>

<style lang="scss" scoped>
.example-ul {
	display: flex;
}

.example-title {
	margin: 1.414em 0 0;
	padding-bottom: 0.5em;
	font-size: 1.25em;
	border-bottom: 1px solid #f2f3f3;
	font-weight: bold;
	line-height: 1.2;
}
</style>