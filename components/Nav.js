import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <div className="navbar" id="navbar">
      <div className="container flex flex-between">
        <div className="logo flex">
          <Link href="/" passHref><Image src='/images/wp_integration.svg' alt="file not found" width={20} height={20}></Image></Link>
        </div>
        <div className="bitform-links links flex" id="bitform-links">
          <div className="button flex">
            <button type="button" className="btn btn-login">Login</button>
            <button type="button" className="btn btn-outline">Sign Up</button>
            {/* <button type="button" className="btn btn-outline test"><span><Image src='/images/facebook.svg' alt="file not found" width={20} height={20}></Image></span> Join FB Group</button> */}
          </div>
        </div>
        <div className="responsive-menu" onClick="resBitFormMenuActive()">
          <i className="fas fa-bars" style={{ fontSize: '30px' }}></i>
        </div>
      </div>

    </div>
  )
}
