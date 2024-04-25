"use client";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import HeroForm from '@/components/user/forms/HeroForm';

export default function Home() {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <>
      <section className="relative">
        <LandingCarousel />
        <div className="absolute bottom-0 left-0 right-0 top-0 text-indigo-100 ">
          <div className="h-full w-full bg-gradient-to-br from-green-700/75 via-purple-700/75 to-indigo-700/75"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0  flex  flex-col   items-center justify-center gap-4 space-y-8 p-4 text-center sm:flex-row  sm:items-center sm:text-left">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="border-1 spacing border-indigo-950  text-6xl font-semibold tracking-normal drop-shadow-2xl">
                Welcome 🙏 <br />
                To Our Market Research Firm
              </h1>
              <p className="text-indigo-100 ">
                Providing insightful data analysis and market understanding to
                drive your business forward.
              </p>
              <Link href="/contact-us">
                <Button>Contact Us</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>
      <section className=" mx-auto my-20 max-w-4xl px-4">
        <h2 className="mb-8 text-3xl font-semibold">Services</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 ">
          <Link
            className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            href="/services/market-analysis-and-intelligence"
          >
            <div>Market Analysis and Intelligence</div>
            <MdArrowForwardIos />
          </Link>
          <Link
            className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            href="/services/consumer-insights-and-behavior-analysis"
          >
            <div>Consumer Insights and Behavior Analysis</div>
            <MdArrowForwardIos />
          </Link>
          <Link
            className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            href="/services/competitive-analysis"
          >
            <div>Competitive Analysis</div>
            <MdArrowForwardIos />
          </Link>
          <Link
            className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            href="/services/product-and-brand-research"
          >
            <div>Product and Brand Research</div>
            <MdArrowForwardIos />
          </Link>
          <Link
            className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            href="/services/advertising-and-campaign-evaluation"
          >
            <div>Advertising and Campaign Evaluation</div>
            <MdArrowForwardIos />
          </Link>
          <Link
            className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            href="/services/custom-research-projects"
          >
            <div>Custom Research Projects</div>
            <MdArrowForwardIos />
          </Link>
        </div>
      </section>
    </>
  );
}

function LandingCarousel() {
  return (
    <Carousel
      className="max-w-[100dvw]"
      plugins={[
        Autoplay({
          delay: 5000,
          playOnInit: true,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-screen w-screen">
            <Image
              className="object-cover"
              fill
              src="/assets/images/hero-images/hero (1).jpg"
              alt="image"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-screen w-screen">
            <Image
              className="object-cover"
              fill
              src="/assets/images/hero-images/hero (2).jpg"
              alt="image"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-screen w-screen">
            <Image
              className="object-cover"
              fill
              src="/assets/images/hero-images/hero (3).jpg"
              alt="image"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-screen w-screen">
            <Image
              className="object-cover"
              fill
              src="/assets/images/hero-images/hero (4).jpg"
              alt="image"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-screen w-screen">
            <Image
              className="object-cover"
              fill
              src="/assets/images/hero-images/hero (5).jpg"
              alt="image"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <div className="relative h-screen w-screen">
            <Image
              className="object-cover"
              fill
              src="/assets/images/hero-images/hero (6).jpg"
              alt="image"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
