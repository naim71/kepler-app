import Image from 'next/image'
import img from '../assets/java.png'
import event from '../assets/event-1.png'
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
          <div className='flex flex-col justify-center items-center'>
            <div>
              {/* category Cards */}
              <section className="grid grid-cols-3 gap-20 mt-20">
                {/* each card */}
                <div className='rounded-2xl bg-white shadow-md'>
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
                <div className='rounded-2xl bg-white shadow-md'>
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
                <div className='rounded-2xl bg-white shadow-md'>
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
            </div>
            <button className='px-6 mt-20 mb-20 bg-orange text-white font-semibold py-2 rounded-md'>Explore More Courses</button>
          </div>
        </section>
        {/* Course List End  */}

        {/* upcoming events */}
        <section className='mx-36 mb-36'>
          <h1 className="font-extrabold text-5xl mt-32 mb-20">Upcoming Events</h1>
          <div className='bg-cyan-blue h-96 border-4 flex justify-center items-center'>
            <Image
              src={event}
              width='756'
              height='384'
              alt="Picture of the author"
            />
            <div className='text-center'>
              <h1 className='font-extrabold text-4xl'>Long Island University Seminar</h1>
              <p>MENTORS' / JUNE 12, 2023</p>
              <p>Date: 18 June, Sunday Time: 3:30 PM Location: Mentors' Kalabagan Branch</p>
              <button className='text-white bg-orange py-2 px-5 rounded-sm font-bold mt-9'>Read More</button>
            </div>
          </div>

        </section>
        {/* upcoming events End */}

        <div className='h-56 bg-navy-blue rounded-bl-[100px]  flex justify-between items-center'>
          <div className='mx-44 text-white flex justify-between'>
            <div>
              <p>Individual Learner</p>
              <h1 className='font-bold'>Accelerate your career with job-rady digital skills</h1>
            </div>
            <p className='border-2 py-2 px-3'>Explore Courses</p>
          </div>
        </div>

        {/* testimonials */}
        <section className='mx-36 mb-32 bg-cyan-blue'>
          <h1 className="font-extrabold text-5xl mt-32 mb-20 text-center">Testimonials</h1>
          <section className='grid grid-cols-3 gap-52'>
            <div className='flex flex-col justify-center items-center'>
              <div className='bg-orange h-40 w-40 rounded-full mb-9' />
              <h1 className='font-bold'>Nora Myers</h1>
              <p className='text-center'>“Dataque has helped me
                expand my knowledge through
                serveral important courses
                that are extremely impactful and
                helpful for my career.”
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='bg-orange h-40 w-40 rounded-full mb-9' />
              <h1 className='font-bold'>Nora Myers</h1>
              <p className='text-center'>“Dataque has helped me
                expand my knowledge through
                serveral important courses
                that are extremely impactful and
                helpful for my career.”
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='bg-orange h-40 w-40 rounded-full mb-9' />
              <h1 className='font-bold'>Nora Myers</h1>
              <p className='text-center'>“Dataque has helped me
                expand my knowledge through
                serveral important courses
                that are extremely impactful and
                helpful for my career.”
              </p>
            </div>
          </section>
        </section>

        {/* testimonials End*/}

        {/* videos */}
        <section className='mx-44 mb-32'>
          <h1 className="font-extrabold text-5xl mt-32 mb-20 text-center">Videos</h1>
          <section className='grid grid-cols-3 justify-items-center'>
            <div>
              <div className='w-60 h-60 border-4 border-orange'/>
            </div>
            <div>
              <div className='w-60 h-60 border-4 border-orange'/>
            </div>
            <div>
              <div className='w-60 h-60 border-4 border-orange'/>
            </div>
          </section>
        </section>
        {/* videos end */}

        {/* Footer */}
        <footer>
          
        </footer>
        {/* Footer Ends */}


      </div>
    </>
  )
}
