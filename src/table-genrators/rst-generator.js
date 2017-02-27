const getMax = (data, func) => {
    if (!func) {
        func = (item) => {
            return item.length;
        }
    }

    return data.reduce((firstValue, secondValue) => {
        return func(firstValue) > func(secondValue) ? firstValue : secondValue;
    });
};

const splitToLineParts = (tableData) => {
    return tableData.map((row) => {
        return row.map((cell) => {
            return ("" + cell).split("\n");
        });
    });
};

const getCellMaxSpacesLengthMap = (splitData) => {
    let cellSpacesLengthMap = [];
    splitData.forEach((row) => {
        row.forEach((cell, cellIndex) => {
            if (typeof cellSpacesLengthMap[cellIndex] === "undefined") {
                cellSpacesLengthMap[cellIndex] = 0;
            }
            let maxColLineLength = (getMax(cell).length);
            if (maxColLineLength > cellSpacesLengthMap[cellIndex]) {
                cellSpacesLengthMap[cellIndex] = maxColLineLength;
            }
        });
    });

    return cellSpacesLengthMap;
};


class RstTableGenerator {
    constructor(leftSpace = ' ', rightSpace = ' ') {
        this._leftSpace = leftSpace;
        this._rightSpace = rightSpace;
    }

    setTableData(tableData) {
        this._tableData = tableData;
        this._numCols = tableData[0].length;
        this._splitData = splitToLineParts(this.getTableData());
        this._cellSpacesLengthMap = getCellMaxSpacesLengthMap(this._splitData);
        let textTableWidth = this._cellSpacesLengthMap.reduce((a, b) => {
            return a + b;
        });

        let widthWithSpaces = this._numCols * (this._leftSpace.length + this._rightSpace.length);
        let widthWithBorders = this._numCols + 1;
        this._fullTableWidth = widthWithSpaces + textTableWidth + widthWithBorders;
        return this;
    }

    getCellSpacesLength = (colIndex) => {
        return this._cellSpacesLengthMap[colIndex];
    };

    getTableData() {
        return this._tableData;
    }

    generate(tableData) {
        if (!tableData || !tableData.length) {
            return null;
        }
        this._result = '';
        this.setTableData(tableData);

        this._splitData.forEach((row, index) => {
            this.drawLine(index == 1 ? '=' : '-')
                .moveToNewLine();
            let colLinesLength = getMax(row).length;
            for (let lineNumber = 0; lineNumber < colLinesLength; lineNumber++) {
                row.forEach((cell, cellIndex) => {
                    this.drawBorderSymbol()
                        .drawCellData(lineNumber, cell, cellIndex);
                });
                this.drawBorderSymbol()
                    .moveToNewLine();
            }

        });
        this.drawLine();
        return this._result;
    }

    drawLine = (symbol = '-') => {
        let line = '';
        this._cellSpacesLengthMap.forEach((cellSpacesLength) => {
            line += '+';
            let fullLength = cellSpacesLength + this._leftSpace.length + this._rightSpace.length;
            for (let i = 0; i < fullLength; i++) {
                line += symbol;
            }
        });
        line += '+';
        this._result+=line;
        return this;
    };

    drawCellData = (lineNumber, cell, cellIndex) => {
        let cellSpacesLength = this.getCellSpacesLength(cellIndex);

        this._result += this._leftSpace;
        if (typeof cell[lineNumber] !== "undefined") {
            for (let i = 0; i < cellSpacesLength; i++) {
                this._result += cell[lineNumber][i] || " ";
            }
        } else {
            for (let i = 0; i < cellSpacesLength; i++) {
                this._result += " ";
            }
        }
        this._result += this._rightSpace;
        return this;
    };

    drawBorderSymbol = () => {
        this._result += "|";
        return this;
    };

    moveToNewLine = () => {
        this._result += "\n";
        return this;
    };
}

export default RstTableGenerator;