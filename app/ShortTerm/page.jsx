"use client";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function page() {
  const [data, setData] = useState([]);
  const [room, setroom] = useState("");
  const [baths, setbaths] = useState("");
  const [condition, setcondition] = useState("");
  const [price, setprice] = useState("");
  const [AC, setAC] = useState("");
  const [Pets, setPets] = useState("");
  const [parking, setparking] = useState("");
  const token = localStorage.getItem("access-token");
  const router = useRouter();
  const getData = () => {
    axios
      .get("http://localhost:8000/api/v1/rental/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };
  const BathFilter = (baths) => {
    axios
      .get(
        `http://localhost:8000/api/v1/rental/filter/shortTerm/baths/${baths}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };

  const RoomFilter = (rooms) => {
    axios
      .get(
        `http://localhost:8000/api/v1/rental/filter/shortTerm/rooms/${rooms}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };
  const CategoryFilter = (id) => {
    axios
      .get(
        `http://localhost:8000/api/v1/rental/filter/shortTerm/category/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };
  const PriceFilter = (price) => {
    axios
      .get(
        `http://localhost:8000/api/v1/rental/filter/shortTerm/price/${price}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };
  const Parking = (con) => {
    axios
      .get(
        `http://localhost:8000/api/v1/rental/filter/shortTerm/parking/${con}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };
  const AirCondition = (ac) => {
    axios
      .get(
        `http://localhost:8000/api/v1/rental/filter/shortTerm/airCondition/${ac}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };
  const PetsAllowed = (pets) => {
    axios
      .get(
        `http://localhost:8000/api/v1/rental/filter/shortTerm/pet/${pets}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        router.push("/Login");
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <nav className="flex justify-between px-6 py-3 items-center">
        <h1 className="text-2xl">.HouRent</h1>
        <div className="flex gap-3 border border-gray-200 rounded-xl pl-3 pr-3 py-2">
          <input
            type="text"
            placeholder="Enter the Location"
            className="border-none outline-none text-xl w-96"
          />
          <img
            src="https://img.icons8.com/?size=100&id=112468&format=png&color=000000"
            alt=""
            className="w-10 h-10 p-1 bg-gray-200 rounded-lg"
          />
        </div>
        <div className="flex items-center gap-3">
          <h5 className="text-gray-700 text-xl">advertize</h5>
          <div className="flex border p-1 rounded-xl">
            <img
              src="https://img.icons8.com/?size=100&id=21441&format=png&color=000000"
              alt=""
              className="h-8 w-8"
            />
            <select name="" id="" className="border-none outline-none">
              <option value="">Dashboard</option>
              <option value="">short Term-rental</option>
              <option value="">Long Term-rental</option>
              <option value="">Renting House</option>
              <option value="">My Property</option>
              <option value="">Inbox</option>
            </select>
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
              <Link href="./Inbox" className="text-xl">Inbox</Link>
            </li>
            <li>
              <Link href="./Favorites" className="text-xl">Favorites</Link>
            </li>
          </ul>
        </div>
      <div className="border-t-2 py-4 border-b-2 px-6 gap-4 flex">
        <select
          name=""
          id=""
          className="border border-gray-400 rounded-lg p-2 text-xl"
          value={room}
          onChange={(e) => {
            setroom(e.target.value);
            RoomFilter(e.target.value);
          }}
        >
          <option value="-">Rooms</option>
          <option value="1" onClick={() => RoomFilter(1)}>
            1 Rooms
          </option>
          <option value="2" onClick={() => RoomFilter(2)}>
            2 Rooms
          </option>
          <option value="3" onClick={() => RoomFilter(3)}>
            3+ Rooms{" "}
          </option>
        </select>

        <select
          name=""
          id=""
          className="border border-gray-400 rounded-lg p-2 text-xl"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
            PriceFilter(e.target.value);
          }}
        >
          <option value="-">RATE</option>
          <option value="1000" onClick={() => PriceFilter(800)}>
            800+
          </option>
          <option value="1300" onClick={() => PriceFilter(1300)}>
            1300+
          </option>
          <option value="2000" onClick={() => PriceFilter(2000)}>
            2000+
          </option>
          <option value="2300" onClick={() => PriceFilter(2300)}>
            2300+{" "}
          </option>
        </select>

        <select
          name=""
          id=""
          className="border border-gray-400 rounded-lg p-2 text-xl"
          value={condition}
          onChange={(e) => {
            setcondition(e.target.value);
            CategoryFilter(e.target.value);
          }}
        >
          <option value="-">Type</option>
          <option value="1" onClick={() => CategoryFilter(1)}>
            APARTMENT
          </option>
          <option value="2" onClick={() => CategoryFilter(2)}>
            HOUSE
          </option>
          <option value="4" onClick={() => CategoryFilter(3)}>
            CABIN
          </option>
          <option value="5" onClick={() => CategoryFilter(4)}>
            STUDIO
          </option>
        </select>

        <select
          name=""
          id=""
          className="border border-gray-400 rounded-lg p-2 text-xl"
          value={baths}
          onChange={(e) => {
            setbaths(e.target.value);
            BathFilter(e.target.value);
          }}
        >
          <option value="-">Baths</option>
          <option value="1" onClick={() => BathFilter(1)}>
            1 Baths
          </option>
          <option value="2" onClick={() => BathFilter(2)}>
            2 Baths
          </option>
          <option value="3" onClick={() => BathFilter(3)}>
            2+ Baths{" "}
          </option>
        </select>

        <select
          name=""
          id=""
          className="border border-gray-400 rounded-lg p-2 text-xl"
          value={Pets}
          onChange={(e) => {
            setPets(e.target.value);
            PetsAllowed(e.target.value);
          }}
        >
          <option value="-">Pets</option>
          <option value="1" onClick={() => PetsAllowed(1)}>
            Friendly
          </option>
          <option value="0" onClick={() => PetsAllowed(0)}>
            Not Friently
          </option>
        </select>

        <select
          name=""
          id=""
          className="border border-gray-400 rounded-lg p-2 text-xl"
          value={AC}
          onChange={(e) => {
            setAC(e.target.value);
            AirCondition(e.target.value);
          }}
        >
          <option value="0" onClick={() => AirCondition(0)}>
            Non A/C
          </option>
          <option value="1" onClick={() => AirCondition(1)}>
            A/C
          </option>
        </select>

        <div>
          <h1
            className="border border-gray-400 rounded-lg p-2 text-xl"
            onClick={() => {
              getData();
            }}
          >
            Reset All
          </h1>
        </div>
      </div>
      <div className=" pl-6 flex">
        <div className="w-[78%] py-10">
          <h2 className="text-2xl">Apartments for Rent in San Francisco, CA</h2>
          <h5 className="text-xl text-gray-400">2,148 rentals</h5>
          <div className="">
            <div className="py-8  flex gap-5 flex-wrap">
              {data.map((item) => {
                return (
                  <Link href="./SinglePageShortTerm" key={item.id}>
                    <div
                      className="w-[350px]"
                      onClick={() => {
                        localStorage.setItem("Card-Key", item.id);
                      }}
                    >
                      <div className="h-[188.5px]">
                        <img
                          src={item.cover_img}
                          alt=""
                          className="rounded-lg w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="flex items-center py-3 gap-2">
                          <img
                            src="https://img.icons8.com/?size=100&id=11254&format=png&color=000000"
                            alt=""
                            className="w-6 h-6 "
                          />
                          <h6 className="text-xl">{item.rating} Rating</h6>
                        </div>
                        <div>
                          <h3 className="text-3xl font-sans">
                            {item.house_name}
                          </h3>
                          <h5 className="text-xl text-gray-400 mt-2">
                            {item.address}
                          </h5>
                          <div className="flex gap-1 text-xl mt-2 text-gray-700">
                            <h6>{item.rooms} Beds</h6>
                            <h6>| {item.baths} baths</h6>
                          </div>
                          <h2 className="text-xl text-black my-5">
                            $ {item.rate}{" "}
                            <span className="text-xl text-gray-400">
                              / night
                            </span>
                          </h2>
                          <hr />
                          <h4 className="p-3 rounded-lg text-xl bg-black border border-gray-400 text-white">
                            Check Availability
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[27%] h-[85vh]">
          <div className="w-full h-[80vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773392.078304354!2d61.028322527582525!3d19.69057626482709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1735303704553!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="my-10 p-3 bg-blue-800 rounded-lg">
            <h3 className="text-2xl mb-3">
              Subscribe to our Newsletter for latest updates!!
            </h3>
            <input
              type="text"
              placeholder="enter your email"
              className="p-3 w-full rounded-xl border-gray-400 text-xl"
            />
            <button
              type="button"
              className="my-3 p-3 bg-slate-200 rounded-lg w-full text-xl border border-gray-400"
            >
              submit
            </button>
          </div>
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

export default page;
