"use client"

import {useState, useRef, useEffect} from 'react';
import Image from 'next/image'

export default function Home() {
  const imageTrack = useRef(null)
  const image = useRef([])

  useEffect(() => {

    window.onmousedown = e => {
      imageTrack.current.dataset.mouseDownAt = e.clientX
    }

    window.onmouseup = () => {
      imageTrack.current.dataset.mouseDownAt = "0";
      imageTrack.current.dataset.prevPercentage = imageTrack.current.dataset.percentage;
    }

    window.onmousemove = e => {
      if(imageTrack.current.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(imageTrack.current.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(imageTrack.current.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      imageTrack.current.dataset.percentage = nextPercentage;

      imageTrack.current.animate({
        transform: `translate(${nextPercentage * 3}%, -50%)`
      }, {duration: 3600, fill: 'forwards'});

      for (const element of image.current) {
        element.animate({
          objectPosition: `${(100 + nextPercentage)}% center`
        }, { duration: 3600, fill: "forwards" })
      }
    }
  })

  return (
    <main>
      <div ref={imageTrack} className='flex gap-[4vmin] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[0%] select-none' data-mouse-down-at="0" data-prev-percentage="0">
        <Image
          src={"/photo1.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[0] = el}
        />
        <Image
          src={"/photo2.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[1] = el}
        />
        <Image
          src={"/photo3.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[2] = el}
        />
        <Image
          src={"/photo4.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[3] = el}
        />
        <Image
          src={"/photo5.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[4] = el}
        />
        <Image
          src={"/photo6.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[5] = el}
        />
        <Image
          src={"/photo7.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[6] = el}
        />
        <Image
          src={"/photo8.jpg"}
          width={500}
          height={500}
          alt=''
          className='w-[40vmin] h-[56vmin] object-cover image'
          draggable="false"
          ref={(el) => image.current[7] = el}
        />
      </div>
    </main>
  )
}
