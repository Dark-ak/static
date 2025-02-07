import customer from "../assets/customer.png"
import connect from "../assets/connect.png"
import people from "../assets/people.png"
import breakout from "../assets/breakout.png"

const Feature = () => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col pt-14 pb-10 mx-3 md:py-24 border-b'>
        <div className='flex flex-col justify-center items-center gap-3 '>
          <p className='text-[#E63F3A] font-semibold'>Features</p>
          <p className='text-3xl font-semibold text-center md:text-4xl'>Analytics that feels like it’s from the future</p>
          <p className='text-center text-[#475467] text-lg md:w-[75%] md:text-xl'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-10 mt-14 mx-14'>
          <div className='felx flex-col items-center justify-center w-full '>
            <div className='flex  justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shadow border border-gray-300 p-2 rounded-lg h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>

            <div className='flex justify-center flex-col items-center my-3'>
              <p className='font-semibold text-lg md:text-xl text-center'>Share team inboxes</p>
              <p className='text-center text-[#475467]'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
          </div>

          <div className='felx flex-col items-center justify-center w-full '>
            <div className='flex  justify-center w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shadow border border-gray-300 p-2 rounded-lg h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>

            </div>

            <div className='flex justify-center flex-col items-center my-3'>
              <p className='font-semibold text-lg md:text-xl text-center'>Deliver instant answers</p>
              <p className='text-center text-[#475467]'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>
          </div>
          <div className='felx flex-col items-center justify-center w-full gap-3'>
            <div className='flex  justify-center'>
              <img src={breakout} className=' shadow border border-gray-300 p-2 rounded-lg' alt="" />

            </div>

            <div className='flex justify-center flex-col items-center my-3'>
              <p className='font-semibold text-lg md:text-xl text-center'>Manage your team with reports</p>
              <p className='text-center text-[#475467]'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            </div>
          </div>

          <div className='felx flex-col items-center justify-center w-full '>
            <div className='flex  justify-center'>
              <img src={customer} className=' shadow border border-gray-300 p-2 rounded-lg' alt="" />

            </div>

            <div className='flex justify-center flex-col items-center my-3'>
              <p className='font-semibold text-lg md:text-xl text-center'>Connect with customers</p>
              <p className='text-center text-[#475467]'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
            </div>
          </div>
          <div className='felx flex-col items-center justify-center w-full '>
            <div className='flex  justify-center'>
              <img src={connect} className=' shadow border border-gray-300 p-2 rounded-lg' alt="" />

            </div>

            <div className='flex justify-center flex-col items-center my-3'>
              <p className='font-semibold text-lg md:text-xl text-center'>Connect the tools you already use</p>
              <p className='text-center text-[#475467]'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
            </div>
          </div>
          <div className='felx flex-col items-center justify-center w-full '>
            <div className='flex  justify-center'>
              <img src={people} className=' shadow border border-gray-300 p-2 rounded-lg' alt="" />

            </div>

            <div className='flex justify-center flex-col items-center my-3'>
              <p className='font-semibold text-lg md:text-xl text-center'>Our people make the difference</p>
              <p className='text-center text-[#475467]'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Feature