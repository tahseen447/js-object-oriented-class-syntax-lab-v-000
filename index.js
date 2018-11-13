class BoardMember {
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training


    this.veto(){
      return 'No, I must disagree'
    }
    this.approve(){
      return 'You can do that!'
    }
    this.doCharity = function(){
      return "I like to help people."
    }

    BoardMember.prototype.releasePressStatement = function(){
      return "You will see great things from Scuber."
    }

    BoardMember.prototype.sayHi = function(){
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    }
