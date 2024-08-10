import React from 'react'

const WhyUs = () => {
  return (
    <div className='py-20 flex flex-col px-5 lg:px-24'>
        <h1 className='text-3xl lg:text-6xl font-semibold'>Why <span className='text-[#66dc5f]'>Choose</span> Us?</h1>
        <div className="border-2 w-2/3 my-8"/>
        <div className="pt-2 flex flex-col gap-2">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/5"><b>Personalized Strategy :</b></div>
                <div className="lg:w-4/5">Each client path to success is unique. We engage closely with you to tailor strategies that resonate with your professional achievements and aspirations.</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/5"><b>Proven Expertise :</b></div>
                <div className="lg:w-4/5">Each client path to success is unique. We engage closely with you to tailor strategies that resonate with your professional achievements and aspirations. Our successful track record speaks volumes, with countless clients having achieved their dream of the EB1 green card. Our dedication and skill are reflected in our glowing testimonials.</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/5"><b>All-encompassing Support :</b></div>
                <div className="lg:w-4/5">Each client path to success is unique. We engage closely with you to tailor strategies that resonate with your professional achievements and aspirations. We handle every detail meticulously, ensuring your journey toward permanent residency is seamless and stress-free.</div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs