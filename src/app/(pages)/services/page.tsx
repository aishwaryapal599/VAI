import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function Page() {
  return (
    <section className="mx-auto  my-20 max-w-4xl space-y-8 px-4 ">
      <h2 className="text-center text-3xl ">Our Services</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 no-underline">
        {/* <div className="grid grid-cols-1 gap-4 no-underline"> */}
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
      </div>
    </section>
  );
}
