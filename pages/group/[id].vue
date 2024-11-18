<template>
		<div class="al-container">
			<div class="md:flex mt-20">
				<div class="md:w-1/5 mb-8 flex flex-col items-center">
					<img src="@/assets/images/logo.jpg" alt="" style="margin:0 auto;">
					<p class="md:block mt-6" style="font-size: 22px; font-weight: 600;">ISecLab@SDU</p>
					<p class="hidden md:block text-xs mt-4" style="font-size: 16px; color: grey;">Internet and Security Laboratory</p>
					<p class="hidden md:block text-xs mt-4" style="font-size: 16px; color: grey;">Shandong University</p>
				</div>
				<div class="md:w-4/5">
					<div style="margin-top: 2rem;">
						<div class="flex justify-between mb-6">
							<h2 class="md:text-4xl md:mb-2" style="color: #333;font-weight: 600;">{{groupInfo?.title}}</h2>
							<!-- <p class="text-xs md:text-lg text-slate-400">{{ truncatedDesc }}</p> -->
						</div>
						<article class="leading-9 flex justify-between items-center  info">
							<p class="md:w-4/5 md:mr-10" style="margin-bottom: 15px;">{{groupInfo?.desc}}</p>
							<img class="md:w-1/5" :src="groupInfo?.image" alt="">
							<!-- <p style="margin-bottom: 15px;" v-for="content in contentList">{{content}}</p> -->
						</article>
					</div>
					<div class="mt-10" v-if="papersList.length > 0">
						<div class="flex justify-between mb-6">
							<div>
								<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic; border-bottom: 2px solid #f2f3f3;">Publications</p>
							</div>
						</div>
						<ol class="list-decimal pl-8">
							<li v-for="(paper, index) in papersList" :key="index" class="mb-4">
								<div>
									<strong>{{paper.title}}</strong>, Accepted by {{paper.conference}}
									<NuxtLink v-if="paper.arxiv" :to="paper.arxiv" target="_blank"
										class="font-normal no-underline text-orange-400 hover:text-orange-400 hover:underline"> [arxiv]
									</NuxtLink>
									<NuxtLink v-if="paper.code" :to="paper.code" target="_blank"
										class="font-normal no-underline text-orange-400 hover:text-orange-400 hover:underline"> [code]
									</NuxtLink>
								</div>
							</li>
						</ol>
					</div>
					<div class="mt-10" v-if="membersList.length > 0">
						<div class="flex justify-between">
							<div>
								<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic; border-bottom: 2px solid #f2f3f3;">Members</p>
							</div>
						</div>
						<PageSolution :solutionSwiper="membersList"/>
					</div>
				</div>
			</div>
		</div>
</template>

<script setup>
	import { computed, ref, onMounted } from 'vue';
	const truncatedDesc = computed(() => {
	return groupInfo.value.desc?.length > 20 
		? groupInfo.value.desc.substring(0, 20) + '...' 
		: groupInfo.value.desc;
	});
	const route = useRoute()
	const groupInfo = ref({})
	const contentList = ref([])
	const membersList = ref([])
	const papersList = ref([])
	onMounted(async () => {
		try {
			const response = await fetch('/groups.json')
			const data = await response.json()
			for (let i = 0; i < data.length; i++) {
				if (data[i].id == route.params.id) {
					groupInfo.value = data[i]
					contentList.value = data[i].content
				}
			}
			const papers = await fetch('/papers.json')
			const papersData = await papers.json()
			for (let i = 0; i < papersData.length; i++) {
				for (let j = 0; j < papersData[i].children.length; j++) {
					if (papersData[i].children[j].group == route.params.id) {
						papersData[i].children[j].year = papersData[i].year
						papersList.value.push(papersData[i].children[j])
					}
				}
			}
			const members = await fetch('/members.json')
			const membersData = await members.json()
			const tempList = membersData.member
			for (let i = 0; i < tempList.length; i++) {
				if (tempList[i].group == route.params.id || tempList[i].group == -1) {
					membersList.value.push(tempList[i])
				}
			}
		} catch (error) {
			console.error('获取分组列表失败:', error)
			contentList.value = []
			membersList.value = []
			papersList.value = []
		}
	})
</script>

<style lang="scss" scoped>
	.info{
		text-indent: 2em;color: #555;
		border: 1px solid #ddd; 
		padding: 1rem; 
		border-radius: 8px;
		box-sizing: border-box;
	}
	// .name{
	// 	color: #52adc8;
	// 	font-size: 1.25em;
	// 	text-decoration: underline;
	// 	margin-top: 0.5em;
	// 	margin-bottom: 0.25em;
	// 	line-height: 1.2;
	// }
</style>