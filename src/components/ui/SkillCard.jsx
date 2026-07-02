import React from "react";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  // console.log(skill.color)

  return (
    <div>
      <div className="skill-core flex flex-col justify-center gap-8 mt-2">
        <div className="skill-other flex flex-col items-center gap-2">
          <Icon
            className={`border-2 p-2 text-5xl sm:text-6xl md:text-7x transition-all duration-300 hover:scale-110 cursor-pointer ${skill.color}
              `}
           
          />
          <p className={`text-center text-base font-sans font-semibold ${skill.color} cursor-pointer`}>{skill.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
