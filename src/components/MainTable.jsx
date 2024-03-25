import React from 'react';
import { Table, Spinner } from 'react-bootstrap';
import { useFetchFiles } from '../hooks/useFetchFiles';

export const MainTable = () => {

    // Invokes the useFetchFiles hooks
    const {files, isLoading} = useFetchFiles();

    return (
        <>
            {
                // Checks if the app is loading
                isLoading ?
                    <div className="d-flex justify-content-center align-items-center min-vh-100">
                        <Spinner animation="border" role="status" style={{ color: '#ff6666' }} />
                    </div>
                    :
                    // Shows the table
                    <Table striped bordered hover className='mt-5 mx-auto' style={{ width: '90%' }}>
                        <thead style={{ borderBottom: '4px solid #000' }}>
                            <tr>
                                <th>File Name</th>
                                <th>Text</th>
                                <th>Number</th>
                                <th>Hex</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map(currentFile => (
                                currentFile.lines.map(line => (
                                    <tr key={line.hex}>
                                        <td>{currentFile.file}</td>
                                        <td>{line.text}</td>
                                        <td>{line.number}</td>
                                        <td>{line.hex}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </Table>
            }
        </>
    )
}
