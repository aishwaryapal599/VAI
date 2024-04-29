import Image from "next/image";

import ServicesModal from "@/components/user/forms/ServicesModal";

import data from "../../../../data/market-analysis-and-intelligence-questions.json";

export default function Page() {
  const questions = Array.isArray(data) ? data : [];
  return (
    <>
      <section className="prose mx-auto my-20 max-w-4xl space-y-8 ">
        <h2 className="our-services">Market Analysis and Intelligence</h2>
        <div className="relative h-96 w-full ">
          <Image
            className="h-full w-full rounded-lg object-cover shadow-lg"
            fill
            src="/assets/images/services/Market Analysis and Intelligence.jpg"
            alt="image"
          />
        </div>
        <p className="pt-16">
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
        <p>
          A thorough analysis of competitors&apos; products and services sheds
          light on market trends and consumer preferences, enabling clients to
          identify gaps in the market or areas where they can differentiate
          themselves. Pricing strategies are scrutinized to discern patterns and
          understand the dynamics of price competition within the industry.
          Moreover, analyzing competitors&apos; positioning helps clients refine
          their own brand identity and messaging to carve out a distinct market
          niche.
        </p>
        <p>
          Market share analysis provides valuable benchmarks for clients to
          gauge their relative performance within the industry and identify
          areas for growth or consolidation. Armed with these insights, clients
          can devise informed strategies to capitalize on opportunities,
          mitigate risks, and stay ahead of competitors. Ultimately, the
          assessment of competitors&apos; strategies equips clients with the
          intelligence needed to navigate the competitive landscape
          strategically and position themselves for long-term success.
        </p>
      </section>
      <div className="fixed bottom-0 right-0 mb-4  mr-4">
        <ServicesModal
          questions={questions}
          page="services/market-analysis-and-intelligence"
        />
      </div>
    </>
  );
}
