<script>
    export let href = '';
    export let src = '';
    export let extra = '';
    export let hover = '';
</script>

<style>
    img {
        border-radius: 100%;
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }

    .noround {
        border-radius: 0;
    }
    
    .button-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: visible;
    
        width: 140px;
    }

    .button-hover {
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: transparent;
    }

    a:hover .button-hover {
        color: white;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: var(--light-1);
    }

    img.small {
        width: 50px;
        height: 50px;
        margin: 0;
    }

    .small .button-hover {
        display: none;
    }

</style>

<a href={href} class='button-wrapper'>
    <img class={extra} src={src}>
    <div class={extra}>
        <div class='button-hover'>
            {hover}
        </div>
    </div>
</a>
