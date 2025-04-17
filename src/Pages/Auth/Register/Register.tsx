import { MoveRight } from "lucide-react"
import { Link } from "react-router"


const Register = () => {
  return (
    <div className="lg:container mx-auto p-[80px]">
      <div className="max-w-[648px] w-full min-h-[382px] p-[31px]  flex flex-col items-center justify-center rounded-lg border-[1px] border-[#9a9caa] mx-auto">
        <h3 className="text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize">register</h3>

        <form action='#' className=" flex flex-col items-center w-full space-y-4">
          <input type="text" placeholder="Your name" className="w-full h-[50px] bg-[#f0f2f3]  rounded-lg pl-3.5"></input>
          <input type="email" placeholder="Your email" className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"></input>
          <button type="submit" className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center gap-2.5 cursor-pointer"> Register<MoveRight /></button>
        </form>
        <p
          className=" mt-4 text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5"
        >
          Don't have account
          <Link
            to='/auth/login'
            className="text-[#007580]"
          >
            Login
          </Link>
        </p>
      </div>

    </div>
  )
}

export default Register