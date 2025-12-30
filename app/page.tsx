"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, ArrowUpRight, Calendar, Clock, Eye } from "lucide-react"
import { SiLeetcode } from "react-icons/si"
import { ExperienceCard } from "@/components/ExperienceCard"
import { ProjectCardMinimal } from "@/components/ProjectCardMinimal"
import { ThemeToggle } from "@/components/ThemeToggle"

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readingTime: number
  views: number
}

export default function Home() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  const contributions = [
    // {
    //   title: "Google Summer of Code, SugarLabs",
    //   subtitle: "Redesigned project storage of Music Blocks via GitHub",
    //   description: "Worked on enhancing the storage layer of Music Blocks, improving performance and reliability.",
    //   link: "https://github.com/Nitiksh691",
    // },
  ]


  const projects = [
    {
      title: "DTUnite",
      description: "A college campus community platform for students to connect and collaborate.",
      image: "/MYIMG/dtUnite.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
      link: "https://dtunite.vercel.app/",
    },
    {
      title: "LMS Platform",
      description: "A Learning Management System for course management and student engagement.",
      image: "/MYIMG/lms.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Razorpay"],
      link: "https://lmswebsite-red.vercel.app/",
    },
    {
      title: "EyeScope AI",
      description: "AI-powered retina disease detection platform with secure authentication.",
      image: "/MYIMG/eyeScope.png",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
      link: "https://eye-scope-ai.vercel.app/",
    },
    {
      title: "Stay Vista",
      description: "Hotel booking application with authentication and cloud image uploads.",
      image: "/MYIMG/stayvista.png",
      tags: ["Node.js", "MongoDB", "EJS", "Bootstrap"],
      link: "https://stayvista-t9z6.onrender.com/",
    },
    {
      title: "Autocomplete Engine",
      description: "C++ based autocomplete engine using STL and file handling.",
      image: "/MYIMG/auto.png",
      tags: ["C++", "STL", "OOPS", "File I/O"],
      link: "https://github.com/utkarshX-dev/cpp-autocomplete-trie",
    },
    {
      title: "Playlist Duration Calculator",
      description: "Calculate total playlist duration using YouTube Data API.",
      image: "/MYIMG/yt.png",
      tags: ["Next.js", "Tailwind", "YouTube API"],
      link: "https://youtube-playlist-duration-steel.vercel.app/",
    },
    {
      title: "Spotify Clone",
      description: "Music streaming app clone with authentication and playlists.",
      image: "/MYIMG/spotify.png",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://spotify-clone-azure-one.vercel.app/",
    },
    {
      title: "Weather App",
      description: "Real-time weather app using public APIs.",
      image: "/MYIMG/weather.png",
      tags: ["JavaScript", "API", "HTML", "CSS"],
      link: "https://weather-app-seven-delta-38.vercel.app/",
    },
    {
      title: "Simon Says Game",
      description: "Classic Simon Says memory game built with JavaScript.",
      image: "/MYIMG/simonsaysgame.png",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://simon-says-game-fawn.vercel.app/",
    },
    {
      title: "Code Editor",
      description: "A Simple Web-based code editor with syntax highlighting for C++, Python, JavaScript.",
      image: "/MYIMG/codeeditor.png",
      tags: ["React", "Monaco Editor", "Judge0 API"],
      link: "https://www.devdual.me/",
    }
  ]
  const techStack = [
    { name: "HTML", icon: "/MYIMG/html.webp" },
    { name: "CSS", icon: "/MYIMG/css3.png" },
    { name: "JavaScript", icon: "/MYIMG/js.png" },
    { name: "TypeScript", icon: "/MYIMG/typescript.png" },

    { name: "React", icon: "/MYIMG/react.svg" },
    { name: "Next.js", icon: "/MYIMG/nextjs.png" },

    { name: "Node.js", icon: "/MYIMG/nodeJs.png" },
    { name: "Express", icon: "/MYIMG/Express.png" },
    { name: "MongoDB", icon: "/MYIMG/mongodb.jpeg" },
    { name: "SQL", icon: "/MYIMG/sql.png" },

    { name: "Tailwind CSS", icon: "/MYIMG/tailwind.png" },
    { name: "Bootstrap", icon: "/MYIMG/bootstrap.png" },

    { name: "Git", icon: "/MYIMG/git.png" },
    { name: "GitHub", icon: "/MYIMG/wgithub.png" },
    { name: "VS Code", icon: "/MYIMG/vscode.png" },

    { name: "C", icon: "/MYIMG/c.png" },
    { name: "C++", icon: "/MYIMG/c++.png" },
    { name: "Redux", icon: "/MYIMG/redux.png" },
    { name: "Linux", icon: "/MYIMG/linux.png" },
    { name: "postman", icon: "/MYIMG/postman.png" },
  ]

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/posts")
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data)) {
            setBlogs(data)
          } else {
            setBlogs([])
          }
        }
      } catch (error) {
        setBlogs([])
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <main className="min-h-screen bg-[#fdfdfd] text-[#09090b] font-sans selection:bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-24">

        {/* Header section */}
        <section className="space-y-8 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl border border-zinc-200 bg-white p-1 shadow-sm overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
                <Image
                  src="/me.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Utkarsh Bhandari</h1>
                <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1 dark:text-zinc-400">
                  <span>Software Engineer</span>
                  <span>•</span>
                  <span>20 Y/O</span>
                  <div className="flex items-center gap-3 ml-2">
                    <a href="https://github.com/utkarshX-dev" className="text-zinc-400 hover:text-zinc-900 transition-colors dark:hover:text-white"><Github className="w-4 h-4" /></a>
                    {/* <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors dark:hover:text-white"><Linkedin className="w-4 h-4" /></a> */}
                    <a href="https://linkedin.com/in/utkarsh-bhandari" className="text-zinc-400 hover:text-zinc-900 transition-colors dark:hover:text-white"><Linkedin className="w-4 h-4" /></a>
                    <a href="https://leetcode.com/u/ishowcode4444/" className="text-zinc-400 hover:text-zinc-900 transition-colors dark:hover:text-white"><SiLeetcode className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            </div>
            <ThemeToggle />
          </div>

          <div className="space-y-4 text-zinc-600 leading-relaxed max-w-2xl dark:text-zinc-400">
            <p>
              I love to build things & solving problems. I love exploring how systems work. My next deep dive is into the world of blockchains and system design.
            </p>
            <p>
              This isn’t just a portfolio  it’s a <strong>directory of my explorations</strong>.
              I use this space to share blogs, personal insights, and learnings from my journey in software engineering.
            </p>
            <p className="text-sm italic opacity-80">
              It is currently <b>01:21 AM</b> on <i>Dec 28, 2025</i>. I’m setting high goals for this space, and if you’re reading an article here, it means I’m following through. Feel free to explore.
            </p>
          </div>
        </section>

        {/* Experience section */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Technologies I’ve Worked With
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="
          group
          flex flex-col items-center gap-3 p-4 rounded-2xl
          border border-zinc-100 bg-white shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-lg hover:border-zinc-200
          dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-700
        "
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="
            object-contain
            grayscale opacity-80
            transition-all duration-300
            group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
          "
                />
                <span
                  className="
            text-xs text-zinc-600 dark:text-zinc-400
            transition-colors duration-300
            group-hover:text-zinc-900 dark:group-hover:text-zinc-200
          "
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>



        {/* Education section */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Education</h2>
          <div className="p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Delhi Technological University</h3>
            <p className="text-sm text-zinc-500 font-medium dark:text-zinc-400">B.Tech, ECE | 2024- 2028 | GPA: 9.35</p>
            <p className="text-sm text-zinc-500 mt-3 leading-relaxed dark:text-zinc-400">
              Got introduced to CS, started building things, made great friends & become president of my Lit Soc.
            </p>
          </div>


          <div className="p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Sarvodaya Vidyalaya School</h3>
            <p className="text-sm text-zinc-500 font-medium dark:text-zinc-400">Class 10th-12th | 2022 - 2023 | 12th-80%  </p>
            <p className="text-sm text-zinc-500 mt-3 leading-relaxed dark:text-zinc-400">
              Completed higher secondary education with a Where curiosity for Physics first took shape.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Goverment Boys Sr. Sec. School</h3>
            <p className="text-sm text-zinc-500 font-medium dark:text-zinc-400">class 9th-10th | 2020-2021 | 10th-89%</p>
            <p className="text-sm text-zinc-500 mt-3 leading-relaxed dark:text-zinc-400">
              Completed secondary education. Less focus on academics, more on exploring new stuffs.
            </p>
          </div>
        </section>

        {/* Projects section */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Stuff I built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.length > 0 ? projects.map((project, i) => (
              <ProjectCardMinimal key={i} {...project} />
            )) : <p className="text-zinc-400 text-sm italic">No projects found.</p>}
          </div>
        </section>

        {/* Writing section */}
        <section className="space-y-10 pb-24 border-t border-zinc-100 pt-20 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Writing</h2>
            <Link href="/blog" className="text-sm font-medium text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1.5 dark:hover:text-white">
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-8">
            {blogs.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block space-y-2.5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-zinc-600 transition-colors dark:text-zinc-200 dark:group-hover:text-white">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 group-hover:text-zinc-600 transition-colors shrink-0">
                    <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> {post.views}</span>
                    <span>{new Date(post.date).getFullYear()}</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed dark:text-zinc-400">{post.excerpt}</p>
              </Link>
            ))}

            {loading && (
              <div className="space-y-6 animate-pulse">
                {[1, 2].map(i => (
                  <div key={i} className="h-24 bg-zinc-50 rounded-2xl border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800" />
                ))}
              </div>
            )}

            {!loading && blogs.length === 0 && (
              <p className="text-sm text-zinc-400 italic">No posts yet. Working on something interesting.</p>
            )}
          </div>
        </section>

      </div>
    </main>
  )
}
