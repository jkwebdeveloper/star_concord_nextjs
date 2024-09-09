"use client";
import CommonBanner from '@/components/global/CommonBanner';
import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordionCareer';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import PageLoader from '@/components/ui/pageloader';
import Link from 'next/link';

const Careerpage = ({ title }) => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetCareers = () => {
        setLoading(true);
        axios("https://starconcord.onrender.com/api/careerList", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => {
                setCareers(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleGetCareers();
    }, []);

    return (
        <div className="container w-full mx-auto lg:space-y-20 space-y-7">
            <CommonBanner
                image="/static/images/banner12.jpg"
                title="Careers"
                page="Careers"
            />
            {loading ? (
                <PageLoader />
            ) : (
                <div className='container px-3 pb-10 space-y-10 lg:px-10'>
                    <div className='space-y-4'>
                        <p className='text-base md:text-lg'>At Swift, Human Capital is recognized as our most important asset...</p>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {careers.map((career, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="p-3 space-y-4 text-black border border-gray-400">
                                <AccordionTrigger className="flex items-center justify-between text-3xl font-bold cursor-pointer">
                                    {/* <div className="flex items-center justify-between cursor-pointer"> */}
                                    <p className="text-sm font-semibold text-left uppercase md:text-base text-primary_color">
                                        {career.title}
                                    </p>
                                    <p className="text-sm text-right uppercase font-semibol d md:text-base text-primary_color">
                                        {career.locations.join(" | ")}
                                    </p>
                                    {/* </div> */}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-4 text-left transition duration-500">
                                        <div className="space-y-3 text-left">
                                            <p className='font-semibold uppercase'>JOB DESCRIPTION</p>
                                            <Table>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-medium">Reports to:</TableCell>
                                                        <TableCell className="text-left">{career.reports_to}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-medium">Experience:</TableCell>
                                                        <TableCell className="text-left">{career.experience}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-medium">Domain / Division:</TableCell>
                                                        <TableCell className="text-left">{career.domain}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                            <p className='font-semibold uppercase'>REQUIREMENTS</p>
                                            <div className='space-y-4' dangerouslySetInnerHTML={{ __html: career.requirements }} />
                                            <Link href={`/career-apply-now/${career._id}`} state={{ id: career._id }} key={career._id}>
                                                <Button variant="primary" className="flex items-center gap-2">
                                                    Apply Now
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            )}
        </div>
    );
};

export default Careerpage;
