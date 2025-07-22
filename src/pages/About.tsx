const About = () => {
  return (
    <div className=" mx-auto py-10 flex justify-center items-center p-[100px] gap-10">
      <div>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 w-[600px]">
          I am a certified full-stack software developer with a solid foundation
          in building responsive and user-friendly web applications. I
          specialize in front-end development using TypeScript, React, and
          Tailwind CSS, and also have hands-on experience with backend
          technologies like Node.js, Express.js, MongoDB, and RESTful APIs. With
          a BSc in Mathematics and practical experience from real-world
          projects, I bring analytical thinking and problem-solving skills into
          every line of code. I enjoy working across the stack to build
          scalable, efficient, and modern applications. I'm passionate about
          continuous learning and staying up to date with the latest
          technologies. Let’s build something impactful together!
        </p>
      </div>
      <div className="h-[200px]">
        <img src="./bolanle.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
