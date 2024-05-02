import Image from "next/image";

export default function Page() {
  return (
    <section className="prose mx-auto my-20 max-w-4xl space-y-8 ">
      {/* <div className="relative h-96 w-full ">
        <Image
          className="h-full w-full rounded-lg object-cover shadow-lg"
          fill
          src="/assets/images/about-us/aboutus.jpg"
          alt="image"
        />
      </div> */}
      <h1 className="mb-8 text-center text-4xl font-normal  text-gray-800">
        About Us
      </h1>
      <div className="flex items-center justify-center gap-5 pb-12 text-justify">
        <div className="relative h-80 max-h-96 w-full ">
          <Image
            className="h-full w-full rounded-lg object-cover shadow-lg"
            src="/assets/images/About/1.jpg"
            fill={true}
            alt="image"
          />
        </div>
        <p className="w-full pt-16">
          In the competitive landscape of business, assessing competitors&apos;
          strategies, products, pricing, positioning, and market share is
          paramount for organizations striving to maintain a competitive edge.
          Analysts delve into a comprehensive examination of rival firms,
          scrutinizing their every move to gain insights into their strengths,
          weaknesses, opportunities, and threats. By meticulously dissecting
          competitors&apos; strategies, analysts unveil the tactics and
          approaches that have propelled their success or exposed
          vulnerabilities.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 pb-12 text-justify">
        <p className="w-full pt-16">
          A thorough analysis of competitors&apos; products and services sheds
          light on market trends and consumer preferences, enabling clients to
          identify gaps in the market or areas where they can differentiate
          themselves. Pricing strategies are scrutinized to discern patterns and
          understand the dynamics of price competition within the industry.
          Moreover, analyzing competitors&apos; positioning helps clients refine
          their own brand identity and messaging to carve out a distinct market
          niche.
        </p>

        <div className="relative h-80 max-h-96 w-full ">
          <Image
            className="h-full w-full rounded-lg object-cover shadow-lg"
            src="/assets/images/About/2.jpg"
            fill={true}
            alt="image"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 pb-12  text-justify">
        <div className="relative h-80 max-h-96 w-full ">
          <Image
            className="h-full w-full rounded-lg object-cover shadow-lg"
            src="/assets/images/About/3.jpg"
            fill={true}
            alt="image"
          />
        </div>{" "}
        <p className="w-full pt-16">
          Market share analysis provides valuable benchmarks for clients to
          gauge their relative performance within the industry and identify
          areas for growth or consolidation. Armed with these insights, clients
          can devise informed strategies to capitalize on opportunities,
          mitigate risks, and stay ahead of competitors. Ultimately, the
          assessment of competitors&apos; strategies equips clients with the
          intelligence needed to navigate the competitive landscape
          strategically and position themselves for long-term success.
        </p>
      </div>
    </section>
  );
}
