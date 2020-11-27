<div class="load-container">
    <p> Loading </p>
    <svg>
        <circle cx='70' cy='70' r='70'></circle>
    </svg>

</div>

<style>

    .load-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .load-container p {
        font-size: 2em;
    }

    .load-container svg { 
        position: relative;
        height: 150px;
        width: 150px;
        animation: rotate 2s linear infinite;
    }

    .load-container circle {
        height: 100%;
        width: 100%;
        fill: none;
        stroke: #f2faff;
        stroke-width: 10;
        stroke-linecap: round;
        stroke-dashoffset: 440;
        stroke-dasharray: 440;
        transform: translate(5px,5px);
        animation: loading 4s linear infinite ;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes loading {
        0%, 100% {
            stroke-dashoffset: 440;
        }
        
        50% {
            stroke-dashoffset: 0;
        }
        50.1% {
            stroke-dashoffset: 880;
        }
    }

</style>