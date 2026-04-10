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
  cycle: createDefaultCycle(),
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
  pendingAdvance: null,
  selectedChartKey: "",
  pendingSession: [],
  installHintDismissed: false,
  onboardingCompleted: false,
  onboardingStep: 0,
};

const root = document.getElementById("app");
let restAudioContext = null;
let restAudioElement = null;
let restAudioUrl = "";
let restAudioUnlocked = false;
let scheduledRestToneNodes = [];
let scheduledRestSoundTimeoutId = null;
let hasScheduledRestSound = false;

function createProgramCopy() {
  return ensureActivationSeriesForProgram(JSON.parse(JSON.stringify(PROGRAM)));
}

function createDefaultCycle() {
  return {
    goal: "hypertrophy",
    length: 6,
    week: 1,
    startedAt: new Date().toISOString(),
  };
}

function getActivationPreset(day) {
  const presets = {
    Push: {
      exercise: "Ecarte poulie",
      kind: "isolation",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 60,
      defaultLoad: 12,
      loadLabel: "12-15 kg",
    },
    Pull: {
      exercise: "Pullover poulie",
      kind: "isolation",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 60,
      defaultLoad: 20,
      loadLabel: "20 kg",
    },
    Legs: {
      exercise: "Leg curl",
      kind: "machine",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 60,
      defaultLoad: 25,
      loadLabel: "25 kg",
    },
    Upper: {
      exercise: "Ecarte poulie",
      kind: "isolation",
      targetLabel: "15",
      minReps: 15,
      maxReps: 15,
      rest: 60,
      defaultLoad: 12,
      loadLabel: "12-15 kg",
    },
  };

  return presets[day] || presets.Push;
}

function isActivationEntry(entry) {
  return String(entry?.series || "").toLowerCase().includes("activation");
}

function ensureActivationSeriesForDay(day, entries = []) {
  const activationEntries = entries.filter((entry) => isActivationEntry(entry));
  const otherEntries = entries.filter((entry) => !isActivationEntry(entry));
  const nextActivationEntries = [...activationEntries];

  while (nextActivationEntries.length < 4) {
    nextActivationEntries.push({
      ...getActivationPreset(day),
      series: `Activation ${nextActivationEntries.length + 1}`,
    });
  }

  return [...nextActivationEntries, ...otherEntries];
}

function ensureActivationSeriesForProgram(program = {}) {
  const nextProgram = {};

  Object.keys(PROGRAM).forEach((day) => {
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
  const upcoming = state.workoutFinished ? null : getActiveExercise();
  return {
    title: "Repos termine",
    text: state.workoutFinished ? "Tu peux terminer ta seance." : upcoming
      ? `Tu peux repartir sur ${upcoming.exercise} · ${upcoming.series}.`
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

  if (
    !state.restSoundEnabled ||
    !restAudioContext ||
    restAudioContext.state !== "running" ||
    secondsFromNow <= 0
  ) {
    return false;
  }

  const startAt = restAudioContext.currentTime + secondsFromNow;
  const notes = [
    { start: 0, freq: 880, duration: 0.12 },
    { start: 0.17, freq: 1174, duration: 0.18 },
  ];

  scheduledRestToneNodes = notes.map((note) => {
    const oscillator = restAudioContext.createOscillator();
    const gainNode = restAudioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(note.freq, startAt + note.start);
    gainNode.gain.setValueAtTime(0.0001, startAt + note.start);
    gainNode.gain.exponentialRampToValueAtTime(0.2, startAt + note.start + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startAt + note.start + note.duration);

    oscillator.connect(gainNode);
    gainNode.connect(restAudioContext.destination);
    oscillator.start(startAt + note.start);
    oscillator.stop(startAt + note.start + note.duration + 0.04);

    return { oscillator, gainNode };
  });

  hasScheduledRestSound = true;
  scheduledRestSoundTimeoutId = window.setTimeout(() => {
    hasScheduledRestSound = false;
    scheduledRestToneNodes = [];
    scheduledRestSoundTimeoutId = null;
  }, Math.ceil((secondsFromNow + 1) * 1000));

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

function getValidationButtonLabel(advice = getCurrentAdvice()) {
  if (!advice) return "Valider";

  const nextStep =
    advice.type === "progress"
      ? "Monter"
      : advice.type === "reduce"
      ? "Baisser"
      : "Garder";

  return `Prochaine : ${nextStep}`;
}

function syncValidationButton() {
  const button = document.getElementById("validate-set-button");
  if (!button) return;
  const label = getValidationButtonLabel();
  button.textContent = label;
  button.setAttribute("aria-label", label);
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

function buildPersistedState() {
  return {
    screen: state.screen,
    program: state.program,
    programEditorDay: state.programEditorDay,
    cycle: state.cycle,
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
    pendingAdvance: state.pendingAdvance,
    pendingSession: state.pendingSession,
    selectedChartKey: state.selectedChartKey,
    installHintDismissed: state.installHintDismissed,
    onboardingCompleted: state.onboardingCompleted,
    onboardingStep: state.onboardingStep,
  };
}

function hydrateState(parsed = {}) {
  state.program = sanitizeProgram(parsed.program);
  state.screen = parsed.screen || "dashboard";
  state.exerciseData = parsed.exerciseData || {};
  state.history = parsed.history || [];
  state.cycle = sanitizeCycle(parsed.cycle);
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
  state.pendingAdvance = sanitizePendingAdvance(parsed.pendingAdvance);
  state.pendingSession = parsed.pendingSession || [];
  state.selectedChartKey = parsed.selectedChartKey || "";
  state.installHintDismissed = Boolean(parsed.installHintDismissed);
  state.onboardingCompleted = Boolean(parsed.onboardingCompleted);
  state.onboardingStep = Math.max(0, Math.min(parsed.onboardingStep || 0, 2));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(buildPersistedState()));
}

function restoreState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    hydrateState(JSON.parse(raw));
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
  state.pendingAdvance = null;
  clearScheduledRestSound();
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

  const isLastExercise = state.currentIndex >= getExercises().length - 1;
  state.pendingAdvance = null;
  state.timer = isLastExercise
    ? { seconds: 0, active: false }
    : { seconds: active.rest, active: active.rest > 0 };
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
  state.cycle = createDefaultCycle();
  state.exerciseData = {};
  state.history = [];
  state.pendingSession = [];
  state.selectedChartKey = "";
  state.installHintDismissed = false;
  state.onboardingCompleted = false;
  state.onboardingStep = 0;
  state.restAlertVisible = false;
  state.pendingAdvance = null;
  state.restSoundEnabled = true;
  state.restVibrationEnabled = true;
  resetWorkoutState();
  state.day = "Push";
  state.screen = "dashboard";
  seedPreviewData();
  renderApp();
}

function exportBackup() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    source: "elite-train-iphone",
    data: buildPersistedState(),
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `elite-train-backup-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 0);
}

async function importBackupFromFile(file) {
  if (!file) return;

  try {
    const raw = await file.text();
    const parsed = JSON.parse(raw);
    const nextState = parsed?.data && typeof parsed.data === "object" ? parsed.data : parsed;

    if (!nextState || typeof nextState !== "object") {
      throw new Error("Backup invalide");
    }

    if (!window.confirm("Importer ce backup et remplacer les donnees actuelles ?")) {
      return;
    }

    hydrateState(nextState);
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
  state.restAlertVisible = false;
  scheduleRestSound(seconds);
  saveState();
  renderApp();
}

function triggerRestAlert(options = {}) {
  const { skipSound = false } = options;
  clearScheduledRestSound();
  state.restAlertVisible = true;
  if (!skipSound) {
    playRestSound();
  }
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

function getWeeklyPlanner(days = 7) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const counts = new Map();

  state.history.forEach((item) => {
    counts.set(getDayKey(item.date), (counts.get(getDayKey(item.date)) || 0) + 1);
  });

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (days - 1 - index));
    const key = getDayKey(date);

    return {
      key,
      label: formatWeekday(date),
      dateLabel: new Date(date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
      }),
      count: counts.get(key) || 0,
      isToday: index === days - 1,
    };
  });
}

function getGlobalRecords() {
  const numericEntries = state.history.filter((item) => isNumericLoad(item.load));
  const heaviest = numericEntries
    .slice()
    .sort((a, b) => (b.load || 0) - (a.load || 0) || b.reps - a.reps)[0] || null;
  const bestReps = state.history
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

function renderWeeklyPlanner() {
  const planner = getWeeklyPlanner();
  const resume = getSmartResumeData();

  return `
    <article class="surface surface-pad planner-shell">
      <div class="dashboard-section-head">
        <div>
          <div class="label">Planning</div>
          <h3 class="section-title dashboard-section-head__title">Semaine en cours</h3>
        </div>
        <div class="label">${getWeeklySessionCount()} seance(s)</div>
      </div>

      <div class="planner-grid">
        ${planner
          .map(
            (day) => `
              <div class="planner-day ${day.count ? "is-done" : ""} ${day.isToday ? "is-today" : ""}">
                <div class="planner-day__label">${day.label}</div>
                <div class="planner-day__count">${day.count || "—"}</div>
                <div class="planner-day__date">${day.dateLabel}</div>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="planner-note">
        <span class="planner-note__pill">${hasWorkoutInProgress() ? "A finir" : "A lancer"}</span>
        <span>${resume?.title || `Prochaine ${getNextTrainingDay()}`}</span>
      </div>
    </article>
  `;
}

function renderRecordsSection() {
  const records = getExerciseRecords();
  const { heaviest, bestReps } = getGlobalRecords();

  return `
    <section class="stack-md">
      <article class="surface surface-pad records-shell">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Records</div>
            <h3 class="section-title dashboard-section-head__title">PR et meilleures perfs</h3>
          </div>
          <div class="label">${records.length} exos</div>
        </div>

        <div class="records-summary">
          <div class="metric">
            <div class="label">Charge max</div>
            <div class="metric__value">
              ${heaviest ? formatLoad(heaviest.load, heaviest.loadLabel) : "—"}
            </div>
            <div class="records-summary__meta">
              ${heaviest ? `${shortenLabel(heaviest.exercise, 18)} · ${heaviest.reps} reps` : "Pas encore de PR"}
            </div>
          </div>
          <div class="metric">
            <div class="label">Reps max</div>
            <div class="metric__value">${bestReps ? bestReps.reps : "—"}</div>
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
                            <div class="record-card__title">${record.exercise}</div>
                            <div class="record-card__count">${record.count} serie(s)</div>
                          </div>
                          <div class="record-card__stats">
                            <span>Charge: ${formatLoad(record.bestLoad, record.bestLoadLabel)}</span>
                            <span>Reps: ${record.bestReps}</span>
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
      { phase: "Build 1", tone: "progress", focus: "Charge", target: "Petit palier", prescription: "Ajoute du poids sur les tops sets validés." },
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
      { phase: "Build 1", tone: "progress", focus: "Charge", target: "Petit palier", prescription: "Monte legerement sur les tops sets validés." },
      { phase: "Build 2", tone: "progress", focus: "Charge", target: "Top set", prescription: "Continue a charger sans perdre la vitesse de barre." },
      { phase: "Intensification", tone: "hold", focus: "Lourd propre", target: "Bas de fourchette", prescription: "Garde les accessoires simples et concentre-toi sur les mouvements forts." },
      { phase: "Pic", tone: "progress", focus: "Validation", target: "Perf", prescription: "Cherche une grosse validation sur les principaux lifts." },
      { phase: "Deload", tone: "reduce", focus: "Recup", target: "Barre facile", prescription: "Semaine legere pour absorber le bloc et repartir propre." },
    ],
    8: [
      { phase: "Technique", tone: "hold", focus: "Bar path", target: "Qualite", prescription: "Verrouille la technique et les repos sur les lifts principaux." },
      { phase: "Build 1", tone: "progress", focus: "Charge", target: "Petit palier", prescription: "Ajoute du poids progressivement sans te crisper." },
      { phase: "Build 2", tone: "progress", focus: "Charge", target: "Top set", prescription: "Continue la montée de charge sur les mouvements forts." },
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
          <h3 class="section-title dashboard-section-head__title">Semaine ${cycle.week} / ${cycle.length} · ${cycle.current.phase}</h3>
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
      ${renderWeeklyPlanner()}

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

function getFatigueProfile() {
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
    };
  }

  const recentEntries = getSortedHistory().slice(0, 12);
  const weeklySessions = getWeeklySessionCount(7);
  const recentSets = getRecentSets(7);
  const reduceSignals = recentEntries.filter(
    (entry) => getAdvice(entry.reps, entry.minReps, entry.maxReps, entry.rpe).type === "reduce"
  ).length;
  const streak = getRecentTrainingStreak(7);

  let score = 0;
  if (weeklySessions >= 4) score += 1;
  if (recentSets >= 18) score += 1;
  if (reduceSignals >= 2) score += 1;
  if (streak >= 3) score += 1;

  if (score >= 4) {
    return {
      score,
      label: "Deload",
      tone: "reduce",
      detail: "Volume charge et plusieurs signaux bas cette semaine",
      weeklySessions,
      recentSets,
      reduceSignals,
      streak,
    };
  }

  if (score >= 2) {
    return {
      score,
      label: "A surveiller",
      tone: "hold",
      detail: "Garde un peu de marge sur les gros mouvements",
      weeklySessions,
      recentSets,
      reduceSignals,
      streak,
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
  };
}

function getCoachSnapshot() {
  const resume = getSmartResumeData();
  const day = resume?.day || getNextTrainingDay();
  const cycle = getCycleSnapshot();
  const focusEntry = pickCoachFocusEntry(day);
  const fatigue = getFatigueProfile();
  const stagnation = focusEntry ? getStagnationInsight(focusEntry.key) : null;
  const focusAdvice = focusEntry
    ? getAdvice(focusEntry.reps, focusEntry.minReps, focusEntry.maxReps, focusEntry.rpe ?? 8)
    : null;

  let tone = "hold";
  let action = focusEntry ? "Garder" : "Lancer";
  let signal = focusEntry ? "Routine" : "Reference";
  let note = `Prochaine ${day}: construis une reference propre et reguliere.`;

  if (cycle.current.tone === "reduce") {
    tone = "reduce";
    action = "Deload";
    signal = cycle.current.phase;
    note = `${cycle.current.phase} sur ton bloc ${cycle.goalLabel.toLowerCase()}. ${cycle.current.prescription}`;
  } else if (fatigue.label === "Deload") {
    tone = "reduce";
    action = "Deload";
    signal = "Fatigue";
    note = `Le volume recent est charge. Sur ${day}, baisse d'un palier ou retire 1 a 2 series pour repartir propre.`;
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
    cycleLabel: `S${cycle.week}/${cycle.length} · ${cycle.current.phase}`,
    scoreText: `${fatigue.score}/4`,
    streakText: fatigue.streak ? `${fatigue.streak} j d'affilee` : "Streak calme",
  };
}

function renderCoachSection() {
  const coach = getCoachSnapshot();

  return `
    <article class="surface surface-pad coach-shell coach-shell--${coach.tone}">
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

      <div class="coach-grid">
        <div class="coach-card">
          <div class="label">Focus</div>
          <div class="coach-card__value">${coach.focus}</div>
          <div class="coach-card__meta">${coach.focusMeta}</div>
        </div>
        <div class="coach-card">
          <div class="label">Signal</div>
          <div class="coach-card__value">${coach.signal}</div>
          <div class="coach-card__meta">${coach.cycleLabel} · ${coach.streakText}</div>
        </div>
      </div>

      <div class="coach-note">${coach.note}</div>

      <div class="coach-tags">
        <span class="coach-tag">Fatigue ${coach.readiness}</span>
        <span class="coach-tag">Lecture ${coach.signal}</span>
        <span class="coach-tag">Bloc ${coach.day}</span>
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
      ${renderWeeklyPlanner()}
      ${renderCycleSection()}
      ${renderCoachSection()}

      <article class="surface surface-pad chart-shell">
        <div class="dashboard-section-head">
          <div>
            <div class="label">Progression recente</div>
            <h3 class="section-title dashboard-section-head__title">Courbe de performance</h3>
          </div>
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
              Terminer la seance
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

        <button
          id="validate-set-button"
          class="button button--primary"
          data-action="validate-set"
          aria-label="${getValidationButtonLabel(advice)}"
        >
          ${getValidationButtonLabel(advice)}
        </button>
      </div>
    </section>
  `;
}

function renderHistory() {
  if (!state.history.length) {
    return `
      <section class="stack-md">
        ${renderRecordsSection()}
        <section class="surface surface-pad">
          <div class="muted">Aucune serie enregistree.</div>
        </section>
      </section>
    `;
  }

  return `
    <section class="history-list">
      ${renderRecordsSection()}
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
        ${renderCycleSettings()}
        <article class="surface surface--soft surface-pad backup-shell">
          <div class="dashboard-section-head">
            <div>
              <div class="label">Backup</div>
              <h3 class="section-title dashboard-section-head__title">Export et import</h3>
            </div>
            <div class="label">JSON</div>
          </div>
          <div class="muted">
            Exporte toutes tes donnees en fichier pour les garder ou les remettre plus tard.
          </div>
          <div class="backup-actions">
            <button class="button button--ghost" data-action="export-backup">
              Exporter mes donnees
            </button>
            <button class="button button--primary" data-action="import-backup">
              Importer un backup
            </button>
          </div>
          <input id="backup-input" class="backup-input" type="file" accept="application/json,.json" />
        </article>
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
        if (state.timer.active) {
          scheduleRestSound(state.timer.seconds);
        } else {
          clearScheduledRestSound();
        }
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

  const repsInput = document.getElementById("reps-input");
  if (repsInput) {
    repsInput.oninput = (event) => {
      state.repsInput = event.target.value;
      saveState();
      syncValidationButton();
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

  document.ondblclick = (event) => {
    if (event.target.closest("button")) {
      event.preventDefault();
    }
  };
}

function tickTimer() {
  if (!state.timer.active || state.timer.seconds <= 0) return;
  state.timer.seconds -= 1;
  if (state.timer.seconds <= 0) {
    state.timer.seconds = 0;
    state.timer.active = false;
    triggerRestAlert({ skipSound: hasScheduledRestSound });
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
