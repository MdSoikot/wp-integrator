import Link from 'next/link'
import Image from 'next/image'
export default function TopBar() {
    return (
        <>
            <div className="top-bar flex">
                <div className="top-bar-item flex">
                    <div className="logo">
                        <Link href="/" passHref><Image src='/images/bitapps_svg.svg' alt="file not found" width={20} height={20}></Image></Link>
                    </div>
                    <div className="links flex" id="links">
                        <Link href="bitform">Bit Form</Link>
                        <Link href="bit-integrator">Bit Integrator</Link>
                        <Link href="index.html">Bit SMTP</Link>
                        <Link href="index.html">WP Integrations</Link>
                        <Link href="index.html">Contact Us</Link>
                    </div>
                </div>
                <div className="social-btn">
                    <button type="button" className="btn btn-outline"><span><Image src='/images/facebook.svg' alt="file not found" width={20} height={20}></Image></span> Join FB Group</button>
                </div>
            </div>
        </>
    )
}
