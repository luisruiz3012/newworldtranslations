import { TypeAnimation } from 'react-type-animation';

const Retype = () => {
  return (
    <TypeAnimation 
      sequence = {
        [
          "Translation",
          1500,
          "Interpreting",
          1500,
          "Localization",
          1500
      ]
      }
      wrapper="p"
      speed={50}
      repeat={Infinity}
    />
  );
}

export default Retype