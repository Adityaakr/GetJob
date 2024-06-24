import Link from "next/link";

export default function header(){
    return (
        <>
        <header>
          <div className="container flex items-center justify-between p-4 px-6 mx-auto my-4">
            <Link href={"/"} className="font-bold text-xl">Job Board</Link>
            <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md">
              <Link className="bg-gray-200 text-black" href={"/login"}>Login</Link>
              <Link className="bg-blue-600 text-white" href={"/new-listing"}>Post a job</Link>
            </nav>
          </div>
        </header>
        </>
    )
}