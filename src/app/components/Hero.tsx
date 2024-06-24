export default function Hero(){
    return(
        <>
        <section className="container my-16">
            <h1 className="text-5xl font-bold text-center">Find your next <br/>dream job</h1>
            {/* <p className="text-center text-gray-600 py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis maxime velit officia vero? Praesentium porro numquam neque nisi aliquam!
            </p> */}
            <form className="flex gap-2 mt-5 max-w-md mx-auto">
                <input 
                type="search" 
                className="border boder-gray-400 w-full py-2 px-3 rounded-md"
                placeholder="Search jobs"/>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
            </form>
        </section>
        </>
    )
}