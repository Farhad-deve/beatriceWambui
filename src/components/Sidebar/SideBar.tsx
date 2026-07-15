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

          <div className='font-f-Raleway font-600 text-left flex flex-col items-center gap-1-5r bg-light-gray-3 p-1r rounded-20px w-full'>
            <div className='flex flex-col gap-1r w-full'>
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
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="21.36" rx="8.26855" transform="matrix(-1 0 0 1 24 0)" fill="#F2F7FC"/>
                    <path d="M2.97 6.65L12 1L21.03 6.65C21.61 7 22 7.63 22 8.36V18.36C22 19.46 21.1 20.36 20 20.36H4C2.9 20.36 2 19.46 2 18.36V8.36C2 7.63 2.39 7 2.97 6.65ZM4 18.36H20V10.36L12 15.36L4 10.36V18.36ZM12 13.36L20 8.36L12 3.36L4 8.36L12 13.36Z" fill="#FF9C1B"/>
                    </svg>
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
