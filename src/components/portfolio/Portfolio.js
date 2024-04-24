import gambar1 from '../img/1.png'
import gambar2 from '../img/2.png'
import gambar3 from '../img/3.png'
import gambar4 from '../img/4.png'
import gambar5 from '../img/5.png'
import gambar6 from '../img/6.png'
import gambar7 from '../img/7.png'
import gambar8 from '../img/8.png'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio scrollspy">
      <div className="container">
        <h3 className="light center grey-text text-darken-3">Portfolio</h3>
        <div className="row">
          <div className="col m3 s12">
            <img src={gambar1} className="responsive-img materialboxed" alt="Portfolio 1" />
          </div>
          <div className="col m3 s12">
            <img src={gambar2} className="responsive-img materialboxed" alt="Portfolio 2" />
          </div>
          <div className="col m3 s12">
            <img src={gambar3} className="responsive-img materialboxed" alt="Portfolio 3" />
          </div>
          <div className="col m3 s12">
            <img src={gambar4} className="responsive-img materialboxed" alt="Portfolio 4" />
          </div>
        </div>
        <div className="row">
          <div className="col m3 s12">
            <img src={gambar5} className="responsive-img materialboxed" alt="Portfolio 5" />
          </div>
          <div className="col m3 s12">
            <img src={gambar6} className="responsive-img materialboxed" alt="Portfolio 6" />
          </div>
          <div className="col m3 s12">
            <img src={gambar7} className="responsive-img materialboxed" alt="Portfolio 7" />
          </div>
          <div className="col m3 s12">
            <img src={gambar8} className="responsive-img materialboxed" alt="Portfolio 8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;