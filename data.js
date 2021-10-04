
let entryData = [
    {
        id: 1,
        title: "Six arrested on suspicion of poaching in Wiltshire",
        message: "Police are called to the Devizes area and find animal remains, two catapults and a big hunting lamp.",
        date: "Oct 04, 2021",
        username: "BBC News (UK)",
        gif: "https://twitter.com/i/status/1439381389854449669",
        //  or <iframe src="https://giphy.com/embed/3oKIPlpftSI37ei5QA" width="480" height="331" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/scary-bunny-rabbit-3oKIPlpftSI37ei5QA">via GIPHY</a></p>
        reactions: {
            happy: 2,
            love: 6,
            angry: 8,
        },
        comments: [
            { 
                id: 1, 
                text: "I feel like starting an argument, so: What actor, living or dead, any gender, was the greatest combination of acting talent, physical beauty and pure star-power charisma?",
                author: "Scott Renshaw"
            }
        ]
    },
    {
        id: 2,
        title: "Fuel crisis",
        message: "Military begins deliveries to petrol stations as driver shortage continues",
        date: "Oct 04 2021",
        username: "Sky News",
        gif: "https://media.giphy.com/media/cOlvMeqtgzjLd4hbvN/giphy.gif",
        reactions: {
            happy: 0,
            love: 1,
            angry: 98,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        }
    },
    {
        id: 3,
        title: "California surfer suffers ‘critical’ injuries in shark attack off coast: report",
        message: "A California surfer was left in critical condition Sunday morning after an apparent shark attack off the Bay Area coast. The surfer, who is in his 30s, was not identified. The attack occurred near Bodega Bay and victim suffered a bite to his thigh. He was with a group of surfers and his buddy witnessed the attack. \"I saw the dorsal fin of the shark and then I saw the tail fin of the shark,\" Jared Davis, the friend, told KTVU. \"They were going down into the water. It definitely wasn’t like a quick attack. It was nice and slow. Kind of like a dolphin peaking up.\" The other surfers helped the victim get to shore and tried to stop the bleeding. The victim was airlifted to a hospital at about 9 a.m. and is expected to survive.",
        date: "Oct 03 2021",
        username: "Fox News",
        gif: "https://media.giphy.com/media/8WvcMANmekjqXC0JGd/giphy.gif",
        reactions: {
            happy: 10,
            love: 15,
            angry: 2,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        }
    },
    {
        id: 4,
        title: "Amid Beijing's rising assertiveness, tension spikes between EU-China ties",
        message: "Tel Aviv [Israel], October 3 (ANI): With the increase in China's assertiveness across the global geopolitical landscape, Beijing's relationship with the European Union (EU) has declined.",
        date: "Oct 04 2021",
        username: "Big News Networks",
        gif: "https://media.giphy.com/media/l0HUpjhXKfTiscMog/giphy.gif",
        reactions: {
            happy: 0,
            love: 1,
            angry: 2,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        }
    },
    {
        id: 5,
        title: "Australia-EU trade talks delayed amid submarine deal fallout",
        message: "BRUSSELS (AP) — A round of free trade talks between the European Union and Australia has been postponed by one month in the wake of a dispute over the Australian government’s decision to cancel a multibillion-euro French submarine deal, EU and Australian officials said Friday. EU commission chief spokesman Eric Mamer said the decision to delay the meeting was taken by the EU’s executive arm. Asked whether it was a retaliation measure, Mamer said “the EU is not in the business of punishing anybody.“",
        date: "Oct 01 2021",
        username: "wtop new",
        gif: "https://media.giphy.com/media/3orieNeXZsJMRRUxFu/giphy.gif",
        reactions: {
            happy: 5,
            love: 6,
            angry: 3,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        } 
    },
    {
        id: 6,
        title: "Facebook Chooses 'Profit Over Saftey,' Says Whistleblower",
        message: "The whistleblower who shared a trove of Facebook documents alleging the social media giant knew its products were fueling hate and harming children's mental health revealed her identity Sunday in a televised interview, and accused the company of choosing \"profit over safety.\" Frances Haugen, a 37-year-old data scientist from Iowa, has worked for companies including Google and Pinterest -- but said in an interview with CBS news show \"60 Minutes\" that Facebook was \"substantially worse\" than anything she had seen before.",
        date: "Oct 03 2021",
        username: "International Business Times",
        gif: "https://media.giphy.com/media/V7boLBI7WSpEWHniGs/giphy.gif",
        reactions: {
            happy: 50,
            love: 44,
            angry: 6,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        } 
    },
    {
        id: 7,
        title: "Small Plane Crashes Near Milan, Killing All on Board",
        message: "Eight people died when a passenger plane hit a building shortly after departing from Milans's Linate Airport",
        date: "Oct 04 2021",
        username: "The New York Times",
        gif: "https://media.giphy.com/media/A5cMONNFFwPgA/giphy.gif",
        reactions: {
            happy: 0,
            love: 0,
            angry: 1,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        } 
    },
    {
        id: 8,
        title: "Morrisons takeover auction battle ends with £7bn bid from private equity giant",
        message: "The saga first began when Clayton, Dubilier & Rice first made an approach for the Bradford-based grocer in June. The battle to buy supermarket Morrisons has ended with private equity giant Clayton, Dubilier & Rice (CD&R) outbidding Fortress in a dramatic auction process. The stock market’s Takeover Panel said Fortress offered 286p per Morrisons ordinary share, while CD&R offered 287p – meaning its bid amounts to an offer of almost £7 billion.",
        date: "Oct 02 2021",
        username: "Belfast Telegraph",
        gif: "https://media.giphy.com/media/xThtag60ZwcSIgThio/giphy.gif",
        reactions: {
            happy: 10,
            love: 20,
            angry: 47,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        }
    }, 
    {
        id: 9,
        title: "Michelangelo’s David ‘manhood’ covered to avoid Dubai outrage",
        message: "Bologna: A 3D-printed replica of Michelangelo’s David at the Dubai Expo has been mired in controversy after organisers blocked views of his buttocks and manhood to respect Muslim culture. According to the Italian daily La Repubblica, Expo staff agonised over how they could display the five-metre-tall replica of the Renaissance masterpiece without offending conservative Muslims. They eventually decided to place the statue within an octagonal glass gallery spanning two floors, one level with the warrior’s muscular legs and another with his eyes.",
        date: "Oct 04 2021",
        username: "The Sunday Morning Herald",
        gif: "https://media.giphy.com/media/xTiQyGLaAftjujkPh6/giphy.gif",
        reactions: {
            happy: 77,
            love: 8,
            angry: 4,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        }
    }, 
    {
        id: 10,
        title: "European mission to Mercury reaches planet for the first time",
        message: "The European space mission to Mercury, BepiColombo, flew past Mercury for the first time during the night from Friday to Saturday, the European Space Agency reported. The probe flew less than 200 kilometers above the planet’s surface, taking pictures and taking measurements. BepiColombo was launched in October 2018. Consisting of two satellites, one European and one Japanese, the probe is set to orbit the innermost planet of our solar system by 2025. There, the devices will investigate, among other things, how the planet is constructed. BepiColombo also aims to find out how a planet can form when it orbits close to a star. To reach Mercury, BepiColombo makes nine flights relatively close to a planet. It did that once by Earth, twice by Venus and now six flights by Mercury. The last flight past Venus took place in August. These maneuvers allow BepiColombo to reach the correct speed and orbit to safely orbit Mercury.",
        date: "Oct 03 2021",
        username: "OREVYUH",
        gif: "https://media.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy.gif",
        reactions: {
            happy: 96,
            love: 67,
            angry: 34,
        },
        comments: {
            c1: {
                text: "",
                author: ""
            }
        }
    }
]

module.exports = entryData;