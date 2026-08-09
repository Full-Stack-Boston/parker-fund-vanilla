/**
 * Archive demo placeholders — real Firebase project credentials were removed
 * before making this historical alternate public.
 * Demo does not initialize Firebase.
 */
export const firebaseConfig = {
  apiKey: "AIzaSyARCHIVE_DEMO_NOT_A_REAL_KEY________",
  authDomain: "archive-demo.example.invalid",
  projectId: "parker-fund-archive-demo",
  storageBucket: "archive-demo.example.invalid",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:parker-vanilla-archive-demo",
  measurementId: "G-ARCHIVEDEMOP",
};

export function isValidFirebaseWebConfig(config) {
  if (!config || typeof config !== "object") return false;
  const required = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];
  return required.every(
    (key) => typeof config[key] === "string" && config[key].length > 0,
  );
}
