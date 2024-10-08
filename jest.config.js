module.exports = {
  testEnvironment: 'node', 
  verbose: true,          
  collectCoverage: true,     
  collectCoverageFrom: [
    'src/**/*.js',           
  ],
  coverageDirectory: 'coverage',  
  coverageReporters: ['html', 'text'], 
  moduleFileExtensions: ['js', 'json'], 
};
