const STORAGE_KEY = "elite-train-iphone-v1";
const STORAGE_BACKUP_KEY = `${STORAGE_KEY}-backup`;
const STORAGE_SCHEMA_VERSION = 5;
const CURRENT_REST_PROFILE_VERSION = 2;

const PROGRAM = {
  Push: [
    { exercise: "Ecarte poulie", kind: "isolation", series: "Activation", targetLabel: "15", minReps: 15, maxReps: 15, rest: 60, defaultLoad: 12, loadLabel: "12-15 kg" },
    { exercise: "Developpe couche", kind: "barbell", series: "Top Set", targetLabel: "6-8", minReps: 6, maxReps: 8, rest: 180, defaultLoad: 65, loadLabel: "65 kg" },
    { exercise: "Developpe couche", kind: "barbell", series: "Back-off 1", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 120, defaultLoad: 58, loadLabel: "58 kg" },
    { exercise: "Developpe couche", kind: "barbell", series: "Back-off 2", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 120, defaultLoad: 58, loadLabel: "58 kg" },
    { exercise: "Developpe couche", kind: "barbell", series: "Back-off 3", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 120, defaultLoad: 58, loadLabel: "58 kg" },
    { exercise: "Incline halteres", kind: "dumbbell", series: "Top Set", targetLabel: "6-10", minReps: 6, maxReps: 10, rest: 90, defaultLoad: 30, loadLabel: "30 kg" },
    { exercise: "Incline halteres", kind: "dumbbell", series: "Back-off 1", targetLabel: "8-12", minReps: 8, maxReps: 12, rest: 90, defaultLoad: 26, loadLabel: "26 kg" },
    { exercise: "Incline halteres", kind: "dumbbell", series: "Back-off 2", targetLabel: "8-12", minReps: 8, maxReps: 12, rest: 90, defaultLoad: 26, loadLabel: "26 kg" },
    { exercise: "Incline halteres", kind: "dumbbell", series: "Back-off 3", targetLabel: "8-12", minReps: 8, maxReps: 12, rest: 90, defaultLoad: 26, loadLabel: "26 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 1", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 60, defaultLoad: 7, loadLabel: "7 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 2", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 60, defaultLoad: 7, loadLabel: "7 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 3", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 60, defaultLoad: 7, loadLabel: "7 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 4", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 60, defaultLoad: 7, loadLabel: "7 kg" },
    { exercise: "Developpe epaules", kind: "dumbbell", series: "Serie 1", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 90, defaultLoad: 20, loadLabel: "20 kg" },
    { exercise: "Developpe epaules", kind: "dumbbell", series: "Serie 2", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 90, defaultLoad: 20, loadLabel: "20 kg" },
    { exercise: "Developpe epaules", kind: "dumbbell", series: "Serie 3", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 90, defaultLoad: 20, loadLabel: "20 kg" },
    { exercise: "Triceps poulie", kind: "isolation", series: "Serie 1", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 60, defaultLoad: 25, loadLabel: "25 kg" },
    { exercise: "Triceps poulie", kind: "isolation", series: "Serie 2", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 60, defaultLoad: 25, loadLabel: "25 kg" },
    { exercise: "Triceps poulie", kind: "isolation", series: "Serie 3", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 60, defaultLoad: 25, loadLabel: "25 kg" },
  ],
  Pull: [
    { exercise: "Pullover poulie", kind: "isolation", series: "Activation", targetLabel: "15", minReps: 15, maxReps: 15, rest: 60, defaultLoad: 20, loadLabel: "20 kg" },
    { exercise: "Tirage vertical", kind: "machine", series: "Top Set", targetLabel: "6-10", minReps: 6, maxReps: 10, rest: 120, defaultLoad: 62, loadLabel: "62 kg" },
    { exercise: "Tirage vertical", kind: "machine", series: "Back-off 1", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 90, defaultLoad: 56, loadLabel: "56 kg" },
    { exercise: "Tirage vertical", kind: "machine", series: "Back-off 2", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 90, defaultLoad: 56, loadLabel: "56 kg" },
    { exercise: "Tirage vertical", kind: "machine", series: "Back-off 3", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 90, defaultLoad: 56, loadLabel: "56 kg" },
    { exercise: "Rowing haltere", kind: "dumbbell", series: "Top Set", targetLabel: "8", minReps: 8, maxReps: 8, rest: 90, defaultLoad: 36, loadLabel: "36 kg" },
    { exercise: "Rowing haltere", kind: "dumbbell", series: "Back-off 1", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 90, defaultLoad: 32, loadLabel: "32 kg" },
    { exercise: "Rowing haltere", kind: "dumbbell", series: "Back-off 2", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 90, defaultLoad: 32, loadLabel: "32 kg" },
    { exercise: "Rowing haltere", kind: "dumbbell", series: "Back-off 3", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 90, defaultLoad: 32, loadLabel: "32 kg" },
    { exercise: "Rowing poulie", kind: "machine", series: "Serie 1", targetLabel: "12", minReps: 12, maxReps: 12, rest: 75, defaultLoad: 45, loadLabel: "45 kg" },
    { exercise: "Rowing poulie", kind: "machine", series: "Serie 2", targetLabel: "12", minReps: 12, maxReps: 12, rest: 75, defaultLoad: 45, loadLabel: "45 kg" },
    { exercise: "Rowing poulie", kind: "machine", series: "Serie 3", targetLabel: "12", minReps: 12, maxReps: 12, rest: 75, defaultLoad: 45, loadLabel: "45 kg" },
    { exercise: "Curl incline", kind: "dumbbell", series: "Serie 1", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 60, defaultLoad: 12, loadLabel: "12 kg" },
    { exercise: "Curl incline", kind: "dumbbell", series: "Serie 2", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 60, defaultLoad: 12, loadLabel: "12 kg" },
    { exercise: "Curl incline", kind: "dumbbell", series: "Serie 3", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 60, defaultLoad: 12, loadLabel: "12 kg" },
    { exercise: "Curl poulie", kind: "isolation", series: "Serie 1", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "leger" },
    { exercise: "Curl poulie", kind: "isolation", series: "Serie 2", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "leger" },
    { exercise: "Curl poulie", kind: "isolation", series: "Serie 3", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "leger" },
  ],
  Legs: [
    { exercise: "Squat halteres", kind: "dumbbell", series: "Serie 1", targetLabel: "8-12", minReps: 8, maxReps: 12, rest: 90, defaultLoad: 30, loadLabel: "30 kg" },
    { exercise: "Squat halteres", kind: "dumbbell", series: "Serie 2", targetLabel: "8-12", minReps: 8, maxReps: 12, rest: 90, defaultLoad: 30, loadLabel: "30 kg" },
    { exercise: "Squat halteres", kind: "dumbbell", series: "Serie 3", targetLabel: "8-12", minReps: 8, maxReps: 12, rest: 90, defaultLoad: 30, loadLabel: "30 kg" },
    { exercise: "Squat halteres", kind: "dumbbell", series: "Serie 4", targetLabel: "8-12", minReps: 8, maxReps: 12, rest: 90, defaultLoad: 30, loadLabel: "30 kg" },
    { exercise: "Fentes", kind: "dumbbell", series: "Serie 1", targetLabel: "10", minReps: 10, maxReps: 10, rest: 75, defaultLoad: 20, loadLabel: "20 kg" },
    { exercise: "Fentes", kind: "dumbbell", series: "Serie 2", targetLabel: "10", minReps: 10, maxReps: 10, rest: 75, defaultLoad: 20, loadLabel: "20 kg" },
    { exercise: "Fentes", kind: "dumbbell", series: "Serie 3", targetLabel: "10", minReps: 10, maxReps: 10, rest: 75, defaultLoad: 20, loadLabel: "20 kg" },
    { exercise: "Hip thrust", kind: "barbell", series: "Serie 1", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 120, defaultLoad: 60, loadLabel: "60 kg" },
    { exercise: "Hip thrust", kind: "barbell", series: "Serie 2", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 120, defaultLoad: 60, loadLabel: "60 kg" },
    { exercise: "Hip thrust", kind: "barbell", series: "Serie 3", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 120, defaultLoad: 60, loadLabel: "60 kg" },
    { exercise: "Leg curl", kind: "machine", series: "Serie 1", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: 35, loadLabel: "35 kg" },
    { exercise: "Leg curl", kind: "machine", series: "Serie 2", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: 35, loadLabel: "35 kg" },
    { exercise: "Leg curl", kind: "machine", series: "Serie 3", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: 35, loadLabel: "35 kg" },
    { exercise: "Mollets", kind: "isolation", series: "Serie 1", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: null, loadLabel: "Pdc ou charge" },
    { exercise: "Mollets", kind: "isolation", series: "Serie 2", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: null, loadLabel: "Pdc ou charge" },
    { exercise: "Mollets", kind: "isolation", series: "Serie 3", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: null, loadLabel: "Pdc ou charge" },
    { exercise: "Mollets", kind: "isolation", series: "Serie 4", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: null, loadLabel: "Pdc ou charge" },
  ],
  Upper: [
    { exercise: "Developpe couche", kind: "barbell", series: "Serie 1", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 120, defaultLoad: 60, loadLabel: "60 kg" },
    { exercise: "Developpe couche", kind: "barbell", series: "Serie 2", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 120, defaultLoad: 60, loadLabel: "60 kg" },
    { exercise: "Developpe couche", kind: "barbell", series: "Serie 3", targetLabel: "8-10", minReps: 8, maxReps: 10, rest: 120, defaultLoad: 60, loadLabel: "60 kg" },
    { exercise: "Tirage horizontal", kind: "machine", series: "Serie 1", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 75, defaultLoad: 50, loadLabel: "50 kg" },
    { exercise: "Tirage horizontal", kind: "machine", series: "Serie 2", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 75, defaultLoad: 50, loadLabel: "50 kg" },
    { exercise: "Tirage horizontal", kind: "machine", series: "Serie 3", targetLabel: "10-12", minReps: 10, maxReps: 12, rest: 75, defaultLoad: 50, loadLabel: "50 kg" },
    { exercise: "Ecarte poulie", kind: "isolation", series: "Serie 1", targetLabel: "12-15", minReps: 12, maxReps: 15, rest: 60, defaultLoad: 15, loadLabel: "15 kg" },
    { exercise: "Ecarte poulie", kind: "isolation", series: "Serie 2", targetLabel: "12-15", minReps: 12, maxReps: 15, rest: 60, defaultLoad: 15, loadLabel: "15 kg" },
    { exercise: "Ecarte poulie", kind: "isolation", series: "Serie 3", targetLabel: "12-15", minReps: 12, maxReps: 15, rest: 60, defaultLoad: 15, loadLabel: "15 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 1", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: 6, loadLabel: "6-7 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 2", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: 6, loadLabel: "6-7 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 3", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: 6, loadLabel: "6-7 kg" },
    { exercise: "Elevations laterales", kind: "isolation", series: "Serie 4", targetLabel: "15-20", minReps: 15, maxReps: 20, rest: 45, defaultLoad: 6, loadLabel: "6-7 kg" },
    { exercise: "Oiseau", kind: "isolation", series: "Serie 1", targetLabel: "15", minReps: 15, maxReps: 15, rest: 45, defaultLoad: 6, loadLabel: "6 kg" },
    { exercise: "Oiseau", kind: "isolation", series: "Serie 2", targetLabel: "15", minReps: 15, maxReps: 15, rest: 45, defaultLoad: 6, loadLabel: "6 kg" },
    { exercise: "Oiseau", kind: "isolation", series: "Serie 3", targetLabel: "15", minReps: 15, maxReps: 15, rest: 45, defaultLoad: 6, loadLabel: "6 kg" },
    { exercise: "Curl bras", kind: "isolation", series: "Serie 1", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "modere" },
    { exercise: "Curl bras", kind: "isolation", series: "Serie 2", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "modere" },
    { exercise: "Curl bras", kind: "isolation", series: "Serie 3", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "modere" },
    { exercise: "Triceps bras", kind: "isolation", series: "Serie 1", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "modere" },
    { exercise: "Triceps bras", kind: "isolation", series: "Serie 2", targetLabel: "12", minReps: 12, maxReps: 12, rest: 60, defaultLoad: null, loadLabel: "modere" },
  ],
};

const PROGRAM_ENTRY_PRESET_GROUPS = [
  { id: "pecs", label: "Pecs" },
  { id: "dos", label: "Dos" },
  { id: "jambes", label: "Jambes" },
  { id: "epaules", label: "Epaules" },
  { id: "bras", label: "Bras" },
];

const PROGRAM_ENTRY_PRESETS = {
  pecs: [
    { id: "bench-machine", exercise: "Developpe incline machine", kind: "machine", minReps: 8, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "pec-deck", exercise: "Pec deck", kind: "machine", minReps: 10, maxReps: 15, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "fly-cable", exercise: "Ecarte poulie", kind: "isolation", minReps: 12, maxReps: 15, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "chest-press", exercise: "Chest press", kind: "machine", minReps: 8, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
  ],
  dos: [
    { id: "lat-pulldown", exercise: "Tirage vertical", kind: "machine", minReps: 8, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "seated-row", exercise: "Rowing poulie", kind: "machine", minReps: 10, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "one-arm-row", exercise: "Rowing haltere", kind: "dumbbell", minReps: 8, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "pullover", exercise: "Pullover poulie", kind: "isolation", minReps: 12, maxReps: 15, defaultLoad: null, loadLabel: "Charge libre" },
  ],
  jambes: [
    { id: "leg-press", exercise: "Presse a cuisses", kind: "machine", minReps: 8, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "hip-thrust", exercise: "Hip thrust", kind: "barbell", minReps: 8, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "leg-curl", exercise: "Leg curl", kind: "machine", minReps: 10, maxReps: 15, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "leg-extension", exercise: "Leg extension", kind: "machine", minReps: 10, maxReps: 15, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "calves", exercise: "Mollets", kind: "isolation", minReps: 15, maxReps: 20, defaultLoad: null, loadLabel: "Pdc ou charge" },
  ],
  epaules: [
    { id: "shoulder-press", exercise: "Developpe epaules", kind: "dumbbell", minReps: 8, maxReps: 10, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "lateral-raise", exercise: "Elevations laterales", kind: "isolation", minReps: 15, maxReps: 20, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "rear-delt", exercise: "Oiseau", kind: "isolation", minReps: 12, maxReps: 20, defaultLoad: null, loadLabel: "Charge libre" },
  ],
  bras: [
    { id: "incline-curl", exercise: "Curl incline", kind: "dumbbell", minReps: 10, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "hammer-curl", exercise: "Curl marteau", kind: "dumbbell", minReps: 10, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "pushdown", exercise: "Triceps poulie", kind: "isolation", minReps: 10, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
    { id: "overhead-triceps", exercise: "Extension triceps corde", kind: "isolation", minReps: 10, maxReps: 12, defaultLoad: null, loadLabel: "Charge libre" },
  ],
};

const PROGRAM_PLANNER_GOALS = {
  classic: {
    id: "classic",
    title: "Classique",
    description: "Tous les splits deja presents dans l'app",
  },
  "weight-loss": {
    id: "weight-loss",
    title: "Perte de poids",
    description: "Depenser plus tout en gardant une base muscu solide",
  },
  toning: {
    id: "toning",
    title: "Tonification",
    description: "Silhouette plus ferme et plus equilibree",
  },
  "muscle-gain": {
    id: "muscle-gain",
    title: "Prise de muscle",
    description: "Construire du volume et progresser proprement",
  },
  wellbeing: {
    id: "wellbeing",
    title: "Bien-etre + marche",
    description: "Bouger mieux, recuperer et garder le rythme",
  },
};

const PROGRAM_PLANNER_CONSTRAINTS = {
  standard: {
    id: "standard",
    title: "Standard",
    description: "Programme classique, sans adaptation articulaire",
    shortLabel: "Standard",
  },
  "knee-friendly": {
    id: "knee-friendly",
    title: "Genou sensible",
    description: "Exercices plus stables, impact reduit, marche privilegiee",
    shortLabel: "Genou sensible",
  },
  "shoulder-friendly": {
    id: "shoulder-friendly",
    title: "Epaule sensible",
    description: "Presses guidees, prises neutres et overhead lourd retire",
    shortLabel: "Epaule sensible",
  },
  "back-friendly": {
    id: "back-friendly",
    title: "Bas du dos sensible",
    description: "Moins de charge sur le tronc, plus d'appuis stables",
    shortLabel: "Dos sensible",
  },
};

const CARDIO_TYPES = {
  "walk-treadmill": {
    id: "walk-treadmill",
    title: "Marche tapis",
    shortLabel: "Tapis",
  },
  "incline-walk": {
    id: "incline-walk",
    title: "Marche inclinee",
    shortLabel: "Incline",
  },
  bike: {
    id: "bike",
    title: "Velo",
    shortLabel: "Velo",
  },
  elliptical: {
    id: "elliptical",
    title: "Elliptique",
    shortLabel: "Elliptique",
  },
  other: {
    id: "other",
    title: "Cardio libre",
    shortLabel: "Libre",
  },
};

const BODY_ACTIVITY_LEVELS = {
  sedentary: {
    id: "sedentary",
    label: "Sedentaire",
    factor: 1.2,
    note: "Peu de mouvement hors seances",
  },
  light: {
    id: "light",
    label: "Leger",
    factor: 1.375,
    note: "Un peu de marche, 2 a 3 seances/semaine",
  },
  moderate: {
    id: "moderate",
    label: "Modere",
    factor: 1.55,
    note: "Rythme classique salle + vie active normale",
  },
  active: {
    id: "active",
    label: "Actif",
    factor: 1.725,
    note: "Beaucoup de pas, cardio ou seances regulieres",
  },
  veryActive: {
    id: "veryActive",
    label: "Tres actif",
    factor: 1.9,
    note: "Gros volume global, a utiliser seulement si c'est vraiment ton cas",
  },
};

const BODY_CHART_FIELDS = {
  weight: {
    id: "weight",
    label: "Poids",
    shortLabel: "Poids",
    unit: " kg",
    empty: "Ajoute au moins 2 poids pour lire une vraie tendance.",
  },
  waist: {
    id: "waist",
    label: "Tour de taille",
    shortLabel: "Taille",
    unit: " cm",
    empty: "Ajoute au moins 2 tours de taille pour visualiser la courbe.",
  },
  arms: {
    id: "arms",
    label: "Bras",
    shortLabel: "Bras",
    unit: " cm",
    empty: "Ajoute au moins 2 mesures de bras pour voir la progression.",
  },
  thighs: {
    id: "thighs",
    label: "Cuisses",
    shortLabel: "Cuisses",
    unit: " cm",
    empty: "Ajoute au moins 2 mesures de cuisses pour voir la progression.",
  },
};

const HISTORY_SECTION_FILTERS = [
  { key: "all", label: "Tout" },
  { key: "records", label: "PR" },
  { key: "cardio", label: "Cardio" },
  { key: "body", label: "Mensurations" },
  { key: "reviews", label: "Ressenti" },
];

const BODY_SECTION_FILTERS = [
  { key: "entry", label: "Ajouter" },
  { key: "chart", label: "Courbe" },
  { key: "overview", label: "Synthese" },
  { key: "targets", label: "Repere" },
  { key: "nutrition", label: "Macros" },
  { key: "recent", label: "Historique" },
];

const WORKOUT_SECTION_FILTERS = [
  { key: "all", label: "Tout" },
  { key: "load", label: "Charge" },
  { key: "entry", label: "Reps" },
];

const HISTORY_DETAIL_SECTION_FILTERS = [
  { key: "all", label: "Tout" },
  { key: "records", label: "PR" },
  { key: "chart", label: "Courbe" },
  { key: "groups", label: "Exos" },
];

const PROGRAM_EDITOR_SECTION_FILTERS = [
  { key: "all", label: "Tout" },
  { key: "exercises", label: "Exos" },
  { key: "actions", label: "Actions" },
];

const state = {
  screen: "dashboard",
  day: "Push",
  currentIndex: 0,
  program: createProgramCopy(),
  programTemplateId: "ppl-upper-4",
  programTemplateTitle: "PPL + Upper",
  programEditorDay: "Push",
  programEditorReorderMode: false,
  programPlannerDays: 4,
  programPlannerGoal: "classic",
  programPlannerConstraint: "standard",
  programTemplatePreviewId: "",
  planSection: "",
  settingsSection: "",
  cycle: createDefaultCycle(),
  exerciseData: {},
  history: [],
  cardioSessions: [],
  bodyMetrics: [],
  sessionReviews: [],
  cardioDraft: createDefaultCardioDraft(),
  bodyDraft: createDefaultBodyDraft(),
  bodyProfile: createDefaultBodyProfile(),
  workoutReviewDraft: createDefaultWorkoutReviewDraft(),
  timer: { seconds: 0, active: false },
  timerTotalSeconds: 0,
  restAlertVisible: false,
  restSoundEnabled: true,
  restVibrationEnabled: true,
  rpe: 8,
  repsInput: "",
  showPlates: false,
  focusWorkoutMode: false,
  workoutFinished: false,
  pendingAdvance: null,
  timerEndsAt: 0,
  workoutStartedAt: "",
  selectedChartKey: "",
  historyDetailKey: "",
  historyOverviewFilter: "all",
  historySectionFilter: "all",
  historyDetailSectionFilter: "all",
  bodySectionFilter: "entry",
  workoutSectionFilter: "all",
  programEditorSectionFilter: "all",
  programTemplatePreviewDay: "",
  bodyChartField: "weight",
  pendingSession: [],
  installHintDismissed: false,
  onboardingCompleted: false,
  onboardingStep: 0,
  historyEditor: null,
  programEntryEditor: null,
  storageMeta: {
    lastSavedAt: "",
    lastExportedAt: "",
    exportCount: 0,
    backupAvailable: false,
    recoveredFromBackup: false,
    saveError: "",
  },
};

const root = document.getElementById("app");
let restAudioContext = null;
let restAudioElement = null;
let restAudioUrl = "";
let restAudioUnlocked = false;
let scheduledRestToneNodes = [];
let scheduledRestSoundTimeoutId = null;
let hasScheduledRestSound = false;
let pwaRegistration = null;
let pwaUpdateReady = false;
let pwaUpdateDismissed = false;
let pwaReloadOnControllerChange = false;

function createProgramCopy() {
  return applyRecommendedRestProfile(
    ensureActivationSeriesForProgram(JSON.parse(JSON.stringify(PROGRAM)))
  );
}

function createDefaultCycle() {
  return {
    goal: "hypertrophy",
    length: 6,
    week: 1,
    startedAt: new Date().toISOString(),
  };
}

function getTodayDateInput() {
  return new Date().toISOString().slice(0, 10);
}

function sanitizeDateInputValue(value, fallback = getTodayDateInput()) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return fallback;
  const [year, month, day] = value.split("-").map((part) => Number(part));
  const parsed = new Date(Date.UTC(year, month - 1, day, 12, 0, 0)).getTime();
  return Number.isFinite(parsed) ? value : fallback;
}

function dateInputValueToIso(value, fallback = new Date().toISOString()) {
  const normalized = sanitizeDateInputValue(value, "");
  if (!normalized) return fallback;
  const [year, month, day] = normalized.split("-").map((part) => Number(part));
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0)).toISOString();
}

function isoToDateInput(value, fallback = getTodayDateInput()) {
  const iso = sanitizeIsoDate(value, "");
  return iso ? iso.slice(0, 10) : fallback;
}

function createDefaultCardioDraft() {
  return {
    type: "walk-treadmill",
    duration: "",
    speed: "",
    incline: "",
    note: "",
    date: getTodayDateInput(),
  };
}

function createDefaultBodyDraft() {
  return {
    weight: "",
    waist: "",
    arms: "",
    thighs: "",
    date: getTodayDateInput(),
  };
}

function createDefaultBodyProfile() {
  return {
    goal: "auto",
    sex: "male",
    age: "",
    height: "",
    activity: "moderate",
  };
}

function createDefaultWorkoutReviewDraft() {
  return {
    energy: "3",
    pain: "0",
    note: "",
  };
}

function matchesExerciseKeyword(exercise, keywords = []) {
  const value = String(exercise || "").toLowerCase();
  return keywords.some((keyword) => value.includes(keyword));
}

function getRecommendedRest(entry = {}) {
  const exercise = String(entry.exercise || "").toLowerCase();
  const series = String(entry.series || "").toLowerCase();
  const kind = entry.kind || "isolation";
  const maxReps = sanitizePositiveInteger(entry.maxReps, 12, 1);
  const isActivation = series.includes("activation");
  const isTopSet = series.includes("top set");
  const isBackoff = series.includes("back-off") || series.includes("backoff");
  const isLowerBody = matchesExerciseKeyword(exercise, [
    "squat",
    "fentes",
    "hip thrust",
    "leg",
    "mollets",
  ]);
  const isShoulderIsolation = matchesExerciseKeyword(exercise, [
    "laterales",
    "oiseau",
  ]);

  if (isActivation) return 45;

  if (kind === "barbell") {
    if (isTopSet) return 180;
    if (isLowerBody) return 150;
    return maxReps <= 8 || isBackoff ? 150 : 120;
  }

  if (kind === "machine") {
    if (isTopSet) return 120;
    if (isLowerBody) return 75;
    return maxReps <= 10 ? 105 : 90;
  }

  if (kind === "dumbbell") {
    if (isLowerBody) return 120;
    if (isTopSet) return 120;
    return maxReps <= 10 ? 105 : 90;
  }

  if (kind === "isolation") {
    if (isShoulderIsolation || exercise.includes("mollets") || maxReps >= 15) {
      return 45;
    }
    return 60;
  }

  return 75;
}

function applyRecommendedRestProfile(program = {}) {
  const nextProgram = {};

  getProgramDayKeys(program).forEach((day) => {
    nextProgram[day] = (program[day] || []).map((entry) => ({
      ...entry,
      rest: getRecommendedRest(entry),
    }));
  });

  return nextProgram;
}

function getActivationPreset(day) {
  const themeKey = resolveDayThemeKey(day);
  const presets = {
    Push: {
      exercise: "Ecarte poulie",
      kind: "isolation",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 45,
      defaultLoad: 12,
      loadLabel: "12-15 kg",
    },
    Pull: {
      exercise: "Pullover poulie",
      kind: "isolation",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 45,
      defaultLoad: 20,
      loadLabel: "20 kg",
    },
    Legs: {
      exercise: "Leg curl",
      kind: "machine",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 45,
      defaultLoad: 25,
      loadLabel: "25 kg",
    },
    Upper: {
      exercise: "Ecarte poulie",
      kind: "isolation",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 45,
      defaultLoad: 12,
      loadLabel: "12-15 kg",
    },
  };

  return presets[themeKey] || presets.Push;
}

function getActivationPresetsForDay(day) {
  const value = String(day || "").toLowerCase();

  if (value.includes("arm") || value.includes("bras")) {
    return [
      {
        exercise: "Curl poulie",
        kind: "isolation",
        targetLabel: "15",
        minReps: 15,
        maxReps: 15,
        rest: 45,
        defaultLoad: null,
        loadLabel: "leger",
      },
      {
        exercise: "Triceps poulie",
        kind: "isolation",
        targetLabel: "15",
        minReps: 15,
        maxReps: 15,
        rest: 45,
        defaultLoad: 20,
        loadLabel: "20 kg",
      },
      {
        exercise: "Curl poulie",
        kind: "isolation",
        targetLabel: "15",
        minReps: 15,
        maxReps: 15,
        rest: 45,
        defaultLoad: null,
        loadLabel: "leger",
      },
      {
        exercise: "Triceps bras",
        kind: "isolation",
        targetLabel: "15",
        minReps: 15,
        maxReps: 15,
        rest: 45,
        defaultLoad: null,
        loadLabel: "modere",
      },
    ];
  }

  return Array.from({ length: 4 }, () => getActivationPreset(day));
}

function isActivationEntry(entry) {
  return String(entry?.series || "").toLowerCase().includes("activation");
}

function ensureActivationSeriesForDay(day, entries = []) {
  const activationEntries = entries.filter((entry) => isActivationEntry(entry));
  const otherEntries = entries.filter((entry) => !isActivationEntry(entry));
  const nextActivationEntries = [...activationEntries];
  const activationPresets = getActivationPresetsForDay(day);

  while (nextActivationEntries.length < 4) {
    nextActivationEntries.push({
      ...(activationPresets[nextActivationEntries.length] || getActivationPreset(day)),
      series: `Activation ${nextActivationEntries.length + 1}`,
    });
  }

  return [...nextActivationEntries, ...otherEntries];
}

function ensureActivationSeriesForProgram(program = {}) {
  const nextProgram = {};

  getProgramDayKeys(program).forEach((day) => {
    nextProgram[day] = ensureActivationSeriesForDay(day, Array.isArray(program?.[day]) ? program[day] : []);
  });

  return nextProgram;
}

function sanitizeCycle(cycle = {}) {
  const allowedGoals = ["hypertrophy", "strength"];
  const allowedLengths = [4, 6, 8];
  const goal = allowedGoals.includes(cycle?.goal) ? cycle.goal : "hypertrophy";
  const length = allowedLengths.includes(Number(cycle?.length)) ? Number(cycle.length) : 6;
  const week = Math.min(length, sanitizePositiveInteger(cycle?.week, 1, 1));
  const startedAt =
    typeof cycle?.startedAt === "string" && cycle.startedAt
      ? cycle.startedAt
      : new Date().toISOString();

  return {
    goal,
    length,
    week,
    startedAt,
  };
}

function getProgramDays() {
  return Object.keys(state.program || PROGRAM);
}

function getProgramDayKeys(program = {}) {
  const keys = Object.keys(program || {});
  return keys.length ? keys : Object.keys(PROGRAM);
}

function resolveDayThemeKey(day) {
  const value = String(day || "").toLowerCase();

  if (
    value.includes("push") ||
    value.includes("chest") ||
    value.includes("pec")
  ) {
    return "Push";
  }

  if (
    value.includes("pull") ||
    value.includes("back") ||
    value.includes("dos")
  ) {
    return "Pull";
  }

  if (
    value.includes("leg") ||
    value.includes("lower") ||
    value.includes("jambe") ||
    value.includes("quad") ||
    value.includes("glute")
  ) {
    return "Legs";
  }

  if (
    value.includes("upper") ||
    value.includes("full") ||
    value.includes("arm") ||
    value.includes("bras") ||
    value.includes("shoulder") ||
    value.includes("epaule") ||
    value.includes("delts") ||
    value.includes("arnold")
  ) {
    return "Upper";
  }

  return "Upper";
}

function getDefaultProgramPresetGroup(day, exercise = "") {
  const exerciseValue = String(exercise || "").toLowerCase();
  const dayValue = String(day || "").toLowerCase();

  if (matchesExerciseKeyword(exerciseValue, ["curl", "triceps", "bras", "biceps"])) return "bras";
  if (matchesExerciseKeyword(exerciseValue, ["laterales", "oiseau", "epaules", "epaule", "shoulder"])) return "epaules";
  if (matchesExerciseKeyword(exerciseValue, ["rowing", "tirage", "pullover", "dos", "back"])) return "dos";
  if (matchesExerciseKeyword(exerciseValue, ["squat", "leg", "fentes", "mollets", "jambes", "hip thrust"])) return "jambes";
  if (matchesExerciseKeyword(exerciseValue, ["ecarte", "developpe", "chest", "pec", "incline"])) return "pecs";

  if (matchesExerciseKeyword(dayValue, ["arm", "bras"])) return "bras";
  if (matchesExerciseKeyword(dayValue, ["shoulder", "epaule", "epaules"])) return "epaules";

  const theme = resolveDayThemeKey(day);
  if (theme === "Push") return "pecs";
  if (theme === "Pull") return "dos";
  if (theme === "Legs") return "jambes";
  return "pecs";
}

function getProgramEntryPresetGroups(day, exercise = "") {
  const defaultGroup = getDefaultProgramPresetGroup(day, exercise);
  const groups = [...PROGRAM_ENTRY_PRESET_GROUPS];
  groups.sort((left, right) => {
    if (left.id === defaultGroup) return -1;
    if (right.id === defaultGroup) return 1;
    return 0;
  });
  return groups;
}

function getProgramEntryPresets(groupId) {
  return Array.isArray(PROGRAM_ENTRY_PRESETS[groupId]) ? PROGRAM_ENTRY_PRESETS[groupId] : [];
}

function getProgramEntryPreset(groupId, presetId) {
  return getProgramEntryPresets(groupId).find((preset) => preset.id === presetId) || null;
}

function sanitizePositiveInteger(value, fallback, minimum = 1) {
  const parsed = parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(minimum, parsed);
}

function sanitizePendingAdvance(value) {
  if (!value || typeof value !== "object") return null;

  return {
    nextIndex: sanitizePositiveInteger(value.nextIndex, 0, 0),
    shouldFinish: Boolean(value.shouldFinish),
  };
}

function sanitizeTimestamp(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function sanitizeExerciseKind(value, fallback = "isolation") {
  return ["barbell", "machine", "dumbbell", "isolation"].includes(value) ? value : fallback;
}

function sanitizeLoadNumber(value, fallback = null) {
  if (value === "" || value === null || value === undefined) return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(0, Math.round(parsed * 100) / 100);
}

function sanitizeDecimalNumber(
  value,
  fallback = null,
  minimum = 0,
  maximum = Number.POSITIVE_INFINITY
) {
  if (value === "" || value === null || value === undefined) return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(maximum, Math.max(minimum, Math.round(parsed * 10) / 10));
}

function sanitizePlainText(value, fallback) {
  const text = String(value ?? "")
    .replace(/[<>"]/g, "")
    .trim();
  return text || fallback;
}

function sanitizeIsoDate(value, fallback = "") {
  if (typeof value !== "string" || !value) return fallback;
  const parsed = new Date(value).getTime();
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : fallback;
}

function sanitizeTimerState(timer = {}) {
  const seconds = sanitizePositiveInteger(timer?.seconds, 0, 0);
  const active = Boolean(timer?.active) && seconds > 0;
  return {
    seconds,
    active,
  };
}

function getTimerTotalSeconds(timer = state.timer, timerTotalSeconds = state.timerTotalSeconds) {
  const seconds = sanitizePositiveInteger(timer?.seconds, 0, 0);
  const total = sanitizePositiveInteger(timerTotalSeconds, seconds, 0);
  return Math.max(seconds, total);
}

function getTimerProgressRatio() {
  const total = getTimerTotalSeconds();
  if (total <= 0) return 0;
  return Math.max(0, Math.min(1, state.timer.seconds / total));
}

function formatTargetLabelFromRange(minReps, maxReps) {
  return minReps === maxReps ? `${minReps}` : `${minReps}-${maxReps}`;
}

function sanitizeHistoryEntry(entry = {}) {
  if (!entry || typeof entry !== "object") return null;

  const day = sanitizePlainText(entry.day, "Seance");
  const exercise = sanitizePlainText(entry.exercise, "Exercice");
  const series = sanitizePlainText(entry.series, "Serie 1");
  const kind = sanitizeExerciseKind(entry.kind, "isolation");
  const { minReps, maxReps } = normalizeRepRange(
    entry.minReps,
    entry.maxReps,
    kind,
    series
  );
  const reps = sanitizePositiveInteger(entry.reps, minReps, 1);
  const rest = sanitizePositiveInteger(entry.rest, 0, 0);
  const load = sanitizeLoadNumber(entry.load, null);
  const defaultLoadLabel = isNumericLoad(load) ? `${load} kg` : "Charge libre";
  const loadLabel = sanitizePlainText(entry.loadLabel, defaultLoadLabel);
  const date = sanitizeIsoDate(entry.date, new Date().toISOString());
  const rpeRaw = Number(entry.rpe);
  const rpe = Number.isFinite(rpeRaw) ? Math.max(6, Math.min(10, Math.round(rpeRaw * 10) / 10)) : 8;

  return {
    key: sanitizePlainText(entry.key, buildExerciseKey(day, exercise, series)),
    day,
    exercise,
    series,
    kind,
    minReps,
    maxReps,
    target: formatTargetLabelFromRange(minReps, maxReps),
    load,
    loadLabel,
    reps,
    rpe,
    rest,
    date,
  };
}

function sanitizeHistoryEntries(entries = []) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((entry) => sanitizeHistoryEntry(entry))
    .filter(Boolean);
}

function sanitizePendingSessionEntries(entries = []) {
  return sanitizeHistoryEntries(entries);
}

function sanitizeExerciseDataMap(exerciseData = {}) {
  if (!exerciseData || typeof exerciseData !== "object") return {};

  return Object.entries(exerciseData).reduce((accumulator, [key, value]) => {
    if (typeof key !== "string" || !key.trim() || !value || typeof value !== "object") {
      return accumulator;
    }

    const load = sanitizeLoadNumber(value.load, null);
    accumulator[key] = {
      load,
      loadLabel: sanitizePlainText(
        value.loadLabel,
        isNumericLoad(load) ? `${load} kg` : "Charge libre"
      ),
      deload: Boolean(value.deload),
    };
    return accumulator;
  }, {});
}

function sanitizeCardioDraft(draft = {}) {
  return {
    type: CARDIO_TYPES[draft.type] ? draft.type : "walk-treadmill",
    duration: String(draft.duration ?? "").trim(),
    speed: String(draft.speed ?? "").trim(),
    incline: String(draft.incline ?? "").trim(),
    note: sanitizePlainText(draft.note, ""),
    date: sanitizeDateInputValue(draft.date, getTodayDateInput()),
  };
}

function sanitizeCardioEntry(entry = {}) {
  if (!entry || typeof entry !== "object") return null;

  const type = CARDIO_TYPES[entry.type] ? entry.type : "walk-treadmill";
  const duration = sanitizePositiveInteger(entry.duration, 0, 0);
  if (duration <= 0) return null;

  return {
    type,
    duration,
    speed: sanitizeDecimalNumber(entry.speed, null, 0, 25),
    incline: sanitizeDecimalNumber(entry.incline, null, 0, 25),
    note: sanitizePlainText(entry.note, ""),
    date: sanitizeIsoDate(entry.date, new Date().toISOString()),
  };
}

function sanitizeCardioEntries(entries = []) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((entry) => sanitizeCardioEntry(entry))
    .filter(Boolean);
}

function sanitizeBodyDraft(draft = {}) {
  return {
    weight: String(draft.weight ?? "").trim(),
    waist: String(draft.waist ?? "").trim(),
    arms: String(draft.arms ?? "").trim(),
    thighs: String(draft.thighs ?? "").trim(),
    date: sanitizeDateInputValue(draft.date, getTodayDateInput()),
  };
}

function sanitizeBodyProfile(profile = {}) {
  const allowedGoals = ["auto", "weight-loss", "toning", "muscle-gain", "wellbeing"];
  const allowedSexes = ["male", "female"];
  const allowedActivities = Object.keys(BODY_ACTIVITY_LEVELS);

  return {
    goal: allowedGoals.includes(profile.goal) ? profile.goal : "auto",
    sex: allowedSexes.includes(profile.sex) ? profile.sex : "male",
    age: String(profile.age ?? "").trim(),
    height: String(profile.height ?? "").trim(),
    activity: allowedActivities.includes(profile.activity) ? profile.activity : "moderate",
  };
}

function sanitizeBodyMetricEntry(entry = {}) {
  if (!entry || typeof entry !== "object") return null;

  const weight = sanitizeDecimalNumber(entry.weight, null, 20, 400);
  const waist = sanitizeDecimalNumber(entry.waist, null, 20, 300);
  const arms = sanitizeDecimalNumber(entry.arms, null, 10, 100);
  const thighs = sanitizeDecimalNumber(entry.thighs, null, 20, 120);

  if (
    weight === null &&
    waist === null &&
    arms === null &&
    thighs === null
  ) {
    return null;
  }

  return {
    weight,
    waist,
    arms,
    thighs,
    date: sanitizeIsoDate(entry.date, new Date().toISOString()),
  };
}

function sanitizeBodyMetricEntries(entries = []) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((entry) => sanitizeBodyMetricEntry(entry))
    .filter(Boolean);
}

function sanitizeWorkoutReviewDraft(draft = {}) {
  const energy = sanitizePositiveInteger(draft.energy, 3, 1);
  const pain = sanitizePositiveInteger(draft.pain, 0, 0);

  return {
    energy: `${Math.min(5, energy)}`,
    pain: `${Math.min(3, pain)}`,
    note: sanitizePlainText(draft.note, ""),
  };
}

function sanitizeSessionReviewEntry(entry = {}) {
  if (!entry || typeof entry !== "object") return null;

  const day = sanitizePlainText(entry.day, "Seance");
  const energy = Math.min(5, sanitizePositiveInteger(entry.energy, 3, 1));
  const pain = Math.min(3, sanitizePositiveInteger(entry.pain, 0, 0));

  return {
    day,
    date: sanitizeIsoDate(entry.date, new Date().toISOString()),
    durationMinutes: sanitizePositiveInteger(entry.durationMinutes, 0, 0),
    setCount: sanitizePositiveInteger(entry.setCount, 0, 0),
    exerciseCount: sanitizePositiveInteger(entry.exerciseCount, 0, 0),
    energy,
    pain,
    note: sanitizePlainText(entry.note, ""),
  };
}

function sanitizeSessionReviewEntries(entries = []) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((entry) => sanitizeSessionReviewEntry(entry))
    .filter(Boolean);
}

function getRestAlertCopy() {
  const upcoming = state.workoutFinished ? null : getActiveExercise();
  return {
    title: "Repos termine",
    text: state.workoutFinished ? "Tu peux terminer ta seance." : upcoming
      ? `Tu peux repartir sur ${upcoming.exercise} - ${upcoming.series}.`
      : "Tu peux reprendre ton entrainement.",
  };
}

function createRestAudioUrl() {
  const sampleRate = 22050;
  const duration = 0.52;
  const frameCount = Math.floor(sampleRate * duration);
  const pcmData = new Int16Array(frameCount);

  for (let i = 0; i < frameCount; i += 1) {
    const time = i / sampleRate;
    let sample = 0;

    if (time < 0.14) {
      sample += Math.sin(2 * Math.PI * 880 * time) * 0.52;
    } else if (time > 0.2 && time < 0.42) {
      sample += Math.sin(2 * Math.PI * 1174 * time) * 0.6;
    }

    const fadeIn = Math.min(1, time / 0.012);
    const fadeOut = Math.min(1, (duration - time) / 0.035);
    const shaped = sample * fadeIn * fadeOut;
    pcmData[i] = Math.max(-1, Math.min(1, shaped)) * 32767;
  }

  const wavBuffer = new ArrayBuffer(44 + pcmData.length * 2);
  const view = new DataView(wavBuffer);
  const writeAscii = (offset, text) => {
    for (let index = 0; index < text.length; index += 1) {
      view.setUint8(offset + index, text.charCodeAt(index));
    }
  };

  writeAscii(0, "RIFF");
  view.setUint32(4, 36 + pcmData.length * 2, true);
  writeAscii(8, "WAVE");
  writeAscii(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(36, "data");
  view.setUint32(40, pcmData.length * 2, true);

  pcmData.forEach((value, index) => {
    view.setInt16(44 + index * 2, value, true);
  });

  return URL.createObjectURL(new Blob([wavBuffer], { type: "audio/wav" }));
}

function ensureRestAudioElement() {
  if (restAudioElement) return restAudioElement;

  if (!restAudioUrl) {
    restAudioUrl = createRestAudioUrl();
  }

  restAudioElement = new Audio(restAudioUrl);
  restAudioElement.preload = "auto";
  restAudioElement.playsInline = true;
  restAudioElement.setAttribute("playsinline", "true");
  restAudioElement.setAttribute("webkit-playsinline", "true");

  return restAudioElement;
}

function clearScheduledRestSound() {
  if (scheduledRestSoundTimeoutId) {
    window.clearTimeout(scheduledRestSoundTimeoutId);
    scheduledRestSoundTimeoutId = null;
  }

  hasScheduledRestSound = false;

  scheduledRestToneNodes.forEach(({ oscillator, gainNode }) => {
    try {
      oscillator.onended = null;
      oscillator.stop();
    } catch (error) {}

    try {
      oscillator.disconnect();
    } catch (error) {}

    try {
      gainNode.disconnect();
    } catch (error) {}
  });

  scheduledRestToneNodes = [];
}

function scheduleRestSound(secondsFromNow) {
  clearScheduledRestSound();

  if (!state.restSoundEnabled || secondsFromNow <= 0) {
    return false;
  }

  primeAudioEngine();
  hasScheduledRestSound = false;

  const prewarmDelay = Math.max(0, Math.round((secondsFromNow - 1) * 1000));
  scheduledRestSoundTimeoutId = window.setTimeout(() => {
    primeAudioEngine();
    scheduledRestSoundTimeoutId = null;
  }, prewarmDelay);

  return true;
}

function primeAudioEngine() {
  if (!state.restSoundEnabled) return;

  const audioElement = ensureRestAudioElement();

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (AudioContextClass) {
    if (!restAudioContext) {
      restAudioContext = new AudioContextClass();
    }

    if (restAudioContext.state === "suspended") {
      restAudioContext.resume().catch(() => {});
    }
  }

  if (audioElement && !restAudioUnlocked) {
    audioElement.volume = 0.001;
    audioElement.currentTime = 0;
    audioElement
      .play()
      .then(() => {
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.volume = 1;
        restAudioUnlocked = true;
      })
      .catch(() => {});
  }
}

function playRestSound() {
  if (!state.restSoundEnabled) return;

  primeAudioEngine();
  const audioElement = ensureRestAudioElement();

  const playSynth = () => {
    if (!restAudioContext || restAudioContext.state !== "running") return false;

    const now = restAudioContext.currentTime;
    const notes = [
      { start: 0, freq: 880, duration: 0.12 },
      { start: 0.17, freq: 1174, duration: 0.18 },
    ];

    notes.forEach((note) => {
      const oscillator = restAudioContext.createOscillator();
      const gainNode = restAudioContext.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(note.freq, now + note.start);
      gainNode.gain.setValueAtTime(0.0001, now + note.start);
      gainNode.gain.exponentialRampToValueAtTime(0.18, now + note.start + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.duration);

      oscillator.connect(gainNode);
      gainNode.connect(restAudioContext.destination);
      oscillator.start(now + note.start);
      oscillator.stop(now + note.start + note.duration + 0.04);
    });

    return true;
  };

  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.volume = 1;
    audioElement.play().catch(() => {
      if (restAudioContext?.state === "suspended") {
        restAudioContext.resume().then(() => {
          playSynth();
        }).catch(() => {});
        return;
      }
      playSynth();
    });
    return;
  }

  if (restAudioContext?.state === "suspended") {
    restAudioContext.resume().then(() => {
      playSynth();
    }).catch(() => {});
    return;
  }

  playSynth();
}

function vibrateRestAlert() {
  if (!state.restVibrationEnabled) return;
  if (!("vibrate" in navigator)) return;
  navigator.vibrate([180, 70, 180]);
}

// Exact rep targets make the progression logic too binary, so we widen them into small working ranges.
function normalizeRepRange(minRepsValue, maxRepsValue, kind = "isolation", series = "") {
  const minReps = sanitizePositiveInteger(minRepsValue, 10, 1);
  const maxReps = Math.max(
    minReps,
    sanitizePositiveInteger(maxRepsValue ?? minReps, minReps, minReps)
  );

  if (maxReps > minReps) {
    return { minReps, maxReps };
  }

  const seriesLabel = sanitizePlainText(series, "").toLowerCase();
  const rangeWidth =
    kind === "isolation" || seriesLabel.includes("activation") ? 3 : 2;

  return {
    minReps,
    maxReps: minReps + rangeWidth,
  };
}

function normalizeProgramEntry(entry, fallback = {}) {
  const kind = ["barbell", "machine", "dumbbell", "isolation"].includes(entry?.kind)
    ? entry.kind
    : fallback.kind || "isolation";
  const series = sanitizePlainText(entry?.series, fallback.series || "Serie 1");
  const { minReps, maxReps } = normalizeRepRange(
    entry?.minReps ?? fallback.minReps ?? 10,
    entry?.maxReps ?? fallback.maxReps ?? entry?.minReps ?? fallback.minReps ?? 10,
    kind,
    series
  );
  const defaultLoad = sanitizeLoadNumber(entry?.defaultLoad, fallback.defaultLoad ?? null);
  const loadLabel = sanitizePlainText(
    entry?.loadLabel,
    fallback.loadLabel || (isNumericLoad(defaultLoad) ? `${defaultLoad} kg` : "Charge libre")
  );

  return {
    exercise: sanitizePlainText(entry?.exercise, fallback.exercise || "Nouvel exercice"),
    kind,
    series,
    targetLabel: formatTargetLabelFromRange(minReps, maxReps),
    minReps,
    maxReps,
    rest: sanitizePositiveInteger(entry?.rest, fallback.rest ?? 60, 0),
    defaultLoad,
    loadLabel,
  };
}

function sanitizeProgram(program) {
  const nextProgram = {};

  getProgramDayKeys(program).forEach((day) => {
    const fallbackEntries = Array.isArray(PROGRAM[day]) ? PROGRAM[day] : Array.isArray(program?.[day]) ? program[day] : [];
    const sourceEntries = ensureActivationSeriesForDay(
      day,
      Array.isArray(program?.[day]) ? program[day] : fallbackEntries
    );
    nextProgram[day] = sourceEntries.map((entry, index) =>
      normalizeProgramEntry(entry, fallbackEntries[index] || fallbackEntries[fallbackEntries.length - 1] || {})
    );
  });

  return nextProgram;
}

function createTemplateEntry(exercise, kind, series, minReps, maxReps, defaultLoad = null, loadLabel = "") {
  const normalizedKind = ["barbell", "machine", "dumbbell", "isolation"].includes(kind)
    ? kind
    : "isolation";
  const normalizedSeries = sanitizePlainText(series, "Serie 1");
  const normalizedExercise = sanitizePlainText(exercise, "Nouvel exercice");
  const normalizedRange = normalizeRepRange(minReps, maxReps, normalizedKind, normalizedSeries);

  return {
    exercise: normalizedExercise,
    kind: normalizedKind,
    series: normalizedSeries,
    minReps: normalizedRange.minReps,
    maxReps: normalizedRange.maxReps,
    defaultLoad,
    loadLabel: loadLabel || (isNumericLoad(defaultLoad) ? `${defaultLoad} kg` : "Charge libre"),
  };
}

function createStraightSets(exercise, kind, count, minReps, maxReps, defaultLoad = null, loadLabel = "", prefix = "Serie") {
  return Array.from({ length: count }, (_, index) =>
    createTemplateEntry(exercise, kind, `${prefix} ${index + 1}`, minReps, maxReps, defaultLoad, loadLabel)
  );
}

function createTopBackoffSets(
  exercise,
  kind,
  topMin,
  topMax,
  topLoad,
  topLabel,
  backoffCount,
  backoffMin,
  backoffMax,
  backoffLoad,
  backoffLabel
) {
  return [
    createTemplateEntry(exercise, kind, "Top Set", topMin, topMax, topLoad, topLabel),
    ...Array.from({ length: backoffCount }, (_, index) =>
      createTemplateEntry(
        exercise,
        kind,
        `Back-off ${index + 1}`,
        backoffMin,
        backoffMax,
        backoffLoad,
        backoffLabel
      )
    ),
  ];
}

function finalizeTemplateProgram(program) {
  return applyRecommendedRestProfile(sanitizeProgram(program));
}

function buildFullBodyA() {
  return [
    ...createStraightSets("Developpe couche", "barbell", 3, 6, 8, 60, "60 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Squat halteres", "dumbbell", 3, 8, 12, 30, "30 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 2, 8, 12, 26, "26 kg"),
    ...createStraightSets("Leg curl", "machine", 2, 10, 12, 35, "35 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12, 25, "25 kg"),
  ];
}

function buildFullBodyB() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Rowing haltere", "dumbbell", 3, 8, 12, 32, "32 kg"),
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12, 60, "60 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 12, null, "leger"),
    ...createStraightSets("Mollets", "isolation", 3, 15, 20, null, "Pdc ou charge"),
  ];
}

function buildFullBodyC() {
  return [
    ...createStraightSets("Developpe couche", "barbell", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12, 50, "50 kg"),
    ...createStraightSets("Hip thrust", "barbell", 2, 10, 12, 60, "60 kg"),
    ...createStraightSets("Leg curl", "machine", 2, 12, 12, 35, "35 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 6, "6-7 kg"),
    ...createStraightSets("Curl bras", "isolation", 2, 12, 12, null, "modere"),
    ...createStraightSets("Triceps bras", "isolation", 2, 12, 12, null, "modere"),
  ];
}

function buildFullBodyD() {
  return [
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 12, 26, "26 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 12, 56, "56 kg"),
    ...createStraightSets("Squat halteres", "dumbbell", 3, 8, 12, 30, "30 kg"),
    ...createStraightSets("Leg curl", "machine", 2, 12, 12, 35, "35 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 15, 6, "6 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12, 25, "25 kg"),
  ];
}

function buildUpperA() {
  return [
    ...createStraightSets("Developpe couche", "barbell", 3, 6, 8, 60, "60 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 2, 8, 12, 26, "26 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12, 45, "45 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 6, "6-7 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12, 25, "25 kg"),
  ];
}

function buildUpperB() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12, 50, "50 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Rowing haltere", "dumbbell", 3, 8, 12, 32, "32 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 15, 6, "6 kg"),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 12, null, "leger"),
    ...createStraightSets("Triceps bras", "isolation", 2, 12, 12, null, "modere"),
  ];
}

function buildLowerA() {
  return [
    ...createStraightSets("Squat halteres", "dumbbell", 4, 8, 12, 30, "30 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 12, 12, 35, "35 kg"),
    ...createStraightSets("Hip thrust", "barbell", 2, 10, 12, 60, "60 kg"),
    ...createStraightSets("Mollets", "isolation", 3, 15, 20, null, "Pdc ou charge"),
  ];
}

function buildLowerB() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12, 60, "60 kg"),
    ...createStraightSets("Squat halteres", "dumbbell", 3, 8, 12, 30, "30 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 12, 12, 35, "35 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Mollets", "isolation", 4, 15, 20, null, "Pdc ou charge"),
  ];
}

function buildPushA() {
  return [
    ...createTopBackoffSets("Developpe couche", "barbell", 6, 8, 65, "65 kg", 3, 8, 10, 58, "58 kg"),
    ...createTopBackoffSets("Incline halteres", "dumbbell", 6, 10, 30, "30 kg", 2, 8, 12, 26, "26 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 7, "7 kg"),
    ...createStraightSets("Developpe epaules", "dumbbell", 2, 8, 10, 20, "20 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 3, 10, 12, 25, "25 kg"),
  ];
}

function buildPushB() {
  return [
    ...createTopBackoffSets("Incline halteres", "dumbbell", 6, 10, 30, "30 kg", 3, 8, 12, 26, "26 kg"),
    ...createStraightSets("Developpe couche", "barbell", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 7, "7 kg"),
    ...createStraightSets("Triceps bras", "isolation", 3, 12, 12, null, "modere"),
  ];
}

function buildPullA() {
  return [
    ...createTopBackoffSets("Tirage vertical", "machine", 6, 10, 62, "62 kg", 3, 10, 12, 56, "56 kg"),
    ...createTopBackoffSets("Rowing haltere", "dumbbell", 8, 8, 36, "36 kg", 3, 10, 12, 32, "32 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 12, 12, 45, "45 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 3, 10, 12, 12, "12 kg"),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 12, null, "leger"),
  ];
}

function buildPullB() {
  return [
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12, 50, "50 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 12, 56, "56 kg"),
    ...createStraightSets("Rowing haltere", "dumbbell", 3, 8, 12, 32, "32 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 15, 6, "6 kg"),
    ...createStraightSets("Curl bras", "isolation", 3, 12, 12, null, "modere"),
  ];
}

function buildLegsA() {
  return [
    ...createStraightSets("Squat halteres", "dumbbell", 4, 8, 12, 30, "30 kg"),
    ...createStraightSets("Fentes", "dumbbell", 3, 10, 10, 20, "20 kg"),
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12, 60, "60 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 12, 12, 35, "35 kg"),
    ...createStraightSets("Mollets", "isolation", 3, 15, 20, null, "Pdc ou charge"),
  ];
}

function buildLegsB() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12, 60, "60 kg"),
    ...createStraightSets("Squat halteres", "dumbbell", 3, 8, 12, 30, "30 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 12, 12, 35, "35 kg"),
    ...createStraightSets("Mollets", "isolation", 4, 15, 20, null, "Pdc ou charge"),
  ];
}

function buildArmsDay() {
  return [
    ...createStraightSets("Curl incline", "dumbbell", 3, 10, 12, 12, "12 kg"),
    ...createStraightSets("Curl poulie", "isolation", 3, 12, 12, null, "leger"),
    ...createStraightSets("Curl bras", "isolation", 2, 12, 12, null, "modere"),
    ...createStraightSets("Triceps poulie", "isolation", 3, 10, 12, 25, "25 kg"),
    ...createStraightSets("Triceps bras", "isolation", 3, 12, 12, null, "modere"),
  ];
}

function buildChestDay() {
  return [
    ...createTopBackoffSets("Developpe couche", "barbell", 6, 8, 65, "65 kg", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 12, 26, "26 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 3, 12, 15, 15, "15 kg"),
    ...createStraightSets("Developpe epaules", "dumbbell", 2, 8, 10, 20, "20 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12, 25, "25 kg"),
  ];
}

function buildBackDay() {
  return [
    ...createTopBackoffSets("Tirage vertical", "machine", 6, 10, 62, "62 kg", 3, 10, 12, 56, "56 kg"),
    ...createStraightSets("Rowing haltere", "dumbbell", 3, 8, 12, 32, "32 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 12, 12, 45, "45 kg"),
    ...createStraightSets("Pullover poulie", "isolation", 2, 15, 15, 20, "20 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12, 12, "12 kg"),
  ];
}

function buildShouldersDay() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 4, 15, 20, 7, "7 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 15, 6, "6 kg"),
    ...createStraightSets("Triceps bras", "isolation", 2, 12, 12, null, "modere"),
  ];
}

function buildChestBackA() {
  return [
    ...createStraightSets("Developpe couche", "barbell", 3, 6, 8, 60, "60 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 2, 8, 12, 26, "26 kg"),
    ...createStraightSets("Rowing poulie", "machine", 2, 10, 12, 45, "45 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
  ];
}

function buildChestBackB() {
  return [
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 12, 26, "26 kg"),
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12, 50, "50 kg"),
    ...createStraightSets("Developpe couche", "barbell", 2, 8, 10, 58, "58 kg"),
    ...createStraightSets("Rowing haltere", "dumbbell", 2, 8, 12, 32, "32 kg"),
    ...createStraightSets("Pullover poulie", "isolation", 2, 15, 15, 20, "20 kg"),
  ];
}

function buildShouldersArmsA() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 4, 15, 20, 7, "7 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 15, 6, "6 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 3, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 3, 10, 12, 25, "25 kg"),
  ];
}

function buildShouldersArmsB() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 2, 8, 10, 20, "20 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 4, 15, 20, 7, "7 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 15, 6, "6 kg"),
    ...createStraightSets("Curl poulie", "isolation", 3, 12, 12, null, "leger"),
    ...createStraightSets("Triceps bras", "isolation", 3, 12, 12, null, "modere"),
  ];
}

function buildFullBodyPrimeA() {
  return [
    ...createStraightSets("Developpe couche", "barbell", 3, 6, 8, 60, "60 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Souleve de terre roumain", "barbell", 3, 8, 10, 70, "70 kg"),
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 12, 90, "90 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 2, 15, 20, 7, "7 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12, 25, "25 kg"),
  ];
}

function buildFullBodyPrimeB() {
  return [
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 10, 28, "28 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 8, 12, 45, "45 kg"),
    ...createStraightSets("Squat halteres", "dumbbell", 3, 8, 12, 30, "30 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 10, 12, 35, "35 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 15, null, "leger"),
    ...createStraightSets("Mollets", "isolation", 3, 12, 20, null, "Pdc ou charge"),
  ];
}

function buildFullBodyPrimeC() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Tirage horizontal", "machine", 3, 8, 12, 50, "50 kg"),
    ...createStraightSets("Hip thrust", "barbell", 3, 8, 12, 60, "60 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 20, 6, "6 kg"),
    ...createStraightSets("Curl bras", "isolation", 2, 10, 12, null, "modere"),
    ...createStraightSets("Triceps bras", "isolation", 2, 10, 12, null, "modere"),
  ];
}

function buildFullBodyPrimeD() {
  return [
    ...createStraightSets("Presse poitrine", "machine", 3, 8, 10, 55, "55 kg"),
    ...createStraightSets("Tirage vertical prise neutre", "machine", 3, 8, 10, 56, "56 kg"),
    ...createStraightSets("Souleve de terre roumain", "barbell", 3, 8, 10, 70, "70 kg"),
    ...createStraightSets("Leg extension", "machine", 2, 12, 15, 40, "40 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 2, 15, 20, 7, "7 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12, 25, "25 kg"),
  ];
}

function buildUpperPrimeA() {
  return [
    ...createStraightSets("Developpe couche", "barbell", 3, 6, 8, 60, "60 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 10, 28, "28 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 8, 12, 45, "45 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 7, "7 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 3, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 3, 10, 12, 25, "25 kg"),
  ];
}

function buildUpperPrimeB() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Tirage horizontal", "machine", 3, 8, 12, 50, "50 kg"),
    ...createStraightSets("Presse poitrine", "machine", 3, 8, 10, 55, "55 kg"),
    ...createStraightSets("Rowing chest support", "machine", 3, 10, 12, 45, "45 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 20, 6, "6 kg"),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 15, null, "leger"),
    ...createStraightSets("Triceps bras", "isolation", 2, 12, 15, null, "modere"),
  ];
}

function buildUpperPrimeC() {
  return [
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 10, 28, "28 kg"),
    ...createStraightSets("Tirage vertical prise neutre", "machine", 3, 8, 10, 56, "56 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12, 45, "45 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 7, "7 kg"),
    ...createStraightSets("Curl marteau", "dumbbell", 2, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 12, 15, 25, "25 kg"),
  ];
}

function buildLowerPrimeA() {
  return [
    ...createStraightSets("Squat halteres", "dumbbell", 4, 8, 12, 30, "30 kg"),
    ...createStraightSets("Souleve de terre roumain", "barbell", 3, 8, 10, 70, "70 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 10, 12, 35, "35 kg"),
    ...createStraightSets("Mollets", "isolation", 4, 12, 20, null, "Pdc ou charge"),
  ];
}

function buildLowerPrimeB() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 3, 8, 12, 60, "60 kg"),
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 12, 90, "90 kg"),
    ...createStraightSets("Leg extension", "machine", 2, 12, 15, 40, "40 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 10, 12, 35, "35 kg"),
    ...createStraightSets("Mollets", "isolation", 4, 12, 20, null, "Pdc ou charge"),
  ];
}

function buildLowerPrimeC() {
  return [
    ...createStraightSets("Squat halteres", "dumbbell", 3, 8, 12, 30, "30 kg"),
    ...createStraightSets("Souleve de terre roumain", "barbell", 3, 8, 10, 70, "70 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Leg curl", "machine", 2, 12, 15, 35, "35 kg"),
    ...createStraightSets("Mollets", "isolation", 4, 15, 20, null, "Pdc ou charge"),
  ];
}

function buildPushPrimeA() {
  return [
    ...createTopBackoffSets("Developpe couche", "barbell", 6, 8, 65, "65 kg", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 10, 28, "28 kg"),
    ...createStraightSets("Presse poitrine", "machine", 2, 10, 12, 55, "55 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 7, "7 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 3, 10, 12, 25, "25 kg"),
  ];
}

function buildPushPrimeB() {
  return [
    ...createTopBackoffSets("Incline halteres", "dumbbell", 6, 10, 30, "30 kg", 2, 8, 12, 26, "26 kg"),
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20, 7, "7 kg"),
    ...createStraightSets("Triceps bras", "isolation", 3, 12, 15, null, "modere"),
  ];
}

function buildPullPrimeA() {
  return [
    ...createTopBackoffSets("Tirage vertical", "machine", 6, 10, 62, "62 kg", 3, 10, 12, 56, "56 kg"),
    ...createStraightSets("Rowing chest support", "machine", 3, 8, 12, 45, "45 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12, 45, "45 kg"),
    ...createStraightSets("Pullover poulie", "isolation", 2, 12, 15, 20, "20 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 3, 10, 12, 12, "12 kg"),
  ];
}

function buildPullPrimeB() {
  return [
    ...createStraightSets("Tirage horizontal", "machine", 3, 8, 12, 50, "50 kg"),
    ...createStraightSets("Tirage vertical prise neutre", "machine", 3, 8, 10, 56, "56 kg"),
    ...createStraightSets("Rowing haltere", "dumbbell", 3, 8, 12, 32, "32 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 20, 6, "6 kg"),
    ...createStraightSets("Curl poulie", "isolation", 3, 12, 15, null, "leger"),
  ];
}

function buildLegsPrimeA() {
  return [
    ...createStraightSets("Squat halteres", "dumbbell", 4, 8, 12, 30, "30 kg"),
    ...createStraightSets("Souleve de terre roumain", "barbell", 3, 8, 10, 70, "70 kg"),
    ...createStraightSets("Fentes", "dumbbell", 2, 10, 10, 20, "20 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 10, 12, 35, "35 kg"),
    ...createStraightSets("Mollets", "isolation", 4, 12, 20, null, "Pdc ou charge"),
  ];
}

function buildLegsPrimeB() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 3, 8, 12, 60, "60 kg"),
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 12, 90, "90 kg"),
    ...createStraightSets("Leg extension", "machine", 2, 12, 15, 40, "40 kg"),
    ...createStraightSets("Leg curl", "machine", 3, 10, 12, 35, "35 kg"),
    ...createStraightSets("Mollets", "isolation", 4, 12, 20, null, "Pdc ou charge"),
  ];
}

function buildArmsPrimeDay() {
  return [
    ...createStraightSets("Curl incline", "dumbbell", 3, 10, 12, 12, "12 kg"),
    ...createStraightSets("Curl poulie", "isolation", 3, 12, 15, null, "leger"),
    ...createStraightSets("Curl marteau", "dumbbell", 2, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 3, 10, 12, 25, "25 kg"),
    ...createStraightSets("Extension triceps haltere", "dumbbell", 2, 10, 12, 16, "16 kg"),
    ...createStraightSets("Triceps bras", "isolation", 2, 12, 15, null, "modere"),
  ];
}

function buildChestPrimeDay() {
  return [
    ...createTopBackoffSets("Developpe couche", "barbell", 6, 8, 65, "65 kg", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 10, 28, "28 kg"),
    ...createStraightSets("Presse poitrine", "machine", 3, 8, 10, 55, "55 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12, 25, "25 kg"),
  ];
}

function buildBackPrimeDay() {
  return [
    ...createTopBackoffSets("Tirage vertical", "machine", 6, 10, 62, "62 kg", 3, 10, 12, 56, "56 kg"),
    ...createStraightSets("Rowing chest support", "machine", 3, 8, 12, 45, "45 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12, 45, "45 kg"),
    ...createStraightSets("Pullover poulie", "isolation", 2, 12, 15, 20, "20 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12, 12, "12 kg"),
  ];
}

function buildShouldersPrimeDay() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 4, 15, 20, 7, "7 kg"),
    ...createStraightSets("Oiseau", "isolation", 4, 15, 20, 6, "6 kg"),
    ...createStraightSets("Face pull", "isolation", 3, 12, 15, null, "modere"),
  ];
}

function buildChestBackPrimeA() {
  return [
    ...createStraightSets("Developpe couche", "barbell", 3, 6, 8, 60, "60 kg"),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 10, 58, "58 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 3, 8, 10, 28, "28 kg"),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12, 45, "45 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Pullover poulie", "isolation", 2, 12, 15, 20, "20 kg"),
  ];
}

function buildChestBackPrimeB() {
  return [
    ...createStraightSets("Presse poitrine", "machine", 3, 8, 10, 55, "55 kg"),
    ...createStraightSets("Tirage horizontal", "machine", 3, 8, 12, 50, "50 kg"),
    ...createStraightSets("Incline halteres", "dumbbell", 2, 8, 10, 28, "28 kg"),
    ...createStraightSets("Rowing chest support", "machine", 3, 10, 12, 45, "45 kg"),
    ...createStraightSets("Ecarte poulie", "isolation", 2, 12, 15, 15, "15 kg"),
    ...createStraightSets("Tirage vertical prise neutre", "machine", 2, 8, 10, 56, "56 kg"),
  ];
}

function buildShouldersArmsPrimeA() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10, 20, "20 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 4, 15, 20, 7, "7 kg"),
    ...createStraightSets("Oiseau", "isolation", 3, 15, 20, 6, "6 kg"),
    ...createStraightSets("Curl incline", "dumbbell", 3, 10, 12, 12, "12 kg"),
    ...createStraightSets("Triceps poulie", "isolation", 3, 10, 12, 25, "25 kg"),
  ];
}

function buildShouldersArmsPrimeB() {
  return [
    ...createStraightSets("Developpe epaules", "dumbbell", 2, 8, 10, 20, "20 kg"),
    ...createStraightSets("Elevations laterales", "isolation", 4, 15, 20, 7, "7 kg"),
    ...createStraightSets("Face pull", "isolation", 3, 12, 15, null, "modere"),
    ...createStraightSets("Curl poulie", "isolation", 3, 12, 15, null, "leger"),
    ...createStraightSets("Triceps bras", "isolation", 3, 12, 15, null, "modere"),
  ];
}

function buildObjectiveFullA() {
  return [
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 14),
    ...createStraightSets("Hip thrust", "barbell", 3, 8, 12),
    ...createStraightSets("Tirage vertical", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 2, 12, 15),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 15),
  ];
}

function buildObjectiveFullB() {
  return [
    ...createStraightSets("Romanian deadlift", "barbell", 3, 8, 10),
    ...createStraightSets("Fentes arriere", "dumbbell", 3, 10, 12),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12),
    ...createStraightSets("Developpe incline machine", "machine", 3, 10, 12),
    ...createStraightSets("Elevations laterales", "isolation", 2, 15, 20),
    ...createStraightSets("Triceps poulie", "isolation", 2, 12, 15),
  ];
}

function buildObjectiveFullC() {
  return [
    ...createStraightSets("Goblet squat a box", "dumbbell", 3, 10, 12),
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12),
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 10, 12),
    ...createStraightSets("Abduction machine", "isolation", 2, 15, 20),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
  ];
}

function buildObjectiveLowerA() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 4, 8, 12),
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 14),
    ...createStraightSets("Bulgarian split squat", "dumbbell", 3, 8, 10),
    ...createStraightSets("Leg curl", "machine", 3, 10, 15),
    ...createStraightSets("Mollets", "isolation", 3, 15, 20),
  ];
}

function buildObjectiveUpperA() {
  return [
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 12),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 8, 12),
    ...createStraightSets("Elevations laterales", "isolation", 3, 15, 20),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12),
  ];
}

function buildObjectiveLowerB() {
  return [
    ...createStraightSets("Romanian deadlift", "barbell", 3, 8, 10),
    ...createStraightSets("Fentes arriere", "dumbbell", 3, 10, 12),
    ...createStraightSets("Leg extension", "machine", 2, 12, 15),
    ...createStraightSets("Abduction machine", "isolation", 3, 15, 20),
    ...createStraightSets("Leg curl", "machine", 2, 12, 15),
  ];
}

function buildObjectiveUpperB() {
  return [
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12),
    ...createStraightSets("Developpe incline machine", "machine", 3, 8, 12),
    ...createStraightSets("Rowing haltere", "dumbbell", 3, 8, 12),
    ...createStraightSets("Oiseau", "isolation", 2, 15, 20),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 15),
    ...createStraightSets("Extension triceps corde", "isolation", 2, 10, 12),
  ];
}

function buildObjectiveGlutesFinish() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 4, 8, 12),
    ...createStraightSets("Abduction machine", "isolation", 3, 15, 20),
    ...createStraightSets("Leg curl", "machine", 3, 12, 15),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
  ];
}

function buildKneeFriendlyFullA() {
  return [
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 14),
    ...createStraightSets("Hip thrust", "barbell", 3, 8, 12),
    ...createStraightSets("Tirage vertical", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 3, 12, 15),
  ];
}

function buildKneeFriendlyFullB() {
  return [
    ...createStraightSets("Romanian deadlift", "barbell", 3, 8, 10),
    ...createStraightSets("Split squat assiste", "dumbbell", 3, 10, 12),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12),
    ...createStraightSets("Developpe incline machine", "machine", 3, 10, 12),
    ...createStraightSets("Abduction machine", "isolation", 3, 15, 20),
  ];
}

function buildKneeFriendlyFullC() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12),
    ...createStraightSets("Step-up bas", "dumbbell", 3, 10, 12),
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 3, 12, 15),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
  ];
}

function buildKneeFriendlyLowerA() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 4, 8, 12),
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 14),
    ...createStraightSets("Split squat assiste", "dumbbell", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 3, 10, 15),
    ...createStraightSets("Abduction machine", "isolation", 3, 15, 20),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
  ];
}

function buildKneeFriendlyLowerB() {
  return [
    ...createStraightSets("Romanian deadlift", "barbell", 3, 8, 10),
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12),
    ...createStraightSets("Step-up bas", "dumbbell", 3, 10, 12),
    ...createStraightSets("Goblet squat a box", "dumbbell", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 3, 12, 15),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
  ];
}

function buildMuscleFullA() {
  return [
    ...createStraightSets("Presse a cuisses", "machine", 4, 8, 12),
    ...createStraightSets("Hip thrust", "barbell", 3, 8, 10),
    ...createStraightSets("Tirage vertical", "machine", 3, 8, 12),
    ...createStraightSets("Developpe incline machine", "machine", 3, 8, 12),
    ...createStraightSets("Curl incline", "dumbbell", 2, 10, 12),
    ...createStraightSets("Triceps poulie", "isolation", 2, 10, 12),
  ];
}

function buildMuscleFullB() {
  return [
    ...createStraightSets("Romanian deadlift", "barbell", 3, 8, 10),
    ...createStraightSets("Fentes arriere", "dumbbell", 3, 8, 10),
    ...createStraightSets("Rowing poulie", "machine", 3, 8, 12),
    ...createStraightSets("Chest press", "machine", 3, 8, 12),
    ...createStraightSets("Elevations laterales", "isolation", 3, 12, 20),
    ...createStraightSets("Extension triceps corde", "isolation", 2, 10, 12),
  ];
}

function buildMuscleFullC() {
  return [
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 3, 10, 15),
    ...createStraightSets("Tirage horizontal", "machine", 3, 8, 12),
    ...createStraightSets("Developpe epaules", "dumbbell", 3, 8, 10),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 15),
    ...createStraightSets("Triceps poulie", "isolation", 2, 12, 15),
  ];
}

function buildWellbeingFullA() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12),
    ...createStraightSets("Tirage vertical", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 2, 12, 15),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
  ];
}

function buildWellbeingFullB() {
  return [
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 12),
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12),
    ...createStraightSets("Developpe incline machine", "machine", 3, 10, 12),
    ...createStraightSets("Elevations laterales", "isolation", 2, 15, 20),
    ...createStraightSets("Abduction machine", "isolation", 2, 15, 20),
  ];
}

function buildWellbeingFullC() {
  return [
    ...createStraightSets("Romanian deadlift", "barbell", 3, 8, 10),
    ...createStraightSets("Tirage horizontal", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 10, 12),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 15),
    ...createStraightSets("Triceps poulie", "isolation", 2, 12, 15),
  ];
}

function buildWellbeingUpperA() {
  return [
    ...createStraightSets("Tirage vertical", "machine", 3, 10, 12),
    ...createStraightSets("Chest press", "machine", 3, 10, 12),
    ...createStraightSets("Elevations laterales", "isolation", 2, 15, 20),
    ...createStraightSets("Curl poulie", "isolation", 2, 12, 15),
  ];
}

function buildWellbeingUpperB() {
  return [
    ...createStraightSets("Rowing poulie", "machine", 3, 10, 12),
    ...createStraightSets("Developpe incline machine", "machine", 3, 10, 12),
    ...createStraightSets("Oiseau", "isolation", 2, 15, 20),
    ...createStraightSets("Triceps poulie", "isolation", 2, 12, 15),
  ];
}

function buildWellbeingLowerA() {
  return [
    ...createStraightSets("Hip thrust", "barbell", 3, 10, 12),
    ...createStraightSets("Presse a cuisses", "machine", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 3, 12, 15),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
    ...createStraightSets("Abduction machine", "isolation", 2, 15, 20),
  ];
}

function buildWellbeingLowerB() {
  return [
    ...createStraightSets("Romanian deadlift", "barbell", 3, 8, 10),
    ...createStraightSets("Goblet squat a box", "dumbbell", 3, 10, 12),
    ...createStraightSets("Leg curl", "machine", 3, 12, 15),
    ...createStraightSets("Mollets", "isolation", 2, 15, 20),
    ...createStraightSets("Abduction machine", "isolation", 2, 15, 20),
  ];
}

function getProgramPlannerGoalMeta(goal = state.programPlannerGoal) {
  return PROGRAM_PLANNER_GOALS[goal] || PROGRAM_PLANNER_GOALS.classic;
}

function getProgramPlannerConstraintMeta(constraint = state.programPlannerConstraint) {
  return PROGRAM_PLANNER_CONSTRAINTS[constraint] || PROGRAM_PLANNER_CONSTRAINTS.standard;
}

function isClassicProgramPlannerGoal(goal = state.programPlannerGoal) {
  return goal === "classic";
}

function getProgramPlannerAvailableDays(goal = state.programPlannerGoal) {
  return isClassicProgramPlannerGoal(goal) ? [3, 4, 5, 6] : [3, 4, 5];
}

function getRecommendedProgramPlannerDays(goal = state.programPlannerGoal) {
  if (goal === "wellbeing") return 3;
  return 4;
}

function getProgramPlannerConstraintVariant(constraint = "standard") {
  const variants = {
    standard: {
      suffix: "standard",
      note: "Ajoute 10 a 25 min de marche tapis sur 2 a 4 seances si l'objectif le demande.",
    },
    "knee-friendly": {
      suffix: "knee",
      note: "Version genou sensible : exercices plus stables, impact reduit et marche tapis privilegiee.",
    },
    "shoulder-friendly": {
      suffix: "shoulder",
      note: "Version epaule sensible : accent sur les tirages stables, les prises neutres et les presses mieux guidees.",
    },
    "back-friendly": {
      suffix: "back",
      note: "Version bas du dos sensible : moins de charge sur le tronc, plus d'appuis stables et de travail guide.",
    },
  };

  return variants[constraint] || variants.standard;
}

function mergeProgramPlannerNotes(baseNote = "", constraint = "standard") {
  const { note } = getProgramPlannerConstraintVariant(constraint);
  if (constraint === "standard") {
    return sanitizePlainText(baseNote, note);
  }

  return [sanitizePlainText(baseNote, ""), note].filter(Boolean).join(" ");
}

function buildPlannerTemplate(id, title, split, why, days, extra = {}) {
  return {
    id,
    title,
    split,
    why,
    days,
    ...extra,
  };
}

function getClassicProgramPlannerOptions(days = 4) {
  return {
    3: [
      {
        id: "full-body-3",
        title: "Full Body",
        split: "Recommande",
        why: "Le meilleur ratio frequence, recuperation et simplicite sur 3 jours.",
        days: ["Full A", "Full B", "Full C"],
      },
      {
        id: "upper-lower-full-3",
        title: "Upper / Lower / Full",
        split: "Alternative",
        why: "Tres bon si tu veux un peu plus de focus haut / bas tout en gardant une seance complete.",
        days: ["Upper", "Lower", "Full"],
      },
      {
        id: "ppl-3",
        title: "Push Pull Legs",
        split: "Alternative",
        why: "Moins optimal que le full body sur 3 jours, mais simple si tu aimes ce style.",
        days: ["Push", "Pull", "Legs"],
      },
    ],
    4: [
      {
        id: "upper-lower-4",
        title: "Upper / Lower",
        split: "Recommande",
        why: "Le split le plus solide et le plus polyvalent sur 4 jours.",
        days: ["Upper A", "Lower A", "Upper B", "Lower B"],
      },
      {
        id: "full-body-4",
        title: "Full Body 4x",
        split: "Alternative",
        why: "Super si tu veux toucher tout le corps souvent avec des seances plus courtes.",
        days: ["Full A", "Full B", "Full C", "Full D"],
      },
      {
        id: "ppl-upper-4",
        title: "PPL + Upper",
        split: "Alternative",
        why: "Bon compromis si tu aimes deja Push Pull Legs mais veux un 4e bloc complet.",
        days: ["Push", "Pull", "Legs", "Upper"],
      },
    ],
    5: [
      {
        id: "ppl-upper-lower-5",
        title: "PPL + Upper / Lower",
        split: "Recommande",
        why: "Excellent volume et bonne frequence pour l'hypertrophie sur 5 jours.",
        days: ["Push", "Pull", "Legs", "Upper", "Lower"],
      },
      {
        id: "ppl-upper-arms-5",
        title: "PPL + Upper + Arms",
        split: "Alternative",
        why: "Tres bien si tu veux un rendu plus bodybuilding avec une vraie seance bras en fin de semaine.",
        days: ["Push", "Pull", "Legs", "Upper", "Arms"],
      },
      {
        id: "bro-split-5",
        title: "Bro Split",
        split: "Alternative",
        why: "Le classique bodybuilding, plus fun si tu aimes un gros focus par groupe, mais moins fort sur la frequence.",
        days: ["Chest", "Back", "Legs", "Shoulders", "Arms"],
      },
    ],
    6: [
      {
        id: "ppl-x2-6",
        title: "Push Pull Legs x2",
        split: "Recommande",
        why: "Le meilleur choix si tu recuperes bien et veux beaucoup de volume sur 6 jours.",
        days: ["Push A", "Pull A", "Legs A", "Push B", "Pull B", "Legs B"],
      },
      {
        id: "arnold-6",
        title: "Arnold Split",
        split: "Alternative",
        why: "Tres bon si tu aimes le style bodybuilding, avec plus de focus local qu'un PPL x2.",
        days: ["Chest Back A", "Shoulders Arms A", "Legs A", "Chest Back B", "Shoulders Arms B", "Legs B"],
      },
      {
        id: "upper-lower-x3-6",
        title: "Upper / Lower x3",
        split: "Alternative",
        why: "Tres propre pour monter le volume sans perdre la logique haut / bas.",
        days: ["Upper A", "Lower A", "Upper B", "Lower B", "Upper C", "Lower C"],
      },
    ],
  }[days] || [];
}

function getObjectiveProgramPlannerOptions(days = 4, goal = "weight-loss", constraint = "standard") {
  const classicOptions = getClassicProgramPlannerOptions(days);
  const pickClassic = (index) => classicOptions[index] || classicOptions[0];
  const { suffix, note: constraintNote } = getProgramPlannerConstraintVariant(constraint);

  const options = {
    "weight-loss": {
      3: [
        buildPlannerTemplate(
          `weight-loss-3-${suffix}`,
          "Full Body + tapis",
          "Recommande",
          "Le plus simple pour depenser plus sans perdre une vraie base muscu.",
          ["Full A", "Full B", "Full C"],
          { goal, constraint, note: constraintNote }
        ),
        buildPlannerTemplate(
          `toning-3-${suffix}`,
          "Lower / Upper / Lower",
          "Alternative",
          "Plus structure si tu veux deja un peu plus de focus bas du corps.",
          ["Lower 1", "Upper", "Lower 2"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
      4: [
        buildPlannerTemplate(
          `weight-loss-4-${suffix}`,
          "Lower / Upper + tapis",
          "Recommande",
          "Tres bon compromis entre depense, recuperation et regularite.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2"],
          { goal, constraint, note: constraintNote }
        ),
        buildPlannerTemplate(
          `toning-4-${suffix}`,
          "Lower / Upper / Lower / Upper",
          "Alternative",
          "Plus tonique, avec un peu plus de structure haut / bas.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
      5: [
        buildPlannerTemplate(
          `weight-loss-5-${suffix}`,
          "4 lifts + plus de depense",
          "Recommande",
          "Plus de frequence sans tomber dans un split trop bodybuild.",
          ["Lower 1", "Upper 1", "Full A", "Lower 2", "Upper 2"],
          { goal, constraint, note: constraintNote }
        ),
        buildPlannerTemplate(
          `toning-5-${suffix}`,
          "Lower / Upper + Glutes",
          "Alternative",
          "Tres bien si tu veux un rendu plus tonique avec un bas du corps present.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2", "Glutes"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
    },
    toning: {
      3: [
        buildPlannerTemplate(
          `toning-3-${suffix}`,
          "Lower / Upper / Lower",
          "Recommande",
          "Le plus propre pour raffermir la silhouette sans faire des seances trop longues.",
          ["Lower 1", "Upper", "Lower 2"],
          { goal, constraint, note: constraintNote }
        ),
        buildPlannerTemplate(
          `weight-loss-3-${suffix}`,
          "Full Body + tapis",
          "Alternative",
          "Plus simple si tu veux quelque chose de direct et facile a tenir.",
          ["Full A", "Full B", "Full C"],
          { goal: "weight-loss", constraint, note: constraintNote }
        ),
        pickClassic(1),
      ],
      4: [
        buildPlannerTemplate(
          `toning-4-${suffix}`,
          "Lower / Upper / Lower / Upper",
          "Recommande",
          "La structure la plus polyvalente pour tonifier et equilibrer le physique.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2"],
          { goal, constraint, note: constraintNote }
        ),
        buildPlannerTemplate(
          `weight-loss-4-${suffix}`,
          "Lower / Upper + tapis",
          "Alternative",
          "Un peu plus orientee depense si tu veux garder du cardio en soutien.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2"],
          { goal: "weight-loss", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
      5: [
        buildPlannerTemplate(
          `toning-5-${suffix}`,
          "Lower / Upper + Glutes",
          "Recommande",
          "Super si tu veux plus de frequence bas du corps sans casser l'equilibre.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2", "Glutes"],
          { goal, constraint, note: constraintNote }
        ),
        buildPlannerTemplate(
          `weight-loss-5-${suffix}`,
          "4 lifts + plus de depense",
          "Alternative",
          "Plus direct si tu veux davantage bouger sur la semaine.",
          ["Lower 1", "Upper 1", "Full A", "Lower 2", "Upper 2"],
          { goal: "weight-loss", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
    },
    "muscle-gain": {
      3: [
        buildPlannerTemplate(
          `muscle-gain-3-${suffix}`,
          "Full Body hypertrophie",
          "Recommande",
          "Le meilleur format si tu veux progresser sur 3 jours sans perdre de frequence.",
          ["Full A", "Full B", "Full C"],
          {
            goal,
            constraint,
            note: mergeProgramPlannerNotes("Cardio leger seulement si tu recuperes bien.", constraint),
          }
        ),
        buildPlannerTemplate(
          `toning-3-${suffix}`,
          "Lower / Upper / Lower",
          "Alternative",
          "Une version plus douce si tu veux garder une dominante silhouette.",
          ["Lower 1", "Upper", "Lower 2"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
      4: [
        buildPlannerTemplate(
          `muscle-gain-4-${suffix}`,
          "Upper / Lower hypertrophie",
          "Recommande",
          "Le format le plus solide pour monter en volume sur 4 jours.",
          ["Upper A", "Lower A", "Upper B", "Lower B"],
          {
            goal,
            constraint,
            note: mergeProgramPlannerNotes("Cardio leger en soutien seulement.", constraint),
          }
        ),
        buildPlannerTemplate(
          `toning-4-${suffix}`,
          "Lower / Upper / Lower / Upper",
          "Alternative",
          "Un peu plus light si tu veux rester entre volume et forme generale.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(2),
      ],
      5: [
        buildPlannerTemplate(
          `muscle-gain-5-${suffix}`,
          "PPL + Upper + Arms",
          "Recommande",
          "Tres bon volume hebdo si tu recuperes bien et veux progresser franchement.",
          ["Push", "Pull", "Legs", "Upper", "Arms"],
          {
            goal,
            constraint,
            note: mergeProgramPlannerNotes(
              "Garde le cardio court et facile pour ne pas casser la recup.",
              constraint
            ),
          }
        ),
        buildPlannerTemplate(
          `toning-5-${suffix}`,
          "Lower / Upper + Glutes",
          "Alternative",
          "Alternative plus douce si tu veux garder un peu moins de fatigue globale.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2", "Glutes"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(2),
      ],
    },
    wellbeing: {
      3: [
        buildPlannerTemplate(
          `wellbeing-3-${suffix}`,
          "Full Body doux",
          "Recommande",
          "Le plus simple pour bouger mieux, sans pression et avec une bonne recuperation.",
          ["Full A", "Full B", "Full C"],
          {
            goal,
            constraint,
            note: mergeProgramPlannerNotes("Ajoute 15 a 30 min de marche tapis a ton rythme.", constraint),
          }
        ),
        buildPlannerTemplate(
          `weight-loss-3-${suffix}`,
          "Full Body + tapis",
          "Alternative",
          "Si tu veux un peu plus de depense tout en gardant quelque chose de simple.",
          ["Full A", "Full B", "Full C"],
          { goal: "weight-loss", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
      4: [
        buildPlannerTemplate(
          `wellbeing-4-${suffix}`,
          "Upper / Lower douceur",
          "Recommande",
          "Plus de rythme sur la semaine, mais toujours avec des seances tres tenables.",
          ["Upper A", "Lower A", "Full A", "Full B"],
          {
            goal,
            constraint,
            note: mergeProgramPlannerNotes(
              "Marche tapis douce recommande entre les seances ou en fin de bloc.",
              constraint
            ),
          }
        ),
        buildPlannerTemplate(
          `toning-4-${suffix}`,
          "Lower / Upper / Lower / Upper",
          "Alternative",
          "Si tu veux deja quelque chose d'un peu plus structure sans aller trop loin.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(1),
      ],
      5: [
        buildPlannerTemplate(
          `wellbeing-5-${suffix}`,
          "Rythme doux 5 jours",
          "Recommande",
          "Frequence haute, fatigue basse, parfait si tu aimes bouger souvent.",
          ["Upper A", "Lower A", "Full A", "Upper B", "Lower B"],
          {
            goal,
            constraint,
            note: mergeProgramPlannerNotes(
              "Marche tapis douce possible sur les jours ou tu te sens bien.",
              constraint
            ),
          }
        ),
        buildPlannerTemplate(
          `toning-5-${suffix}`,
          "Lower / Upper + Glutes",
          "Alternative",
          "Si tu veux un rendu un peu plus tonique tout en restant raisonnable.",
          ["Lower 1", "Upper 1", "Lower 2", "Upper 2", "Glutes"],
          { goal: "toning", constraint, note: constraintNote }
        ),
        pickClassic(0),
      ],
    },
  };

  return options[goal]?.[days] || [];
}

function getProgramPlannerOptions(
  days = 4,
  goal = state.programPlannerGoal,
  constraint = state.programPlannerConstraint
) {
  if (isClassicProgramPlannerGoal(goal)) {
    return getClassicProgramPlannerOptions(days);
  }

  return getObjectiveProgramPlannerOptions(days, goal, constraint);
}

function getAllProgramPlannerOptions() {
  const map = new Map();

  [3, 4, 5, 6].forEach((days) => {
    getClassicProgramPlannerOptions(days).forEach((template) => {
      if (!map.has(template.id)) map.set(template.id, template);
    });
  });

  ["weight-loss", "toning", "muscle-gain", "wellbeing"].forEach((goal) => {
    Object.keys(PROGRAM_PLANNER_CONSTRAINTS).forEach((constraint) => {
      [3, 4, 5].forEach((days) => {
        getObjectiveProgramPlannerOptions(days, goal, constraint).forEach((template) => {
          if (!map.has(template.id)) map.set(template.id, template);
        });
      });
    });
  });

  return Array.from(map.values());
}

function getObjectiveGoalFromTemplateId(templateId = "") {
  if (templateId.startsWith("weight-loss-")) return "weight-loss";
  if (templateId.startsWith("toning-")) return "toning";
  if (templateId.startsWith("muscle-gain-")) return "muscle-gain";
  if (templateId.startsWith("wellbeing-")) return "wellbeing";
  return "";
}

function getProgramPlannerConstraintFromTemplateId(templateId = "") {
  const suffix = String(templateId).match(/-(standard|knee|shoulder|back)$/)?.[1];

  switch (suffix) {
    case "knee":
      return "knee-friendly";
    case "shoulder":
      return "shoulder-friendly";
    case "back":
      return "back-friendly";
    case "standard":
      return "standard";
    default:
      return "";
  }
}

function cloneTemplateProgram(program = {}) {
  return Object.fromEntries(
    Object.entries(program).map(([day, entries]) => [
      day,
      Array.isArray(entries) ? entries.map((entry) => ({ ...entry })) : [],
    ])
  );
}

function createTemplateEntryReplacement(entry, replacement = {}) {
  return createTemplateEntry(
    replacement.exercise || entry.exercise,
    replacement.kind || entry.kind,
    entry.series,
    replacement.minReps ?? entry.minReps,
    replacement.maxReps ?? entry.maxReps,
    Object.prototype.hasOwnProperty.call(replacement, "defaultLoad")
      ? replacement.defaultLoad
      : entry.defaultLoad,
    Object.prototype.hasOwnProperty.call(replacement, "loadLabel")
      ? replacement.loadLabel
      : entry.loadLabel
  );
}

function applyExerciseReplacementMap(entries = [], replacementMap = {}) {
  return entries.map((entry) => {
    const replacement = replacementMap[entry.exercise];
    return replacement ? createTemplateEntryReplacement(entry, replacement) : { ...entry };
  });
}

function applyShoulderFriendlyEntries(entries = []) {
  const replacements = {
    "Developpe couche": { exercise: "Chest press", kind: "machine" },
    "Incline halteres": {
      exercise: "Landmine press",
      kind: "barbell",
      defaultLoad: 20,
      loadLabel: "20 kg",
    },
    "Developpe epaules": {
      exercise: "Landmine press",
      kind: "barbell",
      defaultLoad: 20,
      loadLabel: "20 kg",
    },
    "Tirage vertical": { exercise: "Tirage vertical prise neutre", kind: "machine" },
    "Ecarte poulie": {
      exercise: "Face pull",
      kind: "isolation",
      minReps: 12,
      maxReps: 15,
      defaultLoad: null,
      loadLabel: "modere",
    },
    "Pullover poulie": {
      exercise: "Face pull",
      kind: "isolation",
      minReps: 12,
      maxReps: 15,
      defaultLoad: null,
      loadLabel: "modere",
    },
    "Rowing haltere": { exercise: "Rowing chest support", kind: "machine" },
    "Curl incline": {
      exercise: "Curl poulie",
      kind: "isolation",
      minReps: 10,
      maxReps: 15,
      defaultLoad: null,
      loadLabel: "modere",
    },
    "Extension triceps haltere": {
      exercise: "Triceps poulie",
      kind: "isolation",
      minReps: 10,
      maxReps: 15,
      defaultLoad: null,
      loadLabel: "modere",
    },
  };

  return applyExerciseReplacementMap(entries, replacements);
}

function applyBackFriendlyEntries(entries = []) {
  const replacements = {
    "Romanian deadlift": { exercise: "Hip thrust", kind: "barbell", minReps: 8, maxReps: 12 },
    "Souleve de terre roumain": { exercise: "Hip thrust", kind: "barbell", minReps: 8, maxReps: 12 },
    "Squat halteres": { exercise: "Presse a cuisses", kind: "machine", minReps: 10, maxReps: 14 },
    Fentes: {
      exercise: "Split squat assiste",
      kind: "dumbbell",
      minReps: 10,
      maxReps: 12,
      defaultLoad: null,
      loadLabel: "leger a modere",
    },
    "Fentes arriere": {
      exercise: "Split squat assiste",
      kind: "dumbbell",
      minReps: 10,
      maxReps: 12,
      defaultLoad: null,
      loadLabel: "leger a modere",
    },
    "Bulgarian split squat": {
      exercise: "Split squat assiste",
      kind: "dumbbell",
      minReps: 8,
      maxReps: 12,
      defaultLoad: null,
      loadLabel: "leger a modere",
    },
    "Rowing haltere": { exercise: "Rowing chest support", kind: "machine" },
    "Developpe epaules": { exercise: "Chest press", kind: "machine", minReps: 8, maxReps: 12 },
  };

  return applyExerciseReplacementMap(entries, replacements);
}

function applyPlannerConstraintToTemplateProgram(program = {}, constraint = "standard") {
  const clonedProgram = cloneTemplateProgram(program);

  if (constraint === "shoulder-friendly") {
    return finalizeTemplateProgram(
      Object.fromEntries(
        Object.entries(clonedProgram).map(([day, entries]) => [day, applyShoulderFriendlyEntries(entries)])
      )
    );
  }

  if (constraint === "back-friendly") {
    return finalizeTemplateProgram(
      Object.fromEntries(
        Object.entries(clonedProgram).map(([day, entries]) => [day, applyBackFriendlyEntries(entries)])
      )
    );
  }

  return finalizeTemplateProgram(clonedProgram);
}

function createProgramTemplate(templateId) {
  const templates = {
    "full-body-3": {
      "Full A": buildFullBodyPrimeA(),
      "Full B": buildFullBodyPrimeB(),
      "Full C": buildFullBodyPrimeC(),
    },
    "upper-lower-full-3": {
      Upper: buildUpperPrimeA(),
      Lower: buildLowerPrimeA(),
      Full: buildFullBodyPrimeC(),
    },
    "ppl-3": {
      Push: buildPushA(),
      Pull: buildPullA(),
      Legs: buildLegsA(),
    },
    "upper-lower-4": {
      "Upper A": buildUpperPrimeA(),
      "Lower A": buildLowerPrimeA(),
      "Upper B": buildUpperPrimeB(),
      "Lower B": buildLowerPrimeB(),
    },
    "full-body-4": {
      "Full A": buildFullBodyPrimeA(),
      "Full B": buildFullBodyPrimeB(),
      "Full C": buildFullBodyPrimeC(),
      "Full D": buildFullBodyPrimeD(),
    },
    "ppl-upper-4": {
      Push: buildPushA(),
      Pull: buildPullA(),
      Legs: buildLegsA(),
      Upper: buildUpperB(),
    },
    "ppl-upper-lower-5": {
      Push: buildPushPrimeA(),
      Pull: buildPullPrimeA(),
      Legs: buildLegsPrimeA(),
      Upper: buildUpperPrimeB(),
      Lower: buildLowerPrimeB(),
    },
    "ppl-upper-arms-5": {
      Push: buildPushPrimeA(),
      Pull: buildPullPrimeA(),
      Legs: buildLegsPrimeA(),
      Upper: buildUpperPrimeA(),
      Arms: buildArmsPrimeDay(),
    },
    "bro-split-5": {
      Chest: buildChestPrimeDay(),
      Back: buildBackPrimeDay(),
      Legs: buildLegsPrimeA(),
      Shoulders: buildShouldersPrimeDay(),
      Arms: buildArmsPrimeDay(),
    },
    "ppl-x2-6": {
      "Push A": buildPushPrimeA(),
      "Pull A": buildPullPrimeA(),
      "Legs A": buildLegsPrimeA(),
      "Push B": buildPushPrimeB(),
      "Pull B": buildPullPrimeB(),
      "Legs B": buildLegsPrimeB(),
    },
    "arnold-6": {
      "Chest Back A": buildChestBackPrimeA(),
      "Shoulders Arms A": buildShouldersArmsPrimeA(),
      "Legs A": buildLegsPrimeA(),
      "Chest Back B": buildChestBackPrimeB(),
      "Shoulders Arms B": buildShouldersArmsPrimeB(),
      "Legs B": buildLegsPrimeB(),
    },
    "upper-lower-x3-6": {
      "Upper A": buildUpperPrimeA(),
      "Lower A": buildLowerPrimeA(),
      "Upper B": buildUpperPrimeB(),
      "Lower B": buildLowerPrimeB(),
      "Upper C": buildUpperPrimeC(),
      "Lower C": buildLowerPrimeC(),
    },
    "weight-loss-3-standard": {
      "Full A": buildObjectiveFullA(),
      "Full B": buildObjectiveFullB(),
      "Full C": buildObjectiveFullC(),
    },
    "weight-loss-3-knee": {
      "Full A": buildKneeFriendlyFullA(),
      "Full B": buildKneeFriendlyFullB(),
      "Full C": buildKneeFriendlyFullC(),
    },
    "weight-loss-4-standard": {
      "Lower 1": buildObjectiveLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Lower 2": buildObjectiveLowerB(),
      "Upper 2": buildObjectiveUpperB(),
    },
    "weight-loss-4-knee": {
      "Lower 1": buildKneeFriendlyLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Lower 2": buildKneeFriendlyLowerB(),
      "Upper 2": buildObjectiveUpperB(),
    },
    "weight-loss-5-standard": {
      "Lower 1": buildObjectiveLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Full A": buildObjectiveFullA(),
      "Lower 2": buildObjectiveLowerB(),
      "Upper 2": buildObjectiveUpperB(),
    },
    "weight-loss-5-knee": {
      "Lower 1": buildKneeFriendlyLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Full A": buildKneeFriendlyFullA(),
      "Lower 2": buildKneeFriendlyLowerB(),
      "Upper 2": buildObjectiveUpperB(),
    },
    "toning-3-standard": {
      "Lower 1": buildObjectiveLowerA(),
      Upper: buildObjectiveUpperA(),
      "Lower 2": buildObjectiveLowerB(),
    },
    "toning-3-knee": {
      "Lower 1": buildKneeFriendlyLowerA(),
      Upper: buildObjectiveUpperA(),
      "Lower 2": buildKneeFriendlyLowerB(),
    },
    "toning-4-standard": {
      "Lower 1": buildObjectiveLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Lower 2": buildObjectiveLowerB(),
      "Upper 2": buildObjectiveUpperB(),
    },
    "toning-4-knee": {
      "Lower 1": buildKneeFriendlyLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Lower 2": buildKneeFriendlyLowerB(),
      "Upper 2": buildObjectiveUpperB(),
    },
    "toning-5-standard": {
      "Lower 1": buildObjectiveLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Lower 2": buildObjectiveLowerB(),
      "Upper 2": buildObjectiveUpperB(),
      Glutes: buildObjectiveGlutesFinish(),
    },
    "toning-5-knee": {
      "Lower 1": buildKneeFriendlyLowerA(),
      "Upper 1": buildObjectiveUpperA(),
      "Lower 2": buildKneeFriendlyLowerB(),
      "Upper 2": buildObjectiveUpperB(),
      Glutes: buildObjectiveGlutesFinish(),
    },
    "muscle-gain-3-standard": {
      "Full A": buildMuscleFullA(),
      "Full B": buildMuscleFullB(),
      "Full C": buildMuscleFullC(),
    },
    "muscle-gain-3-knee": {
      "Full A": buildKneeFriendlyFullA(),
      "Full B": buildKneeFriendlyFullB(),
      "Full C": buildKneeFriendlyFullC(),
    },
    "muscle-gain-4-standard": {
      "Upper A": buildUpperPrimeA(),
      "Lower A": buildLowerPrimeA(),
      "Upper B": buildUpperPrimeB(),
      "Lower B": buildLowerPrimeB(),
    },
    "muscle-gain-4-knee": {
      "Upper A": buildUpperPrimeA(),
      "Lower A": buildKneeFriendlyLowerA(),
      "Upper B": buildUpperPrimeB(),
      "Lower B": buildKneeFriendlyLowerB(),
    },
    "muscle-gain-5-standard": {
      Push: buildPushPrimeA(),
      Pull: buildPullPrimeA(),
      Legs: buildLegsPrimeA(),
      Upper: buildUpperPrimeA(),
      Arms: buildArmsPrimeDay(),
    },
    "muscle-gain-5-knee": {
      Push: buildPushPrimeA(),
      Pull: buildPullPrimeA(),
      Legs: buildKneeFriendlyLowerA(),
      Upper: buildUpperPrimeA(),
      Arms: buildArmsPrimeDay(),
    },
    "wellbeing-3-standard": {
      "Full A": buildWellbeingFullA(),
      "Full B": buildWellbeingFullB(),
      "Full C": buildWellbeingFullC(),
    },
    "wellbeing-3-knee": {
      "Full A": buildKneeFriendlyFullA(),
      "Full B": buildKneeFriendlyFullB(),
      "Full C": buildKneeFriendlyFullC(),
    },
    "wellbeing-4-standard": {
      "Upper A": buildWellbeingUpperA(),
      "Lower A": buildWellbeingLowerA(),
      "Full A": buildWellbeingFullA(),
      "Full B": buildWellbeingFullB(),
    },
    "wellbeing-4-knee": {
      "Upper A": buildWellbeingUpperA(),
      "Lower A": buildKneeFriendlyLowerA(),
      "Full A": buildKneeFriendlyFullA(),
      "Full B": buildKneeFriendlyFullB(),
    },
    "wellbeing-5-standard": {
      "Upper A": buildWellbeingUpperA(),
      "Lower A": buildWellbeingLowerA(),
      "Full A": buildWellbeingFullA(),
      "Upper B": buildWellbeingUpperB(),
      "Lower B": buildWellbeingLowerB(),
    },
    "wellbeing-5-knee": {
      "Upper A": buildWellbeingUpperA(),
      "Lower A": buildKneeFriendlyLowerA(),
      "Full A": buildKneeFriendlyFullA(),
      "Upper B": buildWellbeingUpperB(),
      "Lower B": buildKneeFriendlyLowerB(),
    },
  };

  const directTemplate = templates[templateId];
  if (directTemplate) {
    return finalizeTemplateProgram(directTemplate);
  }

  const objectiveGoal = getObjectiveGoalFromTemplateId(templateId);
  const matchedConstraint = getProgramPlannerConstraintFromTemplateId(templateId);

  if (
    objectiveGoal &&
    ["shoulder-friendly", "back-friendly"].includes(matchedConstraint)
  ) {
    const suffix = getProgramPlannerConstraintVariant(matchedConstraint).suffix;
    const baseTemplate = templates[String(templateId).replace(`-${suffix}`, "-standard")];
    if (baseTemplate) {
      return applyPlannerConstraintToTemplateProgram(baseTemplate, matchedConstraint);
    }
  }

  return finalizeTemplateProgram(createProgramCopy());
}

function getProgramTemplateById(templateId) {
  const objectiveGoal = getObjectiveGoalFromTemplateId(templateId);

  if (objectiveGoal) {
    const matchedDays = Number(String(templateId).match(/-(3|4|5)-/)?.[1] || 0);
    const matchedConstraint = getProgramPlannerConstraintFromTemplateId(templateId) || "standard";
    return (
      getObjectiveProgramPlannerOptions(matchedDays, objectiveGoal, matchedConstraint).find(
        (template) => template.id === templateId
      ) || null
    );
  }

  const allOptions = getAllProgramPlannerOptions();
  return allOptions.find((template) => template.id === templateId) || null;
}

function inferProgramTemplateMeta(program = {}) {
  const programDays = getProgramDayKeys(program);
  const allOptions = getAllProgramPlannerOptions();
  const matchedTemplate = allOptions.find(
    (template) =>
      template.days.length === programDays.length &&
      template.days.every((day, index) => day === programDays[index])
  );

  if (matchedTemplate) {
    return {
      id: matchedTemplate.id,
      title: matchedTemplate.title,
    };
  }

  return {
    id: "",
    title: "Programme perso",
  };
}

function getActiveProgramDisplay() {
  const fallbackMeta = inferProgramTemplateMeta(state.program);
  const title = sanitizePlainText(state.programTemplateTitle, fallbackMeta.title);
  const dayCount = getProgramDays().length;
  return `${title} - ${dayCount} jours`;
}

function summarizeTemplateDayEntries(entries = []) {
  const grouped = new Map();

  entries.forEach((entry) => {
    const existing = grouped.get(entry.exercise);
    if (existing) {
      existing.setCount += 1;
      if (entry.targetLabel && !existing.targets.includes(entry.targetLabel)) {
        existing.targets.push(entry.targetLabel);
      }
      return;
    }

    grouped.set(entry.exercise, {
      exercise: entry.exercise,
      setCount: 1,
      targets: entry.targetLabel ? [entry.targetLabel] : [],
    });
  });

  return [...grouped.values()].map((item) => {
    const targetLabel = item.targets.length ? `${item.targets.join(" / ")} reps` : "reps libres";
    const setLabel = `${item.setCount} ${item.setCount > 1 ? "series" : "serie"}`;

    return {
      exercise: item.exercise,
      meta: `${setLabel} - ${targetLabel}`,
    };
  });
}

function formatTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function getTimerButtonLabel(screenMeta = getScreenMeta()) {
  if (state.timer.active) return "Pause";
  if (state.timer.seconds > 0) return "Reprendre";
  return screenMeta.title;
}

function formatChartMetricValue(value, metric = "reps") {
  const amount = Number(value);
  const safeValue = Number.isFinite(amount)
    ? amount.toLocaleString("fr-FR", { maximumFractionDigits: amount % 1 === 0 ? 0 : 1 })
    : "0";
  return metric === "load" ? `${safeValue} kg` : `${safeValue}`;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
  });
}

function formatDateTimeShort(iso) {
  if (!iso) return "Aucune";

  const value = new Date(iso);
  if (Number.isNaN(value.getTime())) return "Aucune";

  return value.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function isNumericLoad(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

function formatLoad(value, fallbackLabel) {
  if (isNumericLoad(value)) return `${value} kg`;
  return fallbackLabel || "Charge libre";
}

function getIncrement(kind) {
  return {
    barbell: 2.5,
    machine: 2.5,
    dumbbell: 2,
    isolation: 1,
  }[kind] ?? 1;
}

function getMinimumLoad(kind) {
  return {
    barbell: 20,
    machine: 2.5,
    dumbbell: 2,
    isolation: 1,
  }[kind] ?? 0;
}

function roundToIncrement(value, increment, mode = "nearest") {
  if (!isNumericLoad(value)) return value;
  if (!isNumericLoad(increment) || increment <= 0) {
    return Math.round(value * 100) / 100;
  }

  const ratio = value / increment;
  const rounded =
    mode === "down"
      ? Math.floor(ratio)
      : mode === "up"
      ? Math.ceil(ratio)
      : Math.round(ratio);

  return Math.round(rounded * increment * 100) / 100;
}

function getAdvice(reps, minReps, maxReps, rpe) {
  let action = "Garder";
  let type = "hold";

  if (reps >= maxReps) {
    action = "Augmenter";
    type = "progress";
  } else if (reps < minReps) {
    action = "Baisser 5%";
    type = "reduce";
  }

  return {
    type,
    action,
    label: `Prochaine seance : ${action}`,
    fatigue: rpe >= 9.5 && reps <= minReps ? "Fatigue elevee detectee" : "",
  };
}

function getAdvicePresentation(advice, entry) {
  if (!advice || !entry) return null;

  if (advice.type === "progress") {
    return {
      tone: "progress",
      headline: "Objectif valide. Tu peux monter.",
      text: `${entry.reps} reps sur ${entry.exercise}. Continue comme ca et augmente a la prochaine seance.`,
    };
  }

  if (advice.type === "reduce") {
    return {
      tone: "reduce",
      headline: "On ajuste pour repartir fort.",
      text: `${entry.reps} reps sur ${entry.exercise}. La prochaine fois, baisse un peu pour repartir plus propre.`,
    };
  }

  return {
    tone: "hold",
    headline: "Solide. Garde cette charge.",
    text: `${entry.reps} reps sur ${entry.exercise}. Verrouille encore cette charge avant de monter.`,
  };
}

function getPendingAdviceSummary() {
  if (!state.pendingSession.length) return null;

  const counts = { progress: 0, hold: 0, reduce: 0 };

  state.pendingSession.forEach((entry) => {
    const advice = getAdvice(entry.reps, entry.minReps, entry.maxReps, entry.rpe);
    counts[advice.type] += 1;
  });

  const latestEntry = state.pendingSession[state.pendingSession.length - 1];
  const latestAdvice = getAdvice(
    latestEntry.reps,
    latestEntry.minReps,
    latestEntry.maxReps,
    latestEntry.rpe
  );

  return {
    counts,
    latestEntry,
    latestAdvice,
    latestPresentation: getAdvicePresentation(latestAdvice, latestEntry),
  };
}

function renderCompactNextCue(advice) {
  if (!advice) return "";

  const value =
    advice.type === "progress"
      ? "Monter"
      : advice.type === "reduce"
      ? "Baisser"
      : "Garder";

  return `
    <div class="next-cue next-cue--${advice.type}">
      <span class="next-cue__label">Prochaine</span>
      <span class="next-cue__value">${value}</span>
    </div>
  `;
}

function calculatePlates(targetWeight, barWeight = 20) {
  if (!isNumericLoad(targetWeight)) return [];

  const plates = [25, 20, 15, 10, 5, 2.5, 1.25];
  let remaining = (targetWeight - barWeight) / 2;
  if (remaining <= 0) return [];

  const result = [];
  for (const plate of plates) {
    while (remaining + 1e-9 >= plate) {
      result.push(plate);
      remaining = Math.round((remaining - plate) * 100) / 100;
    }
  }
  return result;
}

function buildExerciseKey(day, exercise, series) {
  return `${day}__${exercise}__${series}`;
}

function getNextLoadSettingsFromEntry(entry) {
  const advice = getAdvice(entry.reps, entry.minReps, entry.maxReps, entry.rpe);
  let nextLoad = entry.load;
  let deload = false;
  const increment = getIncrement(entry.kind);
  const minimumLoad = getMinimumLoad(entry.kind);

  if (advice.action === "Augmenter" && isNumericLoad(entry.load)) {
    nextLoad = roundToIncrement(entry.load + increment, increment);
  }

  if (advice.action === "Baisser 5%" && isNumericLoad(entry.load)) {
    nextLoad = Math.max(
      minimumLoad,
      roundToIncrement(entry.load * 0.95, increment, "down")
    );
    deload = true;
  }

  if (advice.fatigue) {
    deload = true;
  }

  return {
    load: nextLoad,
    loadLabel: entry.loadLabel,
    deload,
  };
}

function recomputeExerciseDataForKey(key) {
  if (!key) return;

  const nextExerciseData = { ...state.exerciseData };
  const latestEntry = state.history
    .filter((item) => item.key === key)
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  if (!latestEntry) {
    delete nextExerciseData[key];
    state.exerciseData = nextExerciseData;
    return;
  }

  nextExerciseData[key] = getNextLoadSettingsFromEntry(latestEntry);
  state.exerciseData = nextExerciseData;
}

function migrateExerciseIdentity(day, previousEntry, nextEntry) {
  if (!previousEntry || !nextEntry) return;

  const oldKey = buildExerciseKey(day, previousEntry.exercise, previousEntry.series);
  const newKey = buildExerciseKey(day, nextEntry.exercise, nextEntry.series);

  if (oldKey === newKey) return;

  const nextExerciseData = { ...state.exerciseData };
  if (Object.prototype.hasOwnProperty.call(nextExerciseData, oldKey)) {
    nextExerciseData[newKey] = nextExerciseData[oldKey];
    delete nextExerciseData[oldKey];
  }
  state.exerciseData = nextExerciseData;

  state.history = state.history.map((item) =>
    item.key === oldKey
      ? {
          ...item,
          key: newKey,
          day,
          exercise: nextEntry.exercise,
          series: nextEntry.series,
        }
      : item
  );

  state.pendingSession = state.pendingSession.map((item) =>
    item.key === oldKey
      ? {
          ...item,
          key: newKey,
          day,
          exercise: nextEntry.exercise,
          series: nextEntry.series,
        }
      : item
  );

  if (state.selectedChartKey === oldKey) {
    state.selectedChartKey = newKey;
  }
}

function getTimerEndTimestamp(seconds) {
  return seconds > 0 ? Date.now() + seconds * 1000 : 0;
}

function getExercises() {
  return state.program[state.day] || [];
}

function getActiveExercise() {
  return getExercises()[state.currentIndex] || null;
}

function getExerciseKey() {
  const active = getActiveExercise();
  if (!active) return "";
  return buildExerciseKey(state.day, active.exercise, active.series);
}

function getCurrentSettings() {
  const active = getActiveExercise();
  if (!active) return { load: 0, loadLabel: "", deload: false };
  return (
    state.exerciseData[getExerciseKey()] || {
      load: active.defaultLoad,
      loadLabel: active.loadLabel,
      deload: false,
    }
  );
}

function getLastPerformance() {
  const key = getExerciseKey();
  return state.history.find((item) => item.key === key) || null;
}

function getCurrentAdvice() {
  const reps = parseInt(state.repsInput, 10);
  const active = getActiveExercise();
  if (!active || Number.isNaN(reps) || reps <= 0) return null;
  return getAdvice(reps, active.minReps, active.maxReps, state.rpe);
}

function hasValidRepsInput() {
  const reps = parseInt(state.repsInput, 10);
  return Number.isInteger(reps) && reps > 0;
}

function setRepsInputValue(value) {
  const nextValue = sanitizePositiveInteger(value, 0, 1);
  if (!nextValue) return;

  state.repsInput = String(nextValue);
  saveState();

  const input = document.getElementById("reps-input");
  if (input) {
    input.value = state.repsInput;
  }

  syncValidationButton();
}

function getRepQuickPicks() {
  const active = getActiveExercise();
  if (!active) return [];

  const midpoint =
    active.minReps === active.maxReps
      ? active.maxReps
      : Math.round((active.minReps + active.maxReps) / 2);
  const last = getLastPerformance();
  const picks = [];

  if (last?.reps) {
    picks.push({ value: last.reps, label: `${last.reps}`, meta: "Dernier" });
  }

  [
    { value: active.minReps, meta: "Min" },
    { value: midpoint, meta: "Cible" },
    { value: active.maxReps, meta: "Max" },
  ].forEach((pick) => {
    if (!picks.some((item) => item.value === pick.value)) {
      picks.push({ value: pick.value, label: `${pick.value}`, meta: pick.meta });
    }
  });

  return picks.slice(0, 4);
}

function renderRepQuickPicks() {
  const picks = getRepQuickPicks();
  if (!picks.length) return "";

  const buttons = picks
    .map((pick) => {
      const activeClass = String(pick.value) === state.repsInput ? " is-active" : "";
      return `
        <button
          class="rep-quick-pick${activeClass}"
          type="button"
          data-action="pick-reps"
          data-reps-value="${pick.value}"
          aria-label="Utiliser ${pick.value} reps"
        >
          <strong>${pick.label}</strong>
          <span>${pick.meta}</span>
        </button>
      `;
    })
    .join("");

  return `
    <div class="rep-quick-picks">
      ${buttons}
    </div>
  `;
}

function getAdviceShortLabel(adviceType) {
  if (adviceType === "progress") {
    return { icon: "+", label: "Monte" };
  }
  if (adviceType === "reduce") {
    return { icon: "-", label: "Baisse" };
  }
  if (adviceType === "empty") {
    return { icon: ".", label: "Start" };
  }
  return { icon: "=", label: "Garde" };
}

function getLastPerformancePreviewCard() {
  const active = getActiveExercise();
  const last = getLastPerformance();

  if (!active || !last) {
    const verdict = getAdviceShortLabel("empty");
    return {
      tone: "empty",
      eyebrow: "Derniere fois",
      verdict,
      title: "Pas encore de serie sur ce slot",
      meta: `Objectif ${active?.targetLabel || "-"} reps`,
    };
  }

  const advice = getAdvice(last.reps, last.minReps, last.maxReps, last.rpe ?? 8);
  const verdict = getAdviceShortLabel(advice.type);

  return {
    tone: advice.type,
    eyebrow: "Derniere fois",
    verdict,
    title: `${last.reps} reps a ${formatLoad(last.load, last.loadLabel)}`,
    meta: `${last.series} - ${formatDate(last.date)}`,
  };
}

function renderLastPerformancePreviewCard() {
  const preview = getLastPerformancePreviewCard();

  return `
    <div class="workout-preview workout-preview--compact workout-preview--${preview.tone}">
      <div class="workout-preview__compact-copy">
        <span class="workout-preview__eyebrow">${preview.eyebrow}</span>
        <strong class="workout-preview__title">${preview.title}</strong>
        <span class="workout-preview__meta">${preview.meta}</span>
      </div>
      <span class="workout-preview__badge workout-preview__badge--${preview.tone}">
        <span class="workout-preview__badge-icon">${preview.verdict.icon}</span>
        <span class="workout-preview__badge-text">${preview.verdict.label}</span>
      </span>
    </div>
  `;
}

function getNextExercisePreview() {
  const exercises = getExercises();
  const next = exercises[state.currentIndex + 1];

  if (!next) {
    return {
      title: "Derniere serie",
      meta: "Fin de seance juste apres validation",
      tone: "finish",
    };
  }

  const key = buildExerciseKey(state.day, next.exercise, next.series);
  const nextSettings = state.exerciseData[key] || {
    load: next.defaultLoad,
    loadLabel: next.loadLabel,
  };

  return {
    title: `${next.exercise} - ${next.series}`,
    meta: `${formatLoad(nextSettings.load, nextSettings.loadLabel)} - ${next.rest}s de repos`,
    tone: "next",
  };
}

function renderNextExercisePreview() {
  const preview = getNextExercisePreview();

  return `
    <div class="workout-preview workout-preview--${preview.tone}">
      <span class="workout-preview__eyebrow">${preview.tone === "finish" ? "Apres cette serie" : "Serie d'apres"}</span>
      <strong class="workout-preview__title">${preview.title}</strong>
      <span class="workout-preview__meta">${preview.meta}</span>
    </div>
  `;
}

function getValidationButtonState(advice = getCurrentAdvice()) {
  if (!advice) {
    return {
      tone: "idle",
      badge: null,
      cta: "Valider",
      aria: "Valider la serie",
    };
  }

  const verdict = getAdviceShortLabel(advice.type);

  return {
    tone: advice.type,
    badge: verdict,
    cta: "Valider",
    aria: `Valider - prochaine ${verdict.label.toLowerCase()}`,
  };
}

function renderValidationButtonContent(advice = getCurrentAdvice()) {
  const buttonState = getValidationButtonState(advice);

  if (!buttonState.badge) {
    return `<span class="validation-button__cta">${buttonState.cta}</span>`;
  }

  return `
    <span class="validation-button__row">
      <span class="validation-button__badge validation-button__badge--${buttonState.tone}">
        <span class="validation-button__badge-icon">${buttonState.badge.icon}</span>
        <span class="validation-button__badge-text">${buttonState.badge.label}</span>
      </span>
      <span class="validation-button__cta">${buttonState.cta}</span>
    </span>
  `;
}

function getValidationButtonClass(advice = getCurrentAdvice()) {
  const buttonState = getValidationButtonState(advice);
  return `button button--primary validation-button validation-button--${buttonState.tone}`;
}

function getValidationButtonLabel(advice = getCurrentAdvice()) {
  return getValidationButtonState(advice).aria;
}

function syncValidationButton() {
  const button = document.getElementById("validate-set-button");
  if (!button) return;
  const advice = getCurrentAdvice();
  button.className = `${getValidationButtonClass(advice)} validation-button--inline`;
  button.innerHTML = renderValidationButtonContent(advice);
  button.setAttribute("aria-label", getValidationButtonLabel(advice));
  button.disabled = !hasValidRepsInput();
}

function getExerciseIndexForEntry(entry, day = state.day) {
  if (!entry) return -1;
  return (state.program[day] || []).findIndex(
    (item) => item.exercise === entry.exercise && item.series === entry.series
  );
}

function reopenLastPendingSet(prefill = false) {
  const lastEntry = state.pendingSession.pop();
  if (!lastEntry) return;

  clearScheduledRestSound();
  state.day = lastEntry.day;
  state.screen = "workout";
  state.restAlertVisible = false;
  state.timer = { seconds: 0, active: false };
  state.timerTotalSeconds = 0;
  state.timerEndsAt = 0;
  state.workoutFinished = false;
  state.pendingAdvance = null;
  state.currentIndex = Math.max(0, getExerciseIndexForEntry(lastEntry, lastEntry.day));
  state.repsInput = prefill ? String(lastEntry.reps) : "";
  state.selectedChartKey = lastEntry.key || state.selectedChartKey;

  if (!state.pendingSession.length) {
    state.workoutStartedAt = new Date().toISOString();
  }

  saveState();
  renderApp();
}

function getLastPendingEntry() {
  return state.pendingSession[state.pendingSession.length - 1] || null;
}

function getWorkoutDurationMinutes() {
  const startValue = state.workoutStartedAt || state.pendingSession[0]?.date;
  if (!startValue) return 0;

  const startTime = new Date(startValue).getTime();
  const endSource = state.pendingSession[state.pendingSession.length - 1]?.date || new Date().toISOString();
  const endTime = new Date(endSource).getTime();

  if (!Number.isFinite(startTime) || !Number.isFinite(endTime) || endTime <= startTime) {
    return 0;
  }

  return Math.max(1, Math.round((endTime - startTime) / 60000));
}

function getWorkoutDurationLabel() {
  return `${getWorkoutDurationMinutes()} min`;
}

function getWorkoutCompletionSummary() {
  if (!state.pendingSession.length) return null;

  const counts = { progress: 0, hold: 0, reduce: 0 };
  const exercises = new Set();
  let volume = 0;

  state.pendingSession.forEach((entry) => {
    const advice = getAdvice(entry.reps, entry.minReps, entry.maxReps, entry.rpe);
    counts[advice.type] += 1;
    exercises.add(entry.exercise);

    if (isNumericLoad(entry.load)) {
      volume += entry.load * entry.reps;
    }
  });

  const dominantAction =
    counts.progress >= counts.hold && counts.progress >= counts.reduce
      ? "progress"
      : counts.reduce > counts.hold
      ? "reduce"
      : "hold";

  const coachLine =
    dominantAction === "progress"
      ? "Tu as valide la seance. Continue sur cette dynamique."
      : dominantAction === "reduce"
      ? "On ajuste legerement et on repart plus propre la prochaine fois."
      : "Bonne seance. On verrouille encore avant de monter.";

  return {
    setCount: state.pendingSession.length,
    exerciseCount: exercises.size,
    counts,
    volumeLabel: volume > 0 ? `${Math.round(volume)} kg` : "Charge libre",
    durationLabel: getWorkoutDurationLabel(),
    coachLine,
  };
}

function renderLastSetActions() {
  const lastEntry = getLastPendingEntry();
  if (!lastEntry || state.workoutFinished) return "";

  return `
    <div class="last-set-card">
      <div class="last-set-card__copy">
        <span class="label">Derniere serie</span>
        <strong>${lastEntry.exercise}</strong>
        <span>${lastEntry.reps} reps - ${formatLoad(lastEntry.load, lastEntry.loadLabel)}</span>
      </div>
      <div class="last-set-card__actions">
        <button class="button button--ghost button--compact" data-action="edit-last-set">Corriger</button>
        <button class="button button--ghost button--compact" data-action="undo-last-set">Annuler</button>
      </div>
    </div>
  `;
}

function toggleFocusWorkoutMode() {
  state.focusWorkoutMode = !state.focusWorkoutMode;
  saveState();
  renderApp();
}

function ensureSelectedChartKeyIsValid() {
  if (state.selectedChartKey && state.history.some((item) => item.key === state.selectedChartKey)) {
    return;
  }

  state.selectedChartKey = state.history[0]?.key || "";
}

function ensureHistoryDetailKeyIsValid() {
  if (state.historyDetailKey && state.history.some((item) => item.day === state.historyDetailKey)) {
    return;
  }

  state.historyDetailKey = "";
}

function openHistoryDetail(key) {
  if (!key) return;
  state.historyDetailKey = key;
  state.selectedChartKey = getPreferredHistoryChartKey(key, state.selectedChartKey);
  saveState();
  renderApp();
}

function closeHistoryDetail() {
  state.historyDetailKey = "";
  saveState();
  renderApp();
}

function openHistoryEditor(index) {
  const sortedHistory = getSortedHistory();
  const entry = sortedHistory[index];
  if (!entry) return;

  const originalIndex = state.history.findIndex(
    (item) => item.key === entry.key && item.date === entry.date && item.series === entry.series
  );
  if (originalIndex < 0) return;

  state.historyEditor = {
    index: originalIndex,
    reps: String(entry.reps ?? ""),
    load: isNumericLoad(entry.load) ? String(entry.load) : "",
    loadLabel: sanitizePlainText(entry.loadLabel, entry.loadLabel || ""),
  };
  renderApp();
}

function closeHistoryEditor() {
  state.historyEditor = null;
  renderApp();
}

function saveHistoryEditor() {
  if (!state.historyEditor) return;

  const nextHistory = [...state.history];
  const entry = nextHistory[state.historyEditor.index];
  if (!entry) {
    state.historyEditor = null;
    renderApp();
    return;
  }

  const reps = sanitizePositiveInteger(state.historyEditor.reps, entry.reps, 1);
  const load = state.historyEditor.load === "" ? null : sanitizeLoadNumber(state.historyEditor.load, entry.load);
  const loadLabel = sanitizePlainText(
    state.historyEditor.loadLabel,
    isNumericLoad(load) ? `${load} kg` : entry.loadLabel || "Charge libre"
  );

  nextHistory[state.historyEditor.index] = {
    ...entry,
    reps,
    load,
    loadLabel,
  };

  const affectedKey = entry.key;
  state.history = nextHistory;
  state.historyEditor = null;
  recomputeExerciseDataForKey(affectedKey);
  ensureSelectedChartKeyIsValid();
  ensureHistoryDetailKeyIsValid();
  saveState();
  renderApp();
}

function deleteHistoryEntry() {
  if (!state.historyEditor) return;
  if (!window.confirm("Supprimer cette serie de l'historique ?")) return;

  const affectedKey = state.history[state.historyEditor.index]?.key;
  state.history = state.history.filter((_, index) => index !== state.historyEditor.index);
  state.historyEditor = null;
  recomputeExerciseDataForKey(affectedKey);
  ensureSelectedChartKeyIsValid();
  ensureHistoryDetailKeyIsValid();
  saveState();
  renderApp();
}

function renderHistoryEditorOverlay() {
  if (!state.historyEditor) return "";

  const currentEntry = state.history[state.historyEditor.index];
  if (!currentEntry) return "";

  return `
    <div class="sheet-overlay">
      <article class="sheet-card">
        <div class="sheet-card__head">
          <div>
            <div class="label">Historique</div>
            <h3 class="section-title">Modifier la serie</h3>
          </div>
          <button class="icon-button" data-action="close-history-editor" aria-label="Fermer l'edition">
            X
          </button>
        </div>

        <div class="sheet-card__body">
          <div class="muted">${currentEntry.exercise} - ${currentEntry.series} - ${formatDate(currentEntry.date)}</div>
          <div class="grid-2">
            <div class="field-wrap">
              <label class="label" for="history-editor-reps">Reps</label>
              <input id="history-editor-reps" class="input input--editor" type="number" min="1" value="${state.historyEditor.reps}" />
            </div>
            <div class="field-wrap">
              <label class="label" for="history-editor-load">Charge</label>
              <input id="history-editor-load" class="input input--editor" type="number" min="0" step="0.5" value="${state.historyEditor.load}" />
            </div>
          </div>
          <div class="field-wrap">
            <label class="label" for="history-editor-label">Libelle charge</label>
            <input id="history-editor-label" class="input input--editor" type="text" value="${state.historyEditor.loadLabel}" />
          </div>
        </div>

        <div class="sheet-card__actions">
          <button class="button button--danger" data-action="delete-history-entry">Supprimer</button>
          <button class="button button--ghost" data-action="close-history-editor">Annuler</button>
          <button class="button button--primary" data-action="save-history-entry">Enregistrer</button>
        </div>
      </article>
    </div>
  `;
}

function renderProgramTemplatePreviewOverlay() {
  if (!state.programTemplatePreviewId) return "";

  const template = getProgramTemplateById(state.programTemplatePreviewId);
  if (!template) return "";

  const previewProgram = createProgramTemplate(template.id);
  const hasWorkoutInProgress =
    state.pendingSession.length > 0 || state.timer.active || state.workoutFinished;
  const accentDay = getDayTheme(template.days[0]).accentDay;
  const goalMeta = template.goal ? getProgramPlannerGoalMeta(template.goal) : null;
  const constraintMeta = template.constraint ? getProgramPlannerConstraintMeta(template.constraint) : null;
  const availablePreviewDays = Object.keys(previewProgram);
  const activePreviewDay = availablePreviewDays.includes(state.programTemplatePreviewDay)
    ? state.programTemplatePreviewDay
    : availablePreviewDays[0] || "";

  return `
    <div class="sheet-overlay">
      <article class="sheet-card template-preview-sheet" data-accent-day="${accentDay}">
        <div class="sheet-card__head">
          <div>
            <div class="label">Apercu du programme</div>
            <h3 class="section-title">${template.title}</h3>
          </div>
          <button class="icon-button" data-action="close-program-template-preview" aria-label="Fermer l'apercu">
            X
          </button>
        </div>

        <div class="sheet-card__body template-preview">
          <div class="template-preview__intro">
            <div class="template-preview__eyebrow">
              ${[
                template.split,
                goalMeta?.title || "",
                constraintMeta?.shortLabel || "",
                `${template.days.length} jours`,
              ]
                .filter(Boolean)
                .join(" · ")}
            </div>
            <div class="template-preview__why">${template.why}</div>
            ${template.note ? `<div class="template-preview__note">${template.note}</div>` : ""}
          </div>

          ${
            hasWorkoutInProgress
              ? `
                <div class="template-preview__warning">
                  Une seance est en cours. Si tu valides ce programme, elle sera remplacee.
                </div>
              `
              : ""
          }

          ${
            availablePreviewDays.length > 1
              ? `
                <div class="history-filter-row history-filter-row--compact">
                  ${availablePreviewDays
                    .map(
                      (day) => `
                        <button
                          class="history-filter-chip ${activePreviewDay === day ? "is-active" : ""}"
                          data-action="set-program-preview-day"
                          data-preview-day="${day}"
                          aria-pressed="${activePreviewDay === day ? "true" : "false"}"
                        >
                          ${day}
                        </button>
                      `
                    )
                    .join("")}
                </div>
              `
              : ""
          }

          <div class="template-preview__days">
            ${Object.entries(previewProgram)
              .filter(([day]) => !activePreviewDay || day === activePreviewDay)
              .map(([day, entries]) => {
                const exerciseSummary = summarizeTemplateDayEntries(entries);

                return `
                  <section class="template-preview__day" data-accent-day="${getDayTheme(day).accentDay}">
                    <div class="template-preview__day-head">
                      <div class="template-preview__day-title">${day}</div>
                      <div class="template-preview__day-meta">${exerciseSummary.length} exos - ${entries.length} series</div>
                    </div>

                    <ul class="template-preview__exercise-list">
                      ${exerciseSummary
                        .map(
                          (item) => `
                            <li class="template-preview__exercise">
                              <span class="template-preview__exercise-name">${item.exercise}</span>
                              <span class="template-preview__exercise-meta">${item.meta}</span>
                            </li>
                          `
                        )
                        .join("")}
                    </ul>
                  </section>
                `;
              })
              .join("")}
          </div>
        </div>

        <div class="sheet-card__actions">
          <button class="button button--ghost" data-action="close-program-template-preview">Retour</button>
          <button
            class="button ${hasWorkoutInProgress ? "button--danger" : "button--primary"}"
            data-action="apply-program-template"
            data-template-id="${template.id}"
          >
            ${hasWorkoutInProgress ? "Valider et remplacer" : "Valider ce programme"}
          </button>
        </div>
      </article>
    </div>
  `;
}

function renderPwaUpdateBanner() {
  if (!pwaUpdateReady || pwaUpdateDismissed) return "";

  return `
    <div class="update-banner">
      <div class="update-banner__copy">
        <span class="label">Mise a jour</span>
        <strong>Une nouvelle version est disponible.</strong>
      </div>
      <div class="update-banner__actions">
        <button class="button button--ghost button--compact" data-action="dismiss-update-banner">Plus tard</button>
        <button class="button button--primary button--compact" data-action="refresh-app">Recharger</button>
      </div>
    </div>
  `;
}

function getProgressPercent() {
  const exercises = getExercises();
  if (!exercises.length) return 0;
  const currentStep = state.workoutFinished
    ? exercises.length
    : Math.min(state.currentIndex + 1, exercises.length);
  return Math.round((currentStep / exercises.length) * 100);
}

function getHistoryKeys() {
  const map = new Map();
  state.history.forEach((item) => {
    if (!map.has(item.key)) map.set(item.key, item);
  });
  return [...map.values()];
}

function getCardioTypeMeta(type) {
  return CARDIO_TYPES[type] || CARDIO_TYPES["walk-treadmill"];
}

function getSortedCardioSessions() {
  return state.cardioSessions
    .slice()
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
}

function getRecentCardioSessions(days = 7) {
  const now = Date.now();
  const range = days * 24 * 60 * 60 * 1000;
  return getSortedCardioSessions().filter((entry) => {
    const time = new Date(entry.date).getTime();
    return Number.isFinite(time) && now - time <= range;
  });
}

function getBackupExportSnapshot() {
  const lastExportedAt = typeof state.storageMeta.lastExportedAt === "string" ? state.storageMeta.lastExportedAt : "";
  const exportCount = sanitizePositiveInteger(state.storageMeta.exportCount, 0, 0);

  if (!lastExportedAt) {
    return {
      tone: "warn",
      label: "Export recommande",
      shortLabel: "A faire",
      lastExportLabel: "Jamais exporte",
      countLabel: `${exportCount} export`,
      note: "L'autosauvegarde locale aide deja, mais un export JSON dans Fichiers ou iCloud reste la vraie securite si le navigateur se vide.",
      stale: true,
    };
  }

  const exportedTime = new Date(lastExportedAt).getTime();
  if (!Number.isFinite(exportedTime)) {
    return {
      tone: "warn",
      label: "Export recommande",
      shortLabel: "A verifier",
      lastExportLabel: "Date inconnue",
      countLabel: `${exportCount} export${exportCount > 1 ? "s" : ""}`,
      note: "Le dernier export n'a pas pu etre relu correctement. Refais un export pour repartir sur une base saine.",
      stale: true,
    };
  }

  const ageDays = Math.floor((Date.now() - exportedTime) / (24 * 60 * 60 * 1000));
  const countLabel = `${exportCount} export${exportCount > 1 ? "s" : ""}`;

  if (ageDays <= 7) {
    return {
      tone: "ok",
      label: "Export a jour",
      shortLabel: "A jour",
      lastExportLabel: formatDateTimeShort(lastExportedAt),
      countLabel,
      note: "Ta copie externe est recente. Continue simplement a reexporter apres une grosse mise a jour ou une bonne semaine d'entrainement.",
      stale: false,
    };
  }

  if (ageDays <= 14) {
    return {
      tone: "soon",
      label: "Export a actualiser",
      shortLabel: "Bientot",
      lastExportLabel: formatDateTimeShort(lastExportedAt),
      countLabel,
      note: "La sauvegarde existe bien, mais elle commence a dater. Un nouvel export te remettrait a l'abri en cas de souci iPhone ou Safari.",
      stale: true,
    };
  }

  return {
    tone: "warn",
    label: "Export a refaire",
    shortLabel: "Retard",
    lastExportLabel: formatDateTimeShort(lastExportedAt),
    countLabel,
    note: "La derniere copie externe est trop ancienne. Refais un export maintenant pour ne pas perdre tes dernieres seances si l'appareil se vide.",
    stale: true,
  };
}

function getWeeklyCardioMinutes(days = 7) {
  return getRecentCardioSessions(days).reduce((total, entry) => total + entry.duration, 0);
}

function getLatestBodyMetric() {
  return getSortedBodyMetrics()[0] || null;
}

function getPreviousBodyMetric() {
  const metrics = getSortedBodyMetrics();
  return metrics[1] || null;
}

function getSortedBodyMetrics() {
  return state.bodyMetrics
    .slice()
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
}

function getRecentBodyMetrics(days = 30) {
  const now = Date.now();
  const range = days * 24 * 60 * 60 * 1000;
  return getSortedBodyMetrics().filter((entry) => {
    const time = new Date(entry.date).getTime();
    return Number.isFinite(time) && now - time <= range;
  });
}

function sanitizeBodyChartField(value) {
  return BODY_CHART_FIELDS[value] ? value : "weight";
}

function getBodyChartFieldOptions() {
  return Object.values(BODY_CHART_FIELDS);
}

function getBodyProgressChartData(field = state.bodyChartField, limit = 8) {
  const selectedField = sanitizeBodyChartField(field);
  const meta = BODY_CHART_FIELDS[selectedField];
  const height = 160;
  const width = 320;
  const paddingX = 16;
  const paddingTop = 18;
  const paddingBottom = 26;
  const floorY = height - paddingBottom;
  const validEntries = state.bodyMetrics
    .filter((entry) => {
      const value = entry?.[selectedField];
      const time = new Date(entry?.date).getTime();
      return Number.isFinite(value) && Number.isFinite(time);
    })
    .slice()
    .sort((left, right) => new Date(left.date).getTime() - new Date(right.date).getTime())
    .slice(-limit);

  if (validEntries.length < 2) {
    return {
      ready: false,
      selectedField,
      meta,
      entries: validEntries,
      entryCount: validEntries.length,
    };
  }

  const values = validEntries.map((entry) => Number(entry[selectedField]));
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const innerWidth = width - paddingX * 2;
  const innerHeight = height - paddingTop - paddingBottom;
  const range = maxValue - minValue;
  const pointY = (value) =>
    range === 0
      ? paddingTop + innerHeight / 2
      : paddingTop + ((maxValue - value) / range) * innerHeight;
  const pointX = (index) =>
    validEntries.length === 1
      ? width / 2
      : paddingX + (index / (validEntries.length - 1)) * innerWidth;
  const points = validEntries.map((entry, index) => {
    const value = Number(entry[selectedField]);
    return {
      entry,
      value,
      x: Math.round(pointX(index) * 10) / 10,
      y: Math.round(pointY(value) * 10) / 10,
    };
  });
  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
    .join(" ");
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];
  const areaPath = `${linePath} L${lastPoint.x} ${floorY} L${firstPoint.x} ${floorY} Z`;
  const firstEntry = validEntries[0];
  const latestEntry = validEntries[validEntries.length - 1];
  const delta = Math.round((Number(latestEntry[selectedField]) - Number(firstEntry[selectedField])) * 10) / 10;
  const trend = delta > 0 ? "up" : delta < 0 ? "down" : "flat";

  return {
    ready: true,
    selectedField,
    meta,
    entries: validEntries,
    entryCount: validEntries.length,
    latestValue: Number(latestEntry[selectedField]),
    latestValueLabel: formatOptionalMetric(Number(latestEntry[selectedField]), meta.unit),
    latestDate: latestEntry.date,
    firstDate: firstEntry.date,
    delta,
    deltaLabel: delta === 0 ? "Stable" : formatSignedMetric(delta, meta.unit),
    rangeLabel: `${formatOptionalMetric(minValue, meta.unit)} a ${formatOptionalMetric(maxValue, meta.unit)}`,
    trend,
    points,
    linePath,
    areaPath,
    height,
    width,
    floorY,
  };
}

function getBodyMetricTrend(field, days = 28) {
  const now = Date.now();
  const range = days * 24 * 60 * 60 * 1000;
  const parseTime = (entry) => new Date(entry.date).getTime();
  const sortAsc = (left, right) => parseTime(left) - parseTime(right);
  const all = state.bodyMetrics
    .filter((entry) => Number.isFinite(entry?.[field]) && Number.isFinite(parseTime(entry)))
    .slice()
    .sort(sortAsc);

  if (all.length < 2) return null;

  const recent = all.filter((entry) => now - parseTime(entry) <= range);
  const source = recent.length >= 2 ? recent : all;
  const first = source[0];
  const latest = source[source.length - 1];
  const daySpan = Math.max(1, Math.round((parseTime(latest) - parseTime(first)) / (24 * 60 * 60 * 1000)));
  const delta = Math.round((latest[field] - first[field]) * 10) / 10;
  const weeklyRate = Math.round(((delta / daySpan) * 7) * 10) / 10;

  return {
    field,
    first,
    latest,
    delta,
    weeklyRate,
    daySpan,
    count: source.length,
    recentWindow: recent.length >= 2,
  };
}

function getRecentSessionReviews(days = 21) {
  const now = Date.now();
  const range = days * 24 * 60 * 60 * 1000;
  return state.sessionReviews
    .slice()
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime())
    .filter((entry) => {
      const time = new Date(entry.date).getTime();
      return Number.isFinite(time) && now - time <= range;
    });
}

function getLatestSessionReview() {
  return getRecentSessionReviews(3650)[0] || null;
}

function getHistoryOverviewFilterOptions() {
  const historyDays = Array.from(new Set(getSortedHistory().map((item) => item.day)));
  const orderedDays = [];
  const pushDay = (day) => {
    if (!day || orderedDays.includes(day) || !historyDays.includes(day)) return;
    orderedDays.push(day);
  };

  getProgramDayKeys(state.program).forEach(pushDay);
  historyDays.forEach(pushDay);

  return [
    { key: "all", label: "Tous" },
    ...orderedDays.map((day) => ({ key: day, label: day })),
  ];
}

function sanitizeHistoryOverviewFilter(value) {
  const normalized = typeof value === "string" ? value : "all";
  const options = getHistoryOverviewFilterOptions();
  return options.some((item) => item.key === normalized) ? normalized : "all";
}

function getFilteredHistoryOverviewEntries(filter = state.historyOverviewFilter) {
  const activeFilter = sanitizeHistoryOverviewFilter(filter);
  const entries = getSortedHistory();
  if (activeFilter === "all") return entries;
  return entries.filter((entry) => entry.day === activeFilter);
}

function getHistorySectionFilterOptions() {
  return HISTORY_SECTION_FILTERS;
}

function sanitizeHistorySectionFilter(value) {
  const normalized = typeof value === "string" ? value : "all";
  return HISTORY_SECTION_FILTERS.some((item) => item.key === normalized) ? normalized : "all";
}

function shouldRenderHistorySection(section, filter = state.historySectionFilter) {
  const activeFilter = sanitizeHistorySectionFilter(filter);
  return activeFilter === "all" || activeFilter === section;
}

function sanitizeBodySectionFilter(value) {
  const normalized = typeof value === "string" ? value : "entry";
  return BODY_SECTION_FILTERS.some((item) => item.key === normalized) ? normalized : "entry";
}

function shouldRenderBodySection(section, filter = state.bodySectionFilter) {
  return sanitizeBodySectionFilter(filter) === section;
}

function sanitizeWorkoutSectionFilter(value) {
  const normalized = typeof value === "string" ? value : "all";
  return WORKOUT_SECTION_FILTERS.some((item) => item.key === normalized) ? normalized : "all";
}

function shouldRenderWorkoutSection(section, filter = state.workoutSectionFilter) {
  const activeFilter = sanitizeWorkoutSectionFilter(filter);
  return activeFilter === "all" || activeFilter === section;
}

function sanitizeHistoryDetailSectionFilter(value) {
  const normalized = typeof value === "string" ? value : "all";
  return HISTORY_DETAIL_SECTION_FILTERS.some((item) => item.key === normalized) ? normalized : "all";
}

function shouldRenderHistoryDetailSection(section, filter = state.historyDetailSectionFilter) {
  const activeFilter = sanitizeHistoryDetailSectionFilter(filter);
  return activeFilter === "all" || activeFilter === section;
}

function sanitizeProgramEditorSectionFilter(value) {
  const normalized = typeof value === "string" ? value : "all";
  return PROGRAM_EDITOR_SECTION_FILTERS.some((item) => item.key === normalized) ? normalized : "all";
}

function shouldRenderProgramEditorSection(section, filter = state.programEditorSectionFilter) {
  const activeFilter = sanitizeProgramEditorSectionFilter(filter);
  return activeFilter === "all" || activeFilter === section;
}

function formatOptionalMetric(value, unit = "", fallback = "-") {
  if (!Number.isFinite(value)) return fallback;
  return `${formatCompactNumber(value)}${unit}`;
}

function formatSignedMetric(value, unit = "", fallback = "-") {
  if (!Number.isFinite(value)) return fallback;
  if (value === 0) return `0${unit}`;
  return `${value > 0 ? "+" : ""}${formatCompactNumber(value)}${unit}`;
}

function formatMetricDelta(current, previous, unit = "") {
  if (!Number.isFinite(current) || !Number.isFinite(previous)) return "Pas assez de recul";
  const delta = Math.round((current - previous) * 10) / 10;
  if (delta === 0) return "Stable";
  return `${delta > 0 ? "+" : ""}${formatCompactNumber(delta)}${unit}`;
}

function formatBodyTrendDelta(trend, unit = "", fallback = "Pas assez de recul") {
  if (!trend) return fallback;
  if (trend.delta === 0) return "Stable";
  return formatSignedMetric(trend.delta, unit, fallback);
}

function formatBodyTrendRate(trend, unit = "", fallback = "Pas assez de recul") {
  if (!trend) return fallback;
  return `${formatSignedMetric(trend.weeklyRate, unit, "0" + unit)}/sem`;
}

function getCardioEntryMeta(entry) {
  if (!entry) return "";
  const parts = [];
  if (Number.isFinite(entry.speed)) parts.push(`${formatCompactNumber(entry.speed)} km/h`);
  if (Number.isFinite(entry.incline)) parts.push(`${formatCompactNumber(entry.incline)}%`);
  return parts.join(" · ");
}

function getBodyEntryMeta(entry) {
  if (!entry) return "";
  const parts = [];
  if (Number.isFinite(entry.weight)) parts.push(`Poids ${formatOptionalMetric(entry.weight, " kg")}`);
  if (Number.isFinite(entry.waist)) parts.push(`Tour taille ${formatOptionalMetric(entry.waist, " cm")}`);
  if (Number.isFinite(entry.arms)) parts.push(`Bras ${formatOptionalMetric(entry.arms, " cm")}`);
  if (Number.isFinite(entry.thighs)) parts.push(`Cuisses ${formatOptionalMetric(entry.thighs, " cm")}`);
  return parts.join(" · ");
}

function getActiveBodyGoal() {
  const bodyGoal = state.bodyProfile?.goal;
  if (bodyGoal && bodyGoal !== "auto") {
    return bodyGoal;
  }
  if (state.programPlannerGoal && state.programPlannerGoal !== "classic") {
    return state.programPlannerGoal;
  }
  return state.cycle.goal === "strength" ? "muscle-gain" : "toning";
}

function getBodyGoalMeta(goal = getActiveBodyGoal()) {
  const cardioTarget = getWeeklyCardioTarget();
  const goals = {
    "weight-loss": {
      id: "weight-loss",
      label: "Perte de poids",
      shortLabel: "Cut",
      rateTarget: "-0.2 a -0.7 kg/sem",
      priorityLabel: "Poids + tour de taille",
      cadenceLabel: "1 a 3 mesures / semaine",
      successLabel: "On veut voir le poids baisser a un rythme propre et le tour de taille suivre dans le bon sens.",
      entryHint: "Pour perdre du poids, garde surtout le poids et le tour de taille chaque semaine.",
      cardioLabel: `${cardioTarget} min / sem`,
    },
    toning: {
      id: "toning",
      label: "Tonification",
      shortLabel: "Recomp",
      rateTarget: "Stable a -0.3 kg/sem",
      priorityLabel: "Tour de taille + poids + bras/cuisses",
      cadenceLabel: "1 a 2 mesures / semaine",
      successLabel: "On cherche une taille qui descend, avec un poids plutot stable ou legerement en baisse.",
      entryHint: "Pour tonifier, le plus parlant reste le tour de taille avec quelques mensurations simples.",
      cardioLabel: `${cardioTarget} min / sem`,
    },
    "muscle-gain": {
      id: "muscle-gain",
      label: "Prise de muscle",
      shortLabel: "Masse",
      rateTarget: "+0.1 a +0.25 kg/sem",
      priorityLabel: "Poids + bras/cuisses + tour de taille",
      cadenceLabel: "1 a 2 mesures / semaine",
      successLabel: "On veut un poids qui monte lentement, avec bras/cuisses qui progressent et une taille qui reste sage.",
      entryHint: "Pour une prise de masse propre, garde le poids, le tour de taille et au moins bras ou cuisses.",
      cardioLabel: `${cardioTarget} min / sem`,
    },
    wellbeing: {
      id: "wellbeing",
      label: "Bien-etre + marche",
      shortLabel: "Bien-etre",
      rateTarget: "Pas de pression sur la balance",
      priorityLabel: "Regularite + tour de taille + cardio",
      cadenceLabel: "2 a 4 mesures / mois",
      successLabel: "Le plus important ici, c'est la regularite, une taille stable ou en baisse et plus de mouvement sur la semaine.",
      entryHint: "Pour le bien-etre, reste simple: poids, tour de taille et un peu de cardio suffisent largement.",
      cardioLabel: `${cardioTarget} min / sem`,
    },
  };

  return goals[goal] || goals.toning;
}

function getBodyProfileMeta() {
  return sanitizeBodyProfile(state.bodyProfile);
}

function getBodyProfileWeight() {
  const latestWeight = sanitizeDecimalNumber(getLatestBodyMetric()?.weight, null, 20, 400);
  if (Number.isFinite(latestWeight)) return latestWeight;
  return sanitizeDecimalNumber(state.bodyDraft.weight, null, 20, 400);
}

function roundToNearestFive(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.round(value / 5) * 5;
}

function getBodyNutritionSnapshot() {
  const profile = getBodyProfileMeta();
  const goal = getActiveBodyGoal();
  const goalMeta = getBodyGoalMeta(goal);
  const activityMeta = BODY_ACTIVITY_LEVELS[profile.activity] || BODY_ACTIVITY_LEVELS.moderate;
  const weight = getBodyProfileWeight();
  const age = sanitizePositiveInteger(profile.age, null, 16);
  const height = sanitizeDecimalNumber(profile.height, null, 120, 240);

  if (!Number.isFinite(weight) || !Number.isFinite(age) || !Number.isFinite(height)) {
    return {
      ready: false,
      goal,
      goalMeta,
      activityMeta,
      profile,
      missing: [
        !Number.isFinite(weight) ? "poids" : "",
        !Number.isFinite(age) ? "age" : "",
        !Number.isFinite(height) ? "taille" : "",
      ].filter(Boolean),
    };
  }

  const bmr =
    profile.sex === "female"
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 10 * weight + 6.25 * height - 5 * age + 5;
  const maintenanceCalories = roundToNearestFive(bmr * activityMeta.factor);
  const calorieAdjustments = {
    "weight-loss": 0.85,
    toning: 0.92,
    "muscle-gain": 1.08,
    wellbeing: 1,
  };
  const proteinRatios = {
    "weight-loss": 2,
    toning: 1.8,
    "muscle-gain": 1.8,
    wellbeing: 1.6,
  };
  const fatPercents = {
    "weight-loss": 0.3,
    toning: 0.3,
    "muscle-gain": 0.25,
    wellbeing: 0.3,
  };

  const targetCalories = roundToNearestFive(maintenanceCalories * (calorieAdjustments[goal] || 1));
  const proteinPerKg = proteinRatios[goal] || 1.8;
  const proteinGrams = Math.round(weight * proteinPerKg);
  const fatCalories = targetCalories * (fatPercents[goal] || 0.3);
  const fatGrams = Math.max(35, Math.round(fatCalories / 9));
  const carbsCalories = Math.max(0, targetCalories - proteinGrams * 4 - fatGrams * 9);
  const carbsGrams = Math.round(carbsCalories / 4);

  const notes = {
    "weight-loss": "Deficit modere pour descendre sans casser les perfs ni la recup.",
    toning: "Petit deficit propre pour lisser la silhouette sans agressivite inutile.",
    "muscle-gain": "Petit surplus pour monter lentement et garder une taille sage.",
    wellbeing: "Base d'entretien pour bouger mieux et tenir sans pression.",
  };

  return {
    ready: true,
    goal,
    goalMeta,
    activityMeta,
    profile,
    weight,
    age,
    height,
    bmr: roundToNearestFive(bmr),
    maintenanceCalories,
    targetCalories,
    proteinGrams,
    proteinPerKg,
    fatGrams,
    carbsGrams,
    note: notes[goal] || notes.toning,
  };
}

function getPhysiqueCoachSnapshot() {
  const goal = getActiveBodyGoal();
  const goalMeta = getBodyGoalMeta(goal);
  const latest = getLatestBodyMetric();
  const previous = getPreviousBodyMetric();
  const recentMeasures = getRecentBodyMetrics(30);
  const weightTrend = getBodyMetricTrend("weight", 28);
  const waistTrend = getBodyMetricTrend("waist", 28);
  const armsTrend = getBodyMetricTrend("arms", 42);
  const thighsTrend = getBodyMetricTrend("thighs", 42);
  const cardioMinutes = getWeeklyCardioMinutes(7);
  const cardioTarget = getWeeklyCardioTarget();
  const weightStable = !!weightTrend && Math.abs(weightTrend.delta) < 0.6;
  const weightDown = !!weightTrend && weightTrend.delta <= -0.4;
  const waistDown = !!waistTrend && waistTrend.delta <= -0.5;
  const armsUp = !!armsTrend && armsTrend.delta >= 0.3;
  const thighsUp = !!thighsTrend && thighsTrend.delta >= 0.5;
  const weightRate = weightTrend?.weeklyRate ?? null;
  const weightNote = weightTrend
    ? `Poids ${formatBodyTrendDelta(weightTrend, " kg")} sur ${weightTrend.daySpan}j.`
    : "";
  const waistNote = waistTrend
    ? ` Tour taille ${formatBodyTrendDelta(waistTrend, " cm")} sur ${waistTrend.daySpan}j.`
    : "";
  const cardioNote = ` Cardio ${cardioMinutes}/${cardioTarget} min sur 7 jours.`;

  let tone = "hold";
  let headline = latest ? "Base de suivi en place" : "Commence par poser ta base";
  let note = latest
    ? "Garde un rythme simple mais regulier pour lire une vraie tendance."
    : goalMeta.entryHint;

  if (goal === "weight-loss") {
    if (!latest) {
      headline = "Pose ton point de depart";
      note = `${goalMeta.entryHint} Deux mesures suffisent deja pour lire la tendance ensuite.`;
    } else if (waistDown && (weightDown || weightStable)) {
      tone = "progress";
      headline = weightStable ? "Recomposition tres propre" : "Perte de poids dans le bon sens";
      note = `${weightNote}${waistNote}${cardioNote} Continue comme ca.`;
    } else if (Number.isFinite(weightRate) && weightRate < -0.9) {
      tone = "reduce";
      headline = "La baisse semble rapide";
      note = `${weightNote}${waistNote} Si l'energie ou les perfs chutent, ralentis legerement.`;
    } else if (weightTrend?.delta > 0.6 && waistTrend?.delta > 0.6) {
      tone = "reduce";
      headline = "Le suivi monte un peu partout";
      note = `${weightNote}${waistNote}${cardioNote} Revois le rythme global si besoin.`;
    } else if (cardioMinutes < cardioTarget * 0.6) {
      headline = "Bonne base, mais la depense peut monter";
      note = `${weightNote}${waistNote}${cardioNote} Encore un peu plus de marche ferait la difference.`;
    } else {
      headline = "La tendance se construit";
      note = `${weightNote}${waistNote} Encore 2 a 3 semaines de suivi et la lecture sera bien plus nette.`;
    }
  }

  if (goal === "toning") {
    if (!latest) {
      headline = "Pose tes reperes silhouette";
      note = `${goalMeta.entryHint} Un tour de taille par semaine change deja tout pour la lecture.`;
    } else if (waistDown && (weightStable || weightDown)) {
      tone = "progress";
      headline = "Silhouette dans le bon sens";
      note = `${weightNote}${waistNote}${cardioNote} Tres bon signal pour une tonification propre.`;
    } else if ((armsUp || thighsUp) && (!waistTrend || waistTrend.delta <= 0.5)) {
      tone = "progress";
      headline = "Bon signal de recomposition";
      note = `${weightNote}${waistNote} Bras ou cuisses montent sans taille qui s'emballe.`;
    } else if (weightTrend?.delta > 0.7 && waistTrend?.delta > 0.7) {
      tone = "reduce";
      headline = "Ca monte un peu trop partout";
      note = `${weightNote}${waistNote}${cardioNote} Ajuste legerement si ce n'est pas ce que tu veux.`;
    } else {
      headline = "Continue a empiler les mesures";
      note = `${weightNote}${waistNote} On cherche surtout une taille qui descend sur quelques semaines.`;
    }
  }

  if (goal === "muscle-gain") {
    if (!latest) {
      headline = "Pose ta base de prise de masse";
      note = `${goalMeta.entryHint} Avec poids, tour de taille et un bras ou une cuisse, tu lis deja beaucoup de choses.`;
    } else if (Number.isFinite(weightRate) && weightRate >= 0.1 && weightRate <= 0.35 && (!waistTrend || waistTrend.delta <= 1.2)) {
      tone = "progress";
      headline = "Prise de masse propre";
      note = `${weightNote}${waistNote}${cardioNote} Le rythme semble bon sans trop de taille.`;
    } else if ((armsUp || thighsUp) && (!waistTrend || waistTrend.delta <= 1.5)) {
      tone = "progress";
      headline = "Bon signal muscle";
      note = `${weightNote}${waistNote} Les mensurations montent dans le bon sens.`;
    } else if ((Number.isFinite(weightRate) && weightRate > 0.45) || (weightTrend?.delta > 1.5 && waistTrend?.delta > 1.2)) {
      tone = "reduce";
      headline = "Le surplus semble un peu haut";
      note = `${weightNote}${waistNote} Si la taille monte trop vite, garde une prise plus lente.`;
    } else if (weightTrend && weightTrend.delta <= 0) {
      headline = "Le poids bouge peu pour une prise de masse";
      note = `${weightNote}${waistNote}${cardioNote} Attends encore un peu ou revois legerement la strategie.`;
    } else {
      headline = "La tendance a encore besoin de recul";
      note = `${weightNote}${waistNote} On veut surtout une hausse lente et propre.`;
    }
  }

  if (goal === "wellbeing") {
    if (!latest) {
      headline = "Commence simple";
      note = `${goalMeta.entryHint} Une mesure de temps en temps et un peu de marche suffisent pour bien suivre.`;
    } else if (recentMeasures.length >= 2 && cardioMinutes >= cardioTarget * 0.6) {
      tone = "progress";
      headline = "Rythme solide et durable";
      note = `${weightNote}${waistNote}${cardioNote} C'est exactement l'esprit recherche ici.`;
    } else if (cardioMinutes < cardioTarget * 0.6) {
      headline = "Base propre, ajoute juste un peu de marche";
      note = `${weightNote}${waistNote}${cardioNote}`;
    } else {
      headline = "Reste simple et regulier";
      note = `${weightNote}${waistNote} Le plus important est de tenir dans le temps.`;
    }
  }

  return {
    goal,
    goalMeta,
    tone,
    toneLabel:
      tone === "progress" ? "En ligne" : tone === "reduce" ? "Ajuste" : "A suivre",
    latest,
    previous,
    recentMeasuresCount: recentMeasures.length,
    cardioMinutes,
    cardioTarget,
    weightTrend,
    waistTrend,
    armsTrend,
    thighsTrend,
    headline,
    note,
  };
}

function getReviewTone(review) {
  if (!review) return "hold";
  if (review.pain >= 2 || review.energy <= 2) return "reduce";
  if (review.energy >= 4 && review.pain === 0) return "progress";
  return "hold";
}

function updateCardioDraft(field, value) {
  state.cardioDraft = sanitizeCardioDraft({
    ...state.cardioDraft,
    [field]: value,
  });
  saveState();
}

function updateBodyDraft(field, value) {
  state.bodyDraft = sanitizeBodyDraft({
    ...state.bodyDraft,
    [field]: value,
  });
  saveState();
}

function updateBodyProfile(field, value) {
  state.bodyProfile = sanitizeBodyProfile({
    ...state.bodyProfile,
    [field]: value,
  });
  saveState();
}

function updateWorkoutReviewDraft(field, value) {
  state.workoutReviewDraft = sanitizeWorkoutReviewDraft({
    ...state.workoutReviewDraft,
    [field]: value,
  });
  saveState();
}

function saveCardioSession() {
  const entry = sanitizeCardioEntry({
    ...state.cardioDraft,
    date: dateInputValueToIso(state.cardioDraft.date),
  });

  if (!entry) {
    window.alert("Renseigne au moins la duree de la seance cardio.");
    return;
  }

  state.cardioSessions = [entry, ...state.cardioSessions]
    .slice()
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
  state.cardioDraft = createDefaultCardioDraft();
  saveState();
  renderApp();
}

function clearCardioDraft() {
  state.cardioDraft = createDefaultCardioDraft();
  saveState();
  renderApp();
}

function saveBodyMetric() {
  const entry = sanitizeBodyMetricEntry({
    ...state.bodyDraft,
    date: dateInputValueToIso(state.bodyDraft.date),
  });

  if (!entry) {
    window.alert("Ajoute au moins une mesure avant d'enregistrer.");
    return;
  }

  state.bodyMetrics = [entry, ...state.bodyMetrics]
    .slice()
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
  state.bodyDraft = createDefaultBodyDraft();
  saveState();
  renderApp();
}

function clearBodyDraft() {
  state.bodyDraft = createDefaultBodyDraft();
  saveState();
  renderApp();
}

function buildCurrentSessionReview(summary = getWorkoutCompletionSummary()) {
  if (!summary || !state.pendingSession.length) return null;

  return sanitizeSessionReviewEntry({
    day: state.day,
    date: state.pendingSession[state.pendingSession.length - 1]?.date || new Date().toISOString(),
    durationMinutes: getWorkoutDurationMinutes(),
    setCount: summary.setCount,
    exerciseCount: summary.exerciseCount,
    energy: state.workoutReviewDraft.energy,
    pain: state.workoutReviewDraft.pain,
    note: state.workoutReviewDraft.note,
  });
}

function getChartKey(preferredKey = "") {
  return preferredKey || state.selectedChartKey || getHistoryKeys()[0]?.key || getExerciseKey();
}

function getChartEntries(preferredKey = "") {
  const key = getChartKey(preferredKey);
  if (!key) return [];
  return state.history
    .filter((item) => item.key === key)
    .slice(0, 10)
    .reverse();
}

function getChartMetric(entries) {
  return entries.some((item) => isNumericLoad(item.load)) ? "load" : "reps";
}

function getChartData(preferredKey = "") {
  const selectedKey = getChartKey(preferredKey);
  const entries = getChartEntries(selectedKey);
  const metric = getChartMetric(entries);
  const source =
    metric === "load"
      ? entries.filter((item) => isNumericLoad(item.load))
      : entries;

  return {
    metric,
    selectedKey,
    entries: source.map((item) => ({
      ...item,
      shortDate: formatDate(item.date),
      chartValue: metric === "load" ? item.load : item.reps,
    })),
  };
}

function getExerciseChartPriority(series = "") {
  const label = String(series || "").toLowerCase();
  if (label.includes("top set")) return 0;
  if (label.includes("serie 1")) return 1;
  if (label.includes("back-off")) return 2;
  if (label.includes("activation")) return 3;
  return 4;
}

function getPreferredExerciseChartKey(entries = []) {
  const slots = new Map();
  entries.forEach((item) => {
    if (!slots.has(item.key)) {
      slots.set(item.key, {
        key: item.key,
        count: 0,
        hasLoad: false,
        priority: getExerciseChartPriority(item.series),
        lastDate: 0,
      });
    }

    const slot = slots.get(item.key);
    slot.count += 1;
    slot.hasLoad = slot.hasLoad || isNumericLoad(item.load);
    slot.lastDate = Math.max(slot.lastDate, new Date(item.date).getTime() || 0);
  });

  return (
    [...slots.values()].sort(
      (left, right) =>
        left.priority - right.priority ||
        Number(right.hasLoad) - Number(left.hasLoad) ||
        right.count - left.count ||
        right.lastDate - left.lastDate
    )[0]?.key || ""
  );
}

function getDashboardProgressCards(day = state.day, limit = 6) {
  const blocks = getProgramExerciseBlocks(day);

  return blocks
    .map((block) => {
      const candidates = block.entries
        .map((entry) => {
          const key = buildExerciseKey(day, block.exercise, entry.series);
          return {
            key,
            series: entry.series,
            count: state.history.filter((item) => item.key === key).length,
          };
        })
        .filter((item) => item.count > 0)
        .sort(
          (left, right) =>
            getHistorySeriesPriority(left.series) - getHistorySeriesPriority(right.series) ||
            right.count - left.count
        );

      const key = candidates[0]?.key || "";
      if (!key) return null;

      const chart = getChartData(key);
      if (!chart.entries.length) return null;

      const latest = chart.entries[chart.entries.length - 1];
      const first = chart.entries[0];
      const delta = Number(((latest.chartValue || 0) - (first.chartValue || 0)).toFixed(1));
      const threshold = chart.metric === "load" ? 0.5 : 1;
      const trend = delta > threshold ? "up" : delta < -threshold ? "down" : "flat";

      return {
        key,
        exercise: latest.exercise,
        series: latest.series,
        day: latest.day,
        accentDay: resolveDayThemeKey(latest.day),
        metric: chart.metric,
        entryCount: chart.entries.length,
        entries: chart.entries.slice(-6),
        latest,
        first,
        delta,
        trend,
        latestValueLabel: formatChartMetricValue(latest.chartValue, chart.metric),
        deltaLabel:
          trend === "flat"
            ? "Stable"
            : `${delta > 0 ? "+" : ""}${formatChartMetricValue(Math.abs(delta), chart.metric)}`,
      };
    })
    .filter(Boolean)
    .slice(0, limit);
}

function buildPersistedState() {
  const sanitizedProgram = sanitizeProgram(state.program);
  const sanitizedCycle = sanitizeCycle(state.cycle);
  const sanitizedTimer = sanitizeTimerState(state.timer);
  const sanitizedPendingSession = sanitizePendingSessionEntries(state.pendingSession);
  const sanitizedHistory = sanitizeHistoryEntries(state.history);
  const sanitizedExerciseData = sanitizeExerciseDataMap(state.exerciseData);
  const sanitizedCardioSessions = sanitizeCardioEntries(state.cardioSessions);
  const sanitizedBodyMetrics = sanitizeBodyMetricEntries(state.bodyMetrics);
  const sanitizedSessionReviews = sanitizeSessionReviewEntries(state.sessionReviews);
  const availableDays = getProgramDayKeys(sanitizedProgram);
  const currentDay = availableDays.includes(state.day) ? state.day : availableDays[0] || "Push";
  const programEditorDay = availableDays.includes(state.programEditorDay)
    ? state.programEditorDay
    : currentDay;

  return {
    schemaVersion: STORAGE_SCHEMA_VERSION,
    restProfileVersion: CURRENT_REST_PROFILE_VERSION,
    savedAt: new Date().toISOString(),
    screen: state.screen,
    program: sanitizedProgram,
    programTemplateId: state.programTemplateId,
    programTemplateTitle: state.programTemplateTitle,
    programEditorDay,
    programPlannerDays: state.programPlannerDays,
    programPlannerGoal: state.programPlannerGoal,
    programPlannerConstraint: state.programPlannerConstraint,
    planSection: state.planSection,
    settingsSection: state.settingsSection,
    cycle: sanitizedCycle,
    exerciseData: sanitizedExerciseData,
    history: sanitizedHistory,
    cardioSessions: sanitizedCardioSessions,
    bodyMetrics: sanitizedBodyMetrics,
    sessionReviews: sanitizedSessionReviews,
    cardioDraft: sanitizeCardioDraft(state.cardioDraft),
    bodyDraft: sanitizeBodyDraft(state.bodyDraft),
    bodyProfile: sanitizeBodyProfile(state.bodyProfile),
    workoutReviewDraft: sanitizeWorkoutReviewDraft(state.workoutReviewDraft),
    day: currentDay,
    currentIndex: state.currentIndex,
    timer: sanitizedTimer,
    timerTotalSeconds: getTimerTotalSeconds(sanitizedTimer, state.timerTotalSeconds),
    restAlertVisible: state.restAlertVisible,
    restSoundEnabled: state.restSoundEnabled,
    restVibrationEnabled: state.restVibrationEnabled,
    rpe: state.rpe,
    repsInput: state.repsInput,
    showPlates: state.showPlates,
    focusWorkoutMode: state.focusWorkoutMode,
    workoutFinished: state.workoutFinished,
    pendingAdvance: state.pendingAdvance,
    timerEndsAt: state.timerEndsAt,
    workoutStartedAt: state.workoutStartedAt,
    pendingSession: sanitizedPendingSession,
    selectedChartKey: state.selectedChartKey,
    historyDetailKey: state.historyDetailKey,
    lastExportedAt: state.storageMeta.lastExportedAt || "",
    backupExportCount: sanitizePositiveInteger(state.storageMeta.exportCount, 0, 0),
    historyOverviewFilter: sanitizeHistoryOverviewFilter(state.historyOverviewFilter),
    historySectionFilter: sanitizeHistorySectionFilter(state.historySectionFilter),
    historyDetailSectionFilter: sanitizeHistoryDetailSectionFilter(state.historyDetailSectionFilter),
    bodySectionFilter: sanitizeBodySectionFilter(state.bodySectionFilter),
    workoutSectionFilter: sanitizeWorkoutSectionFilter(state.workoutSectionFilter),
    programEditorSectionFilter: sanitizeProgramEditorSectionFilter(state.programEditorSectionFilter),
    bodyChartField: sanitizeBodyChartField(state.bodyChartField),
    installHintDismissed: state.installHintDismissed,
    onboardingCompleted: state.onboardingCompleted,
    onboardingStep: state.onboardingStep,
  };
}

function hydrateState(parsed = {}) {
  state.program = sanitizeProgram(parsed.program);
  const inferredMeta = inferProgramTemplateMeta(state.program);
  state.programTemplateId =
    typeof parsed.programTemplateId === "string" ? parsed.programTemplateId : inferredMeta.id;
  state.programTemplateTitle = sanitizePlainText(parsed.programTemplateTitle, inferredMeta.title);
  state.screen = "dashboard";
  state.exerciseData = sanitizeExerciseDataMap(parsed.exerciseData);
  state.history = sanitizeHistoryEntries(parsed.history);
  state.cardioSessions = sanitizeCardioEntries(parsed.cardioSessions);
  state.bodyMetrics = sanitizeBodyMetricEntries(parsed.bodyMetrics);
  state.sessionReviews = sanitizeSessionReviewEntries(parsed.sessionReviews);
  state.cardioDraft = sanitizeCardioDraft(parsed.cardioDraft);
  state.bodyDraft = sanitizeBodyDraft(parsed.bodyDraft);
  state.bodyProfile = sanitizeBodyProfile(parsed.bodyProfile);
  state.workoutReviewDraft = sanitizeWorkoutReviewDraft(parsed.workoutReviewDraft);
  state.cycle = sanitizeCycle(parsed.cycle);
  state.programPlannerGoal = PROGRAM_PLANNER_GOALS[parsed.programPlannerGoal]
    ? parsed.programPlannerGoal
    : "classic";
  state.programPlannerConstraint = PROGRAM_PLANNER_CONSTRAINTS[parsed.programPlannerConstraint]
    ? parsed.programPlannerConstraint
    : "standard";
  state.programPlannerDays = [3, 4, 5, 6].includes(Number(parsed.programPlannerDays))
    ? Number(parsed.programPlannerDays)
    : Math.min(6, Math.max(3, getProgramDays().length || 4));
  if (!getProgramPlannerAvailableDays(state.programPlannerGoal).includes(state.programPlannerDays)) {
    state.programPlannerDays = getRecommendedProgramPlannerDays(state.programPlannerGoal);
  }
  if (isClassicProgramPlannerGoal(state.programPlannerGoal)) {
    state.programPlannerConstraint = "standard";
  }
  state.planSection = typeof parsed.planSection === "string" ? parsed.planSection : "";
  state.settingsSection = typeof parsed.settingsSection === "string" ? parsed.settingsSection : "";
  const fallbackDay = getProgramDays()[0] || "Push";
  state.day = getProgramDays().includes(parsed.day) ? parsed.day : fallbackDay;
  state.programEditorDay = getProgramDays().includes(parsed.programEditorDay)
    ? parsed.programEditorDay
    : state.day;
  state.currentIndex = Math.min(
    parsed.currentIndex || 0,
    Math.max(0, (state.program[state.day] || []).length - 1)
  );
  state.timer = sanitizeTimerState(parsed.timer);
  state.timerTotalSeconds = getTimerTotalSeconds(state.timer, parsed.timerTotalSeconds);
  state.restAlertVisible = Boolean(parsed.restAlertVisible);
  state.restSoundEnabled = parsed.restSoundEnabled ?? true;
  state.restVibrationEnabled = parsed.restVibrationEnabled ?? true;
  state.rpe = parsed.rpe ?? 8;
  state.repsInput = parsed.repsInput || "";
  state.showPlates = Boolean(parsed.showPlates);
  state.focusWorkoutMode = Boolean(parsed.focusWorkoutMode);
  state.workoutFinished = Boolean(parsed.workoutFinished);
  state.pendingAdvance = sanitizePendingAdvance(parsed.pendingAdvance);
  state.timerEndsAt = sanitizeTimestamp(parsed.timerEndsAt);
  state.workoutStartedAt = typeof parsed.workoutStartedAt === "string" ? parsed.workoutStartedAt : "";
  state.pendingSession = sanitizePendingSessionEntries(parsed.pendingSession);
  state.selectedChartKey = parsed.selectedChartKey || "";
  state.historyDetailKey = parsed.historyDetailKey || "";
  state.historyOverviewFilter = sanitizeHistoryOverviewFilter(parsed.historyOverviewFilter);
  state.historySectionFilter = sanitizeHistorySectionFilter(parsed.historySectionFilter);
  state.historyDetailSectionFilter = sanitizeHistoryDetailSectionFilter(parsed.historyDetailSectionFilter);
  state.bodySectionFilter = sanitizeBodySectionFilter(parsed.bodySectionFilter);
  state.workoutSectionFilter = sanitizeWorkoutSectionFilter(parsed.workoutSectionFilter);
  state.programEditorSectionFilter = sanitizeProgramEditorSectionFilter(parsed.programEditorSectionFilter);
  state.bodyChartField = sanitizeBodyChartField(parsed.bodyChartField);
  state.installHintDismissed = Boolean(parsed.installHintDismissed);
  state.onboardingCompleted = Boolean(parsed.onboardingCompleted);
  state.onboardingStep = Math.max(0, Math.min(parsed.onboardingStep || 0, 2));
  state.historyEditor = null;
  ensureHistoryDetailKeyIsValid();
  state.storageMeta.recoveredFromBackup = false;
  state.storageMeta.backupAvailable = Boolean(readStorageItemSafely(STORAGE_BACKUP_KEY));
  state.storageMeta.lastSavedAt = typeof parsed.savedAt === "string" ? parsed.savedAt : "";
  state.storageMeta.lastExportedAt = typeof parsed.lastExportedAt === "string" ? parsed.lastExportedAt : "";
  state.storageMeta.exportCount = sanitizePositiveInteger(parsed.backupExportCount, 0, 0);
  state.storageMeta.saveError = "";

  const savedRestProfileVersion = sanitizePositiveInteger(
    parsed.restProfileVersion,
    1,
    1
  );
  if (savedRestProfileVersion < CURRENT_REST_PROFILE_VERSION) {
    state.program = applyRecommendedRestProfile(state.program);
  }

  if (state.timer.active && state.timerEndsAt > 0) {
    const remainingMs = state.timerEndsAt - Date.now();
    if (remainingMs <= 0) {
      state.timer = { seconds: 0, active: false };
      state.timerTotalSeconds = 0;
      state.timerEndsAt = 0;
      state.restAlertVisible = true;
    } else {
      state.timer.seconds = Math.ceil(remainingMs / 1000);
      state.timerTotalSeconds = getTimerTotalSeconds(state.timer, state.timerTotalSeconds);
    }
  }
}

function saveState() {
  const payload = buildPersistedState();
  const serialized = JSON.stringify(payload);
  let mainSaved = false;
  let backupSaved = false;

  try {
    localStorage.setItem(STORAGE_KEY, serialized);
    mainSaved = true;
  } catch (error) {
    console.error("Erreur sauvegarde locale principale", error);
  }

  try {
    localStorage.setItem(STORAGE_BACKUP_KEY, serialized);
    backupSaved = true;
  } catch (error) {
    console.error("Erreur sauvegarde backup local", error);
  }

  state.storageMeta.lastSavedAt = payload.savedAt;
  state.storageMeta.backupAvailable = backupSaved || Boolean(readStorageItemSafely(STORAGE_BACKUP_KEY));

  if (mainSaved && backupSaved) {
    state.storageMeta.saveError = "";
    return;
  }

  if (mainSaved) {
    state.storageMeta.saveError = "Backup local indisponible";
    return;
  }

  if (backupSaved) {
    state.storageMeta.saveError = "Sauvegarde principale indisponible";
    return;
  }

  state.storageMeta.saveError = "Sauvegarde locale incomplete";
}

function readStorageItemSafely(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`Erreur lecture locale (${key})`, error);
    return null;
  }
}

function restoreState() {
  try {
    const raw = readStorageItemSafely(STORAGE_KEY);
    const backupRaw = readStorageItemSafely(STORAGE_BACKUP_KEY);
    let parsed = null;
    let recoveredFromBackup = false;

    state.storageMeta.backupAvailable = Boolean(backupRaw);

    if (raw) {
      try {
        parsed = JSON.parse(raw);
      } catch (error) {
        console.error("Erreur lecture stockage principal", error);
      }
    }

    if (!parsed && backupRaw) {
      try {
        parsed = JSON.parse(backupRaw);
        recoveredFromBackup = true;
      } catch (error) {
        console.error("Erreur lecture backup local", error);
      }
    }

    if (!parsed) return;

    hydrateState(parsed);
    state.storageMeta.lastSavedAt = typeof parsed.savedAt === "string" ? parsed.savedAt : "";
    state.storageMeta.lastExportedAt = typeof parsed.lastExportedAt === "string" ? parsed.lastExportedAt : "";
    state.storageMeta.exportCount = sanitizePositiveInteger(parsed.backupExportCount, 0, 0);
    state.storageMeta.recoveredFromBackup = recoveredFromBackup;
    state.storageMeta.backupAvailable = true;
    state.storageMeta.saveError = "";
    saveState();
  } catch (error) {
    console.error("Erreur localStorage", error);
    state.storageMeta.saveError = "Lecture locale impossible";
  }
}

function seedPreviewData() {
  if (state.history.length > 0) return;

  const benchKey = buildExerciseKey("Push", "Developpe couche", "Top Set");
  const curlKey = buildExerciseKey("Pull", "Curl poulie", "Serie 1");

  state.history = [
    { key: benchKey, day: "Push", exercise: "Developpe couche", series: "Top Set", kind: "barbell", load: 62.5, loadLabel: "62.5 kg", reps: 6, rpe: 8.5, minReps: 6, maxReps: 8, date: "2026-03-22T18:00:00.000Z" },
    { key: benchKey, day: "Push", exercise: "Developpe couche", series: "Top Set", kind: "barbell", load: 65, loadLabel: "65 kg", reps: 8, rpe: 9, minReps: 6, maxReps: 8, date: "2026-03-29T18:00:00.000Z" },
    { key: benchKey, day: "Push", exercise: "Developpe couche", series: "Top Set", kind: "barbell", load: 67.5, loadLabel: "67.5 kg", reps: 6, rpe: 9, minReps: 6, maxReps: 8, date: "2026-04-05T18:00:00.000Z" },
    { key: curlKey, day: "Pull", exercise: "Curl poulie", series: "Serie 1", kind: "isolation", load: null, loadLabel: "leger", reps: 14, rpe: 8, minReps: 12, maxReps: 12, date: "2026-04-03T18:00:00.000Z" },
  ];

  state.exerciseData[benchKey] = {
    load: 67.5,
    loadLabel: "67.5 kg",
    deload: false,
  };

  if (!state.selectedChartKey) {
    state.selectedChartKey = benchKey;
  }

  saveState();
}

function resetWorkoutState() {
  state.currentIndex = 0;
  state.repsInput = "";
  state.rpe = 8;
  state.workoutReviewDraft = createDefaultWorkoutReviewDraft();
  state.showPlates = false;
  state.timer = { seconds: 0, active: false };
  state.timerTotalSeconds = 0;
  state.timerEndsAt = 0;
  state.workoutFinished = false;
  state.pendingAdvance = null;
  state.workoutStartedAt = "";
  clearScheduledRestSound();
}

function startWorkoutDay(day) {
  if (!getProgramDays().includes(day)) return;
  state.day = day;
  state.pendingSession = [];
  resetWorkoutState();
  state.workoutStartedAt = new Date().toISOString();
  state.screen = "workout";
  saveState();
  renderApp();
}

function scrollWorkoutViewToTop() {
  const repsInput = document.getElementById("reps-input");
  if (repsInput) {
    repsInput.blur();
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    root.scrollTop = 0;
  };

  scrollToTop();
  window.setTimeout(scrollToTop, 140);
}

function scrollDashboardProgressChartIntoView() {
  const chart = document.getElementById("dashboard-progress-chart");
  if (!chart) return;
  chart.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleValidation() {
  const active = getActiveExercise();
  const reps = parseInt(state.repsInput, 10);
  if (!active || Number.isNaN(reps) || reps <= 0) return;
  if (!state.workoutStartedAt) {
    state.workoutStartedAt = new Date().toISOString();
  }

  state.restAlertVisible = false;
  state.pendingSession.push({
    key: getExerciseKey(),
    day: state.day,
    exercise: active.exercise,
    series: active.series,
    kind: active.kind,
    minReps: active.minReps,
    maxReps: active.maxReps,
    target: active.targetLabel,
    load: getCurrentSettings().load,
    loadLabel: getCurrentSettings().loadLabel || active.loadLabel,
    reps,
    rpe: state.rpe,
    rest: active.rest,
    date: new Date().toISOString(),
  });

  const isLastExercise = state.currentIndex >= getExercises().length - 1;
  state.pendingAdvance = null;
  state.timer = isLastExercise
    ? { seconds: 0, active: false }
    : { seconds: active.rest, active: active.rest > 0 };
  state.timerTotalSeconds = isLastExercise ? 0 : active.rest;
  state.timerEndsAt = isLastExercise || active.rest <= 0 ? 0 : getTimerEndTimestamp(active.rest);
  state.repsInput = "";

  if (!isLastExercise && active.rest > 0) {
    scheduleRestSound(active.rest);
  } else {
    clearScheduledRestSound();
  }

  if (isLastExercise) {
    state.workoutFinished = true;
    state.currentIndex = 0;
  } else {
    state.currentIndex += 1;
  }

  saveState();
  renderApp();
  scrollWorkoutViewToTop();
}

function finalizeWorkout() {
  if (!state.pendingSession.length) {
    state.workoutFinished = false;
    state.workoutStartedAt = "";
    state.workoutReviewDraft = createDefaultWorkoutReviewDraft();
    state.screen = "dashboard";
    renderApp();
    return;
  }

  const nextExerciseData = { ...state.exerciseData };
  const summary = getWorkoutCompletionSummary();
  const reviewEntry = buildCurrentSessionReview(summary);

  state.pendingSession.forEach((entry) => {
    nextExerciseData[entry.key] = getNextLoadSettingsFromEntry(entry);
  });

  state.history = [...state.pendingSession.slice().reverse(), ...state.history];
  if (reviewEntry) {
    state.sessionReviews = [reviewEntry, ...state.sessionReviews];
  }
  state.exerciseData = nextExerciseData;
  state.selectedChartKey = state.pendingSession[state.pendingSession.length - 1]?.key || "";
  state.pendingSession = [];
  state.workoutFinished = false;
  state.timerTotalSeconds = 0;
  state.timerEndsAt = 0;
  state.workoutStartedAt = "";
  state.workoutReviewDraft = createDefaultWorkoutReviewDraft();
  state.screen = "dashboard";
  saveState();
  renderApp();
}

function clearAllData() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_BACKUP_KEY);
  state.program = createProgramCopy();
  state.programTemplateId = "ppl-upper-4";
  state.programTemplateTitle = "PPL + Upper";
  state.programEditorDay = "Push";
  state.programEditorReorderMode = false;
  state.programPlannerDays = 4;
  state.programPlannerGoal = "classic";
  state.programPlannerConstraint = "standard";
  state.planSection = "";
  state.settingsSection = "";
  state.cycle = createDefaultCycle();
  state.exerciseData = {};
  state.history = [];
  state.cardioSessions = [];
  state.bodyMetrics = [];
  state.sessionReviews = [];
  state.cardioDraft = createDefaultCardioDraft();
  state.bodyDraft = createDefaultBodyDraft();
  state.bodyProfile = createDefaultBodyProfile();
  state.workoutReviewDraft = createDefaultWorkoutReviewDraft();
  state.pendingSession = [];
  state.selectedChartKey = "";
  state.historyDetailKey = "";
  state.historyOverviewFilter = "all";
  state.bodyChartField = "weight";
  state.installHintDismissed = false;
  state.onboardingCompleted = false;
  state.onboardingStep = 0;
  state.restAlertVisible = false;
  state.pendingAdvance = null;
  state.timer = { seconds: 0, active: false };
  state.timerTotalSeconds = 0;
  state.timerEndsAt = 0;
  state.restSoundEnabled = true;
  state.restVibrationEnabled = true;
  state.focusWorkoutMode = false;
  state.historyEditor = null;
  state.programEntryEditor = null;
  state.storageMeta = {
    lastSavedAt: "",
    lastExportedAt: "",
    exportCount: 0,
    backupAvailable: false,
    recoveredFromBackup: false,
    saveError: "",
  };
  resetWorkoutState();
  state.day = "Push";
  state.screen = "dashboard";
  renderApp();
}

function setHistoryOverviewFilter(filter) {
  state.historyOverviewFilter = sanitizeHistoryOverviewFilter(filter);
  saveState();
  renderApp();
}

function setHistorySectionFilter(filter) {
  state.historySectionFilter = sanitizeHistorySectionFilter(filter);
  saveState();
  renderApp();
}

function openHistorySection(section, options = {}) {
  state.screen = "history";
  state.planSection = "";
  state.settingsSection = "";
  state.historyDetailKey = "";
  state.historySectionFilter = sanitizeHistorySectionFilter(section);
  if (section === "body") {
    state.bodySectionFilter = sanitizeBodySectionFilter(options.bodySection || "entry");
  }
  saveState();
  renderApp();
}

function setHistoryDetailSectionFilter(filter) {
  state.historyDetailSectionFilter = sanitizeHistoryDetailSectionFilter(filter);
  saveState();
  renderApp();
}

function setBodySectionFilter(filter) {
  state.bodySectionFilter = sanitizeBodySectionFilter(filter);
  saveState();
  renderApp();
}

function setWorkoutSectionFilter(filter) {
  state.workoutSectionFilter = sanitizeWorkoutSectionFilter(filter);
  saveState();
  renderApp();
}

function setProgramEditorSectionFilter(filter) {
  state.programEditorSectionFilter = sanitizeProgramEditorSectionFilter(filter);
  saveState();
  renderApp();
}

function setProgramTemplatePreviewDay(day) {
  state.programTemplatePreviewDay = typeof day === "string" ? day : "";
  renderApp();
}

function setBodyChartField(field) {
  state.bodyChartField = sanitizeBodyChartField(field);
  saveState();
  renderApp();
}

function exportBackup() {
  const exportStamp = new Date().toISOString();
  state.storageMeta.lastExportedAt = exportStamp;
  state.storageMeta.exportCount = sanitizePositiveInteger(state.storageMeta.exportCount, 0, 0) + 1;

  const payload = {
    version: STORAGE_SCHEMA_VERSION,
    exportedAt: exportStamp,
    source: "elite-train-iphone",
    data: buildPersistedState(),
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = exportStamp.replace(/[:T]/g, "-").slice(0, 16);

  link.href = url;
  link.download = `elite-train-backup-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 0);
  saveState();
  renderApp();
}

async function importBackupFromFile(file) {
  if (!file) return;

  try {
    const raw = await file.text();
    const parsed = JSON.parse(raw);
    const nextState = parsed?.data && typeof parsed.data === "object" ? parsed.data : parsed;
    const importedState = {
      ...nextState,
      lastExportedAt:
        typeof nextState?.lastExportedAt === "string" && nextState.lastExportedAt
          ? nextState.lastExportedAt
          : typeof parsed?.exportedAt === "string"
            ? parsed.exportedAt
            : "",
      backupExportCount: sanitizePositiveInteger(nextState?.backupExportCount, 1, 0),
    };

    if (!nextState || typeof nextState !== "object") {
      throw new Error("Backup invalide");
    }

    if (!window.confirm("Importer ce backup et remplacer les donnees actuelles ?")) {
      return;
    }

    hydrateState(importedState);
    saveState();
    renderApp();
    window.alert("Backup importe avec succes.");
  } catch (error) {
    window.alert("Impossible d'importer ce backup.");
  }
}

function dismissInstallHint() {
  state.installHintDismissed = true;
  saveState();
  renderApp();
}

function setProgramEditorDay(day) {
  if (!getProgramDays().includes(day)) return;
  state.programEditorDay = day;
  saveState();
  renderApp();
}

function toggleProgramEditorReorderMode() {
  state.programEditorReorderMode = !state.programEditorReorderMode;
  saveState();
  renderApp();
}

function updateProgramEntry(day, index, field, value) {
  const dayEntries = [...(state.program[day] || [])];
  const currentEntry = dayEntries[index];
  if (!currentEntry) return;

  const nextEntry = { ...currentEntry };
  const currentRecommendedRest = getRecommendedRest(currentEntry);

  if (field === "exercise" || field === "series" || field === "loadLabel") {
    nextEntry[field] = sanitizePlainText(value, currentEntry[field]);
  }

  if (field === "kind") {
    nextEntry.kind = ["barbell", "machine", "dumbbell", "isolation"].includes(value)
      ? value
      : currentEntry.kind;
  }

  if (field === "minReps") {
    nextEntry.minReps = sanitizePositiveInteger(value, currentEntry.minReps, 1);
  }

  if (field === "maxReps") {
    nextEntry.maxReps = sanitizePositiveInteger(value, currentEntry.maxReps, 1);
  }

  if (field === "rest") {
    nextEntry.rest = sanitizePositiveInteger(value, currentEntry.rest, 0);
  }

  if (field === "defaultLoad") {
    nextEntry.defaultLoad = sanitizeLoadNumber(value, currentEntry.defaultLoad);
    if (!nextEntry.loadLabel || nextEntry.loadLabel === currentEntry.loadLabel) {
      nextEntry.loadLabel = isNumericLoad(nextEntry.defaultLoad)
        ? `${nextEntry.defaultLoad} kg`
        : "Charge libre";
    }
  }

  const normalizedEntry = normalizeProgramEntry(nextEntry, currentEntry);
  if (
    field !== "rest" &&
    ["exercise", "series", "kind", "minReps", "maxReps"].includes(field) &&
    currentEntry.rest === currentRecommendedRest
  ) {
    normalizedEntry.rest = getRecommendedRest(normalizedEntry);
  }
  dayEntries[index] = normalizedEntry;
  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  migrateExerciseIdentity(day, currentEntry, normalizedEntry);

  saveState();
  renderApp();
}

function createProgramEntryDraft(entry) {
  return {
    exercise: sanitizePlainText(entry.exercise, "Nouvel exercice"),
    series: sanitizePlainText(entry.series, "Serie 1"),
    kind: entry.kind || "isolation",
    minReps: String(entry.minReps ?? 10),
    maxReps: String(entry.maxReps ?? 12),
    rest: String(entry.rest ?? 60),
    defaultLoad: isNumericLoad(entry.defaultLoad) ? String(entry.defaultLoad) : "",
    loadLabel: sanitizePlainText(entry.loadLabel, entry.loadLabel || "Charge libre"),
  };
}

function createNewProgramEntry(day) {
  const nextEntry = normalizeProgramEntry({
    exercise: "Nouvel exercice",
    kind: "isolation",
    series: "Serie 1",
    minReps: 10,
    maxReps: 12,
    rest: 60,
    defaultLoad: null,
    loadLabel: "Charge libre",
  });
  nextEntry.rest = getRecommendedRest(nextEntry);
  return nextEntry;
}

function openProgramEntryEditor(day, index = -1) {
  const dayEntries = state.program[day] || [];
  const entry = index >= 0 ? dayEntries[index] : createNewProgramEntry(day);
  if (!entry) return;

  state.programEntryEditor = {
    day,
    index,
    autoRest: entry.rest === getRecommendedRest(entry),
    presetGroup: getDefaultProgramPresetGroup(day, entry.exercise),
    showAdvanced: index >= 0,
    draft: createProgramEntryDraft(entry),
  };
  state.programEditorDay = day;
  renderApp();
}

function closeProgramEntryEditor() {
  state.programEntryEditor = null;
  renderApp();
}

function updateProgramEntryEditorDraft(field, value) {
  if (!state.programEntryEditor) return;

  if (field === "kind") {
    state.programEntryEditor.draft.kind = ["barbell", "machine", "dumbbell", "isolation"].includes(value)
      ? value
      : state.programEntryEditor.draft.kind;
  } else {
    state.programEntryEditor.draft[field] = value;
  }

  if (state.programEntryEditor.autoRest && ["exercise", "kind", "minReps", "maxReps"].includes(field)) {
    const baseEntry = normalizeProgramEntry(
      {
        exercise: state.programEntryEditor.draft.exercise,
        series: state.programEntryEditor.draft.series,
        kind: state.programEntryEditor.draft.kind,
        minReps: state.programEntryEditor.draft.minReps,
        maxReps: state.programEntryEditor.draft.maxReps,
        rest: state.programEntryEditor.draft.rest,
        defaultLoad: state.programEntryEditor.draft.defaultLoad,
        loadLabel: state.programEntryEditor.draft.loadLabel,
      },
      createNewProgramEntry(state.programEntryEditor.day)
    );
    state.programEntryEditor.draft.rest = String(getRecommendedRest(baseEntry));
  }
}

function setProgramEntryPresetGroup(groupId) {
  if (!state.programEntryEditor) return;

  const nextGroup = getProgramEntryPresets(groupId).length ? groupId : state.programEntryEditor.presetGroup;
  state.programEntryEditor.presetGroup = nextGroup;
  renderApp();
}

function applyProgramEntryPreset(groupId, presetId) {
  if (!state.programEntryEditor) return;

  const preset = getProgramEntryPreset(groupId, presetId);
  if (!preset) return;

  const fallbackEntry = createNewProgramEntry(state.programEntryEditor.day);
  const series = sanitizePlainText(state.programEntryEditor.draft.series, fallbackEntry.series || "Serie 1");
  const nextEntry = normalizeProgramEntry(
    {
      ...preset,
      series,
    },
    fallbackEntry
  );
  nextEntry.rest = getRecommendedRest(nextEntry);

  state.programEntryEditor.presetGroup = groupId;
  state.programEntryEditor.autoRest = true;
  state.programEntryEditor.draft = createProgramEntryDraft(nextEntry);
  renderApp();
}

function toggleProgramEntryAdvanced() {
  if (!state.programEntryEditor) return;

  state.programEntryEditor.showAdvanced = !state.programEntryEditor.showAdvanced;
  renderApp();
}

function getNextSeriesLabelForDuplicate(entry, dayEntries) {
  const patterns = [
    { regex: /^Serie\s+(\d+)$/i, prefix: "Serie " },
    { regex: /^Back-off\s+(\d+)$/i, prefix: "Back-off " },
    { regex: /^Activation(?:\s+(\d+))?$/i, prefix: "Activation " },
    { regex: /^Top Set(?:\s+(\d+))?$/i, prefix: "Top Set " },
  ];

  for (const pattern of patterns) {
    const match = String(entry.series || "").match(pattern.regex);
    if (match) {
      const current = Number(match[1] || 1);
      return `${pattern.prefix}${current + 1}`.trim();
    }
  }

  const nextNumber = dayEntries.filter((item) => item.exercise === entry.exercise).length + 1;
  return `Serie ${nextNumber}`;
}

function duplicateProgramEntry(day, index) {
  const dayEntries = [...(state.program[day] || [])];
  const entry = dayEntries[index];
  if (!entry) return;

  const duplicate = normalizeProgramEntry(
    {
      ...entry,
      series: getNextSeriesLabelForDuplicate(entry, dayEntries),
    },
    entry
  );

  dayEntries.splice(index + 1, 0, duplicate);
  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function bumpProgramEntryRest(day, index, delta) {
  const dayEntries = [...(state.program[day] || [])];
  const entry = dayEntries[index];
  if (!entry) return;

  dayEntries[index] = normalizeProgramEntry(
    {
      ...entry,
      rest: Math.max(0, Number(entry.rest || 0) + Number(delta || 0)),
    },
    entry
  );

  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  saveState();
  renderApp();
}

function saveProgramEntryEditor() {
  if (!state.programEntryEditor) return;

  const { day, index, draft, autoRest } = state.programEntryEditor;
  const dayEntries = [...(state.program[day] || [])];
  const currentEntry = index >= 0 ? dayEntries[index] : null;
  const fallbackEntry = currentEntry || createNewProgramEntry(day);
  const currentRecommendedRest = getRecommendedRest(fallbackEntry);

  const normalizedEntry = normalizeProgramEntry(
    {
      exercise: draft.exercise,
      series: draft.series,
      kind: draft.kind,
      minReps: draft.minReps,
      maxReps: draft.maxReps,
      rest: draft.rest,
      defaultLoad: draft.defaultLoad,
      loadLabel: draft.loadLabel,
    },
    fallbackEntry
  );

  if (autoRest && String(draft.rest).trim() === String(fallbackEntry.rest ?? currentRecommendedRest)) {
    normalizedEntry.rest = getRecommendedRest(normalizedEntry);
  }

  if (index >= 0 && currentEntry) {
    dayEntries[index] = normalizedEntry;
    migrateExerciseIdentity(day, currentEntry, normalizedEntry);
  } else {
    dayEntries.push(normalizedEntry);
  }

  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  state.programEditorDay = day;
  state.programEntryEditor = null;
  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function addProgramEntry(day) {
  openProgramEntryEditor(day, -1);
}

function removeProgramEntry(day, index) {
  const dayEntries = [...(state.program[day] || [])];
  if (!dayEntries[index]) return;

  dayEntries.splice(index, 1);
  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  if (
    state.programEntryEditor &&
    state.programEntryEditor.day === day &&
    state.programEntryEditor.index === index
  ) {
    state.programEntryEditor = null;
  }

  if (state.day === day && state.currentIndex >= dayEntries.length) {
    state.currentIndex = Math.max(0, dayEntries.length - 1);
  }

  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function resetProgram() {
  state.program = createProgramCopy();
  state.programTemplateId = "ppl-upper-4";
  state.programTemplateTitle = "PPL + Upper";
  state.day = getProgramDayKeys(state.program)[0] || "Push";
  state.programEditorDay = state.day;
  state.programEntryEditor = null;
  state.programPlannerDays = 4;
  state.programPlannerGoal = "classic";
  state.programPlannerConstraint = "standard";
  resetWorkoutState();
  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function setProgramPlannerDays(days) {
  if (!getProgramPlannerAvailableDays().includes(Number(days))) return;
  state.programPlannerDays = Number(days);
  state.programTemplatePreviewId = "";
  saveState();
  renderApp();
}

function setProgramPlannerGoal(goal) {
  if (!PROGRAM_PLANNER_GOALS[goal]) return;
  state.programPlannerGoal = goal;
  if (isClassicProgramPlannerGoal(goal)) {
    state.programPlannerConstraint = "standard";
  }
  if (!getProgramPlannerAvailableDays(goal).includes(state.programPlannerDays)) {
    state.programPlannerDays = getRecommendedProgramPlannerDays(goal);
  }
  state.programTemplatePreviewId = "";
  saveState();
  renderApp();
}

function setProgramPlannerConstraint(constraint) {
  if (!PROGRAM_PLANNER_CONSTRAINTS[constraint]) return;
  if (isClassicProgramPlannerGoal()) {
    state.programPlannerConstraint = "standard";
  } else {
    state.programPlannerConstraint = constraint;
  }
  state.programTemplatePreviewId = "";
  saveState();
  renderApp();
}

function openProgramTemplatePreview(templateId) {
  const template = getProgramTemplateById(templateId);
  if (!template) return;
  state.programTemplatePreviewId = templateId;
  state.programTemplatePreviewDay = template.days[0] || "";
  renderApp();
}

function closeProgramTemplatePreview() {
  state.programTemplatePreviewId = "";
  state.programTemplatePreviewDay = "";
  renderApp();
}

function applyProgramTemplate(templateId) {
  const template = getProgramTemplateById(templateId);
  if (!template) return;

  const hasWorkoutInProgress =
    state.pendingSession.length > 0 || state.timer.active || state.workoutFinished;
  if (
    hasWorkoutInProgress &&
    !window.confirm("Appliquer ce programme et effacer la seance en cours ?")
  ) {
    return;
  }

  state.program = createProgramTemplate(templateId);
  state.programTemplateId = template.id;
  state.programTemplateTitle = template.title;
  state.programPlannerDays = template.days.length;
  state.programPlannerGoal = template.goal || "classic";
  state.programPlannerConstraint =
    template.constraint && !isClassicProgramPlannerGoal(template.goal)
      ? template.constraint
      : "standard";
  state.programTemplatePreviewId = "";
  state.programTemplatePreviewDay = "";
  state.programEntryEditor = null;
  state.day = Object.keys(state.program)[0] || "Push";
  state.programEditorDay = state.day;
  state.pendingSession = [];
  resetWorkoutState();
  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function toggleRestPreference(key) {
  state[key] = !state[key];
  if (key === "restSoundEnabled" && state[key]) {
    primeAudioEngine();
  }
  if (key === "restSoundEnabled" && !state[key]) {
    clearScheduledRestSound();
  }
  saveState();
  renderApp();
}

function dismissRestAlert() {
  state.restAlertVisible = false;
  state.pendingAdvance = null;
  saveState();
  renderApp();
}

function extendRest(seconds = 30) {
  state.timer = {
    seconds,
    active: true,
  };
  state.timerTotalSeconds = seconds;
  state.timerEndsAt = getTimerEndTimestamp(seconds);
  state.restAlertVisible = false;
  scheduleRestSound(seconds);
  saveState();
  renderApp();
}

function triggerRestAlert(options = {}) {
  clearScheduledRestSound();
  state.timerTotalSeconds = 0;
  state.restAlertVisible = true;
  playRestSound();
  vibrateRestAlert();
  saveState();
  renderApp();
}

function testRestAlert() {
  triggerRestAlert();
}

function getOnboardingSlides() {
  return [
    {
      label: "Bienvenue",
      title: "ELITE TRAIN sur iPhone",
      text: "Ton carnet d'entrainement, ton timer et ta progression reunis dans une interface simple et propre.",
      points: ["Programme clair", "Rendu premium", "Navigation rapide"],
    },
    {
      label: "Comment ca marche",
      title: "Valide chaque serie en quelques secondes",
      text: "Tu renseignes tes reps, puis l'app enregistre ta serie et te laisse avancer tres vite dans la seance.",
      points: ["Charge cible", "Saisie rapide", "Historique visuel"],
    },
    {
      label: "Installation",
      title: "Ajoute-la a ton ecran d'accueil",
      text: "Ouvre le site dans Safari, touche Partager puis Ajouter a l'ecran d'accueil pour un vrai rendu d'app.",
      points: ["Mode plein ecran", "Acces rapide", "Cache hors ligne"],
    },
  ];
}

function completeOnboarding() {
  state.onboardingCompleted = true;
  state.onboardingStep = 0;
  state.installHintDismissed = true;
  state.screen = "dashboard";
  saveState();
  renderApp();
}

function renderOnboardingOverlay() {
  const slides = getOnboardingSlides();
  const slide = slides[state.onboardingStep] || slides[0];
  const isLast = state.onboardingStep === slides.length - 1;

  return `
    <div class="onboarding-overlay">
      <article class="onboarding-card" data-accent-day="${state.day}">
        <div class="onboarding-card__media"></div>
        <div class="onboarding-card__shade"></div>
        <div class="onboarding-card__content">
          <div class="onboarding-card__top">
            <span class="onboarding-card__label">${slide.label}</span>
            <button class="onboarding-card__skip" data-action="onboarding-skip">
              Passer
            </button>
          </div>

          <div class="onboarding-card__body">
            <div class="onboarding-card__counter">
              ${slides
                .map(
                  (_, index) => `
                    <span class="onboarding-card__dot ${
                      index === state.onboardingStep ? "is-active" : ""
                    }"></span>
                  `
                )
                .join("")}
            </div>
            <h2 class="onboarding-card__title">${slide.title}</h2>
            <p class="onboarding-card__text">${slide.text}</p>
            <div class="onboarding-card__points">
              ${slide.points
                .map(
                  (point) => `
                    <span class="onboarding-card__point">${point}</span>
                  `
                )
                .join("")}
            </div>
          </div>

          <div class="onboarding-card__actions">
            ${
              state.onboardingStep > 0
                ? `
                    <button class="button button--ghost" data-action="onboarding-prev">
                      Retour
                    </button>
                  `
                : `
                    <button class="button button--ghost" data-action="onboarding-skip">
                      Plus tard
                    </button>
                  `
            }
            <button class="button button--primary" data-action="${isLast ? "onboarding-finish" : "onboarding-next"}">
              ${isLast ? "Entrer dans l'app" : "Continuer"}
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function hasWorkoutInProgress() {
  return (
    state.pendingSession.length > 0 ||
    state.currentIndex > 0 ||
    state.workoutFinished ||
    state.timer.seconds > 0 ||
    state.restAlertVisible
  );
}

function updateCurrentLoad(direction) {
  const active = getActiveExercise();
  const key = getExerciseKey();
  const current = getCurrentSettings();
  if (!active || !key || !isNumericLoad(current.load)) return;

  const step = getIncrement(active.kind);
  const minimum = getMinimumLoad(active.kind);
  const base =
    direction === "up"
      ? current.load + step
      : Math.max(minimum, current.load - step);
  const nextLoad = roundToIncrement(base, step, direction === "down" ? "down" : "up");

  state.exerciseData[key] = {
    ...current,
    load: nextLoad,
    loadLabel: `${nextLoad} kg`,
  };

  saveState();
  renderApp();
}

function resetCurrentLoad() {
  const active = getActiveExercise();
  const key = getExerciseKey();
  if (!active || !key) return;

  state.exerciseData[key] = {
    load: active.defaultLoad,
    loadLabel: active.loadLabel,
    deload: false,
  };

  saveState();
  renderApp();
}

function discardWorkoutProgress() {
  state.pendingSession = [];
  resetWorkoutState();
  state.screen = "dashboard";
  saveState();
  renderApp();
}

function renderPendingSessionSummary(compact = false) {
  return "";
}

function getInstallHintHtml() {
  if (state.installHintDismissed) return "";

  return `
    <div class="install-hint">
      <div class="row row-start">
        <div class="stack-sm">
          <strong>Version iPhone</strong>
          <span>
            Quand cette app sera hebergee, ouvre-la dans Safari puis partage
            -> Ajouter a l'ecran d'accueil.
          </span>
        </div>
        <button class="icon-button" data-action="dismiss-install" aria-label="Fermer l'aide">
          OK
        </button>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const chart = getChartData();
  const historyKeys = getHistoryKeys();

  return `
    <section class="stack-md">
      ${getInstallHintHtml()}
      ${renderResumeCard()}

      <article class="surface surface-pad chart-shell">
        <div class="row">
          <div class="label">Progression recente</div>
          <div class="label">${chart.entries.length} points - ${chart.metric === "load" ? "charge" : "reps"}</div>
        </div>

        ${
          historyKeys.length
            ? `
                <select class="select" id="chart-select" aria-label="Choisir un exercice">
                  ${historyKeys
                    .map(
                      (item) => `
                        <option value="${item.key}" ${item.key === chart.selectedKey ? "selected" : ""}>
                          ${item.exercise} - ${item.series}
                        </option>
                      `
                    )
                    .join("")}
                </select>
                <div class="chart-box">${renderChart()}</div>
              `
            : `<div class="chart-box"><div class="chart-empty">Aucune donnee enregistree pour le moment.</div></div>`
        }
      </article>

      <section class="grid-2">
        <article class="surface stat-card">
          <div class="label">Series loggees</div>
          <div class="stat-card__value">${state.history.length}</div>
        </article>
        <article class="surface stat-card">
          <div class="label">Jour actif</div>
          <div class="stat-card__value">${state.day}</div>
        </article>
      </section>

      <section class="day-list">
        ${getProgramDays()
          .map(
            (day) => `
              <button class="day-button" data-day="${day}">
                <div>
                  <div class="day-button__title">${day.toUpperCase()}</div>
                  <div class="muted">${state.program[day].length} exercices</div>
                </div>
                <div class="day-button__arrow">></div>
              </button>
            `
          )
          .join("")}
      </section>
    </section>
  `;
}

function getSessionCount() {
  const sessions = new Set(
    state.history.map((item) => `${item.day}-${getDayKey(item.date)}`)
  );
  return sessions.size;
}

function getRecentSets(days = 7) {
  const now = Date.now();
  const range = days * 24 * 60 * 60 * 1000;
  return state.history.filter((item) => {
    const time = new Date(item.date).getTime();
    return Number.isFinite(time) && now - time <= range;
  }).length;
}

function formatWeekday(date) {
  return new Date(date)
    .toLocaleDateString("fr-FR", { weekday: "short" })
    .replace(".", "")
    .slice(0, 3);
}

function getDayKey(date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getStartOfWeek(date = new Date()) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  const day = value.getDay();
  const delta = day === 0 ? -6 : 1 - day;
  value.setDate(value.getDate() + delta);
  return value;
}

function getWeeklySessionTarget() {
  return Math.max(3, getProgramDays().length || 4);
}

function getWeeklyCardioTarget() {
  const goal = state.programPlannerGoal;
  if (goal === "weight-loss" || goal === "wellbeing") return 150;
  if (goal === "toning") return 90;
  if (goal === "muscle-gain") return 45;
  return 45;
}

function getWeeklyPlanner() {
  const weekStart = getStartOfWeek();
  const todayKey = getDayKey(new Date());
  const workoutCounts = new Map();
  const workoutSeen = new Set();
  const cardioCounts = new Map();
  const cardioMinutes = new Map();

  state.history.forEach((item) => {
    const key = getDayKey(item.date);
    const sessionKey = `${key}__${item.day}`;
    if (workoutSeen.has(sessionKey)) return;
    workoutSeen.add(sessionKey);
    workoutCounts.set(key, (workoutCounts.get(key) || 0) + 1);
  });

  state.cardioSessions.forEach((item) => {
    const key = getDayKey(item.date);
    cardioCounts.set(key, (cardioCounts.get(key) || 0) + 1);
    cardioMinutes.set(key, (cardioMinutes.get(key) || 0) + item.duration);
  });

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    const key = getDayKey(date);
    const workoutCount = workoutCounts.get(key) || 0;
    const cardioCount = cardioCounts.get(key) || 0;
    const minutes = cardioMinutes.get(key) || 0;

    return {
      key,
      label: formatWeekday(date),
      dateLabel: new Date(date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
      }),
      workoutCount,
      cardioCount,
      cardioMinutes: minutes,
      count: workoutCount,
      isToday: key === todayKey,
      isFuture: key > todayKey,
      isDone: workoutCount > 0 || minutes > 0,
    };
  });
}

function getWeeklyPlanStatus() {
  const planner = getWeeklyPlanner();
  const workoutDone = planner.reduce((total, day) => total + day.workoutCount, 0);
  const cardioMinutes = planner.reduce((total, day) => total + day.cardioMinutes, 0);
  const sessionTarget = getWeeklySessionTarget();
  const cardioTarget = getWeeklyCardioTarget();
  const remainingSessions = Math.max(0, sessionTarget - workoutDone);
  const remainingCardio = Math.max(0, cardioTarget - cardioMinutes);
  const nextTrainingDay = getNextTrainingDay();
  const today = planner.find((day) => day.isToday) || null;

  let todayFocus = `Prochaine seance : ${nextTrainingDay}`;
  if (today?.workoutCount > 0 && today?.cardioMinutes > 0) {
    todayFocus = "Aujourd'hui cochee : muscu + cardio";
  } else if (today?.workoutCount > 0) {
    todayFocus =
      remainingCardio > 0
        ? `Aujourd'hui muscu faite · cardio utile : ${remainingCardio} min restants`
        : "Aujourd'hui muscu faite";
  } else if (today?.cardioMinutes > 0) {
    todayFocus =
      remainingSessions > 0
        ? `Aujourd'hui cardio fait · reste ${remainingSessions} seance(s)`
        : "Aujourd'hui cardio coche";
  } else if (remainingSessions > 0) {
    todayFocus = `A faire : ${nextTrainingDay} · ${remainingSessions} seance(s) restantes`;
  } else if (remainingCardio > 0) {
    todayFocus = `A faire : ${remainingCardio} min de cardio cette semaine`;
  }

  return {
    planner,
    workoutDone,
    cardioMinutes,
    sessionTarget,
    cardioTarget,
    remainingSessions,
    remainingCardio,
    todayFocus,
  };
}

function getGlobalRecords(entries = state.history) {
  const numericEntries = entries.filter((item) => isNumericLoad(item.load));
  const heaviest = numericEntries
    .slice()
    .sort((a, b) => (b.load || 0) - (a.load || 0) || b.reps - a.reps)[0] || null;
  const bestReps = entries
    .slice()
    .sort((a, b) => b.reps - a.reps || new Date(b.date).getTime() - new Date(a.date).getTime())[0] || null;

  return { heaviest, bestReps };
}

function getExerciseRecords(limit = 8) {
  const records = new Map();

  state.history.forEach((item) => {
    const current = records.get(item.exercise) || {
      exercise: item.exercise,
      bestLoad: null,
      bestLoadLabel: item.loadLabel,
      bestLoadReps: 0,
      bestReps: 0,
      lastDate: item.date,
      count: 0,
    };

    current.count += 1;
    if (!current.lastDate || new Date(item.date).getTime() > new Date(current.lastDate).getTime()) {
      current.lastDate = item.date;
    }

    if (item.reps > current.bestReps) {
      current.bestReps = item.reps;
    }

    if (
      isNumericLoad(item.load) &&
      (!isNumericLoad(current.bestLoad) ||
        item.load > current.bestLoad ||
        (item.load === current.bestLoad && item.reps > current.bestLoadReps))
    ) {
      current.bestLoad = item.load;
      current.bestLoadLabel = item.loadLabel;
      current.bestLoadReps = item.reps;
    }

    records.set(item.exercise, current);
  });

  return Array.from(records.values())
    .sort(
      (a, b) =>
        b.count - a.count ||
        (isNumericLoad(b.bestLoad) ? b.bestLoad : -1) - (isNumericLoad(a.bestLoad) ? a.bestLoad : -1) ||
        b.bestReps - a.bestReps
    )
    .slice(0, limit);
}

function getHistoryOverviewCards(entries = getSortedHistory()) {
  const cards = new Map();

  entries.forEach((item) => {
    const current = cards.get(item.day) || {
      key: item.day,
      day: item.day,
      bestLoad: null,
      bestLoadLabel: item.loadLabel,
      bestLoadReps: 0,
      bestLoadExercise: "",
      bestReps: 0,
      bestRepsExercise: "",
      lastDate: item.date,
      count: 0,
      exerciseCount: 0,
      slotCount: 0,
      exercises: new Set(),
      slots: new Set(),
    };

    current.count += 1;
    if (!current.lastDate || new Date(item.date).getTime() > new Date(current.lastDate).getTime()) {
      current.lastDate = item.date;
    }

    if (item.reps > current.bestReps) {
      current.bestReps = item.reps;
      current.bestRepsExercise = item.exercise;
    }

    if (
      isNumericLoad(item.load) &&
      (!isNumericLoad(current.bestLoad) ||
        item.load > current.bestLoad ||
        (item.load === current.bestLoad && item.reps > current.bestLoadReps))
    ) {
      current.bestLoad = item.load;
      current.bestLoadLabel = item.loadLabel;
      current.bestLoadReps = item.reps;
      current.bestLoadExercise = item.exercise;
    }

    current.exercises.add(item.exercise);
    current.slots.add(item.key);
    current.exerciseCount = current.exercises.size;
    current.slotCount = current.slots.size;

    cards.set(item.day, current);
  });

  return Array.from(cards.values())
    .map((card) => ({
      ...card,
      exerciseCount: card.exercises.size,
      slotCount: card.slots.size,
    }))
    .sort(
      (left, right) =>
        new Date(right.lastDate).getTime() - new Date(left.lastDate).getTime()
    );
}

function getHistoryDetailEntries(key) {
  return getSortedHistory().filter((item) => item.day === key);
}

function getHistorySeriesPriority(series) {
  const label = String(series || "").toLowerCase();
  if (label.includes("top")) return 0;
  if (label.includes("serie 1")) return 1;
  if (label.includes("back-off")) return 2;
  if (label.includes("activation")) return 3;
  return 4;
}

function getBestLoadEntry(entries) {
  return entries
    .filter((item) => isNumericLoad(item.load))
    .sort((left, right) => (right.load || 0) - (left.load || 0) || right.reps - left.reps)[0] || null;
}

function getBestRepsEntry(entries) {
  return entries
    .slice()
    .sort((left, right) => right.reps - left.reps || (right.load || 0) - (left.load || 0))[0] || null;
}

function getHistoryDetailSlotOptions(day) {
  const slots = new Map();

  getHistoryDetailEntries(day).forEach((item) => {
    const current = slots.get(item.key) || {
      key: item.key,
      day: item.day,
      exercise: item.exercise,
      series: item.series,
      count: 0,
      lastDate: item.date,
    };

    current.count += 1;
    if (!current.lastDate || new Date(item.date).getTime() > new Date(current.lastDate).getTime()) {
      current.lastDate = item.date;
      current.day = item.day;
    }

    slots.set(item.key, current);
  });

  return Array.from(slots.values()).sort(
    (left, right) =>
      left.exercise.localeCompare(right.exercise, "fr", { sensitivity: "base" }) ||
      getHistorySeriesPriority(left.series) - getHistorySeriesPriority(right.series) ||
      new Date(right.lastDate).getTime() - new Date(left.lastDate).getTime()
  );
}

function getPreferredHistoryChartKey(day, preferredKey = "") {
  const slotOptions = getHistoryDetailSlotOptions(day);
  if (!slotOptions.length) return "";

  if (preferredKey && slotOptions.some((item) => item.key === preferredKey)) {
    return preferredKey;
  }

  return slotOptions
    .slice()
    .sort(
      (left, right) =>
        getHistorySeriesPriority(left.series) - getHistorySeriesPriority(right.series) ||
        right.count - left.count ||
        new Date(right.lastDate).getTime() - new Date(left.lastDate).getTime()
    )[0]?.key || slotOptions[0].key;
}

function getHistoryDetailGroups(exercise) {
  const groups = new Map();

  getHistoryDetailEntries(exercise).forEach((item) => {
    const current = groups.get(item.exercise) || {
      key: item.exercise,
      exercise: item.exercise,
      day: item.day,
      lastDate: item.date,
      entries: [],
      slots: new Set(),
    };

    current.entries.push(item);
    current.slots.add(item.key);
    if (!current.lastDate || new Date(item.date).getTime() > new Date(current.lastDate).getTime()) {
      current.lastDate = item.date;
    }

    groups.set(item.exercise, current);
  });

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      slotCount: group.slots.size,
      bestLoadEntry: getBestLoadEntry(group.entries),
      bestRepsEntry: getBestRepsEntry(group.entries),
      slotGroups: getHistoryExerciseSlotGroups(group.entries),
    }))
    .sort(
      (left, right) =>
        new Date(right.lastDate).getTime() - new Date(left.lastDate).getTime() ||
        left.exercise.localeCompare(right.exercise, "fr", { sensitivity: "base" })
    );
}

function getHistoryExerciseSlotGroups(entries) {
  const groups = new Map();

  entries.forEach((item) => {
    const current = groups.get(item.key) || {
      key: item.key,
      day: item.day,
      exercise: item.exercise,
      series: item.series,
      lastDate: item.date,
      entries: [],
    };

    current.entries.push(item);
    if (!current.lastDate || new Date(item.date).getTime() > new Date(current.lastDate).getTime()) {
      current.lastDate = item.date;
    }

    groups.set(item.key, current);
  });

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      bestLoadEntry: getBestLoadEntry(group.entries),
      bestRepsEntry: getBestRepsEntry(group.entries),
    }))
    .sort(
      (left, right) =>
        getHistorySeriesPriority(left.series) - getHistorySeriesPriority(right.series) ||
        new Date(right.lastDate).getTime() - new Date(left.lastDate).getTime()
    );
}

function getCycleGoalLabel(goal) {
  return goal === "strength" ? "Force" : "Hypertrophie";
}

function getCycleBlueprint(goal, length) {
  const hypertrophyPlans = {
    4: [
      { phase: "Base", tone: "hold", focus: "Volume propre", target: "RIR 2", prescription: "Installe les charges de travail et remplis la fourchette sans aller a l'echec." },
      { phase: "Accumulation", tone: "progress", focus: "Plus de reps", target: "RIR 1-2", prescription: "Cherche 1 rep de plus sur les tops sets ou un petit palier si tout est propre." },
      { phase: "Intensification", tone: "progress", focus: "Petit palier", target: "Lourd propre", prescription: "Monte legerement sur les mouvements forts et garde le volume stable." },
      { phase: "Deload", tone: "reduce", focus: "Recuperation", target: "-30% volume", prescription: "Retire 1 a 2 series par exercice ou baisse d'un palier pour relancer le bloc." },
    ],
    6: [
      { phase: "Base", tone: "hold", focus: "Calage", target: "RIR 2", prescription: "Pose tes charges de reference et reste technique sur toutes les series." },
      { phase: "Accumulation 1", tone: "progress", focus: "Reps", target: "Milieu de fourchette", prescription: "Ajoute des reps propres avant de monter la charge." },
      { phase: "Accumulation 2", tone: "progress", focus: "Volume", target: "Haut de fourchette", prescription: "Essaie de valider le haut des reps sur les mouvements principaux." },
      { phase: "Intensification", tone: "progress", focus: "Charge", target: "Petit palier", prescription: "Monte d'un cran sur les tops sets si les validations restent propres." },
      { phase: "Consolidation", tone: "hold", focus: "Verrouillage", target: "Charge tenue", prescription: "Stabilise les nouveaux paliers avant de chercher a remonter." },
      { phase: "Deload", tone: "reduce", focus: "Recup", target: "Volume bas", prescription: "Baisse clairement le volume et garde du jus pour repartir sur un nouveau bloc." },
    ],
    8: [
      { phase: "Base", tone: "hold", focus: "Reference", target: "RIR 2", prescription: "Installe un point de depart propre sur tous les mouvements." },
      { phase: "Accumulation 1", tone: "progress", focus: "Reps", target: "Milieu de fourchette", prescription: "Monte les reps progressivement sans griller la technique." },
      { phase: "Accumulation 2", tone: "progress", focus: "Volume", target: "Haut de fourchette", prescription: "Pousse le volume utile sur les exos prioritaires." },
      { phase: "Build 1", tone: "progress", focus: "Charge", target: "Petit palier", prescription: "Ajoute du poids sur les tops sets validÃ©s." },
      { phase: "Build 2", tone: "progress", focus: "Charge + reps", target: "Solide", prescription: "Essaie de tenir la nouvelle charge avec des reps propres." },
      { phase: "Intensification", tone: "hold", focus: "Stabilite", target: "Lourd propre", prescription: "Freine le volume et verrouille les mouvements forts." },
      { phase: "Pic", tone: "progress", focus: "Validation", target: "Top performance", prescription: "Cherche une grosse seance sans disperser le volume." },
      { phase: "Deload", tone: "reduce", focus: "Recup", target: "Volume bas", prescription: "Deload complet avant de relancer un nouveau cycle." },
    ],
  };

  const strengthPlans = {
    4: [
      { phase: "Technique", tone: "hold", focus: "Barre propre", target: "Qualite", prescription: "Travaille les mouvements forts avec un peu plus de marge et des repos complets." },
      { phase: "Charge", tone: "progress", focus: "Petit palier", target: "RPE controle", prescription: "Ajoute un palier sur les tops sets si la technique tient." },
      { phase: "Intensif", tone: "progress", focus: "Lourd", target: "Top set", prescription: "Priorite aux grosses charges, reduis les accessoires si besoin." },
      { phase: "Deload", tone: "reduce", focus: "Recuperation", target: "Vitesse", prescription: "Baisse franchement la charge et garde seulement des series faciles." },
    ],
    6: [
      { phase: "Base", tone: "hold", focus: "Calage", target: "Vitesse", prescription: "Fixe les charges de reference avec une execution nickel." },
      { phase: "Build 1", tone: "progress", focus: "Charge", target: "Petit palier", prescription: "Monte legerement sur les tops sets validÃ©s." },
      { phase: "Build 2", tone: "progress", focus: "Charge", target: "Top set", prescription: "Continue a charger sans perdre la vitesse de barre." },
      { phase: "Intensification", tone: "hold", focus: "Lourd propre", target: "Bas de fourchette", prescription: "Garde les accessoires simples et concentre-toi sur les mouvements forts." },
      { phase: "Pic", tone: "progress", focus: "Validation", target: "Perf", prescription: "Cherche une grosse validation sur les principaux lifts." },
      { phase: "Deload", tone: "reduce", focus: "Recup", target: "Barre facile", prescription: "Semaine legere pour absorber le bloc et repartir propre." },
    ],
    8: [
      { phase: "Technique", tone: "hold", focus: "Bar path", target: "Qualite", prescription: "Verrouille la technique et les repos sur les lifts principaux." },
      { phase: "Build 1", tone: "progress", focus: "Charge", target: "Petit palier", prescription: "Ajoute du poids progressivement sans te crisper." },
      { phase: "Build 2", tone: "progress", focus: "Charge", target: "Top set", prescription: "Continue la montÃ©e de charge sur les mouvements forts." },
      { phase: "Build 3", tone: "progress", focus: "Charge tenue", target: "Reps bas propres", prescription: "Garde le bas de fourchette avec une execution propre." },
      { phase: "Intensification", tone: "hold", focus: "Nerveux", target: "Repos longs", prescription: "Diminue un peu le volume accessoire pour garder du jus." },
      { phase: "Intensification 2", tone: "hold", focus: "Lourd stable", target: "Top sets", prescription: "Ne cherche pas a tout monter: verrouille les charges lourdes." },
      { phase: "Pic", tone: "progress", focus: "Validation", target: "Meilleure seance", prescription: "Cherche une vraie seance reference sur les lifts du bloc." },
      { phase: "Deload", tone: "reduce", focus: "Recup", target: "Barre rapide", prescription: "Reviens leger et rapide avant de repartir sur un nouveau cycle." },
    ],
  };

  const catalog = goal === "strength" ? strengthPlans : hypertrophyPlans;
  return catalog[length] || hypertrophyPlans[6];
}

function getCycleSnapshot() {
  const cycle = sanitizeCycle(state.cycle);
  const plan = getCycleBlueprint(cycle.goal, cycle.length);
  const current = plan[Math.max(0, Math.min(cycle.week - 1, plan.length - 1))];
  const next = cycle.week < cycle.length ? plan[cycle.week] : null;

  return {
    ...cycle,
    goalLabel: getCycleGoalLabel(cycle.goal),
    progress: Math.round((cycle.week / cycle.length) * 100),
    current,
    next,
    startedLabel: formatDate(cycle.startedAt),
  };
}

function setCycleGoal(goal) {
  state.cycle = sanitizeCycle({
    ...state.cycle,
    goal,
  });
  saveState();
  renderApp();
}

function setCycleLength(length) {
  state.cycle = sanitizeCycle({
    ...state.cycle,
    length: Number(length),
  });
  saveState();
  renderApp();
}

function changeCycleWeek(delta) {
  const nextWeek = Math.max(1, Math.min(state.cycle.length, state.cycle.week + delta));
  state.cycle = sanitizeCycle({
    ...state.cycle,
    week: nextWeek,
  });
  saveState();
  renderApp();
}

function resetCycleBlock() {
  state.cycle = sanitizeCycle({
    ...state.cycle,
    week: 1,
    startedAt: new Date().toISOString(),
  });
  saveState();
  renderApp();
}

function renderCycleSection() {
  const cycle = getCycleSnapshot();

  return `
    <article class="surface surface-pad cycle-shell cycle-shell--${cycle.current.tone}">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Bloc de progression</div>
          <h3 class="section-title dashboard-section-head__title">Semaine ${cycle.week} / ${cycle.length} - ${cycle.current.phase}</h3>
        </div>
        <div class="cycle-badge">${cycle.goalLabel}</div>
      </div>

      <div class="progress-wrap">
        <div class="row">
          <div class="label">Avancement du bloc</div>
          <div class="label">${cycle.progress}%</div>
        </div>
        <div class="progress">
          <div class="progress__fill" style="width:${cycle.progress}%"></div>
        </div>
      </div>

      <div class="cycle-grid">
        <div class="cycle-card">
          <div class="label">Focus</div>
          <div class="cycle-card__value">${cycle.current.focus}</div>
          <div class="cycle-card__meta">${cycle.current.target}</div>
        </div>
        <div class="cycle-card">
          <div class="label">Ensuite</div>
          <div class="cycle-card__value">${cycle.next ? cycle.next.phase : "Fin de bloc"}</div>
          <div class="cycle-card__meta">${cycle.next ? cycle.next.focus : "Relancer un nouveau cycle"}</div>
        </div>
      </div>

      <div class="cycle-note">${cycle.current.prescription}</div>
    </article>
  `;
}

function renderCycleSettings() {
  const cycle = getCycleSnapshot();

  return `
    <article class="surface surface-pad stack-md cycle-settings">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Cycle de progression</div>
          <h3 class="section-title dashboard-section-head__title">Bloc en cours</h3>
        </div>
        <div class="label">Depart ${cycle.startedLabel}</div>
      </div>

      <div class="cycle-settings__summary">
        <span class="cycle-settings__chip">${cycle.goalLabel}</span>
        <span class="cycle-settings__chip">Semaine ${cycle.week}/${cycle.length}</span>
        <span class="cycle-settings__chip">${cycle.current.phase}</span>
      </div>

      <div class="grid-2">
        <div class="field-wrap">
          <label class="label" for="cycle-goal-select">Objectif</label>
          <select id="cycle-goal-select" class="select">
            <option value="hypertrophy" ${cycle.goal === "hypertrophy" ? "selected" : ""}>Hypertrophie</option>
            <option value="strength" ${cycle.goal === "strength" ? "selected" : ""}>Force</option>
          </select>
        </div>

        <div class="field-wrap">
          <label class="label" for="cycle-length-select">Duree</label>
          <select id="cycle-length-select" class="select">
            <option value="4" ${cycle.length === 4 ? "selected" : ""}>4 semaines</option>
            <option value="6" ${cycle.length === 6 ? "selected" : ""}>6 semaines</option>
            <option value="8" ${cycle.length === 8 ? "selected" : ""}>8 semaines</option>
          </select>
        </div>
      </div>

      <div class="cycle-note">${cycle.current.prescription}</div>

      <div class="cycle-settings__actions">
        <button class="button button--ghost" data-action="cycle-prev-week">Semaine -</button>
        <button class="button button--primary" data-action="cycle-next-week">Semaine +</button>
        <button class="button button--ghost" data-action="cycle-reset">Redemarrer bloc</button>
      </div>
    </article>
  `;
}

function getWeeklySessionCount(days = 7) {
  const now = Date.now();
  const range = days * 24 * 60 * 60 * 1000;
  const sessions = new Set();

  state.history.forEach((item) => {
    const time = new Date(item.date).getTime();
    if (Number.isFinite(time) && now - time <= range) {
      sessions.add(`${item.day}-${getDayKey(item.date)}`);
    }
  });

  return sessions.size;
}

function getSortedHistory() {
  return state.history
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getDaySummary(day) {
  const entries = state.program[day] || [];
  return {
    exerciseCount: new Set(entries.map((item) => item.exercise)).size,
    setCount: entries.length,
  };
}

function getDayTheme(day) {
  const accentDay = resolveDayThemeKey(day);
  const themes = {
    Push: {
      subtitle: "Pecs - epaules - triceps",
      cue: "Poussee lourde et propre",
      badge: "Explosif",
      mark: "PSH",
      accentDay: "Push",
    },
    Pull: {
      subtitle: "Dos - biceps - arriere d'epaules",
      cue: "Tirages solides et amplitude",
      badge: "Amplitude",
      mark: "PUL",
      accentDay: "Pull",
    },
    Legs: {
      subtitle: "Quadris - ischios - fessiers",
      cue: "Jambes, gainage et moteur",
      badge: "Moteur",
      mark: "LEG",
      accentDay: "Legs",
    },
    Upper: {
      subtitle: "Haut du corps complet",
      cue: "Equilibre pecs, dos et bras",
      badge: "Equilibre",
      mark: "UPR",
      accentDay: "Upper",
    },
  };

  if (String(day || "").toLowerCase().includes("full")) {
    return {
      ...themes.Upper,
      subtitle: "Corps complet",
      cue: "Frequence, equilibre et progression",
      badge: "Full",
      mark: "FUL",
    };
  }

  if (String(day || "").toLowerCase().includes("lower")) {
    return {
      ...themes.Legs,
      subtitle: "Bas du corps complet",
      cue: "Quadris, ischios et fessiers",
      badge: "Lower",
      mark: "LWR",
    };
  }

  if (String(day || "").toLowerCase().includes("arms")) {
    return {
      ...themes.Upper,
      subtitle: "Bras - delts - finition",
      cue: "Volume propre et congestion",
      badge: "Focus",
      mark: "ARM",
    };
  }

  if (String(day || "").toLowerCase().includes("chest") || String(day || "").toLowerCase().includes("back")) {
    return {
      ...themes.Push,
      subtitle: "Pecs - dos",
      cue: "Gros basiques et densite",
      badge: "Hybride",
      mark: "C/B",
      accentDay: "Push",
    };
  }

  if (String(day || "").toLowerCase().includes("shoulders")) {
    return {
      ...themes.Upper,
      subtitle: "Epaules - bras",
      cue: "Delts pleins et bras propres",
      badge: "Arnold",
      mark: "S/A",
    };
  }

  return themes[accentDay] || {
    subtitle: "Bloc complet",
    cue: "Construis une seance propre",
    badge: "Elite",
    mark: "ET",
    accentDay: "Upper",
  };
}

function getDayAverageRest(day) {
  const entries = state.program[day] || [];
  if (!entries.length) return 0;

  const total = entries.reduce(
    (sum, entry) => sum + sanitizePositiveInteger(entry.rest, 0, 0),
    0
  );

  return Math.round(total / entries.length);
}

function shortenLabel(text, maxLength = 18) {
  const value = String(text || "");
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 3)).trim()}...`;
}

function formatCompactNumber(value) {
  if (!Number.isFinite(value)) return "0";
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? `${rounded}` : `${rounded}`;
}

function getNextTrainingDay() {
  const days = getProgramDays();
  if (!days.length) return state.day;

  const sortedHistory = getSortedHistory();
  if (!sortedHistory.length) {
    return days.includes(state.day) ? state.day : days[0];
  }

  const lastDay = sortedHistory[0]?.day;
  const lastIndex = days.indexOf(lastDay);

  if (lastIndex === -1) {
    return days.includes(state.day) ? state.day : days[0];
  }

  return days[(lastIndex + 1) % days.length];
}

function getSmartResumeData() {
  const days = getProgramDays();
  if (!days.length) return null;

  if (hasWorkoutInProgress()) {
    const active = getActiveExercise();
    const exercises = getExercises();

    return {
      mode: "active",
      day: state.day,
      title: state.workoutFinished ? "Seance a valider" : `Reprendre ${state.day}`,
      subtitle: state.workoutFinished
        ? `${state.pendingSession.length} series a enregistrer`
        : `${Math.min(state.currentIndex + 1, exercises.length)} / ${exercises.length} series`,
      meta: active ? `${active.exercise} - ${active.series}` : "Session en cours",
      progress: getProgressPercent(),
      actionLabel: "Reprendre",
      actionAttrs: `data-action="resume-workout"`,
      secondaryLabel: "Annuler",
      secondaryAttrs: `data-action="discard-workout"`,
    };
  }

  const day = getNextTrainingDay();
  const summary = getDaySummary(day);
  const lastEntry = getSortedHistory().find((item) => item.day === day) || null;

  return {
    mode: "next",
    day,
    title: `Prochaine ${day}`,
    subtitle: `${summary.exerciseCount} exos - ${summary.setCount} series`,
    meta: lastEntry ? `Derniere ${formatDate(lastEntry.date)}` : "Jamais lancee",
    progress: 0,
    actionLabel: `Lancer ${day}`,
    actionAttrs: `data-day="${day}"`,
    secondaryLabel: "Historique",
    secondaryAttrs: `data-screen="history"`,
  };
}

function getTopExerciseInsight() {
  if (!state.history.length) {
    return {
      value: "A venir",
      detail: "Commence une seance pour voir ton exercice cle",
    };
  }

  const counts = new Map();
  state.history.forEach((item) => {
    counts.set(item.exercise, (counts.get(item.exercise) || 0) + 1);
  });

  const [exercise, count] = Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0];

  return {
    value: shortenLabel(exercise, 18),
    detail: `${count} series loggees`,
  };
}

function getTrendInsight() {
  const key = state.selectedChartKey || getHistoryKeys()[0]?.key || "";
  if (!key) {
    return {
      tone: "hold",
      value: "A venir",
      detail: "Ajoute 2 perfs sur le meme exercice",
    };
  }

  const entries = getSortedHistory().filter((item) => item.key === key);

  if (entries.length < 2) {
    return {
      tone: "hold",
      value: "Stable",
      detail: "Encore 1 seance pour lire la tendance",
    };
  }

  const [latest, previous] = entries;
  const useLoad = isNumericLoad(latest.load) && isNumericLoad(previous.load);
  const delta = useLoad ? latest.load - previous.load : latest.reps - previous.reps;

  if (delta > 0) {
    return {
      tone: "progress",
      value: useLoad ? `+${formatCompactNumber(delta)} kg` : `+${delta} reps`,
      detail: `${shortenLabel(latest.exercise, 18)} en hausse`,
    };
  }

  if (delta < 0) {
    return {
      tone: "reduce",
      value: useLoad ? `${formatCompactNumber(delta)} kg` : `${delta} reps`,
      detail: `vs ${formatDate(previous.date)}`,
    };
  }

  return {
    tone: "hold",
    value: "Stable",
    detail: `${shortenLabel(latest.exercise, 18)} tient le rythme`,
  };
}

function getRecentTrainingStreak(days = 7) {
  const planner = getWeeklyPlanner(days).slice().reverse();
  let streak = 0;
  let started = false;

  for (const day of planner) {
    if (!started && day.count === 0) continue;
    if (day.count > 0) {
      started = true;
      streak += 1;
      continue;
    }
    if (started) break;
  }

  return streak;
}

function getLatestSessionEntriesByDay(day) {
  const entries = getSortedHistory().filter((item) => item.day === day);
  if (!entries.length) return [];

  const latestKey = getDayKey(entries[0].date);
  return entries.filter((item) => item.day === day && getDayKey(item.date) === latestKey);
}

function pickCoachFocusEntry(day) {
  const entries = getLatestSessionEntriesByDay(day);
  return (
    entries.find((item) => String(item.series || "").toLowerCase().includes("top set")) ||
    entries.find((item) => isNumericLoad(item.load)) ||
    entries[0] ||
    getSortedHistory().find((item) => item.day === day) ||
    null
  );
}

function getStagnationInsight(key) {
  const entries = getSortedHistory().filter((item) => item.key === key).slice(0, 3);
  if (entries.length < 3) {
    return {
      stalled: false,
      label: "Peu de recul",
      detail: "Encore 1 a 2 seances pour lire une vraie tendance",
    };
  }

  const reps = entries.map((item) => item.reps);
  const repSpread = Math.max(...reps) - Math.min(...reps);
  const allNumeric = entries.every((item) => isNumericLoad(item.load));

  if (allNumeric) {
    const sameLoad = entries.every((item) => item.load === entries[0].load);
    const bestReps = Math.max(...reps);

    if (sameLoad && repSpread <= 1 && bestReps < entries[0].maxReps) {
      return {
        stalled: true,
        label: "Stagnation",
        detail: "Meme charge et presque le meme score sur 3 seances",
      };
    }
  }

  if (repSpread === 0) {
    return {
      stalled: true,
      label: "Stagnation",
      detail: "Le score reps ne bouge plus depuis 3 passages",
    };
  }

  return {
    stalled: false,
    label: "Ca bouge",
    detail: "Les derniers passages montrent encore du mouvement",
  };
}

function getHoursSinceLatestSession(day = "") {
  const entries = day
    ? getSortedHistory().filter((item) => item.day === day)
    : getSortedHistory();
  const latestEntry = entries[0];
  if (!latestEntry) return null;

  const latestTime = new Date(latestEntry.date).getTime();
  if (!Number.isFinite(latestTime)) return null;

  return Math.max(0, (Date.now() - latestTime) / (1000 * 60 * 60));
}

function formatRecoveryGap(hours) {
  if (!Number.isFinite(hours)) return "pas encore de recul";
  if (hours < 24) return `${Math.max(1, Math.round(hours))} h`;
  return `${Math.max(1, Math.round(hours / 24))} j`;
}

function getFatigueProfile(day = "") {
  if (!state.history.length) {
    return {
      score: 0,
      label: "Depart",
      tone: "hold",
      detail: "Commence a logger pour affiner les recommandations",
      weeklySessions: 0,
      recentSets: 0,
      reduceSignals: 0,
      streak: 0,
      lastWorkoutHours: null,
      sameDayHours: null,
      lowEnergySignals: 0,
      painSignals: 0,
    };
  }

  const recentEntries = getSortedHistory().slice(0, 12);
  const recentReviews = getRecentSessionReviews(21);
  const weeklySessions = getWeeklySessionCount(7);
  const recentSets = getRecentSets(7);
  const reduceSignals = recentEntries.filter(
    (entry) => getAdvice(entry.reps, entry.minReps, entry.maxReps, entry.rpe).type === "reduce"
  ).length;
  const lowEnergySignals = recentReviews.filter((entry) => entry.energy <= 2).length;
  const painSignals = recentReviews.filter((entry) => entry.pain >= 2).length;
  const streak = getRecentTrainingStreak(7);
  const lastWorkoutHours = getHoursSinceLatestSession();
  const sameDayHours = day ? getHoursSinceLatestSession(day) : null;

  let score = 0;
  if (weeklySessions >= 5) score += 2;
  else if (weeklySessions >= 4) score += 1;
  if (recentSets >= 24) score += 2;
  else if (recentSets >= 18) score += 1;
  if (reduceSignals >= 3) score += 2;
  else if (reduceSignals >= 2) score += 1;
  if (lowEnergySignals >= 2) score += 1;
  if (painSignals >= 2) score += 2;
  else if (painSignals >= 1) score += 1;
  if (streak >= 3) score += 1;
  if (Number.isFinite(lastWorkoutHours) && lastWorkoutHours < 24) score += 1;
  if (Number.isFinite(sameDayHours) && sameDayHours < 72) score += 1;

  const reviewSignalText =
    painSignals >= 2
      ? " avec douleur recurrente"
      : lowEnergySignals >= 2
      ? " avec energie basse recente"
      : "";

  if (score >= 6) {
    return {
      score,
      label: "Deload",
      tone: "reduce",
      detail: `Volume charge, marge basse et recup courte sur les derniers jours${reviewSignalText}`,
      weeklySessions,
      recentSets,
      reduceSignals,
      streak,
      lastWorkoutHours,
      sameDayHours,
      lowEnergySignals,
      painSignals,
    };
  }

  if (score >= 3) {
    return {
      score,
      label: "A surveiller",
      tone: "hold",
      detail: `Garde de la marge sur les gros mouvements et surveille la recup${reviewSignalText}`,
      weeklySessions,
      recentSets,
      reduceSignals,
      streak,
      lastWorkoutHours,
      sameDayHours,
      lowEnergySignals,
      painSignals,
    };
  }

  return {
    score,
    label: "Frais",
    tone: "progress",
    detail: "Bonne fenetre pour pousser si la technique reste propre",
    weeklySessions,
    recentSets,
    reduceSignals,
    streak,
    lastWorkoutHours,
    sameDayHours,
    lowEnergySignals,
    painSignals,
  };
}

function getRecoveryProfile(day, fatigue = getFatigueProfile(day)) {
  if (!state.history.length) {
    return {
      score: 0,
      label: "Depart",
      tone: "hold",
      value: "A lancer",
      meta: "2 a 3 seances suffisent pour lire ta recup",
    };
  }

  const lastWorkoutGap = formatRecoveryGap(fatigue.lastWorkoutHours);
  const sameDayGap = Number.isFinite(fatigue.sameDayHours)
    ? formatRecoveryGap(fatigue.sameDayHours)
    : "nouveau bloc";

  if (Number.isFinite(fatigue.lastWorkoutHours) && fatigue.lastWorkoutHours < 18) {
    return {
      score: 2,
      label: "Courte",
      tone: "reduce",
      value: "Courte",
      meta: `Derniere seance il y a ${lastWorkoutGap} · ${day} revu il y a ${sameDayGap}`,
    };
  }

  if (
    (Number.isFinite(fatigue.lastWorkoutHours) && fatigue.lastWorkoutHours < 36) ||
    (Number.isFinite(fatigue.sameDayHours) && fatigue.sameDayHours < 72)
  ) {
    return {
      score: 1,
      label: "Moyenne",
      tone: "hold",
      value: "Correcte",
      meta: `Derniere seance il y a ${lastWorkoutGap} · ${day} revu il y a ${sameDayGap}`,
    };
  }

  return {
    score: 0,
    label: "Bonne",
    tone: "progress",
    value: "Bonne",
    meta: `Derniere seance il y a ${lastWorkoutGap} · ${day} revu il y a ${sameDayGap}`,
  };
}

function getDeloadRecommendation(day, cycle, fatigue, recovery, stagnation, focusAdvice) {
  if (cycle.current.tone === "reduce") {
    return {
      tone: "reduce",
      value: "Planifie",
      meta: cycle.current.prescription,
      recommended: true,
      action: "Deload",
      signal: cycle.current.phase,
      note: `${cycle.current.phase} sur ton bloc ${cycle.goalLabel.toLowerCase()}. ${cycle.current.prescription}`,
    };
  }

  if (fatigue.score >= 6 || (fatigue.reduceSignals >= 2 && recovery.score >= 1)) {
    return {
      tone: "reduce",
      value: "Suggere",
      meta:
        fatigue.painSignals >= 1
          ? `Alleger ${day}, calmer le genou / les douleurs et garder 2 reps de marge`
          : `Alleger ${day} de 1 a 2 series et garder 2 reps de marge`,
      recommended: true,
      action: "Deload",
      signal: "Fatigue",
      note:
        fatigue.painSignals >= 1
          ? `Les derniers ressentis montrent de la douleur ou de la gene. Deload leger sur ${day} et execution plus propre avant de repartir.`
          : `Le volume recent et la recup indiquent qu'un deload leger sur ${day} serait utile pour repartir propre.`,
    };
  }

  if (stagnation?.stalled && focusAdvice?.type === "reduce") {
    return {
      tone: "hold",
      value: "Leger",
      meta: "Une seance plus facile peut suffire avant de relancer",
      recommended: false,
      action: "Baisser",
      signal: "Sous cible",
      note: `Le mouvement focus est sous pression. Fais une seance plus facile ou retire un peu de volume avant de remonter.`,
    };
  }

  return {
    tone: "progress",
    value: "RAS",
    meta: "Continue le bloc si la technique reste propre",
    recommended: false,
    action: "",
    signal: "",
    note: "",
  };
}

function getCoachSnapshot() {
  const resume = getSmartResumeData();
  const day = resume?.day || getNextTrainingDay();
  const cycle = getCycleSnapshot();
  const focusEntry = pickCoachFocusEntry(day);
  const fatigue = getFatigueProfile(day);
  const recovery = getRecoveryProfile(day, fatigue);
  const stagnation = focusEntry ? getStagnationInsight(focusEntry.key) : null;
  const focusAdvice = focusEntry
    ? getAdvice(focusEntry.reps, focusEntry.minReps, focusEntry.maxReps, focusEntry.rpe ?? 8)
    : null;
  const averageRest = getDayAverageRest(day);
  const deloadCall = getDeloadRecommendation(day, cycle, fatigue, recovery, stagnation, focusAdvice);
  const volumeCall =
    deloadCall.recommended
      ? {
          value: "Alleger",
          meta: "Retire 1 a 2 series sur les mouvements qui piquent",
        }
      : fatigue.score >= 3
      ? {
          value: "Stable",
          meta: `${fatigue.recentSets} series sur 7 jours, garde ce volume`,
        }
      : {
          value: "Complet",
          meta: `${fatigue.recentSets} series sur 7 jours, volume plein autorise`,
        };
  const intensityCall =
    deloadCall.recommended
      ? {
          value: "Technique",
          meta: "Reste a 1-2 reps de marge sur les gros exos",
        }
      : focusAdvice?.type === "progress" && fatigue.score <= 1 && recovery.score === 0
      ? {
          value: "Offensif",
          meta: "Tu peux pousser les top sets si la forme reste propre",
        }
      : stagnation?.stalled
      ? {
          value: "Controle",
          meta: "Garde la charge et vole une rep propre",
        }
      : {
          value: "Stable",
          meta: cycle.current.prescription,
        };
  const recoveryCall =
    recovery.score >= 1
      ? {
          value: recovery.value,
          meta: `${recovery.meta} · vise ${averageRest}s de repos`,
        }
      : {
          value: recovery.value,
          meta: `${recovery.meta} · ${averageRest}s de repos moyen`,
        };

  let tone = "hold";
  let action = focusEntry ? "Garder" : "Lancer";
  let signal = focusEntry ? "Routine" : "Reference";
  let note = `Prochaine ${day}: construis une reference propre et reguliere.`;

  if (deloadCall.recommended) {
    tone = deloadCall.tone;
    action = deloadCall.action || "Deload";
    signal = deloadCall.signal || "Fatigue";
    note = deloadCall.note || note;
  } else if (focusEntry && focusAdvice?.type === "reduce") {
    tone = "reduce";
    action = "Baisser";
    signal = "Sous cible";
    note = `${shortenLabel(focusEntry.exercise, 24)} est passe sous la cible. Redescends d'un palier a la prochaine ${day}.`;
  } else if (focusEntry && stagnation?.stalled) {
    tone = "hold";
    action = "Garder";
    signal = "Stagnation";
    note = `${shortenLabel(focusEntry.exercise, 24)} stagne depuis 3 passages. Garde la charge et vise 1 rep propre en plus.`;
  } else if (focusEntry && focusAdvice?.type === "progress" && fatigue.score <= 1) {
    tone = "progress";
    action = "Monter";
    signal = "Progression";
    note = `${shortenLabel(focusEntry.exercise, 24)} valide le haut de fourchette. Monte d'un palier a la prochaine ${day} dans la phase ${cycle.current.phase.toLowerCase()}.`;
  } else if (focusEntry) {
    tone = "hold";
    action = "Garder";
    signal = cycle.current.phase;
    note = `${shortenLabel(focusEntry.exercise, 24)} est globalement propre. ${cycle.current.prescription}`;
  }

  return {
    day,
    tone,
    action,
    readiness: fatigue.label,
    readinessTone: fatigue.tone,
    readinessDetail: fatigue.detail,
    focus: focusEntry ? shortenLabel(focusEntry.exercise, 20) : day,
    focusMeta: focusEntry
      ? `${focusEntry.series} - ${focusEntry.reps} reps au dernier passage`
      : "Pas encore assez de data sur ce bloc",
    signal,
    note,
    cycleLabel: `S${cycle.week}/${cycle.length} - ${cycle.current.phase}`,
    scoreText: `${fatigue.score}/9`,
    streakText: fatigue.streak ? `${fatigue.streak} j d'affilee` : "Streak calme",
    intensityCall,
    volumeCall,
    recoveryCall,
    recoveryLabel: recovery.label,
    deloadCall,
  };
}

function renderPlateView(settings) {
  const plates = calculatePlates(settings.load);
  return `
    <div class="plate-card">
      <div class="plate-stack">
        <div class="plate-stack__bar"></div>
        ${plates
          .map(
            (plate) => `
              <div class="plate ${
                plate >= 20 ? "plate--large" : plate >= 10 ? "plate--medium" : "plate--small"
              }">
                ${plate}
              </div>
            `
          )
          .join("")}
      </div>
      <div class="plate-caption label">Charge : ${formatLoad(settings.load, settings.loadLabel)}</div>
    </div>
  `;
}

function renderProgramEntryEditorOverlay() {
  if (!state.programEntryEditor) return "";

  const { day, index, draft, presetGroup, showAdvanced } = state.programEntryEditor;
  const title = index >= 0 ? "Modifier l'exercice" : "Ajouter un exercice";
  const subtitle = index >= 0 ? `${day} - Exercice ${index + 1}` : `${day} - Nouveau slot`;
  const presetGroups = getProgramEntryPresetGroups(day, draft.exercise);
  const presetOptions = getProgramEntryPresets(presetGroup);

  return `
    <div class="sheet-overlay">
      <article class="sheet-card">
        <div class="sheet-card__head">
          <div>
            <div class="label">Edition rapide</div>
            <h3 class="section-title">${title}</h3>
            <div class="muted">${subtitle}</div>
          </div>
          <button class="icon-button" data-action="close-program-entry-editor" aria-label="Fermer l'edition">
            X
          </button>
        </div>

        ${
          index < 0
            ? `
                <div class="program-preset-shell">
                  <div class="label">Ajout rapide</div>
                  <div class="muted">Choisis un preset puis ajuste seulement ce qui t'interesse.</div>
                  <div class="program-preset-groups">
                    ${presetGroups
                      .map(
                        (group) => `
                          <button
                            class="program-preset-chip ${group.id === presetGroup ? "is-active" : ""}"
                            data-action="select-program-preset-group"
                            data-preset-group="${group.id}"
                          >
                            ${group.label}
                          </button>
                        `
                      )
                      .join("")}
                  </div>
                  <div class="program-preset-grid">
                    ${presetOptions
                      .map(
                        (preset) => `
                          <button
                            class="program-preset-card ${draft.exercise === preset.exercise ? "is-active" : ""}"
                            data-action="apply-program-preset"
                            data-preset-group="${presetGroup}"
                            data-preset-id="${preset.id}"
                          >
                            <span class="program-preset-card__title">${preset.exercise}</span>
                            <span class="program-preset-card__meta">${formatTargetLabelFromRange(preset.minReps, preset.maxReps)} reps - ${getRecommendedRest(preset)}s</span>
                          </button>
                        `
                      )
                      .join("")}
                  </div>
                </div>
              `
            : ""
        }

        <div class="sheet-card__body">
          <div class="field-wrap">
            <label class="label" for="program-editor-exercise">Exercice</label>
            <input id="program-editor-exercise" class="input input--editor" type="text" value="${draft.exercise}" />
          </div>

          <div class="grid-2">
            <div class="field-wrap">
              <label class="label" for="program-editor-series">Serie</label>
              <input id="program-editor-series" class="input input--editor" type="text" value="${draft.series}" />
            </div>
            <div class="field-wrap">
              <label class="label">Repos auto</label>
              <div class="input input--editor input--readonly">${draft.rest}s</div>
            </div>
          </div>

          <div class="grid-2">
            <div class="field-wrap">
              <label class="label" for="program-editor-min-reps">Min reps</label>
              <input id="program-editor-min-reps" class="input input--editor" type="number" min="1" inputmode="numeric" value="${draft.minReps}" />
            </div>
            <div class="field-wrap">
              <label class="label" for="program-editor-max-reps">Max reps</label>
              <input id="program-editor-max-reps" class="input input--editor" type="number" min="1" inputmode="numeric" value="${draft.maxReps}" />
            </div>
          </div>

          <button class="button button--ghost button--compact program-editor-toggle" data-action="toggle-program-entry-advanced">
            ${showAdvanced ? "Masquer les details" : "Plus d'options"}
          </button>

          ${
            showAdvanced
              ? `
                  <div class="program-editor-advanced">
                    <div class="grid-2">
                      <div class="field-wrap">
                        <label class="label" for="program-editor-kind">Type</label>
                        <select id="program-editor-kind" class="select select--editor">
                          <option value="barbell" ${draft.kind === "barbell" ? "selected" : ""}>Barre</option>
                          <option value="machine" ${draft.kind === "machine" ? "selected" : ""}>Machine</option>
                          <option value="dumbbell" ${draft.kind === "dumbbell" ? "selected" : ""}>Halteres</option>
                          <option value="isolation" ${draft.kind === "isolation" ? "selected" : ""}>Isolation</option>
                        </select>
                      </div>
                      <div class="field-wrap">
                        <label class="label" for="program-editor-rest">Repos</label>
                        <input id="program-editor-rest" class="input input--editor" type="number" min="0" inputmode="numeric" value="${draft.rest}" />
                      </div>
                    </div>

                    <div class="grid-2">
                      <div class="field-wrap">
                        <label class="label" for="program-editor-load">Charge dep.</label>
                        <input id="program-editor-load" class="input input--editor" type="number" min="0" step="0.5" inputmode="decimal" value="${draft.defaultLoad}" />
                      </div>
                      <div class="field-wrap">
                        <label class="label" for="program-editor-load-label">Libelle charge</label>
                        <input id="program-editor-load-label" class="input input--editor" type="text" value="${draft.loadLabel}" />
                      </div>
                    </div>
                  </div>
                `
              : ""
          }
        </div>

        <div class="sheet-card__actions">
          <button class="button button--ghost" data-action="close-program-entry-editor">Annuler</button>
          <button class="button button--primary" data-action="save-program-entry">Enregistrer</button>
        </div>
      </article>
    </div>
  `;
}

function getProgramExerciseBlocks(day) {
  const entries = state.program[day] || [];
  const blocks = [];

  entries.forEach((entry, index) => {
    const previousBlock = blocks[blocks.length - 1];
    if (previousBlock && previousBlock.exercise === entry.exercise) {
      previousBlock.entries.push(entry);
      previousBlock.endIndex = index;
      return;
    }

    blocks.push({
      day,
      exercise: entry.exercise,
      startIndex: index,
      endIndex: index,
      entries: [entry],
    });
  });

  return blocks.map((block) => ({
    ...block,
    count: block.entries.length,
    representative: block.entries[0],
    meta: getProgramExerciseBlockMeta(block.entries),
  }));
}

function getProgramExerciseBlockMeta(entries = []) {
  if (!entries.length) return "";

  const targets = [...new Set(entries.map((entry) => entry.targetLabel))];
  const rests = [...new Set(entries.map((entry) => entry.rest))];
  const loads = [...new Set(entries.map((entry) => formatLoad(entry.defaultLoad, entry.loadLabel)))];
  const seriesCount = entries.length;

  if (seriesCount === 1) {
    const entry = entries[0];
    return `${entry.targetLabel} reps - ${entry.rest}s - ${formatLoad(entry.defaultLoad, entry.loadLabel)}`;
  }

  const isMixed = targets.length > 1 || rests.length > 1 || loads.length > 1;
  if (isMixed) {
    return `${seriesCount} series - schema mixte`;
  }

  return `${seriesCount} series - ${targets[0]} reps - ${rests[0]}s - ${loads[0]}`;
}

function getProgramSeriesGroupDefinition(series = "") {
  const raw = sanitizePlainText(series, "Serie");
  const value = raw.toLowerCase();

  if (/^activation(?:\s+\d+)?$/i.test(raw)) {
    return {
      key: "activation",
      label: "Activation",
      createSeriesLabel: (index) => (index <= 1 ? "Activation" : `Activation ${index}`),
    };
  }

  if (/^top set(?:\s+\d+)?$/i.test(raw)) {
    return {
      key: "top-set",
      label: "Top Set",
      createSeriesLabel: (index) => (index <= 1 ? "Top Set" : `Top Set ${index}`),
    };
  }

  if (/^back-?off(?:\s+\d+)?$/i.test(raw)) {
    return {
      key: "back-off",
      label: "Back-off",
      createSeriesLabel: (index) => `Back-off ${index}`,
    };
  }

  if (/^serie\s+\d+$/i.test(raw)) {
    return {
      key: "serie",
      label: "Serie",
      createSeriesLabel: (index) => `Serie ${index}`,
    };
  }

  return {
    key: `custom:${value}`,
    label: raw,
    createSeriesLabel: (index) => (index <= 1 ? raw : `${raw} ${index}`),
  };
}

function getProgramSeriesGroups(block) {
  const groups = [];

  block.entries.forEach((entry, localIndex) => {
    const definition = getProgramSeriesGroupDefinition(entry.series);
    const absoluteIndex = block.startIndex + localIndex;
    const previousGroup = groups[groups.length - 1];

    if (previousGroup && previousGroup.key === definition.key) {
      previousGroup.entries.push(entry);
      previousGroup.endIndex = absoluteIndex;
      return;
    }

    groups.push({
      key: definition.key,
      label: definition.label,
      definition,
      startIndex: absoluteIndex,
      endIndex: absoluteIndex,
      entries: [entry],
    });
  });

  return groups.map((group) => ({
    ...group,
    count: group.entries.length,
    meta: getProgramExerciseBlockMeta(group.entries),
    representative: group.entries[0],
  }));
}

function getProgramExerciseBlock(day, startIndex) {
  return getProgramExerciseBlocks(day).find((block) => block.startIndex === startIndex) || null;
}

function getProgramSeriesGroup(day, blockStartIndex, groupStartIndex) {
  const block = getProgramExerciseBlock(day, blockStartIndex);
  if (!block) return null;
  return getProgramSeriesGroups(block).find((group) => group.startIndex === groupStartIndex) || null;
}

function setProgramBlockSeriesCount(day, startIndex, value) {
  const nextCount = sanitizePositiveInteger(value, 1, 1);
  const dayEntries = [...(state.program[day] || [])];
  const block = getProgramExerciseBlock(day, startIndex);
  if (!block) return;

  const currentCount = block.count;
  if (nextCount === currentCount) return;

  if (nextCount < currentCount) {
    dayEntries.splice(block.startIndex + nextCount, currentCount - nextCount);
  } else {
    let insertIndex = block.endIndex;
    let workingEntries = [...dayEntries];

    for (let iteration = 0; iteration < nextCount - currentCount; iteration += 1) {
      const sourceEntry = workingEntries[insertIndex];
      const duplicate = normalizeProgramEntry(
        {
          ...sourceEntry,
          series: getNextSeriesLabelForDuplicate(sourceEntry, workingEntries),
        },
        sourceEntry
      );
      workingEntries.splice(insertIndex + 1, 0, duplicate);
      insertIndex += 1;
    }

    dayEntries.splice(0, dayEntries.length, ...workingEntries);
  }

  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function setProgramSeriesGroupCount(day, blockStartIndex, groupStartIndex, value) {
  const nextCount = sanitizePositiveInteger(value, 1, 1);
  const dayEntries = [...(state.program[day] || [])];
  const group = getProgramSeriesGroup(day, blockStartIndex, groupStartIndex);
  if (!group) return;

  const currentCount = group.count;
  if (nextCount === currentCount) return;

  if (nextCount < currentCount) {
    dayEntries.splice(group.startIndex + nextCount, currentCount - nextCount);
  } else {
    let insertIndex = group.endIndex;
    let workingEntries = [...dayEntries];

    for (let iteration = 0; iteration < nextCount - currentCount; iteration += 1) {
      const sourceEntry = workingEntries[insertIndex];
      const duplicate = normalizeProgramEntry(
        {
          ...sourceEntry,
          series: group.definition.createSeriesLabel(currentCount + iteration + 1),
        },
        sourceEntry
      );
      workingEntries.splice(insertIndex + 1, 0, duplicate);
      insertIndex += 1;
    }

    dayEntries.splice(0, dayEntries.length, ...workingEntries);
  }

  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function removeProgramBlock(day, startIndex) {
  const block = getProgramExerciseBlock(day, startIndex);
  if (!block) return;

  const dayEntries = [...(state.program[day] || [])];
  dayEntries.splice(block.startIndex, block.count);

  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";

  if (
    state.programEntryEditor &&
    state.programEntryEditor.day === day &&
    state.programEntryEditor.index >= block.startIndex &&
    state.programEntryEditor.index <= block.endIndex
  ) {
    state.programEntryEditor = null;
  }

  if (state.day === day && state.currentIndex >= dayEntries.length) {
    state.currentIndex = Math.max(0, dayEntries.length - 1);
  }

  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function moveProgramBlock(day, startIndex, direction = 0) {
  const nextDirection = Number(direction);
  if (!nextDirection) return;

  const dayEntries = [...(state.program[day] || [])];
  const blocks = getProgramExerciseBlocks(day);
  const currentBlockIndex = blocks.findIndex((block) => block.startIndex === startIndex);
  if (currentBlockIndex < 0) return;

  const targetBlockIndex = currentBlockIndex + nextDirection;
  if (targetBlockIndex < 0 || targetBlockIndex >= blocks.length) return;

  const blockSlices = blocks.map((block) => dayEntries.slice(block.startIndex, block.endIndex + 1));
  const [movingBlock] = blockSlices.splice(currentBlockIndex, 1);
  blockSlices.splice(targetBlockIndex, 0, movingBlock);

  state.program = {
    ...state.program,
    [day]: blockSlices.flat(),
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";

  if (state.programEntryEditor && state.programEntryEditor.day === day) {
    state.programEntryEditor = null;
  }

  ensureSelectedChartKeyIsValid();
  saveState();
  renderApp();
}

function bumpProgramBlockRest(day, startIndex, delta) {
  const block = getProgramExerciseBlock(day, startIndex);
  if (!block) return;

  const dayEntries = [...(state.program[day] || [])];
  for (let index = block.startIndex; index <= block.endIndex; index += 1) {
    const entry = dayEntries[index];
    dayEntries[index] = normalizeProgramEntry(
      {
        ...entry,
        rest: Math.max(0, Number(entry.rest || 0) + Number(delta || 0)),
      },
      entry
    );
  }

  state.program = {
    ...state.program,
    [day]: dayEntries,
  };
  state.programTemplateId = "";
  state.programTemplateTitle = "Programme perso";
  saveState();
  renderApp();
}

function renderProgramEditor() {
  const day = state.programEditorDay;
  const blocks = getProgramExerciseBlocks(day);
  const reorderMode = state.programEditorReorderMode;
  const activeEditorSection = sanitizeProgramEditorSectionFilter(state.programEditorSectionFilter);
  const showExerciseList = shouldRenderProgramEditorSection("exercises", activeEditorSection);
  const showActions = shouldRenderProgramEditorSection("actions", activeEditorSection);

  return `
    <article class="surface surface-pad stack-md program-editor">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Modifier le programme</div>
          <h3 class="section-title dashboard-section-head__title">Edition rapide</h3>
        </div>
        <button class="button button--ghost button--compact" data-action="toggle-program-reorder-mode">
          ${reorderMode ? "Finir" : "Reorganiser"}
        </button>
      </div>

      <div class="program-hint">
        ${
          reorderMode
            ? "Mode reorganisation actif : monte ou descends chaque bloc exercice entier sans casser top set et back-off."
            : "Vue compacte par exercice, avec reglage separe pour Activation, Top Set, Back-off ou Series classiques."
        }
      </div>

      <div class="history-filter-row history-filter-row--compact">
        ${PROGRAM_EDITOR_SECTION_FILTERS
          .map(
            (section) => `
              <button
                class="history-filter-chip ${activeEditorSection === section.key ? "is-active" : ""}"
                data-action="set-program-editor-section-filter"
                data-program-editor-section="${section.key}"
                aria-pressed="${activeEditorSection === section.key ? "true" : "false"}"
              >
                ${section.label}
              </button>
            `
          )
          .join("")}
      </div>

      <div class="program-day-tabs">
        ${getProgramDays()
          .map(
            (programDay) => `
              <button
                class="program-day-tab ${programDay === day ? "is-active" : ""}"
                data-program-day="${programDay}"
              >
                ${programDay}
              </button>
            `
          )
          .join("")}
      </div>

      ${
        showExerciseList
          ? `
            <div class="program-editor-list">
              ${
                blocks.length
                  ? blocks
                      .map(
                        (block, index) => `
                    <article class="surface surface--soft surface-pad program-entry program-entry--compact program-block">
                      <div class="program-entry__head">
                        <div class="stack-sm">
                          <div class="label">Exercice ${index + 1}</div>
                          <div class="program-entry__title">${block.exercise}</div>
                          <div class="program-entry__meta">${block.count} series au total</div>
                        </div>
                        <button
                          class="program-entry__remove"
                          data-action="remove-program-block"
                          data-program-day="${day}"
                          data-program-block-start="${block.startIndex}"
                          aria-label="Supprimer ${block.exercise}"
                        >
                          Suppr
                        </button>
                      </div>

                      ${
                        reorderMode
                          ? `
                              <div class="program-block__reorder">
                                <button
                                  class="button button--ghost button--compact"
                                  data-action="move-program-block"
                                  data-program-day="${day}"
                                  data-program-block-start="${block.startIndex}"
                                  data-move-direction="-1"
                                  ${index === 0 ? "disabled" : ""}
                                >
                                  Monter
                                </button>
                                <button
                                  class="button button--ghost button--compact"
                                  data-action="move-program-block"
                                  data-program-day="${day}"
                                  data-program-block-start="${block.startIndex}"
                                  data-move-direction="1"
                                  ${index === blocks.length - 1 ? "disabled" : ""}
                                >
                                  Descendre
                                </button>
                              </div>
                            `
                          : ""
                      }

                      <div class="program-block__groups">
                        ${getProgramSeriesGroups(block)
                          .map(
                            (group) => `
                              <div class="program-series-group">
                                <div class="stack-sm">
                                  <div class="label">${group.label}</div>
                                  <div class="program-series-group__meta">${group.meta}</div>
                                </div>

                                <div class="program-series-group__actions">
                                  <div class="field-wrap program-block__series">
                                    <label class="label" for="program-group-series-${day}-${group.startIndex}">Series</label>
                                    <input
                                      id="program-group-series-${day}-${group.startIndex}"
                                      class="input input--editor input--series-count"
                                      type="number"
                                      min="1"
                                      inputmode="numeric"
                                      value="${group.count}"
                                      data-program-group-count
                                      data-program-day="${day}"
                                      data-program-block-start="${block.startIndex}"
                                      data-program-group-start="${group.startIndex}"
                                    />
                                  </div>

                                  <button class="button button--ghost button--compact" data-action="open-program-entry-editor" data-program-day="${day}" data-program-index="${group.startIndex}">
                                    Details
                                  </button>
                                </div>
                              </div>
                            `
                          )
                          .join("")}
                      </div>

                      <div class="program-entry__quick-actions">
                        <button class="button button--ghost button--compact" data-action="bump-program-block-rest" data-program-day="${day}" data-program-block-start="${block.startIndex}" data-rest-delta="15">
                          +15s exo
                        </button>
                      </div>
                    </article>
                        `
                      )
                      .join("")
                  : `
                      <article class="surface surface--soft surface-pad">
                        <div class="muted">Aucun exercice sur ce bloc pour le moment.</div>
                      </article>
                    `
              }
            </div>
          `
          : ""
      }

      ${
        showActions
          ? `
            <div class="program-actions">
              <button class="button button--primary" data-action="add-program-entry" data-program-day="${day}">
                Ajouter via preset
              </button>
              <button class="button button--ghost" data-action="reset-program">
                Revenir au programme de base
              </button>
            </div>
          `
          : ""
      }
    </article>
  `;
}

function renderProgramPlanner() {
  const selectedGoal = getProgramPlannerGoalMeta();
  const selectedConstraint = getProgramPlannerConstraintMeta();
  const availableDays = getProgramPlannerAvailableDays(selectedGoal.id);
  const selectedDays = availableDays.includes(state.programPlannerDays)
    ? state.programPlannerDays
    : getRecommendedProgramPlannerDays(selectedGoal.id);
  const templates = getProgramPlannerOptions(
    selectedDays,
    selectedGoal.id,
    state.programPlannerConstraint
  );
  const plannerHint = isClassicProgramPlannerGoal(selectedGoal.id)
    ? "Choisis ton nombre de jours, puis on te propose le split le plus logique avec deux alternatives deja pretes."
    : "Choisis l'objectif, puis le nombre de jours et enfin l'option articulaire si besoin. On te propose un recommande clair et deux alternatives.";

  return `
    <article class="surface surface-pad stack-md program-planner">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Choix du programme</div>
          <h3 class="section-title dashboard-section-head__title">Assistant programme</h3>
        </div>
        <div class="label">${getProgramDays().length} blocs actifs</div>
      </div>

      <div class="planner-goal-grid">
        ${Object.values(PROGRAM_PLANNER_GOALS)
          .map(
            (goal) => `
              <button
                class="planner-goal-card ${selectedGoal.id === goal.id ? "is-active" : ""}"
                data-action="set-program-planner-goal"
                data-program-goal="${goal.id}"
              >
                <span class="planner-goal-card__eyebrow">Objectif</span>
                <span class="planner-goal-card__title">${goal.title}</span>
                <span class="planner-goal-card__meta">${goal.description}</span>
              </button>
            `
          )
          .join("")}
      </div>

      <div class="program-hint">
        ${plannerHint}
      </div>

      <div class="planner-days-tabs">
        ${availableDays
          .map(
            (days) => `
              <button class="program-day-tab ${selectedDays === days ? "is-active" : ""}" data-action="set-program-planner-days" data-program-days="${days}">
                ${days} jours
              </button>
            `
          )
          .join("")}
      </div>

      ${
        isClassicProgramPlannerGoal(selectedGoal.id)
          ? ""
          : `
            <div class="planner-constraint-grid">
              ${Object.values(PROGRAM_PLANNER_CONSTRAINTS)
                .map(
                  (constraint) => `
                    <button
                      class="planner-constraint-card ${selectedConstraint.id === constraint.id ? "is-active" : ""}"
                      data-action="set-program-planner-constraint"
                      data-program-constraint="${constraint.id}"
                    >
                      <span class="planner-constraint-card__title">${constraint.title}</span>
                      <span class="planner-constraint-card__meta">${constraint.description}</span>
                    </button>
                  `
                )
                .join("")}
            </div>
          `
      }

      <div class="template-list">
        ${templates
          .map((template) => `
            <article class="surface surface--soft surface-pad template-card" data-accent-day="${getDayTheme(template.days[0]).accentDay}">
              <div class="template-card__head">
                <div class="stack-sm">
                  <div class="template-card__eyebrow">
                    ${[
                      template.split,
                      template.goal ? getProgramPlannerGoalMeta(template.goal).title : "",
                      template.constraint && template.constraint !== "standard"
                        ? getProgramPlannerConstraintMeta(template.constraint).shortLabel
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                  <div class="template-card__title">${template.title}</div>
                  <div class="template-card__meta">${template.why}</div>
                  ${template.note ? `<div class="template-card__note">${template.note}</div>` : ""}
                </div>
                <span class="pill ${template.split === "Recommande" ? "" : "pill--outline"}">${template.days.length}J</span>
              </div>

              <div class="template-card__days">
                ${template.days.map((day) => `<span class="template-card__chip">${day}</span>`).join("")}
              </div>

              <button class="button ${template.split === "Recommande" ? "button--primary" : "button--ghost"}" data-action="open-program-template-preview" data-template-id="${template.id}">
                Voir les exos
              </button>
            </article>
          `)
          .join("")}
      </div>
    </article>
  `;
}

function renderRestSettings() {
  return `
    <article class="surface surface-pad stack-md">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Alertes de repos</div>
          <h3 class="section-title dashboard-section-head__title">Visuel + sonore</h3>
        </div>
        <div class="label">In-app</div>
      </div>

      <div class="program-hint">
        Quand le repos se termine, l'app affiche une alerte plein ecran, joue un son si possible et vibre sur les appareils compatibles.
      </div>

      <div class="settings-toggle-list">
        <button class="settings-toggle" data-action="toggle-rest-sound">
          <div>
            <div class="settings-toggle__title">Son de fin de repos</div>
            <div class="settings-toggle__meta">Petit chime genere directement dans l'app</div>
          </div>
          <span class="settings-toggle__switch ${state.restSoundEnabled ? "is-on" : ""}">
            ${state.restSoundEnabled ? "ON" : "OFF"}
          </span>
        </button>

        <button class="settings-toggle" data-action="toggle-rest-vibration">
          <div>
            <div class="settings-toggle__title">Vibration</div>
            <div class="settings-toggle__meta">Utilise la vibration si l'iPhone ou le navigateur l'autorise</div>
          </div>
          <span class="settings-toggle__switch ${state.restVibrationEnabled ? "is-on" : ""}">
            ${state.restVibrationEnabled ? "ON" : "OFF"}
          </span>
        </button>
      </div>

      <button class="button button--ghost" data-action="test-rest-alert">
        Tester l'alerte de repos
      </button>
    </article>
  `;
}

function renderRestAlertOverlay() {
  if (!state.restAlertVisible) return "";

  const copy = getRestAlertCopy();

  return `
    <div class="rest-alert-overlay">
      <article class="rest-alert-card">
        <div class="rest-alert-card__pulse"></div>
        <div class="rest-alert-card__content">
          <div class="rest-alert-card__icon">GO</div>
          <div class="stack-sm center-block">
            <div class="label">Repos termine</div>
            <h2 class="section-title rest-alert-card__title">${copy.title}</h2>
            <div class="rest-alert-card__text">${copy.text}</div>
          </div>

          <div class="rest-alert-card__actions">
            <button class="button button--ghost" data-action="extend-rest-30">
              +30s
            </button>
            <button class="button button--primary" data-action="dismiss-rest-alert">
              Continuer
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderStorageConfidenceSection() {
  const lastSavedLabel = formatDateTimeShort(state.storageMeta.lastSavedAt);
  const exportMeta = getBackupExportSnapshot();
  const backupLabel = state.storageMeta.backupAvailable ? "Actif" : "Absent";
  const recoveryLabel = state.storageMeta.recoveredFromBackup ? "Oui" : "Non";
  const healthLabel = state.storageMeta.saveError
    ? "A surveiller"
    : exportMeta.stale
      ? "A completer"
      : "A jour";
  const healthMeta = state.storageMeta.saveError
    ? state.storageMeta.saveError
    : `${exportMeta.note}${state.storageMeta.recoveredFromBackup ? " L'app a deja pu relire la copie locale au chargement." : ""}`;

  return `
    <article class="surface surface-pad stack-md storage-shell">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Confiance</div>
          <h3 class="section-title dashboard-section-head__title">Sauvegarde locale</h3>
        </div>
        <div class="label">Auto</div>
      </div>

      <div class="storage-grid">
        <div class="metric">
          <div class="label">Derniere sauvegarde</div>
          <div class="metric__value metric__value--text">${lastSavedLabel}</div>
        </div>
        <div class="metric">
          <div class="label">Copie de secours</div>
          <div class="metric__value">${backupLabel}</div>
        </div>
        <div class="metric">
          <div class="label">Dernier export</div>
          <div class="metric__value metric__value--text">${exportMeta.lastExportLabel}</div>
        </div>
        <div class="metric">
          <div class="label">Etat</div>
          <div class="metric__value">${healthLabel}</div>
        </div>
      </div>

      <div class="confidence-note">${healthMeta}</div>
      <div class="muted">Exports externes: ${exportMeta.countLabel} · Recuperation locale: ${recoveryLabel}</div>
    </article>
  `;
}

function renderSettingsInstallSection() {
  return `
    <article class="surface surface-pad stack-md settings-group">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Installation iPhone</div>
          <h3 class="section-title dashboard-section-head__title">Installation</h3>
        </div>
        <div class="label">PWA</div>
      </div>
      <div class="install-hint">
        Pour l'avoir sur iPhone :
        <br />
        1. Heberge ce dossier en HTTPS.
        <br />
        2. Ouvre l'URL dans Safari.
        <br />
        3. Partager -> Ajouter a l'ecran d'accueil.
      </div>
      <div class="install-hint">
        Les donnees sont stockees localement sur l'appareil via le navigateur.
      </div>
    </article>
  `;
}

function renderCardioSettingsSection() {
  const recent = getSortedCardioSessions().slice(0, 3);
  const weeklyMinutes = getWeeklyCardioMinutes();
  const latest = recent[0];

  return `
    <section class="stack-md">
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Cardio / tapis</div>
            <h3 class="section-title dashboard-section-head__title">Suivi cardio</h3>
          </div>
          <div class="label">${state.cardioSessions.length} log${state.cardioSessions.length > 1 ? "s" : ""}</div>
        </div>

        <div class="metric-grid">
          <div class="metric">
            <div class="label">7 jours</div>
            <div class="metric__value">${weeklyMinutes} min</div>
          </div>
          <div class="metric">
            <div class="label">Derniere</div>
            <div class="metric__value">${latest ? formatDate(latest.date) : "-"}</div>
          </div>
        </div>

        <div class="muted">Logge une marche tapis ou un cardio simple pour suivre la frequence, la vitesse et l'inclinaison.</div>
      </article>

      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Nouvelle entree</div>
            <h3 class="section-title dashboard-section-head__title">Ajouter un cardio</h3>
          </div>
          <div class="label">Tracking</div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="cardio-type-select">Type</label>
            <select id="cardio-type-select" class="select select--editor">
              ${Object.values(CARDIO_TYPES)
                .map(
                  (item) => `
                    <option value="${item.id}" ${item.id === state.cardioDraft.type ? "selected" : ""}>
                      ${item.title}
                    </option>
                  `
                )
                .join("")}
            </select>
          </div>
          <div class="field-wrap">
            <label class="label" for="cardio-date-input">Date</label>
            <input id="cardio-date-input" class="input input--editor" type="date" value="${state.cardioDraft.date}" />
          </div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="cardio-duration-input">Duree (min)</label>
            <input id="cardio-duration-input" class="input input--editor" type="number" min="1" value="${state.cardioDraft.duration}" placeholder="30" />
          </div>
          <div class="field-wrap">
            <label class="label" for="cardio-speed-input">Vitesse</label>
            <input id="cardio-speed-input" class="input input--editor" type="number" min="0" step="0.1" value="${state.cardioDraft.speed}" placeholder="4.8" />
          </div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="cardio-incline-input">Inclinaison %</label>
            <input id="cardio-incline-input" class="input input--editor" type="number" min="0" step="0.5" value="${state.cardioDraft.incline}" placeholder="6" />
          </div>
          <div class="field-wrap">
            <label class="label" for="cardio-note-input">Note rapide</label>
            <textarea id="cardio-note-input" class="textarea textarea--editor" rows="3" placeholder="Ex: facile, souffle OK, genou nickel">${state.cardioDraft.note}</textarea>
          </div>
        </div>

        <div class="sheet-card__actions">
          <button class="button button--ghost" data-action="clear-cardio-draft">Vider</button>
          <button class="button button--primary" data-action="save-cardio-session">Enregistrer le cardio</button>
        </div>
      </article>

      ${
        recent.length
          ? `
            <article class="surface surface-pad stack-md settings-group">
              <div class="dashboard-section-head">
                <div>
                  <div class="label">Recent</div>
                  <h3 class="section-title dashboard-section-head__title">Dernieres seances cardio</h3>
                </div>
                <div class="label">${recent.length} recente${recent.length > 1 ? "s" : ""}</div>
              </div>

              <div class="pending-list">
                ${recent
                  .map((entry) => {
                    const meta = getCardioEntryMeta(entry);
                    return `
                      <div class="pending-item">
                        <div>
                          <div class="pending-item__title">${getCardioTypeMeta(entry.type).title}</div>
                          <div class="pending-item__meta">${formatDate(entry.date)}${meta ? ` · ${meta}` : ""}${entry.note ? ` · ${shortenLabel(entry.note, 34)}` : ""}</div>
                        </div>
                        <div class="pending-item__score">${entry.duration} min</div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </article>
          `
          : ""
      }
    </section>
  `;
}

function renderBodyMetricsSection() {
  const coach = getPhysiqueCoachSnapshot();
  const goalMeta = coach.goalMeta;
  const latest = coach.latest;
  const previous = coach.previous;
  const recent = getSortedBodyMetrics().slice(0, 3);
  const nutrition = getBodyNutritionSnapshot();
  const bodyChart = getBodyProgressChartData(state.bodyChartField);
  const bodyChartFieldOptions = getBodyChartFieldOptions();
  const activeBodySection = sanitizeBodySectionFilter(state.bodySectionFilter);
  const showEntrySection = shouldRenderBodySection("entry", activeBodySection);
  const showChartSection = shouldRenderBodySection("chart", activeBodySection);
  const showOverviewSection = shouldRenderBodySection("overview", activeBodySection);
  const showTargetsSection = shouldRenderBodySection("targets", activeBodySection);
  const showNutritionSection = shouldRenderBodySection("nutrition", activeBodySection);
  const showRecentSection = shouldRenderBodySection("recent", activeBodySection);

  return `
    <section class="stack-md">
      <article class="surface surface-pad stack-sm" data-accent-day="Upper">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Acces rapide</div>
            <h3 class="section-title dashboard-section-head__title">Pilotage mensurations</h3>
          </div>
          <div class="label">${BODY_SECTION_FILTERS.find((item) => item.key === activeBodySection)?.label || "Ajouter"}</div>
        </div>

        <div class="history-filter-row">
          ${BODY_SECTION_FILTERS
            .map(
              (section) => `
                <button
                  class="history-filter-chip ${activeBodySection === section.key ? "is-active" : ""}"
                  data-action="set-body-section-filter"
                  data-body-section="${section.key}"
                  aria-pressed="${activeBodySection === section.key ? "true" : "false"}"
                >
                  ${section.label}
                </button>
              `
            )
            .join("")}
        </div>
      </article>

      ${
        showOverviewSection
          ? `
      <article class="surface surface-pad coach-shell coach-shell--${coach.tone}" data-accent-day="Upper">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Coach forme</div>
            <h3 class="section-title dashboard-section-head__title">${goalMeta.label}: ${coach.headline}</h3>
          </div>
          <div class="coach-score coach-score--${coach.tone}">
            <span>${goalMeta.shortLabel}</span>
            <strong>${coach.toneLabel}</strong>
          </div>
        </div>

        <div class="coach-grid coach-grid--triple">
          <div class="coach-card">
            <div class="label">Poids</div>
            <div class="coach-card__value">${formatBodyTrendDelta(coach.weightTrend, " kg", formatOptionalMetric(latest?.weight, " kg"))}</div>
            <div class="coach-card__meta">${coach.weightTrend ? `Sur ${coach.weightTrend.daySpan}j · ${formatBodyTrendRate(coach.weightTrend, " kg")}` : "Ajoute au moins 2 mesures pour lire une tendance."}</div>
          </div>
          <div class="coach-card">
            <div class="label">Tour taille</div>
            <div class="coach-card__value">${formatBodyTrendDelta(coach.waistTrend, " cm", formatOptionalMetric(latest?.waist, " cm"))}</div>
            <div class="coach-card__meta">${coach.waistTrend ? `Sur ${coach.waistTrend.daySpan}j · ${formatOptionalMetric(latest?.waist, " cm")}` : "Le tour de taille reste la mesure la plus utile avec le poids."}</div>
          </div>
          <div class="coach-card">
            <div class="label">Cadence</div>
            <div class="coach-card__value">${coach.recentMeasuresCount}/30j</div>
            <div class="coach-card__meta">Cardio ${coach.cardioMinutes}/${coach.cardioTarget} min · Cible ${goalMeta.cardioLabel}</div>
          </div>
        </div>

        <div class="coach-note">${coach.note}</div>

        <div class="coach-tags">
          <span class="coach-tag">Priorite ${goalMeta.priorityLabel}</span>
          <span class="coach-tag">Repere ${goalMeta.rateTarget}</span>
          <span class="coach-tag">Mesure ${goalMeta.cadenceLabel}</span>
          <span class="coach-tag">Cardio ${goalMeta.cardioLabel}</span>
        </div>
      </article>
          `
          : ""
      }

      ${
        showEntrySection
          ? `
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Saisie</div>
            <h3 class="section-title dashboard-section-head__title">Nouvelle mesure</h3>
          </div>
          <div class="label">Corps</div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="body-date-input">Date</label>
            <input id="body-date-input" class="input input--editor" type="date" value="${state.bodyDraft.date}" />
          </div>
          <div class="field-wrap">
            <label class="label" for="body-weight-input">Poids</label>
            <input id="body-weight-input" class="input input--editor" type="number" min="0" step="0.1" value="${state.bodyDraft.weight}" placeholder="78.4" />
          </div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="body-waist-input">Tour de taille (cm)</label>
            <input id="body-waist-input" class="input input--editor" type="number" min="0" step="0.1" value="${state.bodyDraft.waist}" placeholder="84" />
          </div>
          <div class="field-wrap">
            <label class="label" for="body-arms-input">Bras (cm)</label>
            <input id="body-arms-input" class="input input--editor" type="number" min="0" step="0.1" value="${state.bodyDraft.arms}" placeholder="38" />
          </div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="body-thighs-input">Cuisses (cm)</label>
            <input id="body-thighs-input" class="input input--editor" type="number" min="0" step="0.1" value="${state.bodyDraft.thighs}" placeholder="58" />
          </div>
          <div class="field-wrap">
            <label class="label">Conseil</label>
            <div class="install-hint">${goalMeta.entryHint} Tu peux ne rentrer qu'une seule mesure: le plus important reste la regularite.</div>
          </div>
        </div>

        <div class="sheet-card__actions">
          <button class="button button--ghost" data-action="clear-body-draft">Vider</button>
          <button class="button button--primary" data-action="save-body-metric">Enregistrer la mesure</button>
        </div>
      </article>
          `
          : ""
      }

      ${
        showChartSection
          ? `
      <article class="surface surface-pad stack-md settings-group chart-shell" data-accent-day="Upper">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Courbe mensurations</div>
            <h3 class="section-title dashboard-section-head__title">Evolution visuelle</h3>
          </div>
          <div class="chart-shell__metric">${bodyChart.ready ? `${bodyChart.entryCount} mesure${bodyChart.entryCount > 1 ? "s" : ""}` : "En attente"}</div>
        </div>

        <div class="history-filter-row history-filter-row--compact">
          ${bodyChartFieldOptions
            .map(
              (item) => `
                <button
                  class="history-filter-chip ${state.bodyChartField === item.id ? "is-active" : ""}"
                  data-action="set-body-chart-field"
                  data-body-chart-field="${item.id}"
                  aria-pressed="${state.bodyChartField === item.id ? "true" : "false"}"
                >
                  ${item.shortLabel}
                </button>
              `
            )
            .join("")}
        </div>

        ${
          bodyChart.ready
            ? `
              <div class="body-progress-hero">
                <div>
                  <div class="label">${bodyChart.meta.label}</div>
                  <div class="body-progress-hero__value">${bodyChart.latestValueLabel}</div>
                  <div class="body-progress-hero__meta">Derniere mesure le ${formatDate(bodyChart.latestDate)} · Fenetre ${formatDate(bodyChart.firstDate)} -> ${formatDate(bodyChart.latestDate)}</div>
                </div>
                <div class="body-progress-badge body-progress-badge--${bodyChart.trend}">
                  ${bodyChart.deltaLabel}
                </div>
              </div>

              <div class="body-progress-chart">
                <svg class="body-progress-chart__svg" viewBox="0 0 ${bodyChart.width} ${bodyChart.height}" preserveAspectRatio="none" aria-label="Courbe de progression ${bodyChart.meta.label}">
                  <defs>
                    <linearGradient id="body-progress-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stop-color="rgba(22, 196, 127, 0.34)"></stop>
                      <stop offset="100%" stop-color="rgba(22, 196, 127, 0)"></stop>
                    </linearGradient>
                  </defs>
                  <line class="body-progress-chart__guide" x1="16" y1="34" x2="304" y2="34"></line>
                  <line class="body-progress-chart__guide" x1="16" y1="74" x2="304" y2="74"></line>
                  <line class="body-progress-chart__guide" x1="16" y1="${bodyChart.floorY}" x2="304" y2="${bodyChart.floorY}"></line>
                  <path class="body-progress-chart__area" d="${bodyChart.areaPath}"></path>
                  <path class="body-progress-chart__line" d="${bodyChart.linePath}"></path>
                  ${bodyChart.points
                    .map(
                      (point, index) => `
                        <circle
                          class="body-progress-chart__dot ${index === bodyChart.points.length - 1 ? "is-latest" : ""}"
                          cx="${point.x}"
                          cy="${point.y}"
                          r="${index === bodyChart.points.length - 1 ? 4.5 : 3.5}"
                        ></circle>
                      `
                    )
                    .join("")}
                </svg>
              </div>

              <div class="body-progress-chart__foot">
                <span>${formatDate(bodyChart.firstDate)}</span>
                <span>${bodyChart.rangeLabel}</span>
                <span>${formatDate(bodyChart.latestDate)}</span>
              </div>
            `
            : `
              <div class="chart-empty">
                <div>
                  <strong>Pas encore assez de donnees</strong>
                  <span>${bodyChart.entryCount === 1 ? `Encore une mesure de ${bodyChart.meta.shortLabel.toLowerCase()} et la courbe apparaitra.` : bodyChart.meta.empty}</span>
                </div>
              </div>
            `
        }
      </article>
          `
          : ""
      }

      ${
        showOverviewSection
          ? `
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Mensurations</div>
            <h3 class="section-title dashboard-section-head__title">Vue d'ensemble</h3>
          </div>
          <div class="label">${state.bodyMetrics.length} entree${state.bodyMetrics.length > 1 ? "s" : ""}</div>
        </div>

        <div class="coach-pulse-grid">
          <div class="coach-pulse">
            <span class="label">Poids actuel</span>
            <strong>${formatOptionalMetric(latest?.weight, " kg")}</strong>
            <span>${formatMetricDelta(latest?.weight, previous?.weight, " kg")}</span>
          </div>
          <div class="coach-pulse">
            <span class="label">Tour taille</span>
            <strong>${formatOptionalMetric(latest?.waist, " cm")}</strong>
            <span>${formatMetricDelta(latest?.waist, previous?.waist, " cm")}</span>
          </div>
          <div class="coach-pulse">
            <span class="label">Bras</span>
            <strong>${formatOptionalMetric(latest?.arms, " cm")}</strong>
            <span>${formatBodyTrendDelta(coach.armsTrend, " cm")}</span>
          </div>
          <div class="coach-pulse">
            <span class="label">Cuisses</span>
            <strong>${formatOptionalMetric(latest?.thighs, " cm")}</strong>
            <span>${formatBodyTrendDelta(coach.thighsTrend, " cm")}</span>
          </div>
          <div class="coach-pulse">
            <span class="label">Cardio 7j</span>
            <strong>${coach.cardioMinutes} min</strong>
            <span>Cible ${coach.cardioTarget} min</span>
          </div>
          <div class="coach-pulse">
            <span class="label">Mesures 30j</span>
            <strong>${coach.recentMeasuresCount}</strong>
            <span>${goalMeta.cadenceLabel}</span>
          </div>
        </div>

        <div class="confidence-note">
          ${
            latest
              ? `Derniere mesure le ${formatDate(latest.date)} · ${getBodyEntryMeta(latest)}`
              : "Ajoute ton poids, ton tour de taille et quelques mensurations pour lire la vraie progression."
          }
        </div>
      </article>
          `
          : ""
      }

      ${
        showTargetsSection
          ? `
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Repere</div>
            <h3 class="section-title dashboard-section-head__title">Ce qu'on veut voir</h3>
          </div>
          <div class="label">${goalMeta.label}</div>
        </div>

        <div class="metric-grid">
          <div class="metric">
            <div class="label">Rythme poids</div>
            <div class="metric__value">${goalMeta.rateTarget}</div>
          </div>
          <div class="metric">
            <div class="label">Cardio cible</div>
            <div class="metric__value">${goalMeta.cardioLabel}</div>
          </div>
          <div class="metric">
            <div class="label">Priorite</div>
            <div class="metric__value">${goalMeta.priorityLabel}</div>
          </div>
          <div class="metric">
            <div class="label">Cadence</div>
            <div class="metric__value">${goalMeta.cadenceLabel}</div>
          </div>
        </div>

        <div class="install-hint">${goalMeta.successLabel}</div>
      </article>
          `
          : ""
      }

      ${
        showNutritionSection
          ? `
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Profil nutrition</div>
            <h3 class="section-title dashboard-section-head__title">Calories et macros</h3>
          </div>
          <div class="label">${nutrition.goalMeta.label}</div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="body-goal-select">Objectif nutrition</label>
            <select id="body-goal-select" class="select select--editor">
              <option value="auto" ${state.bodyProfile.goal === "auto" ? "selected" : ""}>Auto (objectif actif)</option>
              <option value="weight-loss" ${state.bodyProfile.goal === "weight-loss" ? "selected" : ""}>Perte de poids</option>
              <option value="toning" ${state.bodyProfile.goal === "toning" ? "selected" : ""}>Tonification</option>
              <option value="muscle-gain" ${state.bodyProfile.goal === "muscle-gain" ? "selected" : ""}>Prise de muscle</option>
              <option value="wellbeing" ${state.bodyProfile.goal === "wellbeing" ? "selected" : ""}>Bien-etre + marche</option>
            </select>
          </div>
          <div class="field-wrap">
            <label class="label" for="body-sex-select">Sexe</label>
            <select id="body-sex-select" class="select select--editor">
              <option value="male" ${state.bodyProfile.sex === "male" ? "selected" : ""}>Homme</option>
              <option value="female" ${state.bodyProfile.sex === "female" ? "selected" : ""}>Femme</option>
            </select>
          </div>
        </div>

        <div class="grid-2">
          <div class="field-wrap">
            <label class="label" for="body-age-input">Age</label>
            <input id="body-age-input" class="input input--editor" type="number" min="16" max="90" step="1" value="${state.bodyProfile.age}" placeholder="31" />
          </div>
          <div class="field-wrap">
            <label class="label" for="body-height-input">Taille (cm)</label>
            <input id="body-height-input" class="input input--editor" type="number" min="120" max="240" step="1" value="${state.bodyProfile.height}" placeholder="178" />
          </div>
        </div>

        <div class="field-wrap">
          <label class="label" for="body-activity-select">Activite</label>
          <select id="body-activity-select" class="select select--editor">
            ${Object.values(BODY_ACTIVITY_LEVELS)
              .map(
                (item) => `
                  <option value="${item.id}" ${state.bodyProfile.activity === item.id ? "selected" : ""}>
                    ${item.label}
                  </option>
                `
              )
              .join("")}
          </select>
          <div class="muted">${nutrition.activityMeta.note}</div>
        </div>

        ${
          nutrition.ready
            ? `
              <div class="coach-pulse-grid">
                <div class="coach-pulse">
                  <span class="label">Entretien</span>
                  <strong>${nutrition.maintenanceCalories} kcal</strong>
                  <span>BMR ${nutrition.bmr} kcal</span>
                </div>
                <div class="coach-pulse">
                  <span class="label">Objectif</span>
                  <strong>${nutrition.targetCalories} kcal</strong>
                  <span>${nutrition.goalMeta.label}</span>
                </div>
                <div class="coach-pulse">
                  <span class="label">Proteines</span>
                  <strong>${nutrition.proteinGrams} g</strong>
                  <span>${formatCompactNumber(nutrition.proteinPerKg)} g/kg</span>
                </div>
                <div class="coach-pulse">
                  <span class="label">Glucides</span>
                  <strong>${nutrition.carbsGrams} g</strong>
                  <span>Variable d'ajustement</span>
                </div>
                <div class="coach-pulse">
                  <span class="label">Lipides</span>
                  <strong>${nutrition.fatGrams} g</strong>
                  <span>Base hormonale + satiete</span>
                </div>
                <div class="coach-pulse">
                  <span class="label">Poids calcule</span>
                  <strong>${formatOptionalMetric(nutrition.weight, " kg")}</strong>
                  <span>${nutrition.profile.sex === "female" ? "Formule femme" : "Formule homme"}</span>
                </div>
              </div>
              <div class="install-hint">${nutrition.note} Ajuste ensuite apres 2 a 3 semaines selon le poids, le tour de taille et les perfs.</div>
            `
            : `
              <div class="install-hint">
                Renseigne ${nutrition.missing.join(", ")} pour calculer tes calories et tes macros. Le poids est pris depuis ta derniere mesure si tu l'as deja note.
              </div>
            `
        }
      </article>
          `
          : ""
      }

      ${
        showRecentSection && recent.length
          ? `
            <article class="surface surface-pad stack-md settings-group">
              <div class="dashboard-section-head">
                <div>
                  <div class="label">Recent</div>
                  <h3 class="section-title dashboard-section-head__title">Dernieres mesures</h3>
                </div>
                <div class="label">${recent.length} recent${recent.length > 1 ? "es" : "e"}</div>
              </div>

              <div class="pending-list">
                ${recent
                  .map(
                    (entry) => `
                      <div class="pending-item">
                        <div>
                          <div class="pending-item__title">${formatDate(entry.date)}</div>
                          <div class="pending-item__meta">${getBodyEntryMeta(entry)}</div>
                        </div>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `
          : ""
      }
    </section>
  `;
}

function renderSettingsDataSection() {
  const exportMeta = getBackupExportSnapshot();

  return `
    <section class="stack-md">
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Sauvegarde recommandee</div>
            <h3 class="section-title dashboard-section-head__title">${exportMeta.label}</h3>
          </div>
          <div class="label">JSON</div>
        </div>

        <div class="metric-grid">
          <div class="metric">
            <div class="label">Dernier export</div>
            <div class="metric__value metric__value--text">${exportMeta.lastExportLabel}</div>
          </div>
          <div class="metric">
            <div class="label">Statut</div>
            <div class="metric__value">${exportMeta.shortLabel}</div>
          </div>
        </div>

        <div class="install-hint">${exportMeta.note}</div>

        <div class="backup-actions">
          <button class="button button--primary" data-action="export-backup">
            Exporter maintenant
          </button>
          <button class="button button--ghost" data-action="import-backup">
            Importer un backup
          </button>
        </div>
        <input id="backup-input" class="backup-input" type="file" accept="application/json,.json" />
      </article>

      ${renderStorageConfidenceSection()}

      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Zone sensible</div>
            <h3 class="section-title dashboard-section-head__title">Reinitialisation</h3>
          </div>
          <div class="label">Danger</div>
        </div>
        <div class="muted">
          Cette action efface les donnees locales de l'appareil. Fais un export juste avant si tu veux une vraie copie de secours.
        </div>
        <button class="button button--danger" data-action="clear-data">
          Reinitialiser toutes les donnees
        </button>
      </article>
    </section>
  `;
}

function getSettingsSections() {
  const backupLabel = state.storageMeta.backupAvailable ? "Backup actif" : "Pas de backup";
  const exportMeta = getBackupExportSnapshot();
  const soundLabel = state.restSoundEnabled ? "Son ON" : "Son OFF";
  const vibrationLabel = state.restVibrationEnabled ? "Vibreur ON" : "Vibreur OFF";

  return [
    {
      id: "app",
      label: "Installation iPhone",
      title: "Installation",
      summary: "Icone, ecran d'accueil et mode app",
      meta: "Acces rapide depuis Safari avec stockage local",
      stats: ["PWA", "Safari"],
      mark: "APP",
      accentDay: state.day,
      content: renderSettingsInstallSection(),
    },
    {
      id: "alerts",
      label: "Alertes",
      title: "Repos",
      summary: "Son, vibration et test d'alerte",
      meta: `${soundLabel} · ${vibrationLabel}`,
      stats: [soundLabel, vibrationLabel],
      mark: "REST",
      accentDay: state.day,
      content: renderRestSettings(),
    },
    {
      id: "data",
      label: "Donnees",
      title: exportMeta.label,
      summary: "Sauvegarde, import et reinitialisation",
      meta: state.storageMeta.saveError || exportMeta.note,
      stats: [backupLabel, exportMeta.shortLabel],
      mark: "DATA",
      accentDay: state.day,
      content: renderSettingsDataSection(),
    },
  ];
}

function getPlanSections() {
  const cycle = getCycleSnapshot();
  const weeklyPlan = getWeeklyPlanStatus();
  const blocks = getProgramExerciseBlocks(state.programEditorDay);

  return [
    {
      id: "week",
      label: "Planning semaine",
      title: `${weeklyPlan.workoutDone}/${weeklyPlan.sessionTarget} muscu · ${weeklyPlan.cardioMinutes}/${weeklyPlan.cardioTarget} min`,
      summary: "Vue semaine, cardio et prochaine action",
      meta: weeklyPlan.todayFocus,
      stats: [`${weeklyPlan.remainingSessions} reste`, `${weeklyPlan.remainingCardio} min`],
      mark: "WEEK",
      accentDay: getNextTrainingDay(),
      content: renderWeeklyPlanner(),
    },
    {
      id: "cycle",
      label: "Bloc en cours",
      title: `${cycle.goalLabel} · S${cycle.week}/${cycle.length}`,
      summary: "Objectif, semaine active et deload",
      meta: `${cycle.current.phase} - ${cycle.current.focus}`,
      stats: [cycle.current.phase, cycle.current.target],
      mark: "CYCLE",
      accentDay: state.day,
      content: renderCycleSettings(),
    },
    {
      id: "planner",
      label: "Assistant programme",
      title: getActiveProgramDisplay(),
      summary: "Choix du split selon tes jours",
      meta: `${getProgramDays().length} bloc(s) actifs`,
      stats: [`${state.programPlannerDays} jours`, state.programTemplateId ? "Template" : "Perso"],
      mark: "SPLIT",
      accentDay: getProgramDays()[0] || state.day,
      content: renderProgramPlanner(),
    },
    {
      id: "editor",
      label: "Edition rapide",
      title: state.programEditorDay,
      summary: "Series, top set, back-off et repos",
      meta: `${blocks.length} exercice(s) groupes`,
      stats: ["Series", "Repos"],
      mark: "EDIT",
      accentDay: state.programEditorDay,
      content: renderProgramEditor(),
    },
  ];
}

function getActivePlanSection() {
  return getPlanSections().find((section) => section.id === state.planSection) || null;
}

function openPlanSection(sectionId) {
  state.planSection = sectionId;
  saveState();
  renderApp();
}

function closePlanSection() {
  state.planSection = "";
  saveState();
  renderApp();
}

function renderPlanHub() {
  const sections = getPlanSections();

  return `
    <section class="stack-md settings-shell">
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Pilotage</div>
            <h2 class="section-title dashboard-section-head__title">Plan</h2>
          </div>
          <div class="label">${sections.length} blocs</div>
        </div>
        <div class="muted">
          Programme, planning, bloc et edition rapide sont regroupes ici pour les retrouver plus vite.
        </div>
        <div class="history-filter-row history-filter-row--compact">
          ${sections
            .map(
              (section) => `
                <button
                  class="history-filter-chip"
                  data-action="open-plan-section"
                  data-plan-section="${section.id}"
                >
                  ${section.label}
                </button>
              `
            )
            .join("")}
        </div>
      </article>

      <div class="settings-hub">
        ${sections
          .map(
            (section) => `
              <button class="settings-panel-card" data-card-scope="plan" data-action="open-plan-section" data-plan-section="${section.id}" data-accent-day="${section.accentDay}" data-theme-day="${section.accentDay}" data-settings-mark="${section.mark}">
                <div>
                  <div class="settings-panel-card__eyebrow">Plan</div>
                  <div class="settings-panel-card__title">${section.label}</div>
                  <div class="settings-panel-card__desc">${section.summary}</div>
                </div>
                <div class="settings-panel-card__arrow">></div>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPlanDetail() {
  const sections = getPlanSections();
  const section = getActivePlanSection();
  if (!section) {
    return renderPlanHub();
  }

  return `
    <section class="stack-md settings-shell">
      <article class="surface surface-pad stack-md settings-group settings-detail-shell" data-accent-day="${section.accentDay}">
        <div class="settings-detail-header">
          <button class="button button--ghost button--compact" data-action="close-plan-section">
            Retour
          </button>
          <span class="pill pill--outline">${section.label}</span>
        </div>
        <div class="stack-sm">
          <div class="label">Plan</div>
          <h2 class="section-title dashboard-section-head__title">${section.label}</h2>
          <div class="muted">${section.title} - ${section.meta}</div>
        </div>
        <div class="history-filter-row history-filter-row--compact">
          ${sections
            .map(
              (item) => `
                <button
                  class="history-filter-chip ${item.id === section.id ? "is-active" : ""}"
                  data-action="open-plan-section"
                  data-plan-section="${item.id}"
                  aria-pressed="${item.id === section.id ? "true" : "false"}"
                >
                  ${item.label}
                </button>
              `
            )
            .join("")}
        </div>
      </article>

      ${section.content}
    </section>
  `;
}

function renderPlan() {
  if (state.planSection) {
    return renderPlanDetail();
  }

  return renderPlanHub();
}

function getActiveSettingsSection() {
  return getSettingsSections().find((section) => section.id === state.settingsSection) || null;
}

function openSettingsSection(sectionId) {
  state.settingsSection = sectionId;
  if (sectionId === "body") {
    state.bodySectionFilter = "entry";
  }
  saveState();
  renderApp();
}

function closeSettingsSection() {
  state.settingsSection = "";
  saveState();
  renderApp();
}

function renderSettingsHub() {
  const sections = getSettingsSections();

  return `
    <section class="stack-md settings-shell">
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Options</div>
            <h2 class="section-title dashboard-section-head__title">Reglages</h2>
          </div>
          <div class="label">${sections.length} blocs</div>
        </div>
        <div class="muted">
          Chaque bloc s'ouvre seul pour garder un menu plus clair et plus rapide a parcourir.
        </div>
      </article>

      <div class="settings-hub">
        ${sections
          .map(
            (section) => `
              <button class="settings-panel-card" data-action="open-settings-section" data-settings-section="${section.id}" data-accent-day="${section.accentDay}" data-theme-day="${section.accentDay}" data-settings-mark="${section.mark}">
                <div>
                  <div class="settings-panel-card__eyebrow">Bloc</div>
                  <div class="settings-panel-card__title">${section.label}</div>
                  <div class="settings-panel-card__desc">${section.summary}</div>
                </div>
                <div class="settings-panel-card__arrow">></div>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSettingsDetail() {
  const section = getActiveSettingsSection();
  if (!section) {
    return renderSettingsHub();
  }

  return `
    <section class="stack-md settings-shell">
      <article class="surface surface-pad stack-md settings-group settings-detail-shell" data-accent-day="${section.accentDay}">
        <div class="settings-detail-header">
          <button class="button button--ghost button--compact" data-action="close-settings-section">
            Retour
          </button>
          <span class="pill pill--outline">${section.label}</span>
        </div>
        <div class="stack-sm">
          <div class="label">Detail du bloc</div>
          <h2 class="section-title dashboard-section-head__title">${section.label}</h2>
          <div class="muted">${section.title} - ${section.meta}</div>
        </div>
      </article>

      ${section.content}
    </section>
  `;
}

function renderSettings() {
  if (state.settingsSection) {
    return renderSettingsDetail();
  }

  return renderSettingsHub();
}

function renderLegacySettings() {
  return `
    <section class="stack-md settings-shell">
      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Options</div>
            <h2 class="section-title dashboard-section-head__title">Reglages</h2>
          </div>
          <div class="label">PWA</div>
        </div>
        <div class="install-hint">
          Pour l'avoir sur iPhone :
          <br />
          1. Heberge ce dossier en HTTPS.
          <br />
          2. Ouvre l'URL dans Safari.
          <br />
          3. Partager -> Ajouter a l'ecran d'accueil.
        </div>
        <div class="install-hint">
          Les donnees sont stockees localement sur l'appareil via le navigateur.
        </div>
      </article>

      ${renderCycleSettings()}
      ${renderProgramPlanner()}
      ${renderRestSettings()}
      ${renderStorageConfidenceSection()}

      <article class="surface surface-pad stack-md settings-group">
        <div class="dashboard-section-head">
          <div>
          <div class="label">Donnees</div>
          <h3 class="section-title dashboard-section-head__title">Sauvegarde et reinitialisation</h3>
          </div>
          <div class="label">JSON</div>
        </div>
        <div class="muted">
          Exporte tes donnees pour les conserver ou les restaurer plus tard.
        </div>
        <div class="backup-actions">
          <button class="button button--ghost" data-action="export-backup">
            Exporter les donnees
          </button>
          <button class="button button--primary" data-action="import-backup">
            Importer un backup
          </button>
        </div>
        <input id="backup-input" class="backup-input" type="file" accept="application/json,.json" />
        <button class="button button--danger" data-action="clear-data">
          Reinitialiser toutes les donnees
        </button>
      </article>

      ${renderProgramEditor()}
    </section>
  `;
}

function renderBody() {
  if (state.screen === "dashboard") return renderPremiumDashboard();
  if (state.screen === "history") return renderHistory();
  if (state.screen === "plan") return renderPlan();
  if (state.screen === "settings") return renderSettings();
  return renderWorkout();
}

function bindEvents() {
  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.onclick = () => {
      primeAudioEngine();
      state.screen = button.dataset.screen;
      saveState();
      renderApp();
    };
  });

  document.querySelectorAll("button[data-day]").forEach((button) => {
    button.onclick = () => {
      primeAudioEngine();
      startWorkoutDay(button.dataset.day);
    };
  });

  document.querySelectorAll(".program-day-tab").forEach((button) => {
    button.onclick = () => setProgramEditorDay(button.dataset.programDay);
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.onclick = () => {
      primeAudioEngine();
      const action = button.dataset.action;

      if (action === "toggle-timer") {
        if (state.timer.seconds <= 0) {
          state.timer.active = false;
          state.timerTotalSeconds = 0;
          state.timerEndsAt = 0;
          clearScheduledRestSound();
        } else if (state.timer.active) {
          state.timer.active = false;
          state.timerEndsAt = 0;
          clearScheduledRestSound();
        } else {
          state.timer.active = true;
          state.timerEndsAt = getTimerEndTimestamp(state.timer.seconds);
          scheduleRestSound(state.timer.seconds);
        }
        saveState();
        renderApp();
      }

      if (action === "toggle-plates") {
        state.showPlates = !state.showPlates;
        saveState();
        renderApp();
      }

      if (action === "toggle-focus-workout") {
        toggleFocusWorkoutMode();
      }

      if (action === "increase-load") {
        updateCurrentLoad("up");
      }

      if (action === "decrease-load") {
        updateCurrentLoad("down");
      }

      if (action === "reset-load") {
        resetCurrentLoad();
      }

      if (action === "validate-set") {
        handleValidation();
      }

      if (action === "pick-reps") {
        setRepsInputValue(button.dataset.repsValue);
      }

      if (action === "edit-last-set") {
        reopenLastPendingSet(true);
      }

      if (action === "undo-last-set") {
        reopenLastPendingSet(false);
      }

      if (action === "finalize-workout") {
        finalizeWorkout();
      }

      if (action === "restart-workout") {
        state.pendingSession = [];
        state.workoutFinished = false;
        startWorkoutDay(state.day);
      }

      if (action === "resume-workout") {
        state.screen = "workout";
        saveState();
        renderApp();
      }

      if (action === "focus-dashboard-chart") {
        state.selectedChartKey = button.dataset.chartKey || state.selectedChartKey;
        state.screen = "history";
        openHistoryDetail(button.dataset.historyDay || "");
      }

      if (action === "discard-workout") {
        discardWorkoutProgress();
      }

      if (action === "clear-data") {
        clearAllData();
      }

      if (action === "export-backup") {
        exportBackup();
      }

      if (action === "import-backup") {
        document.getElementById("backup-input")?.click();
      }

      if (action === "cycle-prev-week") {
        changeCycleWeek(-1);
      }

      if (action === "cycle-next-week") {
        changeCycleWeek(1);
      }

      if (action === "cycle-reset") {
        resetCycleBlock();
      }

      if (action === "set-program-planner-days") {
        setProgramPlannerDays(button.dataset.programDays);
      }

      if (action === "set-program-planner-goal") {
        setProgramPlannerGoal(button.dataset.programGoal);
      }

      if (action === "set-program-planner-constraint") {
        setProgramPlannerConstraint(button.dataset.programConstraint);
      }

      if (action === "apply-program-template") {
        applyProgramTemplate(button.dataset.templateId);
      }

      if (action === "open-program-template-preview") {
        openProgramTemplatePreview(button.dataset.templateId);
      }

      if (action === "close-program-template-preview") {
        closeProgramTemplatePreview();
      }

      if (action === "toggle-rest-sound") {
        toggleRestPreference("restSoundEnabled");
      }

      if (action === "toggle-rest-vibration") {
        toggleRestPreference("restVibrationEnabled");
      }

      if (action === "test-rest-alert") {
        testRestAlert();
      }

      if (action === "save-cardio-session") {
        saveCardioSession();
      }

      if (action === "clear-cardio-draft") {
        clearCardioDraft();
      }

      if (action === "save-body-metric") {
        saveBodyMetric();
      }

      if (action === "clear-body-draft") {
        clearBodyDraft();
      }

      if (action === "open-settings-section") {
        openSettingsSection(button.dataset.settingsSection || "");
      }

      if (action === "open-history-section") {
        openHistorySection(button.dataset.historySection || "all", {
          bodySection: button.dataset.bodySection || "entry",
        });
      }

      if (action === "open-body-settings") {
        openHistorySection("body", { bodySection: "entry" });
      }

      if (action === "set-history-overview-filter") {
        setHistoryOverviewFilter(button.dataset.historyFilter || "all");
      }

      if (action === "set-history-section-filter") {
        setHistorySectionFilter(button.dataset.historySection || "all");
      }

      if (action === "set-history-detail-section-filter") {
        setHistoryDetailSectionFilter(button.dataset.historyDetailSection || "all");
      }

      if (action === "set-body-section-filter") {
        setBodySectionFilter(button.dataset.bodySection || "entry");
      }

      if (action === "set-workout-section-filter") {
        setWorkoutSectionFilter(button.dataset.workoutSection || "all");
      }

      if (action === "set-program-editor-section-filter") {
        setProgramEditorSectionFilter(button.dataset.programEditorSection || "all");
      }

      if (action === "set-program-preview-day") {
        setProgramTemplatePreviewDay(button.dataset.previewDay || "");
      }

      if (action === "set-body-chart-field") {
        setBodyChartField(button.dataset.bodyChartField || "weight");
      }

      if (action === "close-settings-section") {
        closeSettingsSection();
      }

      if (action === "open-plan-section") {
        openPlanSection(button.dataset.planSection || "");
      }

      if (action === "close-plan-section") {
        closePlanSection();
      }

      if (action === "dismiss-rest-alert") {
        dismissRestAlert();
      }

      if (action === "extend-rest-30") {
        extendRest(30);
      }

      if (action === "add-program-entry") {
        addProgramEntry(button.dataset.programDay || state.programEditorDay);
      }

      if (action === "toggle-program-reorder-mode") {
        toggleProgramEditorReorderMode();
      }

      if (action === "move-program-block") {
        moveProgramBlock(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programBlockStart),
          Number(button.dataset.moveDirection)
        );
      }

      if (action === "remove-program-entry") {
        removeProgramEntry(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programIndex)
        );
      }

      if (action === "remove-program-block") {
        removeProgramBlock(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programBlockStart)
        );
      }

      if (action === "open-program-entry-editor") {
        openProgramEntryEditor(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programIndex)
        );
      }

      if (action === "close-program-entry-editor") {
        closeProgramEntryEditor();
      }

      if (action === "save-program-entry") {
        saveProgramEntryEditor();
      }

      if (action === "select-program-preset-group") {
        setProgramEntryPresetGroup(button.dataset.presetGroup || "");
      }

      if (action === "apply-program-preset") {
        applyProgramEntryPreset(
          button.dataset.presetGroup || "",
          button.dataset.presetId || ""
        );
      }

      if (action === "toggle-program-entry-advanced") {
        toggleProgramEntryAdvanced();
      }

      if (action === "duplicate-program-entry") {
        duplicateProgramEntry(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programIndex)
        );
      }

      if (action === "bump-program-entry-rest") {
        bumpProgramEntryRest(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programIndex),
          Number(button.dataset.restDelta || 0)
        );
      }

      if (action === "bump-program-block-rest") {
        bumpProgramBlockRest(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programBlockStart),
          Number(button.dataset.restDelta || 0)
        );
      }

      if (action === "reset-program") {
        resetProgram();
      }

      if (action === "dismiss-install") {
        dismissInstallHint();
      }

      if (action === "open-history-editor") {
        openHistoryEditor(Number(button.dataset.historyIndex));
      }

      if (action === "open-history-detail") {
        openHistoryDetail(button.dataset.historyKey || "");
      }

      if (action === "close-history-detail") {
        closeHistoryDetail();
      }

      if (action === "close-history-editor") {
        closeHistoryEditor();
      }

      if (action === "save-history-entry") {
        saveHistoryEditor();
      }

      if (action === "delete-history-entry") {
        deleteHistoryEntry();
      }

      if (action === "dismiss-update-banner") {
        pwaUpdateDismissed = true;
        renderApp();
      }

      if (action === "refresh-app") {
        pwaUpdateDismissed = false;
        if (pwaRegistration?.waiting) {
          pwaReloadOnControllerChange = true;
          pwaRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
        } else {
          window.location.reload();
        }
      }

      if (action === "onboarding-next") {
        state.onboardingStep = Math.min(state.onboardingStep + 1, getOnboardingSlides().length - 1);
        saveState();
        renderApp();
      }

      if (action === "onboarding-prev") {
        state.onboardingStep = Math.max(state.onboardingStep - 1, 0);
        saveState();
        renderApp();
      }

      if (action === "onboarding-skip" || action === "onboarding-finish") {
        completeOnboarding();
      }
    };
  });

  document.querySelectorAll("[data-program-input]").forEach((input) => {
    input.onchange = (event) => {
      updateProgramEntry(
        event.target.dataset.programDay,
        Number(event.target.dataset.programIndex),
        event.target.dataset.programField,
        event.target.value
      );
    };
  });

  document.querySelectorAll("[data-program-group-count]").forEach((input) => {
    input.onchange = (event) => {
      setProgramSeriesGroupCount(
        event.target.dataset.programDay,
        Number(event.target.dataset.programBlockStart),
        Number(event.target.dataset.programGroupStart),
        event.target.value
      );
    };
  });

  const chartSelect = document.getElementById("chart-select");
  if (chartSelect) {
    chartSelect.onchange = (event) => {
      state.selectedChartKey = event.target.value;
      saveState();
      renderApp();
    };
  }

  const historyDetailChartSelect = document.getElementById("history-detail-chart-select");
  if (historyDetailChartSelect) {
    historyDetailChartSelect.onchange = (event) => {
      state.selectedChartKey = event.target.value;
      saveState();
      renderApp();
    };
  }

  const backupInput = document.getElementById("backup-input");
  if (backupInput) {
    backupInput.onchange = async (event) => {
      const file = event.target.files?.[0];
      event.target.value = "";
      await importBackupFromFile(file);
    };
  }

  const cycleGoalSelect = document.getElementById("cycle-goal-select");
  if (cycleGoalSelect) {
    cycleGoalSelect.onchange = (event) => {
      setCycleGoal(event.target.value);
    };
  }

  const cycleLengthSelect = document.getElementById("cycle-length-select");
  if (cycleLengthSelect) {
    cycleLengthSelect.onchange = (event) => {
      setCycleLength(event.target.value);
    };
  }

  const cardioTypeSelect = document.getElementById("cardio-type-select");
  if (cardioTypeSelect) {
    cardioTypeSelect.onchange = (event) => {
      updateCardioDraft("type", event.target.value);
    };
  }

  const cardioDateInput = document.getElementById("cardio-date-input");
  if (cardioDateInput) {
    cardioDateInput.oninput = (event) => {
      updateCardioDraft("date", event.target.value);
    };
  }

  const cardioDurationInput = document.getElementById("cardio-duration-input");
  if (cardioDurationInput) {
    cardioDurationInput.oninput = (event) => {
      updateCardioDraft("duration", event.target.value);
    };
  }

  const cardioSpeedInput = document.getElementById("cardio-speed-input");
  if (cardioSpeedInput) {
    cardioSpeedInput.oninput = (event) => {
      updateCardioDraft("speed", event.target.value);
    };
  }

  const cardioInclineInput = document.getElementById("cardio-incline-input");
  if (cardioInclineInput) {
    cardioInclineInput.oninput = (event) => {
      updateCardioDraft("incline", event.target.value);
    };
  }

  const cardioNoteInput = document.getElementById("cardio-note-input");
  if (cardioNoteInput) {
    cardioNoteInput.oninput = (event) => {
      updateCardioDraft("note", event.target.value);
    };
  }

  const bodyDateInput = document.getElementById("body-date-input");
  if (bodyDateInput) {
    bodyDateInput.oninput = (event) => {
      updateBodyDraft("date", event.target.value);
    };
  }

  const bodyWeightInput = document.getElementById("body-weight-input");
  if (bodyWeightInput) {
    bodyWeightInput.oninput = (event) => {
      updateBodyDraft("weight", event.target.value);
    };
  }

  const bodyWaistInput = document.getElementById("body-waist-input");
  if (bodyWaistInput) {
    bodyWaistInput.oninput = (event) => {
      updateBodyDraft("waist", event.target.value);
    };
  }

  const bodyArmsInput = document.getElementById("body-arms-input");
  if (bodyArmsInput) {
    bodyArmsInput.oninput = (event) => {
      updateBodyDraft("arms", event.target.value);
    };
  }

  const bodyThighsInput = document.getElementById("body-thighs-input");
  if (bodyThighsInput) {
    bodyThighsInput.oninput = (event) => {
      updateBodyDraft("thighs", event.target.value);
    };
  }

  const bodyGoalSelect = document.getElementById("body-goal-select");
  if (bodyGoalSelect) {
    bodyGoalSelect.onchange = (event) => {
      updateBodyProfile("goal", event.target.value);
      renderApp();
    };
  }

  const bodySexSelect = document.getElementById("body-sex-select");
  if (bodySexSelect) {
    bodySexSelect.onchange = (event) => {
      updateBodyProfile("sex", event.target.value);
      renderApp();
    };
  }

  const bodyAgeInput = document.getElementById("body-age-input");
  if (bodyAgeInput) {
    bodyAgeInput.oninput = (event) => {
      updateBodyProfile("age", event.target.value);
    };
    bodyAgeInput.onchange = () => {
      renderApp();
    };
  }

  const bodyHeightInput = document.getElementById("body-height-input");
  if (bodyHeightInput) {
    bodyHeightInput.oninput = (event) => {
      updateBodyProfile("height", event.target.value);
    };
    bodyHeightInput.onchange = () => {
      renderApp();
    };
  }

  const bodyActivitySelect = document.getElementById("body-activity-select");
  if (bodyActivitySelect) {
    bodyActivitySelect.onchange = (event) => {
      updateBodyProfile("activity", event.target.value);
      renderApp();
    };
  }

  const repsInput = document.getElementById("reps-input");
  if (repsInput) {
    repsInput.oninput = (event) => {
      state.repsInput = event.target.value;
      saveState();
      syncValidationButton();
    };
    repsInput.onkeydown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleValidation();
      }
    };
  }

  const rpeInput = document.getElementById("rpe-input");
  if (rpeInput) {
    rpeInput.oninput = (event) => {
      state.rpe = Number(event.target.value);
      saveState();
      renderApp();
    };
  }

  const workoutReviewEnergy = document.getElementById("workout-review-energy");
  if (workoutReviewEnergy) {
    workoutReviewEnergy.onchange = (event) => {
      updateWorkoutReviewDraft("energy", event.target.value);
    };
  }

  const workoutReviewPain = document.getElementById("workout-review-pain");
  if (workoutReviewPain) {
    workoutReviewPain.onchange = (event) => {
      updateWorkoutReviewDraft("pain", event.target.value);
    };
  }

  const workoutReviewNote = document.getElementById("workout-review-note");
  if (workoutReviewNote) {
    workoutReviewNote.oninput = (event) => {
      updateWorkoutReviewDraft("note", event.target.value);
    };
  }

  const historyEditorReps = document.getElementById("history-editor-reps");
  if (historyEditorReps) {
    historyEditorReps.oninput = (event) => {
      if (!state.historyEditor) return;
      state.historyEditor.reps = event.target.value;
    };
  }

  const historyEditorLoad = document.getElementById("history-editor-load");
  if (historyEditorLoad) {
    historyEditorLoad.oninput = (event) => {
      if (!state.historyEditor) return;
      state.historyEditor.load = event.target.value;
    };
  }

  const historyEditorLabel = document.getElementById("history-editor-label");
  if (historyEditorLabel) {
    historyEditorLabel.oninput = (event) => {
      if (!state.historyEditor) return;
      state.historyEditor.loadLabel = event.target.value;
    };
  }

  const programEditorExercise = document.getElementById("program-editor-exercise");
  if (programEditorExercise) {
    programEditorExercise.oninput = (event) => {
      updateProgramEntryEditorDraft("exercise", event.target.value);
    };
  }

  const programEditorSeries = document.getElementById("program-editor-series");
  if (programEditorSeries) {
    programEditorSeries.oninput = (event) => {
      updateProgramEntryEditorDraft("series", event.target.value);
    };
  }

  const programEditorKind = document.getElementById("program-editor-kind");
  if (programEditorKind) {
    programEditorKind.onchange = (event) => {
      updateProgramEntryEditorDraft("kind", event.target.value);
    };
  }

  const programEditorMinReps = document.getElementById("program-editor-min-reps");
  if (programEditorMinReps) {
    programEditorMinReps.oninput = (event) => {
      updateProgramEntryEditorDraft("minReps", event.target.value);
    };
  }

  const programEditorMaxReps = document.getElementById("program-editor-max-reps");
  if (programEditorMaxReps) {
    programEditorMaxReps.oninput = (event) => {
      updateProgramEntryEditorDraft("maxReps", event.target.value);
    };
  }

  const programEditorRest = document.getElementById("program-editor-rest");
  if (programEditorRest) {
    programEditorRest.oninput = (event) => {
      updateProgramEntryEditorDraft("rest", event.target.value);
    };
  }

  const programEditorLoad = document.getElementById("program-editor-load");
  if (programEditorLoad) {
    programEditorLoad.oninput = (event) => {
      updateProgramEntryEditorDraft("defaultLoad", event.target.value);
    };
  }

  const programEditorLoadLabel = document.getElementById("program-editor-load-label");
  if (programEditorLoadLabel) {
    programEditorLoadLabel.oninput = (event) => {
      updateProgramEntryEditorDraft("loadLabel", event.target.value);
    };
  }

  document.ondblclick = (event) => {
    if (event.target.closest("button")) {
      event.preventDefault();
    }
  };
}

function tickTimer() {
  if (!state.timer.active || state.timer.seconds <= 0) return;

  if (state.timerEndsAt > 0) {
    const remainingMs = state.timerEndsAt - Date.now();
    if (remainingMs <= 0) {
      state.timer.seconds = 0;
      state.timer.active = false;
      state.timerTotalSeconds = 0;
      state.timerEndsAt = 0;
      triggerRestAlert();
      return;
    }

    state.timer.seconds = Math.ceil(remainingMs / 1000);
    saveState();
    syncTimerButtonUI();
    return;
  }

  state.timer.seconds -= 1;
  if (state.timer.seconds <= 0) {
    state.timer.seconds = 0;
    state.timer.active = false;
    state.timerTotalSeconds = 0;
    state.timerEndsAt = 0;
    triggerRestAlert();
    return;
  }

  saveState();
  syncTimerButtonUI();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (pwaReloadOnControllerChange) {
      window.location.reload();
    }
  });

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").then((registration) => {
      pwaRegistration = registration;

      const showUpdateReady = () => {
        pwaUpdateReady = true;
        pwaUpdateDismissed = false;
        renderApp();
      };

      if (registration.waiting) {
        showUpdateReady();
      }

      registration.addEventListener("updatefound", () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;

        installingWorker.addEventListener("statechange", () => {
          if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
            showUpdateReady();
          }
        });
      });

      registration.update().catch(() => {});
    }).catch(() => {});
  });
}

function renderPremiumDayList() {
  return `
    <section class="day-list">
      ${getProgramDays()
        .map((day) => {
          const summary = getDaySummary(day);
          const theme = getDayTheme(day);

          return `
            <button class="day-button" data-day="${day}" data-theme-day="${theme.accentDay}">
              <div>
                <div class="day-button__eyebrow">${theme.badge}</div>
                <div class="day-button__title">${day.toUpperCase()}</div>
                <div class="day-button__meta">${theme.subtitle} - ${theme.cue}</div>
                <div class="day-button__stats">
                  <span>${summary.exerciseCount} exos</span>
                  <span>${summary.setCount} series</span>
                </div>
              </div>
              <div class="day-button__arrow">></div>
            </button>
          `;
        })
        .join("")}
    </section>
  `;
}

function renderResumeCard() {
  const resume = getSmartResumeData();
  if (!resume) return "";
  const theme = getDayTheme(resume.day);

  return `
    <article class="surface surface-pad smart-resume" data-accent-day="${theme.accentDay}">
      <div class="row row-start">
        <div class="stack-sm smart-resume__copy">
          <div class="label">Reprise intelligente</div>
          <h2 class="section-title smart-resume__title">${resume.title}</h2>
          <div class="smart-resume__cue">${theme.cue}</div>
          <div class="muted">${resume.subtitle}</div>
          <div class="smart-resume__meta">
            <span class="smart-resume__chip">${resume.day}</span>
            <span class="smart-resume__chip">${resume.meta}</span>
          </div>
        </div>
        <span class="pill">${resume.mode === "active" ? "Maintenant" : theme.badge}</span>
      </div>

      <div class="progress-wrap">
        <div class="row">
          <div class="label">${resume.mode === "active" ? "Progression" : "Preparation"}</div>
          <div class="label">${resume.progress}%</div>
        </div>
        <div class="progress">
          <div class="progress__fill" style="width:${resume.progress}%"></div>
        </div>
      </div>

      <div class="smart-resume__actions">
        <button class="button button--primary" ${resume.actionAttrs}>
          ${resume.actionLabel}
        </button>
        <button class="button button--ghost" ${resume.secondaryAttrs}>
          ${resume.secondaryLabel}
        </button>
      </div>
    </article>
  `;
}

function renderWeeklyPlanner() {
  const weeklyPlan = getWeeklyPlanStatus();
  const planner = weeklyPlan.planner;
  const resume = getSmartResumeData();
  const accentDay = resume?.day || getNextTrainingDay();
  const theme = getDayTheme(accentDay);

  return `
    <article class="surface surface-pad planner-shell" data-accent-day="${theme.accentDay}">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Planning</div>
          <h3 class="section-title dashboard-section-head__title">Semaine en cours</h3>
        </div>
        <div class="label">${weeklyPlan.workoutDone}/${weeklyPlan.sessionTarget} seance(s)</div>
      </div>

      <div class="planner-summary">
        <div class="planner-summary__card">
          <div class="label">Muscu</div>
          <div class="planner-summary__value">${weeklyPlan.workoutDone}/${weeklyPlan.sessionTarget}</div>
          <div class="planner-summary__meta">
            ${weeklyPlan.remainingSessions ? `${weeklyPlan.remainingSessions} restante${weeklyPlan.remainingSessions > 1 ? "s" : ""}` : "Objectif valide"}
          </div>
        </div>
        <div class="planner-summary__card">
          <div class="label">Cardio</div>
          <div class="planner-summary__value">${weeklyPlan.cardioMinutes}</div>
          <div class="planner-summary__meta">
            ${weeklyPlan.cardioTarget} min cible
          </div>
        </div>
        <div class="planner-summary__card">
          <div class="label">Focus</div>
          <div class="planner-summary__value planner-summary__value--text">${getNextTrainingDay()}</div>
          <div class="planner-summary__meta">
            ${weeklyPlan.remainingCardio ? `${weeklyPlan.remainingCardio} min cardio restants` : "Cardio dans le rythme"}
          </div>
        </div>
      </div>

      <div class="planner-grid">
        ${planner
          .map(
            (day) => `
              <div class="planner-day ${day.isDone ? "is-done" : ""} ${day.isToday ? "is-today" : ""} ${day.isFuture ? "is-future" : ""}">
                <div class="planner-day__label">${day.label}</div>
                <div class="planner-day__activities">
                  ${
                    day.workoutCount
                      ? `
                        <div class="planner-activity">
                          <span class="planner-activity__icon planner-activity__icon--workout">
                            ${renderPlannerActivityIcon("workout")}
                          </span>
                        </div>
                      `
                      : ""
                  }
                  ${
                    day.cardioMinutes
                      ? `
                        <div class="planner-activity">
                          <span class="planner-activity__icon planner-activity__icon--cardio">
                            ${renderPlannerActivityIcon("cardio")}
                          </span>
                        </div>
                      `
                      : ""
                  }
                </div>
                <div class="planner-day__date">${day.dateLabel}</div>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="planner-note">
        <span class="planner-note__pill">${hasWorkoutInProgress() ? "A finir" : theme.badge}</span>
        <span>${weeklyPlan.todayFocus}</span>
      </div>
    </article>
  `;
}

function renderRecordsSection() {
  const records = getExerciseRecords();
  const { heaviest, bestReps } = getGlobalRecords();

  return `
    <section class="stack-md">
      <article class="surface surface-pad records-shell" data-accent-day="${state.day}">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Records</div>
            <h3 class="section-title dashboard-section-head__title">PR et meilleures perfs</h3>
          </div>
          <div class="label">${records.length} exos</div>
        </div>

        <div class="records-summary">
          <div class="metric metric--record">
            <div class="label">Charge max</div>
            <div class="metric__value">
              ${heaviest ? formatLoad(heaviest.load, heaviest.loadLabel) : "-"}
            </div>
            <div class="records-summary__meta">
              ${heaviest ? `${shortenLabel(heaviest.exercise, 18)} - ${heaviest.reps} reps` : "Pas encore de PR"}
            </div>
          </div>
          <div class="metric metric--record">
            <div class="label">Reps max</div>
            <div class="metric__value">${bestReps ? bestReps.reps : "-"}</div>
            <div class="records-summary__meta">
              ${bestReps ? shortenLabel(bestReps.exercise, 18) : "Pas encore de PR"}
            </div>
          </div>
        </div>

        ${
          records.length
            ? `
                <div class="records-list">
                  ${records
                    .map(
                      (record) => `
                        <article class="record-card">
                          <div class="record-card__top">
                            <div>
                              <div class="record-card__eyebrow">Record local</div>
                              <div class="record-card__title">${record.exercise}</div>
                            </div>
                            <div class="record-card__count">${record.count} serie(s)</div>
                          </div>
                          <div class="record-card__stats">
                            <span class="record-card__stat"><strong>${formatLoad(record.bestLoad, record.bestLoadLabel)}</strong><em>Charge</em></span>
                            <span class="record-card__stat"><strong>${record.bestReps}</strong><em>Reps</em></span>
                          </div>
                          <div class="record-card__meta">Derniere: ${formatDate(record.lastDate)}</div>
                        </article>
                      `
                    )
                    .join("")}
                </div>
              `
            : `<div class="chart-empty">Aucun record disponible pour le moment.</div>`
        }
      </article>
    </section>
  `;
}

function renderCoachSection() {
  const coach = getCoachSnapshot();

  return `
    <article class="surface surface-pad coach-shell coach-shell--${coach.tone}" data-accent-day="${coach.day}">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Coach intelligent</div>
          <h3 class="section-title dashboard-section-head__title">Prochaine ${coach.day}: ${coach.action}</h3>
        </div>
        <div class="coach-score coach-score--${coach.readinessTone}">
          <span>${coach.readiness}</span>
          <strong>${coach.scoreText}</strong>
        </div>
      </div>

      <div class="coach-grid coach-grid--triple">
        <div class="coach-card">
          <div class="label">Charge</div>
          <div class="coach-card__value">${coach.action}</div>
          <div class="coach-card__meta">${coach.focus} - ${coach.signal}</div>
        </div>
        <div class="coach-card">
          <div class="label">Intensite</div>
          <div class="coach-card__value">${coach.intensityCall.value}</div>
          <div class="coach-card__meta">${coach.cycleLabel} - ${coach.streakText}</div>
        </div>
        <div class="coach-card">
          <div class="label">Volume</div>
          <div class="coach-card__value">${coach.volumeCall.value}</div>
          <div class="coach-card__meta">${coach.volumeCall.meta}</div>
        </div>
      </div>

      <div class="coach-note">${coach.note}</div>

      <div class="coach-pulse-grid">
        <div class="coach-pulse">
          <span class="label">Recup</span>
          <strong>${coach.recoveryCall.value}</strong>
          <span>${coach.recoveryCall.meta}</span>
        </div>
        <div class="coach-pulse">
          <span class="label">Deload</span>
          <strong>${coach.deloadCall.value}</strong>
          <span>${coach.deloadCall.meta}</span>
        </div>
        <div class="coach-pulse">
          <span class="label">Bloc</span>
          <strong>${coach.cycleLabel}</strong>
          <span>${coach.focusMeta}</span>
        </div>
      </div>

      <div class="coach-tags">
        <span class="coach-tag">Fatigue ${coach.readiness}</span>
        <span class="coach-tag">Recup ${coach.recoveryLabel}</span>
        <span class="coach-tag">Lecture ${coach.signal}</span>
        <span class="coach-tag">Bloc ${coach.day}</span>
      </div>
    </article>
  `;
}

function renderPremiumDashboard() {
  const sessionCount = getSessionCount();
  const weeklySessions = getWeeklySessionCount();
  const recentSets = getRecentSets();
  const resume = getSmartResumeData();
  const heroDay = resume?.day || state.day;
  const heroSummary = getDaySummary(heroDay);
  const heroTheme = getDayTheme(heroDay);
  const heroActionLabel = resume?.mode === "active" ? `Continuer ${heroDay}` : `Lancer ${heroDay}`;
  const heroActionAttrs = resume?.mode === "active"
    ? `data-action="resume-workout"`
    : `data-day="${heroDay}"`;
  const heroBadge = resume?.mode === "active" ? "Session active" : "Prochaine seance";
  const heroCopy = resume?.mode === "active"
    ? `Tu peux reprendre exactement la ou tu t'es arrete sur ${heroDay.toUpperCase()}.`
    : `${heroDay.toUpperCase()} t'attend avec ${heroSummary.exerciseCount} exercices et ${heroSummary.setCount} series bien posees.`;
  const activeProgramDisplay = getActiveProgramDisplay();

  return `
    <section class="stack-md">
      <article class="dashboard-hero" data-accent-day="${heroTheme.accentDay}">
        <div class="dashboard-hero__content">
          <div class="dashboard-hero__top">
            <span class="dashboard-hero__badge">${heroBadge}</span>
            <span class="dashboard-hero__tag">${heroDay}</span>
          </div>

          <div class="dashboard-hero__copy">
            <div class="label dashboard-hero__label">Programme actif</div>
            <div class="dashboard-hero__program">${activeProgramDisplay}</div>
            <h2 class="dashboard-hero__title">${heroDay.toUpperCase()}</h2>
            <div class="dashboard-hero__subtag">${heroTheme.subtitle}</div>
            <div class="dashboard-hero__cue">${heroTheme.cue}</div>
            <p class="dashboard-hero__text">${heroCopy}</p>
          </div>

          <div class="dashboard-hero__stats">
            <div class="dashboard-hero__stat">
              <span class="dashboard-hero__stat-value">${weeklySessions}</span>
              <span class="dashboard-hero__stat-label">Semaine</span>
            </div>
            <div class="dashboard-hero__stat">
              <span class="dashboard-hero__stat-value">${sessionCount}</span>
              <span class="dashboard-hero__stat-label">Total</span>
            </div>
            <div class="dashboard-hero__stat">
              <span class="dashboard-hero__stat-value">${recentSets}</span>
              <span class="dashboard-hero__stat-label">Series 7j</span>
            </div>
          </div>

          <div class="dashboard-hero__actions">
            <button class="button button--primary" ${heroActionAttrs}>
              ${heroActionLabel}
            </button>
            <button class="button button--ghost" data-screen="history">
              Voir progression
            </button>
          </div>
        </div>
      </article>

      ${getInstallHintHtml()}
      ${renderWeeklyPlanner()}
      ${renderDashboardProgressOverview(heroDay)}

      <div class="dashboard-section-head">
        <div>
          <div class="label">Choix des seances</div>
          <h3 class="section-title dashboard-section-head__title">Ton split premium</h3>
        </div>
        <div class="muted">${getProgramDays().length} blocs</div>
      </div>

      ${renderPremiumDayList()}
    </section>
  `;
}

function renderWeightView(settings, active, last, isFocusMode = false) {
  const theme = getDayTheme(state.day);

  return `
    <div class="weight-card ${isFocusMode ? "weight-card--focus" : ""}" data-accent-day="${theme.accentDay}">
      ${
        settings.deload
          ? `<div class="deload-chip"><span class="pill pill--amber">Deload suggere</span></div>`
          : ""
      }
      <div class="weight-card__head">
        <div class="label">Poids cible</div>
        <span class="weight-card__theme">${theme.badge}</span>
      </div>
      <div class="weight-card__value">
        ${
          isNumericLoad(settings.load)
            ? `${settings.load}<span class="weight-card__unit">kg</span>`
            : `<span class="weight-card__free">${settings.loadLabel || "Charge libre"}</span>`
        }
      </div>
      <div class="goal-line">
        <span class="goal-line__chip">Objectif ${active.targetLabel} reps</span>
        <span class="goal-line__chip">Repos ${active.rest}s</span>
      </div>
      ${
        isNumericLoad(settings.load) && !isFocusMode
          ? `
              <div class="load-actions">
                <button class="icon-button" data-action="decrease-load" aria-label="Baisser la charge">-</button>
                <button class="button button--ghost load-reset" data-action="reset-load">Reset cible</button>
                <button class="icon-button" data-action="increase-load" aria-label="Augmenter la charge">+</button>
              </div>
            `
          : ""
      }
      ${
        last && !isFocusMode
          ? `<div class="last-performance">Precedent : <strong>${last.reps} reps a ${formatLoad(last.load, last.loadLabel)}</strong></div>`
          : ""
      }
    </div>
  `;
}

function renderWorkoutReviewPanel() {
  return `
    <article class="surface surface-pad stack-md session-review-shell">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Ressenti</div>
          <h3 class="section-title dashboard-section-head__title">Note ta seance</h3>
        </div>
        <div class="label">Coach</div>
      </div>

      <div class="grid-2">
        <div class="field-wrap">
          <label class="label" for="workout-review-energy">Energie</label>
          <select id="workout-review-energy" class="select select--editor">
            <option value="1" ${state.workoutReviewDraft.energy === "1" ? "selected" : ""}>1 · Vide</option>
            <option value="2" ${state.workoutReviewDraft.energy === "2" ? "selected" : ""}>2 · Bas</option>
            <option value="3" ${state.workoutReviewDraft.energy === "3" ? "selected" : ""}>3 · Correct</option>
            <option value="4" ${state.workoutReviewDraft.energy === "4" ? "selected" : ""}>4 · Bon</option>
            <option value="5" ${state.workoutReviewDraft.energy === "5" ? "selected" : ""}>5 · Gros jus</option>
          </select>
        </div>

        <div class="field-wrap">
          <label class="label" for="workout-review-pain">Douleur / gene</label>
          <select id="workout-review-pain" class="select select--editor">
            <option value="0" ${state.workoutReviewDraft.pain === "0" ? "selected" : ""}>0 · RAS</option>
            <option value="1" ${state.workoutReviewDraft.pain === "1" ? "selected" : ""}>1 · Legere</option>
            <option value="2" ${state.workoutReviewDraft.pain === "2" ? "selected" : ""}>2 · A surveiller</option>
            <option value="3" ${state.workoutReviewDraft.pain === "3" ? "selected" : ""}>3 · Forte</option>
          </select>
        </div>
      </div>

      <div class="field-wrap">
        <label class="label" for="workout-review-note">Note rapide</label>
        <textarea id="workout-review-note" class="textarea textarea--editor" rows="3" placeholder="Ex: super pecs, souffle moyen, genou nickel, fatigue en fin de bloc">${state.workoutReviewDraft.note}</textarea>
      </div>
    </article>
  `;
}

function getWorkoutFinishTone(summary) {
  if (!summary) return "hold";
  if (summary.counts.progress >= summary.counts.hold && summary.counts.progress >= summary.counts.reduce) {
    return "progress";
  }
  return summary.counts.reduce > summary.counts.hold ? "reduce" : "hold";
}

function renderWorkoutCompletionScreen() {
  const summary = getWorkoutCompletionSummary();
  const lastEntry = getLastPendingEntry();
  const theme = getDayTheme(state.day);

  if (!summary) {
    return `
      <section class="stack-md">
        <section class="surface surface-pad-lg center-block stack-md session-finish" data-accent-day="${theme.accentDay}">
          <div class="trophy">${theme.mark}</div>
          <div class="stack-sm">
            <h2 class="section-title">Seance terminee</h2>
          </div>
          <button class="button button--primary" data-action="finalize-workout">
            Terminer la seance
          </button>
        </section>
      </section>
    `;
  }

  const finishTone = getWorkoutFinishTone(summary);
  const finishBadge =
    finishTone === "progress"
      ? "Progression nette"
      : finishTone === "reduce"
      ? "Ajustement propre"
      : "Base solide";

  return `
    <section class="stack-md">
      <section class="surface surface-pad-lg session-finish session-finish--${finishTone}" data-accent-day="${theme.accentDay}">
        <div class="session-finish__hero">
          <div class="trophy">${theme.mark}</div>
          <div class="stack-sm">
            <div class="session-finish__topline">
              <div class="label">Fin de seance</div>
              <span class="session-finish__day">${state.day}</span>
            </div>
            <h2 class="section-title session-finish__title">Belle seance.</h2>
            <div class="session-finish__subtag">${finishBadge} - ${theme.cue}</div>
            <div class="muted">${summary.coachLine}</div>
          </div>
        </div>

        <div class="grid-2 session-finish__stats">
          <article class="dashboard-mini-card">
            <div class="label">Series</div>
            <div class="dashboard-mini-card__value">${summary.setCount}</div>
            <div class="dashboard-mini-card__meta">${summary.exerciseCount} exos</div>
          </article>
          <article class="dashboard-mini-card">
            <div class="label">Duree</div>
            <div class="dashboard-mini-card__value">${summary.durationLabel}</div>
            <div class="dashboard-mini-card__meta">${summary.volumeLabel} de volume</div>
          </article>
        </div>

        <div class="session-finish__verdicts">
          <span class="verdict-chip verdict-chip--progress">Monter ${summary.counts.progress}</span>
          <span class="verdict-chip verdict-chip--hold">Garder ${summary.counts.hold}</span>
          <span class="verdict-chip verdict-chip--reduce">Baisser ${summary.counts.reduce}</span>
        </div>

        ${
          lastEntry
            ? `
                <div class="last-set-card last-set-card--summary">
                  <div class="last-set-card__copy">
                    <span class="label">Derniere serie</span>
                    <strong>${lastEntry.exercise}</strong>
                    <span>${lastEntry.reps} reps - ${formatLoad(lastEntry.load, lastEntry.loadLabel)}</span>
                  </div>
                  <div class="last-set-card__actions">
                    <button class="button button--ghost button--compact" data-action="edit-last-set">Corriger</button>
                    <button class="button button--ghost button--compact" data-action="undo-last-set">Annuler</button>
                  </div>
                </div>
              `
            : ""
        }

        ${renderWorkoutReviewPanel()}

        <div class="stack-sm session-finish__actions">
          <button class="button button--primary" data-action="finalize-workout">
            Enregistrer la seance
          </button>
          <button class="button button--ghost" data-action="restart-workout">
            Annuler et recommencer
          </button>
        </div>
      </section>
    </section>
  `;
}

function renderWorkout() {
  const active = getActiveExercise();
  const settings = getCurrentSettings();
  const last = getLastPerformance();
  const advice = getCurrentAdvice();
  const isFocusMode = state.focusWorkoutMode;
  const theme = getDayTheme(state.day);
  const activeWorkoutSection = sanitizeWorkoutSectionFilter(state.workoutSectionFilter);
  const showLoadSection = shouldRenderWorkoutSection("load", activeWorkoutSection);
  const showEntrySection = shouldRenderWorkoutSection("entry", activeWorkoutSection);

  if (state.workoutFinished) {
    return renderWorkoutCompletionScreen();
  }

  if (!active) {
    return `
      <section class="surface surface-pad">
        <div class="muted">Aucun exercice disponible pour cette journee.</div>
      </section>
    `;
  }

  return `
    <section class="surface surface-pad-lg stack-md workout-shell ${isFocusMode ? "workout-shell--focus" : ""}" data-accent-day="${theme.accentDay}">
      <div class="row row-start workout-shell__header">
        <div class="workout-shell__hero-copy">
          <div class="workout-shell__eyebrow-row">
            <span class="pill">${active.series}</span>
            <span class="workout-shell__day-badge">${theme.badge}</span>
          </div>
          <h2 class="hero-title">${active.exercise}</h2>
          <div class="workout-shell__subtitle">${theme.subtitle}</div>
          ${
            isFocusMode
              ? ""
              : `<div class="workout-shell__cue-row"><span>${theme.cue}</span><span class="workout-shell__meta-chip">Exo ${state.currentIndex + 1}/${getExercises().length} - ${getProgressPercent()}%</span></div>`
          }
        </div>
        <div class="workout-shell__tools">
          <button
            class="icon-button ${state.focusWorkoutMode ? "is-active" : ""}"
            data-action="toggle-focus-workout"
            aria-label="${state.focusWorkoutMode ? "Quitter le mode focus" : "Activer le mode focus"}"
          >
            ${state.focusWorkoutMode ? "FOC" : "ZEN"}
          </button>
          <button
            class="icon-button ${state.showPlates ? "is-active" : ""}"
            data-action="toggle-plates"
            aria-label="${state.showPlates ? "Masquer les disques" : "Afficher les disques"}"
          >
            ${state.showPlates ? "KG" : "DB"}
          </button>
        </div>
      </div>

      <div class="history-filter-row history-filter-row--compact">
        ${WORKOUT_SECTION_FILTERS
          .map(
            (section) => `
              <button
                class="history-filter-chip ${activeWorkoutSection === section.key ? "is-active" : ""}"
                data-action="set-workout-section-filter"
                data-workout-section="${section.key}"
                aria-pressed="${activeWorkoutSection === section.key ? "true" : "false"}"
              >
                ${section.label}
              </button>
            `
          )
          .join("")}
      </div>

      ${showLoadSection ? (state.showPlates ? renderPlateView(settings) : renderWeightView(settings, active, last, isFocusMode)) : ""}

      ${
        showEntrySection
          ? `
            <div class="stack-md workout-entry-panel workout-entry-panel--sticky">
              <div class="workout-entry-row">
                <div class="field-wrap workout-entry-field">
                  <label class="label" for="reps-input">Reps</label>
                  <input
                    id="reps-input"
                    class="input input--reps"
                    type="number"
                    min="1"
                    inputmode="numeric"
                    placeholder="${active.targetLabel}"
                    value="${state.repsInput}"
                  />
                </div>

                <button
                  id="validate-set-button"
                  class="${getValidationButtonClass(advice)} validation-button--inline"
                  data-action="validate-set"
                  aria-label="${getValidationButtonLabel(advice)}"
                  ${hasValidRepsInput() ? "" : "disabled"}
                >
                  ${renderValidationButtonContent(advice)}
                </button>
              </div>

              ${renderRepQuickPicks()}

              ${renderLastSetActions()}
            </div>
          `
          : ""
      }
    </section>
  `;
}

function getScreenMeta(screen = state.screen) {
  return {
    dashboard: {
      title: "Dashboard",
      kicker: "Overview",
      navLabel: "Accueil",
    },
    workout: {
      title: "Seance",
      kicker: "Training",
      navLabel: "Seance",
    },
    history: {
      title: "Suivi",
      kicker: "Progress",
      navLabel: "Suivi",
    },
    plan: {
      title: "Plan",
      kicker: "Program",
      navLabel: "Plan",
    },
    settings: {
      title: "Reglages",
      kicker: "Control",
      navLabel: "Config",
    },
  }[screen] || {
    title: "Dashboard",
    kicker: "Overview",
    navLabel: "Accueil",
  };
}

function renderNavIcon(screen) {
  if (screen === "dashboard") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="2"></rect>
        <rect x="14" y="4" width="6" height="10" rx="2"></rect>
        <rect x="4" y="14" width="6" height="6" rx="2"></rect>
        <rect x="14" y="16" width="6" height="4" rx="2"></rect>
      </svg>
    `;
  }

  if (screen === "workout") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10h3v4H3z"></path>
        <path d="M18 10h3v4h-3z"></path>
        <path d="M6 9h2v6H6z"></path>
        <path d="M16 9h2v6h-2z"></path>
        <path d="M8 11h8v2H8z"></path>
      </svg>
    `;
  }

  if (screen === "history") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18h14"></path>
        <path d="M7 15l3-3 3 2 4-5"></path>
        <circle cx="7" cy="15" r="1.4"></circle>
        <circle cx="10" cy="12" r="1.4"></circle>
        <circle cx="13" cy="14" r="1.4"></circle>
        <circle cx="17" cy="9" r="1.4"></circle>
      </svg>
    `;
  }

  if (screen === "plan") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="3"></rect>
        <path d="M8 9h8"></path>
        <path d="M8 13h8"></path>
        <path d="M8 17h5"></path>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7h14"></path>
      <path d="M7 12h10"></path>
      <path d="M9 17h6"></path>
      <circle cx="7" cy="7" r="2"></circle>
      <circle cx="15" cy="12" r="2"></circle>
      <circle cx="11" cy="17" r="2"></circle>
    </svg>
  `;
}

function renderPlannerActivityIcon(type = "workout") {
  if (type === "cardio") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18h14"></path>
        <path d="M7.5 18l2.2-8.2h5.4l2.4 8.2"></path>
        <path d="M10.4 9.8V6.9h3.2v2.9"></path>
        <path d="M14.8 7h2.7"></path>
        <path d="M8.8 14.1h6.5"></path>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 9.5h2.3v5H3.5z"></path>
      <path d="M18.2 9.5h2.3v5h-2.3z"></path>
      <path d="M5.8 8.6h2.1v6.8H5.8z"></path>
      <path d="M16.1 8.6h2.1v6.8h-2.1z"></path>
      <path d="M7.9 10.9h8.2v2.2H7.9z"></path>
      <path d="M12 10.9v2.2"></path>
    </svg>
  `;
}

function getNavItems() {
  return ["dashboard", "workout", "history", "plan", "settings"].map((screen) => ({
    screen,
    ...getScreenMeta(screen),
  }));
}

function dismissBootSplash() {
  const splash = document.getElementById("boot-splash");
  if (!splash || splash.dataset.dismissed === "1") return;

  splash.dataset.dismissed = "1";
  requestAnimationFrame(() => splash.classList.add("is-hidden"));
  window.setTimeout(() => {
    if (splash.parentNode) splash.parentNode.removeChild(splash);
  }, 320);
}

function renderEmptyState(title, text, eyebrow = "A venir", accentDay = state.day) {
  return `
    <article class="surface surface-pad empty-state" data-accent-day="${accentDay}">
      <div class="empty-state__icon">ET</div>
      <div class="empty-state__eyebrow">${eyebrow}</div>
      <h3 class="empty-state__title">${title}</h3>
      <p class="empty-state__text">${text}</p>
    </article>
  `;
}

function renderDashboardProgressSparkline(entries = [], metric = "load") {
  if (!entries.length) return "";
  const max = Math.max(...entries.map((entry) => entry.chartValue || 0), 1);

  return `
    <div class="progress-overview-spark">
      ${entries
        .map((entry, index) => {
          const height = Math.max(12, Math.round(((entry.chartValue || 0) / max) * 48));
          return `
            <div class="progress-overview-spark__col ${index === entries.length - 1 ? "is-latest" : ""}">
              <span
                class="progress-overview-spark__bar ${metric === "reps" ? "progress-overview-spark__bar--reps" : ""}"
                style="height:${height}px"
              ></span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderDashboardProgressOverview(day = state.day) {
  const cards = getDashboardProgressCards(day);
  if (!cards.length) {
    return `
      <article class="surface surface-pad progress-overview-shell" data-accent-day="${resolveDayThemeKey(day)}">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Vue globale</div>
            <h3 class="section-title dashboard-section-head__title">Progression du ${day}</h3>
            <div class="dashboard-hero__cue">Cette vue suivra les exos de la seance mise en avant des que tu auras un peu d'historique.</div>
          </div>
        </div>

        <div class="chart-empty">
          <div>
            <strong>Pas encore assez de recul sur ${day}</strong>
            <span>Fais quelques passages sur cette seance et les cartes de progression apparaitront ici.</span>
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="surface surface-pad progress-overview-shell" data-accent-day="${resolveDayThemeKey(day)}">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Vue globale</div>
          <h3 class="section-title dashboard-section-head__title">Progression du ${day}</h3>
          <div class="dashboard-hero__cue">Lis d'un coup d'oeil les exos qui correspondent a cette seance.</div>
        </div>
        <div class="chart-shell__metric">${cards.length} exo${cards.length > 1 ? "s" : ""}</div>
      </div>

      <div class="progress-overview-grid">
        ${cards
          .map(
            (card) => `
              <button
                class="progress-overview-card"
                data-action="focus-dashboard-chart"
                data-chart-key="${card.key}"
                data-history-day="${card.day}"
                data-accent-day="${card.accentDay}"
                aria-label="Voir le suivi detaille de ${card.exercise}"
              >
                <div class="progress-overview-card__top">
                  <div>
                    <div class="progress-overview-card__eyebrow">${card.day} - ${card.series}</div>
                    <div class="progress-overview-card__title">${card.exercise}</div>
                  </div>
                  <span class="progress-overview-card__delta progress-overview-card__delta--${card.trend}">
                    ${card.deltaLabel}
                  </span>
                </div>

                <div class="progress-overview-card__stats">
                  <div>
                    <div class="label">Dernier</div>
                    <div class="progress-overview-card__value">${card.latestValueLabel}</div>
                  </div>
                  <div>
                    <div class="label">Points</div>
                    <div class="progress-overview-card__meta">${card.entryCount}</div>
                  </div>
                </div>

                ${renderDashboardProgressSparkline(card.entries, card.metric)}

                <div class="progress-overview-card__foot">
                  <span>${formatDate(card.first.date)} -> ${formatDate(card.latest.date)}</span>
                  <span>${card.metric === "load" ? "Charge" : "Reps"}</span>
                </div>
              </button>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderChart(preferredKey = "") {
  const chart = getChartData(preferredKey);

  if (!chart.entries.length) {
    return `
      <div class="chart-empty">
        <div class="chart-empty__icon">ET</div>
        <strong>Pas encore de data</strong>
        <span>Lance deux passages sur le meme exercice pour lire une vraie courbe.</span>
      </div>
    `;
  }

  const max = Math.max(...chart.entries.map((entry) => entry.chartValue), 1);

  return `
    <div class="chart-bars">
      ${chart.entries
        .map((entry, index) => {
          const height = Math.max(24, Math.round((entry.chartValue / max) * 118));
          return `
            <div class="chart-column ${index === chart.entries.length - 1 ? "is-latest" : ""}">
              <div class="chart-value">${entry.chartValue}${chart.metric === "load" ? "kg" : ""}</div>
              <div class="chart-track">
                <div
                  class="chart-bar ${chart.metric === "reps" ? "chart-bar--reps" : ""}"
                  style="height:${height}px"
                ></div>
              </div>
              <div class="chart-date">${entry.shortDate}</div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderLifestyleDashboardSection() {
  if (!state.cardioSessions.length && !state.bodyMetrics.length && !state.sessionReviews.length) {
    return "";
  }

  const weeklyCardioMinutes = getWeeklyCardioMinutes();
  const latestBody = getLatestBodyMetric();
  const latestReview = getLatestSessionReview();

  return `
    <article class="surface surface-pad stack-md" data-accent-day="${state.day}">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Hors salle</div>
          <h3 class="section-title dashboard-section-head__title">Cardio, physique et ressenti</h3>
        </div>
        <div class="label">Lifestyle</div>
      </div>

      <div class="dashboard-hero__stats">
        <div class="dashboard-hero__stat">
          <span class="dashboard-hero__stat-value">${weeklyCardioMinutes}</span>
          <span class="dashboard-hero__stat-label">Cardio 7j</span>
        </div>
        <div class="dashboard-hero__stat">
          <span class="dashboard-hero__stat-value">${latestBody?.weight ? formatCompactNumber(latestBody.weight) : "-"}</span>
          <span class="dashboard-hero__stat-label">${latestBody?.weight ? "Poids kg" : "Poids"}</span>
        </div>
        <div class="dashboard-hero__stat">
          <span class="dashboard-hero__stat-value">${latestReview ? `${latestReview.energy}/5` : "-"}</span>
          <span class="dashboard-hero__stat-label">${latestReview ? `Gene ${latestReview.pain}/3` : "Ressenti"}</span>
        </div>
      </div>
    </article>
  `;
}

function renderCardioOverviewSection() {
  const recent = getSortedCardioSessions().slice(0, 3);
  const weeklyMinutes = getWeeklyCardioMinutes();

  return `
    <button class="surface surface-pad stack-md surface-button history-entry-card" data-action="open-history-section" data-history-section="cardio" data-accent-day="Legs" aria-label="Ouvrir le suivi cardio">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Cardio / tapis</div>
          <h3 class="section-title dashboard-section-head__title">Dernieres seances cardio</h3>
        </div>
        <div class="label">${state.cardioSessions.length ? `${weeklyMinutes} min / 7j` : "Ouvrir"}</div>
      </div>

      <div class="metric-grid">
        <div class="metric">
          <div class="label">7 jours</div>
          <div class="metric__value">${weeklyMinutes} min</div>
        </div>
        <div class="metric">
          <div class="label">Total</div>
          <div class="metric__value">${state.cardioSessions.length}</div>
        </div>
      </div>

      ${
        recent.length
          ? `
            <div class="pending-list">
              ${recent
                .map((entry) => {
                  const meta = getCardioEntryMeta(entry);
                  return `
                    <div class="pending-item">
                      <div>
                        <div class="pending-item__title">${getCardioTypeMeta(entry.type).title}</div>
                        <div class="pending-item__meta">${formatDate(entry.date)}${meta ? ` · ${meta}` : ""}${entry.note ? ` · ${shortenLabel(entry.note, 40)}` : ""}</div>
                      </div>
                      <div class="pending-item__score">${entry.duration} min</div>
                    </div>
                  `;
                })
                .join("")}
            </div>
          `
          : `<div class="muted">Ajoute une marche ou un cardio pour lancer le suivi et retrouver ici tes dernieres donnees.</div>`
      }

      <div class="history-entry-card__footer" aria-hidden="true">
        <span>Ouvrir le detail</span>
        <span class="history-entry-card__arrow">></span>
      </div>
    </button>
  `;
}

function renderBodyMetricsOverviewSection() {
  const latest = getLatestBodyMetric();
  const coach = getPhysiqueCoachSnapshot();
  const nutrition = getBodyNutritionSnapshot();
  const previous = getPreviousBodyMetric();

  return `
    <button class="surface surface-pad stack-md surface-button history-entry-card" data-action="open-history-section" data-history-section="body" data-body-section="entry" data-accent-day="Upper" aria-label="Ouvrir le suivi des mensurations">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Mensurations</div>
          <h3 class="section-title dashboard-section-head__title">${coach.goalMeta.label}</h3>
        </div>
        <div class="label">${latest ? formatDate(latest.date) : "Ouvrir"}</div>
      </div>

      <div class="metric-grid">
        <div class="metric">
          <div class="label">Poids</div>
          <div class="metric__value">${formatOptionalMetric(latest?.weight, " kg")}</div>
        </div>
        <div class="metric">
          <div class="label">Tour taille</div>
          <div class="metric__value">${formatOptionalMetric(latest?.waist, " cm")}</div>
        </div>
        <div class="metric">
          <div class="label">Bras</div>
          <div class="metric__value">${formatOptionalMetric(latest?.arms, " cm")}</div>
        </div>
        <div class="metric">
          <div class="label">Cuisses</div>
          <div class="metric__value">${formatOptionalMetric(latest?.thighs, " cm")}</div>
        </div>
      </div>

      <div class="muted">
        ${
          latest
            ? `${coach.headline} · Poids ${formatMetricDelta(latest.weight, previous?.weight, " kg")} · Tour taille ${formatMetricDelta(latest.waist, previous?.waist, " cm")}`
            : `${coach.goalMeta.entryHint} Ouvre ce bloc pour ajouter ta premiere mesure.`
        }
      </div>
      ${
        nutrition.ready && latest
          ? `<div class="muted">Objectif ~ ${nutrition.targetCalories} kcal · P ${nutrition.proteinGrams} g · G ${nutrition.carbsGrams} g · L ${nutrition.fatGrams} g</div>`
          : ""
      }

      <div class="history-entry-card__footer" aria-hidden="true">
        <span>Ouvrir le detail</span>
        <span class="history-entry-card__arrow">></span>
      </div>
    </button>
  `;
}

function renderSessionReviewsOverviewSection() {
  const recent = getRecentSessionReviews(30).slice(0, 3);
  const avgEnergy = recent.length
    ? Math.round((recent.reduce((total, entry) => total + entry.energy, 0) / recent.length) * 10) / 10
    : null;
  const avgPain = recent.length
    ? Math.round((recent.reduce((total, entry) => total + entry.pain, 0) / recent.length) * 10) / 10
    : null;

  return `
    <button class="surface surface-pad stack-md surface-button history-entry-card" data-action="open-history-section" data-history-section="reviews" data-accent-day="${state.day}" aria-label="Ouvrir le suivi ressenti">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Ressenti</div>
          <h3 class="section-title dashboard-section-head__title">Bilan recent</h3>
        </div>
        <div class="label">${recent.length ? `${recent.length} recent${recent.length > 1 ? "s" : ""}` : "Ouvrir"}</div>
      </div>

      <div class="metric-grid">
        <div class="metric">
          <div class="label">Energie moy.</div>
          <div class="metric__value">${avgEnergy ? `${formatCompactNumber(avgEnergy)}/5` : "-"}</div>
        </div>
        <div class="metric">
          <div class="label">Gene moy.</div>
          <div class="metric__value">${avgPain !== null ? `${formatCompactNumber(avgPain)}/3` : "-"}</div>
        </div>
      </div>

      ${
        recent.length
          ? `
            <div class="pending-list">
              ${recent
                .map(
                  (entry) => `
                    <div class="pending-item">
                      <div>
                        <div class="pending-item__title">${entry.day} · ${formatDate(entry.date)}</div>
                        <div class="pending-item__meta">${entry.exerciseCount} exos · ${entry.setCount} series · ${entry.durationMinutes} min${entry.note ? ` · ${shortenLabel(entry.note, 42)}` : ""}</div>
                      </div>
                      <div class="pending-item__score">
                        <span class="pill ${getReviewTone(entry) === "progress" ? "" : getReviewTone(entry) === "reduce" ? "pill--amber" : "pill--outline"}">E${entry.energy} · D${entry.pain}</span>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
          : `<div class="muted">Le ressenti de fin de seance apparaitra ici apres tes prochains enregistrements.</div>`
      }

      <div class="history-entry-card__footer" aria-hidden="true">
        <span>Ouvrir le detail</span>
        <span class="history-entry-card__arrow">></span>
      </div>
    </button>
  `;
}

function renderSessionReviewsDetailSection() {
  const reviews = getRecentSessionReviews(3650).slice(0, 12);
  if (!reviews.length) {
    return renderHistorySectionEmptyState("reviews");
  }

  const avgEnergy =
    Math.round((reviews.reduce((total, entry) => total + entry.energy, 0) / reviews.length) * 10) / 10;
  const avgPain =
    Math.round((reviews.reduce((total, entry) => total + entry.pain, 0) / reviews.length) * 10) / 10;

  return `
    <article class="surface surface-pad stack-md" data-accent-day="${state.day}">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Ressenti</div>
          <h3 class="section-title dashboard-section-head__title">Journal de ressenti</h3>
        </div>
        <div class="label">${reviews.length} entree${reviews.length > 1 ? "s" : ""}</div>
      </div>

      <div class="metric-grid">
        <div class="metric">
          <div class="label">Energie moy.</div>
          <div class="metric__value">${Number.isFinite(avgEnergy) ? `${formatCompactNumber(avgEnergy)}/5` : "-"}</div>
        </div>
        <div class="metric">
          <div class="label">Gene moy.</div>
          <div class="metric__value">${Number.isFinite(avgPain) ? `${formatCompactNumber(avgPain)}/3` : "-"}</div>
        </div>
      </div>

      <div class="pending-list">
        ${reviews
          .map(
            (entry) => `
              <div class="pending-item">
                <div>
                  <div class="pending-item__title">${entry.day} · ${formatDate(entry.date)}</div>
                  <div class="pending-item__meta">${entry.exerciseCount} exos · ${entry.setCount} series · ${entry.durationMinutes} min${entry.note ? ` · ${shortenLabel(entry.note, 64)}` : ""}</div>
                </div>
                <div class="pending-item__score">
                  <span class="pill ${getReviewTone(entry) === "progress" ? "" : getReviewTone(entry) === "reduce" ? "pill--amber" : "pill--outline"}">E${entry.energy} · D${entry.pain}</span>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderHistorySectionEmptyState(section) {
  const emptyStates = {
    cardio: {
      title: "Aucun cardio pour l'instant",
      text: "Ajoute une seance tapis ou cardio pour retrouver ici tes durees et tes tendances.",
      eyebrow: "Cardio",
      accentDay: "Legs",
    },
    body: {
      title: "Aucune mesure pour l'instant",
      text: "Ajoute ton poids ou tes mensurations pour suivre visuellement ta progression physique.",
      eyebrow: "Mensurations",
      accentDay: "Upper",
    },
    reviews: {
      title: "Aucun ressenti pour l'instant",
      text: "Ton energie, ta gene et tes notes de fin de seance apparaitront ici apres enregistrement.",
      eyebrow: "Ressenti",
      accentDay: state.day,
    },
  };

  const current = emptyStates[section];
  if (!current) return "";
  return renderEmptyState(current.title, current.text, current.eyebrow, current.accentDay);
}

function renderHistoryOverview() {
  const filterOptions = getHistoryOverviewFilterOptions();
  const activeFilter = sanitizeHistoryOverviewFilter(state.historyOverviewFilter);
  const sectionOptions = getHistorySectionFilterOptions();
  const activeSectionFilter = sanitizeHistorySectionFilter(state.historySectionFilter);
  const filteredHistory = getFilteredHistoryOverviewEntries(activeFilter);
  const cards = getHistoryOverviewCards(filteredHistory);
  const { heaviest, bestReps } = getGlobalRecords(filteredHistory);
  const showRecords = shouldRenderHistorySection("records", activeSectionFilter);
  const shouldRenderRecordsSection = showRecords && (state.history.length || activeSectionFilter === "records");
  const showCardio = shouldRenderHistorySection("cardio", activeSectionFilter);
  const showBody = shouldRenderHistorySection("body", activeSectionFilter);
  const showReviews = shouldRenderHistorySection("reviews", activeSectionFilter);
  const cardioSection = showCardio
    ? activeSectionFilter === "cardio"
      ? renderCardioSettingsSection()
      : renderCardioOverviewSection()
    : "";
  const bodySection = showBody
    ? activeSectionFilter === "body"
      ? renderBodyMetricsSection()
      : renderBodyMetricsOverviewSection()
    : "";
  const reviewSection = showReviews
    ? activeSectionFilter === "reviews"
      ? renderSessionReviewsDetailSection()
      : renderSessionReviewsOverviewSection()
    : "";

  return `
    <section class="history-list">
      <article class="surface surface-pad stack-sm" data-accent-day="${state.day}">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Acces direct</div>
            <h3 class="section-title dashboard-section-head__title">Trouver le bon bloc instantanement</h3>
          </div>
          <div class="label">${sectionOptions.find((option) => option.key === activeSectionFilter)?.label || "Tout"}</div>
        </div>

        <div class="history-filter-row">
          ${sectionOptions
            .map(
              (option) => `
                <button
                  class="history-filter-chip ${activeSectionFilter === option.key ? "is-active" : ""}"
                  data-action="set-history-section-filter"
                  data-history-section="${option.key}"
                  aria-pressed="${activeSectionFilter === option.key ? "true" : "false"}"
                >
                  ${option.label}
                </button>
              `
            )
            .join("")}
        </div>
      </article>

      ${cardioSection}
      ${bodySection}
      ${reviewSection}

      ${
        shouldRenderRecordsSection && filterOptions.length > 1
          ? `
            <article class="surface surface-pad stack-sm" data-accent-day="${state.day}">
              <div class="dashboard-section-head">
                <div>
                  <div class="label">Filtre rapide</div>
                  <h3 class="section-title dashboard-section-head__title">Trouver une seance vite</h3>
                </div>
                <div class="label">${activeFilter === "all" ? "Tout afficher" : activeFilter}</div>
              </div>

              <div class="history-filter-row">
                ${filterOptions
                  .map(
                    (option) => `
                      <button
                        class="history-filter-chip ${activeFilter === option.key ? "is-active" : ""}"
                        data-action="set-history-overview-filter"
                        data-history-filter="${option.key}"
                        aria-pressed="${activeFilter === option.key ? "true" : "false"}"
                      >
                        ${option.label}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `
          : ""
      }

      ${
        shouldRenderRecordsSection
          ? `
            <article class="surface surface-pad records-shell" data-accent-day="${state.day}">
              <div class="dashboard-section-head">
                <div>
                  <div class="label">Suivi</div>
                  <h3 class="section-title dashboard-section-head__title">Meilleurs PR par seance</h3>
                </div>
                <div class="label">${cards.length} seance${cards.length > 1 ? "s" : ""}</div>
              </div>

              <div class="records-summary">
                <div class="metric metric--record">
                  <div class="label">Charge max</div>
                  <div class="metric__value">${heaviest ? formatLoad(heaviest.load, heaviest.loadLabel) : "-"}</div>
                  <div class="records-summary__meta">
                    ${heaviest ? `${shortenLabel(heaviest.exercise, 18)} - ${heaviest.reps} reps` : "Pas encore de PR"}
                  </div>
                </div>
                <div class="metric metric--record">
                  <div class="label">Reps max</div>
                  <div class="metric__value">${bestReps ? bestReps.reps : "-"}</div>
                  <div class="records-summary__meta">
                    ${bestReps ? shortenLabel(bestReps.exercise, 18) : "Pas encore de PR"}
                  </div>
                </div>
              </div>
            </article>

            <div class="history-group-list">
              ${
                cards.length
                  ? cards
                      .map(
                        (card) => `
                          <button class="surface surface-pad history-group-card history-entry-card history-entry-card--session" data-action="open-history-detail" data-history-key="${card.key}" data-accent-day="${card.day}">
                            <div class="history-group-card__top">
                              <div class="history-card__identity">
                                <div class="history-card__eyebrow">${card.exerciseCount} exo${card.exerciseCount > 1 ? "s" : ""} - ${card.slotCount} slot${card.slotCount > 1 ? "s" : ""}</div>
                                <div class="history-card__title">${card.day}</div>
                              </div>
                              <span class="pill pill--outline">${formatDate(card.lastDate)}</span>
                            </div>

                            <div class="history-group-card__stats">
                              <span class="history-group-card__stat">
                                <strong>${isNumericLoad(card.bestLoad) ? formatLoad(card.bestLoad, card.bestLoadLabel) : "-"}</strong>
                                <em>PR charge</em>
                                <span class="history-group-card__detail">${card.bestLoadExercise ? shortenLabel(card.bestLoadExercise, 16) : "Aucun exo"}</span>
                              </span>
                              <span class="history-group-card__stat">
                                <strong>${card.bestReps}</strong>
                                <em>PR reps</em>
                                <span class="history-group-card__detail">${card.bestRepsExercise ? shortenLabel(card.bestRepsExercise, 16) : "Aucun exo"}</span>
                              </span>
                              <span class="history-group-card__stat">
                                <strong>${card.count}</strong>
                                <em>Logs</em>
                              </span>
                              <span class="history-group-card__stat">
                                <strong>${card.exerciseCount}</strong>
                                <em>Exos</em>
                              </span>
                            </div>

                            <div class="history-entry-card__footer" aria-hidden="true">
                              <span>Voir les exos et la courbe</span>
                              <span class="history-entry-card__arrow">></span>
                            </div>
                          </button>
                        `
                      )
                      .join("")
                  : `
                      <article class="surface surface-pad empty-state" data-accent-day="${state.day}">
                        <div class="empty-state__icon">ET</div>
                        <div class="empty-state__eyebrow">Suivi</div>
                        <h3 class="empty-state__title">Aucune seance pour ce filtre</h3>
                        <p class="empty-state__text">Change de filtre pour revoir l'ensemble ou choisis une autre seance.</p>
                      </article>
                    `
              }
            </div>
          `
          : ""
      }
    </section>
  `;
}

function renderHistoryDetail() {
  const day = state.historyDetailKey;
  const entries = getHistoryDetailEntries(day);
  if (!entries.length) {
    return renderHistoryOverview();
  }

  const latest = entries[0];
  const bestLoadEntry = getBestLoadEntry(entries);
  const bestRepsEntry = getBestRepsEntry(entries);
  const slotOptions = getHistoryDetailSlotOptions(day);
  const detailGroups = getHistoryDetailGroups(day);
  const chartKey = getPreferredHistoryChartKey(day, state.selectedChartKey);
  const chart = getChartData(chartKey);
  const sortedHistory = getSortedHistory();
  const activeDetailSection = sanitizeHistoryDetailSectionFilter(state.historyDetailSectionFilter);
  const showDetailRecords = shouldRenderHistoryDetailSection("records", activeDetailSection);
  const showDetailChart = shouldRenderHistoryDetailSection("chart", activeDetailSection);
  const showDetailGroups = shouldRenderHistoryDetailSection("groups", activeDetailSection);

  return `
    <section class="history-list">
      <article class="surface surface-pad history-detail-hero" data-accent-day="${latest.day}">
        <div class="history-detail-hero__top">
          <button class="button button--ghost button--compact" data-action="close-history-detail">
            Retour
          </button>
          <span class="pill pill--outline">${latest.day}</span>
        </div>

        <div class="stack-sm">
          <div class="history-card__eyebrow">${detailGroups.length} exo${detailGroups.length > 1 ? "s" : ""} - ${slotOptions.length} slot${slotOptions.length > 1 ? "s" : ""}</div>
          <h2 class="section-title">${latest.day}</h2>
          <div class="muted">Tous les PR de cette seance, puis le detail groupe par exercice.</div>
        </div>

        <div class="history-filter-row history-filter-row--compact">
          ${HISTORY_DETAIL_SECTION_FILTERS
            .map(
              (section) => `
                <button
                  class="history-filter-chip ${activeDetailSection === section.key ? "is-active" : ""}"
                  data-action="set-history-detail-section-filter"
                  data-history-detail-section="${section.key}"
                  aria-pressed="${activeDetailSection === section.key ? "true" : "false"}"
                >
                  ${section.label}
                </button>
              `
            )
            .join("")}
        </div>

        ${
          showDetailRecords
            ? `
        <div class="records-summary">
          <div class="metric metric--record">
            <div class="label">PR charge</div>
            <div class="metric__value">
              ${bestLoadEntry ? formatLoad(bestLoadEntry.load, bestLoadEntry.loadLabel) : "-"}
            </div>
            <div class="records-summary__meta">${entries.length} passage(s)</div>
          </div>
          <div class="metric metric--record">
            <div class="label">PR reps</div>
            <div class="metric__value">${bestRepsEntry ? bestRepsEntry.reps : "-"}</div>
            <div class="records-summary__meta">${slotOptions.length} slot(s) actifs</div>
          </div>
        </div>
            `
            : ""
        }
      </article>

      ${
        showDetailChart
          ? `
      <article class="surface surface-pad chart-shell" data-accent-day="${latest.day}">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Progression</div>
            <h3 class="section-title dashboard-section-head__title">Courbe d'un slot de ${latest.day}</h3>
          </div>
          <div class="chart-shell__metric">${chart.entries.length} pts - ${chart.metric === "load" ? "charge" : "reps"}</div>
        </div>

        ${
          slotOptions.length > 1
            ? `
              <select class="select" id="history-detail-chart-select" aria-label="Choisir un slot de progression">
                ${slotOptions
                  .map(
                    (option) => `
                      <option value="${option.key}" ${option.key === chartKey ? "selected" : ""}>
                        ${option.exercise} - ${option.series}
                      </option>
                    `
                  )
                  .join("")}
              </select>
            `
            : ""
        }

        <div class="chart-box">${renderChart(chartKey)}</div>
      </article>
          `
          : ""
      }

      ${
        showDetailGroups
          ? `
      <div class="history-slot-list">
        ${detailGroups
          .map(
            (group) => `
              <article class="surface surface-pad history-slot-card" data-accent-day="${group.day}">
                <div class="history-group-card__top">
                  <div class="history-card__identity">
                    <div class="history-card__eyebrow">${group.slotCount} slot${group.slotCount > 1 ? "s" : ""}</div>
                    <div class="history-card__title">${group.exercise}</div>
                  </div>
                  <span class="pill pill--outline">${group.entries.length} log${group.entries.length > 1 ? "s" : ""}</span>
                </div>

                <div class="history-group-card__stats">
                  <span class="history-group-card__stat">
                    <strong>${group.bestLoadEntry ? formatLoad(group.bestLoadEntry.load, group.bestLoadEntry.loadLabel) : "-"}</strong>
                    <em>PR charge</em>
                  </span>
                  <span class="history-group-card__stat">
                    <strong>${group.bestRepsEntry ? group.bestRepsEntry.reps : "-"}</strong>
                    <em>PR reps</em>
                  </span>
                </div>
              </article>
            `
          )
          .join("")}
      </div>

      ${detailGroups
        .map(
          (group) => `
            <section class="stack-sm">
              <div class="row">
                <div class="label">${group.exercise}</div>
                <div class="label">${group.slotCount} slot${group.slotCount > 1 ? "s" : ""}</div>
              </div>

              ${group.slotGroups
                .map(
                  (slotGroup) => `
                    <section class="stack-sm">
                      <div class="row">
                        <div class="label">${slotGroup.series}</div>
                        <div class="label">${slotGroup.entries.length} log${slotGroup.entries.length > 1 ? "s" : ""}</div>
                      </div>

                      ${slotGroup.entries
                        .map(
                          (item) => `
                            <article class="surface surface-pad history-card" data-accent-day="${item.day}">
                              <div class="row row-start">
                                <div class="history-card__identity">
                                  <div class="history-card__eyebrow">${item.day} - ${item.series}</div>
                                  <div class="history-card__title">${item.exercise}</div>
                                </div>
                                <div class="history-card__head-tools">
                                  <span class="pill pill--outline">${formatDate(item.date)}</span>
                                  <button class="button button--ghost button--compact" data-action="open-history-editor" data-history-index="${sortedHistory.findIndex((sortedItem) => sortedItem.key === item.key && sortedItem.date === item.date && sortedItem.series === item.series)}">
                                    Modifier
                                  </button>
                                </div>
                              </div>
                              <div class="metric-grid">
                                <div class="metric metric--history">
                                  <div class="label">Charge</div>
                                  <div class="metric__value">${formatLoad(item.load, item.loadLabel)}</div>
                                </div>
                                <div class="metric metric--history">
                                  <div class="label">Reps</div>
                                  <div class="metric__value">${item.reps}</div>
                                </div>
                              </div>
                            </article>
                          `
                        )
                        .join("")}
                    </section>
                  `
                )
                .join("")}
            </section>
          `
        )
        .join("")}
          `
          : ""
      }
    </section>
  `;
}

function renderHistory() {
  if (state.historyDetailKey) {
    return renderHistoryDetail();
  }

  return renderHistoryOverview();
}

function renderApp() {
  const isTimerEndingSoon = state.timer.active && state.timer.seconds > 0 && state.timer.seconds <= 5;
  const hideBottomNav = state.screen === "workout" && state.focusWorkoutMode;
  const screenMeta = getScreenMeta();
  const timerButtonLabel = getTimerButtonLabel(screenMeta);
  const timerProgress = getTimerProgressRatio();
  const hasTimerProgress = getTimerTotalSeconds() > 0 && state.timer.seconds > 0;
  const navItems = getNavItems();

  root.innerHTML = `
    <div class="app-shell ${hideBottomNav ? "app-shell--focus" : ""}">
      <header class="app-header">
        <div class="app-width app-header__inner">
          <div>
            <h1 class="brand">ELITE<span class="brand__accent">TRAIN</span></h1>
            <div class="screen-kicker">${screenMeta.kicker} - ${state.day}</div>
          </div>

          <button
            class="timer-button ${state.timer.active ? "is-active" : ""} ${isTimerEndingSoon ? "is-warning" : ""} ${hasTimerProgress ? "has-progress" : ""}"
            data-action="toggle-timer"
            aria-label="Pause ou reprise du timer"
            style="--timer-progress: ${timerProgress.toFixed(4)};"
          >
            <span class="timer-button__copy">
              <span class="timer-button__label">${timerButtonLabel}</span>
              <span class="timer-button__time mono">${formatTimer(state.timer.seconds)}</span>
            </span>
            <span class="timer-button__progress" aria-hidden="true">
              <span class="timer-button__progress-fill"></span>
            </span>
          </button>
        </div>
      </header>

      ${renderPwaUpdateBanner()}

      <main class="app-width page">
        ${renderBody()}
      </main>

      ${
        hideBottomNav
          ? ""
          : `
              <nav class="bottom-nav">
                <div class="bottom-nav__inner">
                  ${navItems
                    .map(
                      (item) => `
                        <button class="nav-button ${state.screen === item.screen ? "is-active" : ""}" data-screen="${item.screen}" aria-label="${item.navLabel}">
                          <span class="nav-button__icon">${renderNavIcon(item.screen)}</span>
                          <span class="nav-button__label">${item.navLabel}</span>
                        </button>
                      `
                    )
                    .join("")}
                </div>
              </nav>
            `
      }

      ${!state.onboardingCompleted ? renderOnboardingOverlay() : ""}
      ${renderRestAlertOverlay()}
      ${renderProgramTemplatePreviewOverlay()}
      ${renderHistoryEditorOverlay()}
      ${renderProgramEntryEditorOverlay()}
    </div>
  `;

  bindEvents();
  dismissBootSplash();
}

function syncTimerButtonUI() {
  const timerButton = document.querySelector(".timer-button");
  if (!timerButton) return;

  const isTimerEndingSoon = state.timer.active && state.timer.seconds > 0 && state.timer.seconds <= 5;
  const screenMeta = getScreenMeta();
  const hasTimerProgress = getTimerTotalSeconds() > 0 && state.timer.seconds > 0;

  timerButton.className = `timer-button ${state.timer.active ? "is-active" : ""} ${
    isTimerEndingSoon ? "is-warning" : ""
  } ${hasTimerProgress ? "has-progress" : ""}`.trim();
  timerButton.setAttribute(
    "aria-label",
    state.timer.seconds > 0
      ? `Timer de repos ${formatTimer(state.timer.seconds)}. ${state.timer.active ? "Mettre en pause" : "Reprendre"}`
      : "Pause ou reprise du timer"
  );
  timerButton.style.setProperty("--timer-progress", getTimerProgressRatio().toFixed(4));

  const label = timerButton.querySelector(".timer-button__label");
  const time = timerButton.querySelector(".timer-button__time");
  if (label) {
    label.textContent = getTimerButtonLabel(screenMeta);
  }
  if (time) {
    time.textContent = formatTimer(state.timer.seconds);
  }
}

restoreState();
renderApp();
registerServiceWorker();
setInterval(tickTimer, 1000);
window.addEventListener("focus", tickTimer);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    tickTimer();
  }
});
