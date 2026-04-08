const STORAGE_KEY = "elite-train-iphone-v1";

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

const state = {
  screen: "dashboard",
  day: "Push",
  currentIndex: 0,
  program: createProgramCopy(),
  programEditorDay: "Push",
  exerciseData: {},
  history: [],
  timer: { seconds: 0, active: false },
  restAlertVisible: false,
  restSoundEnabled: true,
  restVibrationEnabled: true,
  rpe: 8,
  repsInput: "",
  showPlates: false,
  workoutFinished: false,
  selectedChartKey: "",
  pendingSession: [],
  installHintDismissed: false,
  onboardingCompleted: false,
  onboardingStep: 0,
};

const root = document.getElementById("app");
let restAudioContext = null;

function createProgramCopy() {
  return JSON.parse(JSON.stringify(PROGRAM));
}

function getProgramDays() {
  return Object.keys(state.program || PROGRAM);
}

function sanitizePositiveInteger(value, fallback, minimum = 1) {
  const parsed = parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(minimum, parsed);
}

function sanitizeLoadNumber(value, fallback = null) {
  if (value === "" || value === null || value === undefined) return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(0, Math.round(parsed * 100) / 100);
}

function sanitizePlainText(value, fallback) {
  const text = String(value ?? "")
    .replace(/[<>"]/g, "")
    .trim();
  return text || fallback;
}

function formatTargetLabelFromRange(minReps, maxReps) {
  return minReps === maxReps ? `${minReps}` : `${minReps}-${maxReps}`;
}

function getRestAlertCopy() {
  const upcoming = getActiveExercise();
  return {
    title: "Repos termine",
    text: upcoming
      ? `Tu peux repartir sur ${upcoming.exercise} · ${upcoming.series}.`
      : "Tu peux reprendre ton entrainement.",
  };
}

function primeAudioEngine() {
  if (!state.restSoundEnabled) return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  if (!restAudioContext) {
    restAudioContext = new AudioContextClass();
  }

  if (restAudioContext.state === "suspended") {
    restAudioContext.resume().catch(() => {});
  }
}

function playRestSound() {
  if (!state.restSoundEnabled) return;

  primeAudioEngine();
  if (!restAudioContext || restAudioContext.state !== "running") return;

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
}

function vibrateRestAlert() {
  if (!state.restVibrationEnabled) return;
  if (!("vibrate" in navigator)) return;
  navigator.vibrate([180, 70, 180]);
}

function normalizeProgramEntry(entry, fallback = {}) {
  const minReps = sanitizePositiveInteger(entry?.minReps, fallback.minReps ?? 10, 1);
  const maxReps = Math.max(
    minReps,
    sanitizePositiveInteger(entry?.maxReps, fallback.maxReps ?? Math.max(minReps, 12), minReps)
  );
  const defaultLoad = sanitizeLoadNumber(entry?.defaultLoad, fallback.defaultLoad ?? null);
  const loadLabel = sanitizePlainText(
    entry?.loadLabel,
    fallback.loadLabel || (isNumericLoad(defaultLoad) ? `${defaultLoad} kg` : "Charge libre")
  );

  return {
    exercise: sanitizePlainText(entry?.exercise, fallback.exercise || "Nouvel exercice"),
    kind: ["barbell", "machine", "dumbbell", "isolation"].includes(entry?.kind)
      ? entry.kind
      : fallback.kind || "isolation",
    series: sanitizePlainText(entry?.series, fallback.series || "Serie 1"),
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

  Object.keys(PROGRAM).forEach((day) => {
    const fallbackEntries = PROGRAM[day] || [];
    const sourceEntries = Array.isArray(program?.[day]) ? program[day] : fallbackEntries;
    nextProgram[day] = sourceEntries.map((entry, index) =>
      normalizeProgramEntry(entry, fallbackEntries[index] || fallbackEntries[fallbackEntries.length - 1] || {})
    );
  });

  return nextProgram;
}

function formatTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
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

function getChartKey() {
  return state.selectedChartKey || getHistoryKeys()[0]?.key || getExerciseKey();
}

function getChartEntries() {
  const key = getChartKey();
  if (!key) return [];
  return state.history
    .filter((item) => item.key === key)
    .slice(0, 10)
    .reverse();
}

function getChartMetric(entries) {
  return entries.some((item) => isNumericLoad(item.load)) ? "load" : "reps";
}

function getChartData() {
  const entries = getChartEntries();
  const metric = getChartMetric(entries);
  const source =
    metric === "load"
      ? entries.filter((item) => isNumericLoad(item.load))
      : entries;

  return {
    metric,
    selectedKey: getChartKey(),
    entries: source.map((item) => ({
      ...item,
      shortDate: formatDate(item.date),
      chartValue: metric === "load" ? item.load : item.reps,
    })),
  };
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      screen: state.screen,
      program: state.program,
      programEditorDay: state.programEditorDay,
      exerciseData: state.exerciseData,
      history: state.history,
      day: state.day,
      currentIndex: state.currentIndex,
      timer: state.timer,
      restAlertVisible: state.restAlertVisible,
      restSoundEnabled: state.restSoundEnabled,
      restVibrationEnabled: state.restVibrationEnabled,
      rpe: state.rpe,
      repsInput: state.repsInput,
      showPlates: state.showPlates,
      workoutFinished: state.workoutFinished,
      pendingSession: state.pendingSession,
      selectedChartKey: state.selectedChartKey,
      installHintDismissed: state.installHintDismissed,
      onboardingCompleted: state.onboardingCompleted,
      onboardingStep: state.onboardingStep,
    })
  );
}

function restoreState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.program = sanitizeProgram(parsed.program);
    state.screen = parsed.screen || "dashboard";
    state.exerciseData = parsed.exerciseData || {};
    state.history = parsed.history || [];
    state.day = getProgramDays().includes(parsed.day) ? parsed.day : "Push";
    state.programEditorDay = getProgramDays().includes(parsed.programEditorDay)
      ? parsed.programEditorDay
      : state.day;
    state.currentIndex = Math.min(
      parsed.currentIndex || 0,
      Math.max(0, (state.program[state.day] || []).length - 1)
    );
    state.timer = parsed.timer || { seconds: 0, active: false };
    state.restAlertVisible = Boolean(parsed.restAlertVisible);
    state.restSoundEnabled = parsed.restSoundEnabled ?? true;
    state.restVibrationEnabled = parsed.restVibrationEnabled ?? true;
    state.rpe = parsed.rpe ?? 8;
    state.repsInput = parsed.repsInput || "";
    state.showPlates = Boolean(parsed.showPlates);
    state.workoutFinished = Boolean(parsed.workoutFinished);
    state.pendingSession = parsed.pendingSession || [];
    state.selectedChartKey = parsed.selectedChartKey || "";
    state.installHintDismissed = Boolean(parsed.installHintDismissed);
    state.onboardingCompleted = Boolean(parsed.onboardingCompleted);
    state.onboardingStep = Math.max(0, Math.min(parsed.onboardingStep || 0, 2));
  } catch (error) {
    console.error("Erreur localStorage", error);
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
  state.showPlates = false;
  state.timer = { seconds: 0, active: false };
  state.workoutFinished = false;
}

function startWorkoutDay(day) {
  if (!getProgramDays().includes(day)) return;
  state.day = day;
  state.pendingSession = [];
  resetWorkoutState();
  state.screen = "workout";
  saveState();
  renderApp();
}

function handleValidation() {
  const active = getActiveExercise();
  const reps = parseInt(state.repsInput, 10);
  if (!active || Number.isNaN(reps) || reps <= 0) return;

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

  state.timer = { seconds: active.rest, active: true };
  state.repsInput = "";

  if (state.currentIndex < getExercises().length - 1) {
    state.currentIndex += 1;
  } else {
    state.workoutFinished = true;
    state.currentIndex = 0;
    state.timer = { seconds: 0, active: false };
  }

  saveState();
  renderApp();
}

function finalizeWorkout() {
  if (!state.pendingSession.length) {
    state.workoutFinished = false;
    state.screen = "dashboard";
    renderApp();
    return;
  }

  const nextExerciseData = { ...state.exerciseData };

  state.pendingSession.forEach((entry) => {
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

    nextExerciseData[entry.key] = {
      load: nextLoad,
      loadLabel: entry.loadLabel,
      deload,
    };
  });

  state.history = [...state.pendingSession.slice().reverse(), ...state.history];
  state.exerciseData = nextExerciseData;
  state.selectedChartKey = state.pendingSession[state.pendingSession.length - 1]?.key || "";
  state.pendingSession = [];
  state.workoutFinished = false;
  state.screen = "dashboard";
  saveState();
  renderApp();
}

function clearAllData() {
  localStorage.removeItem(STORAGE_KEY);
  state.program = createProgramCopy();
  state.programEditorDay = "Push";
  state.exerciseData = {};
  state.history = [];
  state.pendingSession = [];
  state.selectedChartKey = "";
  state.installHintDismissed = false;
  state.onboardingCompleted = false;
  state.onboardingStep = 0;
  state.restAlertVisible = false;
  state.restSoundEnabled = true;
  state.restVibrationEnabled = true;
  resetWorkoutState();
  state.day = "Push";
  state.screen = "dashboard";
  seedPreviewData();
  renderApp();
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

function updateProgramEntry(day, index, field, value) {
  const dayEntries = [...(state.program[day] || [])];
  const currentEntry = dayEntries[index];
  if (!currentEntry) return;

  const nextEntry = { ...currentEntry };

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

  dayEntries[index] = normalizeProgramEntry(nextEntry, currentEntry);
  state.program = {
    ...state.program,
    [day]: dayEntries,
  };

  saveState();
  renderApp();
}

function addProgramEntry(day) {
  const dayEntries = [...(state.program[day] || [])];
  const nextIndex = dayEntries.length + 1;
  const nextEntry = normalizeProgramEntry({
    exercise: `Nouvel exercice ${nextIndex}`,
    kind: "isolation",
    series: `Serie ${nextIndex}`,
    minReps: 10,
    maxReps: 12,
    rest: 60,
    defaultLoad: null,
    loadLabel: "Charge libre",
  });

  state.program = {
    ...state.program,
    [day]: [...dayEntries, nextEntry],
  };
  state.programEditorDay = day;
  saveState();
  renderApp();
}

function removeProgramEntry(day, index) {
  const dayEntries = [...(state.program[day] || [])];
  if (!dayEntries[index]) return;

  dayEntries.splice(index, 1);
  state.program = {
    ...state.program,
    [day]: dayEntries,
  };

  if (state.day === day && state.currentIndex >= dayEntries.length) {
    state.currentIndex = Math.max(0, dayEntries.length - 1);
  }

  saveState();
  renderApp();
}

function resetProgram() {
  state.program = createProgramCopy();
  state.programEditorDay = state.day;
  saveState();
  renderApp();
}

function toggleRestPreference(key) {
  state[key] = !state[key];
  if (key === "restSoundEnabled" && state[key]) {
    primeAudioEngine();
  }
  saveState();
  renderApp();
}

function dismissRestAlert() {
  state.restAlertVisible = false;
  saveState();
  renderApp();
}

function extendRest(seconds = 30) {
  state.timer = {
    seconds,
    active: true,
  };
  state.restAlertVisible = false;
  saveState();
  renderApp();
}

function triggerRestAlert() {
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
      <article class="onboarding-card" data-day="${state.day}">
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
    state.timer.seconds > 0
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
  if (!state.pendingSession.length) return "";

  const classes = compact
    ? "surface surface--soft surface-pad stack-sm"
    : "surface surface--soft surface-pad stack-md";

  return `
    <section class="${classes}">
      <div class="row">
        <div class="label">Seance en attente</div>
        <div class="label">${state.pendingSession.length} serie(s)</div>
      </div>
      <div class="pending-list">
        ${state.pendingSession
          .map(
            (item, index) => `
              <article class="pending-item">
                <div>
                  <div class="pending-item__title">${index + 1}. ${item.exercise}</div>
                  <div class="pending-item__meta">${item.series} · ${formatLoad(item.load, item.loadLabel)}</div>
                </div>
                <div class="pending-item__score">${item.reps} reps · RPE ${item.rpe}</div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPendingSessionSummary(compact = false) {
  const summary = getPendingAdviceSummary();
  if (!summary) return "";

  const classes = compact
    ? "surface surface--soft surface-pad stack-sm verdict-summary verdict-summary--compact"
    : "surface surface--soft surface-pad stack-md verdict-summary";

  return `
    <section class="${classes}">
      <div class="row row-start">
        <div class="stack-sm">
          <div class="label">Bilan progression</div>
          <div class="verdict-summary__headline verdict-summary__headline--${summary.latestPresentation.tone}">
            ${summary.latestPresentation.headline}
          </div>
          <div class="verdict-summary__text">${summary.latestPresentation.text}</div>
          ${
            summary.latestAdvice.fatigue
              ? `<div class="verdict-summary__fatigue">${summary.latestAdvice.fatigue}</div>`
              : ""
          }
        </div>
        <div class="verdict-summary__badge">${state.pendingSession.length} serie(s)</div>
      </div>

      <div class="verdict-summary__chips">
        <span class="verdict-chip verdict-chip--progress">Monter : ${summary.counts.progress}</span>
        <span class="verdict-chip verdict-chip--hold">Garder : ${summary.counts.hold}</span>
        <span class="verdict-chip verdict-chip--reduce">Baisser : ${summary.counts.reduce}</span>
      </div>

      <div class="verdict-summary__latest">
        Derniere serie : <strong>${summary.latestEntry.exercise}</strong> · ${summary.latestEntry.series} · ${summary.latestEntry.reps} reps
      </div>
    </section>
  `;
}

function renderPendingSessionSummary(compact = false) {
  const summary = getPendingAdviceSummary();
  if (!summary) return "";

  const classes = compact
    ? "surface surface--soft surface-pad verdict-summary verdict-summary--compact"
    : "surface surface--soft surface-pad verdict-summary";

  const verdictLabel =
    summary.latestPresentation.tone === "progress"
      ? "Valide · Monte"
      : summary.latestPresentation.tone === "reduce"
      ? "Ajuste · Baisse"
      : "Solide · Garde";

  return `
    <section class="${classes}">
      <div class="verdict-summary__row verdict-summary__row--${summary.latestPresentation.tone}">
        <span class="verdict-summary__label">Prochaine</span>
        <span class="verdict-summary__headline verdict-summary__headline--${summary.latestPresentation.tone}">
          ${verdictLabel}
        </span>
        <span class="verdict-summary__latest">
          ${summary.latestEntry.reps} reps · ${summary.latestEntry.exercise}
        </span>
      </div>
    </section>
  `;
}

function renderResumeCard() {
  if (!hasWorkoutInProgress()) return "";

  const exercises = getExercises();
  const progress = getProgressPercent();
  const headline = state.workoutFinished
    ? "Seance terminee a valider"
    : "Seance en cours";
  const detail = state.workoutFinished
    ? `${state.pendingSession.length} serie(s) pretes a etre enregistrees`
    : `${state.day} · ${Math.min(state.currentIndex + 1, exercises.length)} / ${exercises.length}`;

  return `
    <article class="surface surface-pad stack-md">
      <div class="row row-start">
        <div class="stack-sm">
          <div class="label">Reprise rapide</div>
          <h2 class="section-title">${headline}</h2>
          <div class="muted">${detail}</div>
        </div>
        <span class="pill">${state.day}</span>
      </div>

      <div class="progress-wrap">
        <div class="row">
          <div class="label">Progression</div>
          <div class="label">${progress}%</div>
        </div>
        <div class="progress">
          <div class="progress__fill" style="width:${progress}%"></div>
        </div>
      </div>

      ${state.pendingSession.length ? renderPendingSessionSummary(true) : ""}

      <div class="grid-2">
        <button class="button button--primary" data-action="resume-workout">
          Reprendre
        </button>
        <button class="button button--ghost" data-action="discard-workout">
          Annuler
        </button>
      </div>
    </article>
  `;
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

function renderChart() {
  const chart = getChartData();

  if (!chart.entries.length) {
    return `<div class="chart-empty">Pas encore de points sur cet exercice.</div>`;
  }

  const max = Math.max(...chart.entries.map((entry) => entry.chartValue), 1);

  return `
    <div class="chart-bars">
      ${chart.entries
        .map((entry) => {
          const height = Math.max(24, Math.round((entry.chartValue / max) * 118));
          return `
            <div class="chart-column">
              <div class="chart-value">${entry.chartValue}${chart.metric === "load" ? "kg" : ""}</div>
              <div
                class="chart-bar ${chart.metric === "reps" ? "chart-bar--reps" : ""}"
                style="height:${height}px"
              ></div>
              <div class="chart-date">${entry.shortDate}</div>
            </div>
          `;
        })
        .join("")}
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
          <div class="label">${chart.entries.length} points · ${chart.metric === "load" ? "charge" : "reps"}</div>
        </div>

        ${
          historyKeys.length
            ? `
                <select class="select" id="chart-select" aria-label="Choisir un exercice">
                  ${historyKeys
                    .map(
                      (item) => `
                        <option value="${item.key}" ${item.key === chart.selectedKey ? "selected" : ""}>
                          ${item.exercise} · ${item.series}
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
                <div class="day-button__arrow">›</div>
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
    state.history.map((item) => `${item.day}-${String(item.date || "").slice(0, 10)}`)
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

function getWeeklySessionCount(days = 7) {
  const now = Date.now();
  const range = days * 24 * 60 * 60 * 1000;
  const sessions = new Set();

  state.history.forEach((item) => {
    const time = new Date(item.date).getTime();
    if (Number.isFinite(time) && now - time <= range) {
      sessions.add(`${item.day}-${String(item.date || "").slice(0, 10)}`);
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
      meta: active ? `${active.exercise} · ${active.series}` : "Session en cours",
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
    subtitle: `${summary.exerciseCount} exos · ${summary.setCount} series`,
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

function renderPremiumDayList() {
  return `
    <section class="day-list">
      ${getProgramDays()
        .map(
          (day) => `
            <button class="day-button" data-day="${day}">
              <div>
                <div class="day-button__title">${day.toUpperCase()}</div>
                <div class="muted">${state.program[day].length} exercices</div>
              </div>
              <div class="day-button__arrow">â€º</div>
            </button>
          `
        )
        .join("")}
    </section>
  `;
}

function renderPremiumDashboard() {
  const chart = getChartData();
  const historyKeys = getHistoryKeys();
  const sessionCount = getSessionCount();
  const recentSets = getRecentSets();
  const uniqueExercises = new Set((state.program[state.day] || []).map((item) => item.exercise)).size;
  const heroActionLabel = hasWorkoutInProgress()
    ? "Reprendre la seance"
    : `Lancer ${state.day}`;
  const heroBadge = hasWorkoutInProgress() ? "Session active" : "Programme pret";
  const heroCopy = hasWorkoutInProgress()
    ? `Tu peux reprendre exactement la ou tu t'es arrete sur ${state.day.toUpperCase()}.`
    : `${state.day.toUpperCase()} regroupe ${uniqueExercises} exercices distincts et ${state.program[state.day].length} series programmees.`;

  return `
    <section class="stack-md">
      <article class="dashboard-hero" data-day="${state.day}">
        <div class="dashboard-hero__content">
          <div class="dashboard-hero__top">
            <span class="dashboard-hero__badge">${heroBadge}</span>
            <span class="dashboard-hero__tag">${state.day}</span>
          </div>

          <div class="dashboard-hero__copy">
            <div class="label dashboard-hero__label">Accueil premium</div>
            <h2 class="dashboard-hero__title">${state.day.toUpperCase()}</h2>
            <p class="dashboard-hero__text">${heroCopy}</p>
          </div>

          <div class="dashboard-hero__stats">
            <div class="dashboard-hero__stat">
              <span class="dashboard-hero__stat-value">${state.history.length}</span>
              <span class="dashboard-hero__stat-label">Series</span>
            </div>
            <div class="dashboard-hero__stat">
              <span class="dashboard-hero__stat-value">${sessionCount}</span>
              <span class="dashboard-hero__stat-label">Seances</span>
            </div>
            <div class="dashboard-hero__stat">
              <span class="dashboard-hero__stat-value">${recentSets}</span>
              <span class="dashboard-hero__stat-label">7 jours</span>
            </div>
          </div>

          <div class="dashboard-hero__actions">
            <button class="button button--primary" data-day="${state.day}">
              ${heroActionLabel}
            </button>
            <button class="button button--ghost" data-screen="history">
              Voir historique
            </button>
          </div>
        </div>
      </article>

      ${getInstallHintHtml()}
      ${renderResumeCard()}

      <section class="dashboard-mini-grid">
        <article class="surface dashboard-mini-card">
          <div class="label">Bloc actif</div>
          <div class="dashboard-mini-card__value">${state.day}</div>
          <div class="dashboard-mini-card__meta">${uniqueExercises} exercices distincts</div>
        </article>
        <article class="surface dashboard-mini-card">
          <div class="label">Volume recent</div>
          <div class="dashboard-mini-card__value">${recentSets}</div>
          <div class="dashboard-mini-card__meta">series sur 7 jours</div>
        </article>
      </section>

      <article class="surface surface-pad chart-shell">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Progression recente</div>
            <h3 class="section-title dashboard-section-head__title">Courbe de performance</h3>
          </div>
          <div class="label">${chart.entries.length} points · ${chart.metric === "load" ? "charge" : "reps"}</div>
        </div>

        ${
          historyKeys.length
            ? `
                <select class="select" id="chart-select" aria-label="Choisir un exercice">
                  ${historyKeys
                    .map(
                      (item) => `
                        <option value="${item.key}" ${item.key === chart.selectedKey ? "selected" : ""}>
                          ${item.exercise} · ${item.series}
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

function renderResumeCard() {
  const resume = getSmartResumeData();
  if (!resume) return "";

  return `
    <article class="surface surface-pad smart-resume">
      <div class="row row-start">
        <div class="stack-sm smart-resume__copy">
          <div class="label">Reprise intelligente</div>
          <h2 class="section-title smart-resume__title">${resume.title}</h2>
          <div class="muted">${resume.subtitle}</div>
          <div class="smart-resume__meta">
            <span class="smart-resume__chip">${resume.day}</span>
            <span class="smart-resume__chip">${resume.meta}</span>
          </div>
        </div>
        <span class="pill">${resume.mode === "active" ? "Maintenant" : "Ensuite"}</span>
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

function renderPremiumDashboard() {
  const chart = getChartData();
  const historyKeys = getHistoryKeys();
  const sessionCount = getSessionCount();
  const weeklySessions = getWeeklySessionCount();
  const recentSets = getRecentSets();
  const resume = getSmartResumeData();
  const heroDay = resume?.day || state.day;
  const heroSummary = getDaySummary(heroDay);
  const topExercise = getTopExerciseInsight();
  const trend = getTrendInsight();
  const heroActionLabel = resume?.mode === "active" ? "Reprendre la seance" : `Lancer ${heroDay}`;
  const heroActionAttrs = resume?.mode === "active"
    ? `data-action="resume-workout"`
    : `data-day="${heroDay}"`;
  const heroBadge = resume?.mode === "active" ? "Session active" : "Prochaine seance";
  const heroCopy = resume?.mode === "active"
    ? `Tu peux reprendre exactement la ou tu t'es arrete sur ${heroDay.toUpperCase()}.`
    : `${heroDay.toUpperCase()} t'attend avec ${heroSummary.exerciseCount} exercices et ${heroSummary.setCount} series bien posees.`;

  return `
    <section class="stack-md">
      <article class="dashboard-hero" data-day="${heroDay}">
        <div class="dashboard-hero__content">
          <div class="dashboard-hero__top">
            <span class="dashboard-hero__badge">${heroBadge}</span>
            <span class="dashboard-hero__tag">${heroDay}</span>
          </div>

          <div class="dashboard-hero__copy">
            <div class="label dashboard-hero__label">Accueil premium</div>
            <h2 class="dashboard-hero__title">${heroDay.toUpperCase()}</h2>
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
              Voir historique
            </button>
          </div>
        </div>
      </article>

      ${getInstallHintHtml()}
      ${renderResumeCard()}

      <section class="dashboard-mini-grid dashboard-mini-grid--insights">
        <article class="surface dashboard-mini-card">
          <div class="label">Le plus regulier</div>
          <div class="dashboard-mini-card__value dashboard-mini-card__value--text">${topExercise.value}</div>
          <div class="dashboard-mini-card__meta">${topExercise.detail}</div>
        </article>
        <article class="surface dashboard-mini-card dashboard-mini-card--trend dashboard-mini-card--${trend.tone}">
          <div class="label">Tendance</div>
          <div class="dashboard-mini-card__value">${trend.value}</div>
          <div class="dashboard-mini-card__meta">${trend.detail}</div>
        </article>
      </section>

      <article class="surface surface-pad chart-shell">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Progression recente</div>
            <h3 class="section-title dashboard-section-head__title">Courbe de performance</h3>
          </div>
          <div class="label">${chart.entries.length} points · ${chart.metric === "load" ? "charge" : "reps"}</div>
        </div>

        ${
          historyKeys.length
            ? `
                <select class="select" id="chart-select" aria-label="Choisir un exercice">
                  ${historyKeys
                    .map(
                      (item) => `
                        <option value="${item.key}" ${item.key === chart.selectedKey ? "selected" : ""}>
                          ${item.exercise} · ${item.series}
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

function renderWeightView(settings, active, last) {
  return `
    <div class="weight-card">
      ${
        settings.deload
          ? `<div class="deload-chip"><span class="pill pill--amber">Deload suggere</span></div>`
          : ""
      }
      <div class="label">Poids cible</div>
      <div class="weight-card__value">
        ${
          isNumericLoad(settings.load)
            ? `${settings.load}<span class="weight-card__unit">kg</span>`
            : `<span class="weight-card__free">${settings.loadLabel || "Charge libre"}</span>`
        }
      </div>
      <div class="goal-line">
        <span>Objectif : ${active.targetLabel} reps · Repos : ${active.rest}s</span>
      </div>
      ${
        isNumericLoad(settings.load)
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
        last
          ? `<div class="last-performance">Precedent : <strong>${last.reps} reps a ${formatLoad(last.load, last.loadLabel)}</strong></div>`
          : ""
      }
    </div>
  `;
}

function renderWorkout() {
  const active = getActiveExercise();
  const settings = getCurrentSettings();
  const last = getLastPerformance();
  const advice = getCurrentAdvice();

  if (state.workoutFinished) {
    return `
      <section class="stack-md">
        <section class="surface surface-pad-lg center-block stack-md">
          <div class="trophy">T</div>
          <div class="stack-sm">
            <h2 class="section-title">Seance terminee</h2>
            <div class="muted">
              Valide la fin de seance pour enregistrer les performances et calculer
              automatiquement les prochains poids.
            </div>
          </div>
          <div class="stack-sm">
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

  if (!active) {
    return `
      <section class="surface surface-pad">
        <div class="muted">Aucun exercice disponible pour cette journee.</div>
      </section>
    `;
  }

  return `
    <section class="surface surface-pad-lg stack-lg">
      <div class="row row-start">
        <div>
          <span class="pill">${active.series}</span>
          <h2 class="hero-title">${active.exercise}</h2>
          <div class="hero-subtitle">Exercice ${state.currentIndex + 1} sur ${getExercises().length}</div>
        </div>
        <button
          class="icon-button ${state.showPlates ? "is-active" : ""}"
          data-action="toggle-plates"
          aria-label="${state.showPlates ? "Masquer les disques" : "Afficher les disques"}"
        >
          ${state.showPlates ? "KG" : "DB"}
        </button>
      </div>

      <div class="progress-wrap">
        <div class="row">
          <div class="label">Progression seance</div>
          <div class="label">${getProgressPercent()}%</div>
        </div>
        <div class="progress">
          <div class="progress__fill" style="width:${getProgressPercent()}%"></div>
        </div>
      </div>

      ${state.showPlates ? renderPlateView(settings) : renderWeightView(settings, active, last)}

      <div class="stack-md">
        <div class="field-wrap">
          <label class="label" for="reps-input">Reps</label>
          <input
            id="reps-input"
            class="input"
            type="number"
            min="1"
            inputmode="numeric"
            placeholder="${active.targetLabel}"
            value="${state.repsInput}"
          />
        </div>

        ${renderCompactNextCue(advice)}

        <button class="button button--primary" data-action="validate-set">
          Serie terminee
        </button>
      </div>
    </section>
  `;
}

function renderHistory() {
  if (!state.history.length) {
    return `
      <section class="surface surface-pad">
        <div class="muted">Aucune serie enregistree.</div>
      </section>
    `;
  }

  return `
    <section class="history-list">
      <h2 class="section-title">Historique</h2>
      ${state.history
        .slice(0, 24)
        .map(
          (item) => `
            <article class="surface surface-pad">
              <div class="row row-start">
                <div>
                  <div class="section-title" style="font-size:22px">${item.exercise}</div>
                  <div class="label" style="margin-top:4px">${item.day} · ${item.series}</div>
                </div>
                <span class="pill pill--outline">${formatDate(item.date)}</span>
              </div>
              <div class="metric-grid">
                <div class="metric">
                  <div class="label">Charge</div>
                  <div class="metric__value">${formatLoad(item.load, item.loadLabel)}</div>
                </div>
                <div class="metric">
                  <div class="label">Reps</div>
                  <div class="metric__value">${item.reps}</div>
                </div>
              </div>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderProgramEditor() {
  const day = state.programEditorDay;
  const entries = state.program[day] || [];

  return `
    <article class="surface surface-pad stack-md program-editor">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Modifier le programme</div>
          <h3 class="section-title dashboard-section-head__title">Edition directe</h3>
        </div>
        <div class="label">Sauvegarde auto</div>
      </div>

      <div class="program-hint">
        Modifie les exercices, les reps, le repos et les charges de depart directement depuis l'iPhone.
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

      <div class="program-editor-list">
        ${
          entries.length
            ? entries
                .map(
                  (entry, index) => `
                    <article class="surface surface--soft surface-pad program-entry">
                      <div class="program-entry__head">
                        <div class="stack-sm">
                          <div class="label">Exercice ${index + 1}</div>
                          <div class="program-entry__title">${entry.exercise}</div>
                          <div class="program-entry__meta">${entry.series} · ${entry.targetLabel} reps · ${entry.rest}s</div>
                        </div>
                        <button
                          class="program-entry__remove"
                          data-action="remove-program-entry"
                          data-program-day="${day}"
                          data-program-index="${index}"
                          aria-label="Supprimer ${entry.exercise}"
                        >
                          Suppr
                        </button>
                      </div>

                      <div class="program-grid">
                        <div class="field-wrap field-wrap--wide">
                          <label class="label">Nom</label>
                          <input
                            class="input input--editor"
                            type="text"
                            value="${entry.exercise}"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="exercise"
                          />
                        </div>

                        <div class="field-wrap">
                          <label class="label">Serie</label>
                          <input
                            class="input input--editor"
                            type="text"
                            value="${entry.series}"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="series"
                          />
                        </div>

                        <div class="field-wrap">
                          <label class="label">Type</label>
                          <select
                            class="select select--editor"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="kind"
                          >
                            <option value="barbell" ${entry.kind === "barbell" ? "selected" : ""}>Barre</option>
                            <option value="machine" ${entry.kind === "machine" ? "selected" : ""}>Machine</option>
                            <option value="dumbbell" ${entry.kind === "dumbbell" ? "selected" : ""}>Halteres</option>
                            <option value="isolation" ${entry.kind === "isolation" ? "selected" : ""}>Isolation</option>
                          </select>
                        </div>

                        <div class="field-wrap">
                          <label class="label">Min reps</label>
                          <input
                            class="input input--editor"
                            type="number"
                            min="1"
                            inputmode="numeric"
                            value="${entry.minReps}"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="minReps"
                          />
                        </div>

                        <div class="field-wrap">
                          <label class="label">Max reps</label>
                          <input
                            class="input input--editor"
                            type="number"
                            min="1"
                            inputmode="numeric"
                            value="${entry.maxReps}"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="maxReps"
                          />
                        </div>

                        <div class="field-wrap">
                          <label class="label">Repos</label>
                          <input
                            class="input input--editor"
                            type="number"
                            min="0"
                            inputmode="numeric"
                            value="${entry.rest}"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="rest"
                          />
                        </div>

                        <div class="field-wrap">
                          <label class="label">Charge dep.</label>
                          <input
                            class="input input--editor"
                            type="number"
                            min="0"
                            step="0.5"
                            inputmode="decimal"
                            value="${entry.defaultLoad ?? ""}"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="defaultLoad"
                          />
                        </div>

                        <div class="field-wrap field-wrap--wide">
                          <label class="label">Libelle charge</label>
                          <input
                            class="input input--editor"
                            type="text"
                            value="${entry.loadLabel}"
                            data-program-input
                            data-program-day="${day}"
                            data-program-index="${index}"
                            data-program-field="loadLabel"
                          />
                        </div>
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

      <div class="program-actions">
        <button class="button button--primary" data-action="add-program-entry" data-program-day="${day}">
          Ajouter un exercice
        </button>
        <button class="button button--ghost" data-action="reset-program">
          Revenir au programme de base
        </button>
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

function renderSettings() {
  return `
    <section class="stack-md">
      <article class="surface surface-pad stack-md">
        <h2 class="section-title">Reglages</h2>
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
        <button class="button button--danger" data-action="clear-data">
          Reinitialiser toutes les donnees
        </button>
      </article>

      ${renderRestSettings()}
      ${renderProgramEditor()}
    </section>
  `;
}

function renderBody() {
  if (state.screen === "dashboard") return renderPremiumDashboard();
  if (state.screen === "history") return renderHistory();
  if (state.screen === "settings") return renderSettings();
  return renderWorkout();
}

function renderApp() {
  const isTimerEndingSoon = state.timer.active && state.timer.seconds > 0 && state.timer.seconds <= 5;

  root.innerHTML = `
    <div class="app-shell">
      <header class="app-header">
        <div class="app-width app-header__inner">
          <div>
            <h1 class="brand">ELITE<span class="brand__accent">TRAIN</span></h1>
            <div class="screen-kicker">${state.screen} · ${state.day}</div>
          </div>

          <button
            class="timer-button ${state.timer.active ? "is-active" : ""} ${isTimerEndingSoon ? "is-warning" : ""}"
            data-action="toggle-timer"
            aria-label="Pause ou reprise du timer"
          >
            <span>${state.timer.active ? "Pause" : "Timer"}</span>
            <span class="mono">${formatTimer(state.timer.seconds)}</span>
          </button>
        </div>
      </header>

      <main class="app-width page">
        ${renderBody()}
      </main>

      <nav class="bottom-nav">
        <div class="bottom-nav__inner">
          <button class="nav-button ${state.screen === "dashboard" ? "is-active" : ""}" data-screen="dashboard">
            Dash
          </button>
          <button class="nav-button ${state.screen === "workout" ? "is-active" : ""}" data-screen="workout">
            Train
          </button>
          <button class="nav-button ${state.screen === "history" ? "is-active" : ""}" data-screen="history">
            Hist
          </button>
          <button class="nav-button ${state.screen === "settings" ? "is-active" : ""}" data-screen="settings">
            Set
          </button>
        </div>
      </nav>

      ${!state.onboardingCompleted ? renderOnboardingOverlay() : ""}
      ${renderRestAlertOverlay()}
    </div>
  `;

  bindEvents();
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

  document.querySelectorAll("[data-day]").forEach((button) => {
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
        state.timer.active = state.timer.seconds > 0 ? !state.timer.active : false;
        saveState();
        renderApp();
      }

      if (action === "toggle-plates") {
        state.showPlates = !state.showPlates;
        saveState();
        renderApp();
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

      if (action === "discard-workout") {
        discardWorkoutProgress();
      }

      if (action === "clear-data") {
        clearAllData();
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

      if (action === "dismiss-rest-alert") {
        dismissRestAlert();
      }

      if (action === "extend-rest-30") {
        extendRest(30);
      }

      if (action === "add-program-entry") {
        addProgramEntry(button.dataset.programDay || state.programEditorDay);
      }

      if (action === "remove-program-entry") {
        removeProgramEntry(
          button.dataset.programDay || state.programEditorDay,
          Number(button.dataset.programIndex)
        );
      }

      if (action === "reset-program") {
        resetProgram();
      }

      if (action === "dismiss-install") {
        dismissInstallHint();
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

  const chartSelect = document.getElementById("chart-select");
  if (chartSelect) {
    chartSelect.onchange = (event) => {
      state.selectedChartKey = event.target.value;
      saveState();
      renderApp();
    };
  }

  const repsInput = document.getElementById("reps-input");
  if (repsInput) {
    repsInput.oninput = (event) => {
      state.repsInput = event.target.value;
      saveState();
    };
    repsInput.onkeydown = (event) => {
      if (event.key === "Enter") {
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
}

function tickTimer() {
  if (!state.timer.active || state.timer.seconds <= 0) return;
  state.timer.seconds -= 1;
  if (state.timer.seconds <= 0) {
    state.timer.seconds = 0;
    state.timer.active = false;
    triggerRestAlert();
    return;
  }
  saveState();
  renderApp();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

restoreState();
seedPreviewData();
renderApp();
registerServiceWorker();
setInterval(tickTimer, 1000);
