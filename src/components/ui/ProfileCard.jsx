import React from 'react'
import profileImg from "../../assets/images/Devicharan-removebg-preview.png";
import "./ProfileCard.css";


const ProfileCard = () => {

  return (
    <div>
    <div  className="max-w-md mx-auto bg-gray-200 p-6 rounded-xl shadow-md border-2 border-black">
      
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={profileImg}
          alt="profile"
          className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover"
        />

        <div>
          <h2 className="text-xl font-bold">Devicharan Prajapati</h2>
          <p className="text-blue-500 font-semibold">Frontend Developer</p>
        </div>
      </div>

      {/* Academics */}
      <div className="mt-6 border-t pt-4">
        <h3 className="font-bold text-lg mb-2">🎓 Academics</h3>
        <p>BCA - 1st Year</p>
        <p>XYZ College</p>
        <p>CGPA: 8.2</p>
      </div>

      {/* Skills */}
      <div className="mt-4 border-t pt-4">
        <h3 className="font-bold text-lg mb-2">🛠 Skills</h3>
        <p>HTML, CSS, JavaScript</p>
        <p>React (Learning)</p>
      </div>
    </div>
    </div>
  )
}

export default ProfileCard