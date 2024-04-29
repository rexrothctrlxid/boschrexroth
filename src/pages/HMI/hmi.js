/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import M from 'materialize-css';
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import pic1 from './img/pic1.png'
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'
import pic4 from './img/pic4.png'
import pic5 from './img/pic5.png'
import pic6 from './img/pic6.png'
import pic7 from './img/pic7.png'
import pic8 from './img/pic8.png'
import pic9 from './img/pic9.png'
import pic10 from './img/pic10.png'
import pic11 from './img/pic11.png'
import pic12 from './img/pic12.png'

const HMI = () => {
  useEffect (() => {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {})
  }, [])

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <h3 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>HMI (WebIQ & Node-RED)</h3>
        <p>HMI atau Human-Machine Interface adalah antarmuka yang memungkinkan interaksi antara manusia dan mesin. HMI bertujuan untuk memudahkan pengguna atau operator dalam mengontrol, memantau, dan berinteraksi dengan peralatan atau sistem mesin. Pada CtrlX, terdapat aplikasi yang tersedia pada CtrlX Store yang dapat digunakan, yaitu WebIQ dan Node-Red. Pada artikel ini akan menjelaskan tahapan dari installasi hingga penggunaannya.</p>
        <h4 style={{ textAlign: 'center', marginTop: '50px' }}>WebIQ</h4>
        <ul>
        <h4>INTRODUCTION</h4>
          <li>WebIQ merupakan sistem HMI yang bekerja pada web. Dikembangkan oleh Smart HMI, memiliki fitur desain yang responsif untuk semua ratio layar yang digunakan. Sehingga tampilan HMI dapat dilihat melalui smartphone hingga desktop dengan lancar. WebIQ menggunakan basis open-web technology seperti OPC-UA, HTML5, CSS, dan JavaScript. WebIQ menyediakan support penuh hingga layout HMI dan custom widgets.</li>
          <li>WebIQ terdiri dari dua aplikasi, yaitu</li>
          <li style={{ marginTop: '5px' }}><b>- WebIQ Server:</b>Merupakan runtime app untuk web HMI. Server diinstall langsung pada CtrlX CORE <i>constroller</i></li>
          <li style={{  marginBottom: '5px' }}><b>- WebIQ Designer:</b>Merupakan aplikasi untuk mendesain dan membuat web HMI tanpa <i>programming</i></li>
        
        <h4>INSTALLATION</h4>
          <p>Sebelum menggunakan webIQ, diperlukan untuk men-download server WebIQ serta membeli license pada CtrlX Store.</p>
          <h6><b>WebIQ Server</b></h6>
          <li>Untuk menggunakan WebIQ Designer, diperlukan untuk meng-install WebIQ server pada CtrlX CORE. Setelah men-download server melalui CtrlX store, berikut Langkah-langkah installasi:</li>
          <li>1. Pastikan versi server yang di download sesuai dengan CtrlX OS dan WebIQ Designer yang dimiliki.</li>
          <li>2. Sambungkan CtrlX CORE dengan device yang digunakan. Petunjuk dapat dilihat disini. </li>
          <li>3. Buka CtrlX OS melalui alamat IP CtrlX CORE, masukkan informasi login yang sesuai. IP address dapat berubah sesuai port dan metode alokasi IP address yang digunakan.</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '30px' }}>
          <img className="materialboxed" src={pic1} alt="hmi" style={{ width: '3%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </div>
          <li>4. Jika sudah masuk, pastikan keadaan CtrlX CORE dalam keadaan <b><i> service.</i></b></li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <img className="materialboxed" src={pic2} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>5. Navigasi ke settings -- installed app -- klik Install Apps from File </li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <img className="materialboxed" src={pic3} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>6. Pilih file server yang sudah di download, pastikan memilih file yang benar!</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <img className="materialboxed" src={pic4} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>Tunggu hingga file terinstall. Jika sudah, maka dapat langsung digunakan. Jika belum memiliki license, maka dapat melihat penjelasannya disini.</li>
          



          <li style={{ marginTop: '5px', marginBottom: '30px'}}>3. REBOOT ctrlX</li>

        <h4>C. Setting influxDB</h4>
          <li>1. Masuk kedalam aplikasi influxdb, klik “Get Started”</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px' }}>
            <img className="materialboxed" src={pic5} alt="Gambar2" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>2. Setting “Username”, “Password”, “Nama organisasi”, “Bucket” (Tempat penyimpanan data), klik continue</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px'}}>
            <img className="materialboxed" src={pic6} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>3. Buat API Token (digunakan untuk mengamankan database), Klik “Data” - “API Tokens” - “Generate API Tokens”</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px' }}>
            <img className="materialboxed" src={pic7} alt="Gambar2" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>4. Copy API Tokens</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <img className="materialboxed" src={pic8} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>

        <h4>D. Setting Node-RED</h4>
        <li>1. Buka example code untuk konfigurasi node-red dan influxdb</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px' }}>
            <img className="materialboxed" src={pic9} alt="Gambar2" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li>2. Double Klik pada node influxdb, Masukan konfigurasi server, pilih versi 2.0, masukan token, organization, bucket (sesuai dengan settingan influx sebelumnya) dan measurement (data yang kita ingin masukan ke dalam database), lakukan seperti dibawah ini.</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <img className="materialboxed" src={pic10} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '30px'}}>
            <img className="materialboxed" src={pic11} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <li style={{ marginTop: '5px', marginBottom: '30px' }}>3. Apabila setting telah selesai, deploy program</li>
          <li>4. Masuk ke dashboard influxdb, ikuti langkah pada gambar dibawah ini untuk mngecek apakah nilai sudah berhasil masuk atau belum.</li>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <img className="materialboxed" src={pic12} alt="Gambar3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default HMI