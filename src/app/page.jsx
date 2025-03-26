
import profilePicture from "@/images/profile_photo.jpg";
import SectionCard from "@/ui/SectionCard.jsx";
import { sectionOverviewData } from "@/data/sectionOverviewData.js";
import LoadableImage from "./ui/LoadableImage";

export default function HomePage() {

  return (
    <>
      <h1 className="my-16 text-4xl font-semibold text-center">
        Hello there! Welcome to My Portofolio Website!
      </h1>
      <section id="website-intro" className="py-8">
        <div className=" p-4 bg-cyan-700 bg-opacity-10 border-[1px] border-cyan-500 rounded-md">
          <h2 className="text-2xl font-semibold mb-6">
            &#10067; So, what is this website about?
          </h2>
          <div className=" px-10">
            <p>
              This website is primarly for <b>employers</b> to know more detail about me <b>profesionally</b> in context of recruitment. Profesionally means that there
              won't be any of my personal information and useless information. You also won't need to input any of data in this website.  
              This website should be responsive in any device and compatible with at least Chrome and Firefox.
            </p>
            <p className="mt-3">
              If you find anything that is not working properly, please let me know by sending email to <span className="underline ml-1">stevenadi16@gmail.com</span>. 
            </p>
            <p className="mt-3 font-bold">Happy reading! &#128516;</p>
          </div>
        </div>
      </section>
      <section id="introduction" className="pt-12 pb-16 border-b-slate-200 border-b-2">
        <h2 className="text-2xl font-semibold mb-12">
          &#128075; Hi, my name is Steven Adi Suryanto,
        </h2>
        <div className="flex flex-col sm:flex-row text-center sm:text-left sm:space-x-12 space-y-4 sm:space-y-0  items-center px-6">
          <figure className="flex basis-1/3 justify-center w-[150px] h-[300px] sm:w-fit sm:h-fit">
            <LoadableImage
              src={profilePicture}
              alt="Profile picture of Steven Adi Suryanto"
              width={225}
              height={300}
              style={{
                opacity: "0.9",
                boxShadow: "0 0 50px 0px #67e8f9",
                borderRadius: "5px",
              }}
            ></LoadableImage>
          </figure>
          <div className=" flex flex-col justify-center space-y-8 basis-2/3 min-h-[300px] border-white">
            <p>
              I am currently a 6<sup>th</sup> Semester college student at <a href="https://dinus.ac.id/" target="_blank"></a>Universitas Dian Nuswantoro Semarang.
              I am majoring in Teknik Informatika (Computer Science) and currently focusing spesifically on Web Development and Devops.
            </p>
            <p>
              Why those 2 domain you may ask. Well, I have dream to become a <b>Solution Architect</b>. But, I personally think that there is no way i make Solution Architect as the first job that I would land.
              So, I think I should take another role that is more reachable but still relevant to Solution Architect.
            </p>
            <p>For more detail, click <a href="#detail-selection" className="text-link">here</a></p>
          </div>
        </div>
      </section>
      <section id="detail-selection" className="py-12 border-b-slate-200 border-b-2">
        <h2 className="text-2xl font-semibold mb-12">
          &#129343; Get to know more :
        </h2>
        <div className=" grid grid-cols-1 px-16 lg:grid-cols-2 lg:px-24 2xl:grid-cols-3 2xl:px-36 gap-x-12 gap-y-10 ">
          {
            sectionOverviewData.map((data, index) => {
              return <SectionCard key={index} data={data} />
            })
          }
        </div>
      </section>
    </>
  );
}
