import './globals.css'
import localFont from "next/font/local";
import {Dosis} from "next/font/google";
// import react query 
const dosis = Dosis({subsets:['latin'],display:"swap",variable:"--font-dosis"})
const kenyanCoffee = localFont({src:"fonts/kenyan coffee rg.otf",variable:"--font-kenyan"})
const maxwell = localFont({src:"fonts/MAXWELL REGULAR.ttf",variable:"--font-maxwell"})
const intro = localFont({src:"fonts/intro-cond.otf",variable:"--font-intro"})

// export const metadata = {
//   title: 'Zulqarnain Haider | Web Developer',
//   description: 'A Passionate Web Developer',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="/solid.js" ></script>
      </head>
      <body className={`bg-black ${kenyanCoffee.variable} ${maxwell.variable} ${intro.variable} ${dosis.variable}`}>{children}</body>
    </html>
  )
}
