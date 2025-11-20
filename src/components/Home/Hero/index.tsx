"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id='home'
      className='relative z-40 overflow-hidden'
    >
      {/* Background image for the following div set in global CSS file */}
      <div className="bg-hero pt-28 sm:pt-36 lg:pt-[170px] pb-24 lg:pb-[120px] xl:container">
        <div className='px-4 xl:container'>
          <div className='mx-auto mb-12 max-w-s sm:max-w-lg md:max-w-3xl text-center lg:mb-0'>
            <h1 className='font-heading mb-5 
              text-3xl 
              sm:text-4xl 
              md:text-6xl 
              font-bold md:leading-[60px] dark:text-white'>
              <span className='text-[#efc061]'>Electrical</span> & <span className='text-[#95e5e9]'>Plumbing</span> Solutions for Your Home
            </h1>
            <p className='text-dark-text mb-12 text-base'>
              Hendricks' fully-licensed professionals have kept homes running for 22 years. What can we do for your home?
            </p>
            <div className='flex flex-wrap items-center justify-center'>
              <a
                href='#features'
                className='bg-[#224446] font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-[10px] text-base text-[#efc061] md:px-8 md:py-[14px]'
              >
                Request Service
                <span className='pl-3'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </a>
              <a
                href='#about'
                className='font-heading text-dark hover:text-primary dark:hover:text-primary inline-flex items-center rounded-sm px-8 py-[14px] text-base dark:text-white'
              >
                <span className='pr-3'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='fill-current'
                  >
                    <path d='M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z' />
                  </svg>
                </span>
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* The following tag provides a background noise overlay */}
      <div className='bg-noise-pattern absolute bottom-0 left-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40'></div>
      {/* The following tag provides part of the gradient overlay */}
      <div className='absolute right-0 top-0 -z-10'>
        <svg
          width='1356'
          height='860'
          viewBox='0 0 1356 860'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            opacity='0.5'
            filter='url(#filter0_f_201_2181)'
          >
            <rect
              x='450.088'
              y='-126.709'
              width='351.515'
              height='944.108'
              transform='rotate(-34.6784 450.088 -126.709)'
              fill='url(#paint0_linear_201_2181)'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_201_2181'
              x='0.0878906'
              y='-776.711'
              width='1726.24'
              height='1876.4'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood
                floodOpacity='0'
                result='BackgroundImageFix'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='225'
                result='effect1_foregroundBlur_201_2181'
              />
            </filter>
            <linearGradient
              id='paint0_linear_201_2181'
              x1='417.412'
              y1='59.4717'
              x2='966.334'
              y2='603.857'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#ABBCFF' />
              <stop
                offset='0.859375'
                stopColor='#4A6CF7'
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* The following tag provides a secondary gradient overlay */}
      <div className='absolute bottom-0 left-0 -z-10'>
        <svg
          width='1469'
          height='498'
          viewBox='0 0 1469 498'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            opacity='0.3'
            filter='url(#filter0_f_201_2182)'
          >
            <rect
              y='450'
              width='1019'
              height='261'
              fill='url(#paint0_linear_201_2182)'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_201_2182'
              x='-450'
              y='0'
              width='1919'
              height='1161'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood
                floodOpacity='0'
                result='BackgroundImageFix'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='225'
                result='effect1_foregroundBlur_201_2182'
              />
            </filter>
            <linearGradient
              id='paint0_linear_201_2182'
              x1='-94.7239'
              y1='501.47'
              x2='-65.8058'
              y2='802.2'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#ABBCFF' />
              <stop
                offset='0.859375'
                stopColor='#4A6CF7'
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
