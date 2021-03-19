#!/usr/bin/env bats
DIR=$(dirname $BATS_TEST_FILENAME)

load "${NGBOOK_ROOT}/scripts/bats/fullstack.bats"
load "${NGBOOK_ROOT}/scripts/bats-support/load.bash"
load "${NGBOOK_ROOT}/scripts/bats-assert/load.bash"

@test "di value e2e tests pass" {
  cd $DIR
  run ./node_modules/.bin/protractor
  assert_output --partial 'SUCCESS'
}

setup() {
  echo "travis_fold:start:di-value-tests"
  cd $DIR
  kill_by_port 8080
  kill_by_grep "webpack-dev-server"
  npm run go 3>- &
  true
}

teardown() {
  cd $DIR
  kill_by_grep "webpack-dev-server"
  echo "travis_fold:end:di-value-tests"
  true
}
