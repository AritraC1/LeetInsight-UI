import { useState } from "react";

export default function Card({ profile }) {
  const [showNotification, setShowNotification] = useState(false);

  const topLanguages = profile.languageProblemCount
    ? profile.languageProblemCount
        .sort((a, b) => b.problemsSolved - a.problemsSolved)
        .slice(0, 3)
    : [];

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-[#fc8a23] text-gray-700 px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300">
          Monthly LeetCoding Challenge Badges failed to load
        </div>
      )}

      <div 
        className="flex flex-col md:flex-row border rounded-lg p-4 border-white bg-[#1a1a1a] w-full max-w-4xl mx-auto text-white space-y-6 md:space-y-0 md:space-x-6"
        >
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex flex-col border-b md:border-b-0 md:border-r border-white pr-0 md:pr-4 pb-4 md:pb-0">
          {/* Profile Info */}
          <div className="flex items-center mb-4">
            <img
              src={profile?.profile?.userAvatar}
              alt="avatar"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{profile.profile?.realName}</h2>
              <p className="text-gray-500">{profile.username}</p>
            </div>
          </div>

          {/* Top Languages */}
          <div className="mt-4 w-full flex flex-col items-start gap-2">
            <h3 className="text-lg font-semibold mb-2 text-start sm:mb-0 sm:mr-4">Top Languages</h3>
            {topLanguages.map((lang, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-[#282828] text-white rounded-sm text-sm font-medium"
              >
                {lang.languageName} {/* — {lang.problemsSolved} */}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 pl-0 md:pl-6">
          <h3 className="text-lg font-semibold mb-2 text-start">Badges</h3>

          {profile.badges?.length === 0 ? (
            <p className="text-gray-500">No badges earned yet.</p>
          ) : (
            <div className="flex flex-wrap gap-4">
              {profile.badges?.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center">
                  <img
                    src={badge.icon}
                    alt={badge.name}
                    className="w-20 h-20"
                    onError={(e) => {
                      e.target.style.display = "none";
                      setShowNotification(true);
                      setTimeout(() => {
                        setShowNotification(false);
                      }, 1500);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
