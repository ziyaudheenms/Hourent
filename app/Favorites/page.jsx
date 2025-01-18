"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

function page() {
  const [ShortTermdata, setShortTermdata] = useState([]);
  const [Show, setShow] = useState(false);
  const [ShowLongTerm, setShowLongTerm] = useState(false);
  const [LongTermData, setLongTermData] = useState([]);
  const token = localStorage.getItem("access-token");
  const router = useRouter();

  const getShortData = () => {
    axios
      .get("http://localhost:8000/api/v1/rental/shortTerm/Favorites/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setShortTermdata(res.data.data);
        if (res.data.status_code == 5000) {
          setShow(true);
        } else {
          setShow(false);
        }
      })
      .catch((err) => {
        // router.push("/Login");
      });
  };

  const getLongData = () => {
    axios
      .get("http://localhost:8000/api/v1/rental/LongTerms/Favorites/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLongTermData(res.data.data);
        if (res.data.status_code == 5000) {
          setShowLongTerm(true);
        } else {
          setShowLongTerm(false);
        }
      })
      .catch((err) => {
        // router.push("/Login");
      });
  };

  useEffect(() => {
    getShortData();
    getLongData()
  }, []);

  return (
    <div>
      <nav className="flex justify-between px-16 py-3 items-center ">
        <h1 className="text-2xl">.HouRent</h1>
        <div className="flex items-center gap-3">
          <h5 className="text-gray-700 text-xl">advertize</h5>
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
            <Link href="./ShortTerm" className="text-xl">
              Short Term
            </Link>
          </li>
          <li>
            <Link href="./LongTerm" className="text-xl">
              Long Term
            </Link>
          </li>
          <li>
            <Link href="./MyProperty" className="text-xl">
              My Property
            </Link>
          </li>
          <li>
            <Link href="" className="text-xl">
              Inbox
            </Link>
          </li>
          <li>
            <Link href="" className="text-xl">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-15">
        <h1 className="text-center text-4xl font-serif my-10">
          Mark down your Favorite houses
        </h1>
      </div>

      <div className="flex">
        <div className=" w-[50%] p-2">
          <h2 className="text-3xl p-5 text-center font-serif  rounded-lg border-2 border-gray-400">
            Short Term Rentals
          </h2>
          <div className="px-16 py-10 flex flex-wrap gap-3 justify-center">
          {Show ? (
              ShortTermdata.map((item) => {
                return (
                  <Link href="/SinglePageShortTerm" key={item.id}>
                  <div
                    className="w-[350px] border-2 p-2 rounded-lg"
                    key={item.id}
                    onClick={() => {
                      localStorage.setItem("Card-Key", item.shortTerm);
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
                          <span className="text-xl text-gray-400">/ night</span>
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
              })
            ) : (
              <div>
                <h1 className="text-4xl my-10 text-gray-400">
                  YOU HAVE NO SHORT TERM PROPERTY
                </h1>
                <h4 className="p-3 rounded-lg text-xl bg-black border border-gray-400 text-center text-white my-3 flex items-center gap-2 w-[40%] mx-auto">
                  <img
                    src="https://img.icons8.com/?size=100&id=12082&format=png&color=000000"
                    alt=""
                    className="w-8 h-8"
                  />
                  CREATE ONE NOW
                </h4>
              </div>
            )}
          </div>
        </div>
        <div className="w-[50%] p-2">
          <h2 className="text-3xl p-5 text-center font-serif rounded-lg border-2 border-gray-400">
            Long Term Rentals
          </h2>
          <div className="px-16 py-10 flex flex-wrap gap-3 justify-center">
          {ShowLongTerm ? (
              LongTermData.map((item) => {
                return (
                  <Link href="/SinglePageShortTerm" key={item.id}>
                  <div
                    className="w-[350px] border-2 p-2 rounded-lg"
                    key={item.id}
                    onClick={() => {
                      localStorage.setItem("Card-Key-Long-Term", item.LongTerm);
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
              })
            ) : (
              <div>
                <h1 className="text-4xl my-10 text-gray-400">
                  YOU HAVE NO LONG TERM PROPERTY
                </h1>
                <h4 className="p-3 rounded-lg text-xl bg-black border border-gray-400 text-center text-white my-3 flex items-center gap-2 w-[40%] mx-auto">
                  <img
                    src="https://img.icons8.com/?size=100&id=12082&format=png&color=000000"
                    alt=""
                    className="w-8 h-8"
                  />
                  CREATE ONE NOW
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
