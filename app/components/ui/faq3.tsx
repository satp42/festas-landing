// New file: FAQ component for Festas
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
    question: "What is Festas?",
    answer:
      "Festas is an AI-driven platform that automates budget analysis, optimization, and rolling forecasts to empower small businesses.",
  },
  {
    id: "faq-2",
    question: "How does automated budget analysis work?",
    answer:
      "Our AI agents analyze historical financial data to identify spending inefficiencies and offer actionable recommendations.",
  },
  {
    id: "faq-3",
    question: "Which financial integrations are supported?",
    answer:
      "Festas seamlessly integrates with popular accounting software like QuickBooks and Xero, and supports CSV/Excel uploads.",
  },
  {
    id: "faq-4",
    question: "How are rolling forecasts generated?",
    answer:
      "We use advanced machine learning models that update your forecasts automatically as new data comes in.",
  },
  {
    id: "faq-5",
    question: "Is my financial data secure?",
    answer:
      "Yes, we use end-to-end encryption and comply with GDPR and CCPA to ensure that your data is secure.",
  },
  {
    id: "faq-6",
    question: "How can I get support?",
    answer:
      "Our dedicated support team is available to assist you with any questions. Contact us via our support portal.",
  },
];

const Faq3 = ({
  heading = "Frequently Asked Questions about Festas",
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
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
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
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
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