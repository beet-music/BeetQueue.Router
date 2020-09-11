import * as MySQL from "mysql";

export interface QueryResults {
    results: any;
    fields?: MySQL.FieldInfo[];
}

export class Database {
    private connection: MySQL.Connection;

    constructor() {
        this.connection = MySQL.createConnection({
            host: process.env["DB_HOSTNAME"] ?? "localhost",
            port: parseInt(process.env["DB_PORT"] ?? "3306"),
            user: process.env["DB_USERNAME"] ?? "bq-router",
            password: process.env["DB_PASSWORD"] ?? "",
            database: process.env["DB_DATABASE"] ?? "bq-router",
        });
    }

    public get rawConnection(): MySQL.Connection {
        return this.connection;
    }

    /**
     * Connects to the database.
     * @param options The connection options.
     */
    public async connect(options?: any): Promise<any[]> {
        return new Promise((resolve, reject) =>
            this.connection.connect(options, (error, ...args) => {
                if (error) reject(error);
                resolve(args);
            })
        );
    }

    /**
     *
     * @param query
     */
    public async query(query: string | MySQL.QueryOptions): Promise<QueryResults> {
        return new Promise((resolve, reject) => {
            this.connection.query(query, function (error, results, fields) {
                if (error) reject(error);
                resolve({ results, fields });
            });
        });
    }

    public escape(value: any, stringifyObjects?: boolean, timeZone?: string): string {
        return this.connection.escape(value, stringifyObjects, timeZone);
    }
}

const database = new Database();
export default database;
