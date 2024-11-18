<template>
	<header class="header">
		<div class="wrap">
			<img class="h-16" src="@/assets/images/logo2.png" alt="" @click="goToHome">
			<!-- <h1 class="ml-10 mr-20 text-2xl">ISecLab@SDU</h1> -->
			<AloneNavBar :data="navList" />
		</div>
	</header>
	<div class="header-white"></div>
</template>

<script setup>
	const navIndex = ref(0)
	const navList = ref([
		{name:'home',link:'/'},
		{name:'Publications',link:'/papers'},
		{name:'Members',link:'/members'},
		// {name:'解决方案',link:'#',children:[
		// 	{name:'银行解决方案',link:'/solution/bank'},
		// 	{name:'证券解决方案',link:'/solution/bank'},
		// 	{name:'高铁解决方案',link:'/solution/bank'},
		// ]},
		{name:'Groups',link:'/group'},
		// {name:'Courses',link:'/courses'},
		{name:'Contact',link:'/contact'},
	])
	const goToHome = () => {
		navigateTo('/')
	}
</script>

<style lang="scss">
	.header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		z-index: 999;
		padding: 0 10%;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		color: #fff;
		height: 6rem;
		background: #1352b0 url("@/assets/images/top_bg.png") no-repeat right center;
	}
	.wrap{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1320px;
	}
	.header-white{
		height: 6rem
	}
</style>
