import React from 'react'

function Stats() {
  return (
    <div>
      <section class="w-[100%]  text-white border-t-[2px]  border-gray-200 lg:py-[70px] py-[50px] ">
        <div class="max-w-[1260px] mx-auto sm:px-9 px-7 relative overflow-hidden">
          <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-5 text-white" style={{fontFamily:'Orbitron'}}>
            {/* <!-- !st block --> */}
            <div class="text-center opacity-90 space-y-2 group hover:bg-gradient-to-r from-cyan-500 to-blue-500 ... py-2 rounded-xl border-x-[1px] border-cyan-500 hover:scale-105 hover:transition-all duration-100 hover:text-black">
                <div class="font-bold md:text-4xl text-3xl">8K+</div>
                <p>Active Social Media People</p>
            </div>
            {/* <!-- 2nd block --> */}
            <div class="text-center opacity-90 space-y-2 group hover:bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-xl border-x-[1px] border-cyan-500 hover:scale-105 hover:transition-all duration-100 hover:text-black">
                <div class="font-bold md:text-4xl text-3xl">30+</div>
                <p>Sponsers Supporting Us</p>
            </div>
            {/* <!-- 3st block --> */}
            <div class="text-center opacity-90 space-y-2 group hover:bg-gradient-to-r from-cyan-500 to-blue-500 ... py-2 rounded-xl border-x-[1px] border-cyan-500 hover:scale-105 hover:transition-all duration-100 hover:text-black">
                <div class="font-bold md:text-4xl text-3xl">20+</div>
                <p>Events Attended so Far</p>
            </div>
            {/* <!-- 4nd block --> */}
            <div class="text-center opacity-90 space-y-2 group hover:bg-gradient-to-r from-cyan-500 to-blue-500 ... py-2 rounded-xl border-x-[1px] border-cyan-500 hover:scale-105 hover:transition-all duration-100 hover:text-black">
                <div class="font-bold md:text-4xl text-3xl">Top-10</div>
                <p>Among Top 10 ATVs in India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats
