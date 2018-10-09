export default [
  {
    "date": "2018-10-11",
    "sessions": [
      {
        "name": "Opening Keynote",
        "start": "2018-10-11T10:00:00+02:00",
        "end": "2018-10-11T10:30:00+02:00",
        "speakers": [
          "Tom Dale"
        ]
      },
      {
        "name": "Principles from Leaders Across the Ember Community",
        "start": "2018-10-11T10:45:00+02:00",
        "end": "2018-10-11T11:15:00+02:00",
        "speakers": [
          "Scott Newcomer"
        ],
        "description": "Principles can help guide a software project towards successful completion by helping guide your team through difficult situations, create team cohesiveness, and set expectations of standards. Ultimately principles can help ship better products.\n\nIn this talk, I gathered leader's principles across many different organizations overseeing software projects using Ember.js to help us learn from each other. I also sought to understood how Ember.js's principles helps their organization and what recommendations they have for our community to help them keep bringing value to their clients and customers.\n\nI live my life by principles. They help guide decisions at every step of my life. Moreover, I do a lot of my work out in the open and find that discussing and testing out ideas and strategies with other people brings about a better outcome than if I kept it to myself. In the end, I love learning from other people."
      },
      {
        "name": "From the Browser to the Home Screen: PWAing Your Ember App",
        "start": "2018-10-11T11:30:00+02:00",
        "end": "2018-10-11T12:00:00+02:00",
        "speakers": [
          "Kevin Pfefferle"
        ],
        "description": "For EmberConf, we built a cutting-edge Ember mobile web app to serve as a convenient up-to-the-minute reference for the conference's schedule. Now updated for EmberFest, I'll highlight how we made this conference schedule app a fully compliant Progressive Web App. We'll walk through the steps needed to take your mobile Ember app out of the mobile browser and onto your users' home screens. With new native platform support available just this year and the backing of the always-amazing Ember addon ecosystem, making your Ember app fully PWA capable has never been easier or more worthwhile."
      },
      {
        "name": "Lunch",
        "start": "2018-10-11T12:00:00+02:00",
        "end": "2018-10-11T13:30:00+02:00"
      },
      {
        "name": "ELS - the Ember Language Server",
        "start": "2018-10-11T13:30:00+02:00",
        "end": "2018-10-11T14:00:00+02:00",
        "speakers": [
          "Tobias Bieniek"
        ],
        "description": "Vim or emacs, text editor or IDE, no matter what you use to write your Ember applications you will likely use some form of editor integration. Some only provide code highlighting, others provide integrated linting and sophisticated code navigation. In this talk we will take a look at the Ember Language Server powering the Visual Studio Code plugin. We will talk about the features it provides and how they are implemented, and discuss what else is planned for the future."
      },
      {
        "name": "Transformers: Codemods in Disguise",
        "start": "2018-10-11T14:15:00+02:00",
        "end": "2018-10-11T14:45:00+02:00",
        "speakers": [
          "Jonathan Jackson"
        ],
        "description": "The core of this talk revolves around a allegorical story. We follow a \"hero\" (an emoji) who discovers a \"badFunction\" and realizes the implications in her codebase. Though easily able to fix the problem in the one instance she discovered it she quickly realizes that the problem is much much bigger than she originaly thought.\n\nAfter attempting to resolve the problem with regexes she attends a Meetup that discusses JSCodeshift and she tries to fix the problem through the codebase with a Codemod."
      },
      {
        "name": "Lightning Talks",
        "start": "2018-10-11T15:00:00+02:00",
        "end": "2018-10-11T15:30:00+02:00",
      },
      {
        "name": "Snack Break",
        "start": "2018-10-11T15:30:00+02:00",
        "end": "2018-10-11T16:00:00+02:00"
      },
      {
        "name": "Crafting Web Comics with Ember",
        "start": "2018-10-11T16:00:00+02:00",
        "end": "2018-10-11T16:30:00+02:00",
        "speakers": [
          "Jessica Jordan"
        ],
        "description": "Are you a fan of comics or have you ever dreamed of becoming a comic artist yourself? Then this talk is just for you.\n\nWe will see how both recent and matured Web APIs can be leveraged to tell our own, rich and interactive stories on the web. We’ll take a look on how we can use Ember.js to help us create an online comic book that makes any comic art fan’s heart leap for joy."
      },
      {
        "name": "Going Realtime with Ember",
        "start": "2018-10-11T16:45:00+02:00",
        "end": "2018-10-11T17:15:00+02:00",
        "speakers": [
          "Michael Lange"
        ],
        "description": "It used to be that only the most impressive websites would update data live as you sat on the page. Now, as the lines between native apps and websites blur, this is becoming expected behavior. What was once cutting-edge tech is now standard-issue for a good user experience.\n\nSee how HashiCorp made the UI for the cluster scheduler software Nomad realtime with Ember Concurrency, Ember Data, and the rendering layer we know and love."
      }
    ]
  },
  {
    "date": "2018-10-12",
    "sessions": [
      {
        "name": "Honey, I Shrunk Your Ember App",
        "start": "2018-10-12T10:00:00+02:00",
        "end": "2018-10-12T10:30:00+02:00",
        "speakers": [
          "Simon Ihmig"
        ],
        "description": "Ember does not have the best reputation for being suited for mobile apps, mostly for being \"too large\". But why does size matter, and how can we keep it small? Future techniques like tree-shaking and code-splitting will support this task. But there are quite a few things you can do today to reduce your bundle size.\n\nBased on the experience of optimizing my own app, this talk will guide you through the iterative process of measuring, analyzing and optimizing your app's size. For each of these phases I will introduce you to some essential tools and helpful practical tips."
      },
      {
        "name": "Deliver Fast Apps Even Faster",
        "start": "2018-10-12T10:45:00+02:00",
        "end": "2018-10-12T11:15:00+02:00",
        "speakers": [
          "Marco Otte-Witte"
        ],
        "description": "We now have the tools to build apps that run fast (and that's only getting better as Glimmer advances) but they can only do so after having been delivered to our users. This talk explores what tools and mechanisms are available to get our apps to our users' devices faster, reducing the time until first and repeat launches.\n\nWe will look into mechanisms like HTTP/2, resource hints and lazy loading. We will also look at tooling that gives us better insight into the performance consequences each merged PR. Finally, we'll explore mechanisms in the Ember ecosystem to further optimize app delivery."
      },
      {
        "name": "Mastering the Art of Forms",
        "start": "2018-10-12T11:30:00+02:00",
        "end": "2018-10-12T12:00:00+02:00",
        "speakers": [
          "Danielle Adams"
        ],
        "description": "\"Building forms in @emberjs is terrifying because I'm stuck with decisions I always later regret.\"\n- me in another lifetime\n\nHTML forms can represent a time before JavaScript was an integral part of application development. Creating forms isn’t always the most exciting part of development and, at times, it may seem daunting. Fear not! I’d like to talk through some pain points of building an important piece of user interface: we will discuss what to do, what not to do, which Ember addons have come to the rescue, and how to make forms accessible."
      },
      {
        "name": "Lunch",
        "start": "2018-10-12T12:00:00+02:00",
        "end": "2018-10-12T13:30:00+02:00"
      },
      {
        "name": "No Graph Theory Required: Ember and GraphQL in Practice",
        "start": "2018-10-12T13:30:00+02:00",
        "end": "2018-10-12T14:00:00+02:00",
        "speakers": [
          "Rocky Neurock",
          "Chad Carbert"
        ],
        "description": "As Ember developers, a large percentage of us work on data-intensive applications. Ember Data and JSON:API give us really powerful tools for interacting with our data. Sometimes these tools still aren’t flexible enough and we end up implementing our own data model witchery/wizardry. In this talk we’ll explore why, and how, we transitioned to GraphQL with Ember, along with some tips and techniques you may want to try out in your own projects."
      },
      {
        "name": "Bringing Coffee Tasting to Rural Areas with Ember & Cordova",
        "start": "2018-10-12T14:15:00+02:00",
        "end": "2018-10-12T14:45:00+02:00",
        "speakers": [
          "Francesco Novy"
        ],
        "description": "This talk will show learnings and traps to avoid when creating apps for mobile devices which are built with web technologies (e.g. with Cordova) and should also work without an internet connection. Common problems will be shown with concrete solutions, like for example: How & when to sync data, how to improve the perceived performance, and how to deploy an app to multiple platforms & app stores."
      },
      {
        "name": "The State of Community Documentation",
        "start": "2018-10-12T15:00:00+02:00",
        "end": "2018-10-12T15:30:00+02:00",
        "speakers": [
          "Kenneth Larsen"
        ],
        "description": "Ember takes pride in having great documentation. So much that we even have a Learning Team dedicated to keeping the official documentation great.\n\nBut what is the actual state of community documentation?\n\nAfter scraping and analysing just about 5000 readme files from Ember addons created by the community, I’ll present common pitfalls and ways to improve our community documentation."
      },
      {
        "name": "Snack Break",
        "start": "2018-10-12T15:30:00+02:00",
        "end": "2018-10-12T16:00:00+02:00"
      },
      {
        "name": "The Future of Templating in Ember",
        "start": "2018-10-12T16:00:00+02:00",
        "end": "2018-10-12T16:30:00+02:00",
        "speakers": [
          "Chad Hietala"
        ],
        "description": "The templating layer in Ember has evolved architecturally numerous times in the history of the project. At each stage of this evolution we have been able to increase performance and ergonomics without introducing a lot of instability. But what's next for templating in Ember? In this talk I will explore the advantages of the VM architecture and why I think Ember is leading the way for a re-examination of how the larger JS community thinks about rendering."
      },
      {
        "name": "Closing Keynote",
        "start": "2018-10-12T16:45:00+02:00",
        "end": "2018-10-12T17:15:00+02:00",
        "speakers": [
          "Melanie Sumner"
        ],
        "description": "Comfortable with Uncertainty"
      }
    ]
  }
];
