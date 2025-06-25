import { useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function HomePage() {

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if(!username) return;

    setLoading(true);
    setError("");
    setProfile(null);

    try {
      // debugger
      console.log("Fetching profile for", username);
      const res = await axios.get(`https://leetinsight-backend.onrender.com/api/leetcode/${username}`);
      const user = res.data;

      console.log("API response:", res.data);
      
      if (user) {
        setProfile(user);
      } else {
        setError("User data not found in response.");
        setProfile(null);
      }
    } 
    catch (err) {
      console.error(err);
      setError("Unable to fetch profile. Check the username.");
    } 
    finally {
      setLoading(false);
    }
  }

  return (
      <>
      <div
        className={`flex flex-col items-center bg-[#1a1a1a] transition-all duration-500 ease-in-out ${
          profile ? "min-h-screen justify-start pt-10" : "h-screen justify-center"
        } p-6 space-y-8`}
      >
        {/* Heading */}
        <div className="text-center space-y-5">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold">
            Your Leetcode Stats
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl">
            Clear. Actionable. Powerful.
          </h2>
          <h4 className="text-white text-xl sm:text-2xl md:text-3xl">
            See Your Coding Stats At a Glance
          </h4>
        </div>

        {/* Input and Button */}
        <div className="w-full max-w-md flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            id="inputBox"
            name="text"
            type="text"
            placeholder="Enter Leetcode Username"
            className="border border-[#fc8a23] rounded-xl text-white p-3 w-full bg-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-[#fc8a23] text-white px-6 py-2 text-sm rounded-xl hover:bg-[#e07a1c] transition w-full sm:w-auto sm:px-6 sm:py-3 sm:text-base whitespace-nowrap"
          >
            Generate Card
          </button>

        </div>

        {/* Loading / Error */}
        {loading && <p className="text-white text-lg">Loading...</p>}
        {error && <p className="text-red-500 text-lg">{error}</p>}

        {/* Card Component */}
        {profile && (
          <div className="w-full px-4 sm:px-6 md:px-10">
            <Card profile={profile} />
          </div>
        )}
      </div>
    </>
  )
}
