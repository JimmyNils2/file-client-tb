import axios from 'axios';

/**
 * Sends an HTTP request to retrieve the files
 * @returns {Array} File list
 */
export const fetchFiles = async () => {
    try {
        const url = 'http://localhost:3030/files/data';

        const res = await axios(url);
    
        if(res.data) return res.data   
    } catch (e) {
        console.log('Error trying to get files', e);
    }
}