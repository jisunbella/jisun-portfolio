const Main = () => {
  return (
    <section
      id="main"
      className="min-h-screen flex flex-col justify-center space-y-6"
    >
      <p
        lang="en"
        className="text-lg text-gray-700 leading-relaxed max-w-2xl font-english"
      >
        Hi, I'm <span className="font-semibold">Jisun Lee</span>.
        <br />a frontend developer at Mobidays.
      </p>
      <p className="">
        안녕하세요, 프론트엔드 개발자 이지선 입니다. <br />
        React.js, Next.js, TypeScript를 사용하여 프로젝트를 개발하며 <br />
        사용자 중심의 인터페이스와 성능 최적화를 고려한 아키텍처 설계에 집중해{' '}
        <br />
        프론트엔드 전문성을 꾸준히 성장시키고 있습니다.
      </p>
    </section>
  );
};

export default Main;
