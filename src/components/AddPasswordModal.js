import React, { useState } from "react";
import './Modal.css';

const AddPasswordModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        site: "",
        username: "",
        password: "",
        date: new Date().toISOString().split("T")[0], // Default to current date
        notes: "",
    });

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
        setFormData({
            site: "",
            username: "",
            password: "",
            date: new Date().toISOString().split("T")[0],
            notes: "",
        }); // Reset form
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Add Password</h3>
                <input
                    type="text"
                    name="site"
                    placeholder="Site (required)"
                    value={formData.site}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username (required)"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password (required)"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleChange}
                />
                <textarea
                    name="notes"
                    placeholder="Extra notes (optional)"
                    value={formData.notes}
                    onChange={handleChange}
                ></textarea>
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default AddPasswordModal;
