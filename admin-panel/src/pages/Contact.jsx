import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AdminPanel() {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null); // store contact being edited
    const [editData, setEditData] = useState({ remark: "" });


    // Fetch contacts
    const fetchContacts = async () => {
        try {
            const res = await axios.get("https://doc-shift-backend.vercel.app/api/contacts");
            setContacts(res.data);
        } catch (error) {
            console.error("Error fetching contacts", error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    // Delete contact
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            try {
                await axios.delete(`https://doc-shift-backend.vercel.app/api/contacts/${id}`);
                fetchContacts();
            } catch (error) {
                console.error("Error deleting contact", error);
            }
        }
    };

    // Open edit form
    const handleEditClick = (contact) => {
        setEditingContact(contact._id);
        setEditData({ remark: contact.remark || "" });
    };

    // Save edited contact
    const handleSaveEdit = async (id) => {
        try {
            await axios.put(`https://doc-shift-backend.vercel.app/api/contacts/${id}`, editData);
            setEditingContact(null);
            fetchContacts();
        } catch (error) {
            console.error("Error updating contact", error);
        }
    };

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-85 pt-24 md:pt-8 bg-[#F5F9FE] min-h-screen p-6 md:p-16">
                <h2 className=" text-[#0f2769] text-[25px] md:text-[30px] font-bold mb-3 md:mb-8">
                    Contact Submissions
                </h2>

                <div className="bg-[#F5F9FE] rounded-2xl shadow-md overflow-x-auto">
                    <table className="min-w-full text-[13px] md:text-[16px]">
                        <thead className="bg-[#091432] text-white">
                            <tr>
                                <th className="px-4 md:px-6 py-1 md:py-3 text-left">Full Name</th>
                                <th className="px-4 md:px-6 py-1 md:py-3 text-left">Email</th>
                                <th className="px-4 md:px-6 py-1 md:py-3 text-left">Message</th>
                                <th className="px-4 md:px-6 py-1 md:py-3 text-center">Remark</th>
                                <th className="px-4 md:px-6 py-1 md:py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.length > 0 ? (
                                contacts.map((contact) => (
                                    <tr key={contact._id} className="hover:bg-gray-100 ">
                                        <td className="px-2 md:px-6 md:py-3"> {contact.fullName} </td>
                                        <td className="px-2 md:px-6  md:py-4"> {contact.email} </td>
                                        <td className="px-2 md:px-6 py-1 md:py-4"> {contact.message} </td>
                                        <td>
                                            {editingContact === contact._id ? (
                                                <textarea 
                                                    value={editData.remark}
                                                    onChange={(e) => setEditData({ ...editData, remark: e.target.value })}
                                                    placeholder="Add remark..."
                                                    className="border m-1 p-1 rounded"
                                                />
                                            ) : (
                                                contact.remark || <span className="text-gray-400">No remark</span>
                                            )}
                                        </td>
                                        <td className="px-2 md:px-6 py-1 md:py-4 flex justify-center">
                                            {editingContact === contact._id ? (
                                                <>
                                                    <button
                                                        onClick={() => handleSaveEdit(contact._id)}
                                                        className="bg-green-500 hover:bg-green-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded m-1"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingContact(null)}
                                                        className="bg-gray-500 hover:bg-gray-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded m-1"
                                                    >
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => handleEditClick(contact)}
                                                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded m-1"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(contact._id)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded m-1"
                                                    >
                                                        Delete
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-6 text-center text-gray-500"
                                    >
                                        No messages yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default AdminPanel;
