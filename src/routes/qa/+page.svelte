<script>
    import Section from '$lib/Section.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    import { page } from '$app/stores'
    const isAdmin = data.postJson2 == true;

</script>

<style>
    textarea {
        width: 10rem;
        height: 10rem;
    }

    .right {
        width: 100%;
        text-align: right;
    }
</style>

<Section>
    <h1>Submit question (will take time to get answered)</h1>
    <form action='?/post' method='POST'>
        <textarea name='content'>Question</textarea>
        <input type='Submit'>
    </form>
</Section>
<Section>
    <h1>Enter admin token</h1>
    <form action='?/auth' method='POST'>
        <input name='token'>
        <input type='Submit'>
    </form>
</Section>

{#if isAdmin}
    <Section>
        <h1>Answer question (if admin)</h1>
        <form action='?/answer' method='POST'>
            <p><input name='id'> Question ID</p>
            <textarea name='content'>Answer</textarea>
            <input type='Submit'>
        </form>
    </Section>
{/if}
<Section>
    <h1>Questions</h1>
    {#each data.postJson as post}
        <pre><b>Q: {post.question}</b> (<i>{post.id}</i>)</pre>
        <pre class='right'><i>A: {post.answer}</i></pre>
    {/each}
</Section>