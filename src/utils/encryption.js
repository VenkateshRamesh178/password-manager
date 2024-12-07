import CryptoJS from 'crypto-js';

const encryptData = (data, key) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

const decryptData = (encryptedData, key) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, key);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (e) {
        return null; // If decryption fails
    }
};

export { encryptData, decryptData };
