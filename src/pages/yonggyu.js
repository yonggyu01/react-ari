export default function Yonggyu(){
    return(
        <div className="w-full m-auto dark:bg-slate-800 bg-white dark:text-gray-100 px-8 h-full">
            {/* <h1 className="text-4xl font-bold md:text-4xl ">  About me </h1> */}
            <div className="grid grid-cols-2 items-center gap-4 justify-center">
            <img className="mask mask-hexagon-2 grayscale lg:w-96 md:w-64 w-32 dark:grayscale-0 m-auto " src="/imgs/yong.jpg" alt='내사진' />
            <div className="text-left w-fit overflow-hidden "> 
            <h1 className="xl:text-4xl lg:text-2xl font-semibold mb-7 sm:text-lg text-base ">김용규의 포트폴리오 페이지입니다.</h1>
            <p className="lg:text-lg sm:text-base text-sm mt-4 ">안녕하세요 반갑습니다.</p>
            <hr className="mb-2"></hr>
            <p className="lg:text-lg sm:text-base text-sm ">매일 한걸음씩 성장하는 개발자입니다.</p>
            <hr className="mb-2"></hr>
            <p className="lg:text-lg sm:text-base text-sm ">개발시 발생하는 문제 해결방식을 블로그에 기록하며 공부하고 있습니다.</p>
            <hr className="mb-2"></hr>
            <p className="lg:text-lg sm:text-base text-sm ">새로운 기술에 대한 흥미가 매우 많습니다.</p>
            <hr className="mb-2"></hr>
            </div>
            </div>
      

        </div>
    )
}
