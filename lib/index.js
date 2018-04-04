const tests = [];
let executionTimer;

function triggerExecutionAfterTimeout() {
  const TIMEOUT_BEFORE_EXECUTION = 0;

  if(executionTimer) {
    clearTimeout(executionTimer);
  }

  executionTimer = setTimeout(runner, TIMEOUT_BEFORE_EXECUTION);
}

const runner = () => reporter(tests.map(execute));

const execute = (test) => {
  try {
    test();
    return true;
  } catch(error) {
    return false;
  }
};

const reporter = (testResults) => {
  let failedTests = 0;
  let succeededTests = 0;
  testResults.forEach((test) => test ? succeededTests++ : failedTests++);

  if(testResults.indexOf(false) > -1) {
    console.log(`${failedTests} failure, ${succeededTests} pass`);
  } else {
    console.log('All tests passed');
  }
};

function registerTestAndTriggerExecution(test) {
  tests.push(test);
  triggerExecutionAfterTimeout();
}

const unit = test => registerTestAndTriggerExecution(test);
const spec = (specCallback) => specCallback();

module.exports = {
  unit,
  spec
};