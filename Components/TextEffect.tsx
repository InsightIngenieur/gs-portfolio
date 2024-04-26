import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Coder",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web developer",
        1500,
        "Business Analyst",
        1500,
        "Programmer",
        1500,
        "Tech enthusiast",
        1500, 
        "Problem solver", 
        1500, 
        "Full Stack Developer",
        1500,
        "Life-long learner",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
