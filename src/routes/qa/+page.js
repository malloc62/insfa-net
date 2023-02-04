/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('/qa/list', {
        method: 'POST'
    });
    const postJson = await res.json();

    const res2 = await fetch('/qa/auth', {
        method: 'POST'
    });
    const postJson2 = await res2.json();

    return { postJson, postJson2 };
}