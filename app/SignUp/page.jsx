"use client"
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
function page() {
  const [Username , SetUsername] = useState('')
  const [FirstName , SetFirstName] = useState('')
  const [LastName , SetLastName] = useState('')
  const [Email , SetEmail] = useState('')
  const [Password , SetPassword] = useState('')

  const handleSubmit = () => {
    axios.post("http://localhost:8000/api/v1/auth/create/user/" , {
      email:Email,
      username:Username,
      first_name:FirstName,
      last_name : LastName,
      password:Password
    }).then((res) => {
      console.log(res.data);
      if (res.data.status_code == 5000) {
        alert(res.data.message)
      } else {
        alert("oops!user with this username and password exists")
      }
      
    }).catch((err) => {
      console.log(err.data);
      
    })
  }

  return (
    <div className="h-screen flex justify-around items-center">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.Eqjfuq9zqiJmx5wmSyjwbQAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="w-96 h-96"
        />
      </div>
      <div>
        <form action="" className="border border-gray-400 p-10 rounded-2xl">
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              UserName :
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              maxLength={20}
              value={Username}
              onChange={(e) => SetUsername(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              FirstName :
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              maxLength={20}
              value={FirstName}
              onChange={(e) => SetFirstName(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              LastName :
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              maxLength={20}
              value={LastName}
              onChange={(e) => SetLastName(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              Email Add :
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              maxLength={20}
              value={Email}
              onChange={(e) => SetEmail(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              Password :
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              maxLength={8}
              value={Password}
              onChange={(e) => SetPassword(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <h2 onClick={handleSubmit} className="p-3 bg-gray-200 border border-gray-400 rounded-lg text-center text-xl font-sans">
              SignUp
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
