<script>
    import Project from '$lib/Project.svelte';
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
        color: var(--dark-3);

        overflow: hidden;
    
        display: flex;
    }

    .fpage a {
        color: black;
        font-weight: bold;
    }

    .fpage img {
        filter: drop-shadow(0 0 8px rgba(0,0,0,0.1));
    }

    h3 {
        font-size: 3.7vmin;
        margin-bottom: 0;
    }

    .hwrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

<div class='fpage'>
<img src='/img/favicon-white.svg'>
<h3>Experimenting in the realms of the Internet</h3>
</div>
        
<Section>
    <div class='hwrap'>
        <Project name='About' url='/about' img='/img/favicon.svg'>
            <p>A summary about the backend and developer of Insfa.</p>
        </Project>
        <Project name='Guidelines' url='/rules'>
            <p>Guidelines for any user using the services on Insfa. Important read!</p>
        </Project>
        <Project name='Sanifae' url='https://sanifae.insfa.net/' img='https://sanifae.insfa.net/icon_sanifae_black.svg'>
            <p>A social media oriented around short posts. Currently in early alpha.</p>
        </Project>
        <Project name='OC Rater' url='https://rate.insfa.net/' img='https://rate.insfa.net/YourOC.svg'>
            <p>I will rate any OCs you upload to this site. OCs do not show up until rated for most users.</p>
        </Project>
        <Project name='GitHub' url='https://github.com/malloc62' img='/img/github-mark-white.svg'>
            <p>GitHub repository containing the majority of modern Insfa projects.</p>
        </Project>
        <Project name='Discord' url='https://discord.com/invite/JVpbAQCxpP' img='/img/discord-mark-white.svg'>
            <p>Communications server on Discord for Insfa.</p>
        </Project>
        <Project name='PlanarCraph' url='https://wiki.insfa.net/wiki/Main_Page' img='/img/planarcraph.svg'>
            <p>A vanilla Minecraft Server with a civilization focus.</p>
        </Project>
        <Project name='NeoScratchTree' url='https://tree.insfa.net/' img='/img/tree.svg'>
            <p>An alternative tree frontend for Scratch. Redesign is planned but not a priority.</p>
        </Project>
    </div>
</Section>