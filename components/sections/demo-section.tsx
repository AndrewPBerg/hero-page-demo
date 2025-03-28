import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Play, Shield, AlertTriangle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { GradientText } from "@/components/ui/gradient-text"

export default function DemoSection() {
  return (
    <div className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <GradientText>Try <span className="font-aclonica">Fuzzify</span></GradientText>
        </h2>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg text-white/80">See how <span className="font-aclonica">Fuzzify</span> can identify and classify domain threats in real-time</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-primary/20 bg-white/10 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Threat Classification Demo
              </CardTitle>
              <CardDescription className="text-white/60">
                Watch how <span className="font-aclonica">Fuzzify</span> analyzes and scores domain-based threats
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
                  See Threat Detection in Action
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-white/60">
                This interactive demo shows our domain analysis and threat scoring system in real-time
              </p>
            </CardFooter>
          </Card>
          <div className="flex justify-center w-full">
            <Card className="bg-white/10 backdrop-blur-md border border-white/10 max-w-xl w-full">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Threat Dashboard
                </CardTitle>
                <CardDescription className="text-white/60 text-center">
                  Experience the full power of <span className="font-aclonica">Fuzzify</span>'s threat detection engine
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80 text-center">
                  Our advanced threat dashboard provides comprehensive monitoring of potential domain imposters and classifies 
                  each threat on our proprietary risk scale.
                </p>
                <p className="text-white/80 text-center">Features in the full application:</p>
                <ul className="space-y-2 text-white/80 max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <span>Continuous domain impersonation scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-primary mt-0.5" />
                    <span>5-level threat classification system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Visual domain similarity analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <span>Automated remediation recommendations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-2 bg-white text-[#17345A] hover:bg-white/90">
                  <Link href="http://localhost:10002/" target="_blank">
                    Launch Threat Dashboard
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

