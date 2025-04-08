import Me from '../../assets/images/jisun_profile.JPG';

const Main = () => {
  return (
    <section
      id="main"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-48">
        <div className="animate-fade-in flex justify-between">
          <div className="w-20 h-20 overflow-hidden rounded-full">
            <img
              src={Me}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="">
            안녕하세요, 프론트엔드 개발자 이지선 입니다. <br />
            React.js, Next.js, TypeScript를 사용하여 프로젝트를 개발하며 <br />
            사용자 중심의 인터페이스와 성능 최적화를 고려한 아키텍처 설계에
            집중해 <br />
            프론트엔드 전문성을 꾸준히 성장시키고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
