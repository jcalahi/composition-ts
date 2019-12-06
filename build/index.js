"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reports/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('football.csv');
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv'); // using static method
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Chelsea'), new ConsoleReport_1.ConsoleReport()
// new HtmlReport()
);
// alternative using static method
// const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
