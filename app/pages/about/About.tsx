import { FaHeart, FaLeaf, FaPeopleCarry } from "react-icons/fa";
import BgImageBlock from "~/components/BgImageBlock";
import Button from "~/components/Button";
import PageAnimation from "~/components/PageAnimation";
import PageMargin from "~/components/PageMargin";

const About = () => {
  return (
    <PageAnimation>
      <PageMargin>
        <main className="text-gray-800 dark:text-white/70">
          <section className="bg-[url('/background/red-wall.jpg')] bg-cover bg-center py-20 px-section text-center text-white/90">
            <h1 className="text-5xl font-bold mb-4">Welcome to VicsOil</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Premium-quality, 100% pure palm oil for homes, restaurants, and
              vendors across Nigeria.
            </p>
          </section>

          <section className="px-section py-16 space-y-10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-red-700 dark:text-red-900 mb-4">
                  Our Story
                </h2>
                <p className="mb-4">
                  VicsOil began as a small family trade in Bariga, Lagos, rooted
                  in passion and tradition. Over time, it grew into a trusted
                  brand supplying premium-quality red palm oil to households and
                  food businesses across Nigeria.
                </p>
                <p className="">
                  Our oil is freshly sourced, carefully filtered, and never
                  diluted — so you get only the purest, richest flavor in every
                  drop.
                </p>
              </div>
              <div>
                <img
                  src="/images/palm-oil-bottle.jpg"
                  alt="Palm Oil Bottle"
                  className="rounded-xl shadow-md w-full h-72 object-cover"
                />
              </div>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="/images/palm-oil-bottle.jpg"
                  alt="Palm Oil Bottle"
                  className="rounded-xl shadow-md w-full h-72 object-cover"
                />
              </div>
              <div>
                <p className="mb-4">
                  VicsOil began as a small family trade in Bariga, Lagos, rooted
                  in passion and tradition. Over time, it grew into a trusted
                  brand supplying premium-quality red palm oil to households and
                  food businesses across Nigeria.
                </p>
                <p>
                  Our oil is freshly sourced, carefully filtered, and never
                  diluted — so you get only the purest, richest flavor in every
                  drop.
                </p>
              </div>
            </div>
          </section>

          {/* What Makes Us Special */}
          <section className="bg-[url('/background/gray-wall.jpg')] bg-cover bg-center px-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-800">
                Why Choose VicsOil?
              </h2>
              <p className="text-gray-700 mt-2">
                We're more than just palm oil — we're a promise of purity,
                trust, and tradition.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="p-6 rounded-lg shadow hover:shadow-md transition">
                <FaLeaf className="text-red-600 text-3xl mb-4" />
                <h3 className="font-bold text-lg text-red-700 mb-2">
                  100% Pure
                </h3>
                <p className="text-gray-600">
                  Zero additives. No preservatives. Just fresh, natural palm oil
                  from trusted farms.
                </p>
              </div>
              <div className="p-6 rounded-lg shadow hover:shadow-md transition">
                <FaHeart className="text-red-600 text-3xl mb-4" />
                <h3 className="font-bold text-lg text-red-700 mb-2">
                  Loved By Customers
                </h3>
                <p className="text-gray-600">
                  Food vendors, families, and chefs trust us for consistent
                  quality and flavor.
                </p>
              </div>
              <div className="p-6 rounded-lg shadow hover:shadow-md transition">
                <FaPeopleCarry className="text-red-600 text-3xl mb-4" />
                <h3 className="font-bold text-lg text-red-700 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  We empower local farmers and uphold traditional processing
                  practices.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="px-section py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-red-700 dark:text-red-900 mb-8">
                What People Say
              </h2>

              <div className="space-y-8">
                <blockquote className="border-l-4 border-red-600 dark:border-red-900 pl-6 text-left italic">
                  “This is the only palm oil I use now. It’s fresh, pure, and
                  gives my food the exact taste I want.”
                  <p className="mt-2 font-semibold text-sm text-gray-600">
                    — Mama Chika, Food Vendor
                  </p>
                </blockquote>
                <blockquote className="border-l-4 border-red-600 dark:border-red-900 pl-6 text-left italic">
                  “I’ve been buying in bulk from VicsOil for over a year.
                  They’ve never disappointed me.”
                  <p className="mt-2 font-semibold text-sm text-gray-600">
                    — Mr. Samuel, Restaurant Owner
                  </p>
                </blockquote>
                <blockquote className="border-l-4 border-red-600 dark:border-red-900 pl-6 text-left italic">
                  “This is the only palm oil I use now. It’s fresh, pure, and
                  gives my food the exact taste I want.”
                  <p className="mt-2 font-semibold text-sm text-gray-600">
                    — Mama Chika, Food Vendor
                  </p>
                </blockquote>
                <blockquote className="border-l-4 border-red-600 dark:border-red-900 pl-6 text-left italic">
                  “I’ve been buying in bulk from VicsOil for over a year.
                  They’ve never disappointed me.”
                  <p className="mt-2 font-semibold text-sm text-gray-600">
                    — Mr. Samuel, Restaurant Owner
                  </p>
                </blockquote>
                <blockquote className="border-l-4 border-red-600 dark:border-red-900 pl-6 text-left italic">
                  “This is the only palm oil I use now. It’s fresh, pure, and
                  gives my food the exact taste I want.”
                  <p className="mt-2 font-semibold text-sm text-gray-600">
                    — Mama Chika, Food Vendor
                  </p>
                </blockquote>
                <blockquote className="border-l-4 border-red-600 dark:border-red-900 pl-6 text-left italic">
                  “I’ve been buying in bulk from VicsOil for over a year.
                  They’ve never disappointed me.”
                  <p className="mt-2 font-semibold text-sm text-gray-600">
                    — Mr. Samuel, Restaurant Owner
                  </p>
                </blockquote>
              </div>
            </div>
          </section>

          <BgImageBlock imageUrl="url('/images/palm-leaves.jpg')">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="mb-6 text-white/90">
              Order in bottles or drums. We deliver nationwide.
            </p>
            <a href="/#products">
              <Button>Browse Our Products</Button>
            </a>
          </BgImageBlock>
        </main>
      </PageMargin>
    </PageAnimation>
  );
};

export default About;
