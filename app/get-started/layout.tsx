import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Get Started | Festas FP&A Agents',
  description: 'Begin your journey with Festas FP&A Agents. Create an account to start automating your financial planning and analysis for your industrial business.',
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 