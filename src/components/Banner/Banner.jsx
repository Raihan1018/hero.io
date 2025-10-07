
const Banner = () => {
  return (
    <div className="hero bg-base-200 py-36">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">
            We Build <br />{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              Productive
            </span>
            <span> Apps</span>
          </h1>
          <p className="py-6 text-[#627382]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
