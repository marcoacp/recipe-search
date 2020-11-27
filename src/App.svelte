<script>
	
	import Recipeslist from './components/Recipeslist.svelte'
	
</script>

<main>
	<h1>Recipe Search</h1>

	<Recipeslist></Recipeslist>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		color: #97a1a8;
		font-family: 'Poppins', sans-serif;
	}

	@media (min-width: 380px) {
		main {
			max-width: 1080px;
		}
	}
</style>