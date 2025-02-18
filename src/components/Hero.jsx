import resume from '../assets/images/resume.pdf';
import Canvas1 from './CanvasFloating';

export default function Hero() {
  return (
    <section className='hero-section' id='hero'>
      {/* <div className='animated-grid'></div> */}
      {/* <div className='connection-lines'></div> */}
      <Canvas1 />
      <div className='container hero-content'>
        <h1 className='name-animation'>Hadi Moussawi</h1>

        <div className='job-title'>
          <div className='job-words'>
            <span>Web Developer</span>
          </div>
          <div className='job-words'>
            <span>&</span>
          </div>
          <div className='job-words'>
            <span>Team Leader</span>
          </div>
        </div>

        <p className='tagline'>
          Building Scalable Web Solutions & Leading Agile Teams
        </p>

        <div className='cta-container'>
          <a href='#portfolio' className='cta-btn cta-btn-primary'>
            View Portfolio
          </a>
          <a
            href={resume}
            download='resume.pdf'
            className='cta-btn cta-btn-secondary'
          >
            Donwload CV
          </a>
        </div>
      </div>
    </section>
  );
}
