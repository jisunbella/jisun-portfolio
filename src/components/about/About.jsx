import React from 'react'
import './About.css'
import me from '../../assets/jisun.jpeg'

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <h4 className='title'>About</h4>
        <div className='row'>
          <div className='col-md-7'>
            <ul>
              <li>무역학부 졸업 후, 미국 LA에서 인턴을 하면서 해당 일이 적성에 맞지 않음을 느꼈습니다. 한국으로 돌아와 진로 탐색을 하는 시간을 가졌고 코딩에 관심이 생겼습니다. 부트캠프를 통해 프로그래밍을 배웠고, 그 후 약 3년간 필라넷이라는 회사에서 웹 개발자로서 경력을 쌓았습니다. 웹 개발자로 일하면서 프론트 엔드의 영역에 매력을 느꼈고, 프론트 엔드, 리액트 개발자가 되고자 새로운 여정을 떠나게 되었습니다.</li>
              <li>회사를 관두고 호주로 잠시 워킹 홀리데이를 다녀오기도 했습니다. 길고도 짧은 10달이라는 시간이 결코 헛되지 않았다고 생각합니다. 자신을 마주하는 시간을 가질 수 있었고, 커리어에 대한 고민을 많이 했습니다. 결국 제가 하고 싶은건 개발이었습니다. 그래서 아르바이트를 하는 동안에도 틈틈이 리액트를 공부하는 시간을 가졌습니다.</li>
              <li>제가 상상한 것들을 구현할 수 있다는 것이 이 직업을 선택한 가장 큰 이유입니다. 다수의 사용자를 만족시킬 수 있는, 사용성과 가독성이 좋고 트렌디한 웹을 만들고 싶습니다. 아직 부족한 점이 많지만 그만큼 노력해서 열심히 채워나갈 것입니다.</li>
            </ul>
          </div>
          <div className='about-img col-md-5'>
            <img src={me} alt='Me' />
          </div>
        </div>
      </div>  
    </section>
  )
}

export default About;