"use client";
import Swal from "sweetalert2";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

function page() {
  const token = localStorage.getItem("access-token");
  const [Data, setData] = useState([]);
  const [User, setUser] = useState("");
  const router = useRouter();
  const [HasData , SetHasData] = useState()

  const GetPost = () => {
    axios
      .get(`http://localhost:8000/api/v1/rental/Inbox/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        router.push("/Login");
      });
  };
  const HandleAcceptRequest = (id) => {
    axios
      .post(`http://localhost:8000/api/v1/rental/Inbox/Accept/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        GetPost()
      });
  };
  useEffect(() => {
    GetPost();
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
      <div className="px-16 py-10">
        <h1 className="text-center text-5xl font-serif text-gray-400">
          Inbox Messages
        </h1>
        {Data.map((item) => (
          <div
            className="flex items-center border rounded-lg p-5 gap-5 my-10"
            key={item.id}
            style={{background:item.bg_color
            }}
          >
            <div className="left w-[8%]">
              <img src={item.profile_img} alt="" className="w-20 h-20" />
            </div>
            <div className="right w-[92%]">
              <div className="flex justify-end">
                <h6 className="text-center p-2 bg-orange-300 inline-block rounded-xl text-pink-700">
                  {item.rent_type}
                </h6>
              </div>
              <h3 className="text-xl text-gray-900">{item.from_user}</h3>
              {item.is_accepted ? (
                <p className="text-2xl text-white"><span className="text-black">I am glad to connect you</span> <br></br>{item.content}</p>
              ) : (
                <p className="text-2xl">{item.content}</p>
              )}
              
              <div className="py-2 flex gap-3 ">
                {item.is_accepted ? (
                  <h6 className="bg-black text-xs text-white p-3 rounded-lg w-[100%] text-center">
                    OK
                  </h6>
                ) : (
                  <div className="flex items-center gap-5">
                    <h6
                      className="bg-black text-xs text-white p-3 rounded-lg w-[250px] text-center"
                      onClick={() => {
                        HandleAcceptRequest(item.id);
                      }}
                    >
                      ALLOW
                    </h6>
                    <h6 className="bg-black text-xs text-white p-3 rounded-lg w-[250px] text-center">
                      DISALLOW
                    </h6>
                  </div>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
