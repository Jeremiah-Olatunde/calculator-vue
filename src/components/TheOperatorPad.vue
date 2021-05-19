<template>
	<div id="operator" @click="handleClick">
		<div
			v-for="( item, idx) of content"
			:key="idx"
			:data-content = "item"
			class="item"
		>
			<div>{{item}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){ return{
			content : [ "+", "-", "*", "/", "="],
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
	#operator{
		height: 450px;
		grid-area: operator;
		font-family: "Digital-Italic";
		font-size: 2em;
		color : rgb( 255, 255, 255 );
		background-color: rgb( 40, 0, 0 );
		display: flex;
		flex-direction: column;
		.item{
			@include global.position( center );
			height: 90px;
			flex-basis: 100%;
			border-bottom: 1px solid rgb( 0, 0, 0 );
		}
	}
</style>