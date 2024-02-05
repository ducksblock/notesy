import { Inject, Injectable } from '@nestjs/common';
import { DATABASE } from 'src/constants';
import { Pool } from 'pg';

@Injectable()
export class DbService {
    constructor(@Inject(DATABASE) private db: Pool) {

    }

    private async requestFromCreateTables() {
        const client = await this.db.connect()
        try {
            await client.query(`
                CREATE TABLE IF NOT EXISTS notes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    content TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    CHECK (title IS NOT NULL OR content IS NOT NULL)
                )
            `)
            console.log('Connected to the database sucessfully.');
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            client.release()
        }
    }
}
