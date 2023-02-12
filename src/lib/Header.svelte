<style>
    a {
        color: var(--hyperlink);
        text-decoration: none;
    }

    #logo {
        z-index: 1;

        width: calc(100vw - 10px);

        background: var(--dark-2);

        padding: 5px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        position: sticky;
        top: 0;
    }

    #logo a {
        padding: 10px;
        color: var(--light-1);
        font-weight: bold;
    }

    #logo img {
        height: 30px;
        width: auto;

        display: block;

        border-radius: 100%;
    }
</style>

<div id='logo'>
    <a href='/'>
        <img src='/img/favicon.svg' alt='Insfa Logo'>
    </a>
    <a href='/about'>
        About
    </a>
</div>
