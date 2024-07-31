const school = {
    //PROPERTIES
    name: "Avion School",
    courseSlots: 30,
    students: 25,
    courses: ["Web Dev", "Data Science", "UX/UI"],
    //METHOD
    checkAvailability: function(name){
        return this.courseSlots - this.students;
    }
}