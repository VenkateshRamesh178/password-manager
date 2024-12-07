import React, { useState, useEffect } from "react";
import './Modal.css';

const EditPasswordModal = ({ isOpen, onClose, onSave, initialData }) => {
    // Initialize formData with fallback
    const [formData, setFormData] = useState(initialData || { site: "", username: "", password: "", notes: "", date: "" });

    // Update formData when initialData changes
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        if (!formData.site || !formData.username || !formData.password) {
            alert("Please fill out all required fields (Site, Username, Password).");
            return;
        }
        onSave(formData);
        onClose(); // Close the modal
    };

    // Prevent rendering if the modal is not open
    if (!isOpen) return null;

    return (
        <div className="modal">
            <h2>Edit Password</h2>
            <form>
                <input
                    type="text"
                    name="site"
                    placeholder="Site"
                    value={formData.site}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <textarea
                    name="notes"
                    placeholder="Extra Notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditPasswordModal;