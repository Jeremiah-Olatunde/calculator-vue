<template>
	<div id="calculator">
		<TheDisplay v-bind:data="currData"></TheDisplay>
		<TheNumericPad @btn-press="updateData"></TheNumericPad>
		<TheUtilityPad @btn-press="utilityHandler"></TheUtilityPad>
	</div>
</template>

<script>
	import TheDisplay from "./TheDisplay.vue";
	import TheNumericPad from "./TheNumericPad.vue";
	import TheUtilityPad from "./TheUtilityPad.vue";
	export default {
		data(){ return {
			currData : "0",
			prevData : "0",
		}},
		components : {
			TheDisplay,
			TheNumericPad,
			TheUtilityPad,
		},
		methods : {
			updateData(digit){
				if( this.currData.endsWith(".") && digit == "." ) return;
				else if( this.currData == "0" && digit == "0" ) return;
				else if( this.currData.includes(".") && digit == "." ) return;
				else if( this.currData.length == 7 ) return;
				else if( this.currData == "0" ) this.currData = digit;
				else this.currData += digit;
			},
			clearData(){ this.currData = "0" },
			utilityHandler(content){
				if( content == "AC" ) this.clearData();
				if( content == "+/-") this.currData = ((+(this.currData))*-1).toString(); 
				if( content == "%" ) this.currData = (+((this.currData))/100).toString(); 
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
			"utility utility utility ."
			"numeric numeric numeric ."
			"numeric numeric numeric ."
			"numeric numeric numeric ."
			"numeric numeric numeric ."
		;
	}
</style>