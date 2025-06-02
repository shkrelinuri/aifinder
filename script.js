const items = [
    {
      name: "ChatGPT",
      imageUrl: "images/ChatGPT.png",
      url: "https://chat.openai.com/",
      description: "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response."
    },
    {
      name: "Quillbot",
      imageUrl: "images/quillbot.png",
      url: "https://quillbot.com/",
      description: "QuillBot is a paraphrasing and summarizing tool that helps millions of students and professionals using state-of-the-art AI to rewrite any sentence, paragraph, or article."
    },
    {
      name: "Consensus",
      imageUrl: "images/consensus.jpg",
      url: "https://consensus.app/",
      description: "Great for doing background research and gathering sources. It's essentially a search engine, powered by AI, that gets its information from actual research papers."
    },
    {
      name: "Perplexity AI",
      imageUrl: "images/perplexity.png",
      url: "https://www.perplexity.ai/",
      description: "Perplexity AI harnesses the power of OpenAI's GPT-3.5 language model, enabling nuanced understanding and generation of text."
    },
    {
      name: "MeetGeek",
      imageUrl: "images/meetgeek.png",
      url: "https://meetgeek.ai/",
      description: "MeetGeek is an AI meeting assistant that automatically video records, transcribes, summarizes, and provides key insights from every meeting."
    },
    {
        name: "YouTube Summary with ChatGPT",
        imageUrl: "images/youtubechat.jpg",
        url: "https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli?pli=1",
        description: "It's a free Chrome extension that automatically transcribes and summarizes any YouTube video."
      },
      {
        name: "Lumelixr.ai",
        imageUrl: "images/lumelixr.jpg",
        url: "https://lumelixr.ai/",
        description: "Lumelixr.ai converts plain english into Excel & Google Sheets formulas."
      },
      {
        name: "Texero",
        imageUrl: "images/texero.png",
        url: "https://textero.ai/",
        description: "Textero AI offers an AI-powered essay writer and other free essay writing"
      },
      {
        name: "Hyperwrite Ai",
        imageUrl: "images/hyperwrite.png",
        url: "https://www.hyperwriteai.com/",
        description: "Your personal AI writing assistant for content generation, research, speeches, rewriting, and more."
      },
      {
        name: "Writesonic",
        imageUrl: "images/writesonic.png",
        url: "https://writesonic.com/",
        description: "Writesonic is an AI writer that creates SEO-friendly content for blogs, Facebook ads, Google ads, and Shopify for free."
      },
      {
        name: "WolframAlpha",
        imageUrl: "images/wolfram.png",
        url: "https://www.wolframalpha.com/",
        description: "Wolfram Alpha is a powerful computational knowledge engine that can perform various mathematical calculations and solve equations."
      },
      {
        name: "mokker.ai",
        imageUrl: "images/mokker.png",
        url: " https://mokker.ai/",
        description: " Mokker's AI product photo generator crafts engaging, high-quality images – perfect for capturing attention on any social media platform."
      },
      {
        name: "synthesia.io",
        imageUrl: "images/synthesia.png",
        url: " https://www.synthesia.io/",
        description: " Create studio-quality videos with AI avatars and voiceovers in 130+ languages. It’s as easy as making a slide deck."
      },
      {
        name: "dall-e-2",
        imageUrl: "images/dalle.png",
        url: " https://openai.com/dall-e-2",
        description: " DALL·E 2 is an AI system that can create realistic images and art from a description in natural language."
      },
      {
        name: "aipicasso",
        imageUrl: "images/aipicasso.png",
        url: " https://aipicasso.app/",
        description: " You can generate images for free by entering words called prompts. By specifying the style, you can generate images in your favorite style."
      },
      {
        name: "copy.ai",
        imageUrl: "images/copy.png",
        url: " https://www.copy.ai/",
        description: " Create content, enrich your CRM, scale your prospecting efforts, and much more. This AI platform is designed for your entire GTM team. "
      },
      {
        name: "jasper.ai",
        imageUrl: "images/jasper.png ",
        url: "https://www.jasper.ai/",
        description: " Jasper is an AI copilot for enterprise marketing teams who want better outcomes, not just faster outputs. "
      },
      {
        name: "Midjourney",
        imageUrl: "images/midjourney.png",
        url: "https://www.midjourney.com/home",
        description: "Midjourney generates images from natural language descriptions, called prompts, similar to OpenAI's DALL-E and Stability AI's Stable Diffusion.."
      },
      {
        name: "validatorai",
        imageUrl: "images/validator.png",
        url: "https://validatorai.com/",
        description: "Input your startup idea and our AI will validate it for you and give you important things to consider."
      },
      {
        name: "namingmagic",
        imageUrl: "images/namingmagic.png",
        url: "https://www.namingmagic.com/",
        description: "The best AI tool to write a domain."
      },    {
        name: "Logoai",
        imageUrl: "images/logoai.png",
        url: "https://www.logoai.com/",
        description: "Let AI-powered logo maker generate your new logo and create a brand identity design you love"
      },
      {
        name: "makelogo.ai",
        imageUrl: "images/makelogo.png",
        url: "https://makelogo.ai/",
        description: "Creating a stunning logo has never been easier with makelogo.ai  ."
      },
      {
        name: "durable.co",
        imageUrl: "images/durable.png",
        url: "https://durable.co/",
        description: "Get your business online in 30 seconds with the #1 AI website builder and marketing platform.."
      },
      {
        name: "hypotenuse.ai",
      imageUrl: "images/hypotenuse.png",
      url: " https://www.hypotenuse.ai/ ",
      description: " Write content that sounds like you. SEO-optimized, well-researched and on-brand. "
    },
    {
      name: "personal.ai",
      imageUrl: "images/personal.png",
      url: " https://www.personal.ai/",
      description: " Private models trained on personal memory. Unique to every individual."
    },    
    {
      name: "socrat.ai",
      imageUrl: "images/socrat.png",
      url: " https://socrat.ai/",
      description: "Revolutionize Your Classroom With Personalized Learning For Your Students",
    },
    {
      name: "wordtune",
      imageUrl: "images/wordtune.png",
      url: "https://www.wordtune.com/",
      description: " Everyone has tons of work to get through. Some accept the frustration. Others choose Wordtune Generative AI to speed up their tasks. "
    },
    {
      name: "poised",
      imageUrl: "images/poised.jpg ",
      url: " https://www.poised.com/",
      description: " Poised is your magical AI assistant for better meetings. Prepare with personalized suggestions, speak confidently with real-time feedback and track your progress over time. Private feedback only you can see."
    },
    {
      name: " descript.ai",
      imageUrl: "images/descript.png",
      url: " https://www.descript.com/ ",
      description: " Descript is the only tool you need to write, record, transcribe, edit, collaborate, and share your videos and podcasts."
    },
    {
      name: "elevenlabs",
      imageUrl: "images/elevenlabs.png",
      url: " https://elevenlabs.io/ ",
      description: " Convert text into lifelike speech using a voice of your choice. "
    },
    {
      name: "waymark.io",
      imageUrl: "images/waymark.png",
      url: " https://waymark.com/ ",
      description: " When TV, CTV and digital ads are this effortless, the possibilities are limitless. High-impact ads are now open to everyone, with Waymark."
    },    
    {
      name: "Mixo.io",
      imageUrl: "images/mixo.png",
      url: " https://www.mixo.io/ ",
      description: " With just a brief description of your idea, Mixo uses AI to generate your website in seconds."
    },
    {
      name: "beatoven.ai",
      imageUrl: "images/beatoven.png",
      url: " https://www.beatoven.ai/ ",
      description: " Beatoven.ai uses advanced AI music generation techniques to compose unique mood-based music to suit every part of your video or podcast."
    },
    {
      name: "watermarkremover.io",
      imageUrl: "images/watermarkremover.png ",
      url: " https://www.watermarkremover.io/",
      description: " Remove watermark from images precisely with the help of AI technology."
    },
    {
      name: "invideo.ai",
      imageUrl: "images/invideo.png",
      url: " https://invideo.io/ai/ ",
      description: " It generates a script, creates scenes, adds voiceovers, & tweaks the video at your command. With invideo AI as your co-pilot, engaging your audience is effortlessly simple! "
    },
    {
      name: "heygen",
      imageUrl: "images/heygen.png",
      url: " https://www.heygen.com/ ",
      description: " Effortlessly produce studio-quality videos with AI-generated avatars and voices. "
    },
    {
      name: "decohere.ai",
      imageUrl: "images/decohereai.jpg",
      url: " https://www.decohere.ai/  ",
      description: " Generate images faster than you can type. Scroll through infinite variations to find the perfect shot. "
    },    
    {
      name: "BOOLV",
      imageUrl: "images/boolv.jpg",
      url: "https://boolv.tech/",
      description: "Boolv builds everything you need to make content creation as easy and efficient as possible."
    },
    {
      name: "domo.ai",
      imageUrl: "images/domo.png",
      url: "https://ai.domo.com/ ",
      description: " With Domo.AI you can grow your business, get the most out of your data investments, and empower everyone with timely insights. Domo's trusted, flexible AI framework lets you use public models, large language models, and generative AI (like ChatGPT) so you can accelerate speed to value without sacrificing security. "
    },
    {
      name: " tonkean",
      imageUrl: "images/tonkean.png ",
      url: " https://www.tonkean.com/ ",
      description: " Remove watermark from images precisely with the help of AI technology."
    },
    {
      name: "DeepDream Generator",
      imageUrl: "images/deepdream.jpeg",
      url: " https://deepdreamgenerator.com/ ",
      description: "DeepDream Generator utilizes neural networks to create mesmerizing and surreal images by enhancing patterns and textures within existing images. It offers a unique artistic twist to ordinary photographs, making them visually striking and intriguing."
    },  
    {
      name: "Murf.ai",
      imageUrl: "images/murf.png",
      url: " https://murf.ai/ ",
      description: "Murf AI is a powerful AI voice generator that enables you to create realistic-sounding voiceovers for your projects."
    },   
    {
      name: "Magnific Ai",
      imageUrl: "images/magnific.jpg",
      url: " https://magnific.ai/",
      description: "Magnific is an AI-powered image upscaler and enhancer that allows users to increase the resolution and detail of any image."
    },  
    {
      name: "Runway Ai",
      imageUrl: "images/runway.png",
      url: " https://runwayml.com/",
      description: "Runway AI is a platform that combines machine learning with art and design, aiming to make the capabilities of artificial intelligence available to everyone. With more than 30 creative tools powered by AI, RunwayML enables users to effortlessly generate text for videos and images and train personalized models."
    },  
    {
      name: "Pictory Ai",
      imageUrl: "images/pictory.png",
      url: "https://pictory.ai/",
      description: "Pictory's AI engine automatically selects the best images and video footage representing the summary sentences. Pictory offers over 3 million visuals which are royalty-free and licensed from various sources."
    },  
    {
      name: "adcopy.ai ",
      imageUrl: "images/adcopy.png",
      url: "https://adcopy.ai/",
      description: " Leverage data driven AI models in your advertising workflows to 10x output and find your winning ads. "
    },
    {
      name: "adgenai",
      imageUrl: "images/adgenai.jpg",
      url: " https://www.adgenai.com/ ",
      description: " Unleash your ad potential with AdGen - The AI-powered creative generator that crafts irresistible ad copy and visuals, perfectly tailored to multiple ad channels. Save time and effort by publishing ads across platforms in just a few clicks."
    },
    {
      name: "Adcreative.ai",
      imageUrl: "images/adcreative.jpg",
      url: " https://www.adcreative.ai/ ",
      description: " Generate ad creatives that outperform your competitors. "
    },    
    {
      name: "stockimg.ai",
      imageUrl: "images/stockimg.jpg",
      url: "https://stockimg.ai/",
      description: "Create images using artificial intelligence."
    },
    {
      name: "Chapple.ai",
      imageUrl: "images/chapple.png",
      url: "https://chapple.ai/",
      description: "All-in-one platform to generate AI content and start making money in minutes.. "
    },
    {
      name: "steve.ai ",
      imageUrl: "images/steve.jpg",
      url: " https://www.steve.ai/ ",
      description: " easily turn your text into video."
    },
    {
      name: "Autodraw",
      imageUrl: "images/autodraw.jpg",
      url: " https://www.autodraw.com/",
      description: " Turn bad drawing to good drawing"
    },
    {
      name: "Resumaker.ai",
      imageUrl: "images/resumaker.jpg",
      url: " https://resumaker.ai/ ",
      description: " Writing a resume has never been easier. Try now for free and create your professional resume within minutes. What are you waiting for? "
    },    
    {
      name: "10web",
      imageUrl: "images/10web.jpeg",
      url: "https://10web.io/",
      description: "Create a website using AI Website Builder, host it on 10Web Hosting, and optimize it with PageSpeed Booster."
    },
    {
      name: "Eightify",
      imageUrl: "images/Eightify.png",
      url: "https://eightify.app/ ",
      description:"It's an AI YouTube tool which finds the key points in topics like AI, Business, Finance, News, or Health. Eightify boosts your learning."
    },
    // Add more AI websites as needed
  ];

  function displayItems(filteredItems) {
    const itemsContainer = document.getElementById("items-container");
    itemsContainer.innerHTML = "";
  
    filteredItems.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
  
      const imgElement = document.createElement("img");
      imgElement.src = item.imageUrl;
      itemElement.appendChild(imgElement);
  
      const nameElement = document.createElement("h3");
      nameElement.textContent = item.name;
      nameElement.style.color = "#007BFF"; // Adjusted text color
      itemElement.appendChild(nameElement);
  
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = item.description;
      itemElement.appendChild(descriptionElement);
  
      const urlElement = document.createElement("a");
      urlElement.href = item.url;
      urlElement.textContent = "Visit";
      urlElement.target = "_blank"; // Open link in a new tab
      itemElement.appendChild(urlElement);
  
      itemsContainer.appendChild(itemElement);
    });
  }
  
  function searchItems() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  
    displayItems(filteredItems);
  }
  
  // Initial display
  displayItems(items);
  