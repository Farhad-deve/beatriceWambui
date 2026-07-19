import TitlePage from "../components/TitlePage/TitlePage";
import { type FormType } from "../types/FormType";

// Images
import telephoneIcon from "../assets/icons/telephone-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";
import ButtonGR from "../components/gradientButton/ButtonGR";
import { useForm, type SubmitHandler } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const handleSubmitForm: SubmitHandler<FormType> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="flex flex-col gap-1-5r">
        <TitlePage>Contact</TitlePage>

        <div className="flex flex-col gap-1r lg-flex-row">
          <div className="bg-light-orange-2 rounded-20px p-1-5r flex flex-col items-start gap-0-5r flex-1 lg-flex-row">
            <img src={telephoneIcon} alt="Telephone" />

            <div className="font-f-Poppins font-500 flex flex-col gap-0-5r">
              <p>Phone:</p>
              <ul className="text-0-8r md-text-1r">
                <li>+254723909353</li>
                <li>+254738509151</li>
              </ul>
            </div>
          </div>

          <div className="bg-light-gray-2 rounded-20px p-1r flex flex-col items-start gap-0-5r flex-1 lg-flex-row">
            <img src={mailIcon} alt="Mail" />

            <div className="font-f-Poppins font-500">
              <p>Email:</p>
              <p className="text-0-8r md-text-1r">
                beatricewambuimbugua@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="bg-light-gray-1 rounded-20px py-2r px-1r md-px-2-5r flex flex-col gap-1-5r font-f-Raleway">
          <p className="leading-150p text-1-1r">
            I am always open to discussing{" "}
            <span className="font-700">
              new projects, opportunities in tech world, partnerships
            </span>{" "}
            and more so <span className="font-700">mentorship.</span>
          </p>

          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            noValidate
            className="flex flex-col items-start gap-1-5r"
          >
            <div className="flex flex-col gap-0-5r w-full transition-a-03s-ease">
              <label htmlFor="nameInput" className={`font-600 transition-a-03s-ease ${errors.name ? "text-red" : ""}`}>
                Name:
              </label>
              <input
                {...register("name", {
                  required: "Name is required!",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long!",
                  }
                })}
                type="text"
                id="nameInput"
                className={`border-none p-0-5r text-1-1r bg-transparent transition-a-03s-ease ${errors.name ? "border-b-2-red" : "border-b-2-gray-2"}`}
              />
              <p className={`text-red text-0-8r font-600 transition-a-03s-ease ${errors.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-n-100"}`}>{errors.name?.message}</p>
            </div>

            <div className="flex flex-col gap-0-5r w-full transition-a-03s-ease">
              <label htmlFor="emailInput" className={`font-600 transition-a-03s-ease ${errors.email ? "text-red" : ""}`}>
                Email:
              </label>
              <input
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address!",
                  }
                })}
                type="email"
                id="emailInput"
                className={`border-none p-0-5r text-1-1r bg-transparent transition-a-03s-ease ${errors.email ? "border-b-2-red" : "border-b-2-gray-2"}`}
              />
              <p className={`text-red text-0-8r font-600 transition-a-03s-ease ${errors.email ? "opacity-100 translate-y-0" : "opacity-0 translate-y-n-100"}`}>{errors.email?.message}</p>
            </div>

            <div className="flex flex-col gap-0-5r w-full transition-a-03s-ease">
              <label htmlFor="msgInput" className={`font-600 transition-a-03s-ease ${errors.message ? "text-red" : ""}`}>
                Message:
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required!",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters long!",
                  }
                })}
                id="msgInput"
                rows={1}
                className={`border-none p-0-5r text-1-1r resize-none bg-transparent font-f-Raleway transition-a-03s-ease ${errors.message ? "border-b-2-red" : "border-b-2-gray-2"}`}
              ></textarea>
              <p className={`text-red text-0-8r font-600 transition-a-03s-ease ${errors.message ? "opacity-100 translate-y-0" : "opacity-0 translate-y-n-100"}`}>{errors.message?.message}</p>
            </div>

            <ButtonGR />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
