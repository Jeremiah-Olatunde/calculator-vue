<template>
	<div id="utility" @click="handleClick">
		<div
			v-for="(item, idx) in content"
			:key="idx"
			:data-content = "item"
			class = "item"
		>
			<div>{{ item }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){ return {
			content : [ "AC", "+/-", "%" ]
		}},
		methods : {
			handleClick(e){
				if(e.target.dataset.content) 
					this.$emit( "btn-press", e.target.dataset.content)
				else 
					this.$emit( "btn-press", e.target.parentElement.dataset.content)
			}
		}
	}
</script>

<style lang="scss" scoped>
	#utility{
		grid-area: utility;
		background-color: rgb( 40, 40, 40 );
		display: flex;
		font-family: "Orbitron-Bold";
		font-size: 2em;
		color: rgb( 255, 255, 255 );
		.item{
			@include global.position(center);
			height: 90px;
			flex-basis: 33.333%;
		}
	}
</style>