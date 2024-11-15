import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MoonIcon, SunIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact']
      let currentSection = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'AWS', level: 65 },
  ]

  const projects = [
    { 
      title: 'E-commerce Platform', 
      description: 'A full-stack e-commerce solution with React and Node.js',
      image: '/placeholder.svg?height=200&width=300',
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-platform-demo.com'
    },
    { 
      title: 'AI Chatbot', 
      description: 'An AI-powered chatbot using natural language processing',
      image: '/placeholder.svg?height=200&width=300',
      github: 'https://github.com/yourusername/ai-chatbot',
      demo: 'https://ai-chatbot-demo.com'
    },
    { 
      title: 'Task Management App', 
      description: 'A React Native mobile app for task management',
      image: '/placeholder.svg?height=200&width=300',
      github: 'https://github.com/yourusername/task-management-app',
      demo: 'https://task-management-app-demo.com'
    },
    { 
      title: 'Data Visualization Dashboard', 
      description: 'An interactive dashboard using D3.js and React',
      image: '/placeholder.svg?height=200&width=300',
      github: 'https://github.com/yourusername/data-viz-dashboard',
      demo: 'https://data-viz-dashboard-demo.com'
    },
  ]

  const blogPosts = [
    { 
      title: 'The Future of Web Development', 
      excerpt: 'Exploring emerging trends and technologies shaping the web...',
      date: '2023-05-15',
      link: '/blog/future-of-web-development'
    },
    { 
      title: 'Optimizing React Performance', 
      excerpt: 'Tips and tricks to boost your React application\'s performance...',
      date: '2023-04-22',
      link: '/blog/optimizing-react-performance'
    },
    { 
      title: 'Introduction to GraphQL', 
      excerpt: 'A beginner\'s guide to understanding and implementing GraphQL...',
      date: '2023-03-10',
      link: '/blog/introduction-to-graphql'
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Jane Doe</Link>
          <div className="flex items-center space-x-4">
            {['home', 'about', 'skills', 'projects', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                className={`capitalize ${activeSection === item ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => {
                  setActiveSection(item)
                  const element = document.getElementById(item)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {item}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="home" className="py-20 text-center">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Jane Doe"
            width={200}
            height={200}
            className="mx-auto rounded-full mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">Jane Doe</h1>
          <p className="text-xl text-muted-foreground mb-8">Building the Future with Code</p>
          <Button onClick={() => {
            setActiveSection('projects')
            const element = document.getElementById('projects')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}>
            View My Work
          </Button>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Hello! I'm Jane, a passionate software developer with a knack for creating elegant solutions to complex problems. With a background in Computer Science and 5+ years of industry experience, I've had the pleasure of working on a diverse range of projects that have honed my skills and fueled my curiosity.
              </p>
              <p className="mb-4">
                My journey in tech began with a fascination for how software can impact lives. This drive led me to pursue a degree in Computer Science from Tech University, where I graduated with honors. Since then, I've been on an exciting path of continuous learning and growth.
              </p>
              <p>
                When I'm not coding, you can find me exploring hiking trails, experimenting with new cooking recipes, or contributing to open-source projects. I believe in the power of technology to create positive change, and I'm always eager to take on new challenges that push the boundaries of what's possible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>🎓 BS in Computer Science from Tech University</li>
                <li>💼 5+ years of professional software development experience</li>
                <li>🏆 Awarded "Innovator of the Year" at TechCorp (2022)</li>
                <li>🌱 Passionate about sustainable technology and AI ethics</li>
                <li>🎨 Hobby: Digital illustration and UI/UX design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline">
                    <Link href={project.github}>GitHub</Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.demo}>Live Demo</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link">
                    <Link href={post.link}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Send me a message and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Email: jane.doe@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Location: San Francisco, CA</p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/janedoe" className="text-muted-foreground hover:text-primary">
                    <GithubIcon className="h-6 w-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" className="text-muted-foreground hover:text-primary">
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link href="https://twitter.com/janedoe" className="text-muted-foreground hover:text-primary">
                    <TwitterIcon className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Jane Doe. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://github.com/janedoe" className="text-muted-foreground hover:text-primary">
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/janedoe" className="text-muted-foreground hover:text-primary">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com/janedoe" className="text-muted-foreground hover:text-primary">
              <TwitterIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
