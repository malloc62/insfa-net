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
        margin-bottom: 0;
    }
</style>

<div class='fpage'>
<img src='/img/favicon-white.svg'>
<h3>Experimenting in the realms of the Internet</h3>
</div>

<Section>
    <h1>About Insfa</h1>
    <p>Insfa is my personal platform for dumping my personal projects, which are usually web applications. After a long history of abandoning projects, I've decided to build up my determination, and open up a platform that's designed to last (hopefully).</p>
    <h1>Background information</h1>
    <p>I am Xodrium or Derv, a hobbyist developer. I also host Minecraft servers, develop games and make digital art in a variety of mediums. However, these aren't my main priorties, nor is it something I do very actively in practice, so expect anything I make in those fields to be subpar. </p>
    <p>Outside of what I sometimes make, I am a normal fourteen year old. Even if I haven't accomplished much, I'm defined more by my projects than my personality as a singular person.</p>
    <h1>Technologies</h1>
    <p>Typically, I use SvelteKit for web development, a self-hosted Linux setup as the Insfa backend, and JavaScript or C++ for other activity (i.e. game development). For image editing or artistic works, I use Inkscape (sometimes paint.net or Blender). </p>
</Section>
<Section>
    <h1>Projects</h1>
    <div class='hwrap'>
        <Button
            href='https://wiki.insfa.net/wiki/Main_Page'
            src='/img/planarcraph.svg'
            hover='Geopolitical Minecraft server without Towny'
        />
        <Button
            href='https://tree.insfa.net/'
            src='/img/tree.svg'
            hover='An alternative remix tree frontend for Scratch'
        />
        <Button
            href='https://sanifae.insfa.net/'
            src='https://sanifae.insfa.net/icon_sanifae_black.svg'
            hover='A platform where anyone can make posts'
        />
    </div>

</Section>

<Section>
    <h1>Platforms</h1>
    <div class='hwrap'>
        <Button
            href='https://github.com/malloc62'
            src='/img/github-mark-white.svg'
            hover='GitHub account'
            extra='noround'
        />
        <Button
            href='https://www.youtube.com/channel/UCX9pYmio1T6yqS-ZjqyNnlg'
            src='https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
            hover='YouTube account'
            extra='noround'
        />
        <Button
            href='https://discord.gg/JVpbAQCxpP'
            src='/img/favicon.svg'
            hover='Personal hub'
        />
        <Button
            href='https://scratch.mit.edu/users/5x9b/'
            src='/img/favicon.svg'
            hover='Scratch account'
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
        
 
