export type FaqItem = {
  q: string;
  a: string;
};

export const faqs: FaqItem[] = [
  {
    q: "What is Decision Journal?",
    a: "Decision Journal is a calm, private app for recording the important decisions you make. You capture your reasoning, options and confidence before you decide, then return later to review how things actually turned out. Over time, this simple habit helps you spot patterns and sharpen your judgment.",
  },
  {
    q: "How is my data stored?",
    a: "Everything you write is stored locally on your device. There is no cloud database and no server holding your entries. Your journal lives on your phone, and only you can see it.",
  },
  {
    q: "Does it require internet?",
    a: "No. Decision Journal works fully offline. You can capture and review decisions anywhere, with or without a connection, because nothing ever needs to be sent anywhere.",
  },
  {
    q: "Is my data private?",
    a: "Completely. There are no accounts, no sign-ups, no analytics and no advertising. We don't collect any personal information, and your decisions never leave your device unless you choose to export them yourself.",
  },
  {
    q: "Can I export my journal?",
    a: "Yes. You can export a clean copy of your journal at any time, initiated entirely by you. Your entries are yours to keep, back up or take with you.",
  },
  {
    q: "Is there a subscription?",
    a: "Decision Journal is designed to be a straightforward, respectful product. You can start for free, and there are no ads, no tracking and no data harvesting behind the scenes. Any paid features are always clearly optional.",
  },
];
