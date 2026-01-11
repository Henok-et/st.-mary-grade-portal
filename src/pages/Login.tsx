import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lock, User, AlertCircle } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate loading
    setTimeout(() => {
      if (username === "kebron" && password === "1234") {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please check your username and password.");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary flex flex-col">
      {/* Header */}
      <header className="bg-primary py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <img
            src={universityLogo}
            alt="St. Mary University Logo"
            className="h-12 w-12 rounded-full bg-white p-1"
          />
          <div>
            <h1 className="text-primary-foreground text-xl font-bold">
              St. Mary University
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Student Information System
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary animate-fade-in">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Student Portal Login</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Enter your credentials to access your academic records
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-md flex items-center gap-2 animate-fade-in">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground font-medium">
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Demo credentials: <span className="font-medium">kebron</span> / <span className="font-medium">1234</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 St. Mary University. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Student Information System v2.0
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
