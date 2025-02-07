
import hidden from "../../assets/hidden.png"
import book from "../../assets/book.png"
import star from "../../assets/star.png"
import play from "../../assets/play.png"


const Dropdown = () => {
    return (
        <div className='bg-white w-[640px] border rounded-2xl border-[#EAECF0] shadow-xl'>
            <div className='grid grid-cols-2'>
                <div className=' flex flex-col gap-8 justify-center px-8 py-6'>
                    <div className='flex flex-col'>
                        <div className='flex gap-4 items-start'>
                            <img src={book} className='h-fit' alt="" />
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Blog</p>
                                <p className='text-sm text-[#475467]'>The Latest Industry news, upadtes and info.</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <div className='flex gap-4 items-start'>
                                <img src={star} className='h-fit' alt="" />
                                <div className='flex flex-col gap-2'>
                                    <p className='font-semibold'>Customer Stories</p>
                                    <p className='text-sm text-[#475467]'>Learn how our customers are making big changes.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <div className='flex gap-4 items-start'>
                                <img src={play} className='h-fit' alt="" />
                                <div className='flex flex-col gap-2'>
                                    <p className='font-semibold'>Video tutorials</p>
                                    <p className='text-sm text-[#475467]'>Get up and running on new features and techniques.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='bg-[#F9FAFB] w-full px-5'>
                    <div className='flex flex-col gap-4 p-5 justify-center'> 
                        <img src={hidden} alt="" className='rounded-xl '/>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>We just released an update!</p>
                            <p className='text-[#475467] text-sm'>Check out the all new dashboard view. Pages now load faster. </p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-sm text-[#475467] font-semibold'>Dismiss</p>
                            <p className='text-sm text-[#6941C6] font-semibold'>Changelog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown