import React from 'react'
import Case from "../components/Case";
import ReportForm from '../components/ReportForm';
const Home = () => {
  return (
    <Case>
        <div className="text-center">
            <h4 className="text-2xl  font-black leading-10">Layanan Aspirasi dan Pengembangan Online Rakyat</h4>
            <p className="text-lg leading-relaxe leading-10">
              Sampaikan laporan Anda langsung kepada instansi pemerintah berwenang
            </p>
        </div>
        <div style={{marginTop:'60px'}}>
            <ReportForm></ReportForm>
        </div>
    </Case>
  )
}

export default Home
