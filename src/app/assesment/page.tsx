import Tabbar from '@/components/Tabbar';
import Image from 'next/image';
import { LuFileCheck2 } from 'react-icons/lu'
import img1 from '@/assets/assesmnt1.png'
const Assesment = () => {
    return (
        <div>
            <Tabbar />
            <div className='mx-36'>
                <div>
                    <h1>MOCK TEST</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis in ullam suscipit pariatur et delectus omnis, id sint voluptas, natus fuga eaque commodi quidem voluptatem. Dicta at ipsam cupiditate possimus odio, perspiciatis mollitia vero quas earum ullam cumque corporis? Voluptates ducimus harum necessitatibus culpa expedita doloremque nam odit ipsam aut!</p>
                    <button><LuFileCheck2 />BOOK NOW</button>
                </div>
                <Image
                    src={img1}
                    style={{ width: '100%', height: 'auto' }}
                    alt='image'
                />
            </div>
            <div className='bg-[#F9F9F9] text-center pt-14 mx-36 mb-40'>
                <h1 className='font-bold text-4xl mb-14'>Resources</h1>
                <div className='flex text-white mx-10 gap-10 items-center justify-center pb-28'>
                    <p className='bg-orange text-xl font-normal px-10 py-4 rounded-md'>Writing</p>
                    <p className='bg-orange text-xl font-normal px-10 py-4 rounded-md'>Speaking</p>
                    <p className='bg-orange text-xl font-normal px-10 py-4 rounded-md'>Reading</p>
                    <p className='bg-orange text-xl font-normal px-10 py-4 rounded-md'>Listening</p>
                </div>
            </div>
        </div>
    );
};

export default Assesment;