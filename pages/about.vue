<template>
	<div class="about">
		<PageTop title="关于我们" />
		<div class="al-container mx-auto mt-12">
			<article class="leading-9">
				<h3 class="text-4xl mb-6 font-semibold">课题组简介</h3>
				<p>We are a group of computer security researchers working at the Internet and Security Laboratory (ISecLab) within the School of Cyber Science and Technology at The Shandong University. You can contact with us by:
				</p>
				<p>Email: guoshanqing@sdu.edu.cn</p>
			</article>
		</div>
	</div>
</template>

<script setup>
	// useHead({
	// 	title:'关于我们 - 企业官网',
	// 	meta:[
	// 		{name:'description',content:'关于我们页面'}
	// 	],
	// 	bodyAttrs:{
	// 		class:'aboutkkk'
	// 	},
	// 	script:[
	// 		{children:'console.log(\'关于我们\')'}
	// 	]
	// })
</script>

<style lang="scss">
	.about{
		min-height: 1200px;
		article p{
			text-indent: 2em;
			margin-bottom: 15px;
			color: #555;
		}
	}
</style>
