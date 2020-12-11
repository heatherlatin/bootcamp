if (!Array.prototype.taylor) {
    Array.prototype.taylor = function () {
        this.forEach(item => console.log("Taylor likes: ", item));
    }
}