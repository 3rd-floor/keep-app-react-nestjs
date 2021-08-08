import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as dotenv from 'dotenv';
const env = dotenv.config();

if (env.error) {
  throw env.error;
}

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: env.parsed.DB_HOST,
  port: +env.parsed.DB_PORT,
  username: env.parsed.DB_USERNAME,
  password: env.parsed.DB_PASSWORD,
  database: env.parsed.DB_DATABASE_NAME,
  //synchronize: true
  entities: ['dist/**/*.entity.js'],
  migrationsTableName: 'migrations',
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default config;
