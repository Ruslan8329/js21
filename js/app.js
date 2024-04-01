/////////////////////////////////////////////////////////////////////////////////////////////////////////

class Marker {
  color;
  inkLeval;
  constructor(color, inkLeval) {
    this.color = color;
    this.inkLeval = inkLeval;
  }
  printText(text) {
    let printedText = "";

    console.log(text.length);
    for (let i = 0; i < text.length; i += 1) {
      if (text[i] !== " " && this.inkLeval >= 0.5) {
        printedText += text[i];
        this.inkLeval -= 0.5;
      }

      if (text[i] === " ") {
        printedText += " ";
      }
    }
    return `${this.inkLeval} % - color ${this.color}`;
  }

  refill(inkAmount) {
    if (inkAmount > 0) {
      this.inkLeval += inkAmount;

      console.log(`Маркер заполнен  ${this.inkLeval}`);
    } else {
      console.log(`Ошибка`);
    }
  }
}

let blueMarker = new Marker("blue", 20);

blueMarker.printText("ds rteg rtdsg sdeft");

blueMarker.refill(4);
console.log(blueMarker.inkLeval);

//////////////////////////////////////////////3//////////////////////////////////////////

class Employee {
  constructor(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
  }
}

class EmpTable {
  employye;
  constructor(employye) {
    this.employye = employye;
  }
}

let bankEmployye = [
  new Employee("Ruslan", 700, 2),
  new Employee("Ivan", 1600, 4),
  new Employee("Maqa", 1200, 3),
];

let emp = new EmpTable(bankEmployye);
console.log(emp);

/////////////////////////////////////////////////////////////

class StyledEmpTable extends EmpTable {
  constructor(employye) {
    super(employye);
  }
  getStyles() {
    return `
    <style>
     {
       border-raduis: 12px;
       background-color: black;
       width: 400px;
       color:red;
    }
      </style>`;
  }
}

let style = new StyledEmpTable(bankEmployye);
console.log(style.getStyles());
