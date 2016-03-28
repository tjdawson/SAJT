var shuffleSequence = seq("q1","q2");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: false,
        presentAsScale: true,
        leftComment: "Not at all acceptable",
        rightComment: "Very acceptable"
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    ["q1", "DashedAcceptabilityJudgment",
        {
            s: "The keys to the cabinet are on the table.",
            q: "How acceptable was that sentence?",
            as: ["1", "2", "3", "4", "5", "6", "7"]
        }
    ],

    ["q2", "DashedAcceptabilityJudgment",
        {
            s: "The key to the cabinets are on the table.",
            q: "How acceptable was that sentence?",
            as: ["1", "2", "3", "4", "5", "6", "7"]
        }
    ]

];