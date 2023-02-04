import { listData } from '../+page.server.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies }) {
    var tokenIn = cookies.get('token');
    return new Response( JSON.stringify( await listData( { cookies } ) ) );

}