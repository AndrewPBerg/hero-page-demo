import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"

interface TeamMember {
  name: string
  role: string
  avatar: string
  bio: string
  social: {
    github?: string
    twitter?: string
    linkedin?: string
  }
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      avatar: "/placeholder.svg?height=200&width=200",
      bio: "Security researcher with 10+ years of experience in domain security and DNS infrastructure.",
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      avatar: "/placeholder.svg?height=200&width=200",
      bio: "Former security engineer at Google with expertise in threat detection and prevention.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      avatar: "/placeholder.svg?height=200&width=200",
      bio: "Full-stack developer specializing in security applications and real-time monitoring systems.",
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Emma Wilson",
      role: "Security Researcher",
      avatar: "/placeholder.svg?height=200&width=200",
      bio: "PhD in Computer Security with focus on DNS vulnerabilities and attack vectors.",
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ]

  return (
    <div className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <GradientText variant="white">Our Team</GradientText>
        </h2>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg text-white/80">
            Our team of security experts and developers is dedicated to protecting your digital identity
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden bg-white/10 backdrop-blur-md border border-white/10">
              <CardHeader className="p-0">
                <div className="aspect-square w-full bg-white/5 flex items-center justify-center">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={member.avatar} alt={member.name} loading="lazy" />
                    <AvatarFallback className="bg-white/10 text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg">
                    <GradientText variant="white">{member.name}</GradientText>
                  </h3>
                  <p className="text-sm text-white/60">{member.role}</p>
                </div>
                <p className="text-sm text-white/80">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-center gap-2 pt-0">
                {member.social.github && (
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-white/60 hover:text-white hover:bg-white/10"
                  >
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                )}
                {member.social.twitter && (
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-white/60 hover:text-white hover:bg-white/10"
                  >
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                )}
                {member.social.linkedin && (
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-white/60 hover:text-white hover:bg-white/10"
                  >
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

