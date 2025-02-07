import sisy from "../assets/sisy.png"
import wu from "../assets/wu.png"

const Review = () => {
  return (
    <div className='bg-[#F9FAFB]'>
        <div className='flex flex-col pt-14 pb-12 md:py-24 items-center gap-10 mx-10 md:px-14'>
            <img src={sisy} alt="" className='h-10 w-32' />

            <div className='flex items-center flex-col gap-10'>
                <p className='text-3xl font-medium text-center md:text-5xl'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
                <div className='flex flex-col items-center gap-4'>
                    <img src={wu} alt="" className='w-16 h-16' />
                    <div className='flex flex-col justify-center'>
                        <p className='text-center font-semibold text-lg'>Candice Wu</p>
                        <p className='text-center text-[#475467] font-normal'>Product Manager, Sisyphus</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review