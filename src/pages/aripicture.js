import { Link } from "react-router-dom"


export default function Aripicture(){
    return (
        <>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">Ari Picture</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500 dark:text-white">
        아리의 귀여운 사진을 보는 페이지입니다.
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li className="shadow-lg">
        <Link to='ari100' className="group relative block">
          <img
            src="/imgs/ari98.jpg"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 object-top group-hover:opacity-90 grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 shadow-lg">
            <h3 className="text-xl font-medium text-white">100일 사진</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              More
            </span>
          </div>
        </Link>
      </li>

      <li className="shadow-lg" >
        <Link to="insta" className="group relative block">
          <img
           src="/imgs/arigom.gif"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 grayscale group-hover:grayscale-0 object-top"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 shadow-lg">
            <h3 className="text-xl font-medium text-white">아리 instagram모음</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              구독하기
            </span>
          </div>
        </Link>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 shadow-lg">
        <Link to='future' className="group relative block">
          <img
            src="/imgs/ari5.jpg"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">아리 20년후 사진</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
             구경하기
            </span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</section>
</>
    )
}