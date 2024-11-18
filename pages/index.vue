<template>
	<div>
		<Head>
			<Title>{{title}}</Title>
			<Meta name="description" :content="title" />
			<!-- <Style type="text/css" children="body { background-color: green; }" /> -->
		</Head>
		<div class="relative">
			<AloneBanner class="h-30 md:h-auto banner" :data='bannerList'/>
			<div class="absolute inset-0 z-10 mask">
				<div class="al-container mt-16">
					<div class="bg-gray-100/60 backdrop-blur-sm p-2 rounded-lg" style="max-width: 800px;">
						<h1 class="text-2xl md:text-4xl font-bold mb-4 text-gray-900">SDU·ISecLab</h1>
						<p class="text-gray-800 leading-relaxed mb-4">
							Our mission is to solve real world security problems with cutting-edge research in network and computer security,include: (1) software security (e.g., binary code analysis and vulnerability discovery such as fuzzing)； (2) security and measurement for the internet and other large-scale distributed systems and (3) security in emerging computing platforms (e.g., mobile, IoT, AI, and cloud).
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="py-1 md:py-8" style="background-color: #fff;">
			<section class="al-container">
				<div class="md:flex">
					<div class="md:w-3/5 mb-8">
						<div class="flex justify-between mb-6">
							<div>
								<!-- <h2 class="md:text-4xl md:mb-2" style="color: #333;font-weight: 600;">动态</h2> -->
								<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic;color: #d6dbe4;">Recent Publications</p>
							</div>
						</div>
						<ul class="news-list-ul">
							<li class="md:mb-6" v-for="(newsItem,index) in newsList.slice(0,maxLength)" :key="index">
								<Nuxt-link to="/" style="line-height: 2;">
									<span class="num" style="">{{index+1}}</span>
									<span><span class="font-bold mr-2 ml-2">{{newsItem.title}}</span>, Accepted by {{newsItem.conference}}</span>
									<span class="hidden md:block" style="color: #999;float: right; font-size: 1rem;">{{newsItem.date}}</span>
								</Nuxt-link>
							</li>
							<li v-if="newsList.length >= maxLength">
								<NuxtLink to="/papers" class="text-blue-500 hover:text-primary hover:underline">
									More...
								</NuxtLink>
							</li>
						</ul>
					</div>
					<div class="p-1 md:w-2/5 md:ml-10">
						<PageProduct />
						<div class="flex justify-between mb-6 mt-10">
							<div>
								<!-- <h2 class="md:text-3xl md:mb-2" style="color: #333;font-weight: 600;">公告</h2> -->
								<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic;color: #d6dbe4;">Notices</p>
							</div>
						</div>
						<div class="mb-4">
							The laboratory welcomes undergraduate interns, guest graduate students, postdocs, research engineers, etc.
						</div>
						<NuxtLink to="/contact" class="text-blue-500 hover:text-primary hover:underline">
							Learn more...
						</NuxtLink>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
	const title = ref('ISecLab')
	const bannerList = ref([])
	const maxLength = ref(8)	
	const newsList = ref([])
	onMounted(async () => {
		try {
			const response = await fetch('/papers.json')
			const data = await response.json()
			let count =  0
			let tempList = []
			for (let i = 0; i < data.length; i++) {
				let year = data[i].year
				for (let j = 0; count < maxLength.value && j < data[i].children.length; j++) {
					data[i].children[j].date = year
					tempList.push(data[i].children[j])
					count++
					if (count >= maxLength.value) break
				}
				if (count >= maxLength.value) break
			}
			console.log(tempList)
			newsList.value = tempList
		} catch (error) {
			console.error('获取新闻列表失败:', error)
			newsList.value = []
		}
		try {
			const bannerResponse = await fetch('/bannerList.json')
			const bannerData = await bannerResponse.json()
			bannerList.value = bannerData
		} catch (error) {
			console.error('获取banner列表失败:', error)
			bannerList.value = []
		}
	})

</script>

<style>
	.num{
		color: #fff;
		font-weight: normal;
		padding: 2px 12px;
		font-size: 1rem;
		margin-right: 5px;
		background-color: #a9a5a5;
		border-radius: 1px;
	}
	.news-list-ul li:nth-child(1) .num{
		background-color: #fb0d0d;
	}
	.news-list-ul li:nth-child(2) .num{
		background-color: #fb9c0d;
	}
	.news-list-ul li:nth-child(3) .num{
		background-color: #15acd9;
	}
	.banner{
		overflow: hidden;
	}

	@media (max-width: 768px) {
		.banner {
			height: 200px;
		}
		.mask {
			display: none;
		}
	}
</style>