import me from '../../assets/me.jpg'; 


export default function Home() {
  return (
    <section className="py-12 bg-[#1abc9c] ">
      <div className="container py-32 flex justify-center items-center flex-col mx-auto text-white min-h-[100vh]">
        <img src={me} alt="My photo" className="w-56 rounded-full
        " /> 
        <h1 className='text-3xl font-bold py-5'>START FRAMWORK</h1> 
        <div className="div py-1 star relative">
         <i className="fa-solid fa-star "></i>
        </div> 
        <p className="text-xl font-semibold">Frontend Developer- Web Desogner </p>

      </div> 
      
    </section>
  );
}
