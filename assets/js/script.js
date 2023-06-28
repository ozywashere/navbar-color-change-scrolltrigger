const sectionColors = [
  'dodgerblue',
  'salmon',
  '#32cd32',
  'purple',
  'maroon',
  'royalblue',
  'tomato',
]

const navColors = [
  '#0077ea',
  '#f85441',
  '#28a428',
  '#4d004d',
  '#4d0000',
  '#214cce',
  '#ff3814',
]

gsap.set('.fullscreen', {
  backgroundColor: gsap.utils.wrap(sectionColors),
})

const sections = gsap.utils.toArray('.fullscreen')

sections.forEach((section, index) => {
  console.log(section, navColors[index])
  ScrollTrigger.create({
    trigger: section,
    start: 'top 100px',
    bottom: 'bottom 100px',
    animation: gsap.to('.navbar', {
      backgroundColor: navColors[index],
      immediateRender: true,
    }),
    toggleActions: 'restart none none reverse',
  })
})
