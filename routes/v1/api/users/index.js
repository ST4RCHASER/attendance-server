import express from 'express';
import rg from '../services/return_generator.js';
import {getUserByID} from './services/info.js';
import makeUser from './services/new.js';
const router = express.Router();
router.get('/', (req, res) => {
    const uid = req.query.id;
    if (uid) {
        return rg(res,200,'ok it\'s works!',getUserByID(uid).return_value);
    }else {
        return rg(res,400,'uid is not define');
    }
});
router.post('/', async (req, res, next) => {
    let result = await makeUser(req.body.username, req.body.password);
    if (result.success) {
        return rg(res,200,'created');
    }else {
        return rg(res,400,result.message);
    }
  })
router.all('/', (_, res) => {
    return rg(res,404,'invalid method');
});
export default router;