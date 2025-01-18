import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen bg-[url('https://www.shutterstock.com/image-vector/cityscape-urban-landscape-flat-style-260nw-1728603304.jpg')] bg-no-repeat bg-cover ">
        <nav className="flex justify-between px-16 py-3 items-center ">
          <h1 className="text-2xl">.HouRent</h1>
          <div className="flex items-center gap-3">
            <h5 className="text-gray-700 text-xl">advertize</h5>
            <h5 className="text-gray-700 text-xl">create</h5>
            <div className="flex border p-1 rounded-xl">
              <img
                src="https://img.icons8.com/?size=100&id=21441&format=png&color=000000"
                alt=""
                className="h-8 w-8"
              />
            </div>
          </div>
        </nav>
        <div className="px-16 flex justify-center py-3 border">
          <ul className="flex gap-6">
            <li>
              <Link href="./ShortTerm" className="text-xl">Short Term</Link>
            </li>
            <li>
              <Link href="./LongTerm" className="text-xl">Long Term</Link>
            </li>
            <li>
              <Link href="./MyProperty" className="text-xl">My Property</Link>
            </li>
            <li>
              <Link href="" className="text-xl">Inbox</Link>
            </li>
            <li>
              <Link href="" className="text-xl">Favorites</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center text-center mt-40">
          <div>
            <h1 className="text-6xl font-bold font-serif my-5">
              Find Your Peace With Us
            </h1>
            <p className="text-3xl font-sans mb-5  text-black">
              Discover millions of houses and <br></br> apartments for rent.
            </p>
            <div className="p-5  bg-gray-200  rounded-lg my-3">
              <div className="flex items-center bg-white gap-3 p-3 rounded-lg ">
                <img
                  src="https://img.icons8.com/?size=100&id=12773&format=png&color=000000"
                  alt=""
                  className="h-10 w-10"
                />
                <input
                  className="bg-white text-2xl border-none outline-none w-[450px]"
                  placeholder="Search by Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-28 px-16 py-3">
        <h1 className="text-5xl font-serif mb-3">Popular cities</h1>
        <h5 className="text-2xl text-gray-400">
          Discover houses and apartments for rent in our most popular locations.
        </h5>
        <div className="my-10 flex flex-wrap justify-center gap-8">
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./bang.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Bengaluru</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="https://th.bing.com/th/id/OIP.jKwHh6wexdviG6QiEs4k1QHaFU?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Chennai</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./mum.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Mumbai</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./tvm.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Thiruvananthapuram </h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./jaipur.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Jaipur</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./Udaipur.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Udaipur</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./ko.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Kochi</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./coim.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Coimbatore</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./madurai.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Madurai</h3>
          </div>
          <div className=" w-72 h-64 rounded-lg flex flex-col gap-3">
            <img
              src="./mala.jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <h3 className="text-black text-2xl font-serif">Malappuram</h3>
          </div>
        </div>
      </div>
      <div className="w-full my-20 px-16 py-3">
        <h1 className="text-5xl font-serif mb-3">Find us in the media</h1>
        <div className="my-16 flex gap-4 justify-center">
          <div className="p-16 bg-gray-100 rounded-lg border border-gray-400">
            <img
              src="https://img.icons8.com/?size=100&id=8818&format=png&color=000000"
              alt=""
             
            />
          </div>
          <div className="p-16 bg-gray-100 rounded-lg border border-gray-400">
            <img
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
              alt=""
             
            />
          </div>
          <div className="p-16 bg-gray-100 rounded-lg border border-gray-400">
            <img
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000"
              alt=""
              
            />
          </div>
          <div className="p-16 bg-gray-100 rounded-lg border border-gray-400">
            <img
              src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
              alt=""
              
            />
          </div>
          <div className="p-16 bg-gray-100 rounded-lg border border-gray-400">
            <img
              src="https://img.icons8.com/?size=100&id=37326&format=png&color=000000"
              alt=""
           
            />
          </div>
        </div>
      </div>
      <div className="my-32 flex justify-around">
        <img src="/add.png" alt=""  className="h-[400px] w-[600px]" />
        <div className="pr-10 pt-10">
          <h1 className="text-5xl mb-5">A best-in-class experience</h1>
          <h3 className="text-xl text-gray-500">
            The HouRent iOS and Android apps provide a seamless apartment
            <br></br> search experience.
          </h3>
          <h2 className="mt-10 text-3xl font-mono p-5 rounded-lg bg-gray-100 w-[280px] border border-gray-400">
            COMING SOON...
          </h2>
        </div>
      </div>
      <div className="px-16">
        <div className="w-full bg-gray-200 rounded-lg p-14 flex">
          <div>
            <h2 className="text-4xl mb-5">
              Marketing solutions for our<br></br> partners big and small
            </h2>
            <p className="text-xl mb-10">
              Whether you're a property owner, manager, or broker, we offer
              customized solutions to help you reach millions of quality renters
              during every step of the renter journey.
            </p>

            <h6 className="p-3 rounded-lg bg-gray-100 border border-gray-400 text-xl w-[196px] flex items-center gap-2">
              {" "}
              <img
                src="https://img.icons8.com/?size=100&id=47076&format=png&color=000000"
                alt=""
              
                className="w-10 h-10"
              />
              Your Property
            </h6>
          </div>

          <img
            src="https://d214hhm15p4t1d.cloudfront.net/nzr/9dbaabc1d9f203e90100306157560f778d02152b/img/marketIcon.85ff9ac8.svg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-700 w-full mt-24 p-24 ">
        <div className="flex justify-between mb-28">
          <div>
            <h1 className="text-3xl text-white font-extrabold">HOURENT</h1>
            <h3 className="text-white text-xl">Find your fresh start™.</h3>
            <h4 className="  text-gray-300">© 2024 HouRent Inc.</h4>
          </div>
          <div className="flex justify-around gap-16 pr-20">
            <ul>
              <li className="text-white text-2xl mb-3">COMPANY</li>
              <li className="text-gray-200 text-xl">About Us</li>
              <li className="text-gray-200 text-xl">Career</li>
              <li className="text-gray-200 text-xl">Blog</li>
            </ul>
            <ul>
              <li className="text-white text-2xl mb-3">SUPPORT</li>
              <li className="text-gray-200 text-xl">help center</li>
              <li className="text-gray-200 text-xl">terms & condition</li>
              <li className="text-gray-200 text-xl">Contact Us</li>
            </ul>
            <ul>
              <li className="text-white text-2xl mb-3">PRIVACY POLICY</li>
              <li className="text-gray-200 text-xl">privacy policy</li>
              <li className="text-gray-200 text-xl">Notice collection</li>
              <li className="text-gray-200 text-xl">personal information </li>
            </ul>
            <ul>
              <li className="text-white text-2xl mb-3">EXPLORE</li>
              <li className="text-gray-200 text-xl">Advertise with Us</li>
              <li className="text-gray-200 text-xl">List Property</li>
              <li className="text-gray-200 text-xl">Landloard resources</li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <h3 className="text-white text-xl font-sans text-center mt-5">
            HouRent is powered by passionate, innovative employees from every
            corner of the country. Interested in joining the team?
          </h3>
        </div>
      </div>
    </div>
  );
}
