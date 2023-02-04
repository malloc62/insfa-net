const rowCount = 5;

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { checkLength } from '../../lib/util.js'
import { redirect } from '@sveltejs/kit';

import * as dotenv from 'dotenv'

const {
    randomBytes
} = await import('node:crypto');

var db;
async function initDb() {
    db = await open({
      filename: `${process.cwd()}/db/qa.sql`,
      driver: sqlite3.Database
    });

    await db.run('CREATE TABLE IF NOT EXISTS question (question CHAR(10240), answer CHAR(10240), id CHAR(16), state INTEGER)');
}

dotenv.config();

/** @type {import('./$types').Actions} */
export const actions = {
    post: async ({ request }) => {
        if (!db) await initDb();
        const data = await request.formData();
        const content = data.get('content') + '';

        var lengthCheck = checkLength(content,'Post content',1,10240);

        if (lengthCheck)
            return lengthCheck;

        var id = randomBytes(10).toString('hex');

        await db.run('INSERT INTO question (question, answer, id, state) VALUES (?, ?, ?, ?)', [
            content,
            'none',
            id,
            0
        ])

        return {'success': 'Successfully posted.'};
    },
    answer: async ({ request, cookies }) => {
        if (!db) await initDb();
        const data = await request.formData();
        const content = data.get('content') + '';
        const id = data.get('id') + '';

        var tokenIn = cookies.get('token');

        if (tokenIn != process.env["PASSWORD"]) {
            return {'success': 'Not authorized'}
        }

        var lengthCheck = checkLength(content,'Post content',1,10240);

        if (lengthCheck)
            return lengthCheck;

        await db.run('UPDATE question SET state = 1, answer = ? WHERE id = ?', [
            content,
            id
        ])

        return {'success': 'Successfully posted.'};
    },
    auth: async ({ request, cookies }) => {
        const data = (await request.formData()).get('token');

        var tokenIn = data;

        cookies.set('token',data, {
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
        });

    },
};

async function listData({ cookies }) {
    if (!db) await initDb();

    var data; 

    var tokenIn = cookies.get('token');

    if (tokenIn != process.env["PASSWORD"]) {
        data = await db.all('SELECT * FROM question WHERE state = 1')
    } else {
        data = await db.all('SELECT * FROM question')
    }

    return data;
}

export {
    listData
};