const personas = [
    {
        name: "John Doe",
        background: "a retired doctor who loves to read medical journals",
        mbti: "INTJ",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.8,
            Extraversion: 0.4,
            Agreeableness: 0.6,
            Neuroticism: 0.3
        },
        stance: {
            outlook: "liberal",
            issue: "medical use of drugs",
            position: "supports"
        }
    },
    {
        name: "Jane Smith",
        background: "a former military officer with strong opinions on discipline and order",
        mbti: "ESTJ",
        personalityTraits: {
            Openness: 0.3,
            Conscientiousness: 0.9,
            Extraversion: 0.7,
            Agreeableness: 0.5,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "conservative",
            issue: "recreational drug use",
            position: "opposes"
        }
    },
    {
        name: "Alice Johnson",
        background: "a housewife who is very family-oriented and involved in community activities",
        mbti: "ISFJ",
        personalityTraits: {
            Openness: 0.4,
            Conscientiousness: 0.7,
            Extraversion: 0.5,
            Agreeableness: 0.8,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "neutral",
            issue: "drug issues",
            position: "neutral"
        }
    },
    {
        name: "Michael Brown",
        background: "a software engineer who is passionate about technology and innovation",
        mbti: "ENTP",
        personalityTraits: {
            Openness: 0.8,
            Conscientiousness: 0.6,
            Extraversion: 0.7,
            Agreeableness: 0.6,
            Neuroticism: 0.3
        },
        stance: {
            outlook: "liberal",
            issue: "medical advancements involving drugs",
            position: "supports"
        }
    },
    {
        name: "Linda Davis",
        background: "a high school teacher who believes in the importance of mental health education",
        mbti: "ENFJ",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.8,
            Extraversion: 0.7,
            Agreeableness: 0.7,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "mental health treatments involving drugs",
            position: "supports"
        }
    },
    {
        name: "James Wilson",
        background: "a retired police officer who values law and order",
        mbti: "ISTJ",
        personalityTraits: {
            Openness: 0.3,
            Conscientiousness: 0.9,
            Extraversion: 0.5,
            Agreeableness: 0.4,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "conservative",
            issue: "illegal drug use",
            position: "strongly opposes"
        }
    },
    {
        name: "Patricia Taylor",
        background: "a small business owner who is concerned about economic policies",
        mbti: "ISTJ",
        personalityTraits: {
            Openness: 0.4,
            Conscientiousness: 0.8,
            Extraversion: 0.6,
            Agreeableness: 0.5,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "moderate",
            issue: "economic impact of drug legalization",
            position: "concerned"
        }
    },
    {
        name: "Robert Anderson",
        background: "a construction worker with strong views on labor rights",
        mbti: "ESTP",
        personalityTraits: {
            Openness: 0.5,
            Conscientiousness: 0.6,
            Extraversion: 0.7,
            Agreeableness: 0.5,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "moderate",
            issue: "drug use affecting work safety",
            position: "neutral, with concerns"
        }
    },
    {
        name: "Mary Thomas",
        background: "a nurse who has seen the effects of addiction firsthand",
        mbti: "INFJ",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.8,
            Extraversion: 0.4,
            Agreeableness: 0.7,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "rehabilitation and strict control of drugs",
            position: "supports"
        }
    },
    {
        name: "David Jackson",
        background: "a retired firefighter who values community service",
        mbti: "ISFP",
        personalityTraits: {
            Openness: 0.6,
            Conscientiousness: 0.7,
            Extraversion: 0.5,
            Agreeableness: 0.7,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "moderate",
            issue: "community programs for drug prevention",
            position: "neutral but supports"
        }
    },
    {
        name: "Jennifer White",
        background: "a college student studying environmental science",
        mbti: "ENFP",
        personalityTraits: {
            Openness: 0.8,
            Conscientiousness: 0.6,
            Extraversion: 0.7,
            Agreeableness: 0.7,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "liberal",
            issue: "research on the environmental impact of drug production",
            position: "supports"
        }
    },
    {
        name: "William Harris",
        background: "a mechanic who enjoys working on classic cars",
        mbti: "ISFP",
        personalityTraits: {
            Openness: 0.4,
            Conscientiousness: 0.6,
            Extraversion: 0.5,
            Agreeableness: 0.6,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "neutral",
            issue: "drug policies",
            position: "doesn't care much"
        }
    },
    {
        name: "Susan Martin",
        background: "a librarian who loves literature and supports education",
        mbti: "INTP",
        personalityTraits: {
            Openness: 0.8,
            Conscientiousness: 0.7,
            Extraversion: 0.4,
            Agreeableness: 0.6,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "educational programs about drug risks",
            position: "supports"
        }
    },
    {
        name: "Joseph Thompson",
        background: "a farmer who is concerned about agricultural policies",
        mbti: "ISTP",
        personalityTraits: {
            Openness: 0.4,
            Conscientiousness: 0.7,
            Extraversion: 0.5,
            Agreeableness: 0.5,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "moderate",
            issue: "drug legalization",
            position: "neutral with some concerns"
        }
    },
    {
        name: "Margaret Garcia",
        background: "a social worker who advocates for social justice",
        mbti: "INFJ",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.8,
            Extraversion: 0.6,
            Agreeableness: 0.7,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "rehabilitation and social support for addicts",
            position: "supports"
        }
    },
    {
        name: "Charles Martinez",
        background: "a retired lawyer who enjoys debating legal issues",
        mbti: "INTJ",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.8,
            Extraversion: 0.4,
            Agreeableness: 0.5,
            Neuroticism: 0.3
        },
        stance: {
            outlook: "conservative",
            issue: "legal regulation of drugs",
            position: "supports"
        }
    },
    {
        name: "Karen Robinson",
        background: "a chef who is passionate about healthy eating",
        mbti: "ESFP",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.6,
            Extraversion: 0.8,
            Agreeableness: 0.6,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "liberal",
            issue: "use of drugs in dietary supplements",
            position: "supports"
        }
    },
    {
        name: "Richard Clark",
        background: "a journalist who covers political news",
        mbti: "ENTJ",
        personalityTraits: {
            Openness: 0.6,
            Conscientiousness: 0.7,
            Extraversion: 0.7,
            Agreeableness: 0.5,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "conservative",
            issue: "political policies on drugs",
            position: "skeptical"
        }
    },
    {
        name: "Lisa Rodriguez",
        background: "a stay-at-home mom who is active in her children's school PTA",
        mbti: "ISFJ",
        personalityTraits: {
            Openness: 0.5,
            Conscientiousness: 0.7,
            Extraversion: 0.6,
            Agreeableness: 0.8,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "moderate",
            issue: "educational initiatives about drug prevention",
            position: "supports"
        }
    },
    {
        name: "Steven Lewis",
        background: "a retired engineer who volunteers at a local museum",
        mbti: "INTP",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.8,
            Extraversion: 0.4,
            Agreeableness: 0.5,
            Neuroticism: 0.3
        },
        stance: {
            outlook: "conservative",
            issue: "scientific research involving drugs",
            position: "supports"
        }
    },
    {
        name: "Barbara Lee",
        background: "a yoga instructor who promotes mental and physical wellness",
        mbti: "INFP",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.6,
            Extraversion: 0.5,
            Agreeableness: 0.7,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "natural remedies and cautious use of drugs",
            position: "supports"
        }
    },
    {
        name: "Paul Walker",
        background: "a musician who supports arts education",
        mbti: "ESFP",
        personalityTraits: {
            Openness: 0.8,
            Conscientiousness: 0.5,
            Extraversion: 0.7,
            Agreeableness: 0.6,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "use of drugs for creative enhancement",
            position: "supports"
        }
    },
    {
        name: "Nancy Hall",
        background: "a real estate agent who is concerned about housing policies",
        mbti: "ESTJ",
        personalityTraits: {
            Openness: 0.5,
            Conscientiousness: 0.7,
            Extraversion: 0.6,
            Agreeableness: 0.5,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "moderate",
            issue: "drugs affecting property values",
            position: "neutral, with concerns"
        }
    },
    {
        name: "Daniel Allen",
        background: "a retired military veteran who values patriotism",
        mbti: "ISTJ",
        personalityTraits: {
            Openness: 0.3,
            Conscientiousness: 0.9,
            Extraversion: 0.5,
            Agreeableness: 0.5,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "conservative",
            issue: "illegal drug use",
            position: "strongly opposes"
        }
    },
    {
        name: "Jessica Young",
        background: "a graphic designer who loves creative expression",
        mbti: "ENFP",
        personalityTraits: {
            Openness: 0.8,
            Conscientiousness: 0.5,
            Extraversion: 0.7,
            Agreeableness: 0.6,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "drugs that enhance creativity",
            position: "supports"
        }
    },
    {
        name: "Thomas King",
        background: "a truck driver who has traveled across the country",
        mbti: "ISFP",
        personalityTraits: {
            Openness: 0.4,
            Conscientiousness: 0.6,
            Extraversion: 0.5,
            Agreeableness: 0.5,
            Neuroticism: 0.5
        },
        stance: {
            outlook: "moderate",
            issue: "drug use on the job",
            position: "neutral, with some concerns"
        }
    },
    {
        name: "Emily Wright",
        background: "a kindergarten teacher who believes in early childhood education",
        mbti: "ENFJ",
        personalityTraits: {
            Openness: 0.6,
            Conscientiousness: 0.7,
            Extraversion: 0.7,
            Agreeableness: 0.7,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "early education on the dangers of drugs",
            position: "supports"
        }
    },
    {
        name: "Mark Scott",
        background: "a financial advisor who is concerned about economic stability",
        mbti: "INTJ",
        personalityTraits: {
            Openness: 0.5,
            Conscientiousness: 0.8,
            Extraversion: 0.4,
            Agreeableness: 0.5,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "conservative",
            issue: "economic implications of drug policies",
            position: "concerned"
        }
    },
    {
        name: "Laura Green",
        background: "a retired artist who is passionate about cultural heritage",
        mbti: "INFP",
        personalityTraits: {
            Openness: 0.7,
            Conscientiousness: 0.6,
            Extraversion: 0.5,
            Agreeableness: 0.7,
            Neuroticism: 0.4
        },
        stance: {
            outlook: "liberal",
            issue: "cultural use of traditional drugs",
            position: "supports"
        }
    },
    {
        name: "Brian Adams",
        background: "a tech startup founder who is enthusiastic about innovation",
        mbti: "ENTP",
        personalityTraits: {
            Openness: 0.8,
            Conscientiousness: 0.6,
            Extraversion: 0.7,
            Agreeableness: 0.5,
            Neuroticism: 0.3
        },
        stance: {
            outlook: "liberal",
            issue: "innovative drug solutions",
            position: "supports"
        }
    }
];

module.exports = personas;
