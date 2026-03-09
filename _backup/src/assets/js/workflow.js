(function () {
  document.addEventListener("FINEGUIDE_LOADED", (event) => {
    console.log("FINEGUIDE_LOADED", event);

    $$fineguide.bubble.show("Hi 👋 Welcome to Fineguide!", {
      id: "welcome-bubble", 
      duration: 10000,
    });

    setTimeout(() => {
      $$fineguide.bubble.showHtml({
        title: "Let me help you get started!",
        id: "get-started-tour",
        content: "Let me help you get started! <br> Are you looking to:",
        duration: 0,
        buttons: [
          {
            title: "Capture leads",
            style: "primary",
            fn: () => {
              $$fineguide.bubble.show("Would you like me to guide you on how Fineguide can help you?", {
                title:"Welcome to Fineguide",
                duration: 0,
                buttons: [
                  {
                    title: "Yes",
                    style: "primary",
                    fn: () => {
                      $$fineguide.workflow.start({
                        title: "Capture leads workflow",
                        id: "capture-leads-tour",
                        actions: [
                          // Step 1: Navigate to lead generation page
                          { fn: "FG_NAVIGATE", args: ["/lead-generation"], desc: "Taking you to our Lead Capture solution 🎯" },
                          // Step 2: Address the problem
                          { fn: "FG_MESSAGE", desc: "Did you know most businesses lose 70% of website visitors without ever capturing their info? 😱" },
                          // Step 3: Scroll to pain points
                          { fn: "FG_SCROLL", args: [".bg-red-900\\/20"], desc: "Let me show you the common problems..." },
                          // Step 4: Explain problem
                          { fn: "FG_MESSAGE", desc: "Low conversions, missed opportunities after hours, and wasting time on unqualified leads - sound familiar?" },
                          // Step 5: Introduce solution
                          { fn: "FG_SCROLL", args: [".bg-gradient-to-r.from-green-900\\/20"], desc: "Here's how we solve this..." },
                          // Step 6: Explain AI approach
                          { fn: "FG_MESSAGE", desc: "Our AI agents work 24/7 across Web Chat, WhatsApp, Telegram & Social Media - engaging every visitor in natural conversations 🤖" },
                          // Step 7: Show the 3-step process
                          { fn: "FG_SCROLL", args: [".bg-slate-900\\/50"], desc: "The magic happens in 3 simple steps..." },
                          // Step 8: Explain process
                          { fn: "FG_MESSAGE", desc: "1️⃣ Engage visitors naturally, \n\n 2️⃣ Ask smart qualifying questions, \n\n 3️⃣ Capture contact details when they're ready!" },
                          // Step 9: Scroll to benefits
                          { fn: "FG_SCROLL", args: [".w-20.h-20.bg-gradient-to-r.from-green-600"], desc: "And the results speak for themselves..." },
                          // Step 10: Show stats
                          { fn: "FG_MESSAGE", desc: "24/7 lead capture, 30% more qualified leads, and setup takes just 5 minutes! ⚡" },
                          // Step 11: CRM integration
                          { fn: "FG_SCROLL", args: [".text-blue-300"], desc: "Plus, we integrate with your tools..." },
                          // Step 12: Integration message
                          { fn: "FG_MESSAGE", desc: "Leads sync instantly to Salesforce, HubSpot, Pipedrive and 50+ more CRMs - no manual work! 🔗" },
                          // Step 13: Final CTA
                          { fn: "FG_SCROLL", args: ["a[href='pricing'].bg-gradient-to-r.from-green-600"], desc: "Ready to get started?" },
                          // Step 14: Closing message
                          { fn: "FG_MESSAGE", desc: "Start your free 30-day trial now - no credit card needed! Want me to help you set it up? 🚀" }
                        ],
                        options: {
                          highlight: true,
                          autoDelay: 5000  // 5 seconds between steps in auto mode
                        }
                      }).then(() => {
                        $$fineguide.bubble.show("Click the chat button anytime if you have questions! 💬", {
                          duration: 0,
                          buttons: [
                            {
                              title: "Start Free Trial",
                              style: "primary",
                              fn: () => window.location.href = "/pricing"
                            },
                            {
                              title: "Talk to Sales",
                              fn: () => $$fineguide.chat.sendMessage("I'd like to talk to someone about lead capture", { openChat: true })
                            }
                          ]
                        });
                      });
                    },
                  },
                  {
                    title: "No",
                    style: "secondary",
                    fn: () => $$fineguide.bubble.show("Alright, let me know if you need anything 🙂"),
                  },
                ],
              });
            },
          },
          {
            title: "Automate support",
            style: "primary",
            fn: () => {
              console.log("Automate support");
            },
          },
          {
            title: "Call center QA",
            style: "primary",
            fn: () => {
              console.log("Call center QA");
            },
          },
          {
            title: "Custom Automations",
            style: "primary",
            fn: () => {
              console.log("Custom Automations");
            },
          },
        ],
      });
    }, 1000);
  });

})();