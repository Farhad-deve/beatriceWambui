import stlyes from "./buttonGR.module.css";

const ButtonGR = () => {
  return (
    <button
      type="submit"
      className={`py-0-5r px-1r font-600 font-f-Raleway rounded-20px ${stlyes.buttonGr}`}
    >
      Submit
    </button>
  );
};

export default ButtonGR;
