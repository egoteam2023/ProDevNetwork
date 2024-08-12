import './Cases.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Импортируйте ScrollTrigger
import { ProjectsList } from './CasesList';

gsap.registerPlugin(ScrollTrigger);

const Cases = () => {
  return (
    <div class="container mx-auto bg-transparent py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <h2 className="text-center font-medium text-[clamp(48px,5vw,80px)] tracking-[8px] w-full">
            кейсы
          </h2>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {ProjectsList.map((item) => (
            <a
              href="#"
              class={`border-2 border-solid border-white group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.style}`}
            >
              <img
                src={item.projectScreen}
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
