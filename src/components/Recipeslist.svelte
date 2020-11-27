<script>
    import { endPoint } from '../helpers/endpoint'
    import { appId, appKey } from '../helpers/keys'
    import { searchItem, results, currentRecipe, currentRecipeStatus, home, waitTime } from './stores.js'
    import RecipesDetails from './RecipesDetails.svelte'
    import Home from './Home.svelte'
    import Load from './Load.svelte'

    let calls=0;
    let disableSearch = false; 

    function resetCalls() {

        calls=0;
        home.set(true)
        waitTime.set(false)
        disableSearch = false;
    }

    async function setRecipes (item) {

        results.set([])
        home.set(false)
        let url = `search?q=${item}&app_id=${appId}&app_key=${appKey}&from=0&to=99`
        
        if( calls < 4 ) { 
            calls++;
            await endPoint.get(url).then(response => results.set(response.data.hits))
         }
            
        else {
            setTimeout(resetCalls, 60000);
            alert(`Limite de chamadas atingido, por favor aguarde 1 minuto`)
            waitTime.set(true)
            disableSearch = true;
        }
                 
    }

    function showDetails (recipe) {

        currentRecipe.set(recipe)
        currentRecipeStatus.set('visible')
    }

</script>

<div class="search-container">
    <input placeholder='Ingredient/Recipe' bind:value={ $searchItem } disabled={ disableSearch } />

    <button disabled={ disableSearch }
        on:click={ () => $searchItem == '' ? alert('Null') : setRecipes($searchItem) }>

        <svg class='search-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">

            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
    </button>
</div>

<div class="recipes-container">
    
    {#each $results as result}
        <div class="recipe">
                <span> {result.recipe.label} </span>
                <img src={result.recipe.image} alt={result.recipe.label} 
                    on:click={ () => showDetails($results.indexOf(result)) } />           
        </div>  
    {/each} 

    {#if $results.length > 0}
        <RecipesDetails></RecipesDetails>
    {:else}
        {#if $home == true}
            <p><Home></Home></p>
        {:else}
            {#if $waitTime == false}
                <Load></Load>
            {:else}
                <h3 data-text='Waiting...'>Waiting...</h3>
            {/if}    
        {/if}                 
    {/if}

</div>

<style>

    p {
        font-size: 1.2em;
    }

    h3 {
        position: relative;
        font-size: 2em;
        color: #d8e1f0;
        -webkit-text-stroke: 3px #97a1a8;
    }

    h3::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        color: #f2faff;
        -webkit-text-stroke: 0px #97a1a8;
        border-right: 2px solid #f2faff;
        overflow: hidden;
        animation: animate 2s linear infinite;
    }

    @keyframes animate {

        0%, 10%, 100% {
            width: 0;
        }

        70%, 90% {
            width: 100%;
        }
    }

    input, button {
        margin-bottom: 10px;
        margin-right: 0px;
        margin-left: 0px;
        font-family: 'Poppins', sans-serif;
        background-color: #f2faff;
        border: none;
        outline: none;
    }

    input:disabled, .search-container button:disabled {
        background-color: #666;
        cursor: not-allowed;
    }

    .search-container {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .search-container input {
        height: 5vh;
        width: 25vw;
        border: 4px solid #97a1a8;
        border-right: 1px solid #97a1a8;
        border-radius: 10px 0px 0px 10px;
        font-size: 1.2em;
    }

    .search-container button {
        height: 6.5vh;
        cursor: pointer;
        border: 4px solid #97a1a8;
        border-left: 1px solid #97a1a8;
        border-radius: 0px 10px 10px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-icon:hover {
        fill: #a8979f;
    }

    .recipes-container {
        width: 100%;
        display: flex;
        position: relative;
        align-items: space;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
    }

    .recipe {
        height: 400px;
        width: 320px;
        margin: 0.2em;
        background-color: #f2faff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        padding: 5px;
        font-size: 1.2em;
        border-radius: 4%;
    }

    .recipe img {
        width: 300px;
        height: 300px;
        border-radius: 4%;
        cursor: pointer;
    }


</style>