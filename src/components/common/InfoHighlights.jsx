export const InfoHighlights = () => {
  return (
    <section className="infoHighlights bg-[#FAF3EA] sm:flex-row flex-col flex 2xl:gap-16 gap-10 justify-center py-16 px-6 md:px-10">
      <div className="flex items-center gap-2 xl:gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 60"
          className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
          fill="none"
        >
          <path
            d="M46.355 3.516c-1.28 0-2.48.345-3.516.946V1.758C42.839.787 42.052 0 41.08 0H12.956c-.97 0-1.758.787-1.758 1.758v2.725a6.986 6.986 0 00-3.553-.967 7.04 7.04 0 00-7.03 7.03c0 2.958.876 5.816 2.533 8.264 2.823 4.169 6.303 5.25 9.183 6.403a15.905 15.905 0 009.207 8.964l-1.296 8.245h-.255a5.28 5.28 0 00-5.273 5.273v8.79h-1.758a1.758 1.758 0 000 3.515h28.125a1.758 1.758 0 000-3.516h-1.758v-8.789a5.28 5.28 0 00-5.273-5.273h-.255L32.5 34.177a15.905 15.905 0 009.215-8.982c2.72-1.088 6.287-2.173 9.138-6.385a14.686 14.686 0 002.534-8.263 7.04 7.04 0 00-7.031-7.031zm-35.17 17.452A11.17 11.17 0 014.13 10.547 3.52 3.52 0 017.645 7.03a3.52 3.52 0 013.516 3.516c0 .123.013.244.037.36v8.429c0 .565.03 1.123.089 1.673l-.102-.041zm24.623 35.516H18.23V52.97h17.578v3.515zM34.05 45.937c.97 0 1.758.79 1.758 1.758v1.758H18.23v-1.758c0-.969.788-1.758 1.757-1.758H34.05zM23.8 42.422l1.164-7.399a15.885 15.885 0 004.11 0l1.162 7.399h-6.435zm15.523-23.086c0 6.785-5.52 12.305-12.304 12.305-6.785 0-12.305-5.52-12.305-12.305v-8.79h24.61v8.79zm0-12.305h-24.61V3.516h24.61V7.03zm3.492 13.937l-.063.025c.057-.545.087-1.098.087-1.657v-8.79a3.52 3.52 0 013.516-3.515 3.52 3.52 0 013.515 3.516 11.17 11.17 0 01-7.055 10.421z"
            fill="#242424"
          />
        </svg>
        <div className="texts">
          <h4 className="text-[#242424] text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-1">
            High Quality
          </h4>
          <p className="text-[#898989] text-xs lg:text-sm xl:text-base">
            crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 xl:gap-4">
        <svg
          className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
          xmlns="http://www.w3.org/2000/svg"
          width={61}
          height={60}
          viewBox="0 0 61 60"
          fill="none"
        >
          <path
            d="M57.12 21.261c-.792-2.451-.455-6.131-2.513-8.973-2.074-2.864-5.68-3.678-7.718-5.167-2.015-1.474-3.89-4.682-7.28-5.788-3.295-1.075-6.663.384-9.276.384-2.611 0-5.98-1.46-9.275-.384-3.39 1.106-5.266 4.314-7.28 5.787-2.035 1.488-5.645 2.304-7.718 5.168-2.056 2.839-1.722 6.527-2.513 8.973-.752 2.328-3.214 5.122-3.214 8.74 0 3.62 2.46 6.402 3.214 8.738.792 2.452.455 6.132 2.512 8.973 2.074 2.864 5.681 3.678 7.718 5.168 2.015 1.474 3.89 4.681 7.28 5.788 3.293 1.074 6.667-.384 9.276-.384 2.606 0 5.988 1.456 9.276.384 3.39-1.106 5.265-4.314 7.28-5.788 2.035-1.488 5.644-2.304 7.718-5.167 2.056-2.84 1.722-6.528 2.512-8.974.752-2.327 3.214-5.121 3.214-8.739 0-3.62-2.458-6.402-3.214-8.739zm-4.46 16.037c-.924 2.856-.682 6.053-1.85 7.665-1.182 1.633-4.29 2.38-6.688 4.133-2.371 1.735-4.034 4.484-5.967 5.115-1.83.597-4.81-.615-7.822-.615-3.033 0-5.983 1.215-7.821.615-1.933-.63-3.593-3.378-5.967-5.115-2.384-1.743-5.51-2.505-6.69-4.133-1.163-1.607-.93-4.825-1.847-7.665-.9-2.782-2.987-5.19-2.987-7.298 0-2.109 2.086-4.51 2.987-7.297.922-2.857.68-6.054 1.848-7.665 1.182-1.633 4.292-2.381 6.689-4.134 2.379-1.74 4.03-4.483 5.967-5.115 1.827-.596 4.818.615 7.821.615 3.04 0 5.982-1.215 7.822-.615 1.933.631 3.594 3.38 5.967 5.115 2.384 1.744 5.51 2.505 6.689 4.134 1.163 1.606.93 4.822 1.848 7.664.899 2.782 2.987 5.191 2.987 7.298 0 2.11-2.086 4.51-2.987 7.298zM41.13 22.478c.916.915.916 2.399 0 3.314l-11.73 11.731c-.916.915-2.4.915-3.316 0l-6.55-6.55a2.344 2.344 0 113.315-3.314l4.893 4.892 10.074-10.074a2.344 2.344 0 013.314 0z"
            fill="#242424"
          />
        </svg>
        <div className="texts">
          <h4 className="text-[#242424] text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-1">
            Warranty Protection
          </h4>
          <p className="text-[#898989] text-xs lg:text-sm xl:text-base">
            Over 2 years
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 xl:gap-4">
        <svg
          className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
          xmlns="http://www.w3.org/2000/svg"
          width={61}
          height={56}
          viewBox="0 0 61 56"
          fill="none"
        >
          <path
            d="M56.015 29.102V1.78c0-.975-.79-1.765-1.765-1.765H6.962c-.975 0-1.765.79-1.765 1.765v29.5a5.343 5.343 0 00-2.42 1.001c-2.322 1.646-2.87 5.33-.926 7.602L9.8 49.52c4.92 5.76 10.148 6.465 17.92 6.465 6.668 0 9.65.03 15.462-1.294l5.66-1.354c.917 1.281 2.374 2.111 4.012 2.111h2.788c2.77 0 5.024-2.374 5.024-5.292V34.378c0-2.786-2.055-5.075-4.652-5.276zm-7.934 3.63l-2.351-1.194a13.983 13.983 0 00-12.265-.198c-1.072.422-3.409 1.836-4.621 1.789h-8.16a4.915 4.915 0 00-4.91 4.909v1.287l-.046-.048-5.827-6.325a5.377 5.377 0 00-1.174-.96V14.48H23.17v6.47c0 .975.79 1.765 1.765 1.765h11.137c.975 0 1.765-.79 1.765-1.765v-6.47h14.647v14.62c-2.063.16-3.782 1.635-4.404 3.632zm-21.38-18.251h7.607v4.705H26.7v-4.705zm25.784-3.53H37.838V3.545h14.647v7.406zM34.308 3.545v7.406H26.7V3.545h7.607zm-11.137 0v7.406H8.727V3.545H23.17zm19.193 47.712c-5.37 1.23-8.603 1.18-14.58 1.18-7.296 0-10.82-.118-15.26-5.163l-7.95-9.638c-1.383-1.8 1.122-3.926 2.73-2.293l5.828 6.326c1.54 1.625 3.478 2.52 5.867 2.572h16.157a1.765 1.765 0 000-3.53H19.304v-2.674c0-.76.619-1.379 1.38-1.379h8.16c1.838.132 4.492-1.403 6.109-2.117a10.47 10.47 0 019.182.146l3.696 1.878v13.384l-5.467 1.308zm14.773-1.101c0 .972-.67 1.762-1.494 1.762h-2.788c-.824 0-1.494-.79-1.494-1.762V34.378c0-.971.67-1.762 1.494-1.762h2.788c.824 0 1.494.79 1.494 1.762v15.778z"
            fill="#242424"
          />
        </svg>
        <div className="texts">
          <h4 className="text-[#242424] text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-1">
            Free Shipping
          </h4>
          <p className="text-[#898989] text-xs lg:text-sm xl:text-base">
            Order over $150
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 xl:gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 60"
          className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
          fill="none"
        >
          <path
            d="M51.694 23.963C51.299 10.683 40.374 0 27 0 13.626 0 2.7 10.682 2.306 23.963L.53 25.74v12.05l1.765 1.764v8.21c0 4.801 3.905 8.707 8.706 8.707h2.186A5.302 5.302 0 0018.176 60h3.53a5.303 5.303 0 004.992-3.534c.1.002.202.005.302.005 8.522 0 15.653-6.073 17.292-14.118h4.615l4.564-4.563V25.74l-1.777-1.777zM27 3.529c10.474 0 19.195 7.645 20.88 17.648h-3.588C42.652 13.13 35.522 7.059 27 7.059c-8.522 0-15.653 6.072-17.292 14.117H6.119C7.805 11.175 16.526 3.53 27 3.53zm13.67 17.648c-5.704-.018-9.733.33-13.055-4.526l-1.613-2.358-1.387 2.498c-2.02 3.64-4.74 4.386-8.203 4.386h-3.083c1.571-6.083 7.105-10.589 13.67-10.589 6.567 0 12.1 4.506 13.672 10.589zM9.354 38.823H6.554L4.06 36.328V27.2l2.495-2.495h2.799v14.118zm-3.53 8.94v-5.411h3.881a17.492 17.492 0 004.609 8.739 5.304 5.304 0 00-1.127 1.85H11a5.182 5.182 0 01-5.177-5.177zm15.883 8.707h-3.53a1.767 1.767 0 01-1.764-1.765c0-.973.791-1.765 1.764-1.765h3.53c.973 0 1.765.792 1.765 1.765 0 .973-.792 1.765-1.765 1.765zm19.412-17.647c0 7.784-6.334 14.117-14.118 14.117-.101 0-.203-.002-.305-.004a5.302 5.302 0 00-4.99-3.525c-3.623.008-3.565-.018-4.017.023a14.036 14.036 0 01-4.806-10.611V24.706h3.53c3.123 0 6.926-.515 9.87-4.098 3.885 4.07 8.633 4.098 12.894 4.098h1.942v14.118zm8.823-2.496l-2.495 2.495h-2.799V24.707h2.799L49.94 27.2v9.127z"
            fill="#242424"
          />
        </svg>
        <div className="texts">
          <h4 className="text-[#242424] text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-1">
            24 / 7 Support
          </h4>
          <p className="text-[#898989] text-xs lg:text-sm xl:text-base">
            Dedicated support
          </p>
        </div>
      </div>
    </section>
  );
};
