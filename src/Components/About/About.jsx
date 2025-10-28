 import React from 'react'
 
 export default function About() {
   return <> 
  <section className="bg-[#1abc9c] text-white flex items-center justify-center py-24 md:py-32 min-h-[82vh]">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h1 className="text-4xl font-extrabold tracking-tight mb-6">About Me</h1>

    
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className="h-px w-24 bg-white/70"></span>
      <i className="fa-solid fa-star text-xl"></i>
      <span className="h-px w-24 bg-white/70"></span>
    </div>

    
    <div className="grid grid-cols-12 gap-8 text-left">
      <div className="col-span-12 md:col-span-6">
        <p className="text-lg leading-relaxed">
          EN <br />
          I am a motivated <span className="font-semibold">Frontend Developer</span> with skills in{" "}
          <span className="italic">HTML, CSS, JavaScript, React, TailwindCSS, and Bootstrap</span>. I focus on
          building responsive, modern, and user-friendly web applications.
        </p>
      </div>

      <div className="col-span-12 md:col-span-6">
        <p className="text-lg leading-relaxed">
          🇩🇪 <br />
          Ich bin ein engagierter <span className="font-semibold">Frontend-Entwickler</span> mit Kenntnissen in{" "}
          <span className="italic">HTML, CSS, JavaScript, React, TailwindCSS und Bootstrap</span>. Mein Schwerpunkt
          liegt auf der Erstellung von modernen, responsiven und benutzerfreundlichen Webanwendungen.
        </p>
      </div>
    </div>
  </div>
</section>

   
   
   
   
   
   
   
   
   
   
   </>
 }
 
