import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission">
      <div className="mt-20 mx-auto my-8 text-center">
        <h2 className="mb-16 text-center text-3xl sm:text-5xl font-bold">Our Mission</h2>
        <div className="relative flex items-center justify-center">
          <video
            className="h-screen w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
            src={mission}
          >
          </video>
          <div className="absolute h-full w-full bg-black/60"></div>
          <p className="absolute p-10 sm:p-0 max-w-xl font-bold text-2xl lg:text-3xl">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
