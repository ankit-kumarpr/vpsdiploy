import React from 'react';

const LawFirms = () => {
  return (
    <section
      id="id-law-firms"
      className="pt-10 lg:pt-[120px] pb-8 lg:pb-20 bg-[#F3F4F6] bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/images/lawfirms-bg.png)" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full text-center pb-8">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 pb-2">
            Area of Practice
          </h1>
          <p className="text-gray-400 text-base max-w-4xl mx-auto">
            We only practice family law so our awareness, knowledge, and experience in the field is extensive and current.
            Narrowing our activity ensures we have a continuous pulse on the latest trends, precedents, and case law, and are at the forefront of new developments in family law and the family court system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {firmscarddata.map((item) => (
            <LawFirm key={item.id + item.title} lawcard={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LawFirm = ({ lawcard }) => {
  const { id, title, con } = lawcard;
  return (
    <div className="w-full h-full">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={`/images/firm${id}.png`}
          alt={title}
          className="w-20 h-20 mt-8 object-contain"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-base text-gray-600 mb-4">{con}</p>
          <a
            href="#"
            className="inline-block py-2 px-4 border border-gray-300 rounded-full text-base text-gray-700 hover:bg-[#2596be] hover:text-white transition"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const firmscarddata = [
  {
    id: 1,
    title: "Divorce",
    con: "Regardless of your reason for divorce, this is an emotional time. In Canada, there are three grounds for divorce.",
  },
  {
    id: 2,
    title: "Support",
    con: "It’s not uncommon for separations to cause financial stress. The court can remediate the situation with support.",
  },
  {
    id: 3,
    title: "Parenting & Access",
    con: "Solutions are different for every family — we navigate challenges like distance, addiction, or special needs.",
  },
  {
    id: 4,
    title: "Agreements",
    con: "Interspousal agreements protect interests in the event of separation or death — we help craft them wisely.",
  },
  {
    id: 5,
    title: "Property",
    con: "Property division starts with determining which assets are family, business, or individual.",
  },
  {
    id: 6,
    title: "Independent Legal Advice",
    con: "We advise you regarding agreements reached with another party, ensuring informed decisions.",
  },
  {
    id: 7,
    title: "Adoption & Guardianship",
    con: "Adoption is joyful yet complex — we guide you through legal hurdles compassionately and efficiently.",
  },
];

export default LawFirms;
