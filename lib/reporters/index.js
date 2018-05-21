const reporter = (outputDevice) => {
  const successSign = '✓';
  const failureSign = 'x';

  const log = (message) => outputDevice.log(message);

  const step = (description, result, elapsedTime) => {
    const sign = result ? successSign : failureSign;

    log(`${description} => ${sign} in ${elapsedTime.toFixed(2)}ms`);
  };

  const result = (failed, succeeded) => log(`${failed} failed, ${succeeded} succeeded`);

  const newLine = () => log('\n');

  return {
    step,
    result,
    log,
    newLine
  }
};

module.exports = reporter;