// import { Geist, Geist_Mono } from 'next/font/google';
// const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
// const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// export const geistSans = GeistSans;
// export const geistMono = GeistMono;

import localFont from 'next/font/local';

export const IBMPlexSans = localFont({
  src: [
    {
      path: '/fonts/IBMPlexSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '/fonts/IBMPlexSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '/fonts/IBMPlexSans-SemiBold.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '/fonts/IBMPlexSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ]
  // display: 'swap'
  // variable: '--ibm-plex-sans'
});

export const BebasNeue = localFont({
  src: [
    {
      path: '/fonts/BebasNeue-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  // display: 'swap',
  variable: '--bebas-neue'
});
