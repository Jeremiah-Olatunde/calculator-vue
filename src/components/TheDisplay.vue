<template>
	<div id="display">
		<div id="data">
			<div  v-for="(digit, idx) of number" :key="idx">
				{{digit}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props : { data : String, },
		computed : {
			number(){
				return this.data.length > 7 ? "MAX".split("") 
											: this.data.split(""); 
			}
		}
	}
</script>

<style lang="scss" scoped>
	#display{

		@include global.position(right);
		grid-area: display;
		background-color: rgb( 10, 10, 10 );
		color : rgb( 255, 255, 255 );
		font-family: "Digital-Regular";
		font-size: 6em;
		padding: 10px;

		#data{
			display: flex;
			justify-content: flex-end;
			div{ width: 46px; text-align: right; }
		}
	}
</style>