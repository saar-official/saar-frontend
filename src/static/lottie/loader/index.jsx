import Lottie from "react-lottie";
import loader from "./loader.json";

const Loader = ({ ...props }) => {
  return (
    <Lottie
      {...props}
      height={40}
      options={{
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  );
};

export default Loader;
