import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import { GradientText } from "@/components/ui/gradient-text"

export default function DemoSection() {
  return (
    <div className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <GradientText variant="white">Demo</GradientText>
        </h2>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg text-white/80">See DNS Fuzzing in action and discover how it can protect your domain</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* <Card className="border-primary/20 bg-white/10 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">
                <GradientText variant="white">Interactive Demo</GradientText>
              </CardTitle>
              <CardDescription className="text-white/60">
                Try our interactive demo to see how DNS Fuzzing detects domain imposters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-white/5 rounded-md flex items-center justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <Play className="h-4 w-4" />
                  Play Demo Video
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-white/60">
                This demo showcases our core detection algorithms and reporting features
              </p>
            </CardFooter>
          </Card> */}
          <div className="flex justify-center w-full">
            <Card className="bg-white/10 backdrop-blur-md border border-white/10 max-w-xl w-full">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  <GradientText variant="white">Try DNS Fuzzing</GradientText>
                </CardTitle>
                <CardDescription className="text-white/60 text-center">
                  Ready to see how DNS Fuzzing can protect your domain?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80 text-center">
                  Our web application provides a comprehensive dashboard for monitoring potential domain threats and
                  managing alerts.
                </p>
                <p className="text-white/80 text-center">Features available in the full application:</p>
                <ul className="space-y-2 text-white/80 max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Domain monitoring dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Real-time threat detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Detailed threat analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Custom alert configurations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-2 bg-white text-[#17345A] hover:bg-white/90">
                  <Link href="http://localhost:10002/" target="_blank">
                    Launch Application
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

