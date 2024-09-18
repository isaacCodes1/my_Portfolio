
const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            
            <div className="flex gap-3">
                <div className="social-icon">
                    <a className="w-1/2 h-1/2"  href="https://github.com/isaacCodes1"><img src="/assets/github.svg" alt="github-icon" /></a>
                </div>

                <div className="social-icon">
                    <a className="w-1/2 h-1/2"  href="https://x.com/IsaacO895351"><img src="/assets/twitter.svg" alt="twitter-icon"  /></a>
                </div>
            </div>
            <p className="text-white-500">©️ 2024 Isaac. All Rights Reserved.</p>
        </section>
    )
}
export default Footer
