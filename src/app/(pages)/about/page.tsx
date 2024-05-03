import Image from "next/image";

export default function Page() {
  return (
    <article className="prose mx-auto my-20 max-w-4xl space-y-8 ">
      <h1>About Vyapar Anusandhan Insights</h1>
      <section>
        <div className="relative mb-12 h-[350px] w-full">
          <Image
            className="h-full w-full rounded-lg object-cover shadow-lg"
            src="/assets/images/about.jpg"
            fill
            alt="image"
          />
        </div>

        <p>
          At Vyapar Anusandhan Insights, based in the vibrant city of Kolkata,
          India, we are more than just analysts – we&apos;re your strategic
          partners in navigating the competitive landscape. In an era where
          every move counts, understanding your competitors is not just
          important; it&apos;s essential for success.
        </p>
        <p>
          With our roots deeply embedded in Kolkata&apos;s dynamic business
          ecosystem, we bring a localized perspective combined with global
          standards of research excellence. Our team of seasoned analysts goes
          beyond the surface, meticulously dissecting competitors&apos;
          strategies to uncover the insights that matter most to your business.
        </p>
      </section>
      <section>
        <h2>Our Approach</h2>
        <ul>
          <li>
            <p>
              <span className="mr-2 font-semibold">
                Comprehensive Analysis:
              </span>
              From assessing product offerings to analyzing pricing strategies,
              we leave no stone unturned in our quest to provide you with
              actionable intelligence.
            </p>
          </li>
          <li>
            <p>
              <span className="mr-2  font-semibold">Localized Insight: </span>
              We understand the nuances of the Kolkata market and tailor our
              research to suit your specific needs and challenges.
            </p>
          </li>
          <li>
            <p>
              <span className="mr-2  font-semibold">
                Strategic Recommendations:
              </span>
              We don&apos;t just deliver data; we provide strategic
              recommendations that empower you to make informed decisions and
              drive growth.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Choose Us?</h2>
        <p>
          Whether you&apos;re a budding startup or an established enterprise,
          our market share analysis and strategic recommendations empower you to
          make informed decisions that drive growth and innovation. At Vyapar
          Anusandhan Insights, we&apos;re not just here to help you compete;
          we&apos;re here to help you thrive. Join hands with us, and let&apos;s
          chart a course to success together.
        </p>
        <p>
          Join hands with us, and let&apos;s chart a course to success together.
        </p>
      </section>
    </article>
  );
}
