import { useEffect, useState } from 'react';
import { fetchFiles } from '../helpers/fetchFiles';

/**
 *  Manages fetching file data and manages the loading status of the app
 * @returns {Object} An object with the retrieved files and the loading status
 */
export const useFetchFiles = () => {

    const [files, SetFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Fetching file data and change the state
     */
    const getFiles = async () => {
        const files = await fetchFiles();

        // Checks for files and update the loading status
        if(files){
            SetFiles(files);
            setIsLoading(false);
        }
    }
    
    // Invokes the getFiles when the component mounts
    useEffect(() => {
        getFiles();
    }, []);

    return {
        files,
        isLoading
    }
}