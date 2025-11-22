import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Leaf, TrendingDown, Gift, BarChart3 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-leaf rounded-full flex items-center justify-center shadow-[var(--shadow-glow)]">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">CarboTrack</h1>
          </div>
          <Button onClick={() => navigate("/auth")} variant="default">
            Get Started
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-20 text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-success via-warning to-danger bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Track Your Carbon Footprint
            </h2>
            <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              Monitor your daily activities with Google Fit integration, reduce carbon emissions, and earn rewards from top Indian brands.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-8 shadow-[var(--shadow-glow)]">
              Start Tracking
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
              Learn More
            </Button>
          </div>
        </section>

        <section className="py-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <CardContent className="pt-6 space-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center">Track Activities</h3>
              <p className="text-muted-foreground text-center text-sm">
                Log your daily activities and see their environmental impact in real-time. Every action counts!
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <CardContent className="pt-6 space-y-4">
              <div className="w-14 h-14 bg-leaf/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingDown className="w-7 h-7 text-leaf" />
              </div>
              <h3 className="text-xl font-semibold text-center">Reduce Impact</h3>
              <p className="text-muted-foreground text-center text-sm">
                Get insights into your carbon footprint and discover ways to reduce your environmental impact.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900">
            <CardContent className="pt-6 space-y-4">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Gift className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-center">Earn Rewards</h3>
               <p className="text-muted-foreground text-center text-sm">
                Reduce your carbon footprint and earn points. Redeem them for real coupons from top Indian brands like Swiggy, Flipkart, and more!
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="py-20 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground">Ready to Make a Difference?</h3>
          <p className="text-muted-foreground">
            Join thousands of users already tracking their carbon footprint and earning rewards for sustainable living.
          </p>
          <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-8">
            Get Started Now
          </Button>
        </section>
      </main>

      <footer className="border-t bg-card/30 backdrop-blur-sm py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 CarboTrack. Making the world greener, one step at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
