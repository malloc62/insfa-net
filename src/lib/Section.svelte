<style>
    .outer {
        width: 100vw;
        flex-direction: column;
        align-items: center; 
        display: flex;
    }

    .inner {
        width: calc( min(900px,100vw) - 100px );
    }
</style>

<div class='outer'>
    <div class='inner'>
        <slot />
    </div>
</div>
