var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var location1 = ["Makkah", "Madina", "Bet-ul-Maqdas", "Queta", "Misar"];
console.log("original order", location1);
var change = [location1.sort()];
console.log("alphabetical order", change);
console.log("original order", location1);
var rev = [location1.sort().reverse()];
console.log("Reverse Alphabetical order", rev);
console.log("original order", location1);
var rev1 = [location1.reverse()];
console.log("reverse order", rev1);
var rev2 = __spreadArray([], rev1, true).reverse();
console.log("it's back to priginal array", rev2);
var change1 = __spreadArray([], location1, true).sort();
console.log("again alphabetical", change1);
var rev3 = __spreadArray([], location1, true).sort().reverse();
console.log("reverse alphabetical order", rev3);
