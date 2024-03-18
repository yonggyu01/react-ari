import { useId } from "react"

export default function Ari100pic(){
	const myaripic = [
		{
			title : '아리 백일사진1',
			src : '/imgs/아리/P4480336.JPG'
		},
		{
			title : '아리 백일사진2',
			src : '/imgs/아리/P4480338.JPG'
		},
		{
			title : '아리 백일사진3',
			src : '/imgs/아리/P4480343.JPG'
		},
		{
			title : '아리 백일사진4',
			src : '/imgs/김아리 백일 원본/INI4120  김아리 백일 009.jpg'
		},
		{
			title : '아리 백일사진5',
			src : '/imgs/김아리 백일 원본/INI4120  김아리 백일 032.jpg'
		},
		{
			title : '아리 백일사진6',
			src : '/imgs/김아리 백일 원본/INI4120  김아리 백일 035.jpg'
		},
		{
			title : '아리 백일사진7',
			src : '/imgs/김아리 백일 원본/INI4120  김아리 백일 063.jpg'
		},
		{
			title : '아리 백일사진8',
			src : '/imgs/김아리 백일 원본/INI4120  김아리 백일 069.jpg'
		},
		{
			title : '아리 백일사진9',
			src : '/imgs/김아리 백일 원본/INI4120  김아리 백일 075.jpg'
		},

	]


    return(
<>

{/* <!-- Top Rated --> */}
        <section className="space-y-6 mb-8 mt-8">
          {/* <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-200">Top Rated</h2>
            <a
              href="javascript:void(0)"
              className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-white active:text-slate-400"
            >
              <span>See All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 opacity-50 transition ease-out group-hover:opacity-100 group-active:translate-x-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div> */}
          <nav
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {/* <!-- Movie --> */}
			{myaripic.map((item)=>(<a
              href="javascript:void(0)"
              className="group aspect-h-4 aspect-w-3 relative overflow-hidden rounded-2xl bg-black/25 transition  active:opacity-75"
            >
              <img
                className="object-fill object-center h-full"
                src={item.src}
              />
              <div
                className="absolute inset-0 flex flex-col justify-between hover:invisible  "
              >
                <div className="flex items-center justify-start gap-2 p-4  hover:invisible">
                  {/* <div
                    className="flex items-center gap-1 rounded-lg bg-slate-800/50 px-1.5 py-1 font-medium text-slate-200  hover:invisible"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="hi-mini hi-star -mt-px inline-block h-4 w-4 text-amber-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>9.8</span>
                  </div> */}
                </div>
                <div className="flex items-end justify-between gap-2 px-4 py-5">
                  <div className="space-y-1">
                    {/* <h3 className="text-xl font-semibold text-black">
                      {item.title}
                    </h3> */}
                    {/* <p className="text-sm font-semibold text-slate-500">2024</p> */}
                  </div>
                </div>
              </div>
            </a>

			))}
            
            {/* <!-- END Movie --> */}

     

        
            

         
          </nav>
        </section>
      

</>



    )
}