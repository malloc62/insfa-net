<script>
    import Button from '$lib/Button.svelte';
</script>

<style>
    .hwrap {
        display: flex;
        flex-direction: row;
        background: var(--primary-1);
        
        width: 100%;
        padding-top: 18px;
        padding-bottom: 18px;
    }
</style>

<div class='hwrap'>
    <Button
        href='/' 
        src='/img/favicon.svg' 
        hover='This site' 
        extra='small'
    /> 
</div> 
