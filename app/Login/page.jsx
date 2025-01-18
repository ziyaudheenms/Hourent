"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
function page() {
  const [userName, SetuserName] = useState("");
  const [password, Setpassword] = useState("");
  const token = localStorage.getItem("access-token");
  const router = useRouter();
 

  const HandleUserLogin = () => {
    axios
      .post("http://localhost:8000/api/v1/auth/api/token/", {
        username: userName,
        password: password,
      })
      .then((res) => {
        console.log(res.data.access);
        localStorage.setItem("access-token", res.data.access);
        router.push('/Login')
        GetProfileStatus();
      })
      .catch((err) => {
        console.log(err.data);
        alert("No active account found with the given credentials");
      });
  };
  const GetProfileStatus = () => {
    axios
      .get("http://localhost:8000/api/v1/rental/show/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status_code == 5001) {
          router.push("/UserProfile")
        } else {
          router.push("/ShortTerm")
        }
      });
  };

  return (
    <div className="h-screen flex justify-around items-center">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.I1Wr4Rg6UGf_6YiW4BOlRAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="w-96 h-96"
        />
      </div>
      <div>
        <form action="" className="border border-gray-400 p-10 rounded-2xl">
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="UserName" className="text-2xl">
              UserName
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              maxLength={20}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
              value={userName}
              onChange={(e) => SetuserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="UserName" className="text-2xl">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              maxLength={8}
              id="UserName"
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2 my-7">
            <label htmlFor="UserName" className="text-xl">
              First to HouRent Create A account First{" "}
              <Link href="./SignUp" className="text-blue-900">
                Here
              </Link>
            </label>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <h2
              onClick={HandleUserLogin}
              className="p-3 bg-gray-200 border border-gray-400 rounded-lg text-center text-xl font-sans"
            >
              Login
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
