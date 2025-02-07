
import avatar from "../assets/avatar.png"


const Ask = () => {
  return (
    <div className=''>
        <div className='bg-[#F9FAFB] flex flex-col gap-6 items-center justify-center py-10 mx-4  md:mx-24'>
            <img src={avatar} alt="" />
            <div className='flex flex-col items-center'>
                <p className='font-semibold text-xl'>Still have questions?</p>
                <p className='text-[#475467] text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            </div>
            <div>
                <button className='bg-red-500 text-white px-5 py-3 rounded-xl font-semibold'>Get in touch</button>
            </div>
        </div>
    </div>
  )
}

export default Ask