import React from "react";

const WelcomePage = () => {
  return (
    <div className="py-10 px-12 md:px-16 bg-gradient-to-b from-rose-200 to-white">
      <h1 className="font-bold text-6xl m-5">
        Selamat Datang di{" "}
        <span className="text-red-800">Juara Belajar Indonesia</span>!
      </h1>
      <p className="text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam
        iusto quo fuga ipsum repellendus vero, labore, nostrum architecto
        laboriosam cumque et consequuntur minus soluta ipsam voluptate suscipit
        eveniet saepe aspernatur! Aliquid voluptate harum porro itaque eos quas
        asperiores ipsa neque quidem? Corrupti natus ratione reiciendis? Amet
        velit nobis ea!
      </p>
      <div className="flex justify-center mt-10">
        <a href="#kursus">
          <button className="bg-red-600 hover:bg-red-900 px-5 py-2 rounded-md">
            <p className="text-white">Get Started</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
