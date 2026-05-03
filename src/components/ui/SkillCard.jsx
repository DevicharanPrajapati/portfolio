import React from "react";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  console.log(skill.color)

  return (
    <div>
      <div className="skill-core flex flex-col justify-center gap-10 mt-2">
        <div className="skill-other flex flex-col items-center gap-3">
          <Icon
            className={`border-2 p-2 text-5xl sm:text-6xl md:text-7x transition-all duration-300 hover:scale-110 cursor-pointer hover:text-orange-600 
              `}
           
          />
          <p className="text-center text-base font-sans font-semibold">{skill.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
