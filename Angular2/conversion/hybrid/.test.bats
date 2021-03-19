#!/usr/bin/env bats
DIR=$(dirname $BATS_TEST_FILENAME)

load "${NGBOOK_ROOT}/scripts/bats/fullstack.bats"
load "${NGBOOK_ROOT}/scripts/bats-support/load.bash"
load "${NGBOOK_ROOT}/scripts/bats-assert/load.bash"

@test "hybrid e2e tests pass" {
  cd $DIR
  run ./node_modules/.bin/protractor
  assert_output --partial 'SUCCESS'
}

setup() {
  echo "travis_fold:start:hybrid-tests"
  cd $DIR
  kill_by_port 8080
  kill_by_grep "live-server"
  npm run e2e:serve 3>- &
  sleep 30
  true
}

teardown() {
  cd $DIR
  kill_by_grep "live-server"
  echo "travis_fold:end:hybrid-tests"
  true
}
