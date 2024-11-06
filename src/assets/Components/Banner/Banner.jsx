import banner from '../../Images/banner.jpg';

const Banner = () => {
    return (
        <div className="relative mx-auto pb-52 bg-purple-500 mb-52 max-sm:mb-16 max-md:mb-24 max-lg:mb-36 text-white text-center">
            <h1 className="text-5xl font-bold w-[85%] mx-auto max-lg:text-3xl max-md:text-2xl">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="w-[60%] my-6 mx-auto">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories.
            </p>
            <button className="text-xl font-bold bg-stone-200 rounded-full px-5 py-2 text-purple-600">
                Shop Now
            </button>
            <img
                src={banner}
                alt="Banner"
                className="h-[350px] w-[75%] mt-8 rounded-2xl absolute translate-x-40 max-lg:translate-x-24 max-md:translate-x-20 max-sm:translate-x-16 max-lg:h-[280px] max-md:h-[250px] max-sm:h-[200px]"
            />
        </div>
    );
};

export default Banner;
