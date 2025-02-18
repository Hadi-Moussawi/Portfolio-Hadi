// export const initTitleAnimation = () => {
//   const titles = document.querySelectorAll('.animated-title');
//   let currentIndex = 0;

//   const animate = () => {
//     titles.forEach((title, index) => {
//       title.style.animation = 'none';
//       void title.offsetWidth; // Trigger reflow

//       if (index === currentIndex) {
//         title.style.animation = `
//             typing 1.5s steps(40) forwards,
//             deleting 1.5s steps(40) 3s forwards
//           `;
//       }
//     });

//     currentIndex = (currentIndex + 1) % titles.length;
//   };

//   animate();
//   setInterval(animate, 6000);
// };
