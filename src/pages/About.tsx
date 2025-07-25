const About = () => {
  return (
    <div
      id="About"
      className="min-h-screen px-4 py-20 flex flex-col items-center justify-center bg-white"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl">
        {/* Image */}
        <img
          src="./bola.jpg"
          alt="About"
          className="w-64 h-64 md:w-[300px] md:h-[400px] rounded-4xl object-cover"
        />

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-xl">
            I am a certified full-stack software developer with a solid
            foundation in building responsive and user-friendly web
            applications. I specialize in front-end development using
            TypeScript, React, and Tailwind CSS, and also have hands-on
            experience with backend technologies like Node.js, Express.js,
            MongoDB, and RESTful APIs. <br />
            <br />
            With a BSc in Mathematics and practical experience from real-world
            projects, I bring analytical thinking and problem-solving skills
            into every line of code. I enjoy working across the stack to build
            scalable, efficient, and modern applications. I’m passionate about
            continuous learning and staying up to date with the latest
            technologies. Let’s build something impactful together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
