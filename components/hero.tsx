import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
        <div>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-4xl tracking-tight font-semibold text-accent-800 md:text-5xl font-display">
              One-Stop Endoscopic Spine Surgery Solutions in South Korea
            </p>
            <p className="text-gray-500 lg:text-xl max-w-2xl mt-4 mx-auto text-base">
              Restore Your Mobility with Minimally Invasive Endoscopic Spine
              Solutions. Our goal is to arm our customers with the best medical
              supplies from leading manufacturers in South Korea
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-10 flex-col sm:flex-row">
            <Link
              className="items-center justify-center border-gray-200 h-12 font-medium rounded-xl focus-visible:outline-black focus:outline-none inline-flex duration-200 text-black lg:w-auto px-6 py-3 text-center text-black/80 w-full border"
              href="/products"
            >
              View Products
            </Link>
            <Link
              className="items-center justify-center h-12 font-medium rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black lg:w-auto px-6 py-3 text-center text-white w-full"
              href="/contact"
            >
              Contact Us &nbsp; &rarr;
            </Link>
          </div>
          <dl className="lg:gap-x-8 lg:grid-cols-2 max-w-4xl mt-8 mx-auto sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-6 text-center text-sm items-start">
            <div className="text-gray-500">
              <strong className="text-gray-700">
                Endoscopic Surgery Products
              </strong>{" "}
              ━ Best instruments in market for invasive endoscopic spine
              surgeries
            </div>
            <div className="text-gray-500">
              <strong className="text-gray-700">Medical Education</strong> ━
              Apply for internships and gain experience from the best
              specialists in the field
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
