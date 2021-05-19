<template>
	<div>
	</div>
</template>

<script>
	export default {
		data(){ return {
			curr : 0,
			prev : 0,
		}}
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
		// grid-template-areas:
		// 	"a a a a"
		// 	"b b b d"
		// 	"c c c d"
		// 	"c c c d"
		// 	"c c c d"
		// 	"c c c d"
		// ;
	}
</style>