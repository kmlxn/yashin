import * as store from './localStore'

export function isExercisePassed ({ id, languageId }) {
  const testsResults = store.get().testsResults || [];
  const record = 
    testsResults.find(
      r => r.id === id && r.languageId === languageId
    )
    || {};
  return !!record.passed;
}

export function saveExerciseResults ({ id, passed, languageId }) {
  if (isExercisePassed({ id, languageId })) {
    return;
  }
  
  const record = { id, passed, languageId };
  const testsResults = store.get().testsResults || [];
  store.set({ testsResults: [ ...testsResults, record ] });
}