import TitlePage from "../components/TitlePage/TitlePage";

// Images
import telephoneIcon from "../assets/icons/telephone-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";

const Contact = () => {
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
              <p className="text-0-8r md-text-1r">beatricewambuimbugua@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
