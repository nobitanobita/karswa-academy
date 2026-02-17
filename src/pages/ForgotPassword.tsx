import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Code2, ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
              <Code2 className="h-5 w-5 text-secondary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-primary-foreground">CodeLearn</span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-primary-foreground">Reset password</h1>
          <p className="mt-2 text-sm text-primary-foreground/60">We'll send you a reset link</p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-border/20 bg-card p-8 card-shadow text-center">
            <p className="text-foreground">Check your email for the reset link.</p>
            <Link to="/auth" className="mt-4 inline-flex items-center gap-1 text-sm text-secondary hover:underline">
              <ArrowLeft className="h-3 w-3" /> Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border/20 bg-card p-8 card-shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-secondary"
                placeholder="you@example.com"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3 font-display text-sm font-semibold text-secondary-foreground transition-all hover:brightness-110 disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Reset Link"}
            </button>
            <Link to="/auth" className="block text-center text-sm text-muted-foreground hover:underline">
              Back to login
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
