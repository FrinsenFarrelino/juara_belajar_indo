import React from "react";

const WelcomePage = () => {
  return (
    <div className="py-10 px-12 md:px-16 bg-gradient-to-b from-sky-200 to-white">
      <h1 className="font-bold text-4xl m-5">
        Selamat Datang di{" "}
        <span className="text-blue-800">Juara Belajar Indonesia</span>!
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam
        iusto quo fuga ipsum repellendus vero, labore, nostrum architecto
        laboriosam cumque et consequuntur minus soluta ipsam voluptate suscipit
        eveniet saepe aspernatur! Aliquid voluptate harum porro itaque eos quas
        asperiores ipsa neque quidem? Corrupti natus ratione reiciendis? Amet
        velit nobis ea!
      </p>
      <div className="flex justify-center mt-10">
        <a href="#kursus">
          <button className="bg-blue-600 hover:bg-blue-900 px-5 py-2 rounded-md">
            <p className="text-white">Get Started</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
