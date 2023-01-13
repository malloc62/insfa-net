<script>
    import Button from '$lib/Button.svelte';
</script>

<style>
    .fpage {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    
        background-image: linear-gradient(var(--dark-1-transparent),var(--dark-1-transparent)), url(/img/space.svg); /*var(--light-1);*/
        background-position: center;
        background-size: cover;
    
        overflow: hidden;
    
        display: flex;

        color: var(--light-1);
    }

    .hwrap {
        display: flex;
        flex-direction: row;
    }

</style>

<div class='fpage'>
<h1>Hello, I am Xodrium, malloc62, Derv, etc.</h1>
<div class='hwrap'>
    <Button
        href='#' 
        src='/img/favicon.svg' 
        hover='This site' 
    />
    <Button 
        href='https://discord.insfa.net/invite' 
        src='/img/planarcraph.svg' 
        hover='Geopolitical Minecraft server without Towny' 
    />
    <Button 
        href='https://tree.insfa.net/' 
        src='/img/tree.svg' 
        hover='An alternative remix tree frontend for Scratch' 
    />
</div>
<div class='hwrap'>
    <Button
        href='https://discord.gg/JVpbAQCxpP' 
        src='/img/discord-mark-white.svg' 
        hover='Discord server' 
        extra='noround'
    />
    <Button 
        href='https://alldimensions.fandom.com/wiki/User:08dravennew' 
        src='/img/Fandom_2021.svg' 
        hover='FANDOM account' 
        extra='noround'
    />
    <Button 
        href='https://github.com/malloc62' 
        src='/img/github-mark-white.svg' 
        hover='GitHub account'
        extra='noround'
    />
</div>

<div class='hwrap'>
    <Button
        href='/rules' 
        src='/img/favicon.svg' 
        hover='Rules' 
    />
</div> 
</div>
