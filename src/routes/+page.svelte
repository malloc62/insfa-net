<script>
    import Button from '$lib/Button.svelte';
    import Section from '$lib/Section.svelte'; 
</script>

<style>
    .fpage {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 500px;

        background: var(--primary-1);
        color: white;

        overflow: hidden;
    
        display: flex;
    }

    .hwrap {
        display: flex;
        flex-direction: row;
    }

    h3 {
        font-size: 3.7vmin;
    }
</style>

<div class='fpage'>
<img src='/img/favicon-white.svg'>
<h3>Experimenting in the realms of the Internet</h3>
</div>

<Section>
    <h1>Who we are</h1>
    <p>Insfa is a independent developer producing web applications of all sizes. As the head developer of Insfa, Xodrium manages the infrastructure and concepts that make it all happen.
</Section>
<Section>
    <h1>Projects</h1>
    <div class='hwrap'>
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
</Section>

<Section>
    <h1>Contacts</h1>
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
</Section>

<Section>
    <h1>Guidelines</h1>
    <div class='hwrap'>
        <Button
            href='/rules'
            src='/img/favicon.svg'
            hover='Rules'
        />
    </div>
</Section>
        
 
