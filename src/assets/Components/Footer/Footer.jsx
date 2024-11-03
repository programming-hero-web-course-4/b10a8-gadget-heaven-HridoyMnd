
const Footer = () => {
    return (
        <section className="container mx-auto">
            <footer>
                {/* heading part */}
                <div className="mb-10 text-center">
                    <h1 className="font-bold text-3xl mb-3">Gadget Heaven</h1>
                    <p className="font-semibold text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                {/* horizontal rule */}
                <hr />
                {/* bottom part */}
                <div className="flex justify-between mt-4">
                    {/* left part */}
                    <div>
                        <h3 className="font-bold text-lg mb-3">Services</h3>
                        <p className="font-medium text-gray-600">Product Support</p>
                        <p className="font-medium text-gray-600">Order Tracking</p>
                        <p className="font-medium text-gray-600">Shipping Delivery</p>
                        <p className="font-medium text-gray-600">Returns</p>
                    </div>
                    {/* center part */}
                    <div>
                        <h3 className="font-bold text-lg mb-3">Company</h3>
                        <p className="font-medium text-gray-600">About Us</p>
                        <p className="font-medium text-gray-600">Careers</p>
                        <p className="font-medium text-gray-600">Contact</p>
                    </div>
                    {/* right part */}
                    <div>
                        <h3 className="font-bold text-lg mb-3">Legal</h3>
                        <p className="font-medium text-gray-600">Terms of Service</p>
                        <p className="font-medium text-gray-600">Privacy Policy</p>
                        <p className="font-medium text-gray-600">Cookie Policy</p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;