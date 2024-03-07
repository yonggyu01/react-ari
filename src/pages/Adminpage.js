import { Link } from "react-router-dom"

export default function Adminpage(){
  
    return(
        <div>
        <div x-data="{ userDropdownOpen: false, mobileNavOpen: false }">
  <div
    id="page-container"
    className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-slate-100"
  >
    <div id="page-header" className="z-1 flex flex-none items-center">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between border-b-2 border-slate-200/50 py-6">
          <div className="flex items-center">
            <a
              href="javascript:void(0)"
              className="text-md group inline-flex items-center gap-1 font-bold tracking-wide text-slate-700 hover:text-indigo-600 active:text-slate-700 sm:text-lg"
            >
          
              <span>관리자 페이지</span>
            </a>
          </div>

   
        </div>

        <nav
          x-cloak
          x-show="mobileNavOpen"
          className="flex flex-col py-4 lg:hidden"
        >
          <a
            href="javascript:void(0)"
            className="group flex items-center justify-between gap-2 rounded-md border border-transparent bg-indigo-100 px-2.5 py-2 text-sm font-semibold text-indigo-500 active:border-indigo-200"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="hi-solid hi-home inline-block h-5 w-5 flex-none"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            <span className="grow">Dashboard</span>
          </a>
          <hr className="h-5 border-0" />
          <div className="space-y-1.5">
            <a
              href="javascript:void(0)"
              className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
            >
              <svg
                className="hi-mini hi-cursor-arrow-rays inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="grow">Sales</span>
              <span
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                >250</span
              >
            </a>
 
          </div>
          <hr className="h-5 border-0" />
          <div className="space-y-1.5">
            <a
              href="javascript:void(0)"
              className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
            >
              <svg
                className="hi-mini hi-user-group inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"
                />
              </svg>
              <span className="grow">Users</span>
              <span
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                >563</span
              >
            </a>

          </div>
        </nav>
      </div>
    </div>

    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 md:gap-20 lg:grid-cols-12">
          <nav className="hidden lg:col-span-3 lg:block">
            <a
              href="javascript:void(0)"
              className="group flex items-center justify-between gap-2 rounded-md border border-transparent bg-indigo-100 px-2.5 py-2 text-sm font-semibold text-indigo-500 active:border-indigo-200"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="hi-solid hi-home inline-block h-5 w-5 flex-none"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                ></path>
              </svg>
              <span className="grow">Dashboard</span>
            </a>
            <hr className="h-5 border-0" />
            <div className="space-y-1.5">
              <a
                href="javascript:void(0)"
                className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
              >
                <svg
                  className="hi-mini hi-cursor-arrow-rays inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="grow">Sales</span>
                <span
                  className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                  >250</span
                >
              </a>
        
            </div>
            <hr className="h-5 border-0" />
            <div className="space-y-1.5">
              <a
                href="javascript:void(0)"
                className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
              >
                <svg
                  className="hi-mini hi-user-group inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"
                  />
                </svg>
                <span className="grow">Users</span>
                <span
                  className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                  >563</span
                >
              </a>
           
            </div>
            <hr className="h-5 border-0" />
            <div className="space-y-1.5">
              <a
                href="javascript:void(0)"
                className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-user-circle inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-indigo-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="grow">Account</span>
              </a>
              <Link to='/'
                onClick={()=>{

                }}
                className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
              >
                <svg
                  className="hi-mini hi-lock-closed inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="grow">Logout</span>
              </Link>
            </div>
          </nav>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 md:gap-6">
              <div
                className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3"
              >
                <dl>
                  <dt className="text-2xl font-bold">63</dt>
                  <dd className="text-sm font-medium text-slate-500">
                    Accounts today
                  </dd>
                </dl>
              </div>
              <div
                className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3"
              >
                <dl>
                  <dt className="text-2xl font-bold">6</dt>
                  <dd className="text-sm font-medium text-slate-500">
                    Sales today
                  </dd>
                </dl>
              </div>
              <div
                className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3"
              >
                <dl>
                  <dt className="text-2xl font-bold">5</dt>
                  <dd className="text-sm font-medium text-slate-500">
                    Open Tickets
                  </dd>
                </dl>
              </div>
              <div
                className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3"
              >
                <dl>
                  <dt className="text-2xl font-bold">10</dt>
                  <dd className="text-sm font-medium text-slate-500">
                    Pending Invoices
                  </dd>
                </dl>
              </div>
              {/* <div
                className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:col-span-12 lg:col-span-6"
              >
                <dl className="px-6 pt-6">
                  <dt className="text-2xl font-bold">$168,682</dt>
                  <dd className="text-sm font-medium text-slate-500">
                    Total Earnings
                  </dd>
                </dl>
                <div className="-m-2">
                  <svg
                    className="w-auto text-indigo-100"
                    fill="currentColor"
                    viewBox="0 0 1000 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 0,493.9109719606716 C 14.200000000000001,490.40802978683513 42.60000000000001,487.5791262811064 71,476.39626109148924 C 99.4,465.21339590187205 113.6,453.15974467495977 142,437.99664601258576 C 170.4,422.8335473502118 184.6,406.98651600999744 213,400.58076777961935 C 241.4,394.17501954924126 255.6,416.4756240849917 284,405.9679048606953 C 312.4,395.46018563639893 326.6,358.32287941899733 355,348.0421716581375 C 383.4,337.7614638972776 397.6,368.4679124832968 426,354.5643660563959 C 454.4,340.660819629495 468.6,300.30672545627453 497,278.5244395236329 C 525.4,256.7421535909913 539.6,252.0730672209553 568,245.65293639318784 C 596.4,239.23280556542042 610.6,231.89211788080013 639,246.42378538479574 C 667.4,260.95545288879134 681.6,336.33567203932097 710,318.3112739131659 C 738.4,300.28687578701084 752.6,166.6854990107404 781,156.30179475402042 C 809.4,145.91809049730045 823.6,289.85843160308036 852,266.3927526295661 C 880.4,242.92707365605182 894.6,59.99402379966443 923,38.9733998864491 C 951.4,17.952775973233773 979.8,136.82638642808135 994,161.28963306348942,L 1000 500,L 0 500Z"
                      fill="#E0E7FF"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:col-span-12 lg:col-span-6"
              >
                <dl className="px-6 pt-6">
                  <dt className="text-2xl font-bold">768,541</dt>
                  <dd className="text-sm font-medium text-slate-500">
                    Total Pageviews
                  </dd>
                </dl>
                <div className="-m-2">
                  <svg
                    className="w-auto text-indigo-100"
                    fill="currentColor"
                    viewBox="0 0 1000 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 0,491.97664735392186 C 14.2,487.6342321000262 42.599999999999994,479.4664419168693 71,470.26457108444356 C 99.4,461.0627002520178 113.6,460.88088046251244 142,445.967293191793 C 170.4,431.0537059210735 184.6,401.92769317557264 213,395.6966347308462 C 241.4,389.46557628611976 255.6,425.8825606617139 284,414.8120009681609 C 312.4,403.74144127460784 326.6,363.99447099184636 355,340.343836263081 C 383.4,316.6932015343157 397.6,303.4354664839433 426,296.5588273243342 C 454.4,289.68218816472506 468.6,313.94896637638396 497,305.96064046503545 C 525.4,297.97231455368694 539.6,258.86629470075934 568,256.61719776759156 C 596.4,254.36810083442379 610.6,314.6658746403039 639,294.7151557991966 C 667.4,274.76443695808933 681.6,173.183035720006 710,156.863603562055 C 738.4,140.54417140410402 752.6,214.65802978224644 781,213.11799500944176 C 809.4,211.57796023663707 823.6,150.70388385188858 852,149.16342969803156 C 880.4,147.62297554417455 894.6,213.57548048920893 923,205.4157242401567 C 951.4,197.25596799110446 979.8,127.77486361024759 994,108.36464845277033,L 1000 500,L 0 500Z"
                    />
                  </svg>
                </div>
              </div> */}
              <div
                className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:col-span-12"
              >
                <div className="px-6 pt-6">
                  <h2 className="text-2xl font-bold">판매 목록</h2>
                  <h3 className="text-sm font-medium text-slate-500">
                    You have 6 new sales today, keep it up!
                  </h3>
                </div>
                <div className="p-6">
                  <div className="min-w-full overflow-x-auto rounded">
                    <table className="min-w-full align-middle text-sm">
                      <thead>
                        <tr className="border-b-2 border-slate-100">
                          <th
                            className="px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700"
                          >
                            id
                          </th>
                          <th
                            className="hidden px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell"
                          >
                            Email
                          </th>
                          <th
                            className="hidden px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell"
                          >
                            Status
                          </th>
                          <th
                            className="px-3 py-2 text-end text-sm font-semibold uppercase tracking-wider text-slate-700"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="p-3 text-start">
                            <a
                              className="font-medium text-indigo-500 hover:text-indigo-700"
                              href="javascript:void(0)"
                              >order_0006578</a
                            >
                          </td>
                          <td className="hidden p-3 text-slate-600 md:table-cell">
                            g.taylor@example.com
                          </td>
                          <td className="hidden p-3 text-start md:table-cell">
                            <div
                              className="inline-block rounded-full border border-orange-200 bg-orange-50 px-2 py-1 text-xs font-semibold leading-4 text-orange-700"
                            >
                              Pending
                            </div>
                          </td>
                          <td className="p-3 text-end font-medium">$185.13</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 text-start">
                            <a
                              className="font-medium text-indigo-500 hover:text-indigo-700"
                              href="javascript:void(0)"
                              >order_0006577</a
                            >
                          </td>
                          <td className="hidden p-3 text-slate-600 md:table-cell">
                            j.keily@example.com
                          </td>
                          <td className="hidden p-3 text-start md:table-cell">
                            <div
                              className="inline-block rounded-full border border-orange-200 bg-orange-50 px-2 py-1 text-xs font-semibold leading-4 text-orange-700"
                            >
                              Pending
                            </div>
                          </td>
                          <td className="p-3 text-end font-medium">$280.63</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-start">
                            <a
                              className="font-medium text-indigo-500 hover:text-indigo-700"
                              href="javascript:void(0)"
                              >order_0006576</a
                            >
                          </td>
                          <td className="hidden p-3 text-slate-600 md:table-cell">
                            n.hart@example.com
                          </td>
                          <td className="hidden p-3 text-start md:table-cell">
                            <div
                              className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700"
                            >
                              Completed
                            </div>
                          </td>
                          <td className="p-3 text-end font-medium">$110.69</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 text-start">
                            <a
                              className="font-medium text-indigo-500 hover:text-indigo-700"
                              href="javascript:void(0)"
                              >order_0006575</a
                            >
                          </td>
                          <td className="hidden p-3 text-slate-600 md:table-cell">
                            j.doe@example.com
                          </td>
                          <td className="hidden p-3 text-start md:table-cell">
                            <div
                              className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700"
                            >
                              Completed
                            </div>
                          </td>
                          <td className="p-3 text-end font-medium">$120.37</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-start">
                            <a
                              className="font-medium text-indigo-500 hover:text-indigo-700"
                              href="javascript:void(0)"
                              >order_0006574</a
                            >
                          </td>
                          <td className="hidden p-3 text-slate-600 md:table-cell">
                            o.smith@example.com
                          </td>
                          <td className="hidden p-3 text-start md:table-cell">
                            <div
                              className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700"
                            >
                              Completed
                            </div>
                          </td>
                          <td className="p-3 text-end font-medium">$150.27</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 text-start">
                            <a
                              className="font-medium text-indigo-500 hover:text-indigo-700"
                              href="javascript:void(0)"
                              >order_0006573</a
                            >
                          </td>
                          <td className="hidden p-3 text-slate-600 md:table-cell">
                            n.hart@example.com
                          </td>
                          <td className="hidden p-3 text-start md:table-cell">
                            <div
                              className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700"
                            >
                              Completed
                            </div>
                          </td>
                          <td className="p-3 text-end font-medium">$215.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer id="page-footer" className="flex grow-0 items-center">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div
          className="flex flex-col space-y-2 border-t-2 border-slate-200/50 py-6 text-center text-sm font-medium text-slate-600 md:flex-row md:justify-between md:space-y-0 md:text-start"
        >
          <div> <span className="font-semibold">관리자 페이지 </span></div>
    
        </div>
      </div>
    </footer>
  </div>
</div>
        </div>
    )
}