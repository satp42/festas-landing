"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQPageSchema } from "@/components/shared/seo-schema";

const faqItems = [
  {
    id: "1",
    title: "What is Festas?",
    content:
      "Festas is an FP&A platform specifically designed for legacy trucking, logistics, and industrial businesses. It helps you automate tedious financial tasks, giving you real-time visibility into your finances without compromising the control you value. With transparent, affordable pricing and tailored tools, Festas ensures your financial planning works exactly as your business demands—no surprises, no unnecessary complexity."
  },
  {
    id: "2",
    title: "How does Festas simplify budgeting and forecasting?",
    content:
      "Festas uses powerful AI-driven analytics to automate your budgeting and forecasting processes. It integrates directly with your existing financial systems to provide instant, accurate insights. Say goodbye to manual spreadsheets, delayed reports, and endless revisions—Festas lets you forecast cash flow, manage budgets, and adjust for unexpected changes effortlessly, so you can focus more on strategic decisions and less on number-crunching."
  },
  {
    id: "3",
    title: "Does Festas integrate with my existing financial software?",
    content:
      "Yes. Festas seamlessly integrates with popular accounting and ERP systems such as QuickBooks Desktop and Online, NetSuite, Oracle, SAP, and Xero, along with CRM tools like Salesforce and HubSpot. It also easily connects with HRIS systems (BambooHR, Gusto, Namely), e-commerce platforms (Shopify), and payment gateways (PayPal). For legacy businesses, we support data ingestion from CSV exports, APIs, and even traditional paper invoices or statements—making the transition smooth and hassle-free."
  },
  {
    id: "4",
    title: "How secure is my financial data with Festas?",
    content:
      "Your data security is a top priority for Festas. We use advanced encryption, secure user authentication, and regular security audits to protect your sensitive financial information. You retain full control over your data, and we commit to maintaining industry-leading standards to ensure confidentiality and compliance."
  },
  {
    id: "5",
    title: "What makes Festas different from other FP&A tools?",
    content:
      "Festas is built explicitly for the unique needs of legacy trucking, logistics, and industrial businesses. Unlike generic solutions, Festas respects your traditional values of simplicity, control, and affordability. We offer highly customizable dashboards, industry-specific KPIs, and straightforward pricing that won't trap you in endless subscriptions or hidden fees. Festas delivers the reliability and ease-of-use you remember from trusted legacy solutions—but with the power and convenience of modern technology."
  }
];

interface FAQSectionProps {
  className?: string;
}

export function FAQSection({ className }: FAQSectionProps) {
  // Format FAQ items for structured data
  const faqStructuredData = faqItems.map(item => ({
    question: item.title,
    answer: item.content
  }));

  return (
    <div className={cn("container mx-auto px-4 md:px-8 py-20 lg:py-40 relative z-20", className)}>
      {/* FAQ Schema.org structured data */}
      <FAQPageSchema questions={faqStructuredData} />
      
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-regular tracking-tighter mb-4">
          Frequently <span className="text-spektr-cyan-50">Asked</span> Questions
        </h2>
        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about Festas FP&A Agents for your industrial business.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <AccordionPrimitive.Root
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqItems.map((item) => (
            <AccordionPrimitive.Item 
              key={item.id} 
              value={item.id}
              className="relative border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden px-2 md:px-4 transition-all duration-300 
                hover:border-spektr-cyan-50/50 hover:shadow-[0_0_25px_rgba(125,211,252,0.15)] 
                bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-spektr-cyan-50/5 to-transparent transition-opacity duration-700 pointer-events-none"></div>
              <AccordionPrimitive.Header className="flex relative z-10">
                <AccordionPrimitive.Trigger
                  className="flex flex-1 items-center justify-between py-5 md:py-6 px-2 text-lg font-medium text-left transition-all hover:text-spektr-cyan-50 group"
                >
                  {item.title}
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-spektr-cyan-50 group-data-[state=open]:rotate-180" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content
                className="relative z-10 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base"
              >
                <div className="px-2 pb-6 pt-1 text-muted-foreground">
                  <p className="leading-relaxed">{item.content}</p>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
      
      <div className="mt-12 md:mt-16 text-center">
        <p className="text-muted-foreground">
          Have more questions? <a href="https://cal.com/satwikp/festas-demo-call" className="text-spektr-cyan-50 hover:underline font-medium">Contact our team</a> for personalized assistance.
        </p>
      </div>
    </div>
  );
} 