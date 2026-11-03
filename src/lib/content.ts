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
  { href: "/#work", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

export type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

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
  sections: Section[];
};

export const roles: Writeup[] = [
  {
    slug: "scapia",
    title: "Analytics Intern",
    meta: "Scapia, Indian travel fintech, May 2026 to July 2026",
    summary:
      "Usage patterns, churn, hotel images, and flight discounts, from the data the product already had.",
    skills: ["SigLIP2", "Airflow", "Databricks", "churn models"],
    href: "/work/scapia",
    back: "/#work",
    links: [],
    home: [
      "Studied how people used the product, including patterns that looked like card abuse.",
      "Matched hotel highlights to images with a fine-tuned SigLIP2 model, and ran inference on Databricks GPUs through Airflow.",
    ],
    sections: [
      {
        heading: "Behaviour",
        bullets: [
          "Worked from user interaction data to see how the product was actually used.",
          "Separated ordinary use from activity that looked like card abuse.",
        ],
      },
      {
        heading: "Churn",
        bullets: [
          "Built models to find customers who were likely to leave, at more than one stage of the relationship.",
          "The point of the score was a retention decision, not a leaderboard.",
        ],
      },
      {
        heading: "Hotels",
        bullets: [
          "Built the path from a hotel highlight to the image that should represent it.",
          "The matcher was a fine-tuned SigLIP2 model.",
          "Airflow scheduled the inference on Databricks GPU compute, so a run did not depend on a notebook staying open.",
        ],
      },
      {
        heading: "Flights",
        bullets: [
          "Read the dynamic flight discounting already in use.",
          "Worked with the team on what to test next: who receives a discount, and whether that discount produces a booking that would not have happened otherwise.",
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
      "Ten seasons of NBA data in a graph and a vector store, with a chat app that can query both and forecast a game.",
    skills: ["Neo4j", "Weaviate", "LlamaIndex", "XGBoost", "FastAPI", "React"],
    href: "/projects/sportmind",
    back: "/#projects",
    links: [{ label: "GitHub", href: "https://github.com/Deepak-Dhinwa/sportmind" }],
    home: [
      "Loaded about 1,400 players and 12,800 games into Neo4j, and the document chunks into Weaviate.",
      "A FastAPI and React app answers in chat, draws the graph, and serves the win and player forecasts.",
    ],
    sections: [
      {
        heading: "Data",
        bullets: [
          "Ten NBA seasons, 2013-14 through 2022-23.",
          "About 1,400 players and 12,800 regular-season and playoff games.",
          "The structured facts went into Neo4j. The written material was chunked, embedded, and stored in Weaviate for hybrid BM25 and dense search, then reranked.",
        ],
      },
      {
        heading: "Question answering",
        bullets: [
          "A LlamaIndex orchestrator classifies the intent of the question.",
          "A stats or relationship question goes to Cypher. A passage question goes to the vector store.",
          "The generator tries Groq first and falls back to Gemini. Repeated questions hit an LRU cache.",
        ],
      },
      {
        heading: "Forecasts and the app",
        bullets: [
          "An XGBoost win model, with isotonic calibration, estimates the game.",
          "658 EWMA models cover 94 players and 7 box-score metrics.",
          "The FastAPI and React app exposes chat, the neighbourhood graph, and the prediction pages.",
        ],
      },
    ],
  },
  {
    slug: "vehicle-speed-plates",
    title: "Vehicle speed and plate reading",
    meta: "June 2025 to July 2025",
    summary:
      "A camera pipeline that finds each vehicle, keeps an id on it, estimates speed from the track, and reads the plate.",
    skills: ["YOLOv8", "SORT", "TrOCR", "FastAPI", "Docker", "Azure"],
    href: "/projects/vehicle-speed-plates",
    back: "/#projects",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Deepak-Dhinwa/automated_vehicle_speed_and_number_plate_detection",
      },
    ],
    home: [
      "YOLOv8 finds the vehicles and SORT keeps the ids. A frame takes about 15 ms on an RTX 3050.",
      "A second YOLOv8, trained for 50 epochs on about 222 plate crops, finds the plate. TrOCR reads it.",
    ],
    sections: [
      {
        heading: "Detection and tracking",
        bullets: [
          "YOLOv8n marks cars, buses, and trucks in the frame.",
          "SORT assigns an id by matching each new box to the previous one, so the same vehicle can be followed.",
          "On an RTX 3050 the vehicle pass is about 15 ms a frame.",
        ],
      },
      {
        heading: "Plates",
        bullets: [
          "The plate is a thin object inside the vehicle box, so it has its own detector.",
          "That YOLOv8n was trained for 50 epochs on about 222 cropped plates. Validation mAP50 was about 0.95, and mAP50-95 about 0.67.",
          "TrOCR, fine-tuned from Microsoft's base model, reads the characters in the plate crop.",
        ],
      },
      {
        heading: "Speed and deployment",
        bullets: [
          "Speed comes from how far the tracked box moves between frames, converted with a scale from pixels to the road.",
          "FastAPI serves the annotated stream.",
          "The stack was packed into Docker, pushed to Azure Container Registry, and checked against a live IP webcam.",
        ],
      },
    ],
  },
  {
    slug: "metadrive",
    title: "Driving policy in MetaDrive",
    meta: "August 2025 to November 2025",
    summary:
      "A driving policy that sees the camera and the car's own state, trained by copying an expert and then by reinforcement learning.",
    skills: ["EfficientNet", "behavioural cloning", "PPO", "Grad-CAM", "ONNX"],
    href: "/projects/metadrive",
    back: "/#projects",
    links: [{ label: "GitHub", href: "https://github.com/Deepak-Dhinwa/meta-drive-sim" }],
    home: [
      "EfficientNet-B0 features plus a 19-number vehicle state. Behavioural cloning on about 90,000 expert steps cut MSE by 81.5% against a camera-only policy.",
      "PPO, started from that checkpoint, raised average survival from 299 steps to 2,256.",
    ],
    sections: [
      {
        heading: "The policy",
        bullets: [
          "The camera goes through EfficientNet-B0. Nineteen vehicle-state numbers go through a small MLP. The two are concatenated.",
          "The expert was the simulator's IDM driver, about 90,000 steps.",
          "Copying that expert with both inputs cut mean squared error by 81.5% compared with a camera-only policy.",
        ],
      },
      {
        heading: "Why cars left the road",
        bullets: [
          "Grad-CAM on the failed episodes showed the vision branch attending to sky and roadside terrain.",
          "That attention was behind most of the off-road episodes, so the next training step had a specific fault to correct.",
        ],
      },
      {
        heading: "Reinforcement learning and the dashboard",
        bullets: [
          "PPO was warm-started from the behavioural cloning checkpoint.",
          "Average survival went from 299 steps to 2,256, about 7.5 times longer.",
          "The policy was exported to ONNX, 19.6 MB. A Streamlit dashboard shows the Grad-CAM maps and the cloning versus reinforcement-learning curves.",
        ],
      },
    ],
  },
  {
    slug: "reconstruction-colorization",
    title: "Reconstruction and colorization",
    meta: "September 2025 to November 2025, with Prof. Biplab Banerjee",
    summary:
      "One DINOv2 backbone, two heads: rebuild a masked RGB image, and predict colour in LAB.",
    skills: ["DINOv2", "LoRA", "PyTorch", "COCO"],
    href: "/projects/reconstruction-colorization",
    back: "/#projects",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Deepak-Dhinwa/Image-Reconstruction-Colorization",
      },
    ],
    home: [
      "A shared convolutional decoder sits on DINOv2 ViT-S/14, with separate heads for RGB reconstruction and LAB colour.",
      "LoRA adapts the transformer while the pretrained encoder stays frozen, cutting the trainable parameters by about 90%.",
    ],
    sections: [
      {
        heading: "Architecture",
        bullets: [
          "The encoder is DINOv2 ViT-S/14.",
          "A shared convolutional decoder feeds two heads. One rebuilds RGB. The other predicts the a* and b* channels in LAB.",
        ],
      },
      {
        heading: "Training",
        bullets: [
          "The encoder weights stay frozen. LoRA adapts the transformer layers, so about 90% fewer parameters are trained.",
          "Images are COCO 2017 at 224×224, with 25% of the patches masked.",
          "Reconstruction uses L1 and SSIM. Colour uses an L1 loss on the LAB a* and b* channels.",
        ],
      },
    ],
  },
  {
    slug: "airline-satisfaction",
    title: "Airline passenger satisfaction",
    meta: "October 2025 to November 2025",
    summary:
      "A satisfaction model on 103,904 passenger records, after the missing values and the survey items were dealt with properly.",
    skills: ["XGBoost", "SHAP", "PCA", "imputation"],
    href: "/projects/airline-satisfaction",
    back: "/#projects",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Deepak-Dhinwa/airline-satisfaction-analysis",
      },
    ],
    home: [
      "Classified missing arrival delays, then imputed them. The delay model reached R² of 0.93.",
      "XGBoost reached ROC-AUC 0.987 and F1 0.935. SHAP pointed at cabin comfort.",
    ],
    sections: [
      {
        heading: "The table",
        bullets: [
          "103,904 passenger records.",
          "Missingness was separated into MCAR, MAR, and MNAR before anything was filled in.",
          "Arrival delay was imputed with a regression model that reached an R² of 0.93.",
        ],
      },
      {
        heading: "What the model was allowed to see",
        bullets: [
          "Iterative VIF removed columns that were copies of each other.",
          "Fourteen survey ratings were reduced with PCA.",
          "Mutual information, recursive feature elimination, and L1 logistic regression were compared as ways to choose the remaining features.",
        ],
      },
      {
        heading: "The result",
        bullets: [
          "XGBoost reached a ROC-AUC of 0.987 and an F1 of 0.935.",
          "SHAP ranked cabin comfort as the strongest driver of satisfaction, and showed which parts of the product the dissatisfied passengers were marking down.",
        ],
      },
    ],
  },
];

export const skills = [
  {
    label: "Languages",
    value: "Python, C++, C, SQL",
  },
  {
    label: "Tools",
    value: "Git, Docker, Azure, Databricks, Weights & Biases, MLflow, Postman",
  },
  {
    label: "Libraries",
    value:
      "PyTorch, TensorFlow, scikit-learn, XGBoost, Hugging Face, LangChain, LangGraph, OpenCV, NumPy, Pandas, Spark, Airflow",
  },
];

export function roleBySlug(slug: string) {
  return roles.find((role) => role.slug === slug);
}

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
