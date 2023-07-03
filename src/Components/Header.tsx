 import Logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="">
            <img src={Logo} alt='site-logo' />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  )
}

export default Header
