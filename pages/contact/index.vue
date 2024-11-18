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
				<h2 class="md:text-3xl md:mb-2" style="color: #333; font-style: italic; font-weight: 600;">Contact</h2>
				<h3 class="example-title">Email</h3>
				<p class="mt-4" style="line-height: 2;">We are a group of computer security researchers working at the Internet and Security Laboratory (ISecLab) within the School of Cyber Science and Technology at The Shandong University. You can contact with us by:
					<br>
					Email: <strong>guoshanqing@sdu.edu.cn</strong>
				</p>
				<h3 class="example-title">Address</h3>
				<p class="mt-4" style="line-height: 2;">
					Room 401, Building 10, Shandong University, Qingdao, Shandong, China
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.name{
	color: #52adc8;
	font-size: 1.25em;
	text-decoration: underline;
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
	font-size: 1.25em;
	border-bottom: 1px solid #f2f3f3;
	font-weight: bold;
	line-height: 1.2;
}
</style>