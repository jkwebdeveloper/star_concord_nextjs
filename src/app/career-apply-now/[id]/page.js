'use client';
import CommonBanner from '@/components/global/CommonBanner'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@/components/ui/button';
import Label from '@/components/ui/form/label';

const ApplyNowpage = ({ title }) => {



    return (
        <div className="container w-full pb-10 mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/banner12.jpg"
                title="Careers"
                page="Careers"
            />
            <div className='w-full space-y-4 lg:w-3/4'>
                <p>{title}</p>
                <p>Please fill up the form below to send us a message or you can contact us directly at our address or via E-mail.</p>
                <form className='space-y-4'>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="first_name"
                                text="First Name"
                            />
                            <input
                                type="text"
                                name="first_name"
                                className="input_field"
                                required
                            />
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="last_name"
                                text="Last Name"
                            />
                            <input
                                type="text"
                                name="last_name"
                                className="input_field"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="email"
                                text="Your e-mail"
                            />
                            <input
                                type="text"
                                name="first_name"
                                className="input_field"
                                required
                            />
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="mobile_number"
                                text="Your Mobile Number"
                            />
                            <input
                                type="text"
                                name="last_name"
                                className="input_field"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="Location"
                                text="Location"
                            />
                            <input
                                type="text"
                                name="first_name"
                                className="input_field"
                                required
                            />
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="resume"
                                text="Upload Resume"
                            />
                            <input
                                type="text"
                                name="last_name"
                                className="input_field"
                            />
                        </div>
                    </div>
                    <div className='w-full space-y-1 text-left'>
                        <Label
                            htmlFor="resume"
                            text="Your message"
                        />
                        <textarea
                            type="text"
                            name="last_name"
                            className="input_field"
                        />
                    </div>
                    <Button
                        variant="primary"
                        type="submit"
                        className="flex items-center uppercase"
                    >
                        Apply Now
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ApplyNowpage