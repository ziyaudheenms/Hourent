"use client";
import Link from "next/link";
import React from "react";
import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
function page() {
  const token = localStorage.getItem('access-token')
  const id = localStorage.getItem('Card-Key')
  const[Data ,setData] = useState({})
  const[User ,setUser] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [Name ,SetName] = useState('')
  const [discription ,Setdiscription] = useState('')
  const UserConnectRequest = (id) => {
    axios.post(`http://localhost:8000/api/v1/rental/request/contact/`,{
      fromUser : User,
      type : "ShortTerm",
      ToUser:Data.username
    }).then((res) => {
      console.log(res.data);
      console.log('requested successfully');
      
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      
    }).catch((err) => {
      console.log(token);
      
      console.log(err);
      
    })
  }
  const GetPost = () => {
    axios
    .get(`http://localhost:8000/api/v1/rental/view/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
      // GetSuggestions(res.data.data.username);
      // GetComment();
    })
    .catch((err) =>{
       console.log(err)
      // router.push('/Login');
    });
  }
  const HandleFavorite =(id) => {
    axios.post(`http://localhost:8000/api/v1/rental/shortTerm/Favorite/${id}/`, {
      coverImg:Data.cover_img,
      houseName:Data.house_name,
      address:Data.address,
      rate : Data.rate,
      rating:Data.rating
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
     GetPost()
      
    })
  }
  const GetProfileStatus = () => {
    axios
      .get("http://localhost:8000/api/v1/rental/show/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data.user);
        setUser(res.data.data.user)
      });
  };
  const RequestCheckAvailability = () => {
    axios.post(`http://localhost:8000/api/v1/rental/request/availability/${id}/`,{
      Name:Name,
      From:startDate,
      to:EndDate,
      Disc:discription
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
      console.log('requested successfully');
    }).catch((err) => {
      console.log(token);
      
      console.log(err);
      
    })
  }
  useEffect(() => {
    GetPost()
    console.log(token);
    GetProfileStatus()
    
    
  },[])
  console.log(startDate);
  
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
              <Link href="" className="text-xl">Favorites</Link>
            </li>
          </ul>
        </div>
   
      <div className="border-t-2 px-10 py-3 flex justify-between">
        <div>
          <h4 className="text-xl font-sans bg-gray-200 border border-gray-400 p-2 rounded-lg">
          {Data.category} for rent 
          </h4>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <img
              src="https://img.icons8.com/?size=100&id=10034&format=png&color=000000"
              alt=""
              className="w-8 h-8"
            />
            <h1 className="text-xl text-gray-400">{Data.created_on}</h1>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="https://img.icons8.com/?size=100&id=10287&format=png&color=000000"
              alt=""
              className="w-8 h-8"
            />
            {
              Data.is_favorite ? (
                <h1 className="text-xl text-gray-400" onClick={() => {
                  HandleFavorite(Data.id)
                }}>Remove From Favorite</h1>
              ) : (
                <h1 className="text-xl text-gray-400" onClick={() => {
                  HandleFavorite(Data.id)
                }}>Add To Favorite</h1>
              )
            }
           
          </div>
        </div>
      </div>
      <div className="px-10 py-3 flex justify-between items-center border-b-2">
        <div>
          <h1 className="text-6xl font-serif mb-2">{Data.house_name}</h1>
          <h5 className="text-xl text-gray-400">
            {Data.address}
          </h5>
        </div>
        <div className="flex gap-10 items-center">
          <div>
            <h5 className="text-2xl">Rent/night</h5>
            <h6 className="text-gray-400 text-xl text-center">${Data.rate}</h6>
          </div>
          <div>
            <h5 className="text-2xl">Baths</h5>
            <h6 className="text-gray-400 text-xl text-center">{Data.baths}</h6>
          </div>
          <div>
            <h5 className="text-2xl">Rooms</h5>
            <h6 className="text-gray-400 text-xl text-center">{Data.rooms}</h6>
          </div>
          <div>
            <h5 className="text-2xl">sqrt</h5>
            <h6 className="text-gray-400 text-xl text-center">{Data.sqrt_feet}</h6>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-[72%]">
          <div className="flex flex-wrap gap-2 my-5 px-8">
            <img
              src={Data.subImg1}
              alt=""
              className="w-[58%] h-[400px]"
            />
            <img
src={Data.subImg2}              alt=""
              className="w-[38%] h-[400px]"
            />
            <img
src={Data.subImg3}              alt=""
              className="w-[32%] h-[200px]"
            />
            <img
src={Data.subImg4}              alt=""
              className="w-[32%] h-[200px]"
            />
            <img
src={Data.subImg5}              alt=""
              className="w-[31%] h-[200px]"
            />
            <img
src={Data.subImg6}              alt=""
              className="w-[28%] h-[300px]"
            />
            <img
src={Data.subImg7}              alt=""
              className="w-[28%] h-[300px]"
            />
            <img
src={Data.subImg1}              alt=""
              className="w-[39%] h-[300px]"
            />
            <img
src={Data.subImg4}              alt=""
              className="w-[48%] h-[500px]"
            />
            <img
src={Data.subImg2}              alt=""
              className="w-[48%] h-[500px]"
            />
          </div>
          <div className="px-8 my-10">
            <h1 className="text-4xl  font-serif my-5">
              About {Data.house_name}
            </h1>
            <p className="text-xl text-gray-600">
              {Data.detail_disc}
            </p>
            <div className="border border-gray-400 p-5 rounded-lg w-[38%] my-10">
              <h3 className="text-2xl mb-5">Address details</h3>
              <div className="flex items-center gap-4 justify-between border-b-2 border-gray-300 pb-3 my-5">
                <h3 className="text-xl">Pin Code:</h3>
                <h4>{Data.pincode}</h4>
              </div>
              <div className="flex items-center gap-2 justify-between  border-b-2 border-gray-300 pb-3">
                <h3 className="text-xl">PostOffice:</h3>
                <h4>{Data.postoffice}</h4>
              </div>
            </div>
            <div>
              <h1 className="text-2xl  font-serif my-5">
                Amenities for {Data.house_name} , {Data.address}
              </h1>
              <div className="w-full flex justify-center">
                <div className="w-[100%] p-4 border border-gray-400 rounded-lg my-4">
                  <div className="flex justify-between my-6 p-4 border border-gray-400 rounded-lg items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="https://img.icons8.com/?size=100&id=32782&format=png&color=000000"
                        alt=""
                        className="w-10 h-10"
                      />
                      <h3 className="text-xl">Air Conditioned</h3>
                    </div>
                    {Data.aircondition?(
                      <h6 className="text-xl">Yes</h6>
                    ):(
                      <h6 className="text-xl">No</h6>
                    )}
                    
                  </div>
                  <div className="flex justify-between my-6 p-4 border border-gray-400 rounded-lg items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="https://img.icons8.com/?size=100&id=106513&format=png&color=000000"
                        alt=""
                        className="w-10 h-10"
                      />
                      <h3 className="text-xl">Pet Allowed</h3>
                    </div>

                    {Data.Pet_Allowed?(
                      <h6 className="text-xl">Yes</h6>
                    ):(
                      <h6 className="text-xl">No</h6>
                    )}
                  </div>
                  <div className="flex justify-between my-6 p-4 border border-gray-400 rounded-lg items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="https://img.icons8.com/?size=100&id=10738&format=png&color=000000"
                        alt=""
                        className="w-10 h-10"
                      />
                      <h3 className="text-xl">Parking Facility</h3>
                    </div>

                    {Data.aircondition?(
                      <h6 className="text-xl">Yes</h6>
                    ):(
                      <h6 className="text-xl">No</h6>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%] py-6 ">
          <div className="border-b-2">
            <h3 className="text-3xl  font-serif mb-3">Location</h3>

            <Link
              href={`${Data.google_location}`}
              target="_blank"
            >
             
              <img src="./img.png" alt="" className="h-56 w-80 rounded-lg" />
            </Link>
            <h5 className="text-xl text-black font-semibold my-3">
              {Data.address}
            </h5>
          </div>
          <div className="py-16 border-b-2">
            <h3 className="text-3xl  font-serif mb-3">Chat with the Dealer</h3>
            <div className="flex items-center gap-4 border border-gray-400 p-3 rounded-lg my-5">
              <div>
                <img
                  src={Data.profile_img}
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div>
                <h4 className="text-2xl">{Data.username}</h4>
              </div>
            </div>
            <h3 className="p-2 rounded-lg bg-gray-200 border border-gray-400 text-center text-2xl" onClick={() => {
              UserConnectRequest(Data.id)
            }}>
              Chat
            </h3>
          </div>
          <div className="py-6 my-10">
            <form
              action=""
              className="border border-gray-400 py-10 px-3 rounded-lg"
            >
              <h1 className="text-3xl  font-serif text-center">
                check availability
              </h1>
              <div className="my-4">
                <input
                  type="text"
                  name=""
                  id=""
                  value={Name}
                  placeholder="Enter Your Name"
                  className="p-3 rounded-lg border border-gray-400 w-full text-xl"
                  onChange={(e) => SetName(e.target.value)}
                />
              </div>
              <div>
                <h5 className="text-xl mb-3 text-gray-400">
                  Enter the day you want to check in
                </h5>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="p-3 border border-gray-400 rounded-lg w-[350px]"
                  
                  

                />
              </div>
              <div>
                <h5 className="text-xl mb-3 text-gray-400">
                  Enter the day you want to check out
                </h5>
                <DatePicker
                  selected={EndDate}
                  onChange={(date) => setEndDate(date)}
                  className="p-3 border border-gray-400 rounded-lg w-[350px]"
                />
              </div>
              <div className="my-4">
                <textarea
                  type="text"
                  name=""
                  id=""
                  placeholder="discribe your any conditions"
                  className="p-3 rounded-lg border border-gray-400 w-full text-xl"
                  value={discription}
                  onChange={(e) => Setdiscription(e.target.value) }
                />
              </div>
              <div className="my-4">
                <h2 className="p-3 rounded-lg border border-gray-400 w-full text-xl text-center bg-gray-200" onClick={() => RequestCheckAvailability()}>
                  SUBMIT
                </h2>
              </div>
              <div>
                <p>
                  By sending this inquiry, I accept HouRent's Terms and
                  Conditions, Privacy Policy, and Community Values.
                </p>
              </div>
            </form>
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
