<script>
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

    .fpage img {
        filter: drop-shadow(0 0 8px rgba(0,0,0,0.1));
    }

    h3 {
        font-size: 3.7vmin;
        margin-bottom: 0;
    }
</style>

<Section>
    <h1>About Insfa</h1>
    <p>Insfa is my personal platform for dumping my personal projects, which are usually web applications. After a long history of abandoning projects, I've decided to build up my determination, and open up a platform that's designed to last (hopefully).</p>
    <h1>Background information</h1>
    <p>I am Xodrium or Derv, a hobbyist developer working with the full stack, in addition to web design. I also host Minecraft servers and construct digital art.</p>
    <p>Outside of what I sometimes make, I am a normal fourteen year old. Even if I haven't accomplished much, I'm defined more by my projects than my personality as a singular person.</p>
    <h1>Technologies</h1>
    <p>Typically, I use SvelteKit for web development, a self-hosted Linux setup as the Insfa backend, and JavaScript or C++ for other activity (i.e. game development). For image editing or artistic works, I use Inkscape (sometimes paint.net or Blender). </p>
</Section>