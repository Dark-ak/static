import { useState } from 'react'

const Faq = () => {
    const [active, setActive] = useState(0);
    const data = [
        {
            id: 1,
            head: "Is there a free trial available?",
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            id: 2,
            head: "Can I change my plan later?",
            desc: ""
        },
        {
            id: 3,
            head: "What is your cancellation policy?",
            desc: ""
        },
        {
            id: 4,
            head: "Can other info be added to an invoice?",
            desc: ""
        },
        {
            id: 5,
            head: "How does billing work?",
            desc: ""
        },
        {
            id: 6,
            head: "How do I change my account email?",
            desc: ""
        }
    ]

    return (
        <div>
            <div className='pt-14 flex flex-col items-center mx-2 mb-4'>
                <div className='flex items-center flex-col gap-5'>
                    <p className='text-3xl font-semibold text-center'>Frequently Asked Questions</p>
                    <p className='text-center text-[#475467] text-lg font-normal'>Everything you need to know about the product and billing.</p>
                </div>
                <div className='py-4'>
                    {data.map((d) => {

                        return (
                            <div key={d.id} className='border-b border-[#EAECF0]'>
                                <div className={`flex justify-between  flex-col m-5 gap-4 ${active == d.id ? "h-fit" : "h-fit"}`}>
                                    <div className='flex justify-between items-center gap-4'>
                                        <p className='text-lg font-medium '>{d.head}</p>
                                        <div onClick={() => {
                                            setActive(active != d.id ? d.id : 0)
                                            console.log(active)
                                        }}>
                                            {active == d.id ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#98A2B3]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#98A2B3]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            }
                                        </div>
                                    </div>
                                    <p className={`text-[#475467] ${active == d.id ? "flex" : "hidden"}`}>{d.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq