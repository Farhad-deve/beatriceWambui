import styles from './sidebar.module.css';

const SideBar = () => {
  return (
    <>
      <aside className={`bg-white rounded-20px ${styles.sideBar}`}>

        <div className={`flex flex-col gap-1r items-center text-center px-1r ${styles.sidebarContent}`}>
          <img
            src="assets/images/profile-picture.png"
            alt="Beatrice Wambui image" className={styles.profilePicture}
          />

          <h1 className='font-f-Raleway '>Beatrice Wambui</h1>
          <p className='font-f-Raleway text-dark-2 font-500'>FullStack Developer</p>

          <div className="grid grid-cols-2 gap-0-5r md-grid-cols-4">
            <a
              href="#"
              className="w-4r h-4r bg-light-gray-2 rounded-20px flex items-center justify-center"
            >
              <img src="assets/logos/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="#"
              className="w-4r h-4r bg-light-gray-2 rounded-20px flex items-center justify-center"
            >
              <img src="assets/logos/linkedin.svg" alt="" />
            </a>
            <a
              href="#"
              className="w-4r h-4r bg-light-gray-2 rounded-20px flex items-center justify-center"
            >
              <img src="assets/logos/twitter.svg" alt="" />
            </a>
            <a
              href="#"
              className="w-4r h-4r bg-light-gray-2 rounded-20px flex items-center justify-center"
            >
              <img src="assets/logos/github.svg" alt="" />
            </a>
          </div>

          <div className='font-f-Raleway font-600 text-left flex flex-col items-center gap-1-5r bg-light-gray-3 p-1r rounded-20px'>
            <div className='flex flex-col gap-1r'>
              <div className='flex items-center gap-0-5r md-gap-1r py-1r md-px-0-5r border-b-2-gray-1'>
                <div>
                  <img src="assets/icons/phone.svg" alt="Phone icon" />
                </div>

                <div>
                  <p className='text-dark-1'>Phone</p>
                  <p className={styles.infoText}>+254723909353</p>
                </div>
              </div>

              <div className='flex items-center gap-0-5r md-gap-1r py-1r md-px-0-5r border-b-2-gray-1'>
                <div>
                  <img src="assets/icons/email.svg" alt="Email icon" />
                </div>

                <div>
                  <p className='text-dark-1'>Email</p>
                  <p className={styles.infoText}>beatricewambuimbugua@gmail.com</p>
                </div>
              </div>

              <div className='flex items-center gap-0-5r md-gap-1r py-1r md-px-0-5r border-b-2-gray-1'>
                <div>
                  <img src="assets/icons/location.svg" alt="Location icon" />
                </div>

                <div>
                  <p className='text-dark-1'>Location</p>
                  <p className={styles.infoText}>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <button type="button" className={`${styles.downloadBtn} flex items-center justify-center font-f-Raleway text-white font-600 gap-0-5r rounded-20px border-none px-1r py-0-5r`}>
              <img src="assets/icons/download-icon.svg" alt="Download icon" />
              Download Resume
            </button>
          </div>
        </div>

      </aside>
    </>
  );
};

export default SideBar;
