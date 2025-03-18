import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    if (activity.trim() !== "") {
      setActivities([...activities, activity]);
      setActivity("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          User Profile
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Age</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Preferred Activities
          </label>
          <div className="flex">
            <input
              type="text"
              className="w-full p-2 border rounded-l focus:outline-none focus:ring focus:ring-blue-300"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="Enter an activity"
            />
            <button
              onClick={handleAddActivity}
              className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>

        {activities.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Your Activities:</h3>
            <ul className="mt-2 space-y-2">
              {activities.map((act, index) => (
                <li
                  key={index}
                  className="bg-gray-200 p-2 rounded text-gray-700"
                >
                  {act}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
