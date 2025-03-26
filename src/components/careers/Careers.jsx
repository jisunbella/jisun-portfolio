import { useState } from 'react';

const Careers = () => {
  const [careers, setCareers] = useState([
    {
      company: 'Mobidays',
      url: 'https://www.mobidays.com/',
      period: '2023.10 ~ current',
      position: '프론트엔드',
      stack: 'React.js, Next.js, TypeScript, GitLab, AWS S3, Cloudfront',
      desc: [
        '- React.js, Next.js, TypeScript, zustand, Redux 기반의 프론트엔드 개발',
        '- fetch를 사용하여 RESTful API 방식으로 백엔드와 데이터 연동',
        '- figma, axure로 기획과 소통',
        '- GitLab, Jenkins, Portainer, AWS(s3, cloudfront) 사용',
      ],
    },
    {
      company: 'Feelanet',
      url: 'https://www.feelanet.com/',
      period: '2019.08 ~ 2022.05',
      position: '풀스택',
      stack:
        'C#, asp.net, Vue.js, Nuxt.js, HTML, CSS, JavaScript, SQL Server, Git, IIS',
      desc: [
        '- C# 및 ASP.NET을 활용한 백엔드 API 개발, SQL Server를 사용해 데이터베이스 설계',
        '- HTML, CSS, JavaScript, jQuery, Vue, Nuxt 사용해 프론트엔드 개발',
        '- IIS 활용하여 배포',
      ],
    },
  ]);

  return (
    <section
      id="careers"
      className="w-full h-screen mt-20 flex items-center justify-center"
    >
      <h3>Careers</h3>
      {careers.map((item, index) => (
        <div key={index}>
          <div>{item.company}</div>
          <div>{item.period}</div>
          <div>{item.position}</div>
          <div>
            <ul>
              {item.desc.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Careers;
