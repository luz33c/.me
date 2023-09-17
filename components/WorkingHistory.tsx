export default function WorkingHistory() {
  return (
    <ul className="">
      <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-1 flex items-center">
            <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
              经历有些曲折
            </span>
            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              2022
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
              至今
            </span>
          </p>
          <p>
            声网
            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              22.8～
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
              22.10
            </span>
            负责SDK开发 （经历30%以上的大裁员）{' '}
          </p>
          <p>
            bytetrade
            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              23.3
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
              至今
            </span>
            远程工作 （和预期不符，工作是二次开发的外包，身兼数职）
          </p>
        </div>
      </li>
      <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
        {/* <a
          className="link focusable font-medium text-zinc-800 dark:text-white"
          href="https://www.octopia.com/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
        src="/static/images/workxp/octopia.jpg"
        alt="Octopia"
        width="50px"
        height="50px"
        className="rounded-md"
      />
        </a> */}
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-1 flex items-center">
            <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
              蜻蜓FM-全栈工程师
            </span>
            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              2019.8.19
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
              2021.6.30
            </span>
          </p>
          <p>主站&m站&webBff的owner,业务开发和基建都有,全程独立开发了2个公司重点业务</p>
        </div>
      </li>
      <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-1 flex items-center">
            <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
              Proginn-全栈工程师
            </span>
            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              2017.11
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
              2019.7
            </span>
          </p>
          <p>职责：区块链Dapp业务开发，负责产品&开发，帮助业务获得融资</p>
        </div>
      </li>
      <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-1 flex items-center">
            <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
              创业&产品经理&开青旅
            </span>
            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              2014
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
              2017年11
            </span>
          </p>
          <p>
            简介：户外社区项目创业（负责技术&产品），失败后开了青旅&民宿，在acfun&极客公园担任PM
          </p>
          <p>
            放弃PM职业原因：两次到手的PM
            offer被取消（因教育背景），认识到职业上的产品经理这条路不适合我
          </p>
        </div>
      </li>
      <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-1 flex items-center">
            <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
              北京影合众新媒体-pnp
            </span>
            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              2012
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
              2013.12
            </span>
          </p>
          <p>
            国内当时第二大的电影票务管理SaaS,参与开发了自助取票pos机&排片选座后台，取票退票等核心业务，万达&星美等院线的定制开发&对接
          </p>
          <p>(也许,你现在去电影院看电影,都还会用到我的代码）</p>
        </div>
      </li>
    </ul>
  )
}
