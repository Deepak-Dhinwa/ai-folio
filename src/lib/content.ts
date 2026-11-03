export const profile = {
  name: "Deepak Dhinwa",
  degree: "B.Tech, Mechanical Engineering",
  school: "Indian Institute of Technology Bombay",
  classYear: "Class of 2027",
  email: "deepak.dhinwa05@gmail.com",
  phone: "+91 92169 99404",
  phoneHref: "tel:+919216999404",
  resume:
    "https://drive.google.com/file/d/11Bx6MtAXSz1afinpsRZYT4ev3myMwC8D/view?usp=sharing",
  github: "https://github.com/Deepak-Dhinwa",
  githubHandle: "Deepak-Dhinwa",
  linkedin: "https://www.linkedin.com/in/deepak-dhinwa",
  availability:
    "Interested in machine learning, AI engineering, and computer vision roles.",
};

export const nav = [
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

export type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Stat = { value: string; label: string };

export type Writeup = {
  slug: string;
  title: string;
  meta: string;
  summary: string;
  skills: string[];
  href: string;
  back: string;
  links: { label: string; href: string }[];
  home: string[];
  stats: Stat[];
  sections: Section[];
};

export const roles: Writeup[] = [
  {
    slug: "scapia",
    title: "Analytics Intern",
    meta: "Scapia, Indian travel fintech, May 2026 to July 2026",
    summary:
      "Looked at how people actually use a travel card, then built the models that turn that behaviour into a retention or a matching decision.",
    skills: ["SigLIP2", "Airflow", "Databricks", "churn models"],
    href: "/work/scapia",
    back: "/#work",
    links: [],
    stats: [
      { value: "SigLIP2", label: "hotel image matching" },
      { value: "Airflow", label: "GPU inference on Databricks" },
      { value: "Churn", label: "scores for retention, by stage" },
    ],
    home: [
      "Usage data was read for how the card is actually used, including activity that looks like abuse rather than a trip.",
      "Churn scores are staged, so retention can act before someone has already left. Hotel photos are matched with fine-tuned SigLIP2, and that inference is scheduled on Databricks GPUs through Airflow.",
    ],
    sections: [
      {
        heading: "Behaviour",
        paragraphs: [
          "A travel card is used in bursts around a trip, then goes quiet. That pattern is normal. The useful question is which quiet periods, and which spikes, are something else.",
        ],
        bullets: [
          "Worked from user interaction data rather than a single aggregate dashboard.",
          "Separated ordinary travel use from activity that looked like card abuse.",
        ],
      },
      {
        heading: "Churn",
        paragraphs: [
          "Someone who has not booked in a month is not the same as someone who was about to book and stopped. A single score collapses those stages.",
        ],
        bullets: [
          "Models for customers likely to leave, at more than one stage of the relationship.",
          "The score was for a retention decision, not a leaderboard.",
        ],
      },
      {
        heading: "Hotels",
        paragraphs: [
          "A highlight is a sentence about a hotel. The image that should sit next to it is a matching problem, not a search over filenames. Once that matcher exists, it has to run without a notebook staying open.",
        ],
        bullets: [
          "End-to-end path from a hotel highlight to the image that should represent it.",
          "The matcher is a fine-tuned SigLIP2 model.",
          "Airflow schedules inference on Databricks GPU compute.",
        ],
      },
      {
        heading: "Flights",
        paragraphs: [
          "A discount that everyone would have booked anyway is not incremental. The question for the next test is who receives the offer, and whether the booking would have happened without it.",
        ],
        bullets: [
          "Read the dynamic flight discounting already in use.",
          "Worked with the team on hypotheses for discount allocation and incremental bookings.",
        ],
      },
    ],
  },
];

export const projects: Writeup[] = [
  {
    slug: "sportmind",
    title: "SportMind",
    meta: "NBA analytics, January 2026 to February 2026",
    summary:
      "A table can rank scorers. A graph can walk from a player to a team, a ring, and an award, and a separate model can give a win chance without the chat inventing one.",
    skills: ["Neo4j", "Weaviate", "LlamaIndex", "XGBoost", "FastAPI", "React"],
    href: "/projects/sportmind",
    back: "/#projects",
    links: [{ label: "GitHub", href: "https://github.com/Deepak-Dhinwa/sportmind" }],
    stats: [
      { value: "10", label: "seasons, 2013-14 to 2022-23" },
      { value: "6,246", label: "document chunks in chat" },
      { value: "658", label: "player forecast models" },
    ],
    home: [
      "About 1,400 players and 12,800 games sit in Neo4j. Questions about stats, awards, and head-to-head are Cypher, not a guess from a paragraph.",
      "Chat uses hybrid search over the chunks, then a cross-encoder rerank. The win model is XGBoost with isotonic calibration, held out of that store on purpose.",
    ],
    sections: [
      {
        heading: "Why a graph and a document store",
        paragraphs: [
          "Roster facts, awards, and game results are relationships. Match reports and notes are prose. One index would force both through the same door.",
        ],
        bullets: [
          "Ten seasons, about 1,400 players and 12,800 regular-season and playoff games, loaded into Neo4j.",
          "6,246 document chunks embedded in Weaviate, searched with BM25 and dense retrieval together, then reranked.",
        ],
      },
      {
        heading: "How a question is routed",
        paragraphs: [
          "The orchestrator classifies intent first. A relationship question becomes Cypher. A passage question goes to the vector store. The prose store is not asked to invent a percentage.",
        ],
        bullets: [
          "Generation tries Groq, then falls back to Gemini. Repeated questions hit an LRU cache.",
          "The React app streams the answer, draws a player or team neighbourhood, and can show all 30 teams.",
          "A markdown note can be indexed into the same store and asked about in chat.",
        ],
      },
      {
        heading: "Forecasts",
        paragraphs: [
          "Win probability is its own model because a box score is not a document. Player forecasts are short-memory models, one per player and stat, so a recent scoring run can move the next estimate.",
        ],
        bullets: [
          "XGBoost win model, isotonic calibration, features cut down to form, rest, head-to-head, and venue.",
          "658 EWMA models: 94 players by 7 box-score metrics. On the held-out season, points miss by about 5 and assists by about 1.6.",
          "A sample read: Warriors at home against the Celtics, 54% to 46%. LeBron’s next points estimate 31.1 against a recent 32.4.",
        ],
      },
    ],
  },
  {
    slug: "vehicle-speed-plates",
    title: "Vehicle speed and plate reading",
    meta: "June 2025 to July 2025",
    summary:
      "Detection finds a box. Tracking is what makes that box the same car a moment later, so speed and a plate belong to a vehicle rather than to a flicker.",
    skills: ["YOLOv8", "SORT", "TrOCR", "FastAPI", "Docker", "Azure"],
    href: "/projects/vehicle-speed-plates",
    back: "/#projects",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Deepak-Dhinwa/automated_vehicle_speed_and_number_plate_detection",
      },
    ],
    stats: [
      { value: "~15 ms", label: "vehicle pass on an RTX 3050" },
      { value: "0.95", label: "plate detector mAP50" },
      { value: "50", label: "epochs on 222 plate crops" },
    ],
    home: [
      "YOLOv8n marks cars, buses, and trucks. SORT keeps an id by matching each new box to the previous track.",
      "The plate is a thin object inside a much larger box, so it has its own detector. TrOCR then reads the crop.",
    ],
    sections: [
      {
        heading: "Identity before speed",
        paragraphs: [
          "A speed from a box that jumps between cars is not a speed. The tracker has to hold an id across frames before the motion means anything.",
        ],
        bullets: [
          "YOLOv8n for vehicles. The pass is about 15 ms a frame on an RTX 3050.",
          "SORT associates detections by overlap with a predicted position, and drops a track only after it has been missed.",
        ],
      },
      {
        heading: "The plate as its own problem",
        paragraphs: [
          "A plate is small relative to the vehicle. Running one detector for both tends to miss the thin object, so the plate model only sees the vehicle crop.",
        ],
        bullets: [
          "Custom YOLOv8n, 50 epochs, about 222 cropped plates.",
          "Validation mAP50 about 0.95, mAP50-95 about 0.67.",
          "TrOCR, fine-tuned from the Microsoft base model, reads the characters in that crop.",
        ],
      },
      {
        heading: "From pixels to a service",
        paragraphs: [
          "Speed is the movement of the tracked center, scaled from pixels into a road distance. The service is the same pipeline behind an HTTP stream, not a notebook.",
        ],
        bullets: [
          "FastAPI serves the annotated frames.",
          "Docker image pushed to Azure Container Registry and checked against a live IP webcam.",
        ],
      },
    ],
  },
  {
    slug: "metadrive",
    title: "Driving policy in MetaDrive",
    meta: "August 2025 to November 2025",
    summary:
      "A camera alone copies the easy parts of driving. The car’s own state covers the bends the image attends to poorly, and a second phase of learning is what keeps the car up.",
    skills: ["EfficientNet", "behavioural cloning", "PPO", "Grad-CAM", "ONNX"],
    href: "/projects/metadrive",
    back: "/#projects",
    links: [{ label: "GitHub", href: "https://github.com/Deepak-Dhinwa/meta-drive-sim" }],
    stats: [
      { value: "81.5%", label: "lower MSE than camera-only" },
      { value: "7.5×", label: "longer episodes after PPO" },
      { value: "90k", label: "expert steps copied first" },
    ],
    home: [
      "EfficientNet-B0 on a 128×128 frame, fused with a 19-number vehicle state. Behavioural cloning on the IDM expert cut error by 81.5% against a camera-only policy.",
      "Grad-CAM on the missed turns looked at sky and roadside. PPO, started from the fusion checkpoint, moved average survival from 299 steps to 2,256.",
    ],
    sections: [
      {
        heading: "Copy an expert, with both sensors",
        paragraphs: [
          "Imitation learns the action the expert took. Most of those frames are straight or a sharp turn. A camera-only net can fit that average and still leave the road on a gentle bend.",
        ],
        bullets: [
          "About 90,000 steps from MetaDrive’s IDM driver. Each step is a frame plus 19 state numbers and the action.",
          "EfficientNet-B0 for the image, a small MLP for the state, concatenated into steering and acceleration.",
          "Fusion cut mean squared error by 81.5% versus the camera-only baseline. Best validation MSE on the fusion run was 0.00043.",
        ],
      },
      {
        heading: "What the picture was looking at",
        paragraphs: [
          "A low imitation loss does not mean the car stays in lane. Grad-CAM was the check on where the vision branch was actually looking when the imitator left the road.",
        ],
        bullets: [
          "On those turns the vision branch attended to sky and roadside terrain. That drift accounts for 95% of the out-of-road episodes.",
          "The state vector is there so speed, heading, and the nearby road can cover what the image attends to poorly.",
          "The network is 4.89 million parameters. About 882 thousand train while the backbone is frozen, then the backbone is unfrozen.",
        ],
      },
      {
        heading: "Practice, not only copying",
        paragraphs: [
          "The second phase has to drive, not only replay the expert. PPO was warm-started from the fusion checkpoint so it did not begin from a random policy.",
        ],
        bullets: [
          "Average episode length went from 299 steps to 2,256, about 7.5 times longer.",
          "Policy exported to ONNX, 19.6 MB.",
          "A Streamlit dashboard shows the Grad-CAM maps and the cloning curve next to the PPO curve.",
        ],
      },
    ],
  },
  {
    slug: "reconstruction-colorization",
    title: "Reconstruction and colorization",
    meta: "September 2025 to November 2025, with Prof. Biplab Banerjee",
    summary:
      "One frozen visual backbone, two jobs: put a masked photo back together, and paint colour, without training two networks or the whole encoder.",
    skills: ["DINOv2", "LoRA", "PyTorch", "COCO"],
    href: "/projects/reconstruction-colorization",
    back: "/#projects",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Deepak-Dhinwa/Image-Reconstruction-Colorization",
      },
    ],
    stats: [
      { value: "2 heads", label: "RGB repair and LAB colour" },
      { value: "~90%", label: "fewer parameters trained" },
      { value: "LoRA 32", label: "rank that fits a 4 GB GPU" },
    ],
    home: [
      "DINOv2 ViT-S/14 stays frozen. It already understands patches. LoRA and the last transformer block are what adapt.",
      "A shared decoder splits into an RGB reconstruction head and a LAB colour head. Images are COCO at 224×224 with 25% of the patches masked.",
    ],
    sections: [
      {
        heading: "One backbone, two judgments",
        paragraphs: [
          "Reconstruction and colour are related, but they fail in different ways. Sharing the encoder and splitting the heads means each can be looked at on its own.",
        ],
        bullets: [
          "Encoder: DINOv2 ViT-S/14, weights frozen.",
          "Shared convolutional decoder, then an RGB head and a LAB a* b* head.",
          "Course project with Prof. Biplab Banerjee.",
        ],
      },
      {
        heading: "What was allowed to train",
        paragraphs: [
          "Full fine-tuning of the backbone does not fit a 4 GB card. LoRA trains a low-rank difference instead of every weight.",
        ],
        bullets: [
          "LoRA rank 32, plus the last transformer block. Trainable parameters drop by about 90%.",
          "COCO 2017, 224×224, 25% patch masking. Reconstruction loss is L1 with a little SSIM, so structure is kept. Colour is L1 on a* and b*.",
          "On a held-out photo the pose survives the mask. Colour is the head learning the scene, grass and kit, from the same features.",
        ],
      },
    ],
  },
  {
    slug: "airline-satisfaction",
    title: "Airline passenger satisfaction",
    meta: "October 2025 to November 2025",
    summary:
      "The score is only useful if the missing delays and the repeated survey answers are handled before a model is allowed to see them.",
    skills: ["XGBoost", "SHAP", "PCA", "imputation"],
    href: "/projects/airline-satisfaction",
    back: "/#projects",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Deepak-Dhinwa/airline-satisfaction-analysis",
      },
    ],
    stats: [
      { value: "0.987", label: "ROC-AUC, held-out flights" },
      { value: "0.935", label: "F1 on that same split" },
      { value: "0.93", label: "R² filling arrival delay" },
    ],
    home: [
      "103,904 passenger records. Arrival delay is filled from departure delay, not with a column average, because a typical delay would invent a flight that did not happen.",
      "After the survey items stop repeating each other, XGBoost reaches ROC-AUC 0.987 and F1 0.935. SHAP reads the score back as cabin and reason for travel.",
    ],
    sections: [
      {
        heading: "Repair the table first",
        paragraphs: [
          "Mean-filling a delay pretends every missing flight was ordinary. Predicting arrival from the departure delay that did happen keeps the delay in the row.",
        ],
        bullets: [
          "103,904 records. Missingness separated into MCAR, MAR, and MNAR before anything was filled.",
          "Arrival-delay imputation reached an R² of 0.93.",
          "Eighteen features started above a VIF of 5. Fourteen survey ratings went through PCA. After that, none of the remaining columns did.",
        ],
      },
      {
        heading: "A fair comparison, then an explanation",
        paragraphs: [
          "Once the repeated survey items are combined, a simple model and a boosted one can be compared on the same columns. The winner still needs a reason a person can read.",
        ],
        bullets: [
          "Logistic regression, a random forest, and XGBoost, one feature set. XGBoost is the reported model.",
          "Held-out ROC-AUC 0.987, F1 0.935.",
          "Feature choice also compared mutual information, recursive feature elimination, and L1 logistic regression.",
        ],
      },
      {
        heading: "What the score is actually saying",
        paragraphs: [
          "Cabin matters, and the reason for flying matters with it. The same seat does not mean the same passenger.",
        ],
        bullets: [
          "Business class is satisfied about 69% of the time, Eco 19%, Eco Plus 25%.",
          "Inside business class, a business trip is about 72% satisfied and a personal trip about 12%.",
          "SHAP puts online boarding and type of travel at the front of the explanation. Almost all disloyal customers in this table are business travelers, so retention here is a corporate-account question.",
        ],
      },
    ],
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["Python", "C++", "C", "SQL"],
  },
  {
    label: "Models and libraries",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "Hugging Face",
      "OpenCV",
      "NumPy",
      "Pandas",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    label: "Systems",
    items: [
      "Docker",
      "Azure",
      "Databricks",
      "Airflow",
      "Spark",
      "MLflow",
      "Weights & Biases",
      "Git",
      "Postman",
    ],
  },
];

export function roleBySlug(slug: string) {
  return roles.find((role) => role.slug === slug);
}

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
