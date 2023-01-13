<style>
    :global(:root) {
        --light-1: #ffffff;

        --dark-1: #000000;
        --dark-2: #2a3140;
        --dark-1-transparent: rgba(0,0,0,0.8);

        --primary-1: #42785f;
        --primary-2: #2e5442;

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

        flex-direction: column;
        align-items: start;
    }
</style>

<body>
    <slot></slot>
</body>
