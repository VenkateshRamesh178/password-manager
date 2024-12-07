import React, { useState } from "react";
import AddPasswordModal from "./AddPasswordModal";
import EditPasswordModal from "./EditPasswordModal";
import './PasswordTable.css'

const PasswordTable = ({ encryptionKey }) => {
    const [passwords, setPasswords] = useState([]);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [currentEdit, setCurrentEdit] = useState(null);

    const handleAdd = (data) => {
        setPasswords([...passwords, data]);
    };

    const handleEdit = (updatedData) => {
        const updatedPasswords = passwords.map((password, index) =>
            index === currentEdit ? updatedData : password
        );
        setPasswords(updatedPasswords);
    };

    const handleDelete = (index) => {
        setPasswords(passwords.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Password Manager</h2>
            <button onClick={() => setAddModalOpen(true)}>Add New</button>
            <div class="table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Site</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Date</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {passwords.map((password, index) => (
                        <tr key={index}>
                            <td>{password.site}</td>
                            <td>{password.username}</td>
                            <td>{password.password}</td>
                            <td>{password.date}</td>
                            <td>{password.notes}</td>
                            <td className="table-action-buttons">
                                <button onClick={() => {
                                    setCurrentEdit(index);
                                    setEditModalOpen(true);
                                }}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <AddPasswordModal
                isOpen={isAddModalOpen}
                onClose={() => setAddModalOpen(false)}
                onSave={handleAdd}
            />
            <EditPasswordModal
                isOpen={isEditModalOpen}
                onClose={() => setEditModalOpen(false)}
                onSave={handleEdit}
                initialData={passwords[currentEdit]}
            />
        </div>
    );
};

export default PasswordTable;
