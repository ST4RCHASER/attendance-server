import {UserDB} from '../../services/lowdb.js';
function getUserByID(user_id){
    let result = UserDB().get('users').filter({uid: user_id});
    if (result) {
        return {success: true, return_value: result.value()};
    }else {
        return {success: false, message: 'User id \''+user_id+'\' not found'};
    }
}
function getUserByUsername(user_name){
    let result = UserDB().get('users').filter({username: user_name});
    if (result.value().length < 1) {
        return {success: true, return_value: result.value()};
    }else {
        return {success: false, message: 'Usernname \''+user_name+'\' not found'};
    }
}
export {
    getUserByID,
    getUserByUsername
};