import { Module, Provider } from '@nestjs/common';
import { Pool } from 'pg';
import { DATABASE } from 'src/constants';
import { DbService } from './db.service';

const dbProvider: Provider = {
    provide: DATABASE,
    useValue: new Pool({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USERNAME,
        database: process.env.DB_DATABASE,
    }),
};
@Module({
    providers: [dbProvider, DbService],
    exports: [dbProvider],
})
export class DbModule { }
