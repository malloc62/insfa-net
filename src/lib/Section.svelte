<style>
    .outer {
        width: 100vw;
        flex-direction: column;
        align-items: center; 
        display: flex;
    }

    .inner {
        width: min(600px,100vw);
    }
</style>

<div class='outer'>
    <div class='inner'>
        <slot />
    </div>
</div>
