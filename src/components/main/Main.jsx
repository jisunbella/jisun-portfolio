const Main = () => {
  return (
    <section
      id="main"
      className="min-h-screen flex flex-col justify-center space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-900">Hello world!</h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
        I'm <span className="font-semibold text-blue-600">Jisun</span>, a
        frontend developer based in Incheon, South Korea. I enjoy building
        clean, accessible, and intuitive web experiences with{' '}
        <span className="font-semibold">React.js</span>,{' '}
        <span className="font-semibold">Next.js</span>, and{' '}
        <span className="font-semibold">TypeScript</span>.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
        With over <span className="font-semibold">4+ years of experience</span>{' '}
        in frontend development and full-stack environments, I'm passionate
        about crafting performant and delightful user interfaces.
      </p>
    </section>

    // <section
    //   id="main"
    //   // className="w-full h-screen flex items-center justify-center"
    //   className="pt-16 ml-0 lg:ml-[33.3333%] p-8 space-y-32"
    // >
    //   <div className="container mx-auto px-48">
    //     <div className="animate-fade-in flex justify-between">
    //       <p className="">
    //         안녕하세요, 프론트엔드 개발자 이지선 입니다. <br />
    //         React.js, Next.js, TypeScript를 사용하여 프로젝트를 개발하며 <br />
    //         사용자 중심의 인터페이스와 성능 최적화를 고려한 아키텍처 설계에
    //         집중해 <br />
    //         프론트엔드 전문성을 꾸준히 성장시키고 있습니다.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Main;
