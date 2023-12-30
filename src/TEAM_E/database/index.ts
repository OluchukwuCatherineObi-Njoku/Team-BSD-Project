import DbInMemory from './in_memory'; // Adjust the path and name as per your file structure
import DbProduction from './production';

const Db = process.env['AWS_REGION'] ? DbProduction : DbInMemory;

export default Db;
