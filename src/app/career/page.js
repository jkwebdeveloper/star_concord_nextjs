import CommonBanner from '@/components/global/CommonBanner'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const Careerpage = () => {
    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/common.jpg"
                title="Careers"
                page="Careers"
            />
            <div className='container px-3 space-y-10 lg:px-10'>
                <div className='space-y-4'>
                    <p className='text-base md:text-lg'>At Swift, Human Capital is recognized as our most important asset. We believe in investing in our employees, by offering careers that well match their skillsets, training them & challenging them all the way. We are proud to have nurtured a leadership mind-set in the organization focused on merit, consistent performance and rewarding exceptional competence.</p>
                    <p className='text-base md:text-lg'>Employees are encouraged to progress their careers, display their managerial & leadership skills based on demonstration of strong execution, desire to accept additional & cross functional responsibilities & continuous learning.</p>
                    <p className='text-base md:text-lg'>We welcome you to be part of the Swift Family & encourage you to embark on your chosen professional career journey with us. Find out more about the Current Opportunities in the various functions here:</p>
                </div>
                <div className=''></div>
            </div>
        </div>
    )
}

export default Careerpage