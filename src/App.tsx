import VerbalIcon from './components/VerbalIcon';
import VisualIcon from './components/VisualIcon';
import ReactionIcon from './components/ReactionIcon';
import MemoryIcon from './components/MemoryIcon';

export default function App() {
  return (
    <>
      <main>
        <section className="lg:h-screen lg:flex lg:items-center">
          <div className="lg:flex lg:max-w-[40rem] lg:shadow-md lg:rounded-3xl lg:mx-auto">
            <header className="lg:basis-[50%] bg-gradient-to-t from-light-royal-blue to-light-slate-blue pt-6 pb-10 px-12 text-center grid gap-y-6 lg:rounded-tr-[2rem] lg:rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[2rem]">
              <h2 className="text-xl font-semibold text-light-lavender capitalize">
                Your result
              </h2>
              <div className="grid bg-gradient-to-t from-persian-blue to-violet-blue mx-auto w-min rounded-full lg:py-8 lg:px-12 py-10 px-12">
                <span className="text-white font-bold text-5xl">76</span>
                <span className="text-light-lavender/50 font-semibold self-center">
                  of 100
                </span>
              </div>
              <div className="grid gap-y-2">
                <h3 className="text-white font-semibold text-2xl">Great</h3>
                <p className="text-light-lavender">
                  You scored higher than 65% of the people who have taken these
                  tests.
                </p>
              </div>
            </header>
            <div className="lg:flex-1 p-7 grid gap-y-6">
              <h2 className="text-dark-gray-blue font-bold text-lg">Summary</h2>
              <ul className="grid gap-y-4">
                <li className="flex justify-between bg-light-red/5 lg:px-4 lg:py-3 p-4 rounded-xl">
                  <div className="flex gap-x-4 font-semibold">
                    <span>
                      <ReactionIcon />
                    </span>
                    <span className="text-light-red">Reaction</span>
                  </div>
                  <div className="font-semibold flex gap-x-1">
                    <span className="text-dark-gray-blue">80</span>
                    <span className="text-dark-gray-blue/50">&#47;</span>
                    <span className="text-dark-gray-blue/50">100</span>
                  </div>
                </li>
                <li className="flex justify-between bg-orangey-yellow/5 lg:px-4 lg:py-3 p-4 rounded-xl">
                  <div className="flex gap-x-4 font-semibold">
                    <span>
                      <MemoryIcon />
                    </span>
                    <span className="text-orangey-yellow">Memory</span>
                  </div>
                  <div className="font-semibold flex gap-x-1">
                    <span className="text-dark-gray-blue">92</span>
                    <span className="text-dark-gray-blue/50">&#47;</span>
                    <span className="text-dark-gray-blue/50">100</span>
                  </div>
                </li>
                <li className="flex justify-between bg-green-teal/5 lg:px-4 lg:py-3 p-4 rounded-xl">
                  <div className="flex gap-x-4 font-semibold">
                    <span>
                      <VerbalIcon />
                    </span>
                    <span className="text-green-teal">Verbal</span>
                  </div>
                  <div className="font-semibold flex gap-x-1">
                    <span className="text-dark-gray-blue">80</span>
                    <span className="text-dark-gray-blue/50">&#47;</span>
                    <span className="text-dark-gray-blue/50">100</span>
                  </div>
                </li>
                <li className="flex justify-between bg-cobalt-blue/5 lg:px-4 lg:py-3 p-4 rounded-xl">
                  <div className="flex gap-x-4 font-semibold">
                    <span>
                      <VisualIcon />
                    </span>
                    <span className="text-cobalt-blue">Visual</span>
                  </div>
                  <div className="font-semibold flex gap-x-1">
                    <span className="text-dark-gray-blue">80</span>
                    <span className="text-dark-gray-blue/50">&#47;</span>
                    <span className="text-dark-gray-blue/50">100</span>
                  </div>
                </li>
              </ul>
              <button className="bg-gradient-to-t from-dark-gray-blue to-dark-gray-blue text-white font-semibold rounded-full text-lg lg:my-2 py-3 transition-colors hover:from-light-royal-blue hover:to-light-slate-blue">
                Continue
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

