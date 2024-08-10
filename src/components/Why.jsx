import { mulish } from '@/config/font'
import React from 'react'

const Why = () => {
  return (
    <div className='py-20 flex flex-col px-5 lg:px-24' data-aos="fade-up">
        <h1 className='text-3xl lg:text-5xl font-semibold'>Why <span className='text-[#66dc5f]'>Choose EB-1A</span> Over Other Visa
        Types?</h1>
        <div className="border-2 w-full my-8"/>
        <div className={mulish.className+" pb-2 flex flex-col gap-2 text-lg"}>
        Choosing the EB-1A visa can significantly simplify and expedite your journey to achieving your American dream. By leveraging your extraordinary abilities and achievements, you can bypass many of the hurdles associated with other visa categories and secure a more direct path to permanent residency and eventual citizenship in the United States.
        </div>
        <div className={mulish.className+" pt-2 flex flex-col gap-2"}>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/5 text-xl"><b>H-1B :</b></div>
                <div className="lg:w-4/5 text-lg">Limited by annual caps, subject to lottery, and tied to employer sponsorship.</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/5 text-xl"><b>L-1 :</b></div>
                <div className="lg:w-4/5 text-lg">Requires intra-company transfer, specific to multinational companies, and also
                employer-dependent.</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/5 text-xl"><b>F-1 :</b></div>
                <div className="lg:w-4/5 text-lg">Student visa with limited work options post-graduation, requiring transition to another visa type for employment.</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/5 text-xl"><b>EB-2 and EB-3 :</b></div>
                <div className="lg:w-4/5 text-lg">Require labour certification and are subject to longer waiting periods due to demand and priority date backlogs.</div>
            </div>
        </div>
        
    </div>
  )
}

export default Why