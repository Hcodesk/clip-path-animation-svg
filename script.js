// GSAP timeline for complex sequences
const tl = gsap.timeline({ paused: true });

// Animate the clip-path and scaling
tl.to(".image-wrapper", {
    clipPath: "polygon(40% 40%, 60% 40%, 60% 60%, 40% 60%)", // Shrink the image via clip-path
    duration: 1.5,
    ease: "power2.inOut"
})
.to(".scroll-btn", {
    scale: 0, // Scale down the button
    duration: 0.8,
    ease: "power2.inOut"
}, "<") // "<" makes this animation happen simultaneously with the previous one
.to(".image-wrapper", {
    scale: 0.5, // Scale the entire image wrapper
    duration: 1.5,
    ease: "power2.inOut"
}, "-=0.5"); // "-=0.5" starts this animation slightly before the previous one ends

// Trigger the animation when the button is clicked
document.querySelector(".scroll-btn").addEventListener("click", () => {
    tl.play(); // Start the GSAP timeline on click
});
