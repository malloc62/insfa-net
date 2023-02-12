<script>
    import Header from '$lib/Header.svelte';
</script> 

<style>
    :global(:root) {
        --light-1: rgb(255,255,255);

        --dark-1: rgb(0,0,0);
        --dark-2: rgb(20,25,35);
        --dark-3: rgb(125,130,135);

        --primary-1: rgb(219, 219, 219);

        font-family: 'Open Sans';
        font-size: 1.0rem;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: "Open Sans", sans-serif;
        display: flex;

        color: var(--dark-1);
        
        background: var(--light-1);
        background-position: center;

        flex-direction: column;
        align-items: center;
    }
</style>

<Header />
<body>
    <slot></slot>
</body>
