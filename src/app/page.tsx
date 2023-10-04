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
        {/* Hero */}
        <section className="max-w-8xl mx-32 m-auto py-14">
          <div className="flex justify-start items-center space-x-96">
            <div className="flex-col space-y-4">
              <h2 className="text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-50">
                {"<"}
                <span className="text-transparent font-light bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                  {" "}
                  /{" "}
                </span>{" "}
                Hi! I am Gabriel Hideaki. <br /> Welcome to my {">"}
              </h2>
              <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                Portfolio
              </h1>
              <p className="text-2xl">
                Passionate about technology{" "}
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                  |
                </span>{" "}
                Always looking for innovation{" "}
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                  |
                </span>{" "}
                <br /> Performance{" "}
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                  |
                </span>{" "}
                Design{" "}
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                  |
                </span>{" "}
                Creativity{" "}
              </p>
              <div className="flex space-x-10 pt-5">
                <div className="flex items-center justify-center cursor-pointer rounded-full transition ease-in-out shadow-xl hover:shadow-gray-500/20 hover:-translate-y-1 hover:scale-110 duration-300">
                  <div className="h-14 w-full rounded-full bg-gray-800 p-[3px]">
                    <div className="flex h-full rounded-full w-full items-center justify-center bg-gray-950 back">
                      <p className="text-xl font-semibold text-white px-8 py-8">
                        Download curriculum
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center cursor-pointer rounded-full transition ease-in-out shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1 hover:scale-110 duration-300">
                  <div className="h-14 w-full rounded-full bg-gradient-to-r from-blue-800 to-purple-500 p-[3px]">
                    <div className="flex h-full rounded-full w-full items-center justify-center bg-gray-950 back">
                      <p className="text-xl font-semibold text-white px-8 py-8">
                        View projects
                      </p>
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

        <section className="absolute z-10 max-w-8xl mx-60 m-auto py-14">
          <div className="flex flex-col gap-16 items-center m-auto py-20 px-32 bg-zinc-900/40 border-gray-700 border-solid border-[0.1em] rounded-[70px] backdrop-blur-md">
            <h1 className="text-center font-black text-5xl selection:bg-fuchsia-300 selection:text-fuchsia-900">
              {" "}
              I'am a modern{" "}
              <span className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500 transition ease-in-out hover:scale-110 duration-300">
                Web Developer
              </span>
            </h1>

            <div>
              <div>
                <p className="text-2xl font-semibold text-center tracking-wider">
                  <span className="text-3xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-50">
                    About me:
                  </span>{" "}
                  Freelance developer in career transition. With 4 years of
                  experience in graphic design, web design and Wordpress
                  development. I currently develop projects using HTML, CSS,
                  JavaScript and React JS technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-auto mx-12 relative mt-48">
          <Image
            className="w-full"
            src={"/creating-project-gradient.png"}
            width={1400}
            height={1500}
            alt=""
          />
        </div>

        {/* Project Section */}

        <section className="max-w-8xl mx-32 m-auto py-14">
          <div className="flex flex-row justify-between mb-20">
            <h1 className="font-black text-5xl selection:bg-fuchsia-300 selection:text-fuchsia-900">
              My projects
            </h1>
            <div className="flex items-center gap-5 cursor-pointer hover:opacity-60 duration-75">
              <p className="text-xl font-semibold">View all projects</p>
              <Image src={"/next-button.svg"} width={10} height={10} alt="" />
            </div>
          </div>

          {/* Projects Cards */}

          <div className="flex flex-row gap-4">
            <div className="w-[368px] h-[482px] p-5 bg-[#161633] border-[1px] rounded-3xl border-[#595c6b]">
              <div className="flex flex-col gap-4">
                <Image
                  id="pojectImage"
                  className="min-w-full h-[216px] rounded-xl bg-cover"
                  alt=""
                  src={"/img-project-temp.png"}
                  width={317}
                  height={216}
                />

                <h1 className="font-black text-xl">Budget Generator Hideaki Design</h1>
                <p>
                  Budget generator usign HTML, CSS, React in you development
                </p>
                <div>
                  <a target="_blank" href="#">
                    <Image
                      src={"/play-icon.svg"}
                      width={10}
                      height={10}
                      alt=""
                    />
                    <p>View project</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="h-64 bg-gradient-to-t from-violet-950/50 from-10% to-transparent">
        <div className="flex justify-center items-baseline gap-48 max-w-8xl mx-32 m-auto">
          <div className="transition ease-in-out flex flex-col items-center gap-6 hover:scale-110 cursor-pointer">
            <img src="/github-logo.svg" width={50} height={50} />
            <span className="text-sm tracking-[1em] uppercase">GITHUB</span>
          </div>

          <div className="transition ease-in-out flex flex-col items-center gap-6 hover:scale-110 cursor-pointer">
            <img src="/behance-logo.svg" width={50} height={50} />
            <span className="text-sm tracking-[1em] uppercase">BEHANCE</span>
          </div>

          <div className="transition ease-in-out flex flex-col items-center gap-6 hover:scale-110 cursor-pointer">
            <img src="/linkedin-logo.svg" width={50} height={50} />
            <span className="text-sm tracking-[1em] uppercase">LINKEDIN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
