<template>
	<div id="calculator">
		<TheDisplay v-bind:data="currData"></TheDisplay>
	</div>
</template>

<script>
	import TheDisplay from "./TheDisplay.vue";
	export default {
		data(){ return {
			currData : "0",
			prevData : "0",
		}},
		components : {
			TheDisplay,
		},
	}
</script>

<style lang="scss" scoped>
	#calculator{
		width: 360px;
		height: 570px;
		background-color: rgb( 70, 70, 70, );
		display: grid;
		grid-template-columns: global.repeat( auto, 4 );
		grid-template-rows: 120px global.repeat( auto, 5 );
		grid-template-areas:
			"display display display display"
			". . . ."
			". . . ."
			". . . ."
			". . . ."
			". . . ."
		;
	}
</style>