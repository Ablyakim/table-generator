class RstTableImporter {
    execute(tableData) {
        let tableDataLines = tableData.split("\n");
        let firstLine = tableDataLines[0];

        let cellSpacesMap = firstLine
            .substring(1, (firstLine.length - 1))
            .split('+')
            .map((item) => {
                return item.length;
            });

        let tableRow = [];
        let cells = [];
        tableDataLines.forEach((line, lineNumber) => {
            if (line[0] === '|') {
                cellSpacesMap.reduce((left, right, i) => {
                    let lineData = line.substring(left, (left + right));

                    if (typeof cells[i] === "undefined") {
                        cells[i] = [];
                    }
                    cells[i].push(lineData.trim());
                    return left + right + 1;
                }, 1);
            } else if (line[0] === '+' && lineNumber > 0) {
                tableRow.push(cells.map((cell) => {
                    return cell.join("\n");
                }));
                cells = [];
            }
        });
        return tableRow;
    }
}

export default RstTableImporter;