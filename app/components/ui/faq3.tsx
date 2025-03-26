"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading?: string;
  description?: string;
  items?: FaqItem[];
  supportHeading?: string;
  supportDescription?: string;
  supportButtonText?: string;
  supportButtonUrl?: string;
}

const defaultFaqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is festas?",
    answer:
      "Festas is an FP&A platform designed for companies in the Industrials space. Through our extremely competitive pricing and personalization, Festas is designed to transform legacy businesses for a fraction of the cost.",
  },
  {
    id: "faq-2",
    question: "How does automated budget analysis work?",
    answer:
      "Festas uses AI to personalize financial planning by analyzing your spending, tracking expenses in real-time, and forecasting future trends. It lets you set customized goals, integrates your financial data, and provides actionable insights to optimize your business effectively. With predictive analysis and tailored recommendations, it ensures your financial strategy aligns with your unique needs and objectives.",
  },
  {
    id: "faq-3",
    question: "Which financial integrations are supported?",
    answer:
      "Our financial integrations support a variety of systems, including ERP platforms like NetSuite, QuickBooks, Oracle, SAP, and Xero, CRM systems such as Salesforce and HubSpot, and HRIS tools like BambooHR, Gusto, and Namely. We also integrate with e-commerce solutions like Shopify, payment gateways like PayPal, and accounting software like FreshBooks. Our flexible data ingestion capabilities allow us to work with any system that exports data via CSV or API. Additionally, we can handle paper-based data from documents like invoices and bank statements, accommodating companies that still use traditional methods. If your system isn't listed, we can customize our integrations to meet your specific needs.",
  },
  {
    id: "faq-4",
    question: "Is my financial data secure?",
    answer:
      "Your financial data is secure with us. We maintain robust cybersecurity measures, including encryption, secure access controls, and regular audits to ensure the integrity and confidentiality of your data. Our systems are designed to meet the evolving cybersecurity threats and regulatory requirements, ensuring that your financial information is safeguarded at all times.",
  },
  {
    id: "faq-5",
    question: "What are Festas's benefits?",
    answer:
      "We offer an unprecedented level of customization for industrial companies. From industry-specific KPIs to integration with legacy workflows, Festas was built with all customers in mind. Secondly, our services our simply cheaper. Don't take our word for it - compare our pricing online!",
  },
];

const Faq3 = ({
  heading = "Frequently Asked Questions",
  description = "Discover answers to common questions about our AI-driven platform for budget optimization and forecasting. If you have more questions, our support team is ready to help.",
  items = defaultFaqItems,
  supportHeading = "Need More Help?",
  supportDescription = "Our expert support team is available to provide personalized assistance with your financial planning questions.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://www.festas.com/support",
}: Faq3Props) => {
  return (
    <section className="py-32 bg-[#023047] text-white">
      <div className="container mx-auto px-4 max-w-7xl space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-white">
            {heading}
          </h2>
          <p className="text-[#8ecae6] lg:text-lg">{description}</p>
        </div>
        
        <Accordion type="single" collapsible className="mx-auto w-full lg:max-w-3xl">
          {items.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border-b border-[#219ebc]/30"
            >
              <AccordionTrigger className="text-white hover:text-[#8ecae6] hover:no-underline lg:text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-[#8ecae6] lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-[#01263a] p-4 text-center md:rounded-xl md:p-6 lg:p-8 border border-[#219ebc]/30">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=256&q=80" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1502767089025-6572583495d4?auto=format&fit=crop&w=256&q=80" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg text-white">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-[#8ecae6] lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto bg-[#ffb703] hover:bg-[#fb8500] text-[#023047] font-medium" asChild>
              <a href={supportButtonUrl} target="_blank" rel="noopener noreferrer">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq3 }; 