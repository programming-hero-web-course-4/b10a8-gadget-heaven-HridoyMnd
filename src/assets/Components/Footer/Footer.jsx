
const Footer = () => {
    return (
        <section className="bg-blue-950 my-8">
            <footer className="container mx-auto text-slate-50 p-3">
                {/* heading part */}
                <div className="mb-10 text-center">
                    <h1 className="font-bold text-3xl mb-3">Gadget Heaven</h1>
                    <p className="font-semibold text-gray-300">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                {/* horizontal rule */}
                <hr className="text-gray-300" />
                {/* bottom part */}
                <div className="flex justify-between mt-4 max-md:flex-col max-lg:items-center gap-5">
                    {/* left part */}
                    <div className="text-left max-lg:text-center">
                        <h3 className="font-bold text-lg mb-3">Services</h3>
                        <p className="font-medium text-gray-300">Product Support</p>
                        <p className="font-medium text-gray-300">Order Tracking</p>
                        <p className="font-medium text-gray-300">Shipping Delivery</p>
                        <p className="font-medium text-gray-300">Returns</p>
                    </div>
                    {/* center part */}
                    <div className="text-left max-lg:text-center">
                        <h3 className="font-bold text-lg mb-3">Company</h3>
                        <p className="font-medium text-gray-300">About Us</p>
                        <p className="font-medium text-gray-300">Careers</p>
                        <p className="font-medium text-gray-300">Contact</p>
                    </div>
                    {/* right part */}
                    <div className="text-left max-lg:text-center">
                        <h3 className="font-bold text-lg mb-3">Legal</h3>
                        <p className="font-medium text-gray-300">Terms of Service</p>
                        <p className="font-medium text-gray-300">Privacy Policy</p>
                        <p className="font-medium text-gray-300">Cookie Policy</p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;