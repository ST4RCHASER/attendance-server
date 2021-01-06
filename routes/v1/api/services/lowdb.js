import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';
function UserDB() {
    const adapter = new FileSync(process.cwd() + '/database/v1/users.json')
    return low(adapter);
  }
function EventDB(a, b) {
    return a * b
}
export { UserDB, EventDB }
