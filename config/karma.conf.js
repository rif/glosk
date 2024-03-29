basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'www/lib/angular/angular.js',
  'www/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'www/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
