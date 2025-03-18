import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    if (activity.trim() !== "") {
      setActivities((prev) => {
        const newActivities = [...prev, activity];
        return newActivities.length > 3
          ? newActivities.slice(1)
          : newActivities;
      });
      setActivity("");
    }
  };

  const handleSubmit = () => {
    const userData = { gender, age, height, weight, activities };
    axios
      .post("", userData)
      .catch((error) => console.error("Error sending data:", error));

    setActivities([]);
    setActivity("");
    setAge("");
    setGender("");
    setHeight("");
    setWeight("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          User Profile
        </h2>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Gender</label>
          <select
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Age</label>
          <input
            type="number"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>

        {/* Height */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Height (cm)</label>
          <input
            type="number"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Weight (kg)</label>
          <input
            type="number"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>

        {/* Activities */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Preferred Activities (Max: 3)
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              className="w-full p-3 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="Enter an activity"
            />
            <button
              onClick={handleAddActivity}
              className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition duration-200"
            >
              Add
            </button>
          </div>
        </div>

        {activities.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Your Activities:
            </h3>
            <ul className="mt-2 space-y-2">
              {activities.map((act, index) => (
                <li
                  key={index}
                  className="bg-gray-200 p-3 rounded-lg text-gray-700 shadow-sm"
                >
                  {act}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
