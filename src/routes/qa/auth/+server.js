import * as dotenv from 'dotenv'
dotenv.config();

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies }) {
    return new Response( (cookies.get('token') == process.env['PASSWORD']) + '' );
}