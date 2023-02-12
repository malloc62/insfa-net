<script>
    export let img = '/img/favicon.svg';
    export let name = 'Placeholder';
    export let url = '#';
</script>

<style>
    .project, .content {
        width: 300px;
        height: 250px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 3px 5px 3px rgba(0,0,0,0.1);
        border-radius: 5px;
        overflow: hidden;
        margin: 10px;
        padding: 10px;
    }

    h2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
    }

    h2 a {
        text-decoration: none;
        color: var(--dark-1);
    }

    img {
        height: 30px;
        width: 30px;

        margin: 5px;

        border-radius: 100%;
    }

    .content {
        z-index: 1;
    }
</style>

<div class='project'>
    <h2>
        <img src={img} alt='{name} Icon'>
        <a href={url}>{name}</a>
    </h2>
    <slot />
</div>
