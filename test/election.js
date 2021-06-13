var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){

    it("Candidates Initialized",function(){
        return Election.deployed().then(function(instance){
            return instance.noOfCandidates();
        }).then(function(count){
            assert.equal(count,2);
        });
    });
});