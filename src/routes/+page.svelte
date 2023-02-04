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
    <p>I am a hobbyist developer. I also host Minecraft servers, develop games and make digital art in a variety of mediums. However, these aren't my main priorties, nor is it something I do very actively in practice, so expect anything I make in those fields to be subpar. </p>
    <p>Outside of what I sometimes make, I am a autistic fourteen year old of male gender. For more information, observe my actions and words on Discord and other platforms; they speak for myself more than I ever could. </p>
</Section>
<Section>
    <h1>Projects</h1>
    <div class='hwrap'>
        <Button
            href='https://tree.insfa.net/'
            src='/img/tree.svg'
            hover='An alternative remix tree frontend for Scratch'
        />
        <Button
            href='/qa'
            src='/img/favicon.svg'
            hover='Questions and Answers'
        />
    </div>
</Section>

<Section>
    <h1>Other platforms</h1>
    <div class='hwrap'>
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
        
 
