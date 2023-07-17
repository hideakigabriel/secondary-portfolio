import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-start gap-[20%] max-w-8xl mx-32 h-40">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar-profile.png"
            alt="Avatar Profile"
            width={50}
            height={50}
          />
          <div>
            <p className="mb-2 font-bold">Gabriel Hideaki</p>
            <ul className="flex space-x-3">
              <li className="scale-100 hover:scale-125 transition duration-300 ease-in-out">
                <a target="_blank" href="https://github.com/hideakigabriel">
                  <img
                    src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li className="scale-100 hover:scale-125 transition duration-300 ease-in-out">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gabriel-hideaki/"
                >
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li className="scale-100 hover:scale-125 transition duration-300 ease-in-out">
                <a target="_blank" href="https://www.behance.net/hideakidesign">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/145/145799.png"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="flex border-2 rounded-full border-violet-700 px-9 py-3">
          <ul className="flex space-x-12">
            <li className="text-slate-400 hover:text-white cursor-pointer duration-300 ease-in-out">
              Home
            </li>
            <li className="text-slate-400 hover:text-white cursor-pointer duration-300 ease-in-out">
              About me
            </li>
            <li className="text-slate-400 hover:text-white cursor-pointer duration-300 ease-in-out">
              My skills
            </li>
            <li className="text-slate-400 hover:text-white cursor-pointer duration-300 ease-in-out">
              Projects
            </li>
            <li className="text-slate-400 hover:text-white cursor-pointer duration-300 ease-in-out">
              Contact me
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-gradient-to-b from-violet-950/50 from-10% to-transparent">
        <section className="max-w-8xl mx-32 m-auto py-14">
          <div className="flex justify-start items-center space-x-96">
            <div className="flex-col space-y-4">
              <h2 className="text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-50">
                H! I am Gabriel Hideaki. <br /> Welcome to my{" "}
              </h2>
              <h1 className="text-8xl font-black tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                Portfolio
              </h1>
              <p className="text-2xl">
                Passionate about technology{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                  |
                </span>{" "}
                Always looking for innovation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                  |
                </span>{" "}
                <br /> Performance & Design💜{" "}
              </p>
              <div className="flex space-x-10">
                <div className="flex items-center justify-center cursor-pointer rounded-full transition ease-in-out shadow-xl hover:shadow-gray-500/20 duration-300">
                  <div className="h-14 w-full rounded-full bg-gray-800 p-[3px]">
                    <div className="flex h-full rounded-full w-full items-center justify-center bg-gray-950 back">
                      <h1 className="text-xl font-semibold text-white px-8 py-8">
                        Download curriculum
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center cursor-pointer rounded-full transition ease-in-out shadow-xl hover:shadow-indigo-500/20 duration-300">
                  <div className="h-14 w-full rounded-full bg-gradient-to-r from-blue-800 to-purple-500 p-[3px]">
                    <div className="flex h-full rounded-full w-full items-center justify-center bg-gray-950 back">
                      <h1 className="text-xl font-semibold text-white px-8 py-8">
                        View projects
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/gabriel-hideak-widget.png"
                alt="Hideaki Widget"
                width={500}
                height={680}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="h-64 bg-gradient-to-t from-violet-950/50 from-10% to-transparent">
        <div className="flex justify-center gap-48 max-w-8xl mx-32 m-auto">

          <div className="flex flex-col items-center gap-6">
            <img
              src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
              width={50}
              height={50}
            />
            <span className="text-sm tracking-[1em] uppercase">GITHUB</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <img
              src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
              width={50}
              height={50}
            />
            <span className="text-sm tracking-[1em] uppercase">BEHANCE</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <img
              src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
              width={50}
              height={50}
            />
            <span className="text-sm tracking-[1em] uppercase">LINKEDIN</span>
          </div>
         
        </div>
      </footer>
    </div>
  );
}
