<script>
    import { results, currentRecipe, currentRecipeStatus } from './stores';
    import { beforeUpdate } from 'svelte';

    let recipe;

	beforeUpdate(() => {
		recipe = $results[$currentRecipe].recipe
	});

    function formatWeight (weight) {

        let formatedWeight = parseInt(Math.round( weight * 100 ) / 100)

        return  `${ formatedWeight} g`   
    }

</script>


<div class={ `recipe-${$currentRecipeStatus}` }>

    <div class="recipe-content">

        <div class="btn-recipe-content">
            <button on:click={ () => currentRecipeStatus.set('hidden')  }>
                X
            </button>
        </div>
        
        <p> { recipe.label } </p>

        <ul>
            <li>
               Source: { recipe.source }
            </li>
            <li>
                Yield: { recipe.yield }
            </li>
            <li>
                Diet Type:
                {#each recipe.dietLabels as diet}
                    <ul>
                        <li> {diet} </li>
                    </ul>
                {:else}
                    --    
                {/each}
            </li>
            <li>
               Calories: { parseInt(recipe.calories, 10) }
            </li>
            <li>
                Total weight: { formatWeight(recipe.totalWeight) } 
            </li>
            <li>
                Cautions:
                {#each recipe.cautions as caution}
                    <ul>
                        <li>{caution}</li>
                    </ul>
                {:else}
                    --    
                {/each}
            </li>
            <li>
                Ingredients and Directions: <a target="_blank" href={recipe.url}> { recipe.source } </a> 
            </li>
        </ul>

    </div>
  
</div>

<style>

    .recipe-hidden, .recipe-visible {
        position: fixed; 
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto;  
        background-color: rgba(0, 0, 0, 0.4); 
    }

    .recipe-hidden {
        display: none; 
    }

    .recipe-visible {
        display: block; 
    }

    .recipe-content {
        display: flex;
        flex-direction: column;
        background-color: #f2faff;
        margin: 15% auto; 
        padding: 20px;
        height: 80vh;
        width: 50vw; 
        border-radius: 5%;
    }

    .recipe-content a { 
        font-size: 1.2rem;
        font-weight: 700;
        color: #97a1a8;
    }

    .recipe-content p { 
        font-size: 1.6em;
    }

    .recipe-content ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
    }

    .btn-recipe-content  { 
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .btn-recipe-content button {
        position: relative;
        top: -10px;
        right: -10px;
        margin: 0;
        font-size: 1.4em;
        font-weight: 700;
        color: #97a1a8;
        background-color: #d8e1f0;
        border-radius: 50%;
        outline: none;
    }

    .btn-recipe-content button:hover {
        color: #d8e1f0;
        background-color: #97a1a8;
    }

</style>