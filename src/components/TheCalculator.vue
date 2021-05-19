<template>
	<div id="calculator">
		<TheDisplay v-bind:data="currData"></TheDisplay>
		<TheNumericPad @btn-press="numericHandler"></TheNumericPad>
		<TheUtilityPad @btn-press="utilityHandler"></TheUtilityPad>
		<TheOperatorPad @btn-press="operatorHandler"></TheOperatorPad>
	</div>
</template>

<script>
	import TheDisplay from "./TheDisplay.vue";
	import TheNumericPad from "./TheNumericPad.vue";
	import TheUtilityPad from "./TheUtilityPad.vue";
	import TheOperatorPad from "./TheOperatorPad.vue";
	export default {
		data(){ return {
			currData : "0",
			prevData : "0",
			currOp : "",
		}},
		components : {
			TheDisplay,
			TheNumericPad,
			TheUtilityPad,
			TheOperatorPad,
		},
		methods : {
			clearData(){ this.currData = "0" },
			evaluate(){
				switch( this.currOp ){
					case "+": 
						this.currData = (+(this.prevData) + +(this.currData)).toString();
						this.currOp = "";
						break;
					case "-": 
						this.currData = (+(this.prevData) - +(this.currData)).toString();
						this.currOp = "";
						break;
					case "*": 
						this.currData = (+(this.prevData) * +(this.currData)).toString();
						this.currOp = "";
						break;
					case "/": 
						this.currData = (+(this.prevData) / +(this.currData)).toString();
						this.currOp = "";
						break;

				}
			},
			numericHandler(digit){
				if( this.currData.endsWith(".") && digit == "." ) return;
				else if( this.currData == "0" && digit == "0" ) return;
				else if( this.currData.includes(".") && digit == "." ) return;
				else if( this.currData.length == 7 ) return;
				else if( this.currData == "0" ) this.currData = digit;
				else this.currData += digit;
			},
			utilityHandler(content){
				if( content == "AC" ) this.clearData();
				if( content == "+/-") this.currData = ((+(this.currData))*-1).toString(); 
				if( content == "%" ) this.currData = (+((this.currData))/100).toString(); 
			},
			operatorHandler(content){
				if(content == "=") this.evaluate();
				else if( this.currOp ) this.currOp = content;
				else{
					this.prevData = this.currData;
					this.currOp = content;
					this.clearData();
				}
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
			"utility utility utility operator"
			"numeric numeric numeric operator"
			"numeric numeric numeric operator"
			"numeric numeric numeric operator"
			"numeric numeric numeric operator"
		;
	}
</style>