import banner from '../../Images/banner.jpg';
const Banner = () => {
    return (
        <div className="container mx-auto mb-[360px] bg-purple-500">
            <div  className="text-center space-y-5 py-3 relative pb-32">
                <h1 className=" max-md:text-3xl text-5xl font-bold w-[85%] mx-auto">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='w-[65%] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className="text-xl font-bold bg-stone-200 rounded-full px-5 py-2">Shop Now</button>
            </div>
                <div className=" hidden border border-blue-500 h-[430px] w-[80%] translate-x-24 absolute -bottom-32 ">
                    <img src={banner} alt="" className='w-full h-full object-cover' />
                </div>
        </div>
    );
};

export default Banner;