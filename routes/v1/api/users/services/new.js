import { nanoid } from 'nanoid';
import {UserDB} from '../../services/lowdb.js';
import {hashPassword} from '../../services/crypto.js';
import {getUserByUsername} from './info.js';
export default async function(username,password) { 
    if (username && password) {
        if (getUserByUsername(username).success == false) {
            return {success: false, message: 'this username ('+username+') already taken'}
        }else {
            let hashed_password = await hashPassword(password);
            let user_id = nanoid();
            UserDB()
            .get('users')
            .push({ uid: user_id, username: username, password: hashed_password })
            .write();
            return {success: true, message: 'created! uid=' + nanoid()};
        }
    }else {
        return {success: false, message: 'username or password is not define'}
    }
}