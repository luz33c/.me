export default function WorkingHistory() {
  return (
    <ul className="">
      <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-1 items-center">
            <strong className=" text-zinc-700 dark:text-zinc-100">编程语言: </strong>
            js ts python rust(正在学习)
          </p>
          <p className="mb-1 items-center">
            <strong className=" text-zinc-700 dark:text-zinc-100">框架: </strong>
          </p>
          <p className="mb-1 items-center">- 了解源码: react,koa,express</p>
          <p className="mb-1 items-center">- 使用: electron,react native,tauri,prisma</p>
          <p className="mb-1 items-center">
            <strong className=" text-zinc-700 dark:text-zinc-100">前端: </strong>
            <p className="mb-1 items-center">- 工具链经验:webpack&vite,pnpm,turbo</p>
            <p className="mb-1 items-center">- css经验: grid&flex布局,tailwindcss</p>
            <p className="mb-1 items-center">
              - 具备浏览器&Http原理，抓包调试,浏览器插件开发等知识
            </p>
          </p>
          <p className="mb-1 items-center">
            <strong className=" text-zinc-700 dark:text-zinc-100">后端: </strong>
          </p>
          <p className="mb-1 items-center">- 了解主流db索引&存储引擎知识（mysql,pg,mongodb）</p>
          <p className="mb-1 items-center">- 有缓存设计&消息队列服务经验</p>
          <p className="mb-1 items-center">
            - 有linux&docker&docker compose等运维，nginx负载代理经验
          </p>
        </div>
      </li>
    </ul>
  )
}
