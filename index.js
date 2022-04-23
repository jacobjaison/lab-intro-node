class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    const itemsLength = this.items.push(item);
    this.items.sort((a,b) => {return (a-b)});
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    }
    else {
      throw new Error('Out of Bounds');
    }      
  }

  max() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList');
    }
    else {
      return Math.max(...this.items);
    }
    
  }

  min() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList');
    }
    else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length === 0){
      return 0;
    }
    else {
      const sum = this.items.reduce((acc,val) => {
        return acc+val;
      });
      return sum;
    }   
  }

  avg() {
    if (this.length === 0 ) {
      throw new Error ('EmptySortedList');
    }
    else {
      const avg = this.items.reduce((acc,val) => {
        return (acc + val)
      },0)/this.length;
  
      return avg;
    }
   
  }
}

module.exports = SortedList;
