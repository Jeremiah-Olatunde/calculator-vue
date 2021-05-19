<template>
	<div id="calculator">
		<TheDisplay v-bind:data="currData"></TheDisplay>
		<TheNumericPad @btn-press="updateData"></TheNumericPad>
	</div>
</template>

<script>
	import TheDisplay from "./TheDisplay.vue";
	import TheNumericPad from "./TheNumericPad.vue";
	export default {
		data(){ return {
			currData : "0",
			prevData : "0",
		}},
		components : {
			TheDisplay,
			TheNumericPad,
		},
		methods : {
			updateData(digit){
				if( this.currData.endsWith(".") && digit == "." ) return;
				else if( this.currData == "0" && digit == "0" ) return;
				else if( this.currData.includes(".") && digit == "." ) return;
				else if( this.currData.length == 7 ) return;
				else if( this.currData == "0" ) this.currData = digit;
				else this.currData += digit;
			}
		}
	}
</script>

<style lang="scss" scoped>
	#calculator{
		width: 360px;
		height: 570px;
		background-color: rgb( 70, 70, 70, );
		display: grid;
		grid-template-columns: global.repeat( 90px, 4 );
		grid-template-rows: 120px global.repeat( auto, 5 );
		grid-template-areas:
			"display display display display"
			". . . ."
			"numeric numeric numeric ."
			"numeric numeric numeric ."
			"numeric numeric numeric ."
			"numeric numeric numeric ."
		;
	}
</style>