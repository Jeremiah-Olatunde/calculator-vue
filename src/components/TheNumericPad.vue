<template>
	<div id="numeric" @click="test">
		<div 
			v-for="(item, idx) of content" 
			:key="idx" 
			class="item"
			:data-digit = "item"
		>
			<div>{{item}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){ return{
			content : [ ".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ].reverse()
		}},
		methods : {
			test(e){
				if(e.target.dataset.digit) this.$emit( "btn-press", e.target.dataset.digit)
				else this.$emit( "btn-press", e.target.parentElement.dataset.digit)
			}
		}
	}
</script>

<style lang="scss" scoped>
	#numeric{
		grid-area: numeric;
		height: 360px;
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		background-color: rgb( 20, 20, 20 );
		font-family: "Orbitron-Bold";
		font-size: 1.5em;
	}
	.item[data-digit="0"]{ flex-basis: 180px;}
	.item{ 
		@include global.position(center); 
		flex-basis: 90px;
		height: 90px;
		border: 1px solid rgb( 0, 0, 0 );
	}
</style>