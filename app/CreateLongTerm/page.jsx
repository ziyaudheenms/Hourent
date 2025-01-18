"use client"
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState,useEffect } from "react";
function page() { 
  const [HouseName, setHouseName] = useState("");
  const [Address, setAddress] = useState("");
  const [Cover_img, setCover_img] = useState("");
  const [Baths, setBaths] = useState("");
  const [Rooms, setRooms] = useState("");
  const [Rate, setRate] = useState("");
  const [GoogleMap, setGoogleMap] = useState("");
  const [sqrt, setsqrt] = useState("");
  const [discription, setdiscription] = useState("");
  const [pincode, setpincode] = useState("");
  const [postOffice, setpostOffice] = useState("");
  const [Petsallowed, setPetsallowed] = useState("");
  const [subImg1, setsubImg1] = useState("");
  const [subImg2, setsubImg2] = useState("");
  const [subImg3, setsubImg3] = useState("");
  const [subImg4, setsubImg4] = useState("");
  const [subImg5, setsubImg5] = useState("");
  const [subImg6, setsubImg6] = useState("");
  const [subImg7, setsubImg7] = useState("");
  const [Aircondition, setAircondition] = useState("");
  const [parking, setparking] = useState("");
  const [Category, setCategory] = useState("");
  const token = localStorage.getItem("access-token");
  const HandleSubmitEvent = async () => {
    if (Petsallowed ==="Yes") {
      setPetsallowed("True")
      
    } else {
      setPetsallowed("False")
    }

    if (Aircondition ==="Yes") {
      setAircondition("True")
      
    } else {
      setAircondition("False")
    }

    if (parking ==="Yes") {
      setparking("True")
      
    } else {
      setparking("False")
    }
    try {
      const formData = new FormData();
      formData.append("HouseName", HouseName);
      formData.append("Address", Address);
      formData.append("CoverImg", Cover_img);
      formData.append("Baths", Baths);
      formData.append("Rooms", Rooms);
      formData.append("Rate", Rate);
      formData.append("GoogleMap", GoogleMap);
      formData.append("Sqrt", sqrt);
      formData.append("Disc", discription);
      formData.append("Pincode", pincode);
      formData.append("PostOffice", postOffice);
      formData.append("Petsallowed", Petsallowed);
      formData.append("subImg1", subImg1);
      formData.append("subImg2", subImg2);
      formData.append("subImg3", subImg3);
      formData.append("subImg4", subImg4);  
      formData.append("subImg5", subImg5);  
      formData.append("subImg6", subImg6);
      formData.append("subImg7", subImg7);  
      formData.append("Aircondition", Aircondition);
      formData.append("Parking", parking);
      formData.append("category", Category);
      await axios.post("http://localhost:8000/api/v1/rental/create/LongTerm/rental/", formData ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });  

      alert('successfully created blog ...')
      // router.push("/dashboard");
      
  } catch (error) {
      console.log(error);
  }
  }
  return (
    <div className="p-6 bg-[url('https://www.mymove.com/wp-content/uploads/2020/06/shutterstock_681206860.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <h1 className="text-5xl text-center font-bold ">
        CREATE YOUR LONG TERM RENT
      </h1>
      <form
        action=""
        method="post"
        className="w-[80%] mx-auto my-10 border border-gray-400 rounded-lg p-5 "
      >
        <div className="my-3">
          <h3 className="text-2xl">House Name</h3>
          <input
            type="text"
            placeholder="Enter the house name"
            className="border border-gray-800 w-[100%] rounded-sm p-3 my-2"
            value={HouseName}
            onChange={(e) => setHouseName(e.target.value)}
          />
        </div>
        <div className="my-3">
          <h3 className="text-2xl">Address</h3>
          <textarea
            type="text"
            placeholder="Enter the address"
            className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="my-3">
          <h3 className="text-2xl ">Cover Img</h3>
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
            onChange={(e) => setCover_img(e.target.files[0])}
          />
        </div>
        <div className="flex gap-4 my-3">
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">Baths</h3>
            <input
              type="number"
              placeholder="Enter the no of rooms"
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={Baths}
              onChange={(e) => setBaths(e.target.value)}
            />
          </div>
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">rooms</h3>
            <input
              type="number"
              placeholder="Enter the no of baths"
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={Rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 my-3">
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">rate</h3>
            <input
              type="number"
              placeholder="Enter the no of rooms"
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={Rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">Goole location</h3>
            <input
              type="text"
              placeholder="paste the google location"
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={GoogleMap}
              onChange={(e) => setGoogleMap(e.target.value)}
            />
          </div>
        </div>
        <div className="my-3">
          <h3 className="text-2xl">sqrt feet</h3>
          <input
            type="number"
            placeholder="Enter the square feet"
            className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
            value={sqrt}
            onChange={(e) => setsqrt(e.target.value)}
          />
        </div>
        <div className="my-3">
          <h3 className="text-2xl">Discriptions</h3>
          <textarea
            type="text"
            placeholder="Enter the discription"
            className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
            value={discription}
            onChange={(e) => setdiscription(e.target.value)}
          />
        </div>
        <div className="flex gap-4 my-3">
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">pin code</h3>
            <input
              type="number"
              placeholder="Enter the pincode"
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={
                pincode
              }
              onChange={(e) => setpincode(e.target.value)}
            />
          </div>
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">post office</h3>
            <input
              type="text"
              placeholder="Enter the post office"
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "

              value={postOffice}
              onChange={(e) => setpostOffice(e.target.value)}
            />
          </div>
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">Pets Allowed</h3>
            <select
              name=""
              id=""
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={Petsallowed}
              onChange={(e) => setPetsallowed(e.target.value)}
            >
              <option value="null">.....</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">Parking Facility</h3>
            <select
              name=""
              id=""
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={parking}
              onChange={(e) => setparking(e.target.value)}
            >
              <option value="null">.....</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>
          <div className="my-3 w-[48%]">
            <h3 className="text-2xl">Air condition</h3>
            <select
              name=""
              id=""
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={Aircondition}
              onChange={(e) => setAircondition(e.target.value)}
            >
              <option value="null">.....</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>

        </div>
        <div className="my-3 w-[100%]">
            <h3 className="text-2xl">Category</h3>
            <select
              name=""
              id=""
              className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="null">.....</option>
              <option value="House">House</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
        <h3 className="my-3 text-2xl">Click Images from various angles</h3>
        <div className="flex flex-wrap gap-3">
           
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[32%] rounded-sm p-3 my-2 "
            onChange={(e) => setsubImg1(e.target.files[0])}
          />
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[32%] rounded-sm p-3 my-2 "
            onChange={(e) => setsubImg2(e.target.files[0])}
          />
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[32%] rounded-sm p-3 my-2 "
            onChange={(e) => setsubImg3(e.target.files[0])}

          />
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[32%] rounded-sm p-3 my-2 "
            onChange={(e) => setsubImg4(e.target.files[0])}

          />
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[32%] rounded-sm p-3 my-2 "
            onChange={(e) => setsubImg5(e.target.files[0])}

          />
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[32%] rounded-sm p-3 my-2 "
            onChange={(e) => setsubImg6(e.target.files[0])}

          />
          <input
            type="file"
            accept="image/*"
            placeholder="pick the image"
            className="border border-gray-800 w-[100%] rounded-sm p-3 my-2 "
            onChange={(e) => setsubImg7(e.target.files[0])}

          />
        </div>
        <p className="text-center my-3 text-blue-600 bg-green-200 p-3 rounded-lg">
        By submitting this form, I accept HouRent's Terms and
        Conditions, Privacy Policy, and Community Values.</p>
      </form>
      <div>
        <h1 className="w-[80%] mx-auto text-center  rounded-lg p-5 border bg-green-400  text-2xl  " onClick={() => HandleSubmitEvent()}>POST THE HOUSE</h1>
      </div>
    </div>
  );
}

export default page;
