"use client";
import { useState } from "react";
import SignIn from "@/components/shared/sinin/SignIn";
import { UniversityLogo } from "@/components/shared/university-logo";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function UniversityLoginPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // University of Gondar HR API integration
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      
      toast({
        title: "Access Granted",
        description: `Welcome ${data.user?.name || email}`,
      });
      
      // Redirect to dashboard
      setTimeout(() => window.location.href = "/dashboard", 1000);
      
    } catch (error) {
      toast({
        title: "Authentication Failed",
        description: "Please check your university credentials",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (email: string) => {
    if (!email.includes("@uog.edu.et")) {
      toast({
        title: "Invalid Email",
        description: "Please use your University of Gondar email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Reset failed");

      toast({
        title: "Reset Link Sent",
        description: "Check your university email for instructions",
      });
      
    } catch (error) {
      toast({
        title: "Reset Failed",
        description: "Please contact HR department",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* University Branding Header */}
      <header className="absolute top-0 left-0 right-0 border-b border-blue-100/50 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/di3ll9dgt/image/upload/v1770387114/new_ghw5vi.jpg"
                alt="University of Gondar Logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div>
                <h1 className="font-bold text-gray-900 dark:text-white">University of Gondar</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Human Resource Management System</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                HR Portal v2.1
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="mx-auto max-w-md">
          {/* Main Login Card */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
            {/* University Banner */}
            <div className="rounded-t-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <img
                  src="https://res.cloudinary.com/di3ll9dgt/image/upload/v1770387114/new_ghw5vi.jpg"
                  alt="University Seal"
                  className="h-20 w-20 rounded-full border-4 border-white/30 object-cover shadow-lg"
                />
              </div>
              <h1 className="text-2xl font-bold text-white">HR Management System</h1>
              <p className="mt-2 text-blue-100">Staff & Faculty Portal</p>
            </div>

            {/* Login Form */}
            <div className="p-6">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Secure Sign In</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Use your university credentials
                </p>
              </div>

              <SignIn
                onSignIn={handleSignIn}
                onResetPassword={handleResetPassword}
                isLoading={isLoading}
              />

              {/* Quick Info */}
              <div className="mt-6 space-y-3 rounded-lg bg-blue-50/50 p-4 text-sm dark:bg-gray-800/50">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-blue-600 dark:text-blue-400">📧</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email Format</p>
                    <p className="text-gray-600 dark:text-gray-400">firstname.lastname@uog.edu.et</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-blue-600 dark:text-blue-400">🔐</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Need Help?</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Contact HR: <span className="font-medium">+251-XXXX-XXXX</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="rounded-b-xl border-t border-gray-200 bg-gray-50 p-4 text-center dark:border-gray-800 dark:bg-gray-800/50">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} University of Gondar • HR Department • v2.1
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                This system is for authorized personnel only
              </p>
            </div>
          </div>

          {/* System Status */}
          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-400">System Online</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="text-gray-600 dark:text-gray-400">
              Last Updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}