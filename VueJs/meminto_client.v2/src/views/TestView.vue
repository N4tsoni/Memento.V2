
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import './styles.css'
export default {
    components: { VueperSlides, VueperSlide },
    data: function(){
        return{
          breakpoints: {
    1200: {
      slideRatio: 1 / 5
    },
    900: {
      slideRatio: 1 / 3
    },
    600: {
      slideRatio: 1 / 2,
      arrows: false,
      bulletsOutside: true
    },
    // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
    1100: {
      slideRatio: 1 / 4
    }
  },
          slides: [
  {
    title: 'MEMENTO',
    content: 'Le projet de detection de visage OPEN-Source',
    image: `../public/video1_000.png`,
    video: {
      mp4: `../public/video1.mp4`,
      props: { autoplay: true, loop: true, controls: false, muted: true }
    }
  },
  {
    title: 'Blossoming flower',
    content: 'This video is played once, has controls and is reacting to user interactions.',
    image: `../public/photo.png`,
    video: {
      mp4: `../public/video2.mp4`,
      props: { autoplay: true, loop: true, controls: false, muted: true }
    }
  }
]
        }
    }
}
    
</script>

<template> 
    <w-app>
      <vueper-slides :breakpoints="breakpoints" 3d fixed-height="500px" bullets-outside arrows-outside>
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :title="slide.title"
          :content="slide.content"
          :video="slide.video" />
      </vueper-slides>


        
    </w-app>
</template>