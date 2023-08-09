import Image from 'next/image'
import img from '../assets/java.png'
export default function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="flex justify-evenly items-center h-16 mx-36">
          <h1>Kepler</h1>
          <ul className="flex justify-center items-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Exam Assesment</li>
            <li>Study Overseas</li>
          </ul>
          <button className="w-32 h-11 bg-deep-orange rounded font-semibold">Login</button>
        </nav>
        {/* ----Navbar End---- */}

        {/* Hero Section */}
        <section className="h-screen bg-[url('./background-image.png')]">
          <h1>WELCOME TO KEPLER</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ullam repudiandae obcaecati magni veritatis totam, ab minima in neque incidunt nemo iure quaerat aliquam voluptates autem rem laudantium blanditiis voluptas sunt ratione ipsam harum eligendi odit at. Aut illum minima facilis soluta, numquam aliquid consectetur nobis qui deserunt vel et nulla nesciunt itaque rerum, culpa laboriosam, officiis quibusdam iure sequi.</p>
          <button className="w-60 h-16 bg-deep-orange rounded-full font-bold">JOIN US NOW!</button>
        </section>
        {/* Hero Section End*/}

        {/* Course Category */}
        <section className="grid grid-cols-3 mx-36 gap-10 m-10">
          <div className="py-6 px-16 bg-orange text-center flex flex-col justify-center items-center">
            <h2 className="text-white font-bold ">Education</h2>
            <p className="text-white">Select from out tailor made
              courses for your academic
              and professional needs</p>
          </div>
          <div className="py-6 px-16 bg-orange text-center flex flex-col justify-center items-center">
            <h2 className="text-white font-bold">Study Abroad</h2>
            <p className="text-white">Select from out tailor made
              courses for your academic
              and professional needs</p>
          </div>
          <div className="py-6 px-16 bg-orange text-center flex flex-col justify-center items-center">
            <h2 className="text-white font-bold">Immigration</h2>
            <p className="text-white">Select from out tailor made
              courses for your academic
              and professional needs</p>
          </div>
        </section>
        {/* Course Category End */}

        {/* Course List  */}
        <section className="bg-cyan-blue mx-36">
          <h1 className="font-extrabold text-5xl">Explore Top Courses</h1>
          {/* category Cards */}
          <section className="grid grid-cols-3 gap-20 mt-20">
            {/* each card */}
            <div className='rounded-2xl bg-white shadow-xl'>
              <Image
                src={img}
                alt="Picture of the author"
                width="350"
                height="300"
              />
              <div className='px-11 mt-12 mb-7'>
                <h3 className='font-bold'>Java Programming</h3>
                <p className='mb-10'>by Sakib hasan</p>
                <p>⭐ 5 (270 reviews)</p>
                <p>Beginner Friendly 4-6 Months</p>
              </div>
            </div>
            <div className='rounded-2xl bg-white shadow-xl'>
              <Image
                src={img}
                alt="Picture of the author"
                width="350"
                height="300"
              />
              <div className='px-11 mt-12 mb-7'>
                <h3 className='font-bold'>Java Programming</h3>
                <p className='mb-10'>by Sakib hasan</p>
                <p>⭐ 5 (270 reviews)</p>
                <p>Beginner Friendly 4-6 Months</p>
              </div>
            </div>
            <div className='rounded-2xl bg-white shadow-xl'>
              <Image
                src={img}
                alt="Picture of the author"
                width="350"
                height="300"
              />
              <div className='px-11 mt-12 mb-7'>
                <h3 className='font-bold'>Java Programming</h3>
                <p className='mb-10'>by Sakib hasan</p>
                <p>⭐ 5 (270 reviews)</p>
                <p>Beginner Friendly 4-6 Months</p>
              </div>
            </div>
            {/* each card end */}

          </section>
          {/* category Cards End */}
        </section>
        {/* Course List End  */}
      </div>
    </>
  )
}
