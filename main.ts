import inquirer from "inquirer";

class Student {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

class Person {
    student: Student[] = []

    addStudent(obj: Student) {
        this.student.push(obj)
    }
}

const persons = new Person()

const programStart = async (persons: Person) => {
    while (true) {
        console.log("Welcome Guest")
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select any option do you want to talk with:",
            choices: ["Self", "Student"]
        })
        if (ans.select === "Self") {
            console.log("Hi! My name is John. How was your day?\n")
        }
        else if (ans.select === "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Select any student:",

            })
            const student = persons.student.find(val => val.name == ans.student)
            if (!student) {
                let name = new Student(ans.student)
                persons.addStudent(name)
                console.log(`Hi! My name is ${ans.student}. I am a programming student\n`)
            }
            if (student) {
                console.log(`Hi! My name is ${student.name} I am a computer science student\n`)
            }
        }
    }
}
programStart(persons)