<template>
	<header>
		<div id="nav_container">
			<nav>
				<ul id="logo"><li>CALCULATOR</li></ul>
				<ul id="icon">
					<li>
						<img 
							src="./assets/icons/calc.png" 
							alt="CALC ICON"
							>
					</li>
				</ul>
			</nav>
		</div>
		<section>
			<the-calculator id="calculator"></the-calculator>
		</section>
	</header>
</template>

<script>
	export default {
		data(){ return {
			foo : 'bar',
		}},
	}
</script>

<style lang="scss">
	// IMPORT FONTS 
	@include global.import_fonts("Poppins", (
		"Thin", "Medium", "Regular", "Bold"
	));

	// GENERAL STYLING
	body{
		background-color: rgb( 30, 30, 30 );
		font-size: 16px;
		font-family: "Poppins-Regular";
		color: rgb( 255, 255, 255 );
	}
</style>

<style lang="scss" scoped>
	header{
		height: 100vh;
		display: grid;
		grid-template-rows: 80px auto; 
		#nav_container{
			height: 80px;
			background-color: rgb( 0, 0, 0 );
			border-bottom: 1px solid rgb( 255, 255, 255 );
			img{ height: 30px; }
			nav{
				width: 90%;
				height: 100%;
				margin: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				#logo{
					font-family: "Poppins-Bold";
					font-size: 1.5em;
				}
			}
		}
	}
	section{
		display: flex;
		justify-content: center;
		align-items: center;
		#calculator{
			width: 360px;
			height: 510px;
			background-color: rgb( 70, 70, 70, );
		}
	}
</style>