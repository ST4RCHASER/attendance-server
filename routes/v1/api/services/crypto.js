import crypto from 'crypto';
import bcrypt from 'bcrypt';
const algorithm = 'aes-256-ctr';
const secretKey = 'n3xlhrrm2olsou6mgl5t-starchaser-me-project-2021-attendance-crypto-k4ren-n3xlhrrm2olsou6mgl5t';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};
const hashPassword = async function (password) { // updated
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(secretKey+password+secretKey, salt);
    return hash;
    
}
export {
    hashPassword,
    encrypt,
    decrypt
};