class Activity{
    constructor(id,title,description,imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    };
};
class Repositoy {
    constructor(){
        this.activities = []
        this.id = 0
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(title,description,imgUrl){
        this.id++;
        const activity = new Activity(this.id, title,description,imgUrl);
        this.activities.push(activity);
    };
    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
};
const respository = new Repositoy;
respository.createActivity("jugar","Es lindo jugar","url");
respository.createActivity("bailar","hace bien","url");
respository.createActivity("salirr","distrae la mente","url");
respository.deleteActivity(1);
console.log(respository.getAllActivities());

const alerta = function(alert) {
    alert = ("Estamos en js");
    return alert;
}
