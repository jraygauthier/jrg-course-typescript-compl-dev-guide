import { MatchReader } from './MatchReader';
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

/*
// Create an object that satisfiles the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
*/

/*
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
*/


/*
const dateOfFirstMatch = reader.data[0][0];
console.log(reader.data[0]);
*/

/* 2nd impl.
const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D'
};
*/

/* 1st impl.
const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';
*/

/* Moved to module.
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`)
*/
