import React from 'react'

export default function HeadProfile() {
    const deskSekolah =
    "Sekolah ini adalah tempat yang dinamis dan inspiratif, di mana pembelajaran bertautan dengan kreativitas. Dengan fasilitas modern dan lingkungan ramah siswa, sekolah ini menciptakan atmosfer inklusif untuk mengembangkan potensi setiap individu. Guru yang berdedikasi membimbing siswa dengan pendekatan inovatif, merangsang rasa ingin tahu dan kolaborasi. Program pendidikan holistik mencakup aspek akademis, seni, olahraga, dan nilai-nilai moral. Disini, siswa tidak hanya belajar untuk meraih keunggulan akademis, tetapi juga untuk menjadi pemimpin masa depan yang berempati dan bertanggung jawab.";
   
    const handleUpcomingAlert = () => {
        alert('Upcoming Feature')
    }
  return (
    <>
      {/* Section body start */}
      <div className='w-full'>
          {/* Body Head start */}
          <div className="border-[1px] pb-[30px] rounded-[20px] overflow-hidden border-[grey] shadow-lg shadow-stone-700">
            <img
              src="./assets/sekolah.jpg"
              className="h-[250px] w-full object-cover"
            ></img>
            <img
              src="./assets/profile-ex.jpg"
              className="h-[170px] rounded-full border shadow-lg shadow-stone-500 ml-5 mt-[-100px]"
            ></img>
            <div className="flex mt-[20px] w-full justify-between px-[30px]">
              <h2 className="text-[20px] font-bold">SMK Negeri 2 Kalianda</h2>
              <img src="./assets/svg-icon/bell.svg" className="h-[50px]"></img>
            </div>
            <p className="px-[30px] w-[90%] text-justify">{deskSekolah}</p>
            <div className="flex gap-[30px] px-[40px] mt-[20px]">
              <p className=" text-[#0B60B0]">
                500+<span className="text-[black]"> Follower</span>
              </p>
            </div>
            <div className="flex gap-[20px] px-[30px] mt-[10px]">
              <button onClick={handleUpcomingAlert} className="bg-[#0B60B0] text-[white] border-[2px] border-[#0B60B0] px-[20px] py-[5px] rounded-full">
                Follow
              </button>
              <button onClick={handleUpcomingAlert} className=" border-[2px] border-[#0B60B0] px-[20px] py-[5px] rounded-full">
                Message
              </button>
            </div>
          </div>
          {/* Body Head end */}
          {/* other desk start */}
          <div className="h-[250px] mt-[20px] p-[20px] border-[1px] pb-[30px] rounded-[20px] overflow-hidden border-[grey] shadow-lg shadow-stone-700 w-full">
            Highlight
          </div>
          <div className="h-[250px] mt-[20px] p-[20px] border-[1px] pb-[30px] rounded-[20px] overflow-hidden border-[grey] shadow-lg shadow-stone-700 w-full">
            Post
          </div>
          <div className="h-[250px] mt-[20px] p-[20px] border-[1px] pb-[30px] rounded-[20px] overflow-hidden border-[grey] shadow-lg shadow-stone-700 w-full">
            Department
          </div>
          <div className="h-[250px] mt-[20px] p-[20px] border-[1px] pb-[30px] rounded-[20px] overflow-hidden border-[grey] shadow-lg shadow-stone-700 w-full">
            Prestasi
          </div>
          {/* other desk end */}
        </div>
        {/* Section body end */}
    </>
  )
}
