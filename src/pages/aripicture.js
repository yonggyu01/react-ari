export default function Aripicture(){
    return (
        <>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Ari Picture</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        아리의 귀여운 사진을 보는 페이지입니다.
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <a href="#" className="group relative block">
          <img
            src="/imgs/아리1.PNG"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">100일 사진</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              More
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group relative block">
          <img
           src="/imgs/아리1.PNG"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">아리 Youtube모음</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              구독하기
            </span>
          </div>
        </a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" className="group relative block">
          <img
            src="/imgs/아리1.PNG"
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
        </a>
      </li>
    </ul>
  </div>
</section>
</>
    )
}