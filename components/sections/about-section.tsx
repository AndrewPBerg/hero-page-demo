import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"

export default function AboutSection() {
  return (
    <div className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <GradientText variant="white">About DNS Fuzzing</GradientText>
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-primary/20 bg-white/10 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-6 w-6 text-primary" />
                <GradientText variant="white">What is DNS Fuzzing?</GradientText>
              </CardTitle>
              <CardDescription className="text-white/70">Protecting your brand from domain imposters</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-white/80">
                DNS Fuzzing is an advanced security tool designed to detect and prevent domain name impersonation
                attacks. By analyzing potential typosquatting, homograph attacks, and other domain spoofing techniques,
                we help organizations protect their brand identity and customers from phishing attempts.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="bg-white/10 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">
                  <GradientText variant="white">Key Features</GradientText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Real-time monitoring of domain registrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Advanced algorithms to detect visual similarities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Automated alerts for potential domain threats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Comprehensive reporting and threat analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">
                  <GradientText variant="white">Why It Matters</GradientText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-white/80">
                  Domain impersonation attacks are increasingly sophisticated, targeting both users and organizations.
                  DNS Fuzzing provides the proactive protection needed to identify and mitigate these threats before
                  they can cause damage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

