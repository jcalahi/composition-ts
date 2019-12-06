import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { HtmlReport } from './reports/HtmlReport';
import { ConsoleReport } from './reports/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');
const matchReader = MatchReader.fromCsv('football.csv'); // using static method
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Chelsea'),
  new ConsoleReport()
  // new HtmlReport()
);

// alternative using static method
// const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
