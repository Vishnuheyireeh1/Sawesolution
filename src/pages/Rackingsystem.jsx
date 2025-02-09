import React,{useEffect} from 'react'
import aimage1 from '../assets/rackingsystem0.jpg'
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rackingsystem from '../assets/rackingsystem1.jpg'


const Rackingsystem = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);


     const navigate = useNavigate();
    
        const handleHome = () => {
          navigate('/');
        };

  return (
    <div>
      {/* first part */}
      <div data-aos="fade-in" className="w-full mt-20 h-[600px]">
        <div className="relative">
          <div data-aos="fade-right" className="absolute border-l-4  border-customRed h-40 mx-28 mt-40"></div>
          <h1 data-aos="fade-right" className="absolute text-white text-6xl font-bold mx-36 mt-44">
            Racking<span className="text-customRed"> System</span>
          </h1>
          <h2
          data-aos="fade-right"
            onClick={handleHome}
            className="absolute text-customRed text-xl font-bold mx-36 mt-64 cursor-pointer"
          >
            Home
          </h2>
          <h2
          data-aos="fade-right"
            onClick={handleHome}
            className="absolute text-white text-xl  mx-52 mt-64 cursor-pointer"
          >
            &#8594;
          </h2>
          <h2 data-aos="fade-right" className="absolute text-white text-xl font-bold mx-60 mt-64 cursor-pointer">
            Racking System
          </h2>
          <img className="w-[100%] h-[600px] object-cover" src={aimage1} alt="" />
          <div className="absolute inset-0 "></div>

        </div>
      </div>
        {/* second part */}
      <div data-aos="fade-left" className=" bg-white w-full h-auto">
        <div className="mt-20">
          <h2 className="font-bold text-xl underline ml-24">Racking System</h2>
          <p className="ml-24 mt-10 mr-7">
            We provide a comprehensive range of
            <span className="font-extrabold underline">
              {" "}
              Storage Solutions{" "}
            </span>
            designed to optimize space and improve the efficiency of your
            operations. Our product offerings include a variety of innovative
            racking systems tailored to meet your specific needs.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4 p-4">
          {/* First Part - Image */}
          <div className="w-full lg:w-6/12 flex items-center justify-center mt-6">
            <img
            data-aos="fade-right"
              src={rackingsystem}
              alt="Sample"
              className="object-cover shadow-lg w-[600px] ml-16"
            />
          </div>

          {/* Second Part - Content with Points */}
          <div className="w-full lg:w-6/12 flex flex-col mt-4">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Highlights
            </h2> */}
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>
                Our Selective Pallet Racking allows for easy access to
                individual pallets,
              </li>
              <li>
                While our Drive-In Racking maximizes storage capacity by
                enabling high-density storage.
              </li>
              <li>
                The Shuttle Pallet Racking system enhances storage efficiency
                and allows quick access for high-volume operations. For smaller
                items,
              </li>
              <li>
                Our Bin Storage System offers a neat and organized solution.
              </li>
            </ul>
            <h2 className="mt-6">
              All our systems are designed for durability, ease of use, and
              safety, ensuring your operations run smoothly.
            </h2>
          </div>
        </div>
      </div>



        {/* 3rd part */}
      <div class="flex flex-col items-center mt-20 relative">
  {/* <!-- Center Line --> */}
  <div class="absolute w-1 bg-gray-400 h-full"></div>

  {/* <!-- Item 1 --> */}
  <div class="flex flex-row-reverse items-center w-full max-w-4xl my-8">
    <div data-aos="fade-left" class="relative group w-1/2 h-40 bg-white rounded-md shadow-lg shadow-green-500 flex justify-center items-center transition-all duration-300 left-8">
      <div className='h-[150px] p-1'>
        <h2 class="text-lg font-bold underline">Selective Pallet Racking</h2>
        <p className='text-gray-800'>The most versatile and widely used racking system, selective pallet racking offers direct access to each pallet, making it ideal for warehouses with varied inventory. It’s compatible with most handling equipment and ensures efficient stock rotation with FIFO (First-In, First-Out) methodology.</p>
      </div>
      <div class="absolute hidden group-hover:flex w-[350px] h-[180px] bg-gray-900 text-white rounded-md  transition-all duration-300 ml-[-900px] p-3">
        <div className='h-[150px] p-4'>
          <h2 class="text-lg font-bold underline">Key Features:</h2>
          <ul className="list-disc text-white ">
            <li>Adjustable beam levels for varying pallet heights. 
            </li>
            <li>Easy installation and reconfiguration. 
            </li>
            <li>Suitable for a wide range of pallet sizes. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Item 2 --> */}
  <div data-aos="fade-right" class="flex flex-row items-center w-full max-w-4xl my-8">
    <div class="relative group w-1/2 h-40 bg-white rounded-md shadow-lg shadow-green-500 flex justify-center items-center transition-all duration-300 right-8">
      <div className='h-[150px] p-1'>
        <h2 class="text-lg font-bold underline">Drive-In Racking</h2>
        <p className='text-gray-800'>Maximize storage density with our drive-in racking system, designed for storing large quantities of homogeneous products. This system allows forklifts to drive directly into the lanes, enabling high-density storage with LIFO (Last-In, First-Out) methodology.
        </p>
      </div>
      <div class="absolute hidden group-hover:flex w-[350px] h-[180px] bg-gray-900 text-white rounded-md transition-all duration-300 ml-[900px]">
      <div className='h-[150px] p-6'>
          <h2 class="text-lg font-bold underline">Key Features:</h2>
          <ul className="list-disc text-white ">
            <li>Ideal for bulk storage of non-perishable items.  
            </li>
            <li>Eliminates the need for multiple aisles.  
            </li>
            <li>High-density storage within a compact space.  
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Item 3 --> */}
  <div data-aos="fade-left" class="flex flex-row-reverse items-center w-full max-w-4xl my-8">
    <div class="relative group w-1/2 h-40 bg-white rounded-md shadow-lg shadow-green-500 flex justify-center items-center transition-all duration-300 left-8">
      <div className='h-[150px] p-1'>
        <h2 class="text-lg font-bold underline">Shuttle Pallet Racking</h2>
        <p className='text-gray-800'>Enhance efficiency with our shuttle pallet racking system, a semi-automated solution that uses a remote-controlled shuttle to move pallets within the racking structure. This system reduces forklift travel time and increases productivity.</p>
      </div>
      <div class="absolute hidden group-hover:flex w-[350px] h-[180px] bg-gray-900 text-white rounded-md transition-all duration-300 ml-[-900px] p-3">
        <div className='h-[150px] p-3'>
          <h2 class="text-lg font-bold underline">Key Features:</h2>
          <ul className="list-disc text-white ">
            <li>Optimized space utilization and faster operations.  
            </li>
            <li>Reduced labor and forklift movement 
            </li>
            <li>Supports both FIFO and LIFO inventory methods. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Item 4 --> */}
  <div data-aos="fade-right" class="flex flex-row items-center w-full max-w-4xl my-8">
    <div class="relative group w-1/2 h-40 bg-white rounded-md shadow-lg shadow-green-500 flex justify-center items-center transition-all duration-300 right-8">
      <div className='h-[150px] p-1'>
        <h2 class="text-lg font-bold underline">Bin Storage System</h2>
        <p className='text-gray-800'>Designed for small to medium-sized inventory, our bin storage systems are perfect for organizing parts, components, and items. These systems are modular and customizable to suit your specific requirements.
        </p>
      </div>
      <div class="absolute hidden group-hover:flex w-[350px] h-[180px] bg-gray-900 text-white rounded-md shadow-lg transition-all duration-300 ml-[900px]">
      <div className='h-[150px] p-6 mt-2'>
          <h2 class="text-lg font-bold underline">Key Features:</h2>
          <ul className="list-disc text-white ">
            <li>Durable and lightweight construction. 
            </li>
            <li>Easily configurable bins and shelves.  
            </li>
            <li>Ideal for manual picking operations.  
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  {/* <!-- Item 5 --> */}
  <div data-aos="fade-left" class="flex flex-row-reverse items-center w-full max-w-4xl my-8">
    <div class="relative group w-1/2 h-40 bg-white rounded-md shadow-lg shadow-green-500 flex justify-center items-center transition-all duration-300 left-8">
      <div className='h-[150px] p-1'>
        <h2 class="text-lg font-bold underline">Pallet Flow System</h2>
        <p className='text-gray-800'>Maximize storage efficiency with our pallet flow system, which utilizes inclined rollers for automatic pallet movement. This system ensures smooth and continuous stock rotation, adhering to the FIFO inventory method. </p>
      </div>
      <div class="absolute hidden group-hover:flex w-[350px] h-[180px] bg-gray-900 text-white rounded-md shadow-lg  transition-all duration-300 ml-[-900px] p-3">
        <div className='h-[150px] p-4'>
          <h2 class="text-lg font-bold underline">Key Features:</h2>
          <ul className="list-disc text-white ">
            <li>Gravity-driven for energy efficiency.  
            </li>
            <li>Continuous flow of goods for quick picking.  
            </li>
            <li>Reduced handling time and costs.  
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Item 6 --> */}
  <div data-aos="fade-right" class="flex flex-row items-center w-full max-w-4xl my-8">
    <div class="relative group w-1/2 h-40 bg-white rounded-md shadow-lg shadow-green-500 flex justify-center items-center transition-all duration-300 right-8">
      <div className='h-[150px] p-1'>
        <h2 class="text-lg font-bold underline">Mezzanine System</h2>
        <p className='text-gray-800'>Expand your usable floor space without the need for building extensions. Our mezzanine systems are cost-effective, customizable, and designed to increase storage capacity vertically.
        </p>
      </div>
      <div class="absolute hidden group-hover:flex w-[350px] h-[180px] bg-gray-900 text-white rounded-md shadow-lg transition-all duration-300 ml-[900px]">
      <div className='h-[150px] ml-6 mt-9'>
          <h2 class="text-lg font-bold underline">Key Features:</h2>
          <ul className="list-disc text-white ">
            <li>Modular construction for flexibility. 
            </li>
            <li>Durable platforms to handle heavy loads.  
            </li>
            <li>Easy integration with other storage systems.  
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  {/* <!-- Item 7 --> */}
  <div data-aos="fade-left" class="flex flex-row-reverse items-center w-full max-w-4xl my-8">
    <div class="relative group w-1/2 h-40 bg-white rounded-md shadow-lg shadow-green-500 flex justify-center items-center transition-all duration-300 left-8">
      <div className='h-[150px] p-1'>
        <h2 class="text-lg font-bold underline">Multi-Tier Storage System</h2>
        <p className='text-gray-800'>Our multi-tier storage system is an advanced solution for high-volume storage needs. With multiple levels of shelving, it provides excellent storage density and efficient use of vertical space.
        </p>
      </div>
      <div class="absolute hidden group-hover:flex w-[350px] h-[180px] bg-gray-900 text-white rounded-md shadow-lg  transition-all duration-300 ml-[-900px] p-2">
        <div className='h-[150px] p-4'>
          <h2 class="text-lg font-bold underline">Key Features:</h2>
          <ul className="list-disc text-white ">
            <li>Ideal for storing small to medium-sized items.  
            </li>
            <li>Integrated staircases and walkways for accessibility.  
            </li>
            <li>Customizable levels to suit your needs.  
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Rackingsystem