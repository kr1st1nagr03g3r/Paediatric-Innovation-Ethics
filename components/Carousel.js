import { shouldUseReactRoot } from 'next/dist/server/config';
import React from 'react';
import styles from '../styles/Model-overview.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from ''
// import Link from "next/link";
// import Image from "next/image"
// import Router from "next/router";

class CoolCarousel extends Reactr.Component {
    render() {
        document.querySelectorAll(".carousel").forEach((carousel) => {
            const items = carousel.querySelectorAll(".carousel__item");
            const buttonsHtml = Array.from(items, () => {
              return `<span class="carousel__button"></span>`;
            });
          
            carousel.insertAdjacentHTML(
              "beforeend",
              `
                  <div class="carousel__nav">
                      ${buttonsHtml.join("")}
                  </div>
              `
            );
          
            const buttons = carousel.querySelectorAll(".carousel__button");
          
            buttons.forEach((button, i) => {
              button.addEventListener("click", () => {
                // un-select all the items
                items.forEach((item) =>
                  item.classList.remove("carousel__item--selected")
                );
                buttons.forEach((button) =>
                  button.classList.remove("carousel__button--selected")
                );
          
                items[i].classList.add("carousel__item--selected");
                button.classList.add("carousel__button--selected");
              });
            });
          
            // Select the first item on page load
            items[0].classList.add("carousel__item--selected");
            buttons[0].classList.add("carousel__button--selected");
          });
          
    }
}


ReactDOM.render(<CoolCarousel />, document.body)

// function Nicecarousel() {
//     return (
//         <div>
//             <div className={styles.carousel}>
//                 <div className={styles.item}>Content #1</div>
//                 <div className={styles.item}>Content #2</div>
//                 <div className={styles.item}>Content #3</div>
//                 <div className={styles.item}>Content #4</div>
//                 <div className={styles.item}>Content #5</div>
//                 <div className={styles.item}>Content #6</div>
//                 <div className={styles.item}>Content #7</div>
//                 <div className={styles.carouselNav}>
//                     <span className={styles.carouselButton}></span>
//                     <span className={styles.carouselButton}></span>
//                     <span className={styles.carouselButton}></span>
//                     <span className={styles.carouselButton}></span>
//                     <span className={styles.carouselButton}></span>
//                     <span className={styles.carouselButton}></span>
//                     <span className={styles.carouselButton}></span>
//                 </div>
//             </div>

//         </div>
//     );
// }


// export default Nicecarousel