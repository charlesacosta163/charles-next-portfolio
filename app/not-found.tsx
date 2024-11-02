import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

import notFound from "@/public/pagenotfound.svg";

const NotFound = () => {
  return (
    <div className="flex justify-center px-4">
      <section className="flex flex-col max-w-[1000px] py-4 w-full min-h-screen">
        <Navbar />

        <main className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col gap-4 text-center items-center">
            <Image
              src={notFound}
              width={400}
              height={400}
              alt="Page not Found"
            />{" "}
            {/* Place SVG here */}
            <p className="text-gray-600 font-medium">Oops, the page you were looking for does not exist 😔</p>

            <Link href='/' className="px-4 py-2 rounded-[20px] duration-200 hover:scale-105 bg-base2-dark font-medium text-white text-sm">
              Return Home
            </Link>
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default NotFound;
