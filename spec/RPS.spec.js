const whoWon = require('../RPS.js');

describe("whoWon", function(){

  it("Players tie with same response", function(){
    let output = whoWon("rock","rock");
    expect(output).toEqual("TIE!");
  });

  it("Player 2 wins with paper against rock", function(){
    let output = whoWon("rock","paper");
    expect(output).toEqual("Player 2 wins!");
  })

  it("Player 2 wins with scissors against paper", function(){
    let output = whoWon("paper","scissors");
    expect(output).toEqual("Player 2 wins!");
  })

  it("Player 2 wins with rock against scissors", function(){
    let output = whoWon("scissors","rock");
    expect(output).toEqual("Player 2 wins!");
  })

  it("Player 2 wins against anything other than rock, paper, or scissors", function(){
    let output = whoWon("toast","paper");
    expect(output).toEqual("Player 2 wins!");
  })

  it("Neither player wins if rock, paper, or scissors is used", function(){
    let output= whoWon("apple","table");
    expect(output).toEqual("Neither player wins!")
  })

})