/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import gambarcarousel from '../../pages/Modbus/img/modbus.png'
import Navbar from '../../components/navbar/Navbar'
import Carousel from "../../components/carousel/Carousel"
import { useEffect } from "react"
import M from "materialize-css"
import pg1 from '../../pages/Modbus/img/1.png'
import pg2 from '../../pages/Modbus/img/2.png'
import pg3 from '../../pages/Modbus/img/3.png'
import pg4 from '../../pages/Modbus/img/4.png'
import pg5 from '../../pages/Modbus/img/5.png'


const Modbus = () => {
  useEffect (() => {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
  }, []);

  return(
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Cara Akses Modbus TCP ctrlX</h3>
        <h4>Requirements:</h4>
        <ul>
          <li>ctrlX CORE - x3 atau x7 dengan ctrlX OS</li>
          <li>Aplikasi Modbus TCP minimum versi 1.20 + license</li>
          <li>Device Slave/Server</li>
        </ul>
        <h4 style={{ marginTop: '30px' }}>Topologi Modbus</h4>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <img className="materialboxed" src={gambarcarousel} alt="Modbus" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </div>
        <h4>Set-Up Komunikasi</h4>
        <ul>
          <li>1. Buka ctrlX web server, click Modbus TCP, click “Add Modbus TCP Device”.</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px'}}>
            <img className="materialboxed" src={pg1} alt="Gambar1" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>2. Masukkan informasi Modbus TCP pada window (nama, IP addres, Port, dan unit ID) lalu klik save.</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px' }}>
            <img className="materialboxed" src={pg2} alt="Gambar2" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>3. Klik pada tombol (+) untuk menambahkan subskripsi baru, kemudian isi subskripsi</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <img className="materialboxed" src={pg3} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px' }}>
            <img className="materialboxed" src={pg4} alt="Gambar4" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>4. Setelah device berhasil terhubung, maka tampilanya akan seperti dibawah ini.</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px' }}>
            <img className="materialboxed" src={pg5} alt="Gambar5" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Modbus
