import React from "react";

function Profile() {
    // Assuming you have user information available, you can use it in the component.
    const user = {
        username: "JohnDoe",
        email: "john.doe@example.com",
        // Add other user details as needed
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1D3565]">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold mb-6">Profile Section</h1>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Username</label>
                    <p className="text-gray-800">{user.username}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                    <p className="text-gray-800">{user.email}</p>
                </div>
                {/* Add other user details here */}
                {/* For example: */}
                {/* <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Full Name</label>
                    <p className="text-gray-800">{user.fullName}</p>
                </div> */}
            </div>
        </div>
    );
}

export default Profile;
