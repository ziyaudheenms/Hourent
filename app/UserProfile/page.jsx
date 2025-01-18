"use client"
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

function page() {
  const [Phone , SetPhone] = useState('')
  const [whatsApp , SetwhatsApp] = useState('')
  const [Profile , SetProfile] = useState(null)
  const [Insta , SetInsta] = useState('')
  const [Facebook , SetFacebook] = useState('')
  const router = useRouter();
  const token = localStorage.getItem('access-token')
  
  
  // const handleSubmit = () => {
  //   axios.post("http://localhost:8000/api/v1/rental/create/profile/", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   },{
  //     phone_number:Phone,
  //     whatsapp_number:whatsApp,
  //     facebook:Facebook,
  //     insta : Insta,
  //     img:Profile
  //   }).then((res) => {
  //     console.log(res.data);
  //     if (res.data.status_code == 5000) {
  //       alert(res.data.message)
  //     } else {
  //       alert("oops!you already have a profile")
  //     }
      
  //   }).catch((err) => {
  //     console.log(err);
      
  //   })
  // }
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('img', Profile);
      formData.append('phone_number' ,Phone )
      formData.append('whatsapp_number' ,whatsApp )
      formData.append('facebook' ,Facebook )
      formData.append('insta' ,Insta )
      await axios.post("http://localhost:8000/api/v1/rental/create/profile/", formData ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        alert('successfully created Profile ...')
        router.push('/ShortTerm')
      }).catch((err) => {
        console.log(err);
        router.push('/Login')
        
      });  

     
     
      
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <div className="h-screen flex justify-around items-center">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="w-96 h-96"
        />
      </div>
      <div>
        <form action="" className="border border-gray-400 p-10 rounded-2xl">
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              Phone Number :
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              maxLength={20}
              value={Phone}
              onChange={(e) => SetPhone(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              WhatsApp Num:
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              maxLength={20}
              value={whatsApp}
              onChange={(e) => SetwhatsApp(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
               Profile pictures:
            </label>
            <input
              type="file"
              placeholder="your profile photo"
              required
              accept="image/*"
              maxLength={20}
              onChange={(e) => SetProfile(e.target.files[0])}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              Instagram acc ID :
            </label>
            <input
              type="text"
              placeholder="insta id"
              required
              maxLength={8}
              value={Insta}
              onChange={(e) => SetInsta(e.target.value)}
              id="UserName"
              className="text-xl border p-3 rounded-lg border-gray-400"
            />
          </div>
          <div className="flex  gap-2 mb-6">
            <label htmlFor="UserName" className="text-2xl">
              Facebook acc ID :
            </label>
            <input
              type="text"
              placeholder="facebook id"
              required
              maxLength={8}
              value={Facebook}
              onChange={(e) => SetFacebook(e.target.value)}
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
