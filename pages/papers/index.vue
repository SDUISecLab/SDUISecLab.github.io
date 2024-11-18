<template>
		<div class="al-container">
			<div class="md:flex mt-20">
				<div class="md:w-1/5 mb-8 flex flex-col items-center">
					<img src="@/assets/images/logo.jpg" alt="" style="margin:0 auto;">
					<p class="md:block mt-6" style="font-size: 22px; font-weight: 600;">ISecLab@SDU</p>
					<p class="hidden md:block text-xs mt-4" style="font-size: 16px; color: grey;">Internet and Security Laboratory</p>
					<p class="hidden md:block text-xs mt-4" style="font-size: 16px; color: grey;">Shandong University</p>
				</div>
				<div class="md:w-4/5 md:ml-14">
					<h2 class="md:text-3xl md:mb-2" style="color: #333; font-style: italic; font-weight: 600;">Papers</h2>
					<div class="md:mb-4" v-for="(pItem,pIndex) in data" :key="pIndex">
						<h3 class="example-title">{{pItem.year}}</h3>
						<ul>
							<li class="mb-4" v-for="(item,index) in pItem.children" :key="index">
								<p class="mt-2 font-bold text-lg name hover:cursor-pointer">
									<span class="underline">{{item.title}}</span>
									<NuxtLink v-if="item.arxiv" :to="item.arxiv" target="_blank"
										class="font-normal no-underline text-black hover:text-orange-400 hover:underline"> [arxiv]
									</NuxtLink>
									<NuxtLink v-if="item.code" :to="item.code" target="_blank"
										class="font-normal no-underline text-black hover:text-orange-400 hover:underline"> [code]
									</NuxtLink>
								</p>
								<p class="mt-2 common" style="font-weight: bold">{{item.conference}}</p>
								<p class="mt-2 common">{{item.authors}}</p>
								<p class="mt-2" style="font-size: 1em;">{{item.description}}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
</template>

<script setup>
	const data = ref([])
	onMounted(async () => {
		const response = await fetch('/papers.json')
		const papersData = await response.json()
		data.value = papersData
	})
</script>

<style lang="scss" scoped>
	.name{
		color: #52adc8;
		font-size: 1.25em;
		margin-top: 0.5em;
		margin-bottom: 0.25em;
		line-height: 1.2;
	}
	.common{
		color: #9ba1a6;
		font-size: .75em;
	}
	.example-ul{
		display: flex;
	}
	.example-title{
		margin: 1.414em 0 0;
		padding-bottom: 0.5em;
		font-size: 1em;
		color: #9ba1a6;
		border-bottom: 1px solid #f2f3f3;
		font-weight: bold;
		line-height: 1.2;
	}
</style>