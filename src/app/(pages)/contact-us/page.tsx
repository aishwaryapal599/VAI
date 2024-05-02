import { MapPin, Phone } from "lucide-react";

import ContactUsForm from "@/components/user/forms/ContactUsForm";

export default function Page() {
  return (
    <section className=" container mx-auto my-20">
      <h1 className="mb-12 text-center text-4xl ">Contact Us</h1>

      <div className="flex flex-col justify-between  space-y-4 md:flex-row">
        <div className="mt-4 w-full md:w-1/2">
          <p className="mb-8 text-lg">
            We are always looking for new opportunities to collaborate with you.
            Please fill out the form below to get in touch with us.
          </p>
          <div className="flex text-left align-bottom text-2xl font-semibold ">
            <MapPin className=" mr-2 h-10 w-8 text-blue-700" />
            Address:
          </div>
          <p className="mb-8 pl-10 text-lg">
            <span className="">Adamas University, Barasat, India</span>
            <br />
            700026
          </p>
          <div className="flex text-left align-bottom text-2xl font-semibold ">
            <Phone className=" mr-2 h-10 w-8 text-blue-700" />
            Contact:
          </div>
          <p className="pl-10 text-lg">
            <span className="">9732988888</span>
            <br />
            <span className="">aishwarya.pal@stu.adamasuniversity.ac.in</span>
          </p>
        </div>

        <ContactUsForm />
      </div>
    </section>
  );
}
