import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';
import company from '../data/companies.json';
import faqs from '../data/faq.json';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const LandingPage = () => {
	const autoplayPlugin = useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	const emblaOptions = { loop: true };

	return (
		<main className='flex flex-col sm:gap-20 sm:py-20 py-10 gap-10'>
			<h1 className='text-4xl font-extrabold text-center sm:text-6xl lg:text-8xl tracking-tighter py-4 text-gray-400'>
				Your dream job awaits ...
			</h1>
			<p className='text-gray-400 text-xl text-center sm:text-2xl sm:mt-2 mt-1'>
				Explore thousands of jobs and find the perfect candidate
			</p>

			{/* Buttons Section */}
			<div className='flex items-center justify-center gap-6'>
				<Link to='/jobs'>
					<Button variant='blue' size='xl'>
						Find Jobs
					</Button>
				</Link>
				<Link to='/postjob'>
					<Button variant='destructive' size='xl'>
						Post Jobs
					</Button>
				</Link>
			</div>

			{/* Carousel Section */}
			<div>
				<Carousel
					className='w-full py-10 mt-20'
					plugins={[autoplayPlugin.current]}
					options={emblaOptions}
					onMouseEnter={autoplayPlugin.current.stop}
					onMouseLeave={autoplayPlugin.current.reset}>
					<CarouselContent className='gap-5 flex sm:gap-20 items-center'>
						{company.map(({ name, path }, id) => (
							<CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
								<img
									src={path}
									alt={name}
									className='h-15 sm:h-14 object-contain'
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			{/* Banner Image */}
			<img alt='banner' src='/banner.jpg' className='w-full' />

			{/* Job Seekers and Employers Section */}
			<section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<Card>
					<CardHeader>
						<CardTitle>Job Seekers</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Search and Apply for Jobs</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Employers</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Post Jobs and manage Applications to find the perfect candidate
						</p>
					</CardContent>
				</Card>
			</section>

			{/* FAQ Section */}
			<section>
				<Accordion type='single' collapsible className='w-full'>
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</main>
	);
};

export default LandingPage;
