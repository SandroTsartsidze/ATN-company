import React from "react";
import "../styles/aboutus.css";

export default function aboutus() {
  return (
    <div className="AboutUs">
      <div className="texts">
        <h1 className="About-us-text">ჩვენ შესახებ</h1>
        <h1 className="full-text">
          ჩვენ წარმოვადგენთ ბუღალტრული, საგადასახადო და სხვა ფინანსური
          სერვისების აუთსორსინგის კომპანიას, რომელიც ყოველდღიურად 350-ზე მეტ
          კლიენტ კომპანიას უწევს მომსახურებას. ეითიენ დაფუძნდა 2022 წელს და მის
          შემდეგ ემსახურებ კლიენტი კომპანიების ინტერესებს ხელმისაწვდომ ფასად,
          საერთაშორისო პროფესიული და ეთიკის სტანდარტების დაცვით.
        </h1>
        <div className="line"></div>
      </div>
      <section className="services">
        <section className="consultation">
          <div className="image"></div>
          <h1>კონსულტაცია</h1>
          <aside></aside>
        </section>
        <section className="accounting">
          <div className="image"></div>
          <h1>ბუღალტერია</h1>
          <aside></aside>
        </section>
        <section className="course">
          <div className="image"></div>
          <h1>სასწავლო კურსი</h1>
          <aside></aside>
        </section>
      </section>
    </div>
  );
}
